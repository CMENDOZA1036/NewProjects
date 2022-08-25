import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'url';

function convertToPosix(path) {
  return process.platform === 'win32' ? path.replace(/\\/g, '/') : path;
}

export function findMatchingFiles(searchDirPath, fileNameRegExp, throwIfNotFound, throwIfAmbiguous) {
  const results = [];
  for (const fileName of readdirSync(searchDirPath)) {
    if (fileName.match(fileNameRegExp)) {
      results.push(convertToPosix(join(searchDirPath, fileName)));
    }
  }

  if (throwIfNotFound && results.length === 0) {
    throw new Error(`File '${fileNameRegExp}' is not found in '${searchDirPath}'`);
  }

  if (throwIfAmbiguous && results.length > 1) {
    throw new Error(`More than one file '${fileNameRegExp}' were found in '${searchDirPath}'`);
  }

  return results;
}

export function patchFile(path, patch) {
  const url = pathToFileURL(path);
  global.$_$_esm_patches = global.$_$_esm_patches || {};
  if (global.$_$_esm_patches[url]) {
    global.$_$_esm_patches[url].push(patch);
  } else {
    global.$_$_esm_patches[url] = [patch];
  }
}

export async function load(url, context, defaultLoad) {
  const result = await defaultLoad(url, context, defaultLoad);
  if (global.$_$_esm_patches && global.$_$_esm_patches[url] && result.source) {
    result.source = global.$_$_esm_patches[url].reduce((previous, current) => {
      return current(previous);
    }, result.source.toString());
  }

  return result;
}
