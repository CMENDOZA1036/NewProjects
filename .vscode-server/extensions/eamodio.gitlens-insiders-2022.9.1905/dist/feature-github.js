var ct=Object.defineProperty;var S=(ue,se)=>ct(ue,"name",{value:se,configurable:!0});exports.id=457;exports.ids=[457];exports.modules={5186:(ue,se,C)=>{var _=C(3698),K=C(2505),k=C(6417),G=Function.bind,I=G.bind(G);function ne(he,z,ve){var ae=I(k,null).apply(null,ve?[z,ve]:[z]);he.api={remove:ae},he.remove=ae,["before","error","after","wrap"].forEach(function(ge){var re=ve?[z,ge,ve]:[z,ge];he[ge]=he.api[ge]=I(K,null).apply(null,re)})}S(ne,"bindApi");function V(){var he="h",z={registry:{}},ve=_.bind(null,z,he);return ne(ve,z,he),ve}S(V,"HookSingular");function fe(){var he={registry:{}},z=_.bind(null,he);return ne(z,he),z}S(fe,"HookCollection");var Z=!1;function ce(){return Z||(console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'),Z=!0),fe()}S(ce,"Hook"),ce.Singular=V.bind(),ce.Collection=fe.bind(),ue.exports=ce,ue.exports.Hook=ce,ue.exports.Singular=ce.Singular,ue.exports.Collection=ce.Collection},2505:ue=>{ue.exports=se;function se(C,_,K,k){var G=k;C.registry[K]||(C.registry[K]=[]),_==="before"&&(k=S(function(I,ne){return Promise.resolve().then(G.bind(null,ne)).then(I.bind(null,ne))},"hook")),_==="after"&&(k=S(function(I,ne){var V;return Promise.resolve().then(I.bind(null,ne)).then(function(fe){return V=fe,G(V,ne)}).then(function(){return V})},"hook")),_==="error"&&(k=S(function(I,ne){return Promise.resolve().then(I.bind(null,ne)).catch(function(V){return G(V,ne)})},"hook")),C.registry[K].push({hook:k,orig:G})}S(se,"addHook")},3698:ue=>{ue.exports=se;function se(C,_,K,k){if(typeof K!="function")throw new Error("method for before hook must be a function");return k||(k={}),Array.isArray(_)?_.reverse().reduce(function(G,I){return se.bind(null,C,I,G,k)},K)():Promise.resolve().then(function(){return C.registry[_]?C.registry[_].reduce(function(G,I){return I.hook.bind(null,G,k)},K)():K(k)})}S(se,"register")},6417:ue=>{ue.exports=se;function se(C,_,K){if(!!C.registry[_]){var k=C.registry[_].map(function(G){return G.orig}).indexOf(K);k!==-1&&C.registry[_].splice(k,1)}}S(se,"removeHook")},8026:(ue,se,C)=>{"use strict";C.r(se),C.d(se,{GitHubApi:()=>te});function _(){return typeof navigator=="object"&&"userAgent"in navigator?navigator.userAgent:typeof process=="object"&&"version"in process?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}S(_,"getUserAgent");var K=C(5186);/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function k(c){return Object.prototype.toString.call(c)==="[object Object]"}S(k,"isObject");function G(c){var n,o;return k(c)===!1?!1:(n=c.constructor,n===void 0?!0:(o=n.prototype,!(k(o)===!1||o.hasOwnProperty("isPrototypeOf")===!1)))}S(G,"isPlainObject");function I(c){return c?Object.keys(c).reduce((n,o)=>(n[o.toLowerCase()]=c[o],n),{}):{}}S(I,"lowercaseKeys");function ne(c,n){const o=Object.assign({},c);return Object.keys(n).forEach(i=>{G(n[i])?i in c?o[i]=ne(c[i],n[i]):Object.assign(o,{[i]:n[i]}):Object.assign(o,{[i]:n[i]})}),o}S(ne,"mergeDeep");function V(c){for(const n in c)c[n]===void 0&&delete c[n];return c}S(V,"removeUndefinedProperties");function fe(c,n,o){if(typeof n=="string"){let[l,a]=n.split(" ");o=Object.assign(a?{method:l,url:a}:{url:l},o)}else o=Object.assign({},n);o.headers=I(o.headers),V(o),V(o.headers);const i=ne(c||{},o);return c&&c.mediaType.previews.length&&(i.mediaType.previews=c.mediaType.previews.filter(l=>!i.mediaType.previews.includes(l)).concat(i.mediaType.previews)),i.mediaType.previews=i.mediaType.previews.map(l=>l.replace(/-preview/,"")),i}S(fe,"merge");function Z(c,n){const o=/\?/.test(c)?"&":"?",i=Object.keys(n);return i.length===0?c:c+o+i.map(l=>l==="q"?"q="+n.q.split("+").map(encodeURIComponent).join("+"):`${l}=${encodeURIComponent(n[l])}`).join("&")}S(Z,"addQueryParameters");const ce=/\{[^}]+\}/g;function he(c){return c.replace(/^\W+|\W+$/g,"").split(/,/)}S(he,"removeNonChars");function z(c){const n=c.match(ce);return n?n.map(he).reduce((o,i)=>o.concat(i),[]):[]}S(z,"extractUrlVariableNames");function ve(c,n){return Object.keys(c).filter(o=>!n.includes(o)).reduce((o,i)=>(o[i]=c[i],o),{})}S(ve,"omit");function ae(c){return c.split(/(%[0-9A-Fa-f]{2})/g).map(function(n){return/%[0-9A-Fa-f]/.test(n)||(n=encodeURI(n).replace(/%5B/g,"[").replace(/%5D/g,"]")),n}).join("")}S(ae,"encodeReserved");function ge(c){return encodeURIComponent(c).replace(/[!'()*]/g,function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})}S(ge,"encodeUnreserved");function re(c,n,o){return n=c==="+"||c==="#"?ae(n):ge(n),o?ge(o)+"="+n:n}S(re,"encodeValue");function be(c){return c!=null}S(be,"isDefined");function Te(c){return c===";"||c==="&"||c==="?"}S(Te,"isKeyOperator");function Le(c,n,o,i){var l=c[o],a=[];if(be(l)&&l!=="")if(typeof l=="string"||typeof l=="number"||typeof l=="boolean")l=l.toString(),i&&i!=="*"&&(l=l.substring(0,parseInt(i,10))),a.push(re(n,l,Te(n)?o:""));else if(i==="*")Array.isArray(l)?l.filter(be).forEach(function(u){a.push(re(n,u,Te(n)?o:""))}):Object.keys(l).forEach(function(u){be(l[u])&&a.push(re(n,l[u],u))});else{const u=[];Array.isArray(l)?l.filter(be).forEach(function(d){u.push(re(n,d))}):Object.keys(l).forEach(function(d){be(l[d])&&(u.push(ge(d)),u.push(re(n,l[d].toString())))}),Te(n)?a.push(ge(o)+"="+u.join(",")):u.length!==0&&a.push(u.join(","))}else n===";"?be(l)&&a.push(ge(o)):l===""&&(n==="&"||n==="?")?a.push(ge(o)+"="):l===""&&a.push("");return a}S(Le,"getValues");function Ye(c){return{expand:qe.bind(null,c)}}S(Ye,"parseUrl");function qe(c,n){var o=["+","#",".","/",";","?","&"];return c.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(i,l,a){if(l){let d="";const g=[];if(o.indexOf(l.charAt(0))!==-1&&(d=l.charAt(0),l=l.substr(1)),l.split(/,/g).forEach(function(p){var $=/([^:\*]*)(?::(\d+)|(\*))?/.exec(p);g.push(Le(n,d,$[1],$[2]||$[3]))}),d&&d!=="+"){var u=",";return d==="?"?u="&":d!=="#"&&(u=d),(g.length!==0?d:"")+g.join(u)}else return g.join(",")}else return ae(a)})}S(qe,"expand");function He(c){let n=c.method.toUpperCase(),o=(c.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),i=Object.assign({},c.headers),l,a=ve(c,["method","baseUrl","url","headers","request","mediaType"]);const u=z(o);o=Ye(o).expand(a),/^http/.test(o)||(o=c.baseUrl+o);const d=Object.keys(c).filter($=>u.includes($)).concat("baseUrl"),g=ve(a,d);if(!/application\/octet-stream/i.test(i.accept)&&(c.mediaType.format&&(i.accept=i.accept.split(/,/).map($=>$.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${c.mediaType.format}`)).join(",")),c.mediaType.previews.length)){const $=i.accept.match(/[\w-]+(?=-preview)/g)||[];i.accept=$.concat(c.mediaType.previews).map(U=>{const P=c.mediaType.format?`.${c.mediaType.format}`:"+json";return`application/vnd.github.${U}-preview${P}`}).join(",")}return["GET","HEAD"].includes(n)?o=Z(o,g):"data"in g?l=g.data:Object.keys(g).length&&(l=g),!i["content-type"]&&typeof l<"u"&&(i["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(n)&&typeof l>"u"&&(l=""),Object.assign({method:n,url:o,headers:i},typeof l<"u"?{body:l}:null,c.request?{request:c.request}:null)}S(He,"parse");function J(c,n,o){return He(fe(c,n,o))}S(J,"endpointWithDefaults");function Fe(c,n){const o=fe(c,n),i=J.bind(null,o);return Object.assign(i,{DEFAULTS:o,defaults:Fe.bind(null,o),merge:fe.bind(null,o),parse:He})}S(Fe,"withDefaults");const De=`octokit-endpoint.js/7.0.2 ${_()}`,Me=Fe(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":De},mediaType:{format:"",previews:[]}});var Oe=C(5568);class Ne extends Error{constructor(n){super(n),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="Deprecation"}}S(Ne,"Deprecation");var ke=C(778),je=C.n(ke);const Ue=je()(c=>console.warn(c)),Ie=je()(c=>console.warn(c));class Se extends Error{constructor(n,o,i){super(n),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=o;let l;"headers"in i&&typeof i.headers<"u"&&(l=i.headers),"response"in i&&(this.response=i.response,l=i.response.headers);const a=Object.assign({},i.request);i.request.headers.authorization&&(a.headers=Object.assign({},i.request.headers,{authorization:i.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),a.url=a.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=a,Object.defineProperty(this,"code",{get(){return Ue(new Ne("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),o}}),Object.defineProperty(this,"headers",{get(){return Ie(new Ne("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.")),l||{}}})}}S(Se,"RequestError");const Ve="6.2.1";function M(c){return c.arrayBuffer()}S(M,"getBufferResponse");function me(c){const n=c.request&&c.request.log?c.request.log:console;(G(c.body)||Array.isArray(c.body))&&(c.body=JSON.stringify(c.body));let o={},i,l;return(c.request&&c.request.fetch||globalThis.fetch||Oe.ZP)(c.url,Object.assign({method:c.method,body:c.body,headers:c.headers,redirect:c.redirect},c.request)).then(async u=>{l=u.url,i=u.status;for(const d of u.headers)o[d[0]]=d[1];if("deprecation"in o){const d=o.link&&o.link.match(/<([^>]+)>; rel="deprecation"/),g=d&&d.pop();n.warn(`[@octokit/request] "${c.method} ${c.url}" is deprecated. It is scheduled to be removed on ${o.sunset}${g?`. See ${g}`:""}`)}if(!(i===204||i===205)){if(c.method==="HEAD"){if(i<400)return;throw new Se(u.statusText,i,{response:{url:l,status:i,headers:o,data:void 0},request:c})}if(i===304)throw new Se("Not modified",i,{response:{url:l,status:i,headers:o,data:await Ee(u)},request:c});if(i>=400){const d=await Ee(u);throw new Se(Ae(d),i,{response:{url:l,status:i,headers:o,data:d},request:c})}return Ee(u)}}).then(u=>({status:i,url:l,headers:o,data:u})).catch(u=>{throw u instanceof Se||u.name==="AbortError"?u:new Se(u.message,500,{request:c})})}S(me,"fetchWrapper");async function Ee(c){const n=c.headers.get("content-type");return/application\/json/.test(n)?c.json():!n||/^text\/|charset=utf-8$/.test(n)?c.text():M(c)}S(Ee,"getResponseData");function Ae(c){return typeof c=="string"?c:"message"in c?Array.isArray(c.errors)?`${c.message}: ${c.errors.map(JSON.stringify).join(", ")}`:c.message:`Unknown error: ${JSON.stringify(c)}`}S(Ae,"toErrorMessage");function xe(c,n){const o=c.defaults(n);return Object.assign(S(function(l,a){const u=o.merge(l,a);if(!u.request||!u.request.hook)return me(o.parse(u));const d=S((g,p)=>me(o.parse(o.merge(g,p))),"request");return Object.assign(d,{endpoint:o,defaults:xe.bind(null,o)}),u.request.hook(d,u)},"newApi"),{endpoint:o,defaults:xe.bind(null,o)})}S(xe,"dist_web_withDefaults");const _e=xe(Me,{headers:{"user-agent":`octokit-request.js/${Ve} ${_()}`}}),F="5.0.1";function We(c){return`Request failed due to following response errors:
`+c.errors.map(n=>` - ${n.message}`).join(`
`)}S(We,"_buildMessageForResponseErrors");class L extends Error{constructor(n,o,i){super(We(i)),this.request=n,this.headers=o,this.response=i,this.name="GraphqlResponseError",this.errors=i.errors,this.data=i.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}S(L,"GraphqlResponseError");const e=["method","baseUrl","url","headers","request","query","mediaType"],r=["query","method","url"],t=/\/api\/v3\/?$/;function s(c,n,o){if(o){if(typeof n=="string"&&"query"in o)return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));for(const u in o)if(!!r.includes(u))return Promise.reject(new Error(`[@octokit/graphql] "${u}" cannot be used as variable name`))}const i=typeof n=="string"?Object.assign({query:n},o):n,l=Object.keys(i).reduce((u,d)=>e.includes(d)?(u[d]=i[d],u):(u.variables||(u.variables={}),u.variables[d]=i[d],u),{}),a=i.baseUrl||c.endpoint.DEFAULTS.baseUrl;return t.test(a)&&(l.url=a.replace(t,"/api/graphql")),c(l).then(u=>{if(u.data.errors){const d={};for(const g of Object.keys(u.headers))d[g]=u.headers[g];throw new L(l,d,u.data)}return u.data.data})}S(s,"graphql");function h(c,n){const o=c.defaults(n);return Object.assign(S((l,a)=>s(o,l,a),"newApi"),{defaults:h.bind(null,o),endpoint:_e.endpoint})}S(h,"graphql_dist_web_withDefaults");const m=h(_e,{headers:{"user-agent":`octokit-graphql.js/${F} ${_()}`},method:"POST",url:"/graphql"});function v(c){return h(c,{method:"POST",url:"/graphql"})}S(v,"withCustomRequest");const f=/^v1\./,b=/^ghs_/,R=/^ghu_/;async function A(c){const n=c.split(/\./).length===3,o=f.test(c)||b.test(c),i=R.test(c);return{type:"token",token:c,tokenType:n?"app":o?"installation":i?"user-to-server":"oauth"}}S(A,"auth");function D(c){return c.split(/\./).length===3?`bearer ${c}`:`token ${c}`}S(D,"withAuthorizationPrefix");async function x(c,n,o,i){const l=n.endpoint.merge(o,i);return l.headers.authorization=D(c),n(l)}S(x,"hook");const O=S(function(n){if(!n)throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");if(typeof n!="string")throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");return n=n.replace(/^(token|bearer) +/i,""),Object.assign(A.bind(null,n),{hook:x.bind(null,n)})},"createTokenAuth"),W="4.0.5";class E{constructor(n={}){const o=new K.Collection,i={baseUrl:_e.endpoint.DEFAULTS.baseUrl,headers:{},request:Object.assign({},n.request,{hook:o.bind(null,"request")}),mediaType:{previews:[],format:""}};if(i.headers["user-agent"]=[n.userAgent,`octokit-core.js/${W} ${_()}`].filter(Boolean).join(" "),n.baseUrl&&(i.baseUrl=n.baseUrl),n.previews&&(i.mediaType.previews=n.previews),n.timeZone&&(i.headers["time-zone"]=n.timeZone),this.request=_e.defaults(i),this.graphql=v(this.request).defaults(i),this.log=Object.assign({debug:()=>{},info:()=>{},warn:console.warn.bind(console),error:console.error.bind(console)},n.log),this.hook=o,n.authStrategy){const{authStrategy:a,...u}=n,d=a(Object.assign({request:this.request,log:this.log,octokit:this,octokitOptions:u},n.auth));o.wrap("request",d.hook),this.auth=d}else if(!n.auth)this.auth=async()=>({type:"unauthenticated"});else{const a=O(n.auth);o.wrap("request",a.hook),this.auth=a}this.constructor.plugins.forEach(a=>{Object.assign(this,a(this,n))})}static defaults(n){return S(class extends this{constructor(...i){const l=i[0]||{};if(typeof n=="function"){super(n(l));return}super(Object.assign({},n,l,l.userAgent&&n.userAgent?{userAgent:`${l.userAgent} ${n.userAgent}`}:null))}},"OctokitWithDefaults")}static plugin(...n){var o;const i=this.plugins;return o=S(class extends this{},"_a"),o.plugins=i.concat(n.filter(a=>!i.includes(a))),o}}S(E,"Octokit"),E.VERSION=W,E.plugins=[];var T=C(9496),q=C(1149),H=C(4673),N=C(9179),y=C(5396),ee=C(5059),Y=C(3082),le=C(7530),de=C(2436),Ce=C(1999),B=C(7369),Pe=C(9417),ye=C(2971),ze=C(565),Xe=C(8301),Je=Object.defineProperty,at=Object.getOwnPropertyDescriptor,lt=S((c,n,o)=>n in c?Je(c,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[n]=o,"__defNormalProp"),ie=S((c,n,o,i)=>{for(var l=i>1?void 0:i?at(n,o):n,a=c.length-1,u;a>=0;a--)(u=c[a])&&(l=(i?u(n,o,l):u(l))||l);return i&&l&&Je(n,o,l),l},"__decorateClass"),Be=S((c,n,o)=>(lt(c,typeof n!="symbol"?n+"":n,o),o),"__publicField");const $e=Object.freeze({values:[]}),Ke=Object.freeze({ranges:[]});class te{constructor(n){Be(this,"_onDidReauthenticate",new T.EventEmitter),Be(this,"_disposable"),Be(this,"_proxyAgent",null),Be(this,"_enterpriseVersions",new Map),Be(this,"_octokits",new Map),this._disposable=T.Disposable.from(N.DN.onDidChange(o=>{(N.DN.changed(o,"proxy")||N.DN.changed(o,"outputLevel"))&&this.resetCaches()}),N.DN.onDidChangeAny(o=>{(o.affectsConfiguration("http.proxy")||o.affectsConfiguration("http.proxyStrictSSL"))&&this.resetCaches()}))}get onDidReauthenticate(){return this._onDidReauthenticate.event}dispose(){var n;(n=this._disposable)==null||n.dispose()}resetCaches(){this._proxyAgent=null,this._octokits.clear(),this._enterpriseVersions.clear()}get proxyAgent(){if(!H.$L)return this._proxyAgent===null&&(this._proxyAgent=(0,q.Nx)()),this._proxyAgent}async getAccountForCommit(n,o,i,l,a,u){var d,g;const p=(0,B.UH)();try{const $=`query getAccountForCommit(
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
}`,U=await this.graphql(n,o,$,{...u,owner:i,repo:l,ref:a},p),P=(g=(d=U?.repository)==null?void 0:d.object)==null?void 0:g.author;return P==null?void 0:{provider:n,name:P.name??void 0,email:P.email??void 0,avatarUrl:!P.avatarUrl||Qe(u)?P.avatarUrl??void 0:P.email&&u?.baseUrl!=null?await this.createEnterpriseAvatarUrl(n,o,u.baseUrl,P.email,u.avatarSize):void 0}}catch($){if($ instanceof y.Ww)return;throw this.handleException($,n,p)}}async getAccountForEmail(n,o,i,l,a,u){var d,g;const p=(0,B.UH)();try{const $=`query getAccountForEmail(
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
}`,U=await this.graphql(n,o,$,{...u,owner:i,repo:l,emailQuery:`in:email ${a}`},p),P=(g=(d=U?.search)==null?void 0:d.nodes)==null?void 0:g[0];return P==null?void 0:{provider:n,name:P.name??void 0,email:P.email??void 0,avatarUrl:!P.avatarUrl||Qe(u)?P.avatarUrl??void 0:P.email&&u?.baseUrl!=null?await this.createEnterpriseAvatarUrl(n,o,u.baseUrl,P.email,u.avatarSize):void 0}}catch($){if($ instanceof y.Ww)return;throw this.handleException($,n,p)}}async getDefaultBranch(n,o,i,l,a){var u,d;const g=(0,B.UH)();try{const p=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		defaultBranchRef {
			name
		}
	}
}`,$=await this.graphql(n,o,p,{...a,owner:i,repo:l},g),U=((d=(u=$?.repository)==null?void 0:u.defaultBranchRef)==null?void 0:d.name)??void 0;return U==null?void 0:{provider:n,name:U}}catch(p){if(p instanceof y.Ww)return;throw this.handleException(p,n,g)}}async getIssueOrPullRequest(n,o,i,l,a,u){var d;const g=(0,B.UH)();try{const p=`query getIssueOrPullRequest(
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
}`,$=await this.graphql(n,o,p,{...u,owner:i,repo:l,number:a},g),U=(d=$?.repository)==null?void 0:d.issueOrPullRequest;return U==null?void 0:{provider:n,type:U.type,id:String(a),date:new Date(U.createdAt),title:U.title,closed:U.closed,closedDate:U.closedAt==null?void 0:new Date(U.closedAt),url:U.url}}catch(p){if(p instanceof y.Ww)return;throw this.handleException(p,n,g)}}async getPullRequestForBranch(n,o,i,l,a,u){var d,g,p,$;const U=(0,B.UH)();try{const P=`query getPullRequestForBranch(
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
}`,X=await this.graphql(n,o,P,{...u,owner:i,repo:l,branch:a,limit:10},U),j=($=(p=(g=(d=X?.repository)==null?void 0:d.refs.nodes[0])==null?void 0:g.associatedPullRequests)==null?void 0:p.nodes)==null?void 0:$.filter(Q=>Q!=null&&(!Q.repository.isFork||Q.repository.owner.login===i));return j==null||j.length===0?void 0:(j.length>1&&j.sort((Q,oe)=>(Q.repository.owner.login===i?-1:1)-(oe.repository.owner.login===i?-1:1)||(Q.state==="OPEN"?-1:1)-(oe.state==="OPEN"?-1:1)||new Date(oe.updatedAt).getTime()-new Date(Q.updatedAt).getTime()),Xe.GitHubPullRequest.from(j[0],n))}catch(P){if(P instanceof y.Ww)return;throw this.handleException(P,n,U)}}async getPullRequestForCommit(n,o,i,l,a,u){var d,g,p,$;const U=(0,B.UH)();try{const P=`query getPullRequestForCommit(
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
}`,X=await this.graphql(n,o,P,{...u,owner:i,repo:l,ref:a},U),j=($=(p=(g=(d=X?.repository)==null?void 0:d.object)==null?void 0:g.associatedPullRequests)==null?void 0:p.nodes)==null?void 0:$.filter(Q=>Q!=null&&(!Q.repository.isFork||Q.repository.owner.login===i));return j==null||j.length===0?void 0:(j.length>1&&j.sort((Q,oe)=>(Q.repository.owner.login===i?-1:1)-(oe.repository.owner.login===i?-1:1)||(Q.state==="MERGED"?-1:1)-(oe.state==="MERGED"?-1:1)||new Date(oe.updatedAt).getTime()-new Date(Q.updatedAt).getTime()),Xe.GitHubPullRequest.from(j[0],n))}catch(P){if(P instanceof y.Ww)return;throw this.handleException(P,n,U)}}async getBlame(n,o,i,l,a){var u,d,g,p,$;const U=(0,B.UH)();try{const P=`query getBlameRanges(
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
}`,X=await this.graphql(void 0,n,P,{owner:o,repo:i,ref:l,path:a},U);if(X==null)return Ke;const j=(g=(d=(u=X.repository)==null?void 0:u.object)==null?void 0:d.blame)==null?void 0:g.ranges;return j==null||j.length===0?{ranges:[],viewer:(p=X.viewer)==null?void 0:p.name}:{ranges:j,viewer:($=X.viewer)==null?void 0:$.name}}catch(P){if(P instanceof y.Ww)return Ke;throw this.handleException(P,void 0,U)}}async getBranches(n,o,i,l){var a;const u=(0,B.UH)();try{const d=`query getBranches(
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
}`,g=await this.graphql(void 0,n,d,{owner:o,repo:i,branchQuery:l?.query,cursor:l?.cursor,limit:Math.min(100,l?.limit??100)},u);if(g==null)return $e;const p=(a=g.repository)==null?void 0:a.refs;return p==null?$e:{paging:{cursor:p.pageInfo.endCursor,more:p.pageInfo.hasNextPage},values:p.nodes}}catch(d){if(d instanceof y.Ww)return $e;throw this.handleException(d,void 0,u)}}async getCommit(n,o,i,l){var a,u,d,g,p,$,U,P,X,j;const Q=(0,B.UH)();try{const oe=await this.request(void 0,n,"GET /repos/{owner}/{repo}/commits/{ref}",{owner:o,repo:i,ref:l},Q),we=oe?.data;if(we==null)return;const{commit:Re}=we;return{oid:we.sha,parents:{nodes:we.parents.map(Ge=>({oid:Ge.sha}))},message:Re.message,additions:(a=we.stats)==null?void 0:a.additions,changedFiles:(u=we.files)==null?void 0:u.length,deletions:(d=we.stats)==null?void 0:d.deletions,author:{avatarUrl:((g=we.author)==null?void 0:g.avatar_url)??void 0,date:((p=Re.author)==null?void 0:p.date)??new Date().toString(),email:(($=Re.author)==null?void 0:$.email)??void 0,name:((U=Re.author)==null?void 0:U.name)??""},committer:{date:((P=Re.committer)==null?void 0:P.date)??new Date().toString(),email:((X=Re.committer)==null?void 0:X.email)??void 0,name:((j=Re.committer)==null?void 0:j.name)??""},files:we.files}}catch(oe){if(oe instanceof y.Ww)return;throw this.handleException(oe,void 0,Q)}}async getCommitForFile(n,o,i,l,a){if(Y.p.isSha(l))return this.getCommit(n,o,i,l);const u=await this.getCommits(n,o,i,l,{limit:1,path:a});return u.values.length===0?void 0:{...await this.getCommit(n,o,i,u.values[0].oid)??u.values[0],viewer:u.viewer}}async getCommitBranches(n,o,i,l,a){var u,d;const g=(0,B.UH)();try{const p=`query getCommitBranches(
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
}`,$=await this.graphql(void 0,n,p,{owner:o,repo:i,since:a.toISOString(),until:a.toISOString()},g),U=(d=(u=$?.repository)==null?void 0:u.refs)==null?void 0:d.nodes;if(U==null)return[];const P=[];for(const X of U)for(const j of X.target.history.nodes)if(j.oid===l){P.push(X.name);break}return P}catch(p){if(p instanceof y.Ww)return[];throw this.handleException(p,void 0,g)}}async getCommitCount(n,o,i,l){var a,u;const d=(0,B.UH)();try{const g=`query getCommitCount(
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
}`,p=await this.graphql(void 0,n,g,{owner:o,repo:i,ref:l},d);return(u=(a=p?.repository)==null?void 0:a.ref)==null?void 0:u.target.history.totalCount}catch(g){if(g instanceof y.Ww)return;throw this.handleException(g,void 0,d)}}async getCommitOnBranch(n,o,i,l,a,u){var d;const g=(0,B.UH)();try{const p=`query getCommitOnBranch(
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
}`,$=await this.graphql(void 0,n,p,{owner:o,repo:i,ref:`refs/heads/${l}`,since:u.toISOString(),until:u.toISOString()},g),U=(d=$?.repository)==null?void 0:d.ref.target.history.nodes;if(U==null)return[];const P=[];for(const X of U)if(X.oid===a){P.push(l);break}return P}catch(p){if(p instanceof y.Ww)return[];throw this.handleException(p,void 0,g)}}async getCommits(n,o,i,l,a){var u,d,g,p;const $=(0,B.UH)();if(a?.limit===1&&a?.path==null)return this.getCommitsCoreSingle(n,o,i,l);try{const U=`query getCommits(
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
}`;let P;if(a?.authors!=null)if(a.authors.length===1){const[Q]=a.authors;P={id:Q.id,emails:Q.email?[Q.email]:void 0}}else{const Q=a.authors.filter(oe=>oe.email).map(oe=>oe.email);P=Q.length?{emails:Q}:void 0}const X=await this.graphql(void 0,n,U,{owner:o,repo:i,ref:l,after:a?.after,before:a?.before,path:a?.path,author:P,limit:Math.min(100,a?.limit??100),since:typeof a?.since=="string"?a?.since:(u=a?.since)==null?void 0:u.toISOString(),until:typeof a?.until=="string"?a?.until:(d=a?.until)==null?void 0:d.toISOString()},$),j=(p=(g=X?.repository)==null?void 0:g.object)==null?void 0:p.history;return j==null?$e:{paging:j.pageInfo.endCursor!=null?{cursor:j.pageInfo.endCursor??void 0,more:j.pageInfo.hasNextPage}:void 0,values:j.nodes,viewer:X?.viewer.name}}catch(U){if(U instanceof y.Ww)return $e;throw this.handleException(U,void 0,$)}}async getCommitsCoreSingle(n,o,i,l){var a;const u=(0,B.UH)();try{const d=`query getCommit(
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
}`,g=await this.graphql(void 0,n,d,{owner:o,repo:i,ref:l},u);if(g==null)return $e;const p=(a=g.repository)==null?void 0:a.object;return p!=null?{values:[p],viewer:g.viewer.name}:$e}catch(d){if(d instanceof y.Ww)return $e;throw this.handleException(d,void 0,u)}}async getCommitRefs(n,o,i,l,a){var u,d;const g=(0,B.UH)();try{const p=`query getCommitRefs(
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
}`,$=await this.graphql(void 0,n,p,{owner:o,repo:i,ref:l,path:a?.path,first:a?.first,last:a?.last,after:a?.after,before:a?.before,since:a?.since,until:a?.until},g),U=(d=(u=$?.repository)==null?void 0:u.object)==null?void 0:d.history;return U==null?void 0:{pageInfo:U.pageInfo,totalCount:U.totalCount,values:U.nodes}}catch(p){if(p instanceof y.Ww)return;throw this.handleException(p,void 0,g)}}async getNextCommitRefs(n,o,i,l,a,u){const d=await this.getCommitDate(n,o,i,u);if(d==null)return[];let g=await this.getCommitRefs(n,o,i,l,{path:a,first:1,since:d});if(g==null)return[];const p=`${g.pageInfo.startCursor.split(" ",1)[0]} ${g.totalCount}`;let $;if([,$]=p.split(" ",2),$=Math.min(parseInt($,10),5),g=await this.getCommitRefs(n,o,i,l,{path:a,last:$,before:p}),g==null)return[];const U=[];for(const{oid:P}of g.values){if(P===u)break;U.push(P)}return U.reverse()}async getCommitDate(n,o,i,l){var a,u;const d=(0,B.UH)();try{const g=`query getCommitDate(
	$owner: String!
	$repo: String!
	$sha: GitObjectID!
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $sha) {
			... on Commit { committer { date } }
		}
	}
}`,p=await this.graphql(void 0,n,g,{owner:o,repo:i,sha:l},d);return(u=(a=p?.repository)==null?void 0:a.object)==null?void 0:u.committer.date}catch(g){if(g instanceof y.Ww)return;throw this.handleException(g,void 0,d)}}async getContributors(n,o,i){const l=(0,B.UH)();try{const a=await this.request(void 0,n,"GET /repos/{owner}/{repo}/contributors",{owner:o,repo:i,per_page:100},l);return a?.data==null?[]:a.data}catch(a){if(a instanceof y.Ww)return[];throw this.handleException(a,void 0,l)}}async getDefaultBranchName(n,o,i){var l,a;const u=(0,B.UH)();try{const d=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		defaultBranchRef {
			name
		}
	}
}`,g=await this.graphql(void 0,n,d,{owner:o,repo:i},u);return g==null?void 0:((a=(l=g.repository)==null?void 0:l.defaultBranchRef)==null?void 0:a.name)??void 0}catch(d){if(d instanceof y.Ww)return;throw this.handleException(d,void 0,u)}}async getCurrentUser(n,o,i){var l,a,u,d;const g=(0,B.UH)();try{const p=`query getCurrentUser(
	$owner: String!
	$repo: String!
) {
	viewer { name, email, login, id }
	repository(owner: $owner, name: $repo) { viewerPermission }
}`,$=await this.graphql(void 0,n,p,{owner:o,repo:i},g);return $==null?void 0:{name:(l=$.viewer)==null?void 0:l.name,email:(a=$.viewer)==null?void 0:a.email,username:(u=$.viewer)==null?void 0:u.login,id:(d=$.viewer)==null?void 0:d.id}}catch(p){if(p instanceof y.Ww)return;throw this.handleException(p,void 0,g)}}async getRepositoryVisibility(n,o,i){var l;const a=(0,B.UH)();try{const u=`query getRepositoryVisibility(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		visibility
	}
}`,d=await this.graphql(void 0,n,u,{owner:o,repo:i},a);return((l=d?.repository)==null?void 0:l.visibility)==null?void 0:d.repository.visibility==="PUBLIC"?ee.q.Public:ee.q.Private}catch(u){if(u instanceof y.Ww)return;throw this.handleException(u,void 0,a)}}async getTags(n,o,i,l){var a;const u=(0,B.UH)();try{const d=`query getTags(
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
}`,g=await this.graphql(void 0,n,d,{owner:o,repo:i,tagQuery:l?.query,cursor:l?.cursor,limit:Math.min(100,l?.limit??100)},u);if(g==null)return $e;const p=(a=g.repository)==null?void 0:a.refs;return p==null?$e:{paging:{cursor:p.pageInfo.endCursor,more:p.pageInfo.hasNextPage},values:p.nodes}}catch(d){if(d instanceof y.Ww)return $e;throw this.handleException(d,void 0,u)}}async resolveReference(n,o,i,l,a){var u,d,g,p,$,U;const P=(0,B.UH)();try{if(!a){const Q=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			oid
		}
	}
}`,oe=await this.graphql(void 0,n,Q,{owner:o,repo:i,ref:l},P);return((d=(u=oe?.repository)==null?void 0:u.object)==null?void 0:d.oid)??void 0}const X=`query resolveReference(
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
}`,j=await this.graphql(void 0,n,X,{owner:o,repo:i,ref:l,path:a},P);return((U=($=(p=(g=j?.repository)==null?void 0:g.object)==null?void 0:p.history.nodes)==null?void 0:$[0])==null?void 0:U.oid)??void 0}catch(X){if(X instanceof y.Ww)return;throw this.handleException(X,void 0,P)}}async searchCommits(n,o,i){const l=(0,B.UH)(),a=Math.min(100,i?.limit??100);let u,d,g;i?.cursor!=null?([u,d,g]=i.cursor.split(" ",3),u=parseInt(u,10),d=parseInt(d,10),g=parseInt(g,10)):(u=1,d=a,g=0);try{const p=await this.request(void 0,n,"GET /search/commits",{q:o,sort:i?.sort,order:i?.order,per_page:d,page:u},l),$=p?.data;if($==null||$.items.length===0)return;const U=$.items.map(j=>{var Q,oe,we,Re,Ge,Ze,et,tt,rt,nt,it,ot,st;return{oid:j.sha,parents:{nodes:j.parents.map(ut=>({oid:ut.sha}))},message:j.commit.message,author:{avatarUrl:((Q=j.author)==null?void 0:Q.avatar_url)??void 0,date:((oe=j.commit.author)==null?void 0:oe.date)??((we=j.commit.author)==null?void 0:we.date)??new Date().toString(),email:((Re=j.author)==null?void 0:Re.email)??((Ge=j.commit.author)==null?void 0:Ge.email)??void 0,name:((Ze=j.author)==null?void 0:Ze.name)??((et=j.commit.author)==null?void 0:et.name)??""},committer:{date:((tt=j.commit.committer)==null?void 0:tt.date)??((rt=j.committer)==null?void 0:rt.date)??new Date().toString(),email:((nt=j.committer)==null?void 0:nt.email)??((it=j.commit.committer)==null?void 0:it.email)??void 0,name:((ot=j.committer)==null?void 0:ot.name)??((st=j.commit.committer)==null?void 0:st.name)??""}}}),P=g+$.items.length,X=$.incomplete_results||$.total_count>P;return{pageInfo:{startCursor:`${u} ${d} ${g}`,endCursor:X?`${u+1} ${d} ${P}`:void 0,hasPreviousPage:$.total_count>0&&u>1,hasNextPage:X},totalCount:$.total_count,values:U}}catch(p){if(p instanceof y.Ww)return;throw this.handleException(p,void 0,l)}}async getEnterpriseVersion(n,o,i){var l;let a=this._enterpriseVersions.get(o);if(a!=null)return a;if(a===null)return;const u=(0,B.UH)();try{const d=await this.request(n,o,"GET /meta",i,u),g=(l=d?.data)==null?void 0:l.installed_version;a=g?(0,ze.mL)(g):null}catch{a=null}return this._enterpriseVersions.set(o,a),a??void 0}octokit(n,o){let i=this._octokits.get(n);if(i==null){let l;if(H.$L){let a=S(function(u,d){if(d.headers!=null){const{"user-agent":g,...p}=d.headers;g&&(d.headers=p)}return(0,q.he)(u,d)},"fetchCore");l=E.defaults({auth:`token ${n}`,request:{fetch:a}})}else l=E.defaults({auth:`token ${n}`,request:{agent:this.proxyAgent}});i=new l(o),this._octokits.set(n,i),(de.Y.logLevel===de.i.Debug||de.Y.isDebugging)&&i.hook.wrap("request",async(a,u)=>{const d=new Pe.u(`[GITHUB] ${u.method} ${u.url}`,{log:!1});try{return await a(u)}finally{let g;try{if(typeof u.query=="string"){const p=/(^[^({\n]+)/.exec(u.query);g=` ${p?.[1].trim()??u.query}`}}catch{}d.stop({message:g})}})}return i}async graphql(n,o,i,l,a){var u,d,g,p,$;try{return await(0,q.a_)(n?.getIgnoreSSLErrors()??!1,()=>this.octokit(o).graphql(i,l))}catch(U){if(U instanceof L){switch((d=(u=U.errors)==null?void 0:u[0])==null?void 0:d.type){case"NOT_FOUND":throw new y.Ww(U);case"FORBIDDEN":throw new y._7("github",y.Jx.Forbidden,U);case"RATE_LIMITED":{let P;const X=(g=U.headers)==null?void 0:g["x-ratelimit-reset"];throw X!=null&&(P=parseInt(X,10),Number.isNaN(P)&&(P=void 0)),new y.yx(U,o,P)}}de.Y.isDebugging&&T.window.showErrorMessage(`GitHub request failed: ${(($=(p=U.errors)==null?void 0:p[0])==null?void 0:$.message)??U.message}`)}else U instanceof Se?this.handleRequestError(n,o,U,a):de.Y.isDebugging&&T.window.showErrorMessage(`GitHub request failed: ${U.message}`);throw U}}async request(n,o,i,l,a){try{return await(0,q.a_)(n?.getIgnoreSSLErrors()??!1,()=>this.octokit(o).request(i,l))}catch(u){throw u instanceof Se?this.handleRequestError(n,o,u,a):de.Y.isDebugging&&T.window.showErrorMessage(`GitHub request failed: ${u.message}`),u}}handleRequestError(n,o,i,l){var a,u,d,g,p;switch(i.status){case 404:case 410:case 422:throw new y.Ww(i);case 401:throw new y._7("github",y.Jx.Unauthorized,i);case 403:if(i.message.includes("rate limit")){let $;const U=(u=(a=i.response)==null?void 0:a.headers)==null?void 0:u["x-ratelimit-reset"];throw U!=null&&($=parseInt(U,10),Number.isNaN($)&&($=void 0)),new y.yx(i,o,$)}throw new y._7("github",y.Jx.Forbidden,i);case 500:de.Y.error(i,l),i.response!=null&&(n?.trackRequestException(),(0,Ce.vF)(`${n?.name??"GitHub"} failed to respond and might be experiencing issues.${n?.custom?"":" Please visit the [GitHub status page](https://githubstatus.com) for more information."}`));return;case 502:if(de.Y.error(i,l),i.message.includes("timeout")){n?.trackRequestException(),(0,Ce.s$)(n?.name??"GitHub");return}break;default:if(i.status>=400&&i.status<500)throw new y.Bn(i);break}de.Y.error(i,l),de.Y.isDebugging&&T.window.showErrorMessage(`GitHub request failed: ${((p=(g=(d=i.response)==null?void 0:d.errors)==null?void 0:g[0])==null?void 0:p.message)??i.message}`)}handleException(n,o,i){return de.Y.error(n,i),n instanceof y._7&&this.showAuthenticationErrorMessage(n,o),n}async showAuthenticationErrorMessage(n,o){if(n.reason===y.Jx.Unauthorized||n.reason===y.Jx.Forbidden){const i="Reauthenticate";await T.window.showErrorMessage(`${n.message}. Would you like to try reauthenticating${n.reason===y.Jx.Forbidden?" to provide additional access":""}?`,i)===i&&(await o?.reauthenticate(),this._onDidReauthenticate.fire())}else T.window.showErrorMessage(n.message)}async createEnterpriseAvatarUrl(n,o,i,l,a){a=a??16;const u=await this.getEnterpriseVersion(n,o,{baseUrl:i});if((0,ze.L5)(u,">= 3.0.0")){let d;const g=(0,le.at)(l);g!=null&&T.Uri.parse(i).authority===g.authority&&(g.userId!=null?d=`${i}/enterprise/avatars/u/${encodeURIComponent(g.userId)}?s=${a}`:g.login!=null&&(d=`${i}/enterprise/avatars/${encodeURIComponent(g.login)}?s=${a}`)),d==null&&(d=`${i}/enterprise/avatars/u/e?email=${encodeURIComponent(l)}&s=${a}`);const p=await(0,q.a_)(n?.getIgnoreSSLErrors()??!1,()=>(0,q.he)(d,{method:"GET",headers:{Authorization:`Bearer ${o}`}}));if(p.ok){const $=(0,ye.US)(new Uint8Array(await p.arrayBuffer()));return`data:${p.headers.get("content-type")};base64,${$}`}}return`https://avatars.githubusercontent.com/u/e?email=${encodeURIComponent(l)}&s=${a}`}}S(te,"GitHubApi"),ie([(0,B.fF)({args:{0:c=>c.name,1:"<token>"}})],te.prototype,"getAccountForCommit",1),ie([(0,B.fF)({args:{0:c=>c.name,1:"<token>"}})],te.prototype,"getAccountForEmail",1),ie([(0,B.fF)({args:{0:c=>c.name,1:"<token>"}})],te.prototype,"getDefaultBranch",1),ie([(0,B.fF)({args:{0:c=>c.name,1:"<token>"}})],te.prototype,"getIssueOrPullRequest",1),ie([(0,B.fF)({args:{0:c=>c.name,1:"<token>"}})],te.prototype,"getPullRequestForBranch",1),ie([(0,B.fF)({args:{0:c=>c.name,1:"<token>"}})],te.prototype,"getPullRequestForCommit",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getBlame",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getBranches",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getCommit",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getCommitForFile",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getCommitBranches",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getCommitCount",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getCommitOnBranch",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getCommits",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getCommitRefs",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getNextCommitRefs",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getContributors",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getDefaultBranchName",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getCurrentUser",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getRepositoryVisibility",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getTags",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"resolveReference",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"searchCommits",1),ie([(0,B.fF)({args:{0:"<token>"}})],te.prototype,"getEnterpriseVersion",1);function Qe(c){return c?.baseUrl==null||c.baseUrl==="https://api.github.com"}S(Qe,"isGitHubDotCom")},3333:(ue,se,C)=>{"use strict";C.r(se),C.d(se,{GitHubGitProvider:()=>F});var _=C(9496),K=C(7267),k=C(9179),G=C(1045),I=C(313),ne=C(2721),V=C(5396),fe=C(6532),Z=C(5059),ce=C(2324),he=C(2742),z=C(8031),ve=C(9735),ae=C(3901),ge=C(4905),re=C(3082),be=C(2804),Te=C(8991),Le=C(3492),Ye=C(6016),qe=C(189),He=C(3969),J=C(2436),Fe=C(5861),w=C(7369),De=C(2886),pe=C(516),Me=C(680),Oe=C(2378);async function Ne(L){try{const e=_.extensions.getExtension("ms-vscode.remote-repositories")??_.extensions.getExtension("GitHub.remotehub");if(e==null)throw J.Y.log("GitHub Repositories extension is not installed or enabled"),new V.R5("GitHub Repositories","GitHub.remotehub");return e.isActive?e.exports:await e.activate()}catch(e){if(J.Y.error(e,"Unable to get required api from the GitHub Repositories extension"),e instanceof V.R5,L)return;throw e}}S(Ne,"getRemoteHubApi");var ke=(L=>(L[L.Branch=0]="Branch",L[L.RemoteBranch=1]="RemoteBranch",L[L.Tag=2]="Tag",L[L.Commit=3]="Commit",L))(ke||{}),je=(L=>(L[L.Branch=0]="Branch",L[L.Tag=1]="Tag",L[L.Commit=2]="Commit",L[L.PullRequest=3]="PullRequest",L[L.Tree=4]="Tree",L))(je||{}),Ue=C(8301),Ie=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,Ve=S((L,e,r)=>e in L?Ie(L,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):L[e]=r,"__defNormalProp"),M=S((L,e,r,t)=>{for(var s=t>1?void 0:t?Se(e,r):e,h=L.length-1,m;h>=0;h--)(m=L[h])&&(s=(t?m(e,r,s):m(s))||s);return t&&s&&Ie(e,r,s),s},"__decorateClass"),me=S((L,e,r)=>(Ve(L,typeof e!="symbol"?e+"":e,r),r),"__publicField");const Ee=Object.freeze({values:[]}),Ae=Promise.resolve(void 0),xe=["repo","read:user","user:email"],_e=/^[^/](?!.*\/\.)(?!.*\.\.)(?!.*\/\/)(?!.*@\{)[^\000-\037\177 ~^:?*[\\]+[^./]$/;class F{constructor(e){this.container=e,me(this,"descriptor",{id:Z.p.GitHub,name:"GitHub",virtual:!0}),me(this,"supportedSchemes",new Set([G.sN.Virtual,G.sN.GitHub,G.sN.PRs])),me(this,"_onDidChangeRepository",new _.EventEmitter),me(this,"_onDidCloseRepository",new _.EventEmitter),me(this,"_onDidOpenRepository",new _.EventEmitter),me(this,"_branchesCache",new Map),me(this,"_repoInfoCache",new Map),me(this,"_tagsCache",new Map),me(this,"_disposables",[]),me(this,"_github"),me(this,"_remotehub"),me(this,"_remotehubPromise"),me(this,"_sessionPromise"),this._disposables.push(_.authentication.onDidChangeSessions(this.onAuthenticationSessionsChanged,this))}get onDidChangeRepository(){return this._onDidChangeRepository.event}get onDidCloseRepository(){return this._onDidCloseRepository.event}get onDidOpenRepository(){return this._onDidOpenRepository.event}dispose(){this._disposables.forEach(e=>void e.dispose())}onAuthenticationSessionsChanged(e){e.provider.id==="github"&&(this._sessionPromise=void 0,this.ensureSession(!1,!0))}onRepositoryChanged(e,r){this._branchesCache.delete(e.path),this._tagsCache.delete(e.path),this._repoInfoCache.delete(e.path),this._onDidChangeRepository.fire(r)}async discoverRepositories(e){if(!this.supportedSchemes.has(e.scheme))return[];try{const{remotehub:r}=await this.ensureRepositoryContext(e.toString(),!0),t=r.getVirtualWorkspaceUri(e);return t==null?[]:this.openRepository(void 0,t,!0)}catch{return[]}}updateContext(){(0,I.v)(G.zf.HasVirtualFolders,this.container.git.hasOpenRepositories(this.descriptor.id))}openRepository(e,r,t,s,h){return[new Te._j(this.container,this.onRepositoryChanged.bind(this),this.descriptor,e,r,t,s??!_.window.state.focused,h)]}async supports(e){switch(e){case fe.A.Stashes:case fe.A.Worktrees:return!1;default:return!0}}async visibility(e){const r=await this.getRemotes(e);if(r.length===0)return Z.q.Local;const t=r.find(s=>s.name==="origin");return t!=null?this.getRemoteVisibility(t):Z.q.Private}async getRemoteVisibility(e){var r;switch((r=e.provider)==null?void 0:r.id){case"github":{const{github:t,metadata:s,session:h}=await this.ensureRepositoryContext(e.repoPath);return await t.getRepositoryVisibility(h.accessToken,s.repo.owner,s.repo.name)??Z.q.Private}default:return Z.q.Private}}async getOpenScmRepositories(){return[]}async getScmRepository(e){}async getOrOpenScmRepository(e){}canHandlePathOrUri(e,r){if(!!this.supportedSchemes.has(e))return typeof r=="string"?r:r.toString()}getAbsoluteUri(e,r){if(typeof r=="string")if((0,pe.tE)(r))r=_.Uri.parse(r,!0);else throw _.window.showErrorMessage(`Unable to get absolute uri between ${typeof e=="string"?e:e.toString(!0)} and ${r}; Base path '${r}' must be a uri`),new Error(`Base path '${r}' must be a uri`);if(typeof e=="string"&&!(0,pe.tE)(e)&&!(0,pe.YP)(e))return _.Uri.joinPath(r,(0,pe.AH)(e));const t=this.getRelativePath(e,r);return _.Uri.joinPath(r,t)}async getBestRevisionUri(e,r,t){return t?this.createProviderUri(e,t,r):this.createVirtualUri(e,t,r)}getRelativePath(e,r){if(typeof r=="string")if((0,pe.tE)(r))r=_.Uri.parse(r,!0);else throw _.window.showErrorMessage(`Unable to get relative path between ${typeof e=="string"?e:e.toString(!0)} and ${r}; Base path '${r}' must be a uri`),new Error(`Base path '${r}' must be a uri`);let t;if(typeof e=="string")if((0,pe.tE)(e))e=_.Uri.parse(e,!0);else return e=(0,pe.AH)(e),t=(0,pe.YP)(e)&&e.startsWith(r.path)?e.slice(r.path.length):e,t.charCodeAt(0)===G.mN.Slash&&(t=t.slice(1)),t;return t=(0,pe.AH)((0,pe.Gf)(r.path.slice(1),e.path.slice(1))),t}getRevisionUri(e,r,t){const s=this.createProviderUri(e,t,r);return t===re.p.deletedOrMissing?s.with({query:"~"}):s}async getWorkingUri(e,r){return this.createVirtualUri(e,void 0,r.path)}async addRemote(e,r,t){}async pruneRemote(e,r){}async applyChangesToWorkingFile(e,r,t){}async branchContainsCommit(e,r,t){return!1}async checkout(e,r,t){}resetCaches(...e){(e.length===0||e.includes("branches"))&&this._branchesCache.clear(),(e.length===0||e.includes("tags"))&&this._tagsCache.clear(),e.length===0&&this._repoInfoCache.clear()}async excludeIgnoredUris(e,r){return r}async fetch(e,r){}async findRepositoryUri(e,r){const t=(0,w.UH)();try{return(await this.ensureRemoteHubApi()).getProviderRootUri(e).with({scheme:G.sN.Virtual})}catch(s){s instanceof V.R5,J.Y.error(s,t);return}}async getAheadBehindCommitCount(e,r){}async getBlame(e,r){const t=(0,w.UH)();if(r?.isDirty)return;let s="blame";e.sha!=null&&(s+=`:${e.sha}`);const h=await this.container.tracker.getOrAdd(e);if(h.state!=null){const v=h.state.getBlame(s);if(v!=null)return J.Y.debug(t,`Cache hit: '${s}'`),v.item}J.Y.debug(t,`Cache miss: '${s}'`),h.state==null&&(h.state=new Oe.p2);const m=this.getBlameCore(e,h,s,t);if(h.state!=null){J.Y.debug(t,`Cache add: '${s}'`);const v={item:m};h.state.setBlame(s,v)}return m}async getBlameCore(e,r,t,s){var h,m;try{const v=await this.ensureRepositoryContext(e.repoPath);if(v==null)return;const{metadata:f,github:b,remotehub:R,session:A}=v,D=R.getVirtualUri(R.getProviderRootUri(e)),x=this.getRelativePath(e,D);if(e.scheme===G.sN.Virtual){const[N,y]=await Promise.allSettled([_.workspace.fs.stat(e),_.workspace.fs.stat(e.with({scheme:G.sN.GitHub}))]);if(N.status!=="fulfilled"||y.status!=="fulfilled"||N.value.mtime!==y.value.mtime)return}const O=!e.sha||e.sha==="HEAD"?(await f.getRevision()).revision:e.sha,W=await b.getBlame(A.accessToken,f.repo.owner,f.repo.name,O,x),E=new Map,T=new Map,q=[];for(const N of W.ranges){const y=N.commit,{viewer:ee=A.account.label}=W,Y=ee!=null&&y.author.name===ee?"You":y.author.name,le=ee!=null&&y.committer.name===ee?"You":y.committer.name;let de=E.get(Y);de==null&&(de={name:Y,lineCount:0},E.set(Y,de)),de.lineCount+=N.endingLine-N.startingLine+1;let Ce=T.get(y.oid);Ce==null&&(Ce=new z.aM(this.container,e.repoPath,y.oid,new z._j(Y,y.author.email,new Date(y.author.date),y.author.avatarUrl),new z._j(le,y.committer.email,new Date(y.author.date)),y.message.split(`
`,1)[0],(h=y.parents.nodes[0])!=null&&h.oid?[(m=y.parents.nodes[0])==null?void 0:m.oid]:[],y.message,new ae.K8(D.toString(),x,ae.NV.Modified),{changedFiles:y.changedFiles??0,additions:y.additions??0,deletions:y.deletions??0},[]),T.set(y.oid,Ce));for(let B=N.startingLine;B<=N.endingLine;B++){const Pe={sha:y.oid,originalLine:B,line:B};Ce.lines.push(Pe),q[B-1]=Pe}}const H=new Map([...E.entries()].sort((N,y)=>y[1].lineCount-N[1].lineCount));return{repoPath:e.repoPath,authors:H,commits:T,lines:q}}catch(v){if(r.state!=null&&!String(v).includes("No provider registered with")){const f=v?.toString()??"";J.Y.debug(s,`Cache replace (with empty promise): '${t}'`);const b={item:Ae,errorMessage:f};return r.state.setBlame(t,b),r.setBlameFailure(),Ae}return}}async getBlameContents(e,r){}async getBlameForLine(e,r,t,s){var h,m;const v=(0,w.UH)();if(!t?.isDirty){if(!s?.forceSingleLine){const f=await this.getBlame(e);if(f==null)return;let b=f.lines[r];if(b==null){if(f.lines.length!==r)return;b=f.lines[r-1]}const R=f.commits.get(b.sha);return R==null?void 0:{author:{...f.authors.get(R.author.name),lineCount:R.lines.length},commit:R,line:b}}try{const f=await this.ensureRepositoryContext(e.repoPath);if(f==null)return;const{metadata:b,github:R,remotehub:A,session:D}=f,x=A.getVirtualUri(A.getProviderRootUri(e)),O=this.getRelativePath(e,x),W=!e.sha||e.sha==="HEAD"?(await b.getRevision()).revision:e.sha,E=await R.getBlame(D.accessToken,b.repo.owner,b.repo.name,W,O),T=r+1,q=E.ranges.find(le=>le.startingLine===T);if(q==null)return;const H=q.commit,{viewer:N=D.account.label}=E,y=N!=null&&H.author.name===N?"You":H.author.name,ee=N!=null&&H.committer.name===N?"You":H.committer.name,Y=new z.aM(this.container,e.repoPath,H.oid,new z._j(y,H.author.email,new Date(H.author.date),H.author.avatarUrl),new z._j(ee,H.committer.email,new Date(H.author.date)),H.message.split(`
`,1)[0],(h=H.parents.nodes[0])!=null&&h.oid?[(m=H.parents.nodes[0])==null?void 0:m.oid]:[],H.message,new ae.K8(x.toString(),O,ae.NV.Modified),{changedFiles:H.changedFiles??0,additions:H.additions??0,deletions:H.deletions??0},[]);for(let le=q.startingLine;le<=q.endingLine;le++){const de={sha:H.oid,originalLine:le,line:le};Y.lines.push(de)}return{author:{name:y,lineCount:q.endingLine-q.startingLine+1},commit:Y,line:{sha:H.oid,originalLine:q.startingLine,line:q.startingLine}}}catch(f){J.Y.error(v,f);return}}}async getBlameForLineContents(e,r,t,s){}async getBlameForRange(e,r){const t=await this.getBlame(e);if(t!=null)return this.getBlameRange(t,e,r)}async getBlameForRangeContents(e,r,t){const s=await this.getBlameContents(e,t);if(s!=null)return this.getBlameRange(s,e,r)}getBlameRange(e,r,t){if(e.lines.length===0)return{allLines:e.lines,...e};if(t.start.line===0&&t.end.line===e.lines.length-1)return{allLines:e.lines,...e};const s=e.lines.slice(t.start.line,t.end.line+1),h=new Set(s.map(A=>A.sha)),m=t.start.line+1,v=t.end.line+1,f=new Map,b=new Map;for(const A of e.commits.values()){if(!h.has(A.sha))continue;const D=A.with({lines:A.lines.filter(O=>O.line>=m&&O.line<=v)});b.set(A.sha,D);let x=f.get(D.author.name);x==null&&(x={name:D.author.name,lineCount:0},f.set(x.name,x)),x.lineCount+=D.lines.length}const R=new Map([...f.entries()].sort((A,D)=>D[1].lineCount-A[1].lineCount));return{repoPath:r.repoPath,authors:R,commits:b,lines:s,allLines:e.lines}}async getBranch(e){const{values:[r]}=await this.getBranches(e,{filter:t=>t.current});return r}async getBranches(e,r){if(e==null)return Ee;const t=(0,w.UH)();let s=r?.cursor?void 0:this._branchesCache.get(e);if(s==null){async function m(){var v;try{const{metadata:f,github:b,session:R}=await this.ensureRepositoryContext(e),A=await f.getRevision(),D=A.type===0?A.name:void 0,x=[];let O=r?.cursor;const W=O==null;for(;;){const E=await b.getBranches(R.accessToken,f.repo.owner,f.repo.name,{cursor:O});for(const T of E.values){const q=new Date(k.DN.get("advanced.commitOrdering")==="author-date"?T.target.authoredDate:T.target.committedDate),H=T.target.oid;x.push(new he.XI(e,T.name,!1,T.name===D,q,H,{name:`origin/${T.name}`,missing:!1}),new he.XI(e,`origin/${T.name}`,!0,!1,q,H))}if(!((v=E.paging)!=null&&v.more)||!W)return{...E,values:x};O=E.paging.cursor}}catch(f){return J.Y.error(f,t),this._branchesCache.delete(e),Ee}}S(m,"load"),s=m.call(this),r?.cursor==null&&this._branchesCache.set(e,s)}let h=await s;return r?.filter!=null&&(h={...h,values:h.values.filter(r.filter)}),r?.sort!=null&&(0,he.YF)(h.values,typeof r.sort=="boolean"?void 0:r.sort),h}async getChangedFilesCount(e,r){if(!r)return;const t=await this.getCommit(e,r);if(t?.stats==null)return;const{stats:s}=t,h=typeof s.changedFiles=="number"?s.changedFiles:s.changedFiles.added+s.changedFiles.changed+s.changedFiles.deleted;return{additions:s.additions,deletions:s.deletions,changedFiles:h}}async getCommit(e,r){var t;if(e==null)return;const s=(0,w.UH)();try{const{metadata:h,github:m,session:v}=await this.ensureRepositoryContext(e),f=await m.getCommit(v.accessToken,h.repo.owner,h.repo.name,r);if(f==null)return;const{viewer:b=v.account.label}=f,R=b!=null&&f.author.name===b?"You":f.author.name,A=b!=null&&f.committer.name===b?"You":f.committer.name;return new z.aM(this.container,e,f.oid,new z._j(R,f.author.email,new Date(f.author.date),f.author.avatarUrl),new z._j(A,f.committer.email,new Date(f.committer.date)),f.message.split(`
`,1)[0],f.parents.nodes.map(D=>D.oid),f.message,((t=f.files)==null?void 0:t.map(D=>new ae.K8(e,D.filename??"",(0,Ue.fromCommitFileStatus)(D.status)??ae.NV.Modified,D.previous_filename,void 0,{additions:D.additions??0,deletions:D.deletions??0,changes:D.changes??0})))??[],{changedFiles:f.changedFiles??0,additions:f.additions??0,deletions:f.deletions??0},[])}catch(h){J.Y.error(h,s);return}}async getCommitBranches(e,r,t){if(e==null||t?.commitDate==null)return[];const s=(0,w.UH)();try{const{metadata:h,github:m,session:v}=await this.ensureRepositoryContext(e);let f;return t?.branch?f=await m.getCommitOnBranch(v.accessToken,h.repo.owner,h.repo.name,t?.branch,r,t?.commitDate):f=await m.getCommitBranches(v.accessToken,h.repo.owner,h.repo.name,r,t?.commitDate),f}catch(h){return J.Y.error(h,s),[]}}async getCommitCount(e,r){if(e==null)return;const t=(0,w.UH)();try{const{metadata:s,github:h,session:m}=await this.ensureRepositoryContext(e);return await h.getCommitCount(m?.accessToken,s.repo.owner,s.repo.name,r)}catch(s){J.Y.error(s,t);return}}async getCommitForFile(e,r,t){var s;if(e==null)return;const h=(0,w.UH)();try{const{metadata:m,github:v,remotehub:f,session:b}=await this.ensureRepositoryContext(e),R=this.getRelativePath(r,f.getProviderRootUri(r)),A=!t?.ref||t.ref==="HEAD"?(await m.getRevision()).revision:t.ref,D=await v.getCommitForFile(b.accessToken,m.repo.owner,m.repo.name,A,R);if(D==null)return;const{viewer:x=b.account.label}=D,O=x!=null&&D.author.name===x?"You":D.author.name,W=x!=null&&D.committer.name===x?"You":D.committer.name,E=(s=D.files)==null?void 0:s.map(q=>new ae.K8(e,q.filename??"",(0,Ue.fromCommitFileStatus)(q.status)??ae.NV.Modified,q.previous_filename,void 0,{additions:q.additions??0,deletions:q.deletions??0,changes:q.changes??0})),T=E?.find(q=>q.path===R);return new z.aM(this.container,e,D.oid,new z._j(O,D.author.email,new Date(D.author.date),D.author.avatarUrl),new z._j(W,D.committer.email,new Date(D.committer.date)),D.message.split(`
`,1)[0],D.parents.nodes.map(q=>q.oid),D.message,{file:T,files:E},{changedFiles:D.changedFiles??0,additions:D.additions??0,deletions:D.deletions??0},[])}catch(m){J.Y.error(m,h);return}}async getCommitsForGraph(e,r,t){var s,h;const[m,v,f,b]=await Promise.allSettled([this.getLog(e,{all:!0,ordering:"date",limit:t?.limit}),this.getBranch(e),this.getRemotes(e),this.getTags(e)]),R=new Map,A=new Set;return this.getCommitsForGraphCore(e,r,(0,Me.Sb)(m),(0,Me.Sb)(v),(s=(0,Me.Sb)(f))==null?void 0:s[0],(h=(0,Me.Sb)(b))==null?void 0:h.values,R,A,t)}async getCommitsForGraphCore(e,r,t,s,h,m,v,f,b){var R,A,D,x,O;if(t==null)return{repoPath:e,avatars:v,ids:f,rows:[]};const W=(A=((R=t.pagedCommits)==null?void 0:R.call(t))??t.commits)==null?void 0:A.values();if(W==null)return{repoPath:e,avatars:v,ids:f,rows:[]};const E=[];let T,q,H;const N=s?.sha!=null&&h!=null;for(const y of W){if(f.add(y.sha),N&&y.sha===s.sha?(T=[{name:s.name,isCurrentHead:!0}],q=[{name:s.name,owner:h.name,url:h.url,avatarUrl:(x=((D=h.provider)==null?void 0:D.avatarUri)??(0,be.dM)(this.container,h,r))==null?void 0:x.toString(!0)}]):(T=[],q=[]),m!=null?H=[...(0,De.DZ)(m,ee=>{if(ee.sha===y.sha)return{name:ee.name,annotated:Boolean(ee.message)}})]:H=[],y.author.email&&!v.has(y.author.email)){const ee=y.getCachedAvatarUri();ee!=null&&v.set(y.author.email,ee.toString(!0))}E.push({sha:y.sha,parents:y.parents,author:y.author.name,email:y.author.email??"",date:y.committer.date.getTime(),message:(0,ne.X)(y.message&&String(y.message).length?y.message:y.summary),type:y.parents.length>1?ge.e.MergeCommit:ge.e.Commit,heads:T,remotes:q,tags:H})}return b?.ref==="HEAD"?b.ref=(O=(0,De.Ps)(t.commits.values()))==null?void 0:O.sha:b?.ref!=null&&(b.ref=void 0),{repoPath:e,avatars:v,ids:f,rows:E,sha:b?.ref,paging:{limit:t.limit,startingCursor:t.startingCursor,more:t.hasMore},more:async y=>{var ee;const Y=await((ee=t.more)==null?void 0:ee.call(t,y));return this.getCommitsForGraphCore(e,r,Y,s,h,m,v,f,b)}}}async getOldestUnpushedRefForFile(e,r){}async getContributors(e,r){if(e==null)return[];const t=(0,w.UH)();try{const{metadata:s,github:h,session:m}=await this.ensureRepositoryContext(e),v=await h.getContributors(m.accessToken,s.repo.owner,s.repo.name),f=await this.getCurrentUser(e),b=[];for(const R of v)R.type==="User"&&b.push(new ve.V(e,R.name,R.email,R.contributions,void 0,(0,Ye.o)(f,R.name,R.email,R.login),void 0,R.login,R.avatar_url,R.node_id));return b}catch(s){return J.Y.error(s,t),[]}}async getCurrentUser(e){if(!e)return;const r=(0,w.UH)(),t=this._repoInfoCache.get(e);let s=t?.user;if(s!=null)return s;if(s!==null)try{const{metadata:h,github:m,session:v}=await this.ensureRepositoryContext(e);return s=await m.getCurrentUser(v.accessToken,h.repo.owner,h.repo.name),this._repoInfoCache.set(e,{...t,user:s??null}),s}catch(h){J.Y.error(h,r),this._repoInfoCache.set(e,{...t,user:null});return}}async getDefaultBranchName(e,r){if(e==null)return;const t=(0,w.UH)();try{const{metadata:s,github:h,session:m}=await this.ensureRepositoryContext(e);return await h.getDefaultBranchName(m.accessToken,s.repo.owner,s.repo.name)}catch(s){J.Y.error(s,t);return}}async getDiffForFile(e,r,t){}async getDiffForFileContents(e,r,t){}async getDiffForLine(e,r,t,s){}async getDiffStatus(e,r,t,s){}async getFileStatusForCommit(e,r,t){if(t===re.p.deletedOrMissing||re.p.isUncommitted(t))return;const s=await this.getCommitForFile(e,r,{ref:t});if(s!=null)return s.findFile(r)}async getLastFetchedTimestamp(e){}async getLog(e,r){var t,s,h;if(e==null)return;const m=(0,w.UH)(),v=this.getPagingLimit(r?.limit);try{const{metadata:f,github:b,session:R}=await this.ensureRepositoryContext(e),A=!r?.ref||r.ref==="HEAD"?(await f.getRevision()).revision:r.ref,D=await b.getCommits(R.accessToken,f.repo.owner,f.repo.name,A,{all:r?.all,authors:r?.authors,after:r?.cursor,limit:v,since:r?.since?new Date(r.since):void 0}),x=new Map,{viewer:O=R.account.label}=D;for(const E of D.values){const T=O!=null&&E.author.name===O?"You":E.author.name,q=O!=null&&E.committer.name===O?"You":E.committer.name;let H=x.get(E.oid);H==null&&(H=new z.aM(this.container,e,E.oid,new z._j(T,E.author.email,new Date(E.author.date),E.author.avatarUrl),new z._j(q,E.committer.email,new Date(E.committer.date)),E.message.split(`
`,1)[0],E.parents.nodes.map(N=>N.oid),E.message,(t=E.files)==null?void 0:t.map(N=>new ae.K8(e,N.filename??"",(0,Ue.fromCommitFileStatus)(N.status)??ae.NV.Modified,N.previous_filename,void 0,{additions:N.additions??0,deletions:N.deletions??0,changes:N.changes??0})),{changedFiles:E.changedFiles??0,additions:E.additions??0,deletions:E.deletions??0},[]),x.set(E.oid,H))}const W={repoPath:e,commits:x,sha:A,range:void 0,count:x.size,limit:v,hasMore:((s=D.paging)==null?void 0:s.more)??!1,endingCursor:(h=D.paging)==null?void 0:h.cursor,query:E=>this.getLog(e,{...r,limit:E})};return W.hasMore&&(W.more=this.getLogMoreFn(W,r)),W}catch(f){J.Y.error(f,m);return}}async getLogRefsOnly(e,r){const t=await this.getLog(e,r);if(t!=null)return new Set([...t.commits.values()].map(s=>s.ref))}getLogMoreFn(e,r){return async t=>{var s;const h=t!=null&&typeof t=="object"?t.until:void 0;let m=typeof t=="number"?t:void 0;if(h&&(0,De.G)(e.commits.values(),R=>R.ref===h))return e;m=this.getPagingLimit(m);const v=await this.getLog(e.repoPath,{...r,limit:m,cursor:e.endingCursor});if(v==null)return{...e,hasMore:!1,more:void 0};const f=new Map([...e.commits,...v.commits]),b={repoPath:e.repoPath,commits:f,sha:e.sha,range:void 0,count:f.size,limit:h==null?(e.limit??0)+m:void 0,hasMore:h==null?v.hasMore:!0,startingCursor:(s=(0,De.Z$)(e.commits))==null?void 0:s[0],endingCursor:v.endingCursor,pagedCommits:()=>{for(const R of e.commits.keys())v.commits.delete(R);return v.commits},query:e.query};return b.hasMore&&(b.more=this.getLogMoreFn(b,r)),b}}async getLogForSearch(e,r,t){var s,h,m;if(e==null)return;const v=(0,w.UH)(),f=He.n.parseSearchOperations(r.pattern);let b,R=f.get("commit:");if(R!=null){const x=await this.getCommit(e,R[0]);return x==null?void 0:{repoPath:e,commits:new Map([[x.sha,x]]),sha:x.sha,range:void 0,count:1,limit:1,hasMore:!1}}const A=[];for([b,R]of f.entries())switch(b){case"message:":A.push(...R.map(x=>x.replace(/ /g,"+")));break;case"author:":A.push(...R.map(x=>(x=x.replace(/ /g,"+"),x.startsWith("@")?`author:${x.slice(1)}`:x.startsWith('"@')?`author:"${x.slice(2)}`:x.includes("@")?`author-email:${x}`:`author-name:${x}`)));break}if(A.length===0)return;const D=this.getPagingLimit(t?.limit);try{const{metadata:x,github:O,session:W}=await this.ensureRepositoryContext(e),E=await O.searchCommits(W.accessToken,`repo:${x.repo.owner}/${x.repo.name}+${A.join("+").trim()}`,{cursor:t?.cursor,limit:D,sort:t?.ordering==="date"?"committer-date":t?.ordering==="author-date"?"author-date":void 0});if(E==null)return;const T=new Map,q=W.account.label;for(const N of E.values){const y=q!=null&&N.author.name===q?"You":N.author.name,ee=q!=null&&N.committer.name===q?"You":N.committer.name;let Y=T.get(N.oid);Y==null&&(Y=new z.aM(this.container,e,N.oid,new z._j(y,N.author.email,new Date(N.author.date),N.author.avatarUrl),new z._j(ee,N.committer.email,new Date(N.committer.date)),N.message.split(`
`,1)[0],N.parents.nodes.map(le=>le.oid),N.message,(s=N.files)==null?void 0:s.map(le=>new ae.K8(e,le.filename??"",(0,Ue.fromCommitFileStatus)(le.status)??ae.NV.Modified,le.previous_filename,void 0,{additions:le.additions??0,deletions:le.deletions??0,changes:le.changes??0})),{changedFiles:N.changedFiles??0,additions:N.additions??0,deletions:N.deletions??0},[]),T.set(N.oid,Y))}const H={repoPath:e,commits:T,sha:void 0,range:void 0,count:T.size,limit:D,hasMore:((h=E.pageInfo)==null?void 0:h.hasNextPage)??!1,endingCursor:((m=E.pageInfo)==null?void 0:m.endCursor)??void 0,query:N=>this.getLog(e,{...t,limit:N})};return H.hasMore&&(H.more=this.getLogForSearchMoreFn(H,r,t)),H}catch(x){J.Y.error(x,v);return}}getLogForSearchMoreFn(e,r,t){return async s=>{s=this.getPagingLimit(s);const h=await this.getLogForSearch(e.repoPath,r,{...t,limit:s,cursor:e.endingCursor});if(h==null)return{...e,hasMore:!1,more:void 0};const m=new Map([...e.commits,...h.commits]),v={repoPath:e.repoPath,commits:m,sha:e.sha,range:void 0,count:m.size,limit:(e.limit??0)+s,hasMore:h.hasMore,endingCursor:h.endingCursor,query:e.query};return v.hasMore&&(v.more=this.getLogForSearchMoreFn(v,r,t)),v}}async getLogForFile(e,r,t){if(e==null)return;const s=(0,w.UH)(),h=this.getRelativePath(r,e);if(e!=null&&e===h)throw new Error(`File name cannot match the repository path; path=${h}`);t={reverse:!1,...t},t.renames=!1,t.all=!1;let m="log";t.ref!=null&&(m+=`:${t.ref}`),t.limit=this.getPagingLimit(t?.limit),t.limit&&(m+=`:n${t.limit}`),t.renames&&(m+=":follow"),t.reverse&&(m+=":reverse"),t.since&&(m+=`:since=${t.since}`),t.skip&&(m+=`:skip${t.skip}`),t.cursor&&(m+=`:cursor=${t.cursor}`);const v=await this.container.tracker.getOrAdd(ce.YY.fromFile(h,e,t.ref));if(!t.force&&t.range==null){if(v.state!=null){const b=v.state.getLog(m);if(b!=null)return J.Y.debug(s,`Cache hit: '${m}'`),b.item;if(t.ref!=null||t.limit!=null){const R=v.state.getLog(`log${t.renames?":follow":""}${t.reverse?":reverse":""}`);if(R!=null){if(t.ref==null)return J.Y.debug(s,`Cache hit: ~'${m}'`),R.item;J.Y.debug(s,`Cache ?: '${m}'`);let A=await R.item;if(A!=null&&!A.hasMore&&A.commits.has(t.ref)){J.Y.debug(s,`Cache hit: '${m}'`);let D=!0,x=0;const O=new Map((0,De.DZ)(A.commits.entries(),([E,T])=>{if(D){if(E!==t?.ref)return;D=!1}if(x++,!(t?.limit!=null&&x>t.limit))return[E,T]})),W={...t};return A={...A,limit:t.limit,count:O.size,commits:O,query:E=>this.getLogForFile(e,r,{...W,limit:E})},A}}}}J.Y.debug(s,`Cache miss: '${m}'`),v.state==null&&(v.state=new Oe.p2)}const f=this.getLogForFileCore(e,h,v,m,s,t);if(v.state!=null&&t.range==null){J.Y.debug(s,`Cache add: '${m}'`);const b={item:f};v.state.setLog(m,b)}return f}async getLogForFileCore(e,r,t,s,h,m){var v,f,b;if(e==null)return;const R=this.getPagingLimit(m?.limit);try{const A=await this.ensureRepositoryContext(e);if(A==null)return;const{metadata:D,github:x,remotehub:O,session:W}=A,E=this.getAbsoluteUri(r,e),T=this.getRelativePath(E,O.getProviderRootUri(E)),q=!m?.ref||m.ref==="HEAD"?(await D.getRevision()).revision:m.ref,H=await x.getCommits(W.accessToken,D.repo.owner,D.repo.name,q,{all:m?.all,after:m?.cursor,path:T,limit:R,since:m?.since?new Date(m.since):void 0}),N=new Map,{viewer:y=W.account.label}=H;for(const Y of H.values){const le=y!=null&&Y.author.name===y?"You":Y.author.name,de=y!=null&&Y.committer.name===y?"You":Y.committer.name;let Ce=N.get(Y.oid);if(Ce==null){const B=(v=Y.files)==null?void 0:v.map(ye=>new ae.K8(e,ye.filename??"",(0,Ue.fromCommitFileStatus)(ye.status)??ae.NV.Modified,ye.previous_filename,void 0,{additions:ye.additions??0,deletions:ye.deletions??0,changes:ye.changes??0})),Pe=(0,pe.Mh)(T)?void 0:B?.find(ye=>ye.path===T)??new ae.K8(e,T,ae.NV.Modified,void 0,void 0,Y.changedFiles===1?{additions:Y.additions??0,deletions:Y.deletions??0,changes:0}:void 0);Ce=new z.aM(this.container,e,Y.oid,new z._j(le,Y.author.email,new Date(Y.author.date),Y.author.avatarUrl),new z._j(de,Y.committer.email,new Date(Y.committer.date)),Y.message.split(`
`,1)[0],Y.parents.nodes.map(ye=>ye.oid),Y.message,{file:Pe,files:B},{changedFiles:Y.changedFiles??0,additions:Y.additions??0,deletions:Y.deletions??0},[]),N.set(Y.oid,Ce)}}const ee={repoPath:e,commits:N,sha:q,range:void 0,count:N.size,limit:R,hasMore:((f=H.paging)==null?void 0:f.more)??!1,endingCursor:(b=H.paging)==null?void 0:b.cursor,query:Y=>this.getLogForFile(e,r,{...m,limit:Y})};return ee.hasMore&&(ee.more=this.getLogForFileMoreFn(ee,r,m)),ee}catch(A){if(t.state!=null&&m?.range==null&&!m?.reverse){const D=A?.toString()??"";J.Y.debug(h,`Cache replace (with empty promise): '${s}'`);const x={item:Ae,errorMessage:D};return t.state.setLog(s,x),Ae}return}}getLogForFileMoreFn(e,r,t){return async s=>{const h=s!=null&&typeof s=="object"?s.until:void 0;let m=typeof s=="number"?s:void 0;if(h&&(0,De.G)(e.commits.values(),R=>R.ref===h))return e;m=this.getPagingLimit(m);const v=await this.getLogForFile(e.repoPath,r,{...t,limit:h==null?m:0,cursor:e.endingCursor});if(v==null)return{...e,hasMore:!1,more:void 0};const f=new Map([...e.commits,...v.commits]),b={repoPath:e.repoPath,commits:f,sha:e.sha,range:e.range,count:f.size,limit:h==null?(e.limit??0)+m:void 0,hasMore:h==null?v.hasMore:!0,endingCursor:v.endingCursor,query:e.query};return b.hasMore&&(b.more=this.getLogForFileMoreFn(b,r,t)),b}}async getMergeBase(e,r,t,s){}async getMergeStatus(e){}async getRebaseStatus(e){}async getNextComparisonUris(e,r,t,s=0){if(!t)return;const h=(0,w.UH)();try{const m=await this.ensureRepositoryContext(e);if(m==null)return;const{metadata:v,github:f,remotehub:b,session:R}=m,A=this.getRelativePath(r,b.getProviderRootUri(r)),D=(await v.getRevision()).revision;t==="HEAD"&&(t=D);const x=await f.getNextCommitRefs(R.accessToken,v.repo.owner,v.repo.name,D,A,t);return{current:s===0?ce.YY.fromFile(A,e,t):new ce.YY(await this.getBestRevisionUri(e,A,x[s-1])),next:new ce.YY(await this.getBestRevisionUri(e,A,x[s]))}}catch(m){throw J.Y.error(m,h),m}}async getPreviousComparisonUris(e,r,t,s=0,h=!1){var m,v;if(t===re.p.deletedOrMissing)return;const f=(0,w.UH)();t===re.p.uncommitted&&(t=void 0);try{const b=await this.ensureRepositoryContext(e);if(b==null)return;const{metadata:R,github:A,remotehub:D,session:x}=b,O=this.getRelativePath(r,D.getProviderRootUri(r)),W=t!=null?1:0,E=await A.getCommitRefs(x.accessToken,R.repo.owner,R.repo.name,!t||t==="HEAD"?(await R.getRevision()).revision:t,{path:O,first:W+s+1});if(E==null)return;const T=s===0?ce.YY.fromFile(O,e,t):new ce.YY(await this.getBestRevisionUri(e,O,((m=E.values[W+s-1])==null?void 0:m.oid)??re.p.deletedOrMissing));return T==null||T.sha===re.p.deletedOrMissing?void 0:{current:T,previous:new ce.YY(await this.getBestRevisionUri(e,O,((v=E.values[W+s])==null?void 0:v.oid)??re.p.deletedOrMissing))}}catch(b){throw J.Y.error(b,f),b}}async getPreviousComparisonUrisForLine(e,r,t,s,h=0){var m,v;if(s===re.p.deletedOrMissing)return;const f=(0,w.UH)();try{const b=await this.ensureRepositoryContext(e);if(b==null)return;const{remotehub:R}=b;let A=this.getRelativePath(r,R.getProviderRootUri(r)),D=ce.YY.fromFile(A,e,s),x=t,O,W=t,E=t;for(let T=0;T<Math.max(0,h)+2;T++){const q=await this.getBlameForLine(O??D,E,void 0,{forceSingleLine:!0});if(q==null)break;s=q.commit.sha,A=((m=q.commit.file)==null?void 0:m.path)??((v=q.commit.file)==null?void 0:v.originalPath)??A,E=q.line.originalLine-1;const H=ce.YY.fromFile(A,e,s);O==null?(O=H,W=E):(D=O,x=W,O=H,W=E)}return D==null?void 0:{current:D,previous:O,line:(x??t)+1}}catch(b){throw J.Y.error(b,f),b}}async getIncomingActivity(e,r){}async getRemotes(e,r){if(e==null)return[];const t=r?.providers??(0,qe.v)(k.DN.get("remotes",null)),s=_.Uri.parse(e,!0),[,h,m]=s.path.split("/",3),v=`https://github.com/${h}/${m}.git`,f="github.com",b=`${h}/${m}`;return[new be.ss(e,`${f}/${b}`,"origin","https",f,b,(0,qe.B)(this.container,t)(v,f,b),[{type:be.XG.Fetch,url:v},{type:be.XG.Push,url:v}])]}async getRevisionContent(e,r,t){const s=t?this.createProviderUri(e,t,r):this.createVirtualUri(e,t,r);return _.workspace.fs.readFile(s)}async getStash(e){}async getStatusForFile(e,r){}async getStatusForFiles(e,r){}async getStatusForRepo(e){}async getTags(e,r){if(e==null)return Ee;const t=(0,w.UH)();let s=r?.cursor?void 0:this._tagsCache.get(e);if(s==null){async function m(){var v,f,b;try{const{metadata:R,github:A,session:D}=await this.ensureRepositoryContext(e),x=[];let O=r?.cursor;const W=O==null;for(;;){const E=await A.getTags(D.accessToken,R.repo.owner,R.repo.name,{cursor:O});for(const T of E.values)x.push(new Le.gE(e,T.name,T.target.oid,T.target.message??"",new Date(T.target.authoredDate??((v=T.target.tagger)==null?void 0:v.date)),new Date(T.target.committedDate??((f=T.target.tagger)==null?void 0:f.date))));if(!((b=E.paging)!=null&&b.more)||!W)return{...E,values:x};O=E.paging.cursor}}catch(R){return J.Y.error(R,t),this._tagsCache.delete(e),Ee}}S(m,"load"),s=m.call(this),r?.cursor==null&&this._tagsCache.set(e,s)}let h=await s;return r?.filter!=null&&(h={...h,values:h.values.filter(r.filter)}),r?.sort!=null&&(0,Le.Pj)(h.values,typeof r.sort=="boolean"?void 0:r.sort),h}async getTreeEntryForRevision(e,r,t){if(e==null||!r)return;if(t==="HEAD"){const m=await this.ensureRepositoryContext(e);if(m==null)return;const v=await m.metadata.getRevision();t=v?.revision}const s=t?this.createProviderUri(e,t,r):this.createVirtualUri(e,t,r),h=await _.workspace.fs.stat(s);if(h!=null)return{path:this.getRelativePath(s,e),commitSha:t,size:h.size,type:(h.type&_.FileType.Directory)===_.FileType.Directory?"tree":"blob"}}async getTreeForRevision(e,r){if(e==null)return[];if(r==="HEAD"){const m=await this.ensureRepositoryContext(e);if(m==null)return[];const v=await m.metadata.getRevision();r=v?.revision}const t=r?this.createProviderUri(e,r):this.createVirtualUri(e,r),s=await _.workspace.fs.readDirectory(t);if(s==null)return[];const h=[];for(const[m,v]of s){const f=this.getAbsoluteUri(m,t);h.push({path:this.getRelativePath(m,f),commitSha:r,size:0,type:(v&_.FileType.Directory)===_.FileType.Directory?"tree":"blob"})}return[]}async hasBranchOrTag(e,r){var t,s;const[{values:h},{values:m}]=await Promise.all([this.getBranches(e,{filter:(t=r?.filter)==null?void 0:t.branches,sort:!1}),this.getTags(e,{filter:(s=r?.filter)==null?void 0:s.tags,sort:!1})]);return h.length!==0||m.length!==0}async hasCommitBeenPushed(e,r){return!0}isTrackable(e){return this.supportedSchemes.has(e.scheme)}async isTracked(e){if(!this.isTrackable(e)||this.container.git.getRepository(e)==null)return!1;const r=e.with({scheme:G.sN.GitHub});return await _.workspace.fs.stat(r)!=null}async getDiffTool(e){}async openDiffTool(e,r,t){}async openDirectoryCompare(e,r,t,s){}async resolveReference(e,r,t,s){if(!r||r===re.p.deletedOrMissing||t==null&&re.p.isSha(r)||t!=null&&re.p.isUncommitted(r))return r;let h;if(t!=null)h=this.getRelativePath(t,e);else if(!re.p.isShaLike(r)||r.endsWith("^3"))return r;const m=await this.ensureRepositoryContext(e);if(m==null)return r;const{metadata:v,github:f,session:b}=m,R=await f.resolveReference(b.accessToken,v.repo.owner,v.repo.name,r,h);return R??(h?re.p.deletedOrMissing:r)}async validateBranchOrTagName(e,r){return _e.test(e)}async validateReference(e,r){return!0}async stageFile(e,r){}async stageDirectory(e,r){}async unStageFile(e,r){}async unStageDirectory(e,r){}async stashApply(e,r,t){}async stashDelete(e,r,t){}async stashSave(e,r,t,s){}async ensureRepositoryContext(e,r){let t=_.Uri.parse(e,!0);if(!/^github\+?/.test(t.authority))throw new V.kX(e,V.sh.NotAGitHubRepository);if(!r){const f=this.container.git.getRepository(t);if(f==null)throw new V.kX(e,V.sh.NotAGitHubRepository);t=f.uri}let s=this._remotehub;if(s==null)try{s=await this.ensureRemoteHubApi()}catch(f){throw f instanceof V.R5,new V.kX(e,V.sh.RemoteHubApiNotFound,f)}const h=await s?.getMetadata(t);if(h?.provider.id!=="github")throw new V.kX(e,V.sh.NotAGitHubRepository);let m,v;try{[m,v]=await Promise.all([this.ensureGitHub(),this.ensureSession()])}catch(f){throw f instanceof V._7?new V.kX(e,f.reason===V.Jx.UserDidNotConsent?V.sh.GitHubAuthenticationDenied:V.sh.GitHubAuthenticationNotFound,f):new V.kX(e)}if(m==null)throw new V.kX(e);return{github:m,metadata:h,remotehub:s,session:v}}async ensureGitHub(){if(this._github==null){const e=await this.container.github;e!=null&&this._disposables.push(e.onDidReauthenticate(()=>void this.ensureSession(!0))),this._github=e}return this._github}async ensureRemoteHubApi(e){if(this._remotehubPromise==null&&(this._remotehubPromise=Ne(),this._remotehubPromise.then(r=>this._remotehub=r,()=>this._remotehub=void 0)),!e)return this._remotehubPromise;try{return await this._remotehubPromise}catch{return}}async ensureSession(e=!1,r=!1){if(e||this._sessionPromise==null){async function t(){let s=this.container.storage.get(`provider:authentication:skip:${this.descriptor.id}`,!1);try{if(e)return s=!1,this.container.storage.delete(`provider:authentication:skip:${this.descriptor.id}`),await _.authentication.getSession("github",xe,{forceNewSession:!0});if(!s&&!r)return await _.authentication.getSession("github",xe,{createIfNone:!0});const h=await _.authentication.getSession("github",xe,{createIfNone:!1,silent:r});if(h!=null)return h;throw new Error("User did not consent")}catch(h){if(h instanceof Error&&h.message.includes("User did not consent")){if(!r&&(await this.container.storage.store(`provider:authentication:skip:${this.descriptor.id}`,!0),!s))return e||queueMicrotask(async()=>{const m="Re-enable";await _.window.showInformationMessage("GitLens has been disabled. Authentication is required for GitLens to work with remote GitHub repositories.",m)===m&&this.ensureSession(!0)}),e=!1,t.call(this);throw new V._7("github",V.Jx.UserDidNotConsent)}throw J.Y.error(h),new V._7("github",void 0,h)}}S(t,"getSession"),this._sessionPromise=t.call(this)}return this._sessionPromise}createVirtualUri(e,r,t){let s;if(typeof r=="string")r&&(re.p.isSha(r)?s={v:1,ref:{id:r,type:2}}:s={v:1,ref:{id:r,type:4}});else switch(r?.refType){case"revision":case"stash":s={v:1,ref:{id:r.ref,type:2}};break;case"branch":case"tag":s={v:1,ref:{id:r.name,type:4}};break}if(typeof e=="string"&&(e=_.Uri.parse(e,!0)),t){let h=e.path;h.endsWith("/")&&(h=h.slice(0,-1)),t=this.getRelativePath(t,e),t=`${h}/${t.startsWith("/")?t.slice(0,-1):t}`}return e.with({scheme:G.sN.Virtual,authority:We("github",s),path:t??e.path})}createProviderUri(e,r,t){const s=this.createVirtualUri(e,r,t);return this._remotehub==null?s.scheme!==G.sN.Virtual?s:s.with({scheme:G.sN.GitHub}):this._remotehub.getProviderUri(s)}getPagingLimit(e){return e=Math.min(100,e??k.DN.get("advanced.maxListItems")??100),e===0&&(e=100),e}async resolveReferenceCore(e,r,t){var s,h,m,v;if(t==null||t==="HEAD")return(await r.getRevision()).revision;if(re.p.isSha(t))return t;if(re.p.isRange(t))return;const[f,b]=await Promise.allSettled([this.getBranches(e,{filter:R=>R.name===t}),this.getTags(e,{filter:R=>R.name===t})]);return t=((h=(s=(0,Me.Sb)(f))==null?void 0:s.values[0])==null?void 0:h.sha)??((v=(m=(0,Me.Sb)(b))==null?void 0:m.values[0])==null?void 0:v.sha),t==null,t}}S(F,"GitHubGitProvider"),M([(0,w.cM)()],F.prototype,"getBestRevisionUri",1),M([(0,w.cM)()],F.prototype,"getWorkingUri",1),M([(0,w.cM)()],F.prototype,"addRemote",1),M([(0,w.cM)()],F.prototype,"pruneRemote",1),M([(0,w.cM)()],F.prototype,"applyChangesToWorkingFile",1),M([(0,w.cM)()],F.prototype,"branchContainsCommit",1),M([(0,w.cM)()],F.prototype,"checkout",1),M([(0,w.cM)()],F.prototype,"resetCaches",1),M([(0,w.cM)({args:{1:L=>L.length}})],F.prototype,"excludeIgnoredUris",1),M([(0,w.cM)()],F.prototype,"fetch",1),M([(0,Fe.H)(),(0,w.fF)()],F.prototype,"findRepositoryUri",1),M([(0,w.cM)({args:{1:L=>L.join(",")}})],F.prototype,"getAheadBehindCommitCount",1),M([(0,Fe.H)((L,e)=>`${L.toString()}|${e?.isDirty}`),(0,w.cM)({args:{1:L=>L?.isDirty}})],F.prototype,"getBlame",1),M([(0,w.cM)({args:{1:"<contents>"}})],F.prototype,"getBlameContents",1),M([(0,Fe.H)((L,e,r,t)=>`${L.toString()}|${e}|${r?.isDirty}|${t?.forceSingleLine}`),(0,w.cM)({args:{2:L=>L?.isDirty}})],F.prototype,"getBlameForLine",1),M([(0,w.cM)({args:{2:"<contents>"}})],F.prototype,"getBlameForLineContents",1),M([(0,w.cM)()],F.prototype,"getBlameForRange",1),M([(0,w.cM)({args:{2:"<contents>"}})],F.prototype,"getBlameForRangeContents",1),M([(0,w.cM)({args:{0:"<blame>"}})],F.prototype,"getBlameRange",1),M([(0,w.cM)()],F.prototype,"getBranch",1),M([(0,w.cM)({args:{1:!1}})],F.prototype,"getBranches",1),M([(0,w.cM)()],F.prototype,"getChangedFilesCount",1),M([(0,w.cM)()],F.prototype,"getCommit",1),M([(0,w.cM)()],F.prototype,"getCommitBranches",1),M([(0,w.cM)()],F.prototype,"getCommitCount",1),M([(0,w.cM)()],F.prototype,"getCommitForFile",1),M([(0,w.cM)()],F.prototype,"getCommitsForGraph",1),M([(0,w.cM)()],F.prototype,"getOldestUnpushedRefForFile",1),M([(0,w.cM)()],F.prototype,"getContributors",1),M([(0,Fe.H)(),(0,w.cM)()],F.prototype,"getCurrentUser",1),M([(0,w.cM)()],F.prototype,"getDefaultBranchName",1),M([(0,w.cM)()],F.prototype,"getDiffForFile",1),M([(0,w.cM)({args:{1:L=>"<contents>"}})],F.prototype,"getDiffForFileContents",1),M([(0,w.cM)()],F.prototype,"getDiffForLine",1),M([(0,w.cM)()],F.prototype,"getDiffStatus",1),M([(0,w.cM)()],F.prototype,"getFileStatusForCommit",1),M([(0,w.cM)()],F.prototype,"getLog",1),M([(0,w.cM)()],F.prototype,"getLogRefsOnly",1),M([(0,w.cM)()],F.prototype,"getLogForSearch",1),M([(0,w.cM)()],F.prototype,"getLogForFile",1),M([(0,w.cM)()],F.prototype,"getMergeBase",1),M([(0,w.cM)()],F.prototype,"getMergeStatus",1),M([(0,w.cM)()],F.prototype,"getRebaseStatus",1),M([(0,w.cM)()],F.prototype,"getNextComparisonUris",1),M([(0,w.cM)()],F.prototype,"getPreviousComparisonUris",1),M([(0,w.cM)()],F.prototype,"getPreviousComparisonUrisForLine",1),M([(0,w.cM)()],F.prototype,"getIncomingActivity",1),M([(0,w.cM)({args:{1:!1}})],F.prototype,"getRemotes",1),M([(0,w.cM)()],F.prototype,"getRevisionContent",1),M([(0,w.cM)()],F.prototype,"getStash",1),M([(0,w.cM)()],F.prototype,"getStatusForFile",1),M([(0,w.cM)()],F.prototype,"getStatusForFiles",1),M([(0,w.cM)()],F.prototype,"getStatusForRepo",1),M([(0,w.cM)({args:{1:!1}})],F.prototype,"getTags",1),M([(0,w.cM)()],F.prototype,"getTreeEntryForRevision",1),M([(0,w.cM)()],F.prototype,"getTreeForRevision",1),M([(0,w.cM)()],F.prototype,"hasBranchOrTag",1),M([(0,w.cM)()],F.prototype,"hasCommitBeenPushed",1),M([(0,w.cM)()],F.prototype,"getDiffTool",1),M([(0,w.cM)()],F.prototype,"openDiffTool",1),M([(0,w.cM)()],F.prototype,"openDirectoryCompare",1),M([(0,w.cM)()],F.prototype,"resolveReference",1),M([(0,w.cM)()],F.prototype,"validateBranchOrTagName",1),M([(0,w.cM)()],F.prototype,"validateReference",1),M([(0,w.cM)()],F.prototype,"stageFile",1),M([(0,w.cM)()],F.prototype,"stageDirectory",1),M([(0,w.cM)()],F.prototype,"unStageFile",1),M([(0,w.cM)()],F.prototype,"unStageDirectory",1),M([(0,w.cM)()],F.prototype,"stashApply",1),M([(0,w.cM)()],F.prototype,"stashDelete",1),M([(0,w.cM)({args:{2:L=>L?.length}})],F.prototype,"stashSave",1),M([(0,Fe.H)()],F.prototype,"ensureRepositoryContext",1),M([(0,Fe.H)()],F.prototype,"ensureGitHub",1);function We(L,e){return`${L}${e!=null?`+${(0,K.e)(JSON.stringify(e))}`:""}`}S(We,"encodeAuthority")},8301:(ue,se,C)=>{"use strict";C.r(se),C.d(se,{GitHubPullRequest:()=>k,fromCommitFileStatus:()=>G});var _=C(3901),K=C(9052),k;(I=>{function ne(Z,ce){return new K.i7(ce,{name:Z.author.login,avatarUrl:Z.author.avatarUrl,url:Z.author.url},String(Z.number),Z.title,Z.permalink,V(Z.state),new Date(Z.updatedAt),Z.closedAt==null?void 0:new Date(Z.closedAt),Z.mergedAt==null?void 0:new Date(Z.mergedAt))}S(ne,"from"),I.from=ne;function V(Z){return Z==="MERGED"?K.o0.Merged:Z==="CLOSED"?K.o0.Closed:K.o0.Open}S(V,"fromState"),I.fromState=V;function fe(Z){return Z===K.o0.Merged?"MERGED":Z===K.o0.Closed?"CLOSED":"OPEN"}S(fe,"toState"),I.toState=fe})(k||(k={}));function G(I){switch(I){case"added":return _.NV.Added;case"changed":case"modified":return _.NV.Modified;case"removed":return _.NV.Deleted;case"renamed":return _.NV.Renamed;case"copied":return _.NV.Copied}}S(G,"fromCommitFileStatus")},778:(ue,se,C)=>{var _=C(2479);ue.exports=_(K),ue.exports.strict=_(k),K.proto=K(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return K(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return k(this)},configurable:!0})});function K(G){var I=S(function(){return I.called?I.value:(I.called=!0,I.value=G.apply(this,arguments))},"f");return I.called=!1,I}S(K,"once");function k(G){var I=S(function(){if(I.called)throw new Error(I.onceError);return I.called=!0,I.value=G.apply(this,arguments)},"f"),ne=G.name||"Function wrapped with `once`";return I.onceError=ne+" shouldn't be called more than once",I.called=!1,I}S(k,"onceStrict")},2479:ue=>{ue.exports=se;function se(C,_){if(C&&_)return se(C)(_);if(typeof C!="function")throw new TypeError("need wrapper function");return Object.keys(C).forEach(function(k){K[k]=C[k]}),K;function K(){for(var k=new Array(arguments.length),G=0;G<k.length;G++)k[G]=arguments[G];var I=C.apply(this,k),ne=k[k.length-1];return typeof I=="function"&&I!==ne&&Object.keys(ne).forEach(function(V){I[V]=ne[V]}),I}S(K,"wrapper")}S(se,"wrappy")}};
