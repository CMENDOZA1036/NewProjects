var ct=Object.defineProperty;var C=(le,oe)=>ct(le,"name",{value:oe,configurable:!0});exports.id=457;exports.ids=[457];exports.modules={5186:(le,oe,b)=>{var A=b(3698),Q=b(2505),k=b(6417),G=Function.bind,Y=G.bind(G);function j(W,fe,ee){var ne=Y(k,null).apply(null,ee?[fe,ee]:[fe]);W.api={remove:ne},W.remove=ne,["before","error","after","wrap"].forEach(function(he){var Ce=ee?[fe,he,ee]:[fe,he];W[he]=W.api[he]=Y(Q,null).apply(null,Ce)})}C(j,"bindApi");function ue(){var W="h",fe={registry:{}},ee=A.bind(null,fe,W);return j(ee,fe,W),ee}C(ue,"HookSingular");function de(){var W={registry:{}},fe=A.bind(null,W);return j(fe,W),fe}C(de,"HookCollection");var X=!1;function me(){return X||(console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'),X=!0),de()}C(me,"Hook"),me.Singular=ue.bind(),me.Collection=de.bind(),le.exports=me,le.exports.Hook=me,le.exports.Singular=me.Singular,le.exports.Collection=me.Collection},2505:le=>{le.exports=oe;function oe(b,A,Q,k){var G=k;b.registry[Q]||(b.registry[Q]=[]),A==="before"&&(k=C(function(Y,j){return Promise.resolve().then(G.bind(null,j)).then(Y.bind(null,j))},"hook")),A==="after"&&(k=C(function(Y,j){var ue;return Promise.resolve().then(Y.bind(null,j)).then(function(de){return ue=de,G(ue,j)}).then(function(){return ue})},"hook")),A==="error"&&(k=C(function(Y,j){return Promise.resolve().then(Y.bind(null,j)).catch(function(ue){return G(ue,j)})},"hook")),b.registry[Q].push({hook:k,orig:G})}C(oe,"addHook")},3698:le=>{le.exports=oe;function oe(b,A,Q,k){if(typeof Q!="function")throw new Error("method for before hook must be a function");return k||(k={}),Array.isArray(A)?A.reverse().reduce(function(G,Y){return oe.bind(null,b,Y,G,k)},Q)():Promise.resolve().then(function(){return b.registry[A]?b.registry[A].reduce(function(G,Y){return Y.hook.bind(null,G,k)},Q)():Q(k)})}C(oe,"register")},6417:le=>{le.exports=oe;function oe(b,A,Q){if(!!b.registry[A]){var k=b.registry[A].map(function(G){return G.orig}).indexOf(Q);k!==-1&&b.registry[A].splice(k,1)}}C(oe,"removeHook")},8026:(le,oe,b)=>{"use strict";b.r(oe),b.d(oe,{GitHubApi:()=>te});function A(){return typeof navigator=="object"&&"userAgent"in navigator?navigator.userAgent:typeof process=="object"&&"version"in process?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}C(A,"getUserAgent");var Q=b(5186);/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function k(c){return Object.prototype.toString.call(c)==="[object Object]"}C(k,"isObject");function G(c){var n,o;return k(c)===!1?!1:(n=c.constructor,n===void 0?!0:(o=n.prototype,!(k(o)===!1||o.hasOwnProperty("isPrototypeOf")===!1)))}C(G,"isPlainObject");function Y(c){return c?Object.keys(c).reduce((n,o)=>(n[o.toLowerCase()]=c[o],n),{}):{}}C(Y,"lowercaseKeys");function j(c,n){const o=Object.assign({},c);return Object.keys(n).forEach(i=>{G(n[i])?i in c?o[i]=j(c[i],n[i]):Object.assign(o,{[i]:n[i]}):Object.assign(o,{[i]:n[i]})}),o}C(j,"mergeDeep");function ue(c){for(const n in c)c[n]===void 0&&delete c[n];return c}C(ue,"removeUndefinedProperties");function de(c,n,o){if(typeof n=="string"){let[l,a]=n.split(" ");o=Object.assign(a?{method:l,url:a}:{url:l},o)}else o=Object.assign({},n);o.headers=Y(o.headers),ue(o),ue(o.headers);const i=j(c||{},o);return c&&c.mediaType.previews.length&&(i.mediaType.previews=c.mediaType.previews.filter(l=>!i.mediaType.previews.includes(l)).concat(i.mediaType.previews)),i.mediaType.previews=i.mediaType.previews.map(l=>l.replace(/-preview/,"")),i}C(de,"merge");function X(c,n){const o=/\?/.test(c)?"&":"?",i=Object.keys(n);return i.length===0?c:c+o+i.map(l=>l==="q"?"q="+n.q.split("+").map(encodeURIComponent).join("+"):`${l}=${encodeURIComponent(n[l])}`).join("&")}C(X,"addQueryParameters");const me=/\{[^}]+\}/g;function W(c){return c.replace(/^\W+|\W+$/g,"").split(/,/)}C(W,"removeNonChars");function fe(c){const n=c.match(me);return n?n.map(W).reduce((o,i)=>o.concat(i),[]):[]}C(fe,"extractUrlVariableNames");function ee(c,n){return Object.keys(c).filter(o=>!n.includes(o)).reduce((o,i)=>(o[i]=c[i],o),{})}C(ee,"omit");function ne(c){return c.split(/(%[0-9A-Fa-f]{2})/g).map(function(n){return/%[0-9A-Fa-f]/.test(n)||(n=encodeURI(n).replace(/%5B/g,"[").replace(/%5D/g,"]")),n}).join("")}C(ne,"encodeReserved");function he(c){return encodeURIComponent(c).replace(/[!'()*]/g,function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})}C(he,"encodeUnreserved");function Ce(c,n,o){return n=c==="+"||c==="#"?ne(n):he(n),o?he(o)+"="+n:n}C(Ce,"encodeValue");function Se(c){return c!=null}C(Se,"isDefined");function _e(c){return c===";"||c==="&"||c==="?"}C(_e,"isKeyOperator");function qe(c,n,o,i){var l=c[o],a=[];if(Se(l)&&l!=="")if(typeof l=="string"||typeof l=="number"||typeof l=="boolean")l=l.toString(),i&&i!=="*"&&(l=l.substring(0,parseInt(i,10))),a.push(Ce(n,l,_e(n)?o:""));else if(i==="*")Array.isArray(l)?l.filter(Se).forEach(function(u){a.push(Ce(n,u,_e(n)?o:""))}):Object.keys(l).forEach(function(u){Se(l[u])&&a.push(Ce(n,l[u],u))});else{const u=[];Array.isArray(l)?l.filter(Se).forEach(function(d){u.push(Ce(n,d))}):Object.keys(l).forEach(function(d){Se(l[d])&&(u.push(he(d)),u.push(Ce(n,l[d].toString())))}),_e(n)?a.push(he(o)+"="+u.join(",")):u.length!==0&&a.push(u.join(","))}else n===";"?Se(l)&&a.push(he(o)):l===""&&(n==="&"||n==="?")?a.push(he(o)+"="):l===""&&a.push("");return a}C(qe,"getValues");function He(c){return{expand:K.bind(null,c)}}C(He,"parseUrl");function K(c,n){var o=["+","#",".","/",";","?","&"];return c.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(i,l,a){if(l){let d="";const m=[];if(o.indexOf(l.charAt(0))!==-1&&(d=l.charAt(0),l=l.substr(1)),l.split(/,/g).forEach(function(p){var w=/([^:\*]*)(?::(\d+)|(\*))?/.exec(p);m.push(qe(n,d,w[1],w[2]||w[3]))}),d&&d!=="+"){var u=",";return d==="?"?u="&":d!=="#"&&(u=d),(m.length!==0?d:"")+m.join(u)}else return m.join(",")}else return ne(a)})}C(K,"expand");function Re(c){let n=c.method.toUpperCase(),o=(c.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),i=Object.assign({},c.headers),l,a=ee(c,["method","baseUrl","url","headers","request","mediaType"]);const u=fe(o);o=He(o).expand(a),/^http/.test(o)||(o=c.baseUrl+o);const d=Object.keys(c).filter(w=>u.includes(w)).concat("baseUrl"),m=ee(a,d);if(!/application\/octet-stream/i.test(i.accept)&&(c.mediaType.format&&(i.accept=i.accept.split(/,/).map(w=>w.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${c.mediaType.format}`)).join(",")),c.mediaType.previews.length)){const w=i.accept.match(/[\w-]+(?=-preview)/g)||[];i.accept=w.concat(c.mediaType.previews).map(U=>{const P=c.mediaType.format?`.${c.mediaType.format}`:"+json";return`application/vnd.github.${U}-preview${P}`}).join(",")}return["GET","HEAD"].includes(n)?o=X(o,m):"data"in m?l=m.data:Object.keys(m).length?l=m:i["content-length"]=0,!i["content-type"]&&typeof l<"u"&&(i["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(n)&&typeof l>"u"&&(l=""),Object.assign({method:n,url:o,headers:i},typeof l<"u"?{body:l}:null,c.request?{request:c.request}:null)}C(Re,"parse");function y(c,n,o){return Re(de(c,n,o))}C(y,"endpointWithDefaults");function Fe(c,n){const o=de(c,n),i=y.bind(null,o);return Object.assign(i,{DEFAULTS:o,defaults:Fe.bind(null,o),merge:de.bind(null,o),parse:Re})}C(Fe,"withDefaults");const Be=`octokit-endpoint.js/7.0.1 ${A()}`,je=Fe(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":Be},mediaType:{format:"",previews:[]}});var Ie=b(5568);class Pe extends Error{constructor(n){super(n),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="Deprecation"}}C(Pe,"Deprecation");var De=b(778),Te=b.n(De);const Ye=Te()(c=>console.warn(c)),Ge=Te()(c=>console.warn(c));class $ extends Error{constructor(n,o,i){super(n),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=o;let l;"headers"in i&&typeof i.headers<"u"&&(l=i.headers),"response"in i&&(this.response=i.response,l=i.response.headers);const a=Object.assign({},i.request);i.request.headers.authorization&&(a.headers=Object.assign({},i.request.headers,{authorization:i.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),a.url=a.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=a,Object.defineProperty(this,"code",{get(){return Ye(new Pe("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),o}}),Object.defineProperty(this,"headers",{get(){return Ge(new Pe("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.")),l||{}}})}}C($,"RequestError");const ge="6.2.1";function Me(c){return c.arrayBuffer()}C(Me,"getBufferResponse");function Ee(c){const n=c.request&&c.request.log?c.request.log:console;(G(c.body)||Array.isArray(c.body))&&(c.body=JSON.stringify(c.body));let o={},i,l;return(c.request&&c.request.fetch||globalThis.fetch||Ie.ZP)(c.url,Object.assign({method:c.method,body:c.body,headers:c.headers,redirect:c.redirect},c.request)).then(async u=>{l=u.url,i=u.status;for(const d of u.headers)o[d[0]]=d[1];if("deprecation"in o){const d=o.link&&o.link.match(/<([^>]+)>; rel="deprecation"/),m=d&&d.pop();n.warn(`[@octokit/request] "${c.method} ${c.url}" is deprecated. It is scheduled to be removed on ${o.sunset}${m?`. See ${m}`:""}`)}if(!(i===204||i===205)){if(c.method==="HEAD"){if(i<400)return;throw new $(u.statusText,i,{response:{url:l,status:i,headers:o,data:void 0},request:c})}if(i===304)throw new $("Not modified",i,{response:{url:l,status:i,headers:o,data:await xe(u)},request:c});if(i>=400){const d=await xe(u);throw new $(ke(d),i,{response:{url:l,status:i,headers:o,data:d},request:c})}return xe(u)}}).then(u=>({status:i,url:l,headers:o,data:u})).catch(u=>{throw u instanceof $||u.name==="AbortError"?u:new $(u.message,500,{request:c})})}C(Ee,"fetchWrapper");async function xe(c){const n=c.headers.get("content-type");return/application\/json/.test(n)?c.json():!n||/^text\/|charset=utf-8$/.test(n)?c.text():Me(c)}C(xe,"getResponseData");function ke(c){return typeof c=="string"?c:"message"in c?Array.isArray(c.errors)?`${c.message}: ${c.errors.map(JSON.stringify).join(", ")}`:c.message:`Unknown error: ${JSON.stringify(c)}`}C(ke,"toErrorMessage");function S(c,n){const o=c.defaults(n);return Object.assign(C(function(l,a){const u=o.merge(l,a);if(!u.request||!u.request.hook)return Ee(o.parse(u));const d=C((m,p)=>Ee(o.parse(o.merge(m,p))),"request");return Object.assign(d,{endpoint:o,defaults:S.bind(null,o)}),u.request.hook(d,u)},"newApi"),{endpoint:o,defaults:S.bind(null,o)})}C(S,"dist_web_withDefaults");const Ae=S(je,{headers:{"user-agent":`octokit-request.js/${ge} ${A()}`}}),q="5.0.1";function e(c){return`Request failed due to following response errors:
`+c.errors.map(n=>` - ${n.message}`).join(`
`)}C(e,"_buildMessageForResponseErrors");class t extends Error{constructor(n,o,i){super(e(i)),this.request=n,this.headers=o,this.response=i,this.name="GraphqlResponseError",this.errors=i.errors,this.data=i.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}C(t,"GraphqlResponseError");const r=["method","baseUrl","url","headers","request","query","mediaType"],s=["query","method","url"],g=/\/api\/v3\/?$/;function h(c,n,o){if(o){if(typeof n=="string"&&"query"in o)return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));for(const u in o)if(!!s.includes(u))return Promise.reject(new Error(`[@octokit/graphql] "${u}" cannot be used as variable name`))}const i=typeof n=="string"?Object.assign({query:n},o):n,l=Object.keys(i).reduce((u,d)=>r.includes(d)?(u[d]=i[d],u):(u.variables||(u.variables={}),u.variables[d]=i[d],u),{}),a=i.baseUrl||c.endpoint.DEFAULTS.baseUrl;return g.test(a)&&(l.url=a.replace(g,"/api/graphql")),c(l).then(u=>{if(u.data.errors){const d={};for(const m of Object.keys(u.headers))d[m]=u.headers[m];throw new t(l,d,u.data)}return u.data.data})}C(h,"graphql");function v(c,n){const o=c.defaults(n);return Object.assign(C((l,a)=>h(o,l,a),"newApi"),{defaults:v.bind(null,o),endpoint:Ae.endpoint})}C(v,"graphql_dist_web_withDefaults");const f=v(Ae,{headers:{"user-agent":`octokit-graphql.js/${q} ${A()}`},method:"POST",url:"/graphql"});function R(c){return v(c,{method:"POST",url:"/graphql"})}C(R,"withCustomRequest");const D=/^v1\./,_=/^ghs_/,E=/^ghu_/;async function M(c){const n=c.split(/\./).length===3,o=D.test(c)||_.test(c),i=E.test(c);return{type:"token",token:c,tokenType:n?"app":o?"installation":i?"user-to-server":"oauth"}}C(M,"auth");function I(c){return c.split(/\./).length===3?`bearer ${c}`:`token ${c}`}C(I,"withAuthorizationPrefix");async function J(c,n,o,i){const l=n.endpoint.merge(o,i);return l.headers.authorization=I(c),n(l)}C(J,"hook");const x=C(function(n){if(!n)throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");if(typeof n!="string")throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");return n=n.replace(/^(token|bearer) +/i,""),Object.assign(M.bind(null,n),{hook:J.bind(null,n)})},"createTokenAuth"),L="4.0.5";class H{constructor(n={}){const o=new Q.Collection,i={baseUrl:Ae.endpoint.DEFAULTS.baseUrl,headers:{},request:Object.assign({},n.request,{hook:o.bind(null,"request")}),mediaType:{previews:[],format:""}};if(i.headers["user-agent"]=[n.userAgent,`octokit-core.js/${L} ${A()}`].filter(Boolean).join(" "),n.baseUrl&&(i.baseUrl=n.baseUrl),n.previews&&(i.mediaType.previews=n.previews),n.timeZone&&(i.headers["time-zone"]=n.timeZone),this.request=Ae.defaults(i),this.graphql=R(this.request).defaults(i),this.log=Object.assign({debug:()=>{},info:()=>{},warn:console.warn.bind(console),error:console.error.bind(console)},n.log),this.hook=o,n.authStrategy){const{authStrategy:a,...u}=n,d=a(Object.assign({request:this.request,log:this.log,octokit:this,octokitOptions:u},n.auth));o.wrap("request",d.hook),this.auth=d}else if(!n.auth)this.auth=async()=>({type:"unauthenticated"});else{const a=x(n.auth);o.wrap("request",a.hook),this.auth=a}this.constructor.plugins.forEach(a=>{Object.assign(this,a(this,n))})}static defaults(n){return C(class extends this{constructor(...i){const l=i[0]||{};if(typeof n=="function"){super(n(l));return}super(Object.assign({},n,l,l.userAgent&&n.userAgent?{userAgent:`${l.userAgent} ${n.userAgent}`}:null))}},"OctokitWithDefaults")}static plugin(...n){var o;const i=this.plugins;return o=C(class extends this{},"_a"),o.plugins=i.concat(n.filter(a=>!i.includes(a))),o}}C(H,"Octokit"),H.VERSION=L,H.plugins=[];var B=b(9496),N=b(1149),V=b(4673),ce=b(9179),F=b(5396),se=b(5059),we=b(3082),be=b(7530),ae=b(2436),Ue=b(1999),T=b(7369),ot=b(9417),st=b(2971),Ve=b(565),We=b(8301),ze=Object.defineProperty,at=Object.getOwnPropertyDescriptor,lt=C((c,n,o)=>n in c?ze(c,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[n]=o,"__defNormalProp"),re=C((c,n,o,i)=>{for(var l=i>1?void 0:i?at(n,o):n,a=c.length-1,u;a>=0;a--)(u=c[a])&&(l=(i?u(n,o,l):u(l))||l);return i&&l&&ze(n,o,l),l},"__decorateClass"),Ne=C((c,n,o)=>(lt(c,typeof n!="symbol"?n+"":n,o),o),"__publicField");const ye=Object.freeze({values:[]}),Xe=Object.freeze({ranges:[]});class te{constructor(n){Ne(this,"_onDidReauthenticate",new B.EventEmitter),Ne(this,"_disposable"),Ne(this,"_proxyAgent",null),Ne(this,"_enterpriseVersions",new Map),Ne(this,"_octokits",new Map),this._disposable=B.Disposable.from(ce.DN.onDidChange(o=>{(ce.DN.changed(o,"proxy")||ce.DN.changed(o,"outputLevel"))&&this.resetCaches()}),ce.DN.onDidChangeAny(o=>{(o.affectsConfiguration("http.proxy")||o.affectsConfiguration("http.proxyStrictSSL"))&&this.resetCaches()}))}get onDidReauthenticate(){return this._onDidReauthenticate.event}dispose(){var n;(n=this._disposable)==null||n.dispose()}resetCaches(){this._proxyAgent=null,this._octokits.clear(),this._enterpriseVersions.clear()}get proxyAgent(){if(!V.$L)return this._proxyAgent===null&&(this._proxyAgent=(0,N.Nx)()),this._proxyAgent}async getAccountForCommit(n,o,i,l,a,u){var d,m;const p=(0,T.UH)();try{const w=`query getAccountForCommit(
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
}`,U=await this.graphql(n,o,w,{...u,owner:i,repo:l,ref:a},p),P=(m=(d=U?.repository)==null?void 0:d.object)==null?void 0:m.author;return P==null?void 0:{provider:n,name:P.name??void 0,email:P.email??void 0,avatarUrl:!P.avatarUrl||Je(u)?P.avatarUrl??void 0:P.email&&u?.baseUrl!=null?await this.createEnterpriseAvatarUrl(n,o,u.baseUrl,P.email,u.avatarSize):void 0}}catch(w){if(w instanceof F.Ww)return;throw this.handleException(w,n,p)}}async getAccountForEmail(n,o,i,l,a,u){var d,m;const p=(0,T.UH)();try{const w=`query getAccountForEmail(
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
}`,U=await this.graphql(n,o,w,{...u,owner:i,repo:l,emailQuery:`in:email ${a}`},p),P=(m=(d=U?.search)==null?void 0:d.nodes)==null?void 0:m[0];return P==null?void 0:{provider:n,name:P.name??void 0,email:P.email??void 0,avatarUrl:!P.avatarUrl||Je(u)?P.avatarUrl??void 0:P.email&&u?.baseUrl!=null?await this.createEnterpriseAvatarUrl(n,o,u.baseUrl,P.email,u.avatarSize):void 0}}catch(w){if(w instanceof F.Ww)return;throw this.handleException(w,n,p)}}async getDefaultBranch(n,o,i,l,a){var u,d;const m=(0,T.UH)();try{const p=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		defaultBranchRef {
			name
		}
	}
}`,w=await this.graphql(n,o,p,{...a,owner:i,repo:l},m),U=((d=(u=w?.repository)==null?void 0:u.defaultBranchRef)==null?void 0:d.name)??void 0;return U==null?void 0:{provider:n,name:U}}catch(p){if(p instanceof F.Ww)return;throw this.handleException(p,n,m)}}async getIssueOrPullRequest(n,o,i,l,a,u){var d;const m=(0,T.UH)();try{const p=`query getIssueOrPullRequest(
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
}`,w=await this.graphql(n,o,p,{...u,owner:i,repo:l,number:a},m),U=(d=w?.repository)==null?void 0:d.issueOrPullRequest;return U==null?void 0:{provider:n,type:U.type,id:String(a),date:new Date(U.createdAt),title:U.title,closed:U.closed,closedDate:U.closedAt==null?void 0:new Date(U.closedAt),url:U.url}}catch(p){if(p instanceof F.Ww)return;throw this.handleException(p,n,m)}}async getPullRequestForBranch(n,o,i,l,a,u){var d,m,p,w;const U=(0,T.UH)();try{const P=`query getPullRequestForBranch(
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
}`,z=await this.graphql(n,o,P,{...u,owner:i,repo:l,branch:a,limit:10},U),O=(w=(p=(m=(d=z?.repository)==null?void 0:d.refs.nodes[0])==null?void 0:m.associatedPullRequests)==null?void 0:p.nodes)==null?void 0:w.filter(Z=>Z!=null&&(!Z.repository.isFork||Z.repository.owner.login===i));return O==null||O.length===0?void 0:(O.length>1&&O.sort((Z,ie)=>(Z.repository.owner.login===i?-1:1)-(ie.repository.owner.login===i?-1:1)||(Z.state==="OPEN"?-1:1)-(ie.state==="OPEN"?-1:1)||new Date(ie.updatedAt).getTime()-new Date(Z.updatedAt).getTime()),We.GitHubPullRequest.from(O[0],n))}catch(P){if(P instanceof F.Ww)return;throw this.handleException(P,n,U)}}async getPullRequestForCommit(n,o,i,l,a,u){var d,m,p,w;const U=(0,T.UH)();try{const P=`query getPullRequestForCommit(
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
}`,z=await this.graphql(n,o,P,{...u,owner:i,repo:l,ref:a},U),O=(w=(p=(m=(d=z?.repository)==null?void 0:d.object)==null?void 0:m.associatedPullRequests)==null?void 0:p.nodes)==null?void 0:w.filter(Z=>Z!=null&&(!Z.repository.isFork||Z.repository.owner.login===i));return O==null||O.length===0?void 0:(O.length>1&&O.sort((Z,ie)=>(Z.repository.owner.login===i?-1:1)-(ie.repository.owner.login===i?-1:1)||(Z.state==="OPEN"?-1:1)-(ie.state==="OPEN"?-1:1)||new Date(ie.updatedAt).getTime()-new Date(Z.updatedAt).getTime()),We.GitHubPullRequest.from(O[0],n))}catch(P){if(P instanceof F.Ww)return;throw this.handleException(P,n,U)}}async getBlame(n,o,i,l,a){var u,d,m,p,w;const U=(0,T.UH)();try{const P=`query getBlameRanges(
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
}`,z=await this.graphql(void 0,n,P,{owner:o,repo:i,ref:l,path:a},U);if(z==null)return Xe;const O=(m=(d=(u=z.repository)==null?void 0:u.object)==null?void 0:d.blame)==null?void 0:m.ranges;return O==null||O.length===0?{ranges:[],viewer:(p=z.viewer)==null?void 0:p.name}:{ranges:O,viewer:(w=z.viewer)==null?void 0:w.name}}catch(P){if(P instanceof F.Ww)return Xe;throw this.handleException(P,void 0,U)}}async getBranches(n,o,i,l){var a;const u=(0,T.UH)();try{const d=`query getBranches(
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
}`,m=await this.graphql(void 0,n,d,{owner:o,repo:i,branchQuery:l?.query,cursor:l?.cursor,limit:Math.min(100,l?.limit??100)},u);if(m==null)return ye;const p=(a=m.repository)==null?void 0:a.refs;return p==null?ye:{paging:{cursor:p.pageInfo.endCursor,more:p.pageInfo.hasNextPage},values:p.nodes}}catch(d){if(d instanceof F.Ww)return ye;throw this.handleException(d,void 0,u)}}async getCommit(n,o,i,l){var a,u,d,m,p,w,U,P,z,O;const Z=(0,T.UH)();try{const ie=await this.request(void 0,n,"GET /repos/{owner}/{repo}/commits/{ref}",{owner:o,repo:i,ref:l},Z),pe=ie?.data;if(pe==null)return;const{commit:$e}=pe;return{oid:pe.sha,parents:{nodes:pe.parents.map(Le=>({oid:Le.sha}))},message:$e.message,additions:(a=pe.stats)==null?void 0:a.additions,changedFiles:(u=pe.files)==null?void 0:u.length,deletions:(d=pe.stats)==null?void 0:d.deletions,author:{avatarUrl:((m=pe.author)==null?void 0:m.avatar_url)??void 0,date:((p=$e.author)==null?void 0:p.date)??new Date().toString(),email:((w=$e.author)==null?void 0:w.email)??void 0,name:((U=$e.author)==null?void 0:U.name)??""},committer:{date:((P=$e.committer)==null?void 0:P.date)??new Date().toString(),email:((z=$e.committer)==null?void 0:z.email)??void 0,name:((O=$e.committer)==null?void 0:O.name)??""},files:pe.files}}catch(ie){if(ie instanceof F.Ww)return;throw this.handleException(ie,void 0,Z)}}async getCommitForFile(n,o,i,l,a){if(we.p.isSha(l))return this.getCommit(n,o,i,l);const u=await this.getCommits(n,o,i,l,{limit:1,path:a});return u.values.length===0?void 0:{...await this.getCommit(n,o,i,u.values[0].oid)??u.values[0],viewer:u.viewer}}async getCommitBranches(n,o,i,l,a){var u,d;const m=(0,T.UH)();try{const p=`query getCommitBranches(
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
}`,w=await this.graphql(void 0,n,p,{owner:o,repo:i,since:a.toISOString(),until:a.toISOString()},m),U=(d=(u=w?.repository)==null?void 0:u.refs)==null?void 0:d.nodes;if(U==null)return[];const P=[];for(const z of U)for(const O of z.target.history.nodes)if(O.oid===l){P.push(z.name);break}return P}catch(p){if(p instanceof F.Ww)return[];throw this.handleException(p,void 0,m)}}async getCommitCount(n,o,i,l){var a,u;const d=(0,T.UH)();try{const m=`query getCommitCount(
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
}`,p=await this.graphql(void 0,n,m,{owner:o,repo:i,ref:l},d);return(u=(a=p?.repository)==null?void 0:a.ref)==null?void 0:u.target.history.totalCount}catch(m){if(m instanceof F.Ww)return;throw this.handleException(m,void 0,d)}}async getCommitOnBranch(n,o,i,l,a,u){var d;const m=(0,T.UH)();try{const p=`query getCommitOnBranch(
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
}`,w=await this.graphql(void 0,n,p,{owner:o,repo:i,ref:`refs/heads/${l}`,since:u.toISOString(),until:u.toISOString()},m),U=(d=w?.repository)==null?void 0:d.ref.target.history.nodes;if(U==null)return[];const P=[];for(const z of U)if(z.oid===a){P.push(l);break}return P}catch(p){if(p instanceof F.Ww)return[];throw this.handleException(p,void 0,m)}}async getCommits(n,o,i,l,a){var u,d,m,p;const w=(0,T.UH)();if(a?.limit===1&&a?.path==null)return this.getCommitsCoreSingle(n,o,i,l);try{const U=`query getCommits(
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
}`;let P;if(a?.authors!=null)if(a.authors.length===1){const[Z]=a.authors;P={id:Z.id,emails:Z.email?[Z.email]:void 0}}else{const Z=a.authors.filter(ie=>ie.email).map(ie=>ie.email);P=Z.length?{emails:Z}:void 0}const z=await this.graphql(void 0,n,U,{owner:o,repo:i,ref:l,after:a?.after,before:a?.before,path:a?.path,author:P,limit:Math.min(100,a?.limit??100),since:typeof a?.since=="string"?a?.since:(u=a?.since)==null?void 0:u.toISOString(),until:typeof a?.until=="string"?a?.until:(d=a?.until)==null?void 0:d.toISOString()},w),O=(p=(m=z?.repository)==null?void 0:m.object)==null?void 0:p.history;return O==null?ye:{paging:O.pageInfo.endCursor!=null?{cursor:O.pageInfo.endCursor??void 0,more:O.pageInfo.hasNextPage}:void 0,values:O.nodes,viewer:z?.viewer.name}}catch(U){if(U instanceof F.Ww)return ye;throw this.handleException(U,void 0,w)}}async getCommitsCoreSingle(n,o,i,l){var a;const u=(0,T.UH)();try{const d=`query getCommit(
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
}`,m=await this.graphql(void 0,n,d,{owner:o,repo:i,ref:l},u);if(m==null)return ye;const p=(a=m.repository)==null?void 0:a.object;return p!=null?{values:[p],viewer:m.viewer.name}:ye}catch(d){if(d instanceof F.Ww)return ye;throw this.handleException(d,void 0,u)}}async getCommitRefs(n,o,i,l,a){var u,d;const m=(0,T.UH)();try{const p=`query getCommitRefs(
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
}`,w=await this.graphql(void 0,n,p,{owner:o,repo:i,ref:l,path:a?.path,first:a?.first,last:a?.last,after:a?.after,before:a?.before,since:a?.since,until:a?.until},m),U=(d=(u=w?.repository)==null?void 0:u.object)==null?void 0:d.history;return U==null?void 0:{pageInfo:U.pageInfo,totalCount:U.totalCount,values:U.nodes}}catch(p){if(p instanceof F.Ww)return;throw this.handleException(p,void 0,m)}}async getNextCommitRefs(n,o,i,l,a,u){const d=await this.getCommitDate(n,o,i,u);if(d==null)return[];let m=await this.getCommitRefs(n,o,i,l,{path:a,first:1,since:d});if(m==null)return[];const p=`${m.pageInfo.startCursor.split(" ",1)[0]} ${m.totalCount}`;let w;if([,w]=p.split(" ",2),w=Math.min(parseInt(w,10),5),m=await this.getCommitRefs(n,o,i,l,{path:a,last:w,before:p}),m==null)return[];const U=[];for(const{oid:P}of m.values){if(P===u)break;U.push(P)}return U.reverse()}async getCommitDate(n,o,i,l){var a,u;const d=(0,T.UH)();try{const m=`query getCommitDate(
	$owner: String!
	$repo: String!
	$sha: GitObjectID!
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $sha) {
			... on Commit { committer { date } }
		}
	}
}`,p=await this.graphql(void 0,n,m,{owner:o,repo:i,sha:l},d);return(u=(a=p?.repository)==null?void 0:a.object)==null?void 0:u.committer.date}catch(m){if(m instanceof F.Ww)return;throw this.handleException(m,void 0,d)}}async getContributors(n,o,i){const l=(0,T.UH)();try{const a=await this.request(void 0,n,"GET /repos/{owner}/{repo}/contributors",{owner:o,repo:i,per_page:100},l);return a?.data==null?[]:a.data}catch(a){if(a instanceof F.Ww)return[];throw this.handleException(a,void 0,l)}}async getDefaultBranchName(n,o,i){var l,a;const u=(0,T.UH)();try{const d=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		defaultBranchRef {
			name
		}
	}
}`,m=await this.graphql(void 0,n,d,{owner:o,repo:i},u);return m==null?void 0:((a=(l=m.repository)==null?void 0:l.defaultBranchRef)==null?void 0:a.name)??void 0}catch(d){if(d instanceof F.Ww)return;throw this.handleException(d,void 0,u)}}async getCurrentUser(n,o,i){var l,a,u,d;const m=(0,T.UH)();try{const p=`query getCurrentUser(
	$owner: String!
	$repo: String!
) {
	viewer { name, email, login, id }
	repository(owner: $owner, name: $repo) { viewerPermission }
}`,w=await this.graphql(void 0,n,p,{owner:o,repo:i},m);return w==null?void 0:{name:(l=w.viewer)==null?void 0:l.name,email:(a=w.viewer)==null?void 0:a.email,username:(u=w.viewer)==null?void 0:u.login,id:(d=w.viewer)==null?void 0:d.id}}catch(p){if(p instanceof F.Ww)return;throw this.handleException(p,void 0,m)}}async getRepositoryVisibility(n,o,i){var l;const a=(0,T.UH)();try{const u=`query getRepositoryVisibility(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		visibility
	}
}`,d=await this.graphql(void 0,n,u,{owner:o,repo:i},a);return((l=d?.repository)==null?void 0:l.visibility)==null?void 0:d.repository.visibility==="PUBLIC"?se.q.Public:se.q.Private}catch(u){if(u instanceof F.Ww)return;throw this.handleException(u,void 0,a)}}async getTags(n,o,i,l){var a;const u=(0,T.UH)();try{const d=`query getTags(
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
}`,m=await this.graphql(void 0,n,d,{owner:o,repo:i,tagQuery:l?.query,cursor:l?.cursor,limit:Math.min(100,l?.limit??100)},u);if(m==null)return ye;const p=(a=m.repository)==null?void 0:a.refs;return p==null?ye:{paging:{cursor:p.pageInfo.endCursor,more:p.pageInfo.hasNextPage},values:p.nodes}}catch(d){if(d instanceof F.Ww)return ye;throw this.handleException(d,void 0,u)}}async resolveReference(n,o,i,l,a){var u,d,m,p,w,U;const P=(0,T.UH)();try{if(!a){const Z=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			oid
		}
	}
}`,ie=await this.graphql(void 0,n,Z,{owner:o,repo:i,ref:l},P);return((d=(u=ie?.repository)==null?void 0:u.object)==null?void 0:d.oid)??void 0}const z=`query resolveReference(
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
}`,O=await this.graphql(void 0,n,z,{owner:o,repo:i,ref:l,path:a},P);return((U=(w=(p=(m=O?.repository)==null?void 0:m.object)==null?void 0:p.history.nodes)==null?void 0:w[0])==null?void 0:U.oid)??void 0}catch(z){if(z instanceof F.Ww)return;throw this.handleException(z,void 0,P)}}async searchCommits(n,o,i){const l=(0,T.UH)(),a=Math.min(100,i?.limit??100);let u,d,m;i?.cursor!=null?([u,d,m]=i.cursor.split(" ",3),u=parseInt(u,10),d=parseInt(d,10),m=parseInt(m,10)):(u=1,d=a,m=0);try{const p=await this.request(void 0,n,"GET /search/commits",{q:o,sort:i?.sort,order:i?.order,per_page:d,page:u},l),w=p?.data;if(w==null||w.items.length===0)return;const U=w.items.map(O=>{var Z,ie,pe,$e,Le,Ke,Qe,Ze,et,tt,rt,nt,it;return{oid:O.sha,parents:{nodes:O.parents.map(ut=>({oid:ut.sha}))},message:O.commit.message,author:{avatarUrl:((Z=O.author)==null?void 0:Z.avatar_url)??void 0,date:((ie=O.commit.author)==null?void 0:ie.date)??((pe=O.commit.author)==null?void 0:pe.date)??new Date().toString(),email:(($e=O.author)==null?void 0:$e.email)??((Le=O.commit.author)==null?void 0:Le.email)??void 0,name:((Ke=O.author)==null?void 0:Ke.name)??((Qe=O.commit.author)==null?void 0:Qe.name)??""},committer:{date:((Ze=O.commit.committer)==null?void 0:Ze.date)??((et=O.committer)==null?void 0:et.date)??new Date().toString(),email:((tt=O.committer)==null?void 0:tt.email)??((rt=O.commit.committer)==null?void 0:rt.email)??void 0,name:((nt=O.committer)==null?void 0:nt.name)??((it=O.commit.committer)==null?void 0:it.name)??""}}}),P=m+w.items.length,z=w.incomplete_results||w.total_count>P;return{pageInfo:{startCursor:`${u} ${d} ${m}`,endCursor:z?`${u+1} ${d} ${P}`:void 0,hasPreviousPage:w.total_count>0&&u>1,hasNextPage:z},totalCount:w.total_count,values:U}}catch(p){if(p instanceof F.Ww)return;throw this.handleException(p,void 0,l)}}async getEnterpriseVersion(n,o,i){var l;let a=this._enterpriseVersions.get(o);if(a!=null)return a;if(a===null)return;const u=(0,T.UH)();try{const d=await this.request(n,o,"GET /meta",i,u),m=(l=d?.data)==null?void 0:l.installed_version;a=m?(0,Ve.mL)(m):null}catch{a=null}return this._enterpriseVersions.set(o,a),a??void 0}octokit(n,o){let i=this._octokits.get(n);if(i==null){let l;if(V.$L){let a=C(function(u,d){if(d.headers!=null){const{"user-agent":m,...p}=d.headers;m&&(d.headers=p)}return(0,N.he)(u,d)},"fetchCore");l=H.defaults({auth:`token ${n}`,request:{fetch:a}})}else l=H.defaults({auth:`token ${n}`,request:{agent:this.proxyAgent}});i=new l(o),this._octokits.set(n,i),(ae.Y.logLevel===ae.i.Debug||ae.Y.isDebugging)&&i.hook.wrap("request",async(a,u)=>{const d=new ot.u(`[GITHUB] ${u.method} ${u.url}`,{log:!1});try{return await a(u)}finally{let m;try{if(typeof u.query=="string"){const p=/(^[^({\n]+)/.exec(u.query);m=` ${p?.[1].trim()??u.query}`}}catch{}d.stop({message:m})}})}return i}async graphql(n,o,i,l,a){var u,d,m,p,w;try{return await(0,N.a_)(n?.getIgnoreSSLErrors()??!1,()=>this.octokit(o).graphql(i,l))}catch(U){if(U instanceof t){switch((d=(u=U.errors)==null?void 0:u[0])==null?void 0:d.type){case"NOT_FOUND":throw new F.Ww(U);case"FORBIDDEN":throw new F._7("github",F.Jx.Forbidden,U);case"RATE_LIMITED":{let P;const z=(m=U.headers)==null?void 0:m["x-ratelimit-reset"];throw z!=null&&(P=parseInt(z,10),Number.isNaN(P)&&(P=void 0)),new F.yx(U,o,P)}}ae.Y.isDebugging&&B.window.showErrorMessage(`GitHub request failed: ${((w=(p=U.errors)==null?void 0:p[0])==null?void 0:w.message)??U.message}`)}else U instanceof $?this.handleRequestError(n,o,U,a):ae.Y.isDebugging&&B.window.showErrorMessage(`GitHub request failed: ${U.message}`);throw U}}async request(n,o,i,l,a){try{return await(0,N.a_)(n?.getIgnoreSSLErrors()??!1,()=>this.octokit(o).request(i,l))}catch(u){throw u instanceof $?this.handleRequestError(n,o,u,a):ae.Y.isDebugging&&B.window.showErrorMessage(`GitHub request failed: ${u.message}`),u}}handleRequestError(n,o,i,l){var a,u,d,m,p;switch(i.status){case 404:case 410:case 422:throw new F.Ww(i);case 401:throw new F._7("github",F.Jx.Unauthorized,i);case 403:if(i.message.includes("rate limit")){let w;const U=(u=(a=i.response)==null?void 0:a.headers)==null?void 0:u["x-ratelimit-reset"];throw U!=null&&(w=parseInt(U,10),Number.isNaN(w)&&(w=void 0)),new F.yx(i,o,w)}throw new F._7("github",F.Jx.Forbidden,i);case 500:ae.Y.error(i,l),i.response!=null&&(n?.trackRequestException(),(0,Ue.vF)(`${n?.name??"GitHub"} failed to respond and might be experiencing issues.${n?.custom?"":" Please visit the [GitHub status page](https://githubstatus.com) for more information."}`));return;case 502:if(ae.Y.error(i,l),i.message.includes("timeout")){n?.trackRequestException(),(0,Ue.s$)(n?.name??"GitHub");return}break;default:if(i.status>=400&&i.status<500)throw new F.Bn(i);break}ae.Y.error(i,l),ae.Y.isDebugging&&B.window.showErrorMessage(`GitHub request failed: ${((p=(m=(d=i.response)==null?void 0:d.errors)==null?void 0:m[0])==null?void 0:p.message)??i.message}`)}handleException(n,o,i){return ae.Y.error(n,i),n instanceof F._7&&this.showAuthenticationErrorMessage(n,o),n}async showAuthenticationErrorMessage(n,o){if(n.reason===F.Jx.Unauthorized||n.reason===F.Jx.Forbidden){const i="Reauthenticate";await B.window.showErrorMessage(`${n.message}. Would you like to try reauthenticating${n.reason===F.Jx.Forbidden?" to provide additional access":""}?`,i)===i&&(await o?.reauthenticate(),this._onDidReauthenticate.fire())}else B.window.showErrorMessage(n.message)}async createEnterpriseAvatarUrl(n,o,i,l,a){a=a??16;const u=await this.getEnterpriseVersion(n,o,{baseUrl:i});if((0,Ve.L5)(u,">= 3.0.0")){let d;const m=(0,be.a)(l);m!=null&&B.Uri.parse(i).authority===m.authority&&(m.userId!=null?d=`${i}/enterprise/avatars/u/${encodeURIComponent(m.userId)}?s=${a}`:m.login!=null&&(d=`${i}/enterprise/avatars/${encodeURIComponent(m.login)}?s=${a}`)),d==null&&(d=`${i}/enterprise/avatars/u/e?email=${encodeURIComponent(l)}&s=${a}`);const p=await(0,N.a_)(n?.getIgnoreSSLErrors()??!1,()=>(0,N.he)(d,{method:"GET",headers:{Authorization:`Bearer ${o}`}}));if(p.ok){const w=(0,st.US)(new Uint8Array(await p.arrayBuffer()));return`data:${p.headers.get("content-type")};base64,${w}`}}return`https://avatars.githubusercontent.com/u/e?email=${encodeURIComponent(l)}&s=${a}`}}C(te,"GitHubApi"),re([(0,T.fF)({args:{0:c=>c.name,1:"<token>"}})],te.prototype,"getAccountForCommit",1),re([(0,T.fF)({args:{0:c=>c.name,1:"<token>"}})],te.prototype,"getAccountForEmail",1),re([(0,T.fF)({args:{0:c=>c.name,1:"<token>"}})],te.prototype,"getDefaultBranch",1),re([(0,T.fF)({args:{0:c=>c.name,1:"<token>"}})],te.prototype,"getIssueOrPullRequest",1),re([(0,T.fF)({args:{0:c=>c.name,1:"<token>"}})],te.prototype,"getPullRequestForBranch",1),re([(0,T.fF)({args:{0:c=>c.name,1:"<token>"}})],te.prototype,"getPullRequestForCommit",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getBlame",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getBranches",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getCommit",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getCommitForFile",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getCommitBranches",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getCommitCount",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getCommitOnBranch",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getCommits",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getCommitRefs",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getNextCommitRefs",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getContributors",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getDefaultBranchName",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getCurrentUser",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getRepositoryVisibility",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getTags",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"resolveReference",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"searchCommits",1),re([(0,T.fF)({args:{0:"<token>"}})],te.prototype,"getEnterpriseVersion",1);function Je(c){return c?.baseUrl==null||c.baseUrl==="https://api.github.com"}C(Je,"isGitHubDotCom")},3333:(le,oe,b)=>{"use strict";b.r(oe),b.d(oe,{GitHubGitProvider:()=>S});var A=b(9496),Q=b(7267),k=b(9179),G=b(1045),Y=b(313),j=b(5396),ue=b(6532),de=b(5059),X=b(2324),me=b(2742),W=b(8031),fe=b(9735),ee=b(3901),ne=b(3082),he=b(2804),Ce=b(8991),Se=b(3492),_e=b(6016),qe=b(5731),He=b(3969),K=b(2436),Re=b(5861),y=b(7369),Fe=b(2886),ve=b(516),Be=b(680),Oe=b(2378);async function je(q){try{const e=A.extensions.getExtension("ms-vscode.remote-repositories")??A.extensions.getExtension("GitHub.remotehub");if(e==null)throw K.Y.log("GitHub Repositories extension is not installed or enabled"),new j.R5("GitHub Repositories","GitHub.remotehub");return e.isActive?e.exports:await e.activate()}catch(e){if(K.Y.error(e,"Unable to get required api from the GitHub Repositories extension"),e instanceof j.R5,q)return;throw e}}C(je,"getRemoteHubApi");var Ie=(q=>(q[q.Branch=0]="Branch",q[q.RemoteBranch=1]="RemoteBranch",q[q.Tag=2]="Tag",q[q.Commit=3]="Commit",q))(Ie||{}),Pe=(q=>(q[q.Branch=0]="Branch",q[q.Tag=1]="Tag",q[q.Commit=2]="Commit",q[q.PullRequest=3]="PullRequest",q[q.Tree=4]="Tree",q))(Pe||{}),De=b(8301),Te=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Ge=C((q,e,t)=>e in q?Te(q,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):q[e]=t,"__defNormalProp"),$=C((q,e,t,r)=>{for(var s=r>1?void 0:r?Ye(e,t):e,g=q.length-1,h;g>=0;g--)(h=q[g])&&(s=(r?h(e,t,s):h(s))||s);return r&&s&&Te(e,t,s),s},"__decorateClass"),ge=C((q,e,t)=>(Ge(q,typeof e!="symbol"?e+"":e,t),t),"__publicField");const Me=Object.freeze({values:[]}),Ee=Promise.resolve(void 0),xe=["repo","read:user","user:email"],ke=/^[^/](?!.*\/\.)(?!.*\.\.)(?!.*\/\/)(?!.*@\{)[^\000-\037\177 ~^:?*[\\]+[^./]$/;class S{constructor(e){this.container=e,ge(this,"descriptor",{id:de.p.GitHub,name:"GitHub"}),ge(this,"supportedSchemes",new Set([G.sN.Virtual,G.sN.GitHub,G.sN.PRs])),ge(this,"_onDidChangeRepository",new A.EventEmitter),ge(this,"_onDidCloseRepository",new A.EventEmitter),ge(this,"_onDidOpenRepository",new A.EventEmitter),ge(this,"_branchesCache",new Map),ge(this,"_repoInfoCache",new Map),ge(this,"_tagsCache",new Map),ge(this,"_disposables",[]),ge(this,"_github"),ge(this,"_remotehub"),ge(this,"_remotehubPromise"),ge(this,"_sessionPromise")}get onDidChangeRepository(){return this._onDidChangeRepository.event}get onDidCloseRepository(){return this._onDidCloseRepository.event}get onDidOpenRepository(){return this._onDidOpenRepository.event}dispose(){this._disposables.forEach(e=>void e.dispose())}onRepositoryChanged(e,t){this._branchesCache.delete(e.path),this._tagsCache.delete(e.path),this._repoInfoCache.delete(e.path),this._onDidChangeRepository.fire(t)}async discoverRepositories(e){if(!this.supportedSchemes.has(e.scheme))return[];try{const{remotehub:t}=await this.ensureRepositoryContext(e.toString(),!0),r=t.getVirtualWorkspaceUri(e);return r==null?[]:this.openRepository(void 0,r,!0)}catch{return[]}}updateContext(){(0,Y.v)(G.zf.HasVirtualFolders,this.container.git.hasOpenRepositories(this.descriptor.id))}openRepository(e,t,r,s,g){return[new Ce._j(this.container,this.onRepositoryChanged.bind(this),this.descriptor,e,t,r,s??!A.window.state.focused,g)]}async supports(e){switch(e){case ue.A.Worktrees:return!1;default:return!0}}async visibility(e){const t=await this.getRemotes(e);if(t.length===0)return de.q.Local;const r=t.find(s=>s.name==="origin");return r!=null?this.getRemoteVisibility(r):de.q.Private}async getRemoteVisibility(e){var t;switch((t=e.provider)==null?void 0:t.id){case"github":{const{github:r,metadata:s,session:g}=await this.ensureRepositoryContext(e.repoPath);return await r.getRepositoryVisibility(g.accessToken,s.repo.owner,s.repo.name)??de.q.Private}default:return de.q.Private}}async getOpenScmRepositories(){return[]}async getScmRepository(e){}async getOrOpenScmRepository(e){}canHandlePathOrUri(e,t){if(!!this.supportedSchemes.has(e))return typeof t=="string"?t:t.toString()}getAbsoluteUri(e,t){if(typeof t=="string")if((0,ve.tE)(t))t=A.Uri.parse(t,!0);else throw A.window.showErrorMessage(`Unable to get absolute uri between ${typeof e=="string"?e:e.toString(!0)} and ${t}; Base path '${t}' must be a uri`),new Error(`Base path '${t}' must be a uri`);if(typeof e=="string"&&!(0,ve.tE)(e)&&!(0,ve.YP)(e))return A.Uri.joinPath(t,(0,ve.AH)(e));const r=this.getRelativePath(e,t);return A.Uri.joinPath(t,r)}async getBestRevisionUri(e,t,r){return r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t)}getRelativePath(e,t){if(typeof t=="string")if((0,ve.tE)(t))t=A.Uri.parse(t,!0);else throw A.window.showErrorMessage(`Unable to get relative path between ${typeof e=="string"?e:e.toString(!0)} and ${t}; Base path '${t}' must be a uri`),new Error(`Base path '${t}' must be a uri`);let r;if(typeof e=="string")if((0,ve.tE)(e))e=A.Uri.parse(e,!0);else return e=(0,ve.AH)(e),r=(0,ve.YP)(e)&&e.startsWith(t.path)?e.slice(t.path.length):e,r.charCodeAt(0)===G.mN.Slash&&(r=r.slice(1)),r;return r=(0,ve.AH)((0,ve.Gf)(t.path.slice(1),e.path.slice(1))),r}getRevisionUri(e,t,r){const s=this.createProviderUri(e,r,t);return r===ne.p.deletedOrMissing?s.with({query:"~"}):s}async getWorkingUri(e,t){return this.createVirtualUri(e,void 0,t.path)}async addRemote(e,t,r){}async pruneRemote(e,t){}async applyChangesToWorkingFile(e,t,r){}async branchContainsCommit(e,t,r){return!1}async checkout(e,t,r){}resetCaches(...e){(e.length===0||e.includes("branches"))&&this._branchesCache.clear(),(e.length===0||e.includes("tags"))&&this._tagsCache.clear(),e.length===0&&this._repoInfoCache.clear()}async excludeIgnoredUris(e,t){return t}async fetch(e,t){}async findRepositoryUri(e,t){const r=(0,y.UH)();try{return(await this.ensureRemoteHubApi()).getProviderRootUri(e).with({scheme:G.sN.Virtual})}catch(s){s instanceof j.R5,K.Y.error(s,r);return}}async getAheadBehindCommitCount(e,t){}async getBlame(e,t){const r=(0,y.UH)();if(t?.isDirty)return;let s="blame";e.sha!=null&&(s+=`:${e.sha}`);const g=await this.container.tracker.getOrAdd(e);if(g.state!=null){const v=g.state.getBlame(s);if(v!=null)return K.Y.debug(r,`Cache hit: '${s}'`),v.item}K.Y.debug(r,`Cache miss: '${s}'`),g.state==null&&(g.state=new Oe.p2);const h=this.getBlameCore(e,g,s,r);if(g.state!=null){K.Y.debug(r,`Cache add: '${s}'`);const v={item:h};g.state.setBlame(s,v)}return h}async getBlameCore(e,t,r,s){var g,h;try{const v=await this.ensureRepositoryContext(e.repoPath);if(v==null)return;const{metadata:f,github:R,remotehub:D,session:_}=v,E=D.getVirtualUri(D.getProviderRootUri(e)),M=this.getRelativePath(e,E);if(e.scheme===G.sN.Virtual){const[N,V]=await Promise.allSettled([A.workspace.fs.stat(e),A.workspace.fs.stat(e.with({scheme:G.sN.GitHub}))]);if(N.status!=="fulfilled"||V.status!=="fulfilled"||N.value.mtime!==V.value.mtime)return}const I=!e.sha||e.sha==="HEAD"?(await f.getRevision()).revision:e.sha,J=await R.getBlame(_.accessToken,f.repo.owner,f.repo.name,I,M),x=new Map,L=new Map,H=[];for(const N of J.ranges){const V=N.commit,{viewer:ce=_.account.label}=J,F=ce!=null&&V.author.name===ce?"You":V.author.name,se=ce!=null&&V.committer.name===ce?"You":V.committer.name;let we=x.get(F);we==null&&(we={name:F,lineCount:0},x.set(F,we)),we.lineCount+=N.endingLine-N.startingLine+1;let be=L.get(V.oid);be==null&&(be=new W.aM(this.container,e.repoPath,V.oid,new W._j(F,V.author.email,new Date(V.author.date),V.author.avatarUrl),new W._j(se,V.committer.email,new Date(V.author.date)),V.message.split(`
`,1)[0],(g=V.parents.nodes[0])!=null&&g.oid?[(h=V.parents.nodes[0])==null?void 0:h.oid]:[],V.message,new ee.K8(E.toString(),M,ee.NV.Modified),{changedFiles:V.changedFiles??0,additions:V.additions??0,deletions:V.deletions??0},[]),L.set(V.oid,be));for(let ae=N.startingLine;ae<=N.endingLine;ae++){const Ue={sha:V.oid,originalLine:ae,line:ae};be.lines.push(Ue),H[ae-1]=Ue}}const B=new Map([...x.entries()].sort((N,V)=>V[1].lineCount-N[1].lineCount));return{repoPath:e.repoPath,authors:B,commits:L,lines:H}}catch(v){if(t.state!=null&&!String(v).includes("No provider registered with")){const f=v?.toString()??"";K.Y.debug(s,`Cache replace (with empty promise): '${r}'`);const R={item:Ee,errorMessage:f};return t.state.setBlame(r,R),t.setBlameFailure(),Ee}return}}async getBlameContents(e,t){}async getBlameForLine(e,t,r,s){var g,h;const v=(0,y.UH)();if(!r?.isDirty){if(!s?.forceSingleLine){const f=await this.getBlame(e);if(f==null)return;let R=f.lines[t];if(R==null){if(f.lines.length!==t)return;R=f.lines[t-1]}const D=f.commits.get(R.sha);return D==null?void 0:{author:{...f.authors.get(D.author.name),lineCount:D.lines.length},commit:D,line:R}}try{const f=await this.ensureRepositoryContext(e.repoPath);if(f==null)return;const{metadata:R,github:D,remotehub:_,session:E}=f,M=_.getVirtualUri(_.getProviderRootUri(e)),I=this.getRelativePath(e,M),J=!e.sha||e.sha==="HEAD"?(await R.getRevision()).revision:e.sha,x=await D.getBlame(E.accessToken,R.repo.owner,R.repo.name,J,I),L=t+1,H=x.ranges.find(se=>se.startingLine===L);if(H==null)return;const B=H.commit,{viewer:N=E.account.label}=x,V=N!=null&&B.author.name===N?"You":B.author.name,ce=N!=null&&B.committer.name===N?"You":B.committer.name,F=new W.aM(this.container,e.repoPath,B.oid,new W._j(V,B.author.email,new Date(B.author.date),B.author.avatarUrl),new W._j(ce,B.committer.email,new Date(B.author.date)),B.message.split(`
`,1)[0],(g=B.parents.nodes[0])!=null&&g.oid?[(h=B.parents.nodes[0])==null?void 0:h.oid]:[],B.message,new ee.K8(M.toString(),I,ee.NV.Modified),{changedFiles:B.changedFiles??0,additions:B.additions??0,deletions:B.deletions??0},[]);for(let se=H.startingLine;se<=H.endingLine;se++){const we={sha:B.oid,originalLine:se,line:se};F.lines.push(we)}return{author:{name:V,lineCount:H.endingLine-H.startingLine+1},commit:F,line:{sha:B.oid,originalLine:H.startingLine,line:H.startingLine}}}catch(f){K.Y.error(v,f);return}}}async getBlameForLineContents(e,t,r,s){}async getBlameForRange(e,t){const r=await this.getBlame(e);if(r!=null)return this.getBlameRange(r,e,t)}async getBlameForRangeContents(e,t,r){const s=await this.getBlameContents(e,r);if(s!=null)return this.getBlameRange(s,e,t)}getBlameRange(e,t,r){if(e.lines.length===0)return{allLines:e.lines,...e};if(r.start.line===0&&r.end.line===e.lines.length-1)return{allLines:e.lines,...e};const s=e.lines.slice(r.start.line,r.end.line+1),g=new Set(s.map(_=>_.sha)),h=r.start.line+1,v=r.end.line+1,f=new Map,R=new Map;for(const _ of e.commits.values()){if(!g.has(_.sha))continue;const E=_.with({lines:_.lines.filter(I=>I.line>=h&&I.line<=v)});R.set(_.sha,E);let M=f.get(E.author.name);M==null&&(M={name:E.author.name,lineCount:0},f.set(M.name,M)),M.lineCount+=E.lines.length}const D=new Map([...f.entries()].sort((_,E)=>E[1].lineCount-_[1].lineCount));return{repoPath:t.repoPath,authors:D,commits:R,lines:s,allLines:e.lines}}async getBranch(e){const{values:[t]}=await this.getBranches(e,{filter:r=>r.current});return t}async getBranches(e,t){if(e==null)return Me;const r=(0,y.UH)();let s=t?.cursor?void 0:this._branchesCache.get(e);if(s==null){async function h(){var v;try{const{metadata:f,github:R,session:D}=await this.ensureRepositoryContext(e),_=await f.getRevision(),E=_.type===0?_.name:void 0,M=[];let I=t?.cursor;const J=I==null;for(;;){const x=await R.getBranches(D.accessToken,f.repo.owner,f.repo.name,{cursor:I});for(const L of x.values){const H=new Date(k.DN.get("advanced.commitOrdering")==="author-date"?L.target.authoredDate:L.target.committedDate),B=L.target.oid;M.push(new me.XI(e,L.name,!1,L.name===E,H,B,{name:`origin/${L.name}`,missing:!1}),new me.XI(e,`origin/${L.name}`,!0,!1,H,B))}if(!((v=x.paging)!=null&&v.more)||!J)return{...x,values:M};I=x.paging.cursor}}catch(f){return K.Y.error(f,r),this._branchesCache.delete(e),Me}}C(h,"load"),s=h.call(this),t?.cursor==null&&this._branchesCache.set(e,s)}let g=await s;return t?.filter!=null&&(g={...g,values:g.values.filter(t.filter)}),t?.sort!=null&&(0,me.YF)(g.values,typeof t.sort=="boolean"?void 0:t.sort),g}async getChangedFilesCount(e,t){if(!t)return;const r=await this.getCommit(e,t);if(r?.stats==null)return;const{stats:s}=r,g=typeof s.changedFiles=="number"?s.changedFiles:s.changedFiles.added+s.changedFiles.changed+s.changedFiles.deleted;return{additions:s.additions,deletions:s.deletions,changedFiles:g}}async getCommit(e,t){var r;if(e==null)return;const s=(0,y.UH)();try{const{metadata:g,github:h,session:v}=await this.ensureRepositoryContext(e),f=await h.getCommit(v.accessToken,g.repo.owner,g.repo.name,t);if(f==null)return;const{viewer:R=v.account.label}=f,D=R!=null&&f.author.name===R?"You":f.author.name,_=R!=null&&f.committer.name===R?"You":f.committer.name;return new W.aM(this.container,e,f.oid,new W._j(D,f.author.email,new Date(f.author.date),f.author.avatarUrl),new W._j(_,f.committer.email,new Date(f.committer.date)),f.message.split(`
`,1)[0],f.parents.nodes.map(E=>E.oid),f.message,((r=f.files)==null?void 0:r.map(E=>new ee.K8(e,E.filename??"",(0,De.fromCommitFileStatus)(E.status)??ee.NV.Modified,E.previous_filename,void 0,{additions:E.additions??0,deletions:E.deletions??0,changes:E.changes??0})))??[],{changedFiles:f.changedFiles??0,additions:f.additions??0,deletions:f.deletions??0},[])}catch(g){K.Y.error(g,s);return}}async getCommitBranches(e,t,r){if(e==null||r?.commitDate==null)return[];const s=(0,y.UH)();try{const{metadata:g,github:h,session:v}=await this.ensureRepositoryContext(e);let f;return r?.branch?f=await h.getCommitOnBranch(v.accessToken,g.repo.owner,g.repo.name,r?.branch,t,r?.commitDate):f=await h.getCommitBranches(v.accessToken,g.repo.owner,g.repo.name,t,r?.commitDate),f}catch(g){return K.Y.error(g,s),[]}}async getCommitCount(e,t){if(e==null)return;const r=(0,y.UH)();try{const{metadata:s,github:g,session:h}=await this.ensureRepositoryContext(e);return await g.getCommitCount(h?.accessToken,s.repo.owner,s.repo.name,t)}catch(s){K.Y.error(s,r);return}}async getCommitForFile(e,t,r){var s;if(e==null)return;const g=(0,y.UH)();try{const{metadata:h,github:v,remotehub:f,session:R}=await this.ensureRepositoryContext(e),D=this.getRelativePath(t,f.getProviderRootUri(t)),_=!r?.ref||r.ref==="HEAD"?(await h.getRevision()).revision:r.ref,E=await v.getCommitForFile(R.accessToken,h.repo.owner,h.repo.name,_,D);if(E==null)return;const{viewer:M=R.account.label}=E,I=M!=null&&E.author.name===M?"You":E.author.name,J=M!=null&&E.committer.name===M?"You":E.committer.name,x=(s=E.files)==null?void 0:s.map(H=>new ee.K8(e,H.filename??"",(0,De.fromCommitFileStatus)(H.status)??ee.NV.Modified,H.previous_filename,void 0,{additions:H.additions??0,deletions:H.deletions??0,changes:H.changes??0})),L=x?.find(H=>H.path===D);return new W.aM(this.container,e,E.oid,new W._j(I,E.author.email,new Date(E.author.date),E.author.avatarUrl),new W._j(J,E.committer.email,new Date(E.committer.date)),E.message.split(`
`,1)[0],E.parents.nodes.map(H=>H.oid),E.message,{file:L,files:x},{changedFiles:E.changedFiles??0,additions:E.additions??0,deletions:E.deletions??0},[])}catch(h){K.Y.error(h,g);return}}async getOldestUnpushedRefForFile(e,t){}async getContributors(e,t){if(e==null)return[];const r=(0,y.UH)();try{const{metadata:s,github:g,session:h}=await this.ensureRepositoryContext(e),v=await g.getContributors(h.accessToken,s.repo.owner,s.repo.name),f=await this.getCurrentUser(e),R=[];for(const D of v)D.type==="User"&&R.push(new fe.V(e,D.name,D.email,D.contributions,void 0,(0,_e.o)(f,D.name,D.email,D.login),void 0,D.login,D.avatar_url,D.node_id));return R}catch(s){return K.Y.error(s,r),[]}}async getCurrentUser(e){if(!e)return;const t=(0,y.UH)(),r=this._repoInfoCache.get(e);let s=r?.user;if(s!=null)return s;if(s!==null)try{const{metadata:g,github:h,session:v}=await this.ensureRepositoryContext(e);return s=await h.getCurrentUser(v.accessToken,g.repo.owner,g.repo.name),this._repoInfoCache.set(e,{...r,user:s??null}),s}catch(g){K.Y.error(g,t),this._repoInfoCache.set(e,{...r,user:null});return}}async getDefaultBranchName(e,t){if(e==null)return;const r=(0,y.UH)();try{const{metadata:s,github:g,session:h}=await this.ensureRepositoryContext(e);return await g.getDefaultBranchName(h.accessToken,s.repo.owner,s.repo.name)}catch(s){K.Y.error(s,r);return}}async getDiffForFile(e,t,r){}async getDiffForFileContents(e,t,r){}async getDiffForLine(e,t,r,s){}async getDiffStatus(e,t,r,s){}async getFileStatusForCommit(e,t,r){if(r===ne.p.deletedOrMissing||ne.p.isUncommitted(r))return;const s=await this.getCommitForFile(e,t,{ref:r});if(s!=null)return s.findFile(t)}async getLastFetchedTimestamp(e){}async getLog(e,t){var r,s,g;if(e==null)return;const h=(0,y.UH)(),v=this.getPagingLimit(t?.limit);try{const{metadata:f,github:R,session:D}=await this.ensureRepositoryContext(e),_=!t?.ref||t.ref==="HEAD"?(await f.getRevision()).revision:t.ref,E=await R.getCommits(D.accessToken,f.repo.owner,f.repo.name,_,{all:t?.all,authors:t?.authors,after:t?.cursor,limit:v,since:t?.since?new Date(t.since):void 0}),M=new Map,{viewer:I=D.account.label}=E;for(const x of E.values){const L=I!=null&&x.author.name===I?"You":x.author.name,H=I!=null&&x.committer.name===I?"You":x.committer.name;let B=M.get(x.oid);B==null&&(B=new W.aM(this.container,e,x.oid,new W._j(L,x.author.email,new Date(x.author.date),x.author.avatarUrl),new W._j(H,x.committer.email,new Date(x.committer.date)),x.message.split(`
`,1)[0],x.parents.nodes.map(N=>N.oid),x.message,(r=x.files)==null?void 0:r.map(N=>new ee.K8(e,N.filename??"",(0,De.fromCommitFileStatus)(N.status)??ee.NV.Modified,N.previous_filename,void 0,{additions:N.additions??0,deletions:N.deletions??0,changes:N.changes??0})),{changedFiles:x.changedFiles??0,additions:x.additions??0,deletions:x.deletions??0},[]),M.set(x.oid,B))}const J={repoPath:e,commits:M,sha:_,range:void 0,count:M.size,limit:v,hasMore:((s=E.paging)==null?void 0:s.more)??!1,cursor:(g=E.paging)==null?void 0:g.cursor,query:x=>this.getLog(e,{...t,limit:x})};return J.hasMore&&(J.more=this.getLogMoreFn(J,t)),J}catch(f){K.Y.error(f,h);return}}async getLogRefsOnly(e,t){const r=await this.getLog(e,t);if(r!=null)return new Set([...r.commits.values()].map(s=>s.ref))}getLogMoreFn(e,t){return async r=>{var s;const g=r!=null&&typeof r=="object"?r.until:void 0;let h=typeof r=="number"?r:void 0;if(g&&(0,Fe.G)(e.commits.values(),D=>D.ref===g))return e;h=this.getPagingLimit(h);const v=await this.getLog(e.repoPath,{...t,limit:h,cursor:e.cursor});if(v==null)return{...e,hasMore:!1};const f=new Map([...e.commits,...v.commits]),R={repoPath:e.repoPath,commits:f,sha:e.sha,range:void 0,count:f.size,limit:g==null?(e.limit??0)+h:void 0,hasMore:g==null?v.hasMore:!0,cursor:v.cursor,pagedCommits:()=>{for(const D of e.commits.keys())v.commits.delete(D);return v.commits},previousCursor:(s=(0,Fe.Z$)(e.commits))==null?void 0:s[0],query:e.query};return R.more=this.getLogMoreFn(R,t),R}}async getLogForSearch(e,t,r){var s,g,h;if(e==null)return;const v=(0,y.UH)(),f=He.n.parseSearchOperations(t.pattern);let R,D=f.get("commit:");if(D!=null){const M=await this.getCommit(e,D[0]);return M==null?void 0:{repoPath:e,commits:new Map([[M.sha,M]]),sha:M.sha,range:void 0,count:1,limit:1,hasMore:!1}}const _=[];for([R,D]of f.entries())switch(R){case"message:":_.push(...D.map(M=>M.replace(/ /g,"+")));break;case"author:":_.push(...D.map(M=>(M=M.replace(/ /g,"+"),M.startsWith("@")?`author:${M.slice(1)}`:M.startsWith('"@')?`author:"${M.slice(2)}`:M.includes("@")?`author-email:${M}`:`author-name:${M}`)));break}if(_.length===0)return;const E=this.getPagingLimit(r?.limit);try{const{metadata:M,github:I,session:J}=await this.ensureRepositoryContext(e),x=await I.searchCommits(J.accessToken,`repo:${M.repo.owner}/${M.repo.name}+${_.join("+").trim()}`,{cursor:r?.cursor,limit:E,sort:r?.ordering==="date"?"committer-date":r?.ordering==="author-date"?"author-date":void 0});if(x==null)return;const L=new Map,H=J.account.label;for(const N of x.values){const V=H!=null&&N.author.name===H?"You":N.author.name,ce=H!=null&&N.committer.name===H?"You":N.committer.name;let F=L.get(N.oid);F==null&&(F=new W.aM(this.container,e,N.oid,new W._j(V,N.author.email,new Date(N.author.date),N.author.avatarUrl),new W._j(ce,N.committer.email,new Date(N.committer.date)),N.message.split(`
`,1)[0],N.parents.nodes.map(se=>se.oid),N.message,(s=N.files)==null?void 0:s.map(se=>new ee.K8(e,se.filename??"",(0,De.fromCommitFileStatus)(se.status)??ee.NV.Modified,se.previous_filename,void 0,{additions:se.additions??0,deletions:se.deletions??0,changes:se.changes??0})),{changedFiles:N.changedFiles??0,additions:N.additions??0,deletions:N.deletions??0},[]),L.set(N.oid,F))}const B={repoPath:e,commits:L,sha:void 0,range:void 0,count:L.size,limit:E,hasMore:((g=x.pageInfo)==null?void 0:g.hasNextPage)??!1,cursor:((h=x.pageInfo)==null?void 0:h.endCursor)??void 0,query:N=>this.getLog(e,{...r,limit:N})};return B.hasMore&&(B.more=this.getLogForSearchMoreFn(B,t,r)),B}catch(M){K.Y.error(M,v);return}}getLogForSearchMoreFn(e,t,r){return async s=>{s=this.getPagingLimit(s);const g=await this.getLogForSearch(e.repoPath,t,{...r,limit:s,cursor:e.cursor});if(g==null)return{...e,hasMore:!1};const h=new Map([...e.commits,...g.commits]),v={repoPath:e.repoPath,commits:h,sha:e.sha,range:void 0,count:h.size,limit:(e.limit??0)+s,hasMore:g.hasMore,cursor:g.cursor,query:e.query};return v.more=this.getLogForSearchMoreFn(v,t,r),v}}async getLogForFile(e,t,r){if(e==null)return;const s=(0,y.UH)(),g=this.getRelativePath(t,e);if(e!=null&&e===g)throw new Error(`File name cannot match the repository path; path=${g}`);r={reverse:!1,...r},r.renames=!1,r.all=!1;let h="log";r.ref!=null&&(h+=`:${r.ref}`),r.limit=this.getPagingLimit(r?.limit),r.limit&&(h+=`:n${r.limit}`),r.renames&&(h+=":follow"),r.reverse&&(h+=":reverse"),r.since&&(h+=`:since=${r.since}`),r.skip&&(h+=`:skip${r.skip}`),r.cursor&&(h+=`:cursor=${r.cursor}`);const v=await this.container.tracker.getOrAdd(X.YY.fromFile(g,e,r.ref));if(!r.force&&r.range==null){if(v.state!=null){const R=v.state.getLog(h);if(R!=null)return K.Y.debug(s,`Cache hit: '${h}'`),R.item;if(r.ref!=null||r.limit!=null){const D=v.state.getLog(`log${r.renames?":follow":""}${r.reverse?":reverse":""}`);if(D!=null){if(r.ref==null)return K.Y.debug(s,`Cache hit: ~'${h}'`),D.item;K.Y.debug(s,`Cache ?: '${h}'`);let _=await D.item;if(_!=null&&!_.hasMore&&_.commits.has(r.ref)){K.Y.debug(s,`Cache hit: '${h}'`);let E=!0,M=0;const I=new Map((0,Fe.DZ)(_.commits.entries(),([x,L])=>{if(E){if(x!==r?.ref)return;E=!1}if(M++,!(r?.limit!=null&&M>r.limit))return[x,L]})),J={...r};return _={..._,limit:r.limit,count:I.size,commits:I,query:x=>this.getLogForFile(e,t,{...J,limit:x})},_}}}}K.Y.debug(s,`Cache miss: '${h}'`),v.state==null&&(v.state=new Oe.p2)}const f=this.getLogForFileCore(e,g,v,h,s,r);if(v.state!=null&&r.range==null){K.Y.debug(s,`Cache add: '${h}'`);const R={item:f};v.state.setLog(h,R)}return f}async getLogForFileCore(e,t,r,s,g,h){var v,f,R;if(e==null)return;const D=this.getPagingLimit(h?.limit);try{const _=await this.ensureRepositoryContext(e);if(_==null)return;const{metadata:E,github:M,remotehub:I,session:J}=_,x=this.getAbsoluteUri(t,e),L=this.getRelativePath(x,I.getProviderRootUri(x)),H=!h?.ref||h.ref==="HEAD"?(await E.getRevision()).revision:h.ref,B=await M.getCommits(J.accessToken,E.repo.owner,E.repo.name,H,{all:h?.all,after:h?.cursor,path:L,limit:D,since:h?.since?new Date(h.since):void 0}),N=new Map,{viewer:V=J.account.label}=B;for(const F of B.values){const se=V!=null&&F.author.name===V?"You":F.author.name,we=V!=null&&F.committer.name===V?"You":F.committer.name;let be=N.get(F.oid);if(be==null){const ae=(v=F.files)==null?void 0:v.map(T=>new ee.K8(e,T.filename??"",(0,De.fromCommitFileStatus)(T.status)??ee.NV.Modified,T.previous_filename,void 0,{additions:T.additions??0,deletions:T.deletions??0,changes:T.changes??0})),Ue=(0,ve.Mh)(L)?void 0:ae?.find(T=>T.path===L)??new ee.K8(e,L,ee.NV.Modified,void 0,void 0,F.changedFiles===1?{additions:F.additions??0,deletions:F.deletions??0,changes:0}:void 0);be=new W.aM(this.container,e,F.oid,new W._j(se,F.author.email,new Date(F.author.date),F.author.avatarUrl),new W._j(we,F.committer.email,new Date(F.committer.date)),F.message.split(`
`,1)[0],F.parents.nodes.map(T=>T.oid),F.message,{file:Ue,files:ae},{changedFiles:F.changedFiles??0,additions:F.additions??0,deletions:F.deletions??0},[]),N.set(F.oid,be)}}const ce={repoPath:e,commits:N,sha:H,range:void 0,count:N.size,limit:D,hasMore:((f=B.paging)==null?void 0:f.more)??!1,cursor:(R=B.paging)==null?void 0:R.cursor,query:F=>this.getLogForFile(e,t,{...h,limit:F})};return ce.hasMore&&(ce.more=this.getLogForFileMoreFn(ce,t,h)),ce}catch(_){if(r.state!=null&&h?.range==null&&!h?.reverse){const E=_?.toString()??"";K.Y.debug(g,`Cache replace (with empty promise): '${s}'`);const M={item:Ee,errorMessage:E};return r.state.setLog(s,M),Ee}return}}getLogForFileMoreFn(e,t,r){return async s=>{const g=s!=null&&typeof s=="object"?s.until:void 0;let h=typeof s=="number"?s:void 0;if(g&&(0,Fe.G)(e.commits.values(),D=>D.ref===g))return e;h=this.getPagingLimit(h);const v=await this.getLogForFile(e.repoPath,t,{...r,limit:g==null?h:0,cursor:e.cursor});if(v==null)return{...e,hasMore:!1};const f=new Map([...e.commits,...v.commits]),R={repoPath:e.repoPath,commits:f,sha:e.sha,range:e.range,count:f.size,limit:g==null?(e.limit??0)+h:void 0,hasMore:g==null?v.hasMore:!0,cursor:v.cursor,query:e.query};return R.more=this.getLogForFileMoreFn(R,t,r),R}}async getMergeBase(e,t,r,s){}async getMergeStatus(e){}async getRebaseStatus(e){}async getNextComparisonUris(e,t,r,s=0){if(!r)return;const g=(0,y.UH)();try{const h=await this.ensureRepositoryContext(e);if(h==null)return;const{metadata:v,github:f,remotehub:R,session:D}=h,_=this.getRelativePath(t,R.getProviderRootUri(t)),E=(await v.getRevision()).revision;r==="HEAD"&&(r=E);const M=await f.getNextCommitRefs(D.accessToken,v.repo.owner,v.repo.name,E,_,r);return{current:s===0?X.YY.fromFile(_,e,r):new X.YY(await this.getBestRevisionUri(e,_,M[s-1])),next:new X.YY(await this.getBestRevisionUri(e,_,M[s]))}}catch(h){throw K.Y.error(h,g),h}}async getPreviousComparisonUris(e,t,r,s=0,g=!1){var h,v;if(r===ne.p.deletedOrMissing)return;const f=(0,y.UH)();r===ne.p.uncommitted&&(r=void 0);try{const R=await this.ensureRepositoryContext(e);if(R==null)return;const{metadata:D,github:_,remotehub:E,session:M}=R,I=this.getRelativePath(t,E.getProviderRootUri(t)),J=r!=null?1:0,x=await _.getCommitRefs(M.accessToken,D.repo.owner,D.repo.name,!r||r==="HEAD"?(await D.getRevision()).revision:r,{path:I,first:J+s+1});if(x==null)return;const L=s===0?X.YY.fromFile(I,e,r):new X.YY(await this.getBestRevisionUri(e,I,((h=x.values[J+s-1])==null?void 0:h.oid)??ne.p.deletedOrMissing));return L==null||L.sha===ne.p.deletedOrMissing?void 0:{current:L,previous:new X.YY(await this.getBestRevisionUri(e,I,((v=x.values[J+s])==null?void 0:v.oid)??ne.p.deletedOrMissing))}}catch(R){throw K.Y.error(R,f),R}}async getPreviousComparisonUrisForLine(e,t,r,s,g=0){var h,v;if(s===ne.p.deletedOrMissing)return;const f=(0,y.UH)();try{const R=await this.ensureRepositoryContext(e);if(R==null)return;const{remotehub:D}=R;let _=this.getRelativePath(t,D.getProviderRootUri(t)),E=X.YY.fromFile(_,e,s),M=r,I,J=r,x=r;for(let L=0;L<Math.max(0,g)+2;L++){const H=await this.getBlameForLine(I??E,x,void 0,{forceSingleLine:!0});if(H==null)break;s=H.commit.sha,_=((h=H.commit.file)==null?void 0:h.path)??((v=H.commit.file)==null?void 0:v.originalPath)??_,x=H.line.originalLine-1;const B=X.YY.fromFile(_,e,s);I==null?(I=B,J=x):(E=I,M=J,I=B,J=x)}return E==null?void 0:{current:E,previous:I,line:(M??r)+1}}catch(R){throw K.Y.error(R,f),R}}async getIncomingActivity(e,t){}async getRemotes(e,t){if(e==null)return[];const r=t?.providers??qe.c.loadProviders(k.DN.get("remotes",null)),s=A.Uri.parse(e,!0),[,g,h]=s.path.split("/",3),v=`https://github.com/${g}/${h}.git`,f="github.com",R=`${g}/${h}`;return[new he.s(e,`${f}/${R}`,"origin","https",f,R,qe.c.factory(r)(v,f,R),[{type:he.X.Fetch,url:v},{type:he.X.Push,url:v}])]}async getRevisionContent(e,t,r){const s=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t);return A.workspace.fs.readFile(s)}async getStash(e){}async getStatusForFile(e,t){}async getStatusForFiles(e,t){}async getStatusForRepo(e){}async getTags(e,t){if(e==null)return Me;const r=(0,y.UH)();let s=t?.cursor?void 0:this._tagsCache.get(e);if(s==null){async function h(){var v,f,R;try{const{metadata:D,github:_,session:E}=await this.ensureRepositoryContext(e),M=[];let I=t?.cursor;const J=I==null;for(;;){const x=await _.getTags(E.accessToken,D.repo.owner,D.repo.name,{cursor:I});for(const L of x.values)M.push(new Se.gE(e,L.name,L.target.oid,L.target.message??"",new Date(L.target.authoredDate??((v=L.target.tagger)==null?void 0:v.date)),new Date(L.target.committedDate??((f=L.target.tagger)==null?void 0:f.date))));if(!((R=x.paging)!=null&&R.more)||!J)return{...x,values:M};I=x.paging.cursor}}catch(D){return K.Y.error(D,r),this._tagsCache.delete(e),Me}}C(h,"load"),s=h.call(this),t?.cursor==null&&this._tagsCache.set(e,s)}let g=await s;return t?.filter!=null&&(g={...g,values:g.values.filter(t.filter)}),t?.sort!=null&&(0,Se.Pj)(g.values,typeof t.sort=="boolean"?void 0:t.sort),g}async getTreeEntryForRevision(e,t,r){if(e==null||!t)return;if(r==="HEAD"){const h=await this.ensureRepositoryContext(e);if(h==null)return;const v=await h.metadata.getRevision();r=v?.revision}const s=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t),g=await A.workspace.fs.stat(s);if(g!=null)return{path:this.getRelativePath(s,e),commitSha:r,size:g.size,type:(g.type&A.FileType.Directory)===A.FileType.Directory?"tree":"blob"}}async getTreeForRevision(e,t){if(e==null)return[];if(t==="HEAD"){const h=await this.ensureRepositoryContext(e);if(h==null)return[];const v=await h.metadata.getRevision();t=v?.revision}const r=t?this.createProviderUri(e,t):this.createVirtualUri(e,t),s=await A.workspace.fs.readDirectory(r);if(s==null)return[];const g=[];for(const[h,v]of s){const f=this.getAbsoluteUri(h,r);g.push({path:this.getRelativePath(h,f),commitSha:t,size:0,type:(v&A.FileType.Directory)===A.FileType.Directory?"tree":"blob"})}return[]}async hasBranchOrTag(e,t){var r,s;const[{values:g},{values:h}]=await Promise.all([this.getBranches(e,{filter:(r=t?.filter)==null?void 0:r.branches,sort:!1}),this.getTags(e,{filter:(s=t?.filter)==null?void 0:s.tags,sort:!1})]);return g.length!==0||h.length!==0}async hasCommitBeenPushed(e,t){return!0}isTrackable(e){return this.supportedSchemes.has(e.scheme)}async isTracked(e){if(!this.isTrackable(e)||this.container.git.getRepository(e)==null)return!1;const t=e.with({scheme:G.sN.GitHub});return await A.workspace.fs.stat(t)!=null}async getDiffTool(e){}async openDiffTool(e,t,r){}async openDirectoryCompare(e,t,r,s){}async resolveReference(e,t,r,s){if(!t||t===ne.p.deletedOrMissing||r==null&&ne.p.isSha(t)||r!=null&&ne.p.isUncommitted(t))return t;let g;if(r!=null)g=this.getRelativePath(r,e);else if(!ne.p.isShaLike(t)||t.endsWith("^3"))return t;const h=await this.ensureRepositoryContext(e);if(h==null)return t;const{metadata:v,github:f,session:R}=h,D=await f.resolveReference(R.accessToken,v.repo.owner,v.repo.name,t,g);return D??(g?ne.p.deletedOrMissing:t)}async validateBranchOrTagName(e,t){return ke.test(e)}async validateReference(e,t){return!0}async stageFile(e,t){}async stageDirectory(e,t){}async unStageFile(e,t){}async unStageDirectory(e,t){}async stashApply(e,t,r){}async stashDelete(e,t,r){}async stashSave(e,t,r,s){}async ensureRepositoryContext(e,t){let r=A.Uri.parse(e,!0);if(!/^github\+?/.test(r.authority))throw new j.kX(e,j.sh.NotAGitHubRepository);if(!t){const f=this.container.git.getRepository(r);if(f==null)throw new j.kX(e,j.sh.NotAGitHubRepository);r=f.uri}let s=this._remotehub;if(s==null)try{s=await this.ensureRemoteHubApi()}catch(f){throw f instanceof j.R5,new j.kX(e,j.sh.RemoteHubApiNotFound,f)}const g=await s?.getMetadata(r);if(g?.provider.id!=="github")throw new j.kX(e,j.sh.NotAGitHubRepository);let h,v;try{[h,v]=await Promise.all([this.ensureGitHub(),this.ensureSession()])}catch(f){throw f instanceof j._7?new j.kX(e,f.reason===j.Jx.UserDidNotConsent?j.sh.GitHubAuthenticationDenied:j.sh.GitHubAuthenticationNotFound,f):new j.kX(e)}if(h==null)throw new j.kX(e);return{github:h,metadata:g,remotehub:s,session:v}}async ensureGitHub(){if(this._github==null){const e=await this.container.github;e!=null&&this._disposables.push(e.onDidReauthenticate(()=>{this._sessionPromise=void 0,this.ensureSession(!0)})),this._github=e}return this._github}async ensureRemoteHubApi(e){if(this._remotehubPromise==null&&(this._remotehubPromise=je(),this._remotehubPromise.then(t=>this._remotehub=t,()=>this._remotehub=void 0)),!e)return this._remotehubPromise;try{return await this._remotehubPromise}catch{return}}async ensureSession(e=!1){if(this._sessionPromise==null){async function t(){try{return e?await A.authentication.getSession("github",xe,{forceNewSession:!0}):await A.authentication.getSession("github",xe,{createIfNone:!0})}catch(r){throw r instanceof Error&&r.message.includes("User did not consent")?new j._7("github",j.Jx.UserDidNotConsent):(K.Y.error(r),new j._7("github",void 0,r))}}C(t,"getSession"),this._sessionPromise=t()}return this._sessionPromise}createVirtualUri(e,t,r){let s;if(typeof t=="string")t&&(ne.p.isSha(t)?s={v:1,ref:{id:t,type:2}}:s={v:1,ref:{id:t,type:4}});else switch(t?.refType){case"revision":case"stash":s={v:1,ref:{id:t.ref,type:2}};break;case"branch":case"tag":s={v:1,ref:{id:t.name,type:4}};break}if(typeof e=="string"&&(e=A.Uri.parse(e,!0)),r){let g=e.path;g.endsWith("/")&&(g=g.slice(0,-1)),r=this.getRelativePath(r,e),r=`${g}/${r.startsWith("/")?r.slice(0,-1):r}`}return e.with({scheme:G.sN.Virtual,authority:Ae("github",s),path:r??e.path})}createProviderUri(e,t,r){const s=this.createVirtualUri(e,t,r);return this._remotehub==null?s.scheme!==G.sN.Virtual?s:s.with({scheme:G.sN.GitHub}):this._remotehub.getProviderUri(s)}getPagingLimit(e){return e=Math.min(100,e??k.DN.get("advanced.maxListItems")??100),e===0&&(e=100),e}async resolveReferenceCore(e,t,r){var s,g,h,v;if(r==null||r==="HEAD")return(await t.getRevision()).revision;if(ne.p.isSha(r))return r;if(ne.p.isRange(r))return;const[f,R]=await Promise.allSettled([this.getBranches(e,{filter:D=>D.name===r}),this.getTags(e,{filter:D=>D.name===r})]);return r=((g=(s=(0,Be.Sb)(f))==null?void 0:s.values[0])==null?void 0:g.sha)??((v=(h=(0,Be.Sb)(R))==null?void 0:h.values[0])==null?void 0:v.sha),r==null,r}}C(S,"GitHubGitProvider"),$([(0,y.cM)()],S.prototype,"getBestRevisionUri",1),$([(0,y.cM)()],S.prototype,"getWorkingUri",1),$([(0,y.cM)()],S.prototype,"addRemote",1),$([(0,y.cM)()],S.prototype,"pruneRemote",1),$([(0,y.cM)()],S.prototype,"applyChangesToWorkingFile",1),$([(0,y.cM)()],S.prototype,"branchContainsCommit",1),$([(0,y.cM)()],S.prototype,"checkout",1),$([(0,y.cM)()],S.prototype,"resetCaches",1),$([(0,y.cM)({args:{1:q=>q.length}})],S.prototype,"excludeIgnoredUris",1),$([(0,y.cM)()],S.prototype,"fetch",1),$([(0,Re.H)(),(0,y.fF)()],S.prototype,"findRepositoryUri",1),$([(0,y.cM)({args:{1:q=>q.join(",")}})],S.prototype,"getAheadBehindCommitCount",1),$([(0,Re.H)((q,e)=>`${q.toString()}|${e?.isDirty}`),(0,y.cM)({args:{1:q=>q?.isDirty}})],S.prototype,"getBlame",1),$([(0,y.cM)({args:{1:"<contents>"}})],S.prototype,"getBlameContents",1),$([(0,Re.H)((q,e,t,r)=>`${q.toString()}|${e}|${t?.isDirty}|${r?.forceSingleLine}`),(0,y.cM)({args:{2:q=>q?.isDirty}})],S.prototype,"getBlameForLine",1),$([(0,y.cM)({args:{2:"<contents>"}})],S.prototype,"getBlameForLineContents",1),$([(0,y.cM)()],S.prototype,"getBlameForRange",1),$([(0,y.cM)({args:{2:"<contents>"}})],S.prototype,"getBlameForRangeContents",1),$([(0,y.cM)({args:{0:"<blame>"}})],S.prototype,"getBlameRange",1),$([(0,y.cM)()],S.prototype,"getBranch",1),$([(0,y.cM)({args:{1:!1}})],S.prototype,"getBranches",1),$([(0,y.cM)()],S.prototype,"getChangedFilesCount",1),$([(0,y.cM)()],S.prototype,"getCommit",1),$([(0,y.cM)()],S.prototype,"getCommitBranches",1),$([(0,y.cM)()],S.prototype,"getCommitCount",1),$([(0,y.cM)()],S.prototype,"getCommitForFile",1),$([(0,y.cM)()],S.prototype,"getOldestUnpushedRefForFile",1),$([(0,y.cM)()],S.prototype,"getContributors",1),$([(0,Re.H)(),(0,y.cM)()],S.prototype,"getCurrentUser",1),$([(0,y.cM)()],S.prototype,"getDefaultBranchName",1),$([(0,y.cM)()],S.prototype,"getDiffForFile",1),$([(0,y.cM)({args:{1:q=>"<contents>"}})],S.prototype,"getDiffForFileContents",1),$([(0,y.cM)()],S.prototype,"getDiffForLine",1),$([(0,y.cM)()],S.prototype,"getDiffStatus",1),$([(0,y.cM)()],S.prototype,"getFileStatusForCommit",1),$([(0,y.cM)()],S.prototype,"getLog",1),$([(0,y.cM)()],S.prototype,"getLogRefsOnly",1),$([(0,y.cM)()],S.prototype,"getLogForSearch",1),$([(0,y.cM)()],S.prototype,"getLogForFile",1),$([(0,y.cM)()],S.prototype,"getMergeBase",1),$([(0,y.cM)()],S.prototype,"getMergeStatus",1),$([(0,y.cM)()],S.prototype,"getRebaseStatus",1),$([(0,y.cM)()],S.prototype,"getNextComparisonUris",1),$([(0,y.cM)()],S.prototype,"getPreviousComparisonUris",1),$([(0,y.cM)()],S.prototype,"getPreviousComparisonUrisForLine",1),$([(0,y.cM)()],S.prototype,"getIncomingActivity",1),$([(0,y.cM)({args:{1:!1}})],S.prototype,"getRemotes",1),$([(0,y.cM)()],S.prototype,"getRevisionContent",1),$([(0,y.cM)()],S.prototype,"getStash",1),$([(0,y.cM)()],S.prototype,"getStatusForFile",1),$([(0,y.cM)()],S.prototype,"getStatusForFiles",1),$([(0,y.cM)()],S.prototype,"getStatusForRepo",1),$([(0,y.cM)({args:{1:!1}})],S.prototype,"getTags",1),$([(0,y.cM)()],S.prototype,"getTreeEntryForRevision",1),$([(0,y.cM)()],S.prototype,"getTreeForRevision",1),$([(0,y.cM)()],S.prototype,"hasBranchOrTag",1),$([(0,y.cM)()],S.prototype,"hasCommitBeenPushed",1),$([(0,y.cM)()],S.prototype,"getDiffTool",1),$([(0,y.cM)()],S.prototype,"openDiffTool",1),$([(0,y.cM)()],S.prototype,"openDirectoryCompare",1),$([(0,y.cM)()],S.prototype,"resolveReference",1),$([(0,y.cM)()],S.prototype,"validateBranchOrTagName",1),$([(0,y.cM)()],S.prototype,"validateReference",1),$([(0,y.cM)()],S.prototype,"stageFile",1),$([(0,y.cM)()],S.prototype,"stageDirectory",1),$([(0,y.cM)()],S.prototype,"unStageFile",1),$([(0,y.cM)()],S.prototype,"unStageDirectory",1),$([(0,y.cM)()],S.prototype,"stashApply",1),$([(0,y.cM)()],S.prototype,"stashDelete",1),$([(0,y.cM)({args:{2:q=>q?.length}})],S.prototype,"stashSave",1),$([(0,Re.H)()],S.prototype,"ensureRepositoryContext",1),$([(0,Re.H)()],S.prototype,"ensureGitHub",1);function Ae(q,e){return`${q}${e!=null?`+${(0,Q.e)(JSON.stringify(e))}`:""}`}C(Ae,"encodeAuthority")},8301:(le,oe,b)=>{"use strict";b.r(oe),b.d(oe,{GitHubPullRequest:()=>k,fromCommitFileStatus:()=>G});var A=b(3901),Q=b(9052),k;(Y=>{function j(X,me){return new Q.i(me,{name:X.author.login,avatarUrl:X.author.avatarUrl,url:X.author.url},String(X.number),X.title,X.permalink,ue(X.state),new Date(X.updatedAt),X.closedAt==null?void 0:new Date(X.closedAt),X.mergedAt==null?void 0:new Date(X.mergedAt))}C(j,"from"),Y.from=j;function ue(X){return X==="MERGED"?Q.o.Merged:X==="CLOSED"?Q.o.Closed:Q.o.Open}C(ue,"fromState"),Y.fromState=ue;function de(X){return X===Q.o.Merged?"MERGED":X===Q.o.Closed?"CLOSED":"OPEN"}C(de,"toState"),Y.toState=de})(k||(k={}));function G(Y){switch(Y){case"added":return A.NV.Added;case"changed":case"modified":return A.NV.Modified;case"removed":return A.NV.Deleted;case"renamed":return A.NV.Renamed;case"copied":return A.NV.Copied}}C(G,"fromCommitFileStatus")},778:(le,oe,b)=>{var A=b(2479);le.exports=A(Q),le.exports.strict=A(k),Q.proto=Q(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return Q(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return k(this)},configurable:!0})});function Q(G){var Y=C(function(){return Y.called?Y.value:(Y.called=!0,Y.value=G.apply(this,arguments))},"f");return Y.called=!1,Y}C(Q,"once");function k(G){var Y=C(function(){if(Y.called)throw new Error(Y.onceError);return Y.called=!0,Y.value=G.apply(this,arguments)},"f"),j=G.name||"Function wrapped with `once`";return Y.onceError=j+" shouldn't be called more than once",Y.called=!1,Y}C(k,"onceStrict")},2479:le=>{le.exports=oe;function oe(b,A){if(b&&A)return oe(b)(A);if(typeof b!="function")throw new TypeError("need wrapper function");return Object.keys(b).forEach(function(k){Q[k]=b[k]}),Q;function Q(){for(var k=new Array(arguments.length),G=0;G<k.length;G++)k[G]=arguments[G];var Y=b.apply(this,k),j=k[k.length-1];return typeof Y=="function"&&Y!==j&&Object.keys(j).forEach(function(ue){Y[ue]=j[ue]}),Y}C(Q,"wrapper")}C(oe,"wrappy")}};
