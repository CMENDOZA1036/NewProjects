var ct=Object.defineProperty;var $=(le,oe)=>ct(le,"name",{value:oe,configurable:!0});exports.id=457;exports.ids=[457];exports.modules={5186:(le,oe,w)=>{var P=w(3698),K=w(2505),G=w(6417),Y=Function.bind,I=Y.bind(Y);function re(de,z,ve){var se=I(G,null).apply(null,ve?[z,ve]:[z]);de.api={remove:se},de.remove=se,["before","error","after","wrap"].forEach(function(ge){var te=ve?[z,ge,ve]:[z,ge];de[ge]=de.api[ge]=I(K,null).apply(null,te)})}$(re,"bindApi");function V(){var de="h",z={registry:{}},ve=P.bind(null,z,de);return re(ve,z,de),ve}$(V,"HookSingular");function fe(){var de={registry:{}},z=P.bind(null,de);return re(z,de),z}$(fe,"HookCollection");var Z=!1;function ue(){return Z||(console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'),Z=!0),fe()}$(ue,"Hook"),ue.Singular=V.bind(),ue.Collection=fe.bind(),le.exports=ue,le.exports.Hook=ue,le.exports.Singular=ue.Singular,le.exports.Collection=ue.Collection},2505:le=>{le.exports=oe;function oe(w,P,K,G){var Y=G;w.registry[K]||(w.registry[K]=[]),P==="before"&&(G=$(function(I,re){return Promise.resolve().then(Y.bind(null,re)).then(I.bind(null,re))},"hook")),P==="after"&&(G=$(function(I,re){var V;return Promise.resolve().then(I.bind(null,re)).then(function(fe){return V=fe,Y(V,re)}).then(function(){return V})},"hook")),P==="error"&&(G=$(function(I,re){return Promise.resolve().then(I.bind(null,re)).catch(function(V){return Y(V,re)})},"hook")),w.registry[K].push({hook:G,orig:Y})}$(oe,"addHook")},3698:le=>{le.exports=oe;function oe(w,P,K,G){if(typeof K!="function")throw new Error("method for before hook must be a function");return G||(G={}),Array.isArray(P)?P.reverse().reduce(function(Y,I){return oe.bind(null,w,I,Y,G)},K)():Promise.resolve().then(function(){return w.registry[P]?w.registry[P].reduce(function(Y,I){return I.hook.bind(null,Y,G)},K)():K(G)})}$(oe,"register")},6417:le=>{le.exports=oe;function oe(w,P,K){if(!!w.registry[P]){var G=w.registry[P].map(function(Y){return Y.orig}).indexOf(K);G!==-1&&w.registry[P].splice(G,1)}}$(oe,"removeHook")},8026:(le,oe,w)=>{"use strict";w.r(oe),w.d(oe,{GitHubApi:()=>ee});function P(){return typeof navigator=="object"&&"userAgent"in navigator?navigator.userAgent:typeof process=="object"&&"version"in process?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}$(P,"getUserAgent");var K=w(5186);/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function G(c){return Object.prototype.toString.call(c)==="[object Object]"}$(G,"isObject");function Y(c){var n,o;return G(c)===!1?!1:(n=c.constructor,n===void 0?!0:(o=n.prototype,!(G(o)===!1||o.hasOwnProperty("isPrototypeOf")===!1)))}$(Y,"isPlainObject");function I(c){return c?Object.keys(c).reduce((n,o)=>(n[o.toLowerCase()]=c[o],n),{}):{}}$(I,"lowercaseKeys");function re(c,n){const o=Object.assign({},c);return Object.keys(n).forEach(i=>{Y(n[i])?i in c?o[i]=re(c[i],n[i]):Object.assign(o,{[i]:n[i]}):Object.assign(o,{[i]:n[i]})}),o}$(re,"mergeDeep");function V(c){for(const n in c)c[n]===void 0&&delete c[n];return c}$(V,"removeUndefinedProperties");function fe(c,n,o){if(typeof n=="string"){let[l,a]=n.split(" ");o=Object.assign(a?{method:l,url:a}:{url:l},o)}else o=Object.assign({},n);o.headers=I(o.headers),V(o),V(o.headers);const i=re(c||{},o);return c&&c.mediaType.previews.length&&(i.mediaType.previews=c.mediaType.previews.filter(l=>!i.mediaType.previews.includes(l)).concat(i.mediaType.previews)),i.mediaType.previews=i.mediaType.previews.map(l=>l.replace(/-preview/,"")),i}$(fe,"merge");function Z(c,n){const o=/\?/.test(c)?"&":"?",i=Object.keys(n);return i.length===0?c:c+o+i.map(l=>l==="q"?"q="+n.q.split("+").map(encodeURIComponent).join("+"):`${l}=${encodeURIComponent(n[l])}`).join("&")}$(Z,"addQueryParameters");const ue=/\{[^}]+\}/g;function de(c){return c.replace(/^\W+|\W+$/g,"").split(/,/)}$(de,"removeNonChars");function z(c){const n=c.match(ue);return n?n.map(de).reduce((o,i)=>o.concat(i),[]):[]}$(z,"extractUrlVariableNames");function ve(c,n){return Object.keys(c).filter(o=>!n.includes(o)).reduce((o,i)=>(o[i]=c[i],o),{})}$(ve,"omit");function se(c){return c.split(/(%[0-9A-Fa-f]{2})/g).map(function(n){return/%[0-9A-Fa-f]/.test(n)||(n=encodeURI(n).replace(/%5B/g,"[").replace(/%5D/g,"]")),n}).join("")}$(se,"encodeReserved");function ge(c){return encodeURIComponent(c).replace(/[!'()*]/g,function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})}$(ge,"encodeUnreserved");function te(c,n,o){return n=c==="+"||c==="#"?se(n):ge(n),o?ge(o)+"="+n:n}$(te,"encodeValue");function be(c){return c!=null}$(be,"isDefined");function Te(c){return c===";"||c==="&"||c==="?"}$(Te,"isKeyOperator");function Le(c,n,o,i){var l=c[o],a=[];if(be(l)&&l!=="")if(typeof l=="string"||typeof l=="number"||typeof l=="boolean")l=l.toString(),i&&i!=="*"&&(l=l.substring(0,parseInt(i,10))),a.push(te(n,l,Te(n)?o:""));else if(i==="*")Array.isArray(l)?l.filter(be).forEach(function(u){a.push(te(n,u,Te(n)?o:""))}):Object.keys(l).forEach(function(u){be(l[u])&&a.push(te(n,l[u],u))});else{const u=[];Array.isArray(l)?l.filter(be).forEach(function(d){u.push(te(n,d))}):Object.keys(l).forEach(function(d){be(l[d])&&(u.push(ge(d)),u.push(te(n,l[d].toString())))}),Te(n)?a.push(ge(o)+"="+u.join(",")):u.length!==0&&a.push(u.join(","))}else n===";"?be(l)&&a.push(ge(o)):l===""&&(n==="&"||n==="?")?a.push(ge(o)+"="):l===""&&a.push("");return a}$(Le,"getValues");function Ge(c){return{expand:qe.bind(null,c)}}$(Ge,"parseUrl");function qe(c,n){var o=["+","#",".","/",";","?","&"];return c.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(i,l,a){if(l){let d="";const g=[];if(o.indexOf(l.charAt(0))!==-1&&(d=l.charAt(0),l=l.substr(1)),l.split(/,/g).forEach(function(p){var b=/([^:\*]*)(?::(\d+)|(\*))?/.exec(p);g.push(Le(n,d,b[1],b[2]||b[3]))}),d&&d!=="+"){var u=",";return d==="?"?u="&":d!=="#"&&(u=d),(g.length!==0?d:"")+g.join(u)}else return g.join(",")}else return se(a)})}$(qe,"expand");function He(c){let n=c.method.toUpperCase(),o=(c.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),i=Object.assign({},c.headers),l,a=ve(c,["method","baseUrl","url","headers","request","mediaType"]);const u=z(o);o=Ge(o).expand(a),/^http/.test(o)||(o=c.baseUrl+o);const d=Object.keys(c).filter(b=>u.includes(b)).concat("baseUrl"),g=ve(a,d);if(!/application\/octet-stream/i.test(i.accept)&&(c.mediaType.format&&(i.accept=i.accept.split(/,/).map(b=>b.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${c.mediaType.format}`)).join(",")),c.mediaType.previews.length)){const b=i.accept.match(/[\w-]+(?=-preview)/g)||[];i.accept=b.concat(c.mediaType.previews).map(M=>{const N=c.mediaType.format?`.${c.mediaType.format}`:"+json";return`application/vnd.github.${M}-preview${N}`}).join(",")}return["GET","HEAD"].includes(n)?o=Z(o,g):"data"in g?l=g.data:Object.keys(g).length?l=g:i["content-length"]=0,!i["content-type"]&&typeof l<"u"&&(i["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(n)&&typeof l>"u"&&(l=""),Object.assign({method:n,url:o,headers:i},typeof l<"u"?{body:l}:null,c.request?{request:c.request}:null)}$(He,"parse");function J(c,n,o){return He(fe(c,n,o))}$(J,"endpointWithDefaults");function Fe(c,n){const o=fe(c,n),i=J.bind(null,o);return Object.assign(i,{DEFAULTS:o,defaults:Fe.bind(null,o),merge:fe.bind(null,o),parse:He})}$(Fe,"withDefaults");const Ee=`octokit-endpoint.js/7.0.1 ${P()}`,De=Fe(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":Ee},mediaType:{format:"",previews:[]}});var Oe=w(5568);class Ne extends Error{constructor(n){super(n),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="Deprecation"}}$(Ne,"Deprecation");var Ve=w(778),je=w.n(Ve);const Me=je()(c=>console.warn(c)),Ie=je()(c=>console.warn(c));class Se extends Error{constructor(n,o,i){super(n),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=o;let l;"headers"in i&&typeof i.headers<"u"&&(l=i.headers),"response"in i&&(this.response=i.response,l=i.response.headers);const a=Object.assign({},i.request);i.request.headers.authorization&&(a.headers=Object.assign({},i.request.headers,{authorization:i.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),a.url=a.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=a,Object.defineProperty(this,"code",{get(){return Me(new Ne("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),o}}),Object.defineProperty(this,"headers",{get(){return Ie(new Ne("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.")),l||{}}})}}$(Se,"RequestError");const ke="6.2.1";function U(c){return c.arrayBuffer()}$(U,"getBufferResponse");function he(c){const n=c.request&&c.request.log?c.request.log:console;(Y(c.body)||Array.isArray(c.body))&&(c.body=JSON.stringify(c.body));let o={},i,l;return(c.request&&c.request.fetch||globalThis.fetch||Oe.ZP)(c.url,Object.assign({method:c.method,body:c.body,headers:c.headers,redirect:c.redirect},c.request)).then(async u=>{l=u.url,i=u.status;for(const d of u.headers)o[d[0]]=d[1];if("deprecation"in o){const d=o.link&&o.link.match(/<([^>]+)>; rel="deprecation"/),g=d&&d.pop();n.warn(`[@octokit/request] "${c.method} ${c.url}" is deprecated. It is scheduled to be removed on ${o.sunset}${g?`. See ${g}`:""}`)}if(!(i===204||i===205)){if(c.method==="HEAD"){if(i<400)return;throw new Se(u.statusText,i,{response:{url:l,status:i,headers:o,data:void 0},request:c})}if(i===304)throw new Se("Not modified",i,{response:{url:l,status:i,headers:o,data:await Ue(u)},request:c});if(i>=400){const d=await Ue(u);throw new Se(xe(d),i,{response:{url:l,status:i,headers:o,data:d},request:c})}return Ue(u)}}).then(u=>({status:i,url:l,headers:o,data:u})).catch(u=>{throw u instanceof Se||u.name==="AbortError"?u:new Se(u.message,500,{request:c})})}$(he,"fetchWrapper");async function Ue(c){const n=c.headers.get("content-type");return/application\/json/.test(n)?c.json():!n||/^text\/|charset=utf-8$/.test(n)?c.text():U(c)}$(Ue,"getResponseData");function xe(c){return typeof c=="string"?c:"message"in c?Array.isArray(c.errors)?`${c.message}: ${c.errors.map(JSON.stringify).join(", ")}`:c.message:`Unknown error: ${JSON.stringify(c)}`}$(xe,"toErrorMessage");function Ae(c,n){const o=c.defaults(n);return Object.assign($(function(l,a){const u=o.merge(l,a);if(!u.request||!u.request.hook)return he(o.parse(u));const d=$((g,p)=>he(o.parse(o.merge(g,p))),"request");return Object.assign(d,{endpoint:o,defaults:Ae.bind(null,o)}),u.request.hook(d,u)},"newApi"),{endpoint:o,defaults:Ae.bind(null,o)})}$(Ae,"dist_web_withDefaults");const _e=Ae(De,{headers:{"user-agent":`octokit-request.js/${ke} ${P()}`}}),S="5.0.1";function We(c){return`Request failed due to following response errors:
`+c.errors.map(n=>` - ${n.message}`).join(`
`)}$(We,"_buildMessageForResponseErrors");class q extends Error{constructor(n,o,i){super(We(i)),this.request=n,this.headers=o,this.response=i,this.name="GraphqlResponseError",this.errors=i.errors,this.data=i.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}$(q,"GraphqlResponseError");const e=["method","baseUrl","url","headers","request","query","mediaType"],r=["query","method","url"],t=/\/api\/v3\/?$/;function s(c,n,o){if(o){if(typeof n=="string"&&"query"in o)return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));for(const u in o)if(!!r.includes(u))return Promise.reject(new Error(`[@octokit/graphql] "${u}" cannot be used as variable name`))}const i=typeof n=="string"?Object.assign({query:n},o):n,l=Object.keys(i).reduce((u,d)=>e.includes(d)?(u[d]=i[d],u):(u.variables||(u.variables={}),u.variables[d]=i[d],u),{}),a=i.baseUrl||c.endpoint.DEFAULTS.baseUrl;return t.test(a)&&(l.url=a.replace(t,"/api/graphql")),c(l).then(u=>{if(u.data.errors){const d={};for(const g of Object.keys(u.headers))d[g]=u.headers[g];throw new q(l,d,u.data)}return u.data.data})}$(s,"graphql");function h(c,n){const o=c.defaults(n);return Object.assign($((l,a)=>s(o,l,a),"newApi"),{defaults:h.bind(null,o),endpoint:_e.endpoint})}$(h,"graphql_dist_web_withDefaults");const m=h(_e,{headers:{"user-agent":`octokit-graphql.js/${S} ${P()}`},method:"POST",url:"/graphql"});function v(c){return h(c,{method:"POST",url:"/graphql"})}$(v,"withCustomRequest");const f=/^v1\./,C=/^ghs_/,R=/^ghu_/;async function A(c){const n=c.split(/\./).length===3,o=f.test(c)||C.test(c),i=R.test(c);return{type:"token",token:c,tokenType:n?"app":o?"installation":i?"user-to-server":"oauth"}}$(A,"auth");function F(c){return c.split(/\./).length===3?`bearer ${c}`:`token ${c}`}$(F,"withAuthorizationPrefix");async function x(c,n,o,i){const l=n.endpoint.merge(o,i);return l.headers.authorization=F(c),n(l)}$(x,"hook");const O=$(function(n){if(!n)throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");if(typeof n!="string")throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");return n=n.replace(/^(token|bearer) +/i,""),Object.assign(A.bind(null,n),{hook:x.bind(null,n)})},"createTokenAuth"),k="4.0.5";class E{constructor(n={}){const o=new K.Collection,i={baseUrl:_e.endpoint.DEFAULTS.baseUrl,headers:{},request:Object.assign({},n.request,{hook:o.bind(null,"request")}),mediaType:{previews:[],format:""}};if(i.headers["user-agent"]=[n.userAgent,`octokit-core.js/${k} ${P()}`].filter(Boolean).join(" "),n.baseUrl&&(i.baseUrl=n.baseUrl),n.previews&&(i.mediaType.previews=n.previews),n.timeZone&&(i.headers["time-zone"]=n.timeZone),this.request=_e.defaults(i),this.graphql=v(this.request).defaults(i),this.log=Object.assign({debug:()=>{},info:()=>{},warn:console.warn.bind(console),error:console.error.bind(console)},n.log),this.hook=o,n.authStrategy){const{authStrategy:a,...u}=n,d=a(Object.assign({request:this.request,log:this.log,octokit:this,octokitOptions:u},n.auth));o.wrap("request",d.hook),this.auth=d}else if(!n.auth)this.auth=async()=>({type:"unauthenticated"});else{const a=O(n.auth);o.wrap("request",a.hook),this.auth=a}this.constructor.plugins.forEach(a=>{Object.assign(this,a(this,n))})}static defaults(n){return $(class extends this{constructor(...i){const l=i[0]||{};if(typeof n=="function"){super(n(l));return}super(Object.assign({},n,l,l.userAgent&&n.userAgent?{userAgent:`${l.userAgent} ${n.userAgent}`}:null))}},"OctokitWithDefaults")}static plugin(...n){var o;const i=this.plugins;return o=$(class extends this{},"_a"),o.plugins=i.concat(n.filter(a=>!i.includes(a))),o}}$(E,"Octokit"),E.VERSION=k,E.plugins=[];var B=w(9496),H=w(1149),T=w(4673),_=w(9179),D=w(5396),me=w(5059),W=w(3082),ae=w(7530),ce=w(2436),Ce=w(1999),L=w(7369),Pe=w(9417),ye=w(2971),ze=w(565),Xe=w(8301),Je=Object.defineProperty,at=Object.getOwnPropertyDescriptor,lt=$((c,n,o)=>n in c?Je(c,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[n]=o,"__defNormalProp"),ne=$((c,n,o,i)=>{for(var l=i>1?void 0:i?at(n,o):n,a=c.length-1,u;a>=0;a--)(u=c[a])&&(l=(i?u(n,o,l):u(l))||l);return i&&l&&Je(n,o,l),l},"__decorateClass"),Be=$((c,n,o)=>(lt(c,typeof n!="symbol"?n+"":n,o),o),"__publicField");const $e=Object.freeze({values:[]}),Ke=Object.freeze({ranges:[]});class ee{constructor(n){Be(this,"_onDidReauthenticate",new B.EventEmitter),Be(this,"_disposable"),Be(this,"_proxyAgent",null),Be(this,"_enterpriseVersions",new Map),Be(this,"_octokits",new Map),this._disposable=B.Disposable.from(_.DN.onDidChange(o=>{(_.DN.changed(o,"proxy")||_.DN.changed(o,"outputLevel"))&&this.resetCaches()}),_.DN.onDidChangeAny(o=>{(o.affectsConfiguration("http.proxy")||o.affectsConfiguration("http.proxyStrictSSL"))&&this.resetCaches()}))}get onDidReauthenticate(){return this._onDidReauthenticate.event}dispose(){var n;(n=this._disposable)==null||n.dispose()}resetCaches(){this._proxyAgent=null,this._octokits.clear(),this._enterpriseVersions.clear()}get proxyAgent(){if(!T.$L)return this._proxyAgent===null&&(this._proxyAgent=(0,H.Nx)()),this._proxyAgent}async getAccountForCommit(n,o,i,l,a,u){var d,g;const p=(0,L.UH)();try{const b=`query getAccountForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				author {
					name
					email
					avatarUrl(size: $avatarSize)
				}
			}
		}
	}
}`,M=await this.graphql(n,o,b,{...u,owner:i,repo:l,ref:a},p),N=(g=(d=M?.repository)==null?void 0:d.object)==null?void 0:g.author;return N==null?void 0:{provider:n,name:N.name??void 0,email:N.email??void 0,avatarUrl:!N.avatarUrl||Qe(u)?N.avatarUrl??void 0:N.email&&u?.baseUrl!=null?await this.createEnterpriseAvatarUrl(n,o,u.baseUrl,N.email,u.avatarSize):void 0}}catch(b){if(b instanceof D.Ww)return;throw this.handleException(b,n,p)}}async getAccountForEmail(n,o,i,l,a,u){var d,g;const p=(0,L.UH)();try{const b=`query getAccountForEmail(
	$emailQuery: String!
	$avatarSize: Int
) {
	search(type: USER, query: $emailQuery, first: 1) {
		nodes {
			... on User {
				name
				email
				avatarUrl(size: $avatarSize)
			}
		}
	}
}`,M=await this.graphql(n,o,b,{...u,owner:i,repo:l,emailQuery:`in:email ${a}`},p),N=(g=(d=M?.search)==null?void 0:d.nodes)==null?void 0:g[0];return N==null?void 0:{provider:n,name:N.name??void 0,email:N.email??void 0,avatarUrl:!N.avatarUrl||Qe(u)?N.avatarUrl??void 0:N.email&&u?.baseUrl!=null?await this.createEnterpriseAvatarUrl(n,o,u.baseUrl,N.email,u.avatarSize):void 0}}catch(b){if(b instanceof D.Ww)return;throw this.handleException(b,n,p)}}async getDefaultBranch(n,o,i,l,a){var u,d;const g=(0,L.UH)();try{const p=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		defaultBranchRef {
			name
		}
	}
}`,b=await this.graphql(n,o,p,{...a,owner:i,repo:l},g),M=((d=(u=b?.repository)==null?void 0:u.defaultBranchRef)==null?void 0:d.name)??void 0;return M==null?void 0:{provider:n,name:M}}catch(p){if(p instanceof D.Ww)return;throw this.handleException(p,n,g)}}async getIssueOrPullRequest(n,o,i,l,a,u){var d;const g=(0,L.UH)();try{const p=`query getIssueOrPullRequest(
	$owner: String!
	$repo: String!
	$number: Int!
) {
	repository(name: $repo, owner: $owner) {
		issueOrPullRequest(number: $number) {
			__typename
			... on Issue {
				createdAt
				closed
				closedAt
				title
				url
			}
			... on PullRequest {
				createdAt
				closed
				closedAt
				title
				url
			}
		}
	}
}`,b=await this.graphql(n,o,p,{...u,owner:i,repo:l,number:a},g),M=(d=b?.repository)==null?void 0:d.issueOrPullRequest;return M==null?void 0:{provider:n,type:M.type,id:String(a),date:new Date(M.createdAt),title:M.title,closed:M.closed,closedDate:M.closedAt==null?void 0:new Date(M.closedAt),url:M.url}}catch(p){if(p instanceof D.Ww)return;throw this.handleException(p,n,g)}}async getPullRequestForBranch(n,o,i,l,a,u){var d,g,p,b;const M=(0,L.UH)();try{const N=`query getPullRequestForBranch(
	$owner: String!
	$repo: String!
	$branch: String!
	$limit: Int!
	$include: [PullRequestState!]
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		refs(query: $branch, refPrefix: "refs/heads/", first: 1) {
			nodes {
				associatedPullRequests(first: $limit, orderBy: {field: UPDATED_AT, direction: DESC}, states: $include) {
					nodes {
						author {
							login
							avatarUrl(size: $avatarSize)
							url
						}
						permalink
						number
						title
						state
						updatedAt
						closedAt
						mergedAt
						repository {
							isFork
							owner {
								login
							}
						}
					}
				}
			}
		}
	}
}`,X=await this.graphql(n,o,N,{...u,owner:i,repo:l,branch:a,limit:10},M),j=(b=(p=(g=(d=X?.repository)==null?void 0:d.refs.nodes[0])==null?void 0:g.associatedPullRequests)==null?void 0:p.nodes)==null?void 0:b.filter(Q=>Q!=null&&(!Q.repository.isFork||Q.repository.owner.login===i));return j==null||j.length===0?void 0:(j.length>1&&j.sort((Q,ie)=>(Q.repository.owner.login===i?-1:1)-(ie.repository.owner.login===i?-1:1)||(Q.state==="OPEN"?-1:1)-(ie.state==="OPEN"?-1:1)||new Date(ie.updatedAt).getTime()-new Date(Q.updatedAt).getTime()),Xe.GitHubPullRequest.from(j[0],n))}catch(N){if(N instanceof D.Ww)return;throw this.handleException(N,n,M)}}async getPullRequestForCommit(n,o,i,l,a,u){var d,g,p,b;const M=(0,L.UH)();try{const N=`query getPullRequestForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				associatedPullRequests(first: 2, orderBy: {field: UPDATED_AT, direction: DESC}) {
					nodes {
						author {
							login
							avatarUrl(size: $avatarSize)
							url
						}
						permalink
						number
						title
						state
						updatedAt
						closedAt
						mergedAt
						repository {
							isFork
							owner {
								login
							}
						}
					}
				}
			}
		}
	}
}`,X=await this.graphql(n,o,N,{...u,owner:i,repo:l,ref:a},M),j=(b=(p=(g=(d=X?.repository)==null?void 0:d.object)==null?void 0:g.associatedPullRequests)==null?void 0:p.nodes)==null?void 0:b.filter(Q=>Q!=null&&(!Q.repository.isFork||Q.repository.owner.login===i));return j==null||j.length===0?void 0:(j.length>1&&j.sort((Q,ie)=>(Q.repository.owner.login===i?-1:1)-(ie.repository.owner.login===i?-1:1)||(Q.state==="OPEN"?-1:1)-(ie.state==="OPEN"?-1:1)||new Date(ie.updatedAt).getTime()-new Date(Q.updatedAt).getTime()),Xe.GitHubPullRequest.from(j[0],n))}catch(N){if(N instanceof D.Ww)return;throw this.handleException(N,n,M)}}async getBlame(n,o,i,l,a){var u,d,g,p,b;const M=(0,L.UH)();try{const N=`query getBlameRanges(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	viewer { name }
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			...on Commit {
				blame(path: $path) {
					ranges {
						startingLine
						endingLine
						commit {
							oid
							parents(first: 3) { nodes { oid } }
							message
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								date
								email
								name
							}
						}
					}
				}
			}
		}
	}
}`,X=await this.graphql(void 0,n,N,{owner:o,repo:i,ref:l,path:a},M);if(X==null)return Ke;const j=(g=(d=(u=X.repository)==null?void 0:u.object)==null?void 0:d.blame)==null?void 0:g.ranges;return j==null||j.length===0?{ranges:[],viewer:(p=X.viewer)==null?void 0:p.name}:{ranges:j,viewer:(b=X.viewer)==null?void 0:b.name}}catch(N){if(N instanceof D.Ww)return Ke;throw this.handleException(N,void 0,M)}}async getBranches(n,o,i,l){var a;const u=(0,L.UH)();try{const d=`query getBranches(
	$owner: String!
	$repo: String!
	$branchQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $branchQuery, refPrefix: "refs/heads/", first: $limit, after: $cursor, orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					commitUrl
					...on Commit {
						authoredDate
						committedDate
					}
				}
			}
		}
	}
}`,g=await this.graphql(void 0,n,d,{owner:o,repo:i,branchQuery:l?.query,cursor:l?.cursor,limit:Math.min(100,l?.limit??100)},u);if(g==null)return $e;const p=(a=g.repository)==null?void 0:a.refs;return p==null?$e:{paging:{cursor:p.pageInfo.endCursor,more:p.pageInfo.hasNextPage},values:p.nodes}}catch(d){if(d instanceof D.Ww)return $e;throw this.handleException(d,void 0,u)}}async getCommit(n,o,i,l){var a,u,d,g,p,b,M,N,X,j;const Q=(0,L.UH)();try{const ie=await this.request(void 0,n,"GET /repos/{owner}/{repo}/commits/{ref}",{owner:o,repo:i,ref:l},Q),we=ie?.data;if(we==null)return;const{commit:Re}=we;return{oid:we.sha,parents:{nodes:we.parents.map(Ye=>({oid:Ye.sha}))},message:Re.message,additions:(a=we.stats)==null?void 0:a.additions,changedFiles:(u=we.files)==null?void 0:u.length,deletions:(d=we.stats)==null?void 0:d.deletions,author:{avatarUrl:((g=we.author)==null?void 0:g.avatar_url)??void 0,date:((p=Re.author)==null?void 0:p.date)??new Date().toString(),email:((b=Re.author)==null?void 0:b.email)??void 0,name:((M=Re.author)==null?void 0:M.name)??""},committer:{date:((N=Re.committer)==null?void 0:N.date)??new Date().toString(),email:((X=Re.committer)==null?void 0:X.email)??void 0,name:((j=Re.committer)==null?void 0:j.name)??""},files:we.files}}catch(ie){if(ie instanceof D.Ww)return;throw this.handleException(ie,void 0,Q)}}async getCommitForFile(n,o,i,l,a){if(W.p.isSha(l))return this.getCommit(n,o,i,l);const u=await this.getCommits(n,o,i,l,{limit:1,path:a});return u.values.length===0?void 0:{...await this.getCommit(n,o,i,u.values[0].oid)??u.values[0],viewer:u.viewer}}async getCommitBranches(n,o,i,l,a){var u,d;const g=(0,L.UH)();try{const p=`query getCommitBranches(
	$owner: String!
	$repo: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		refs(first: 20, refPrefix: "refs/heads/", orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			nodes {
				name
				target {
					... on Commit {
						history(first: 3, since: $since until: $until) {
							nodes { oid }
						}
					}
				}
			}
		}
	}
}`,b=await this.graphql(void 0,n,p,{owner:o,repo:i,since:a.toISOString(),until:a.toISOString()},g),M=(d=(u=b?.repository)==null?void 0:u.refs)==null?void 0:d.nodes;if(M==null)return[];const N=[];for(const X of M)for(const j of X.target.history.nodes)if(j.oid===l){N.push(X.name);break}return N}catch(p){if(p instanceof D.Ww)return[];throw this.handleException(p,void 0,g)}}async getCommitCount(n,o,i,l){var a,u;const d=(0,L.UH)();try{const g=`query getCommitCount(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: 1) {
						totalCount
					}
				}
			}
		}
	}
}`,p=await this.graphql(void 0,n,g,{owner:o,repo:i,ref:l},d);return(u=(a=p?.repository)==null?void 0:a.ref)==null?void 0:u.target.history.totalCount}catch(g){if(g instanceof D.Ww)return;throw this.handleException(g,void 0,d)}}async getCommitOnBranch(n,o,i,l,a,u){var d;const g=(0,L.UH)();try{const p=`query getCommitOnBranch(
	$owner: String!
	$repo: String!
	$ref: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: 3, since: $since until: $until) {
						nodes { oid }
					}
				}
			}
		}
	}
}`,b=await this.graphql(void 0,n,p,{owner:o,repo:i,ref:`refs/heads/${l}`,since:u.toISOString(),until:u.toISOString()},g),M=(d=b?.repository)==null?void 0:d.ref.target.history.nodes;if(M==null)return[];const N=[];for(const X of M)if(X.oid===a){N.push(l);break}return N}catch(p){if(p instanceof D.Ww)return[];throw this.handleException(p,void 0,g)}}async getCommits(n,o,i,l,a){var u,d,g,p;const b=(0,L.UH)();if(a?.limit===1&&a?.path==null)return this.getCommitsCoreSingle(n,o,i,l);try{const M=`query getCommits(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String
	$author: CommitAuthor
	$after: String
	$before: String
	$limit: Int = 100
	$since: GitTimestamp
	$until: GitTimestamp
) {
	viewer { name }
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $limit, author: $author, path: $path, after: $after, before: $before, since: $since, until: $until) {
					pageInfo {
						startCursor
						endCursor
						hasNextPage
						hasPreviousPage
					}
					nodes {
						... on Commit {
							oid
							message
							parents(first: 3) { nodes { oid } }
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								 date
								 email
								 name
							 }
						}
					}
				}
			}
		}
	}
}`;let N;if(a?.authors!=null)if(a.authors.length===1){const[Q]=a.authors;N={id:Q.id,emails:Q.email?[Q.email]:void 0}}else{const Q=a.authors.filter(ie=>ie.email).map(ie=>ie.email);N=Q.length?{emails:Q}:void 0}const X=await this.graphql(void 0,n,M,{owner:o,repo:i,ref:l,after:a?.after,before:a?.before,path:a?.path,author:N,limit:Math.min(100,a?.limit??100),since:typeof a?.since=="string"?a?.since:(u=a?.since)==null?void 0:u.toISOString(),until:typeof a?.until=="string"?a?.until:(d=a?.until)==null?void 0:d.toISOString()},b),j=(p=(g=X?.repository)==null?void 0:g.object)==null?void 0:p.history;return j==null?$e:{paging:j.pageInfo.endCursor!=null?{cursor:j.pageInfo.endCursor??void 0,more:j.pageInfo.hasNextPage}:void 0,values:j.nodes,viewer:X?.viewer.name}}catch(M){if(M instanceof D.Ww)return $e;throw this.handleException(M,void 0,b)}}async getCommitsCoreSingle(n,o,i,l){var a;const u=(0,L.UH)();try{const d=`query getCommit(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	viewer { name }
	repository(name: $repo owner: $owner) {
		object(expression: $ref) {
			...on Commit {
				oid
				parents(first: 3) { nodes { oid } }
				message
				additions
				changedFiles
				deletions
				author {
					avatarUrl
					date
					email
					name
				}
				committer {
					date
					email
					name
				}
			}
		}
	}
}`,g=await this.graphql(void 0,n,d,{owner:o,repo:i,ref:l},u);if(g==null)return $e;const p=(a=g.repository)==null?void 0:a.object;return p!=null?{values:[p],viewer:g.viewer.name}:$e}catch(d){if(d instanceof D.Ww)return $e;throw this.handleException(d,void 0,u)}}async getCommitRefs(n,o,i,l,a){var u,d;const g=(0,L.UH)();try{const p=`query getCommitRefs(
	$owner: String!
	$repo: String!
	$ref: String!
	$after: String
	$before: String
	$first: Int
	$last: Int
	$path: String
	$since: GitTimestamp
	$until: GitTimestamp
) {
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $first, last: $last, path: $path, since: $since, until: $until, after: $after, before: $before) {
					pageInfo { startCursor, endCursor, hasNextPage, hasPreviousPage }
					totalCount
					nodes { oid }
				}
			}
		}
	}
}`,b=await this.graphql(void 0,n,p,{owner:o,repo:i,ref:l,path:a?.path,first:a?.first,last:a?.last,after:a?.after,before:a?.before,since:a?.since,until:a?.until},g),M=(d=(u=b?.repository)==null?void 0:u.object)==null?void 0:d.history;return M==null?void 0:{pageInfo:M.pageInfo,totalCount:M.totalCount,values:M.nodes}}catch(p){if(p instanceof D.Ww)return;throw this.handleException(p,void 0,g)}}async getNextCommitRefs(n,o,i,l,a,u){const d=await this.getCommitDate(n,o,i,u);if(d==null)return[];let g=await this.getCommitRefs(n,o,i,l,{path:a,first:1,since:d});if(g==null)return[];const p=`${g.pageInfo.startCursor.split(" ",1)[0]} ${g.totalCount}`;let b;if([,b]=p.split(" ",2),b=Math.min(parseInt(b,10),5),g=await this.getCommitRefs(n,o,i,l,{path:a,last:b,before:p}),g==null)return[];const M=[];for(const{oid:N}of g.values){if(N===u)break;M.push(N)}return M.reverse()}async getCommitDate(n,o,i,l){var a,u;const d=(0,L.UH)();try{const g=`query getCommitDate(
	$owner: String!
	$repo: String!
	$sha: GitObjectID!
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $sha) {
			... on Commit { committer { date } }
		}
	}
}`,p=await this.graphql(void 0,n,g,{owner:o,repo:i,sha:l},d);return(u=(a=p?.repository)==null?void 0:a.object)==null?void 0:u.committer.date}catch(g){if(g instanceof D.Ww)return;throw this.handleException(g,void 0,d)}}async getContributors(n,o,i){const l=(0,L.UH)();try{const a=await this.request(void 0,n,"GET /repos/{owner}/{repo}/contributors",{owner:o,repo:i,per_page:100},l);return a?.data==null?[]:a.data}catch(a){if(a instanceof D.Ww)return[];throw this.handleException(a,void 0,l)}}async getDefaultBranchName(n,o,i){var l,a;const u=(0,L.UH)();try{const d=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		defaultBranchRef {
			name
		}
	}
}`,g=await this.graphql(void 0,n,d,{owner:o,repo:i},u);return g==null?void 0:((a=(l=g.repository)==null?void 0:l.defaultBranchRef)==null?void 0:a.name)??void 0}catch(d){if(d instanceof D.Ww)return;throw this.handleException(d,void 0,u)}}async getCurrentUser(n,o,i){var l,a,u,d;const g=(0,L.UH)();try{const p=`query getCurrentUser(
	$owner: String!
	$repo: String!
) {
	viewer { name, email, login, id }
	repository(owner: $owner, name: $repo) { viewerPermission }
}`,b=await this.graphql(void 0,n,p,{owner:o,repo:i},g);return b==null?void 0:{name:(l=b.viewer)==null?void 0:l.name,email:(a=b.viewer)==null?void 0:a.email,username:(u=b.viewer)==null?void 0:u.login,id:(d=b.viewer)==null?void 0:d.id}}catch(p){if(p instanceof D.Ww)return;throw this.handleException(p,void 0,g)}}async getRepositoryVisibility(n,o,i){var l;const a=(0,L.UH)();try{const u=`query getRepositoryVisibility(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		visibility
	}
}`,d=await this.graphql(void 0,n,u,{owner:o,repo:i},a);return((l=d?.repository)==null?void 0:l.visibility)==null?void 0:d.repository.visibility==="PUBLIC"?me.q.Public:me.q.Private}catch(u){if(u instanceof D.Ww)return;throw this.handleException(u,void 0,a)}}async getTags(n,o,i,l){var a;const u=(0,L.UH)();try{const d=`query getTags(
	$owner: String!
	$repo: String!
	$tagQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $tagQuery, refPrefix: "refs/tags/", first: $limit, after: $cursor, orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					commitUrl
					...on Commit {
						authoredDate
						committedDate
						message
					}
					...on Tag {
						message
						tagger { date }
					}
				}
			}
		}
	}
}`,g=await this.graphql(void 0,n,d,{owner:o,repo:i,tagQuery:l?.query,cursor:l?.cursor,limit:Math.min(100,l?.limit??100)},u);if(g==null)return $e;const p=(a=g.repository)==null?void 0:a.refs;return p==null?$e:{paging:{cursor:p.pageInfo.endCursor,more:p.pageInfo.hasNextPage},values:p.nodes}}catch(d){if(d instanceof D.Ww)return $e;throw this.handleException(d,void 0,u)}}async resolveReference(n,o,i,l,a){var u,d,g,p,b,M;const N=(0,L.UH)();try{if(!a){const Q=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			oid
		}
	}
}`,ie=await this.graphql(void 0,n,Q,{owner:o,repo:i,ref:l},N);return((d=(u=ie?.repository)==null?void 0:u.object)==null?void 0:d.oid)??void 0}const X=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			... on Commit {
				history(first: 1, path: $path) {
					nodes { oid }
				}
			}
		}
	}
}`,j=await this.graphql(void 0,n,X,{owner:o,repo:i,ref:l,path:a},N);return((M=(b=(p=(g=j?.repository)==null?void 0:g.object)==null?void 0:p.history.nodes)==null?void 0:b[0])==null?void 0:M.oid)??void 0}catch(X){if(X instanceof D.Ww)return;throw this.handleException(X,void 0,N)}}async searchCommits(n,o,i){const l=(0,L.UH)(),a=Math.min(100,i?.limit??100);let u,d,g;i?.cursor!=null?([u,d,g]=i.cursor.split(" ",3),u=parseInt(u,10),d=parseInt(d,10),g=parseInt(g,10)):(u=1,d=a,g=0);try{const p=await this.request(void 0,n,"GET /search/commits",{q:o,sort:i?.sort,order:i?.order,per_page:d,page:u},l),b=p?.data;if(b==null||b.items.length===0)return;const M=b.items.map(j=>{var Q,ie,we,Re,Ye,Ze,et,tt,rt,nt,it,ot,st;return{oid:j.sha,parents:{nodes:j.parents.map(ut=>({oid:ut.sha}))},message:j.commit.message,author:{avatarUrl:((Q=j.author)==null?void 0:Q.avatar_url)??void 0,date:((ie=j.commit.author)==null?void 0:ie.date)??((we=j.commit.author)==null?void 0:we.date)??new Date().toString(),email:((Re=j.author)==null?void 0:Re.email)??((Ye=j.commit.author)==null?void 0:Ye.email)??void 0,name:((Ze=j.author)==null?void 0:Ze.name)??((et=j.commit.author)==null?void 0:et.name)??""},committer:{date:((tt=j.commit.committer)==null?void 0:tt.date)??((rt=j.committer)==null?void 0:rt.date)??new Date().toString(),email:((nt=j.committer)==null?void 0:nt.email)??((it=j.commit.committer)==null?void 0:it.email)??void 0,name:((ot=j.committer)==null?void 0:ot.name)??((st=j.commit.committer)==null?void 0:st.name)??""}}}),N=g+b.items.length,X=b.incomplete_results||b.total_count>N;return{pageInfo:{startCursor:`${u} ${d} ${g}`,endCursor:X?`${u+1} ${d} ${N}`:void 0,hasPreviousPage:b.total_count>0&&u>1,hasNextPage:X},totalCount:b.total_count,values:M}}catch(p){if(p instanceof D.Ww)return;throw this.handleException(p,void 0,l)}}async getEnterpriseVersion(n,o,i){var l;let a=this._enterpriseVersions.get(o);if(a!=null)return a;if(a===null)return;const u=(0,L.UH)();try{const d=await this.request(n,o,"GET /meta",i,u),g=(l=d?.data)==null?void 0:l.installed_version;a=g?(0,ze.mL)(g):null}catch{a=null}return this._enterpriseVersions.set(o,a),a??void 0}octokit(n,o){let i=this._octokits.get(n);if(i==null){let l;if(T.$L){let a=$(function(u,d){if(d.headers!=null){const{"user-agent":g,...p}=d.headers;g&&(d.headers=p)}return(0,H.he)(u,d)},"fetchCore");l=E.defaults({auth:`token ${n}`,request:{fetch:a}})}else l=E.defaults({auth:`token ${n}`,request:{agent:this.proxyAgent}});i=new l(o),this._octokits.set(n,i),(ce.Y.logLevel===ce.i.Debug||ce.Y.isDebugging)&&i.hook.wrap("request",async(a,u)=>{const d=new Pe.u(`[GITHUB] ${u.method} ${u.url}`,{log:!1});try{return await a(u)}finally{let g;try{if(typeof u.query=="string"){const p=/(^[^({\n]+)/.exec(u.query);g=` ${p?.[1].trim()??u.query}`}}catch{}d.stop({message:g})}})}return i}async graphql(n,o,i,l,a){var u,d,g,p,b;try{return await(0,H.a_)(n?.getIgnoreSSLErrors()??!1,()=>this.octokit(o).graphql(i,l))}catch(M){if(M instanceof q){switch((d=(u=M.errors)==null?void 0:u[0])==null?void 0:d.type){case"NOT_FOUND":throw new D.Ww(M);case"FORBIDDEN":throw new D._7("github",D.Jx.Forbidden,M);case"RATE_LIMITED":{let N;const X=(g=M.headers)==null?void 0:g["x-ratelimit-reset"];throw X!=null&&(N=parseInt(X,10),Number.isNaN(N)&&(N=void 0)),new D.yx(M,o,N)}}ce.Y.isDebugging&&B.window.showErrorMessage(`GitHub request failed: ${((b=(p=M.errors)==null?void 0:p[0])==null?void 0:b.message)??M.message}`)}else M instanceof Se?this.handleRequestError(n,o,M,a):ce.Y.isDebugging&&B.window.showErrorMessage(`GitHub request failed: ${M.message}`);throw M}}async request(n,o,i,l,a){try{return await(0,H.a_)(n?.getIgnoreSSLErrors()??!1,()=>this.octokit(o).request(i,l))}catch(u){throw u instanceof Se?this.handleRequestError(n,o,u,a):ce.Y.isDebugging&&B.window.showErrorMessage(`GitHub request failed: ${u.message}`),u}}handleRequestError(n,o,i,l){var a,u,d,g,p;switch(i.status){case 404:case 410:case 422:throw new D.Ww(i);case 401:throw new D._7("github",D.Jx.Unauthorized,i);case 403:if(i.message.includes("rate limit")){let b;const M=(u=(a=i.response)==null?void 0:a.headers)==null?void 0:u["x-ratelimit-reset"];throw M!=null&&(b=parseInt(M,10),Number.isNaN(b)&&(b=void 0)),new D.yx(i,o,b)}throw new D._7("github",D.Jx.Forbidden,i);case 500:ce.Y.error(i,l),i.response!=null&&(n?.trackRequestException(),(0,Ce.vF)(`${n?.name??"GitHub"} failed to respond and might be experiencing issues.${n?.custom?"":" Please visit the [GitHub status page](https://githubstatus.com) for more information."}`));return;case 502:if(ce.Y.error(i,l),i.message.includes("timeout")){n?.trackRequestException(),(0,Ce.s$)(n?.name??"GitHub");return}break;default:if(i.status>=400&&i.status<500)throw new D.Bn(i);break}ce.Y.error(i,l),ce.Y.isDebugging&&B.window.showErrorMessage(`GitHub request failed: ${((p=(g=(d=i.response)==null?void 0:d.errors)==null?void 0:g[0])==null?void 0:p.message)??i.message}`)}handleException(n,o,i){return ce.Y.error(n,i),n instanceof D._7&&this.showAuthenticationErrorMessage(n,o),n}async showAuthenticationErrorMessage(n,o){if(n.reason===D.Jx.Unauthorized||n.reason===D.Jx.Forbidden){const i="Reauthenticate";await B.window.showErrorMessage(`${n.message}. Would you like to try reauthenticating${n.reason===D.Jx.Forbidden?" to provide additional access":""}?`,i)===i&&(await o?.reauthenticate(),this._onDidReauthenticate.fire())}else B.window.showErrorMessage(n.message)}async createEnterpriseAvatarUrl(n,o,i,l,a){a=a??16;const u=await this.getEnterpriseVersion(n,o,{baseUrl:i});if((0,ze.L5)(u,">= 3.0.0")){let d;const g=(0,ae.a)(l);g!=null&&B.Uri.parse(i).authority===g.authority&&(g.userId!=null?d=`${i}/enterprise/avatars/u/${encodeURIComponent(g.userId)}?s=${a}`:g.login!=null&&(d=`${i}/enterprise/avatars/${encodeURIComponent(g.login)}?s=${a}`)),d==null&&(d=`${i}/enterprise/avatars/u/e?email=${encodeURIComponent(l)}&s=${a}`);const p=await(0,H.a_)(n?.getIgnoreSSLErrors()??!1,()=>(0,H.he)(d,{method:"GET",headers:{Authorization:`Bearer ${o}`}}));if(p.ok){const b=(0,ye.US)(new Uint8Array(await p.arrayBuffer()));return`data:${p.headers.get("content-type")};base64,${b}`}}return`https://avatars.githubusercontent.com/u/e?email=${encodeURIComponent(l)}&s=${a}`}}$(ee,"GitHubApi"),ne([(0,L.fF)({args:{0:c=>c.name,1:"<token>"}})],ee.prototype,"getAccountForCommit",1),ne([(0,L.fF)({args:{0:c=>c.name,1:"<token>"}})],ee.prototype,"getAccountForEmail",1),ne([(0,L.fF)({args:{0:c=>c.name,1:"<token>"}})],ee.prototype,"getDefaultBranch",1),ne([(0,L.fF)({args:{0:c=>c.name,1:"<token>"}})],ee.prototype,"getIssueOrPullRequest",1),ne([(0,L.fF)({args:{0:c=>c.name,1:"<token>"}})],ee.prototype,"getPullRequestForBranch",1),ne([(0,L.fF)({args:{0:c=>c.name,1:"<token>"}})],ee.prototype,"getPullRequestForCommit",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getBlame",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getBranches",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getCommit",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getCommitForFile",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getCommitBranches",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getCommitCount",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getCommitOnBranch",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getCommits",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getCommitRefs",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getNextCommitRefs",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getContributors",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getDefaultBranchName",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getCurrentUser",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getRepositoryVisibility",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getTags",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"resolveReference",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"searchCommits",1),ne([(0,L.fF)({args:{0:"<token>"}})],ee.prototype,"getEnterpriseVersion",1);function Qe(c){return c?.baseUrl==null||c.baseUrl==="https://api.github.com"}$(Qe,"isGitHubDotCom")},3333:(le,oe,w)=>{"use strict";w.r(oe),w.d(oe,{GitHubGitProvider:()=>S});var P=w(9496),K=w(7267),G=w(9179),Y=w(1045),I=w(313),re=w(2721),V=w(5396),fe=w(6532),Z=w(5059),ue=w(2324),de=w(2742),z=w(8031),ve=w(9735),se=w(3901),ge=w(4905),te=w(3082),be=w(2804),Te=w(8991),Le=w(3492),Ge=w(6016),qe=w(5731),He=w(3969),J=w(2436),Fe=w(5861),y=w(7369),Ee=w(2886),pe=w(516),De=w(680),Oe=w(2378);async function Ne(q){try{const e=P.extensions.getExtension("ms-vscode.remote-repositories")??P.extensions.getExtension("GitHub.remotehub");if(e==null)throw J.Y.log("GitHub Repositories extension is not installed or enabled"),new V.R5("GitHub Repositories","GitHub.remotehub");return e.isActive?e.exports:await e.activate()}catch(e){if(J.Y.error(e,"Unable to get required api from the GitHub Repositories extension"),e instanceof V.R5,q)return;throw e}}$(Ne,"getRemoteHubApi");var Ve=(q=>(q[q.Branch=0]="Branch",q[q.RemoteBranch=1]="RemoteBranch",q[q.Tag=2]="Tag",q[q.Commit=3]="Commit",q))(Ve||{}),je=(q=>(q[q.Branch=0]="Branch",q[q.Tag=1]="Tag",q[q.Commit=2]="Commit",q[q.PullRequest=3]="PullRequest",q[q.Tree=4]="Tree",q))(je||{}),Me=w(8301),Ie=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,ke=$((q,e,r)=>e in q?Ie(q,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):q[e]=r,"__defNormalProp"),U=$((q,e,r,t)=>{for(var s=t>1?void 0:t?Se(e,r):e,h=q.length-1,m;h>=0;h--)(m=q[h])&&(s=(t?m(e,r,s):m(s))||s);return t&&s&&Ie(e,r,s),s},"__decorateClass"),he=$((q,e,r)=>(ke(q,typeof e!="symbol"?e+"":e,r),r),"__publicField");const Ue=Object.freeze({values:[]}),xe=Promise.resolve(void 0),Ae=["repo","read:user","user:email"],_e=/^[^/](?!.*\/\.)(?!.*\.\.)(?!.*\/\/)(?!.*@\{)[^\000-\037\177 ~^:?*[\\]+[^./]$/;class S{constructor(e){this.container=e,he(this,"descriptor",{id:Z.p.GitHub,name:"GitHub",virtual:!0}),he(this,"supportedSchemes",new Set([Y.sN.Virtual,Y.sN.GitHub,Y.sN.PRs])),he(this,"_onDidChangeRepository",new P.EventEmitter),he(this,"_onDidCloseRepository",new P.EventEmitter),he(this,"_onDidOpenRepository",new P.EventEmitter),he(this,"_branchesCache",new Map),he(this,"_repoInfoCache",new Map),he(this,"_tagsCache",new Map),he(this,"_disposables",[]),he(this,"_github"),he(this,"_remotehub"),he(this,"_remotehubPromise"),he(this,"_sessionPromise")}get onDidChangeRepository(){return this._onDidChangeRepository.event}get onDidCloseRepository(){return this._onDidCloseRepository.event}get onDidOpenRepository(){return this._onDidOpenRepository.event}dispose(){this._disposables.forEach(e=>void e.dispose())}onRepositoryChanged(e,r){this._branchesCache.delete(e.path),this._tagsCache.delete(e.path),this._repoInfoCache.delete(e.path),this._onDidChangeRepository.fire(r)}async discoverRepositories(e){if(!this.supportedSchemes.has(e.scheme))return[];try{const{remotehub:r}=await this.ensureRepositoryContext(e.toString(),!0),t=r.getVirtualWorkspaceUri(e);return t==null?[]:this.openRepository(void 0,t,!0)}catch{return[]}}updateContext(){(0,I.v)(Y.zf.HasVirtualFolders,this.container.git.hasOpenRepositories(this.descriptor.id))}openRepository(e,r,t,s,h){return[new Te._j(this.container,this.onRepositoryChanged.bind(this),this.descriptor,e,r,t,s??!P.window.state.focused,h)]}async supports(e){switch(e){case fe.A.Stashes:case fe.A.Worktrees:return!1;default:return!0}}async visibility(e){const r=await this.getRemotes(e);if(r.length===0)return Z.q.Local;const t=r.find(s=>s.name==="origin");return t!=null?this.getRemoteVisibility(t):Z.q.Private}async getRemoteVisibility(e){var r;switch((r=e.provider)==null?void 0:r.id){case"github":{const{github:t,metadata:s,session:h}=await this.ensureRepositoryContext(e.repoPath);return await t.getRepositoryVisibility(h.accessToken,s.repo.owner,s.repo.name)??Z.q.Private}default:return Z.q.Private}}async getOpenScmRepositories(){return[]}async getScmRepository(e){}async getOrOpenScmRepository(e){}canHandlePathOrUri(e,r){if(!!this.supportedSchemes.has(e))return typeof r=="string"?r:r.toString()}getAbsoluteUri(e,r){if(typeof r=="string")if((0,pe.tE)(r))r=P.Uri.parse(r,!0);else throw P.window.showErrorMessage(`Unable to get absolute uri between ${typeof e=="string"?e:e.toString(!0)} and ${r}; Base path '${r}' must be a uri`),new Error(`Base path '${r}' must be a uri`);if(typeof e=="string"&&!(0,pe.tE)(e)&&!(0,pe.YP)(e))return P.Uri.joinPath(r,(0,pe.AH)(e));const t=this.getRelativePath(e,r);return P.Uri.joinPath(r,t)}async getBestRevisionUri(e,r,t){return t?this.createProviderUri(e,t,r):this.createVirtualUri(e,t,r)}getRelativePath(e,r){if(typeof r=="string")if((0,pe.tE)(r))r=P.Uri.parse(r,!0);else throw P.window.showErrorMessage(`Unable to get relative path between ${typeof e=="string"?e:e.toString(!0)} and ${r}; Base path '${r}' must be a uri`),new Error(`Base path '${r}' must be a uri`);let t;if(typeof e=="string")if((0,pe.tE)(e))e=P.Uri.parse(e,!0);else return e=(0,pe.AH)(e),t=(0,pe.YP)(e)&&e.startsWith(r.path)?e.slice(r.path.length):e,t.charCodeAt(0)===Y.mN.Slash&&(t=t.slice(1)),t;return t=(0,pe.AH)((0,pe.Gf)(r.path.slice(1),e.path.slice(1))),t}getRevisionUri(e,r,t){const s=this.createProviderUri(e,t,r);return t===te.p.deletedOrMissing?s.with({query:"~"}):s}async getWorkingUri(e,r){return this.createVirtualUri(e,void 0,r.path)}async addRemote(e,r,t){}async pruneRemote(e,r){}async applyChangesToWorkingFile(e,r,t){}async branchContainsCommit(e,r,t){return!1}async checkout(e,r,t){}resetCaches(...e){(e.length===0||e.includes("branches"))&&this._branchesCache.clear(),(e.length===0||e.includes("tags"))&&this._tagsCache.clear(),e.length===0&&this._repoInfoCache.clear()}async excludeIgnoredUris(e,r){return r}async fetch(e,r){}async findRepositoryUri(e,r){const t=(0,y.UH)();try{return(await this.ensureRemoteHubApi()).getProviderRootUri(e).with({scheme:Y.sN.Virtual})}catch(s){s instanceof V.R5,J.Y.error(s,t);return}}async getAheadBehindCommitCount(e,r){}async getBlame(e,r){const t=(0,y.UH)();if(r?.isDirty)return;let s="blame";e.sha!=null&&(s+=`:${e.sha}`);const h=await this.container.tracker.getOrAdd(e);if(h.state!=null){const v=h.state.getBlame(s);if(v!=null)return J.Y.debug(t,`Cache hit: '${s}'`),v.item}J.Y.debug(t,`Cache miss: '${s}'`),h.state==null&&(h.state=new Oe.p2);const m=this.getBlameCore(e,h,s,t);if(h.state!=null){J.Y.debug(t,`Cache add: '${s}'`);const v={item:m};h.state.setBlame(s,v)}return m}async getBlameCore(e,r,t,s){var h,m;try{const v=await this.ensureRepositoryContext(e.repoPath);if(v==null)return;const{metadata:f,github:C,remotehub:R,session:A}=v,F=R.getVirtualUri(R.getProviderRootUri(e)),x=this.getRelativePath(e,F);if(e.scheme===Y.sN.Virtual){const[_,D]=await Promise.allSettled([P.workspace.fs.stat(e),P.workspace.fs.stat(e.with({scheme:Y.sN.GitHub}))]);if(_.status!=="fulfilled"||D.status!=="fulfilled"||_.value.mtime!==D.value.mtime)return}const O=!e.sha||e.sha==="HEAD"?(await f.getRevision()).revision:e.sha,k=await C.getBlame(A.accessToken,f.repo.owner,f.repo.name,O,x),E=new Map,B=new Map,H=[];for(const _ of k.ranges){const D=_.commit,{viewer:me=A.account.label}=k,W=me!=null&&D.author.name===me?"You":D.author.name,ae=me!=null&&D.committer.name===me?"You":D.committer.name;let ce=E.get(W);ce==null&&(ce={name:W,lineCount:0},E.set(W,ce)),ce.lineCount+=_.endingLine-_.startingLine+1;let Ce=B.get(D.oid);Ce==null&&(Ce=new z.aM(this.container,e.repoPath,D.oid,new z._j(W,D.author.email,new Date(D.author.date),D.author.avatarUrl),new z._j(ae,D.committer.email,new Date(D.author.date)),D.message.split(`
`,1)[0],(h=D.parents.nodes[0])!=null&&h.oid?[(m=D.parents.nodes[0])==null?void 0:m.oid]:[],D.message,new se.K8(F.toString(),x,se.NV.Modified),{changedFiles:D.changedFiles??0,additions:D.additions??0,deletions:D.deletions??0},[]),B.set(D.oid,Ce));for(let L=_.startingLine;L<=_.endingLine;L++){const Pe={sha:D.oid,originalLine:L,line:L};Ce.lines.push(Pe),H[L-1]=Pe}}const T=new Map([...E.entries()].sort((_,D)=>D[1].lineCount-_[1].lineCount));return{repoPath:e.repoPath,authors:T,commits:B,lines:H}}catch(v){if(r.state!=null&&!String(v).includes("No provider registered with")){const f=v?.toString()??"";J.Y.debug(s,`Cache replace (with empty promise): '${t}'`);const C={item:xe,errorMessage:f};return r.state.setBlame(t,C),r.setBlameFailure(),xe}return}}async getBlameContents(e,r){}async getBlameForLine(e,r,t,s){var h,m;const v=(0,y.UH)();if(!t?.isDirty){if(!s?.forceSingleLine){const f=await this.getBlame(e);if(f==null)return;let C=f.lines[r];if(C==null){if(f.lines.length!==r)return;C=f.lines[r-1]}const R=f.commits.get(C.sha);return R==null?void 0:{author:{...f.authors.get(R.author.name),lineCount:R.lines.length},commit:R,line:C}}try{const f=await this.ensureRepositoryContext(e.repoPath);if(f==null)return;const{metadata:C,github:R,remotehub:A,session:F}=f,x=A.getVirtualUri(A.getProviderRootUri(e)),O=this.getRelativePath(e,x),k=!e.sha||e.sha==="HEAD"?(await C.getRevision()).revision:e.sha,E=await R.getBlame(F.accessToken,C.repo.owner,C.repo.name,k,O),B=r+1,H=E.ranges.find(ae=>ae.startingLine===B);if(H==null)return;const T=H.commit,{viewer:_=F.account.label}=E,D=_!=null&&T.author.name===_?"You":T.author.name,me=_!=null&&T.committer.name===_?"You":T.committer.name,W=new z.aM(this.container,e.repoPath,T.oid,new z._j(D,T.author.email,new Date(T.author.date),T.author.avatarUrl),new z._j(me,T.committer.email,new Date(T.author.date)),T.message.split(`
`,1)[0],(h=T.parents.nodes[0])!=null&&h.oid?[(m=T.parents.nodes[0])==null?void 0:m.oid]:[],T.message,new se.K8(x.toString(),O,se.NV.Modified),{changedFiles:T.changedFiles??0,additions:T.additions??0,deletions:T.deletions??0},[]);for(let ae=H.startingLine;ae<=H.endingLine;ae++){const ce={sha:T.oid,originalLine:ae,line:ae};W.lines.push(ce)}return{author:{name:D,lineCount:H.endingLine-H.startingLine+1},commit:W,line:{sha:T.oid,originalLine:H.startingLine,line:H.startingLine}}}catch(f){J.Y.error(v,f);return}}}async getBlameForLineContents(e,r,t,s){}async getBlameForRange(e,r){const t=await this.getBlame(e);if(t!=null)return this.getBlameRange(t,e,r)}async getBlameForRangeContents(e,r,t){const s=await this.getBlameContents(e,t);if(s!=null)return this.getBlameRange(s,e,r)}getBlameRange(e,r,t){if(e.lines.length===0)return{allLines:e.lines,...e};if(t.start.line===0&&t.end.line===e.lines.length-1)return{allLines:e.lines,...e};const s=e.lines.slice(t.start.line,t.end.line+1),h=new Set(s.map(A=>A.sha)),m=t.start.line+1,v=t.end.line+1,f=new Map,C=new Map;for(const A of e.commits.values()){if(!h.has(A.sha))continue;const F=A.with({lines:A.lines.filter(O=>O.line>=m&&O.line<=v)});C.set(A.sha,F);let x=f.get(F.author.name);x==null&&(x={name:F.author.name,lineCount:0},f.set(x.name,x)),x.lineCount+=F.lines.length}const R=new Map([...f.entries()].sort((A,F)=>F[1].lineCount-A[1].lineCount));return{repoPath:r.repoPath,authors:R,commits:C,lines:s,allLines:e.lines}}async getBranch(e){const{values:[r]}=await this.getBranches(e,{filter:t=>t.current});return r}async getBranches(e,r){if(e==null)return Ue;const t=(0,y.UH)();let s=r?.cursor?void 0:this._branchesCache.get(e);if(s==null){async function m(){var v;try{const{metadata:f,github:C,session:R}=await this.ensureRepositoryContext(e),A=await f.getRevision(),F=A.type===0?A.name:void 0,x=[];let O=r?.cursor;const k=O==null;for(;;){const E=await C.getBranches(R.accessToken,f.repo.owner,f.repo.name,{cursor:O});for(const B of E.values){const H=new Date(G.DN.get("advanced.commitOrdering")==="author-date"?B.target.authoredDate:B.target.committedDate),T=B.target.oid;x.push(new de.XI(e,B.name,!1,B.name===F,H,T,{name:`origin/${B.name}`,missing:!1}),new de.XI(e,`origin/${B.name}`,!0,!1,H,T))}if(!((v=E.paging)!=null&&v.more)||!k)return{...E,values:x};O=E.paging.cursor}}catch(f){return J.Y.error(f,t),this._branchesCache.delete(e),Ue}}$(m,"load"),s=m.call(this),r?.cursor==null&&this._branchesCache.set(e,s)}let h=await s;return r?.filter!=null&&(h={...h,values:h.values.filter(r.filter)}),r?.sort!=null&&(0,de.YF)(h.values,typeof r.sort=="boolean"?void 0:r.sort),h}async getChangedFilesCount(e,r){if(!r)return;const t=await this.getCommit(e,r);if(t?.stats==null)return;const{stats:s}=t,h=typeof s.changedFiles=="number"?s.changedFiles:s.changedFiles.added+s.changedFiles.changed+s.changedFiles.deleted;return{additions:s.additions,deletions:s.deletions,changedFiles:h}}async getCommit(e,r){var t;if(e==null)return;const s=(0,y.UH)();try{const{metadata:h,github:m,session:v}=await this.ensureRepositoryContext(e),f=await m.getCommit(v.accessToken,h.repo.owner,h.repo.name,r);if(f==null)return;const{viewer:C=v.account.label}=f,R=C!=null&&f.author.name===C?"You":f.author.name,A=C!=null&&f.committer.name===C?"You":f.committer.name;return new z.aM(this.container,e,f.oid,new z._j(R,f.author.email,new Date(f.author.date),f.author.avatarUrl),new z._j(A,f.committer.email,new Date(f.committer.date)),f.message.split(`
`,1)[0],f.parents.nodes.map(F=>F.oid),f.message,((t=f.files)==null?void 0:t.map(F=>new se.K8(e,F.filename??"",(0,Me.fromCommitFileStatus)(F.status)??se.NV.Modified,F.previous_filename,void 0,{additions:F.additions??0,deletions:F.deletions??0,changes:F.changes??0})))??[],{changedFiles:f.changedFiles??0,additions:f.additions??0,deletions:f.deletions??0},[])}catch(h){J.Y.error(h,s);return}}async getCommitBranches(e,r,t){if(e==null||t?.commitDate==null)return[];const s=(0,y.UH)();try{const{metadata:h,github:m,session:v}=await this.ensureRepositoryContext(e);let f;return t?.branch?f=await m.getCommitOnBranch(v.accessToken,h.repo.owner,h.repo.name,t?.branch,r,t?.commitDate):f=await m.getCommitBranches(v.accessToken,h.repo.owner,h.repo.name,r,t?.commitDate),f}catch(h){return J.Y.error(h,s),[]}}async getCommitCount(e,r){if(e==null)return;const t=(0,y.UH)();try{const{metadata:s,github:h,session:m}=await this.ensureRepositoryContext(e);return await h.getCommitCount(m?.accessToken,s.repo.owner,s.repo.name,r)}catch(s){J.Y.error(s,t);return}}async getCommitForFile(e,r,t){var s;if(e==null)return;const h=(0,y.UH)();try{const{metadata:m,github:v,remotehub:f,session:C}=await this.ensureRepositoryContext(e),R=this.getRelativePath(r,f.getProviderRootUri(r)),A=!t?.ref||t.ref==="HEAD"?(await m.getRevision()).revision:t.ref,F=await v.getCommitForFile(C.accessToken,m.repo.owner,m.repo.name,A,R);if(F==null)return;const{viewer:x=C.account.label}=F,O=x!=null&&F.author.name===x?"You":F.author.name,k=x!=null&&F.committer.name===x?"You":F.committer.name,E=(s=F.files)==null?void 0:s.map(H=>new se.K8(e,H.filename??"",(0,Me.fromCommitFileStatus)(H.status)??se.NV.Modified,H.previous_filename,void 0,{additions:H.additions??0,deletions:H.deletions??0,changes:H.changes??0})),B=E?.find(H=>H.path===R);return new z.aM(this.container,e,F.oid,new z._j(O,F.author.email,new Date(F.author.date),F.author.avatarUrl),new z._j(k,F.committer.email,new Date(F.committer.date)),F.message.split(`
`,1)[0],F.parents.nodes.map(H=>H.oid),F.message,{file:B,files:E},{changedFiles:F.changedFiles??0,additions:F.additions??0,deletions:F.deletions??0},[])}catch(m){J.Y.error(m,h);return}}async getCommitsForGraph(e,r,t){var s,h;const[m,v,f,C]=await Promise.allSettled([this.getLog(e,{all:!0,ordering:"date",limit:t?.limit}),this.getBranch(e),this.getRemotes(e),this.getTags(e)]);return this.getCommitsForGraphCore(e,r,(0,De.Sb)(m),(0,De.Sb)(v),(s=(0,De.Sb)(f))==null?void 0:s[0],(h=(0,De.Sb)(C))==null?void 0:h.values,t)}async getCommitsForGraphCore(e,r,t,s,h,m,v){var f,C,R,A,F;if(t==null)return{repoPath:e,rows:[]};const x=(C=((f=t.pagedCommits)==null?void 0:f.call(t))??t.commits)==null?void 0:C.values();if(x==null)return{repoPath:e,rows:[]};const O=[];let k,E,B;const H=s?.sha!=null&&h!=null;for(const T of x)H&&T.sha===s.sha?(k=[{name:s.name,isCurrentHead:!0}],E=[{name:s.name,owner:h.name,url:h.url,avatarUrl:(A=((R=h.provider)==null?void 0:R.avatarUri)??(0,be.dM)(this.container,h,r))==null?void 0:A.toString(!0)}]):(k=[],E=[]),m!=null?B=[...(0,Ee.DZ)(m,_=>{if(_.sha===T.sha)return{name:_.name,annotated:Boolean(_.message)}})]:B=[],O.push({sha:T.sha,parents:T.parents,author:T.author.name,avatarUrl:(F=await T.getAvatarUri())==null?void 0:F.toString(!0),email:T.author.email??"",date:T.committer.date.getTime(),message:(0,re.X)(T.message&&String(T.message).length?T.message:T.summary),type:T.parents.length>1?ge.e.MergeCommit:ge.e.Commit,heads:k,remotes:E,tags:B});return{repoPath:e,paging:{limit:t.limit,endingCursor:t.endingCursor,startingCursor:t.startingCursor,more:t.hasMore},rows:O,more:async T=>{var _;const D=await((_=t.more)==null?void 0:_.call(t,T));return this.getCommitsForGraphCore(e,r,D,s,h,m,v)}}}async getOldestUnpushedRefForFile(e,r){}async getContributors(e,r){if(e==null)return[];const t=(0,y.UH)();try{const{metadata:s,github:h,session:m}=await this.ensureRepositoryContext(e),v=await h.getContributors(m.accessToken,s.repo.owner,s.repo.name),f=await this.getCurrentUser(e),C=[];for(const R of v)R.type==="User"&&C.push(new ve.V(e,R.name,R.email,R.contributions,void 0,(0,Ge.o)(f,R.name,R.email,R.login),void 0,R.login,R.avatar_url,R.node_id));return C}catch(s){return J.Y.error(s,t),[]}}async getCurrentUser(e){if(!e)return;const r=(0,y.UH)(),t=this._repoInfoCache.get(e);let s=t?.user;if(s!=null)return s;if(s!==null)try{const{metadata:h,github:m,session:v}=await this.ensureRepositoryContext(e);return s=await m.getCurrentUser(v.accessToken,h.repo.owner,h.repo.name),this._repoInfoCache.set(e,{...t,user:s??null}),s}catch(h){J.Y.error(h,r),this._repoInfoCache.set(e,{...t,user:null});return}}async getDefaultBranchName(e,r){if(e==null)return;const t=(0,y.UH)();try{const{metadata:s,github:h,session:m}=await this.ensureRepositoryContext(e);return await h.getDefaultBranchName(m.accessToken,s.repo.owner,s.repo.name)}catch(s){J.Y.error(s,t);return}}async getDiffForFile(e,r,t){}async getDiffForFileContents(e,r,t){}async getDiffForLine(e,r,t,s){}async getDiffStatus(e,r,t,s){}async getFileStatusForCommit(e,r,t){if(t===te.p.deletedOrMissing||te.p.isUncommitted(t))return;const s=await this.getCommitForFile(e,r,{ref:t});if(s!=null)return s.findFile(r)}async getLastFetchedTimestamp(e){}async getLog(e,r){var t,s,h;if(e==null)return;const m=(0,y.UH)(),v=this.getPagingLimit(r?.limit);try{const{metadata:f,github:C,session:R}=await this.ensureRepositoryContext(e),A=!r?.ref||r.ref==="HEAD"?(await f.getRevision()).revision:r.ref,F=await C.getCommits(R.accessToken,f.repo.owner,f.repo.name,A,{all:r?.all,authors:r?.authors,after:r?.cursor,limit:v,since:r?.since?new Date(r.since):void 0}),x=new Map,{viewer:O=R.account.label}=F;for(const E of F.values){const B=O!=null&&E.author.name===O?"You":E.author.name,H=O!=null&&E.committer.name===O?"You":E.committer.name;let T=x.get(E.oid);T==null&&(T=new z.aM(this.container,e,E.oid,new z._j(B,E.author.email,new Date(E.author.date),E.author.avatarUrl),new z._j(H,E.committer.email,new Date(E.committer.date)),E.message.split(`
`,1)[0],E.parents.nodes.map(_=>_.oid),E.message,(t=E.files)==null?void 0:t.map(_=>new se.K8(e,_.filename??"",(0,Me.fromCommitFileStatus)(_.status)??se.NV.Modified,_.previous_filename,void 0,{additions:_.additions??0,deletions:_.deletions??0,changes:_.changes??0})),{changedFiles:E.changedFiles??0,additions:E.additions??0,deletions:E.deletions??0},[]),x.set(E.oid,T))}const k={repoPath:e,commits:x,sha:A,range:void 0,count:x.size,limit:v,hasMore:((s=F.paging)==null?void 0:s.more)??!1,endingCursor:(h=F.paging)==null?void 0:h.cursor,query:E=>this.getLog(e,{...r,limit:E})};return k.hasMore&&(k.more=this.getLogMoreFn(k,r)),k}catch(f){J.Y.error(f,m);return}}async getLogRefsOnly(e,r){const t=await this.getLog(e,r);if(t!=null)return new Set([...t.commits.values()].map(s=>s.ref))}getLogMoreFn(e,r){return async t=>{var s;const h=t!=null&&typeof t=="object"?t.until:void 0;let m=typeof t=="number"?t:void 0;if(h&&(0,Ee.G)(e.commits.values(),R=>R.ref===h))return e;m=this.getPagingLimit(m);const v=await this.getLog(e.repoPath,{...r,limit:m,cursor:e.endingCursor});if(v==null)return{...e,hasMore:!1};const f=new Map([...e.commits,...v.commits]),C={repoPath:e.repoPath,commits:f,sha:e.sha,range:void 0,count:f.size,limit:h==null?(e.limit??0)+m:void 0,hasMore:h==null?v.hasMore:!0,startingCursor:(s=(0,Ee.Z$)(e.commits))==null?void 0:s[0],endingCursor:v.endingCursor,pagedCommits:()=>{for(const R of e.commits.keys())v.commits.delete(R);return v.commits},query:e.query};return C.more=this.getLogMoreFn(C,r),C}}async getLogForSearch(e,r,t){var s,h,m;if(e==null)return;const v=(0,y.UH)(),f=He.n.parseSearchOperations(r.pattern);let C,R=f.get("commit:");if(R!=null){const x=await this.getCommit(e,R[0]);return x==null?void 0:{repoPath:e,commits:new Map([[x.sha,x]]),sha:x.sha,range:void 0,count:1,limit:1,hasMore:!1}}const A=[];for([C,R]of f.entries())switch(C){case"message:":A.push(...R.map(x=>x.replace(/ /g,"+")));break;case"author:":A.push(...R.map(x=>(x=x.replace(/ /g,"+"),x.startsWith("@")?`author:${x.slice(1)}`:x.startsWith('"@')?`author:"${x.slice(2)}`:x.includes("@")?`author-email:${x}`:`author-name:${x}`)));break}if(A.length===0)return;const F=this.getPagingLimit(t?.limit);try{const{metadata:x,github:O,session:k}=await this.ensureRepositoryContext(e),E=await O.searchCommits(k.accessToken,`repo:${x.repo.owner}/${x.repo.name}+${A.join("+").trim()}`,{cursor:t?.cursor,limit:F,sort:t?.ordering==="date"?"committer-date":t?.ordering==="author-date"?"author-date":void 0});if(E==null)return;const B=new Map,H=k.account.label;for(const _ of E.values){const D=H!=null&&_.author.name===H?"You":_.author.name,me=H!=null&&_.committer.name===H?"You":_.committer.name;let W=B.get(_.oid);W==null&&(W=new z.aM(this.container,e,_.oid,new z._j(D,_.author.email,new Date(_.author.date),_.author.avatarUrl),new z._j(me,_.committer.email,new Date(_.committer.date)),_.message.split(`
`,1)[0],_.parents.nodes.map(ae=>ae.oid),_.message,(s=_.files)==null?void 0:s.map(ae=>new se.K8(e,ae.filename??"",(0,Me.fromCommitFileStatus)(ae.status)??se.NV.Modified,ae.previous_filename,void 0,{additions:ae.additions??0,deletions:ae.deletions??0,changes:ae.changes??0})),{changedFiles:_.changedFiles??0,additions:_.additions??0,deletions:_.deletions??0},[]),B.set(_.oid,W))}const T={repoPath:e,commits:B,sha:void 0,range:void 0,count:B.size,limit:F,hasMore:((h=E.pageInfo)==null?void 0:h.hasNextPage)??!1,endingCursor:((m=E.pageInfo)==null?void 0:m.endCursor)??void 0,query:_=>this.getLog(e,{...t,limit:_})};return T.hasMore&&(T.more=this.getLogForSearchMoreFn(T,r,t)),T}catch(x){J.Y.error(x,v);return}}getLogForSearchMoreFn(e,r,t){return async s=>{s=this.getPagingLimit(s);const h=await this.getLogForSearch(e.repoPath,r,{...t,limit:s,cursor:e.endingCursor});if(h==null)return{...e,hasMore:!1};const m=new Map([...e.commits,...h.commits]),v={repoPath:e.repoPath,commits:m,sha:e.sha,range:void 0,count:m.size,limit:(e.limit??0)+s,hasMore:h.hasMore,endingCursor:h.endingCursor,query:e.query};return v.more=this.getLogForSearchMoreFn(v,r,t),v}}async getLogForFile(e,r,t){if(e==null)return;const s=(0,y.UH)(),h=this.getRelativePath(r,e);if(e!=null&&e===h)throw new Error(`File name cannot match the repository path; path=${h}`);t={reverse:!1,...t},t.renames=!1,t.all=!1;let m="log";t.ref!=null&&(m+=`:${t.ref}`),t.limit=this.getPagingLimit(t?.limit),t.limit&&(m+=`:n${t.limit}`),t.renames&&(m+=":follow"),t.reverse&&(m+=":reverse"),t.since&&(m+=`:since=${t.since}`),t.skip&&(m+=`:skip${t.skip}`),t.cursor&&(m+=`:cursor=${t.cursor}`);const v=await this.container.tracker.getOrAdd(ue.YY.fromFile(h,e,t.ref));if(!t.force&&t.range==null){if(v.state!=null){const C=v.state.getLog(m);if(C!=null)return J.Y.debug(s,`Cache hit: '${m}'`),C.item;if(t.ref!=null||t.limit!=null){const R=v.state.getLog(`log${t.renames?":follow":""}${t.reverse?":reverse":""}`);if(R!=null){if(t.ref==null)return J.Y.debug(s,`Cache hit: ~'${m}'`),R.item;J.Y.debug(s,`Cache ?: '${m}'`);let A=await R.item;if(A!=null&&!A.hasMore&&A.commits.has(t.ref)){J.Y.debug(s,`Cache hit: '${m}'`);let F=!0,x=0;const O=new Map((0,Ee.DZ)(A.commits.entries(),([E,B])=>{if(F){if(E!==t?.ref)return;F=!1}if(x++,!(t?.limit!=null&&x>t.limit))return[E,B]})),k={...t};return A={...A,limit:t.limit,count:O.size,commits:O,query:E=>this.getLogForFile(e,r,{...k,limit:E})},A}}}}J.Y.debug(s,`Cache miss: '${m}'`),v.state==null&&(v.state=new Oe.p2)}const f=this.getLogForFileCore(e,h,v,m,s,t);if(v.state!=null&&t.range==null){J.Y.debug(s,`Cache add: '${m}'`);const C={item:f};v.state.setLog(m,C)}return f}async getLogForFileCore(e,r,t,s,h,m){var v,f,C;if(e==null)return;const R=this.getPagingLimit(m?.limit);try{const A=await this.ensureRepositoryContext(e);if(A==null)return;const{metadata:F,github:x,remotehub:O,session:k}=A,E=this.getAbsoluteUri(r,e),B=this.getRelativePath(E,O.getProviderRootUri(E)),H=!m?.ref||m.ref==="HEAD"?(await F.getRevision()).revision:m.ref,T=await x.getCommits(k.accessToken,F.repo.owner,F.repo.name,H,{all:m?.all,after:m?.cursor,path:B,limit:R,since:m?.since?new Date(m.since):void 0}),_=new Map,{viewer:D=k.account.label}=T;for(const W of T.values){const ae=D!=null&&W.author.name===D?"You":W.author.name,ce=D!=null&&W.committer.name===D?"You":W.committer.name;let Ce=_.get(W.oid);if(Ce==null){const L=(v=W.files)==null?void 0:v.map(ye=>new se.K8(e,ye.filename??"",(0,Me.fromCommitFileStatus)(ye.status)??se.NV.Modified,ye.previous_filename,void 0,{additions:ye.additions??0,deletions:ye.deletions??0,changes:ye.changes??0})),Pe=(0,pe.Mh)(B)?void 0:L?.find(ye=>ye.path===B)??new se.K8(e,B,se.NV.Modified,void 0,void 0,W.changedFiles===1?{additions:W.additions??0,deletions:W.deletions??0,changes:0}:void 0);Ce=new z.aM(this.container,e,W.oid,new z._j(ae,W.author.email,new Date(W.author.date),W.author.avatarUrl),new z._j(ce,W.committer.email,new Date(W.committer.date)),W.message.split(`
`,1)[0],W.parents.nodes.map(ye=>ye.oid),W.message,{file:Pe,files:L},{changedFiles:W.changedFiles??0,additions:W.additions??0,deletions:W.deletions??0},[]),_.set(W.oid,Ce)}}const me={repoPath:e,commits:_,sha:H,range:void 0,count:_.size,limit:R,hasMore:((f=T.paging)==null?void 0:f.more)??!1,endingCursor:(C=T.paging)==null?void 0:C.cursor,query:W=>this.getLogForFile(e,r,{...m,limit:W})};return me.hasMore&&(me.more=this.getLogForFileMoreFn(me,r,m)),me}catch(A){if(t.state!=null&&m?.range==null&&!m?.reverse){const F=A?.toString()??"";J.Y.debug(h,`Cache replace (with empty promise): '${s}'`);const x={item:xe,errorMessage:F};return t.state.setLog(s,x),xe}return}}getLogForFileMoreFn(e,r,t){return async s=>{const h=s!=null&&typeof s=="object"?s.until:void 0;let m=typeof s=="number"?s:void 0;if(h&&(0,Ee.G)(e.commits.values(),R=>R.ref===h))return e;m=this.getPagingLimit(m);const v=await this.getLogForFile(e.repoPath,r,{...t,limit:h==null?m:0,cursor:e.endingCursor});if(v==null)return{...e,hasMore:!1};const f=new Map([...e.commits,...v.commits]),C={repoPath:e.repoPath,commits:f,sha:e.sha,range:e.range,count:f.size,limit:h==null?(e.limit??0)+m:void 0,hasMore:h==null?v.hasMore:!0,endingCursor:v.endingCursor,query:e.query};return C.more=this.getLogForFileMoreFn(C,r,t),C}}async getMergeBase(e,r,t,s){}async getMergeStatus(e){}async getRebaseStatus(e){}async getNextComparisonUris(e,r,t,s=0){if(!t)return;const h=(0,y.UH)();try{const m=await this.ensureRepositoryContext(e);if(m==null)return;const{metadata:v,github:f,remotehub:C,session:R}=m,A=this.getRelativePath(r,C.getProviderRootUri(r)),F=(await v.getRevision()).revision;t==="HEAD"&&(t=F);const x=await f.getNextCommitRefs(R.accessToken,v.repo.owner,v.repo.name,F,A,t);return{current:s===0?ue.YY.fromFile(A,e,t):new ue.YY(await this.getBestRevisionUri(e,A,x[s-1])),next:new ue.YY(await this.getBestRevisionUri(e,A,x[s]))}}catch(m){throw J.Y.error(m,h),m}}async getPreviousComparisonUris(e,r,t,s=0,h=!1){var m,v;if(t===te.p.deletedOrMissing)return;const f=(0,y.UH)();t===te.p.uncommitted&&(t=void 0);try{const C=await this.ensureRepositoryContext(e);if(C==null)return;const{metadata:R,github:A,remotehub:F,session:x}=C,O=this.getRelativePath(r,F.getProviderRootUri(r)),k=t!=null?1:0,E=await A.getCommitRefs(x.accessToken,R.repo.owner,R.repo.name,!t||t==="HEAD"?(await R.getRevision()).revision:t,{path:O,first:k+s+1});if(E==null)return;const B=s===0?ue.YY.fromFile(O,e,t):new ue.YY(await this.getBestRevisionUri(e,O,((m=E.values[k+s-1])==null?void 0:m.oid)??te.p.deletedOrMissing));return B==null||B.sha===te.p.deletedOrMissing?void 0:{current:B,previous:new ue.YY(await this.getBestRevisionUri(e,O,((v=E.values[k+s])==null?void 0:v.oid)??te.p.deletedOrMissing))}}catch(C){throw J.Y.error(C,f),C}}async getPreviousComparisonUrisForLine(e,r,t,s,h=0){var m,v;if(s===te.p.deletedOrMissing)return;const f=(0,y.UH)();try{const C=await this.ensureRepositoryContext(e);if(C==null)return;const{remotehub:R}=C;let A=this.getRelativePath(r,R.getProviderRootUri(r)),F=ue.YY.fromFile(A,e,s),x=t,O,k=t,E=t;for(let B=0;B<Math.max(0,h)+2;B++){const H=await this.getBlameForLine(O??F,E,void 0,{forceSingleLine:!0});if(H==null)break;s=H.commit.sha,A=((m=H.commit.file)==null?void 0:m.path)??((v=H.commit.file)==null?void 0:v.originalPath)??A,E=H.line.originalLine-1;const T=ue.YY.fromFile(A,e,s);O==null?(O=T,k=E):(F=O,x=k,O=T,k=E)}return F==null?void 0:{current:F,previous:O,line:(x??t)+1}}catch(C){throw J.Y.error(C,f),C}}async getIncomingActivity(e,r){}async getRemotes(e,r){if(e==null)return[];const t=r?.providers??qe.c.loadProviders(G.DN.get("remotes",null)),s=P.Uri.parse(e,!0),[,h,m]=s.path.split("/",3),v=`https://github.com/${h}/${m}.git`,f="github.com",C=`${h}/${m}`;return[new be.ss(e,`${f}/${C}`,"origin","https",f,C,qe.c.factory(t)(v,f,C),[{type:be.XG.Fetch,url:v},{type:be.XG.Push,url:v}])]}async getRevisionContent(e,r,t){const s=t?this.createProviderUri(e,t,r):this.createVirtualUri(e,t,r);return P.workspace.fs.readFile(s)}async getStash(e){}async getStatusForFile(e,r){}async getStatusForFiles(e,r){}async getStatusForRepo(e){}async getTags(e,r){if(e==null)return Ue;const t=(0,y.UH)();let s=r?.cursor?void 0:this._tagsCache.get(e);if(s==null){async function m(){var v,f,C;try{const{metadata:R,github:A,session:F}=await this.ensureRepositoryContext(e),x=[];let O=r?.cursor;const k=O==null;for(;;){const E=await A.getTags(F.accessToken,R.repo.owner,R.repo.name,{cursor:O});for(const B of E.values)x.push(new Le.gE(e,B.name,B.target.oid,B.target.message??"",new Date(B.target.authoredDate??((v=B.target.tagger)==null?void 0:v.date)),new Date(B.target.committedDate??((f=B.target.tagger)==null?void 0:f.date))));if(!((C=E.paging)!=null&&C.more)||!k)return{...E,values:x};O=E.paging.cursor}}catch(R){return J.Y.error(R,t),this._tagsCache.delete(e),Ue}}$(m,"load"),s=m.call(this),r?.cursor==null&&this._tagsCache.set(e,s)}let h=await s;return r?.filter!=null&&(h={...h,values:h.values.filter(r.filter)}),r?.sort!=null&&(0,Le.Pj)(h.values,typeof r.sort=="boolean"?void 0:r.sort),h}async getTreeEntryForRevision(e,r,t){if(e==null||!r)return;if(t==="HEAD"){const m=await this.ensureRepositoryContext(e);if(m==null)return;const v=await m.metadata.getRevision();t=v?.revision}const s=t?this.createProviderUri(e,t,r):this.createVirtualUri(e,t,r),h=await P.workspace.fs.stat(s);if(h!=null)return{path:this.getRelativePath(s,e),commitSha:t,size:h.size,type:(h.type&P.FileType.Directory)===P.FileType.Directory?"tree":"blob"}}async getTreeForRevision(e,r){if(e==null)return[];if(r==="HEAD"){const m=await this.ensureRepositoryContext(e);if(m==null)return[];const v=await m.metadata.getRevision();r=v?.revision}const t=r?this.createProviderUri(e,r):this.createVirtualUri(e,r),s=await P.workspace.fs.readDirectory(t);if(s==null)return[];const h=[];for(const[m,v]of s){const f=this.getAbsoluteUri(m,t);h.push({path:this.getRelativePath(m,f),commitSha:r,size:0,type:(v&P.FileType.Directory)===P.FileType.Directory?"tree":"blob"})}return[]}async hasBranchOrTag(e,r){var t,s;const[{values:h},{values:m}]=await Promise.all([this.getBranches(e,{filter:(t=r?.filter)==null?void 0:t.branches,sort:!1}),this.getTags(e,{filter:(s=r?.filter)==null?void 0:s.tags,sort:!1})]);return h.length!==0||m.length!==0}async hasCommitBeenPushed(e,r){return!0}isTrackable(e){return this.supportedSchemes.has(e.scheme)}async isTracked(e){if(!this.isTrackable(e)||this.container.git.getRepository(e)==null)return!1;const r=e.with({scheme:Y.sN.GitHub});return await P.workspace.fs.stat(r)!=null}async getDiffTool(e){}async openDiffTool(e,r,t){}async openDirectoryCompare(e,r,t,s){}async resolveReference(e,r,t,s){if(!r||r===te.p.deletedOrMissing||t==null&&te.p.isSha(r)||t!=null&&te.p.isUncommitted(r))return r;let h;if(t!=null)h=this.getRelativePath(t,e);else if(!te.p.isShaLike(r)||r.endsWith("^3"))return r;const m=await this.ensureRepositoryContext(e);if(m==null)return r;const{metadata:v,github:f,session:C}=m,R=await f.resolveReference(C.accessToken,v.repo.owner,v.repo.name,r,h);return R??(h?te.p.deletedOrMissing:r)}async validateBranchOrTagName(e,r){return _e.test(e)}async validateReference(e,r){return!0}async stageFile(e,r){}async stageDirectory(e,r){}async unStageFile(e,r){}async unStageDirectory(e,r){}async stashApply(e,r,t){}async stashDelete(e,r,t){}async stashSave(e,r,t,s){}async ensureRepositoryContext(e,r){let t=P.Uri.parse(e,!0);if(!/^github\+?/.test(t.authority))throw new V.kX(e,V.sh.NotAGitHubRepository);if(!r){const f=this.container.git.getRepository(t);if(f==null)throw new V.kX(e,V.sh.NotAGitHubRepository);t=f.uri}let s=this._remotehub;if(s==null)try{s=await this.ensureRemoteHubApi()}catch(f){throw f instanceof V.R5,new V.kX(e,V.sh.RemoteHubApiNotFound,f)}const h=await s?.getMetadata(t);if(h?.provider.id!=="github")throw new V.kX(e,V.sh.NotAGitHubRepository);let m,v;try{[m,v]=await Promise.all([this.ensureGitHub(),this.ensureSession()])}catch(f){throw f instanceof V._7?new V.kX(e,f.reason===V.Jx.UserDidNotConsent?V.sh.GitHubAuthenticationDenied:V.sh.GitHubAuthenticationNotFound,f):new V.kX(e)}if(m==null)throw new V.kX(e);return{github:m,metadata:h,remotehub:s,session:v}}async ensureGitHub(){if(this._github==null){const e=await this.container.github;e!=null&&this._disposables.push(e.onDidReauthenticate(()=>{this._sessionPromise=void 0,this.ensureSession(!0)})),this._github=e}return this._github}async ensureRemoteHubApi(e){if(this._remotehubPromise==null&&(this._remotehubPromise=Ne(),this._remotehubPromise.then(r=>this._remotehub=r,()=>this._remotehub=void 0)),!e)return this._remotehubPromise;try{return await this._remotehubPromise}catch{return}}async ensureSession(e=!1){if(this._sessionPromise==null){async function r(){try{return e?await P.authentication.getSession("github",Ae,{forceNewSession:!0}):await P.authentication.getSession("github",Ae,{createIfNone:!0})}catch(t){throw t instanceof Error&&t.message.includes("User did not consent")?new V._7("github",V.Jx.UserDidNotConsent):(J.Y.error(t),new V._7("github",void 0,t))}}$(r,"getSession"),this._sessionPromise=r()}return this._sessionPromise}createVirtualUri(e,r,t){let s;if(typeof r=="string")r&&(te.p.isSha(r)?s={v:1,ref:{id:r,type:2}}:s={v:1,ref:{id:r,type:4}});else switch(r?.refType){case"revision":case"stash":s={v:1,ref:{id:r.ref,type:2}};break;case"branch":case"tag":s={v:1,ref:{id:r.name,type:4}};break}if(typeof e=="string"&&(e=P.Uri.parse(e,!0)),t){let h=e.path;h.endsWith("/")&&(h=h.slice(0,-1)),t=this.getRelativePath(t,e),t=`${h}/${t.startsWith("/")?t.slice(0,-1):t}`}return e.with({scheme:Y.sN.Virtual,authority:We("github",s),path:t??e.path})}createProviderUri(e,r,t){const s=this.createVirtualUri(e,r,t);return this._remotehub==null?s.scheme!==Y.sN.Virtual?s:s.with({scheme:Y.sN.GitHub}):this._remotehub.getProviderUri(s)}getPagingLimit(e){return e=Math.min(100,e??G.DN.get("advanced.maxListItems")??100),e===0&&(e=100),e}async resolveReferenceCore(e,r,t){var s,h,m,v;if(t==null||t==="HEAD")return(await r.getRevision()).revision;if(te.p.isSha(t))return t;if(te.p.isRange(t))return;const[f,C]=await Promise.allSettled([this.getBranches(e,{filter:R=>R.name===t}),this.getTags(e,{filter:R=>R.name===t})]);return t=((h=(s=(0,De.Sb)(f))==null?void 0:s.values[0])==null?void 0:h.sha)??((v=(m=(0,De.Sb)(C))==null?void 0:m.values[0])==null?void 0:v.sha),t==null,t}}$(S,"GitHubGitProvider"),U([(0,y.cM)()],S.prototype,"getBestRevisionUri",1),U([(0,y.cM)()],S.prototype,"getWorkingUri",1),U([(0,y.cM)()],S.prototype,"addRemote",1),U([(0,y.cM)()],S.prototype,"pruneRemote",1),U([(0,y.cM)()],S.prototype,"applyChangesToWorkingFile",1),U([(0,y.cM)()],S.prototype,"branchContainsCommit",1),U([(0,y.cM)()],S.prototype,"checkout",1),U([(0,y.cM)()],S.prototype,"resetCaches",1),U([(0,y.cM)({args:{1:q=>q.length}})],S.prototype,"excludeIgnoredUris",1),U([(0,y.cM)()],S.prototype,"fetch",1),U([(0,Fe.H)(),(0,y.fF)()],S.prototype,"findRepositoryUri",1),U([(0,y.cM)({args:{1:q=>q.join(",")}})],S.prototype,"getAheadBehindCommitCount",1),U([(0,Fe.H)((q,e)=>`${q.toString()}|${e?.isDirty}`),(0,y.cM)({args:{1:q=>q?.isDirty}})],S.prototype,"getBlame",1),U([(0,y.cM)({args:{1:"<contents>"}})],S.prototype,"getBlameContents",1),U([(0,Fe.H)((q,e,r,t)=>`${q.toString()}|${e}|${r?.isDirty}|${t?.forceSingleLine}`),(0,y.cM)({args:{2:q=>q?.isDirty}})],S.prototype,"getBlameForLine",1),U([(0,y.cM)({args:{2:"<contents>"}})],S.prototype,"getBlameForLineContents",1),U([(0,y.cM)()],S.prototype,"getBlameForRange",1),U([(0,y.cM)({args:{2:"<contents>"}})],S.prototype,"getBlameForRangeContents",1),U([(0,y.cM)({args:{0:"<blame>"}})],S.prototype,"getBlameRange",1),U([(0,y.cM)()],S.prototype,"getBranch",1),U([(0,y.cM)({args:{1:!1}})],S.prototype,"getBranches",1),U([(0,y.cM)()],S.prototype,"getChangedFilesCount",1),U([(0,y.cM)()],S.prototype,"getCommit",1),U([(0,y.cM)()],S.prototype,"getCommitBranches",1),U([(0,y.cM)()],S.prototype,"getCommitCount",1),U([(0,y.cM)()],S.prototype,"getCommitForFile",1),U([(0,y.cM)()],S.prototype,"getCommitsForGraph",1),U([(0,y.cM)()],S.prototype,"getOldestUnpushedRefForFile",1),U([(0,y.cM)()],S.prototype,"getContributors",1),U([(0,Fe.H)(),(0,y.cM)()],S.prototype,"getCurrentUser",1),U([(0,y.cM)()],S.prototype,"getDefaultBranchName",1),U([(0,y.cM)()],S.prototype,"getDiffForFile",1),U([(0,y.cM)({args:{1:q=>"<contents>"}})],S.prototype,"getDiffForFileContents",1),U([(0,y.cM)()],S.prototype,"getDiffForLine",1),U([(0,y.cM)()],S.prototype,"getDiffStatus",1),U([(0,y.cM)()],S.prototype,"getFileStatusForCommit",1),U([(0,y.cM)()],S.prototype,"getLog",1),U([(0,y.cM)()],S.prototype,"getLogRefsOnly",1),U([(0,y.cM)()],S.prototype,"getLogForSearch",1),U([(0,y.cM)()],S.prototype,"getLogForFile",1),U([(0,y.cM)()],S.prototype,"getMergeBase",1),U([(0,y.cM)()],S.prototype,"getMergeStatus",1),U([(0,y.cM)()],S.prototype,"getRebaseStatus",1),U([(0,y.cM)()],S.prototype,"getNextComparisonUris",1),U([(0,y.cM)()],S.prototype,"getPreviousComparisonUris",1),U([(0,y.cM)()],S.prototype,"getPreviousComparisonUrisForLine",1),U([(0,y.cM)()],S.prototype,"getIncomingActivity",1),U([(0,y.cM)({args:{1:!1}})],S.prototype,"getRemotes",1),U([(0,y.cM)()],S.prototype,"getRevisionContent",1),U([(0,y.cM)()],S.prototype,"getStash",1),U([(0,y.cM)()],S.prototype,"getStatusForFile",1),U([(0,y.cM)()],S.prototype,"getStatusForFiles",1),U([(0,y.cM)()],S.prototype,"getStatusForRepo",1),U([(0,y.cM)({args:{1:!1}})],S.prototype,"getTags",1),U([(0,y.cM)()],S.prototype,"getTreeEntryForRevision",1),U([(0,y.cM)()],S.prototype,"getTreeForRevision",1),U([(0,y.cM)()],S.prototype,"hasBranchOrTag",1),U([(0,y.cM)()],S.prototype,"hasCommitBeenPushed",1),U([(0,y.cM)()],S.prototype,"getDiffTool",1),U([(0,y.cM)()],S.prototype,"openDiffTool",1),U([(0,y.cM)()],S.prototype,"openDirectoryCompare",1),U([(0,y.cM)()],S.prototype,"resolveReference",1),U([(0,y.cM)()],S.prototype,"validateBranchOrTagName",1),U([(0,y.cM)()],S.prototype,"validateReference",1),U([(0,y.cM)()],S.prototype,"stageFile",1),U([(0,y.cM)()],S.prototype,"stageDirectory",1),U([(0,y.cM)()],S.prototype,"unStageFile",1),U([(0,y.cM)()],S.prototype,"unStageDirectory",1),U([(0,y.cM)()],S.prototype,"stashApply",1),U([(0,y.cM)()],S.prototype,"stashDelete",1),U([(0,y.cM)({args:{2:q=>q?.length}})],S.prototype,"stashSave",1),U([(0,Fe.H)()],S.prototype,"ensureRepositoryContext",1),U([(0,Fe.H)()],S.prototype,"ensureGitHub",1);function We(q,e){return`${q}${e!=null?`+${(0,K.e)(JSON.stringify(e))}`:""}`}$(We,"encodeAuthority")},8301:(le,oe,w)=>{"use strict";w.r(oe),w.d(oe,{GitHubPullRequest:()=>G,fromCommitFileStatus:()=>Y});var P=w(3901),K=w(9052),G;(I=>{function re(Z,ue){return new K.i(ue,{name:Z.author.login,avatarUrl:Z.author.avatarUrl,url:Z.author.url},String(Z.number),Z.title,Z.permalink,V(Z.state),new Date(Z.updatedAt),Z.closedAt==null?void 0:new Date(Z.closedAt),Z.mergedAt==null?void 0:new Date(Z.mergedAt))}$(re,"from"),I.from=re;function V(Z){return Z==="MERGED"?K.o.Merged:Z==="CLOSED"?K.o.Closed:K.o.Open}$(V,"fromState"),I.fromState=V;function fe(Z){return Z===K.o.Merged?"MERGED":Z===K.o.Closed?"CLOSED":"OPEN"}$(fe,"toState"),I.toState=fe})(G||(G={}));function Y(I){switch(I){case"added":return P.NV.Added;case"changed":case"modified":return P.NV.Modified;case"removed":return P.NV.Deleted;case"renamed":return P.NV.Renamed;case"copied":return P.NV.Copied}}$(Y,"fromCommitFileStatus")},778:(le,oe,w)=>{var P=w(2479);le.exports=P(K),le.exports.strict=P(G),K.proto=K(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return K(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return G(this)},configurable:!0})});function K(Y){var I=$(function(){return I.called?I.value:(I.called=!0,I.value=Y.apply(this,arguments))},"f");return I.called=!1,I}$(K,"once");function G(Y){var I=$(function(){if(I.called)throw new Error(I.onceError);return I.called=!0,I.value=Y.apply(this,arguments)},"f"),re=Y.name||"Function wrapped with `once`";return I.onceError=re+" shouldn't be called more than once",I.called=!1,I}$(G,"onceStrict")},2479:le=>{le.exports=oe;function oe(w,P){if(w&&P)return oe(w)(P);if(typeof w!="function")throw new TypeError("need wrapper function");return Object.keys(w).forEach(function(G){K[G]=w[G]}),K;function K(){for(var G=new Array(arguments.length),Y=0;Y<G.length;Y++)G[Y]=arguments[Y];var I=w.apply(this,G),re=G[G.length-1];return typeof I=="function"&&I!==re&&Object.keys(re).forEach(function(V){I[V]=re[V]}),I}$(K,"wrapper")}$(oe,"wrappy")}};
