import {
  parse as parseUrl,
  format as formatUrl,
  fileURLToPath,
  pathToFileURL
} from 'url';

import { extname } from 'path';

function getTracer() {
  return global.$_$tracer;
}

// noinspection JSUnusedGlobalSymbols
export async function getSource(url, context, defaultGetSource) {
  const tracer = getTracer();
  if (tracer && tracer._esm) {
    const esm = tracer._esm;
    if (url === esm.scratchFileUrl) {
      return { source: esm.scratchFileContent };
    }
  }

  return defaultGetSource(url, context, defaultGetSource);
}

// ported from https://github.com/TypeStrong/ts-node/blob/main/src/esm.ts
export async function resolve(specifier, context, defaultResolve) {
  const tracer = getTracer();
  if (tracer && tracer._esm) {
    const esm = tracer._esm;
    const scratchFileUrl = esm.scratchFileUrl;

    if (specifier === scratchFileUrl) {
      return { url: scratchFileUrl, shortCircuit: true };
    }

    if (!specifier.startsWith('file:') && !specifier.startsWith('data:') && !specifier.startsWith('.')) {
      // bare import specifiers: node modules
      const localProjectDirUrl = esm.localProjectDirUrl;
      if (context.parentURL.startsWith(localProjectDirUrl)) {
        const parentURL = context.parentURL;
        try {
          return await defaultResolve(specifier, context, defaultResolve);
        } catch (error) {
          if (error.code === 'ERR_MODULE_NOT_FOUND') {
            try {
              context.parentURL = parentURL.replace(localProjectDirUrl, esm.tempDirUrl);
              return await defaultResolve(specifier, context, defaultResolve);
            } catch (error) {
              if (error.code === 'ERR_MODULE_NOT_FOUND') {
                try {
                  context.parentURL = parentURL.replace(localProjectDirUrl, esm.settingsDirUrl);
                  return await defaultResolve(specifier, context, defaultResolve);
                } catch (error) {
                  if (error.code === 'ERR_MODULE_NOT_FOUND' && esm.tsNodeResolve) {
                    context.parentURL = parentURL;
                    let url;
                    try {
                      url = esm.tsNodeResolve.defaultResolve(specifier, context, defaultResolve).url;
                    } catch (e) {                      
                    }

                    const tryTsPaths = async (error) => {
                      if (error.code === 'ERR_MODULE_NOT_FOUND') {
                        // Try and resolve with node specifier resolution
                        if (specifier.endsWith('.js')) {
                          return resolve(specifier.substring(0, specifier.length - 3), context, defaultResolve);
                        } else if (esm.tsConfigPathsMatchPath) {
                          const matchedPath = esm.tsConfigPathsMatchPath(specifier)
                          if (matchedPath) {
                            return resolve(matchedPath, context, defaultResolve);
                          } else {
                            throw error;
                          }
                        } else {
                          throw error;
                        }
                      } else {
                        throw error;
                      }
                    };

                    if (url) {
                      try {                      
                        return resolve(url, context, defaultResolve);
                      } catch (error) {
                        return tryTsPaths(error);
                      }
                    } else {
                      return tryTsPaths(error);
                    }
                  } else {
                    throw error;
                  }
                }
              } else {
                throw error;
              }
            }
          } else {
            throw error;
          }
        }
      }
    } else if (specifier.startsWith('.') || specifier.startsWith('file:')) {
      // relative or absolute specifiers: project files
      let specifierWithSession = `${specifier}?session=${global.$_$session}${Date.now()}`;
      let result;

      const tsNodeResolve = esm.tsNodeResolve;
      try {
        if (tsNodeResolve) {
          result = await tsNodeResolve.defaultResolve(specifierWithSession, context, defaultResolve);
        } else {
          result = await defaultResolve(specifierWithSession, context, defaultResolve);
        }  
      } catch (error) {
        if (tsNodeResolve && !specifier.endsWith('.js') && !specifier.endsWith('.ts')) {
          try {
            specifierWithSession = `${specifier}.ts?session=${global.$_$session}${Date.now()}`;
            result = await tsNodeResolve.defaultResolve(specifierWithSession, context, defaultResolve);
          } catch (error2) {
            throw error;
          }
        } else {
          throw error;
        }
      }
      
      tracer._doWhenReceiverIsReady(() => {
        tracer._send('module', { path: fileURLToPath(result.url) });
      });

      return { ...result, shortCircuit: true };
    }
  }

  return defaultResolve(specifier, context, defaultResolve);
}

// ported from https://github.com/TypeStrong/ts-node/blob/main/src/esm.ts
export async function getFormat(url, context, defaultGetFormat) {
  const tracer = getTracer();
  if (tracer && tracer._esm) {
    const esm = tracer._esm;

    if (url === esm.scratchFileUrl) {
      return { format: 'module' };
    }

    const tsNodeInstance = esm.tsNode;
    if (tsNodeInstance) {
      const parsedUrl = parseUrl(url);
      if (parsedUrl.protocol === null || parsedUrl.protocol === 'file:') {
        if (!parsedUrl.hostname) {
          const nativePath = fileURLToPath(url);
          // If file has .ts, .tsx, or .jsx extension, then ask node how it would treat this file if it were .js
          const ext = extname(nativePath);
          let result;
          if (ext !== '.js' && !tsNodeInstance.ignored(nativePath)) {
            result = await defaultGetFormat(formatUrl(pathToFileURL(nativePath + '.js')), context, defaultGetFormat);
          } else {
            result = await defaultGetFormat(url, context, defaultGetFormat);
          }
          // For files compiled by ts-node that node believes are either CJS or ESM, check if we should override that classification
          if (!tsNodeInstance.ignored(nativePath) && (result.format === 'commonjs' || result.format === 'module')) {
            const { moduleType } = (tsNodeInstance.moduleTypeClassifier
              .classifyModule || tsNodeInstance.moduleTypeClassifier.classifyModuleByModuleTypeOverrides)(nativePath.replace(/\\/g, '/'));
            if (moduleType === 'cjs') {
              return { format: 'commonjs' };
            } else if (moduleType === 'esm') {
              return { format: 'module' };
            }
          }
          return result;
        }
      }
    }
  }

  return defaultGetFormat(url, context, defaultGetFormat);
}

// ported from https://github.com/TypeStrong/ts-node/blob/main/src/esm.ts
export async function transformSource(source, context, defaultTransformSource) {
  const tracer = getTracer();
  if (tracer && tracer._esm) {
    const esm = tracer._esm;

    if (context.url === esm.scratchFileUrl) {
      return { source: source };
    }

    const tsNodeInstance = esm.tsNode;
    if (tsNodeInstance) {
      source = typeof source === 'string' ? source : source.toString('utf8');
      const parsedUrl = parseUrl(context.url);
      if (parsedUrl.protocol === null || parsedUrl.protocol === 'file:') {
        const nativePath = fileURLToPath(context.url);
        if (!tsNodeInstance.ignored(nativePath)) {
          return { source: tsNodeInstance.compile(source, nativePath) };
        }
      }
    }
  }

  return defaultTransformSource(source, context, defaultTransformSource);
}
