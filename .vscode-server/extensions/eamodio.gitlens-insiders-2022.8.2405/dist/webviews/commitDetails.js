(()=>{"use strict";var lo={};class Me{constructor(n){this.method=n}}class y extends Me{}class Z extends Me{}function pe(c,n,i){c.method===n.method&&i(n.params)}const ft=new y("webview/ready"),ho=new y("command/execute"),bo=new y("configuration/preview"),fo=new y("configuration/update"),uo=new Z("configuration/didChange"),po=new Z("configuration/didPreview"),mo=new Z("webview/didOpenAnchor"),Oe=new y("commit/actions"),ut=new y("commit/file/actions"),pt=new y("commit/file/open"),mt=new y("commit/file/openOnRemote"),gt=new y("commit/file/compareWorking"),vt=new y("commit/file/comparePrevious"),yt=new y("commit/pickCommit"),_t=new y("commit/searchCommit"),$t=new y("commit/autolinkSettings"),wt=new y("commit/pin"),kt=new y("commit/preferences"),De=new Z("commit/didChange"),Re=new Z("commit/didChange/rich");var v;(c=>{function n(s,a,l,d){let h=!1;if(typeof s=="string"){const p=function(f){const u=f?.target;!u?.matches(s)||l(f,u)};return document.addEventListener(a,p,d??!0),{dispose:()=>{h||(h=!0,document.removeEventListener(a,p,d??!0))}}}const b=function(p){l(p,this)};return s.addEventListener(a,b,d??!1),{dispose:()=>{h||(h=!0,s.removeEventListener(a,b,d??!1))}}}c.on=n;function i(s,a,l){const d=document.getElementById(s);if(a.replaceChildren(d?.content.cloneNode(!0)),a.className=d.className,l?.visible!=null){const h=a.querySelectorAll("[data-visible]");for(const b of h){const p=b.dataset.visible;!p||(l.visible[p]?b.style.display="initial":b.style.display="none")}}if(l?.bindings!=null){const h=a.querySelectorAll("[data-bind]");for(const b of h){const p=b.dataset.bind;if(!p)continue;const f=l.bindings[p];f!=null&&(b.textContent=String(f))}}}c.insertTemplate=i;function r(s){s.replaceChildren(),s.className=""}c.resetSlot=r})(v||(v={}));const At=/^(?:(#?)([0-9a-f]{3}|[0-9a-f]{6})|((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\))$/i;function me(c,n){const i=c+n,r=n<0?i<0?0:i:i>255?255:i;return Math.round(r)}function k(c,n){return C(c,-n)}function C(c,n){const i=se(c);if(i==null)return c;const[r,s,a,l]=i,d=255*n/100;return`rgba(${me(r,d)}, ${me(s,d)}, ${me(a,d)}, ${l})`}function D(c,n){const i=se(c);if(i==null)return c;const[r,s,a,l]=i;return`rgba(${r}, ${s}, ${a}, ${l*(n/100)})`}function go(c,n,i){const r=se(c),s=se(n);if(r==null||s==null)return c;const[a,l,d,h]=r,[b,p,f,u]=s;return`rgba(${re(a,b,i)}, ${re(l,p,i)}, ${re(d,f,i)}, ${re(h,u,i)})`}const re=(c,n,i)=>c+(n-c)*i/100;function se(c){c=c.trim();const n=At.exec(c);if(n==null)return null;if(n[1]==="#"){const i=n[2];switch(i.length){case 3:return[parseInt(i[0]+i[0],16),parseInt(i[1]+i[1],16),parseInt(i[2]+i[2],16),1];case 6:return[parseInt(i.substring(0,2),16),parseInt(i.substring(2,4),16),parseInt(i.substring(4,6),16),1]}return null}switch(n[3]){case"rgb":return[parseInt(n[4],10),parseInt(n[5],10),parseInt(n[6],10),1];case"rgba":return[parseInt(n[4],10),parseInt(n[5],10),parseInt(n[6],10),parseFloat(n[7])];default:return null}}function Ct(c){const n=()=>{const r=document.body,s=window.getComputedStyle(r),a=r.style;a.setProperty("--font-family",s.getPropertyValue("--vscode-font-family").trim()),a.setProperty("--font-size",s.getPropertyValue("--vscode-font-size").trim()),a.setProperty("--font-weight",s.getPropertyValue("--vscode-font-weight").trim()),a.setProperty("--editor-font-family",s.getPropertyValue("--vscode-editor-font-family").trim()),a.setProperty("--editor-font-size",s.getPropertyValue("--vscode-editor-font-size").trim()),a.setProperty("--editor-font-weight",s.getPropertyValue("--vscode-editor-font-weight").trim());const l=s.getPropertyValue("--vscode-editor-background").trim();let d=l;a.setProperty("--color-background",d),a.setProperty("--color-background--lighten-05",C(d,5)),a.setProperty("--color-background--darken-05",k(d,5)),a.setProperty("--color-background--lighten-075",C(d,7.5)),a.setProperty("--color-background--darken-075",k(d,7.5)),a.setProperty("--color-background--lighten-10",C(d,10)),a.setProperty("--color-background--darken-10",k(d,10)),a.setProperty("--color-background--lighten-15",C(d,15)),a.setProperty("--color-background--darken-15",k(d,15)),a.setProperty("--color-background--lighten-30",C(d,30)),a.setProperty("--color-background--darken-30",k(d,30)),a.setProperty("--color-background--lighten-50",C(d,50)),a.setProperty("--color-background--darken-50",k(d,50)),d=s.getPropertyValue("--vscode-button-background").trim(),a.setProperty("--color-button-background",d),a.setProperty("--color-button-background--darken-30",k(d,30)),d=s.getPropertyValue("--vscode-button-secondaryBackground").trim(),a.setProperty("--color-button-secondary-background",d),a.setProperty("--color-button-secondary-background--darken-30",k(d,30)),d=s.getPropertyValue("--vscode-button-background").trim(),a.setProperty("--color-highlight",d),a.setProperty("--color-highlight--75",D(d,75)),a.setProperty("--color-highlight--50",D(d,50)),a.setProperty("--color-highlight--25",D(d,25)),d=s.getPropertyValue("--vscode-button-foreground").trim(),a.setProperty("--color-button-foreground",d);let h=s.getPropertyValue("--vscode-editor-foreground").trim();h||(h=s.getPropertyValue("--vscode-foreground").trim()),a.setProperty("--color-foreground",h),a.setProperty("--color-foreground--85",D(h,85)),a.setProperty("--color-foreground--75",D(h,75)),a.setProperty("--color-foreground--65",D(h,65)),a.setProperty("--color-foreground--50",D(h,50)),d=s.getPropertyValue("--vscode-focusBorder").trim(),a.setProperty("--color-focus-border",d),d=s.getPropertyValue("--vscode-textLink-foreground").trim(),a.setProperty("--color-link-foreground",d),a.setProperty("--color-link-foreground--darken-20",k(d,20)),a.setProperty("--color-link-foreground--lighten-20",C(d,20)),d=s.getPropertyValue("--vscode-sideBar-background").trim(),a.setProperty("--color-view-background",d||l),d=s.getPropertyValue("--vscode-sideBar-foreground").trim(),a.setProperty("--color-view-foreground",d||h),a.setProperty("--color-view-header-foreground",s.getPropertyValue("--vscode-sideBarSectionHeader-foreground").trim()||d||h),d=s.getPropertyValue("--vscode-editorHoverWidget-background").trim(),a.setProperty("--color-hover-background",d),d=s.getPropertyValue("--vscode-editorHoverWidget-border").trim(),a.setProperty("--color-hover-border",d),d=s.getPropertyValue("--vscode-editorHoverWidget-foreground").trim(),a.setProperty("--color-hover-foreground",d),d=s.getPropertyValue("--vscode-editorHoverWidget-statusBarBackground").trim(),a.setProperty("--color-hover-statusBarBackground",d);const b=r.className.includes("vscode-light")||r.className.includes("vscode-high-contrast-light");d=s.getPropertyValue("--vscode-editor-background").trim(),a.setProperty("--graph-panel-bg",b?k(d,5):C(d,5)),a.setProperty("--graph-theme-opacity-factor",b?"0.5":"1"),c?.()},i=new MutationObserver(n);return i.observe(document.body,{attributes:!0,attributeFilter:["class"]}),n(),i}const Pt=2**30;let ce=0;function He(){return ce===Pt?ce=1:ce++,`webview:${ce}`}class St{constructor(n){this.appName=n,this.state=window.bootstrap,window.bootstrap=void 0,this.log(`${this.appName}()`),this._api=acquireVsCodeApi(),Ct(this.onThemeUpdated?.bind(this)),requestAnimationFrame(()=>{this.log(`${this.appName}.initializing`);try{this.onInitialize?.(),this.bind(),this.onMessageReceived!=null&&window.addEventListener("message",this.onMessageReceived.bind(this)),this.sendCommand(ft,void 0),this.onInitialized?.()}finally{setTimeout(()=>{document.body.classList.remove("preload")},500)}})}bind(){this.bindDisposables?.forEach(n=>n.dispose()),this.bindDisposables=this.onBind?.()}log(n,...i){}getState(){return this._api.getState()}sendCommand(n,i){const r=He();return this.log(`${this.appName}.sendCommand(${r}): name=${n.method}`),this.postMessage({id:r,method:n.method,params:i})}sendCommandWithCompletion(n,i,r,s){const a=He();this.log(`${this.appName}.sendCommandWithCompletion(${a}): name=${n.method}`);const l=v.on(window,"message",d=>{pe(r,d.data,h=>{h.completionId===a&&(l.dispose(),s(h))})});return this.postMessage({id:a,method:n.method,params:i})}setState(n){this.state=n,n!=null&&this._api.setState(n)}postMessage(n){this._api.postMessage(n)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=window,ge=ae.ShadowRoot&&(ae.ShadyCSS===void 0||ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ve=Symbol(),Ie=new WeakMap;class Fe{constructor(n,i,r){if(this._$cssResult$=!0,r!==ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=i}get styleSheet(){let n=this.o;const i=this.t;if(ge&&n===void 0){const r=i!==void 0&&i.length===1;r&&(n=Ie.get(i)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),r&&Ie.set(i,n))}return n}toString(){return this.cssText}}const xt=c=>new Fe(typeof c=="string"?c:c+"",void 0,ve),R=(c,...n)=>{const i=c.length===1?c[0]:n.reduce((r,s,a)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+c[a+1],c[0]);return new Fe(i,c,ve)},Et=(c,n)=>{ge?c.adoptedStyleSheets=n.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):n.forEach(i=>{const r=document.createElement("style"),s=ae.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=i.cssText,c.appendChild(r)})},Ne=ge?c=>c:c=>c instanceof CSSStyleSheet?(n=>{let i="";for(const r of n.cssRules)i+=r.cssText;return xt(i)})(c):c;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ye;const le=window,Ue=le.trustedTypes,Tt=Ue?Ue.emptyScript:"",qe=le.reactiveElementPolyfillSupport,_e={toAttribute(c,n){switch(n){case Boolean:c=c?Tt:null;break;case Object:case Array:c=c==null?c:JSON.stringify(c)}return c},fromAttribute(c,n){let i=c;switch(n){case Boolean:i=c!==null;break;case Number:i=c===null?null:Number(c);break;case Object:case Array:try{i=JSON.parse(c)}catch{i=null}}return i}},Le=(c,n)=>n!==c&&(n==n||c==c),$e={attribute:!0,type:String,converter:_e,reflect:!1,hasChanged:Le};class N extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(n){var i;(i=this.h)!==null&&i!==void 0||(this.h=[]),this.h.push(n)}static get observedAttributes(){this.finalize();const n=[];return this.elementProperties.forEach((i,r)=>{const s=this._$Ep(r,i);s!==void 0&&(this._$Ev.set(s,r),n.push(s))}),n}static createProperty(n,i=$e){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(n,i),!i.noAccessor&&!this.prototype.hasOwnProperty(n)){const r=typeof n=="symbol"?Symbol():"__"+n,s=this.getPropertyDescriptor(n,r,i);s!==void 0&&Object.defineProperty(this.prototype,n,s)}}static getPropertyDescriptor(n,i,r){return{get(){return this[i]},set(s){const a=this[n];this[i]=s,this.requestUpdate(n,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)||$e}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const n=Object.getPrototypeOf(this);if(n.finalize(),this.elementProperties=new Map(n.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,r=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const s of r)this.createProperty(s,i[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(n){const i=[];if(Array.isArray(n)){const r=new Set(n.flat(1/0).reverse());for(const s of r)i.unshift(Ne(s))}else n!==void 0&&i.push(Ne(n));return i}static _$Ep(n,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof n=="string"?n.toLowerCase():void 0}u(){var n;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(n=this.constructor.h)===null||n===void 0||n.forEach(i=>i(this))}addController(n){var i,r;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(n),this.renderRoot!==void 0&&this.isConnected&&((r=n.hostConnected)===null||r===void 0||r.call(n))}removeController(n){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(n)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((n,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var n;const i=(n=this.shadowRoot)!==null&&n!==void 0?n:this.attachShadow(this.constructor.shadowRootOptions);return Et(i,this.constructor.elementStyles),i}connectedCallback(){var n;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$ES)===null||n===void 0||n.forEach(i=>{var r;return(r=i.hostConnected)===null||r===void 0?void 0:r.call(i)})}enableUpdating(n){}disconnectedCallback(){var n;(n=this._$ES)===null||n===void 0||n.forEach(i=>{var r;return(r=i.hostDisconnected)===null||r===void 0?void 0:r.call(i)})}attributeChangedCallback(n,i,r){this._$AK(n,r)}_$EO(n,i,r=$e){var s;const a=this.constructor._$Ep(n,r);if(a!==void 0&&r.reflect===!0){const l=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:_e).toAttribute(i,r.type);this._$El=n,l==null?this.removeAttribute(a):this.setAttribute(a,l),this._$El=null}}_$AK(n,i){var r;const s=this.constructor,a=s._$Ev.get(n);if(a!==void 0&&this._$El!==a){const l=s.getPropertyOptions(a),d=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?l.converter:_e;this._$El=a,this[a]=d.fromAttribute(i,l.type),this._$El=null}}requestUpdate(n,i,r){let s=!0;n!==void 0&&(((r=r||this.constructor.getPropertyOptions(n)).hasChanged||Le)(this[n],i)?(this._$AL.has(n)||this._$AL.set(n,i),r.reflect===!0&&this._$El!==n&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(n,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,a)=>this[a]=s),this._$Ei=void 0);let i=!1;const r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),(n=this._$ES)===null||n===void 0||n.forEach(s=>{var a;return(a=s.hostUpdate)===null||a===void 0?void 0:a.call(s)}),this.update(r)):this._$Ek()}catch(s){throw i=!1,this._$Ek(),s}i&&this._$AE(r)}willUpdate(n){}_$AE(n){var i;(i=this._$ES)===null||i===void 0||i.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(n){return!0}update(n){this._$EC!==void 0&&(this._$EC.forEach((i,r)=>this._$EO(r,this[r],i)),this._$EC=void 0),this._$Ek()}updated(n){}firstUpdated(n){}}N.finalized=!0,N.elementProperties=new Map,N.elementStyles=[],N.shadowRootOptions={mode:"open"},qe?.({ReactiveElement:N}),((ye=le.reactiveElementVersions)!==null&&ye!==void 0?ye:le.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we;const de=window,U=de.trustedTypes,ze=U?U.createPolicy("lit-html",{createHTML:c=>c}):void 0,P=`lit$${(Math.random()+"").slice(9)}$`,ke="?"+P,Mt=`<${ke}>`,q=document,K=(c="")=>q.createComment(c),G=c=>c===null||typeof c!="object"&&typeof c!="function",Be=Array.isArray,je=c=>Be(c)||typeof c?.[Symbol.iterator]=="function",J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ve=/-->/g,We=/>/g,H=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ye=/'/g,Ze=/"/g,Ke=/^(?:script|style|textarea|title)$/i,Ge=c=>(n,...i)=>({_$litType$:c,strings:n,values:i}),_=Ge(1),vo=Ge(2),L=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Je=new WeakMap,Ot=(c,n,i)=>{var r,s;const a=(r=i?.renderBefore)!==null&&r!==void 0?r:n;let l=a._$litPart$;if(l===void 0){const d=(s=i?.renderBefore)!==null&&s!==void 0?s:null;a._$litPart$=l=new B(n.insertBefore(K(),d),d,void 0,i??{})}return l._$AI(c),l},z=q.createTreeWalker(q,129,null,!1),Xe=(c,n)=>{const i=c.length-1,r=[];let s,a=n===2?"<svg>":"",l=J;for(let h=0;h<i;h++){const b=c[h];let p,f,u=-1,w=0;for(;w<b.length&&(l.lastIndex=w,f=l.exec(b),f!==null);)w=l.lastIndex,l===J?f[1]==="!--"?l=Ve:f[1]!==void 0?l=We:f[2]!==void 0?(Ke.test(f[2])&&(s=RegExp("</"+f[2],"g")),l=H):f[3]!==void 0&&(l=H):l===H?f[0]===">"?(l=s??J,u=-1):f[1]===void 0?u=-2:(u=l.lastIndex-f[2].length,p=f[1],l=f[3]===void 0?H:f[3]==='"'?Ze:Ye):l===Ze||l===Ye?l=H:l===Ve||l===We?l=J:(l=H,s=void 0);const oe=l===H&&c[h+1].startsWith("/>")?" ":"";a+=l===J?b+Mt:u>=0?(r.push(p),b.slice(0,u)+"$lit$"+b.slice(u)+P+oe):b+P+(u===-2?(r.push(void 0),h):oe)}const d=a+(c[i]||"<?>")+(n===2?"</svg>":"");if(!Array.isArray(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ze!==void 0?ze.createHTML(d):d,r]};class X{constructor({strings:n,_$litType$:i},r){let s;this.parts=[];let a=0,l=0;const d=n.length-1,h=this.parts,[b,p]=Xe(n,i);if(this.el=X.createElement(b,r),z.currentNode=this.el.content,i===2){const f=this.el.content,u=f.firstChild;u.remove(),f.append(...u.childNodes)}for(;(s=z.nextNode())!==null&&h.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const f=[];for(const u of s.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(P)){const w=p[l++];if(f.push(u),w!==void 0){const oe=s.getAttribute(w.toLowerCase()+"$lit$").split(P),ne=/([.?@])?(.*)/.exec(w);h.push({type:1,index:a,name:ne[2],strings:oe,ctor:ne[1]==="."?et:ne[1]==="?"?tt:ne[1]==="@"?ot:Q})}else h.push({type:6,index:a})}for(const u of f)s.removeAttribute(u)}if(Ke.test(s.tagName)){const f=s.textContent.split(P),u=f.length-1;if(u>0){s.textContent=U?U.emptyScript:"";for(let w=0;w<u;w++)s.append(f[w],K()),z.nextNode(),h.push({type:2,index:++a});s.append(f[u],K())}}}else if(s.nodeType===8)if(s.data===ke)h.push({type:2,index:a});else{let f=-1;for(;(f=s.data.indexOf(P,f+1))!==-1;)h.push({type:7,index:a}),f+=P.length-1}a++}}static createElement(n,i){const r=q.createElement("template");return r.innerHTML=n,r}}function I(c,n,i=c,r){var s,a,l,d;if(n===L)return n;let h=r!==void 0?(s=i._$Cl)===null||s===void 0?void 0:s[r]:i._$Cu;const b=G(n)?void 0:n._$litDirective$;return h?.constructor!==b&&((a=h?._$AO)===null||a===void 0||a.call(h,!1),b===void 0?h=void 0:(h=new b(c),h._$AT(c,i,r)),r!==void 0?((l=(d=i)._$Cl)!==null&&l!==void 0?l:d._$Cl=[])[r]=h:i._$Cu=h),h!==void 0&&(n=I(c,h._$AS(c,n.values),h,r)),n}class Qe{constructor(n,i){this.v=[],this._$AN=void 0,this._$AD=n,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(n){var i;const{el:{content:r},parts:s}=this._$AD,a=((i=n?.creationScope)!==null&&i!==void 0?i:q).importNode(r,!0);z.currentNode=a;let l=z.nextNode(),d=0,h=0,b=s[0];for(;b!==void 0;){if(d===b.index){let p;b.type===2?p=new B(l,l.nextSibling,this,n):b.type===1?p=new b.ctor(l,b.name,b.strings,this,n):b.type===6&&(p=new nt(l,this,n)),this.v.push(p),b=s[++h]}d!==b?.index&&(l=z.nextNode(),d++)}return a}m(n){let i=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(n,r,i),i+=r.strings.length-2):r._$AI(n[i])),i++}}class B{constructor(n,i,r,s){var a;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=n,this._$AB=i,this._$AM=r,this.options=s,this._$C_=(a=s?.isConnected)===null||a===void 0||a}get _$AU(){var n,i;return(i=(n=this._$AM)===null||n===void 0?void 0:n._$AU)!==null&&i!==void 0?i:this._$C_}get parentNode(){let n=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&n.nodeType===11&&(n=i.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,i=this){n=I(this,n,i),G(n)?n===g||n==null||n===""?(this._$AH!==g&&this._$AR(),this._$AH=g):n!==this._$AH&&n!==L&&this.$(n):n._$litType$!==void 0?this.T(n):n.nodeType!==void 0?this.k(n):je(n)?this.O(n):this.$(n)}S(n,i=this._$AB){return this._$AA.parentNode.insertBefore(n,i)}k(n){this._$AH!==n&&(this._$AR(),this._$AH=this.S(n))}$(n){this._$AH!==g&&G(this._$AH)?this._$AA.nextSibling.data=n:this.k(q.createTextNode(n)),this._$AH=n}T(n){var i;const{values:r,_$litType$:s}=n,a=typeof s=="number"?this._$AC(n):(s.el===void 0&&(s.el=X.createElement(s.h,this.options)),s);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===a)this._$AH.m(r);else{const l=new Qe(a,this),d=l.p(this.options);l.m(r),this.k(d),this._$AH=l}}_$AC(n){let i=Je.get(n.strings);return i===void 0&&Je.set(n.strings,i=new X(n)),i}O(n){Be(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,s=0;for(const a of n)s===i.length?i.push(r=new B(this.S(K()),this.S(K()),this,this.options)):r=i[s],r._$AI(a),s++;s<i.length&&(this._$AR(r&&r._$AB.nextSibling,s),i.length=s)}_$AR(n=this._$AA.nextSibling,i){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,i);n&&n!==this._$AB;){const s=n.nextSibling;n.remove(),n=s}}setConnected(n){var i;this._$AM===void 0&&(this._$C_=n,(i=this._$AP)===null||i===void 0||i.call(this,n))}}class Q{constructor(n,i,r,s,a){this.type=1,this._$AH=g,this._$AN=void 0,this.element=n,this.name=i,this._$AM=s,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(n,i=this,r,s){const a=this.strings;let l=!1;if(a===void 0)n=I(this,n,i,0),l=!G(n)||n!==this._$AH&&n!==L,l&&(this._$AH=n);else{const d=n;let h,b;for(n=a[0],h=0;h<a.length-1;h++)b=I(this,d[r+h],i,h),b===L&&(b=this._$AH[h]),l||(l=!G(b)||b!==this._$AH[h]),b===g?n=g:n!==g&&(n+=(b??"")+a[h+1]),this._$AH[h]=b}l&&!s&&this.P(n)}P(n){n===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}}class et extends Q{constructor(){super(...arguments),this.type=3}P(n){this.element[this.name]=n===g?void 0:n}}const Dt=U?U.emptyScript:"";class tt extends Q{constructor(){super(...arguments),this.type=4}P(n){n&&n!==g?this.element.setAttribute(this.name,Dt):this.element.removeAttribute(this.name)}}class ot extends Q{constructor(n,i,r,s,a){super(n,i,r,s,a),this.type=5}_$AI(n,i=this){var r;if((n=(r=I(this,n,i,0))!==null&&r!==void 0?r:g)===L)return;const s=this._$AH,a=n===g&&s!==g||n.capture!==s.capture||n.once!==s.once||n.passive!==s.passive,l=n!==g&&(s===g||a);a&&this.element.removeEventListener(this.name,this,s),l&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){var i,r;typeof this._$AH=="function"?this._$AH.call((r=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&r!==void 0?r:this.element,n):this._$AH.handleEvent(n)}}class nt{constructor(n,i,r){this.element=n,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(n){I(this,n)}}const yo={A:"$lit$",M:P,C:ke,L:1,R:Xe,D:Qe,V:je,I,H:B,N:Q,U:tt,B:ot,F:et,W:nt},it=de.litHtmlPolyfillSupport;it?.(X,B),((we=de.litHtmlVersions)!==null&&we!==void 0?we:de.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ae,Ce;const _o=null;class $ extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n,i;const r=super.createRenderRoot();return(n=(i=this.renderOptions).renderBefore)!==null&&n!==void 0||(i.renderBefore=r.firstChild),r}update(n){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=Ot(i,this.renderRoot,this.renderOptions)}connectedCallback(){var n;super.connectedCallback(),(n=this._$Do)===null||n===void 0||n.setConnected(!0)}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this._$Do)===null||n===void 0||n.setConnected(!1)}render(){return L}}$.finalized=!0,$._$litElement$=!0,(Ae=globalThis.litElementHydrateSupport)===null||Ae===void 0||Ae.call(globalThis,{LitElement:$});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:$});const $o={_$AK:(c,n,i)=>{c._$AK(n,i)},_$AL:c=>c._$AL};((Ce=globalThis.litElementVersions)!==null&&Ce!==void 0?Ce:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=c=>n=>typeof n=="function"?((i,r)=>(customElements.define(i,r),r))(c,n):((i,r)=>{const{kind:s,elements:a}=r;return{kind:s,elements:a,finisher(l){customElements.define(i,l)}}})(c,n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=(c,n)=>n.kind==="method"&&n.descriptor&&!("value"in n.descriptor)?{...n,finisher(i){i.createProperty(n.key,c)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:n.key,initializer(){typeof n.initializer=="function"&&(this[n.key]=n.initializer.call(this))},finisher(i){i.createProperty(n.key,c)}};function m(c){return(n,i)=>i!==void 0?((r,s,a)=>{s.constructor.createProperty(a,r)})(c,n,i):Rt(c,n)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pe;const Ht=((Pe=window.HTMLSlotElement)===null||Pe===void 0?void 0:Pe.prototype.assignedElements)!=null?(c,n)=>c.assignedElements(n):(c,n)=>c.assignedNodes(n).filter(i=>i.nodeType===Node.ELEMENT_NODE);function wo(c){const{slot:n,selector:i}=c??{};return o({descriptor:r=>({get(){var s;const a="slot"+(n?`[name=${n}]`:":not([name])"),l=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(a),d=l!=null?Ht(l,c):[];return i?d.filter(h=>h.matches(i)):d},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ko(c,n,i){let r,s=c;return typeof c=="object"?(s=c.slot,r=c):r={flatten:n},i?t({slot:s,flatten:n,selector:i}):e({descriptor:a=>({get(){var l,d;const h="slot"+(s?`[name=${s}]`:":not([name])"),b=(l=this.renderRoot)===null||l===void 0?void 0:l.querySelector(h);return(d=b?.assignedNodes(r))!==null&&d!==void 0?d:[]},enumerable:!0,configurable:!0})})}var It=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,st=(c,n,i,r)=>{for(var s=r>1?void 0:r?Ft(n,i):n,a=c.length-1,l;a>=0;a--)(l=c[a])&&(s=(r?l(n,i,s):l(s))||s);return r&&s&&It(n,i,s),s};let he=class extends ${constructor(){super(...arguments),this.icon=""}render(){return _``}};he.styles=R`
		:host {
			font: normal normal normal 16px/1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: text-bottom;
			letter-spacing: normal;
		}

		:host([icon='add']):before {
			content: '\\ea60';
		}
		:host([icon='plus']):before {
			content: '\\ea60';
		}
		:host([icon='gist-new']):before {
			content: '\\ea60';
		}
		:host([icon='repo-create']):before {
			content: '\\ea60';
		}
		:host([icon='lightbulb']):before {
			content: '\\ea61';
		}
		:host([icon='light-bulb']):before {
			content: '\\ea61';
		}
		:host([icon='repo']):before {
			content: '\\ea62';
		}
		:host([icon='repo-delete']):before {
			content: '\\ea62';
		}
		:host([icon='gist-fork']):before {
			content: '\\ea63';
		}
		:host([icon='repo-forked']):before {
			content: '\\ea63';
		}
		:host([icon='git-pull-request']):before {
			content: '\\ea64';
		}
		:host([icon='git-pull-request-abandoned']):before {
			content: '\\ea64';
		}
		:host([icon='record-keys']):before {
			content: '\\ea65';
		}
		:host([icon='keyboard']):before {
			content: '\\ea65';
		}
		:host([icon='tag']):before {
			content: '\\ea66';
		}
		:host([icon='tag-add']):before {
			content: '\\ea66';
		}
		:host([icon='tag-remove']):before {
			content: '\\ea66';
		}
		:host([icon='person']):before {
			content: '\\ea67';
		}
		:host([icon='person-follow']):before {
			content: '\\ea67';
		}
		:host([icon='person-outline']):before {
			content: '\\ea67';
		}
		:host([icon='person-filled']):before {
			content: '\\ea67';
		}
		:host([icon='git-branch']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-create']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-delete']):before {
			content: '\\ea68';
		}
		:host([icon='source-control']):before {
			content: '\\ea68';
		}
		:host([icon='mirror']):before {
			content: '\\ea69';
		}
		:host([icon='mirror-public']):before {
			content: '\\ea69';
		}
		:host([icon='star']):before {
			content: '\\ea6a';
		}
		:host([icon='star-add']):before {
			content: '\\ea6a';
		}
		:host([icon='star-delete']):before {
			content: '\\ea6a';
		}
		:host([icon='star-empty']):before {
			content: '\\ea6a';
		}
		:host([icon='comment']):before {
			content: '\\ea6b';
		}
		:host([icon='comment-add']):before {
			content: '\\ea6b';
		}
		:host([icon='alert']):before {
			content: '\\ea6c';
		}
		:host([icon='warning']):before {
			content: '\\ea6c';
		}
		:host([icon='search']):before {
			content: '\\ea6d';
		}
		:host([icon='search-save']):before {
			content: '\\ea6d';
		}
		:host([icon='log-out']):before {
			content: '\\ea6e';
		}
		:host([icon='sign-out']):before {
			content: '\\ea6e';
		}
		:host([icon='log-in']):before {
			content: '\\ea6f';
		}
		:host([icon='sign-in']):before {
			content: '\\ea6f';
		}
		:host([icon='eye']):before {
			content: '\\ea70';
		}
		:host([icon='eye-unwatch']):before {
			content: '\\ea70';
		}
		:host([icon='eye-watch']):before {
			content: '\\ea70';
		}
		:host([icon='circle-filled']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-dot']):before {
			content: '\\ea71';
		}
		:host([icon='close-dirty']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint-disabled']):before {
			content: '\\ea71';
		}
		:host([icon='debug-hint']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-square']):before {
			content: '\\ea72';
		}
		:host([icon='edit']):before {
			content: '\\ea73';
		}
		:host([icon='pencil']):before {
			content: '\\ea73';
		}
		:host([icon='info']):before {
			content: '\\ea74';
		}
		:host([icon='issue-opened']):before {
			content: '\\ea74';
		}
		:host([icon='gist-private']):before {
			content: '\\ea75';
		}
		:host([icon='git-fork-private']):before {
			content: '\\ea75';
		}
		:host([icon='lock']):before {
			content: '\\ea75';
		}
		:host([icon='mirror-private']):before {
			content: '\\ea75';
		}
		:host([icon='close']):before {
			content: '\\ea76';
		}
		:host([icon='remove-close']):before {
			content: '\\ea76';
		}
		:host([icon='x']):before {
			content: '\\ea76';
		}
		:host([icon='repo-sync']):before {
			content: '\\ea77';
		}
		:host([icon='sync']):before {
			content: '\\ea77';
		}
		:host([icon='clone']):before {
			content: '\\ea78';
		}
		:host([icon='desktop-download']):before {
			content: '\\ea78';
		}
		:host([icon='beaker']):before {
			content: '\\ea79';
		}
		:host([icon='microscope']):before {
			content: '\\ea79';
		}
		:host([icon='vm']):before {
			content: '\\ea7a';
		}
		:host([icon='device-desktop']):before {
			content: '\\ea7a';
		}
		:host([icon='file']):before {
			content: '\\ea7b';
		}
		:host([icon='file-text']):before {
			content: '\\ea7b';
		}
		:host([icon='more']):before {
			content: '\\ea7c';
		}
		:host([icon='ellipsis']):before {
			content: '\\ea7c';
		}
		:host([icon='kebab-horizontal']):before {
			content: '\\ea7c';
		}
		:host([icon='mail-reply']):before {
			content: '\\ea7d';
		}
		:host([icon='reply']):before {
			content: '\\ea7d';
		}
		:host([icon='organization']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-filled']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-outline']):before {
			content: '\\ea7e';
		}
		:host([icon='new-file']):before {
			content: '\\ea7f';
		}
		:host([icon='file-add']):before {
			content: '\\ea7f';
		}
		:host([icon='new-folder']):before {
			content: '\\ea80';
		}
		:host([icon='file-directory-create']):before {
			content: '\\ea80';
		}
		:host([icon='trash']):before {
			content: '\\ea81';
		}
		:host([icon='trashcan']):before {
			content: '\\ea81';
		}
		:host([icon='history']):before {
			content: '\\ea82';
		}
		:host([icon='clock']):before {
			content: '\\ea82';
		}
		:host([icon='folder']):before {
			content: '\\ea83';
		}
		:host([icon='file-directory']):before {
			content: '\\ea83';
		}
		:host([icon='symbol-folder']):before {
			content: '\\ea83';
		}
		:host([icon='logo-github']):before {
			content: '\\ea84';
		}
		:host([icon='mark-github']):before {
			content: '\\ea84';
		}
		:host([icon='github']):before {
			content: '\\ea84';
		}
		:host([icon='terminal']):before {
			content: '\\ea85';
		}
		:host([icon='console']):before {
			content: '\\ea85';
		}
		:host([icon='repl']):before {
			content: '\\ea85';
		}
		:host([icon='zap']):before {
			content: '\\ea86';
		}
		:host([icon='symbol-event']):before {
			content: '\\ea86';
		}
		:host([icon='error']):before {
			content: '\\ea87';
		}
		:host([icon='stop']):before {
			content: '\\ea87';
		}
		:host([icon='variable']):before {
			content: '\\ea88';
		}
		:host([icon='symbol-variable']):before {
			content: '\\ea88';
		}
		:host([icon='array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-module']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-package']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-namespace']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-object']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-method']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-function']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-constructor']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-boolean']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-null']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-numeric']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-number']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-structure']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-struct']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-type-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-key']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-text']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-reference']):before {
			content: '\\ea94';
		}
		:host([icon='go-to-file']):before {
			content: '\\ea94';
		}
		:host([icon='symbol-enum']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-value']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-ruler']):before {
			content: '\\ea96';
		}
		:host([icon='symbol-unit']):before {
			content: '\\ea96';
		}
		:host([icon='activate-breakpoints']):before {
			content: '\\ea97';
		}
		:host([icon='archive']):before {
			content: '\\ea98';
		}
		:host([icon='arrow-both']):before {
			content: '\\ea99';
		}
		:host([icon='arrow-down']):before {
			content: '\\ea9a';
		}
		:host([icon='arrow-left']):before {
			content: '\\ea9b';
		}
		:host([icon='arrow-right']):before {
			content: '\\ea9c';
		}
		:host([icon='arrow-small-down']):before {
			content: '\\ea9d';
		}
		:host([icon='arrow-small-left']):before {
			content: '\\ea9e';
		}
		:host([icon='arrow-small-right']):before {
			content: '\\ea9f';
		}
		:host([icon='arrow-small-up']):before {
			content: '\\eaa0';
		}
		:host([icon='arrow-up']):before {
			content: '\\eaa1';
		}
		:host([icon='bell']):before {
			content: '\\eaa2';
		}
		:host([icon='bold']):before {
			content: '\\eaa3';
		}
		:host([icon='book']):before {
			content: '\\eaa4';
		}
		:host([icon='bookmark']):before {
			content: '\\eaa5';
		}
		:host([icon='debug-breakpoint-conditional-unverified']):before {
			content: '\\eaa6';
		}
		:host([icon='debug-breakpoint-conditional']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-conditional-disabled']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-data-unverified']):before {
			content: '\\eaa8';
		}
		:host([icon='debug-breakpoint-data']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-data-disabled']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-log-unverified']):before {
			content: '\\eaaa';
		}
		:host([icon='debug-breakpoint-log']):before {
			content: '\\eaab';
		}
		:host([icon='debug-breakpoint-log-disabled']):before {
			content: '\\eaab';
		}
		:host([icon='briefcase']):before {
			content: '\\eaac';
		}
		:host([icon='broadcast']):before {
			content: '\\eaad';
		}
		:host([icon='browser']):before {
			content: '\\eaae';
		}
		:host([icon='bug']):before {
			content: '\\eaaf';
		}
		:host([icon='calendar']):before {
			content: '\\eab0';
		}
		:host([icon='case-sensitive']):before {
			content: '\\eab1';
		}
		:host([icon='check']):before {
			content: '\\eab2';
		}
		:host([icon='checklist']):before {
			content: '\\eab3';
		}
		:host([icon='chevron-down']):before {
			content: '\\eab4';
		}
		:host([icon='chevron-left']):before {
			content: '\\eab5';
		}
		:host([icon='chevron-right']):before {
			content: '\\eab6';
		}
		:host([icon='chevron-up']):before {
			content: '\\eab7';
		}
		:host([icon='chrome-close']):before {
			content: '\\eab8';
		}
		:host([icon='chrome-maximize']):before {
			content: '\\eab9';
		}
		:host([icon='chrome-minimize']):before {
			content: '\\eaba';
		}
		:host([icon='chrome-restore']):before {
			content: '\\eabb';
		}
		:host([icon='circle-outline']):before {
			content: '\\eabc';
		}
		:host([icon='debug-breakpoint-unverified']):before {
			content: '\\eabc';
		}
		:host([icon='circle-slash']):before {
			content: '\\eabd';
		}
		:host([icon='circuit-board']):before {
			content: '\\eabe';
		}
		:host([icon='clear-all']):before {
			content: '\\eabf';
		}
		:host([icon='clippy']):before {
			content: '\\eac0';
		}
		:host([icon='close-all']):before {
			content: '\\eac1';
		}
		:host([icon='cloud-download']):before {
			content: '\\eac2';
		}
		:host([icon='cloud-upload']):before {
			content: '\\eac3';
		}
		:host([icon='code']):before {
			content: '\\eac4';
		}
		:host([icon='collapse-all']):before {
			content: '\\eac5';
		}
		:host([icon='color-mode']):before {
			content: '\\eac6';
		}
		:host([icon='comment-discussion']):before {
			content: '\\eac7';
		}
		:host([icon='credit-card']):before {
			content: '\\eac9';
		}
		:host([icon='dash']):before {
			content: '\\eacc';
		}
		:host([icon='dashboard']):before {
			content: '\\eacd';
		}
		:host([icon='database']):before {
			content: '\\eace';
		}
		:host([icon='debug-continue']):before {
			content: '\\eacf';
		}
		:host([icon='debug-disconnect']):before {
			content: '\\ead0';
		}
		:host([icon='debug-pause']):before {
			content: '\\ead1';
		}
		:host([icon='debug-restart']):before {
			content: '\\ead2';
		}
		:host([icon='debug-start']):before {
			content: '\\ead3';
		}
		:host([icon='debug-step-into']):before {
			content: '\\ead4';
		}
		:host([icon='debug-step-out']):before {
			content: '\\ead5';
		}
		:host([icon='debug-step-over']):before {
			content: '\\ead6';
		}
		:host([icon='debug-stop']):before {
			content: '\\ead7';
		}
		:host([icon='debug']):before {
			content: '\\ead8';
		}
		:host([icon='device-camera-video']):before {
			content: '\\ead9';
		}
		:host([icon='device-camera']):before {
			content: '\\eada';
		}
		:host([icon='device-mobile']):before {
			content: '\\eadb';
		}
		:host([icon='diff-added']):before {
			content: '\\eadc';
		}
		:host([icon='diff-ignored']):before {
			content: '\\eadd';
		}
		:host([icon='diff-modified']):before {
			content: '\\eade';
		}
		:host([icon='diff-removed']):before {
			content: '\\eadf';
		}
		:host([icon='diff-renamed']):before {
			content: '\\eae0';
		}
		:host([icon='diff']):before {
			content: '\\eae1';
		}
		:host([icon='discard']):before {
			content: '\\eae2';
		}
		:host([icon='editor-layout']):before {
			content: '\\eae3';
		}
		:host([icon='empty-window']):before {
			content: '\\eae4';
		}
		:host([icon='exclude']):before {
			content: '\\eae5';
		}
		:host([icon='extensions']):before {
			content: '\\eae6';
		}
		:host([icon='eye-closed']):before {
			content: '\\eae7';
		}
		:host([icon='file-binary']):before {
			content: '\\eae8';
		}
		:host([icon='file-code']):before {
			content: '\\eae9';
		}
		:host([icon='file-media']):before {
			content: '\\eaea';
		}
		:host([icon='file-pdf']):before {
			content: '\\eaeb';
		}
		:host([icon='file-submodule']):before {
			content: '\\eaec';
		}
		:host([icon='file-symlink-directory']):before {
			content: '\\eaed';
		}
		:host([icon='file-symlink-file']):before {
			content: '\\eaee';
		}
		:host([icon='file-zip']):before {
			content: '\\eaef';
		}
		:host([icon='files']):before {
			content: '\\eaf0';
		}
		:host([icon='filter']):before {
			content: '\\eaf1';
		}
		:host([icon='flame']):before {
			content: '\\eaf2';
		}
		:host([icon='fold-down']):before {
			content: '\\eaf3';
		}
		:host([icon='fold-up']):before {
			content: '\\eaf4';
		}
		:host([icon='fold']):before {
			content: '\\eaf5';
		}
		:host([icon='folder-active']):before {
			content: '\\eaf6';
		}
		:host([icon='folder-opened']):before {
			content: '\\eaf7';
		}
		:host([icon='gear']):before {
			content: '\\eaf8';
		}
		:host([icon='gift']):before {
			content: '\\eaf9';
		}
		:host([icon='gist-secret']):before {
			content: '\\eafa';
		}
		:host([icon='gist']):before {
			content: '\\eafb';
		}
		:host([icon='git-commit']):before {
			content: '\\eafc';
		}
		:host([icon='git-compare']):before {
			content: '\\eafd';
		}
		:host([icon='compare-changes']):before {
			content: '\\eafd';
		}
		:host([icon='git-merge']):before {
			content: '\\eafe';
		}
		:host([icon='github-action']):before {
			content: '\\eaff';
		}
		:host([icon='github-alt']):before {
			content: '\\eb00';
		}
		:host([icon='globe']):before {
			content: '\\eb01';
		}
		:host([icon='grabber']):before {
			content: '\\eb02';
		}
		:host([icon='graph']):before {
			content: '\\eb03';
		}
		:host([icon='gripper']):before {
			content: '\\eb04';
		}
		:host([icon='heart']):before {
			content: '\\eb05';
		}
		:host([icon='home']):before {
			content: '\\eb06';
		}
		:host([icon='horizontal-rule']):before {
			content: '\\eb07';
		}
		:host([icon='hubot']):before {
			content: '\\eb08';
		}
		:host([icon='inbox']):before {
			content: '\\eb09';
		}
		:host([icon='issue-reopened']):before {
			content: '\\eb0b';
		}
		:host([icon='issues']):before {
			content: '\\eb0c';
		}
		:host([icon='italic']):before {
			content: '\\eb0d';
		}
		:host([icon='jersey']):before {
			content: '\\eb0e';
		}
		:host([icon='json']):before {
			content: '\\eb0f';
		}
		:host([icon='kebab-vertical']):before {
			content: '\\eb10';
		}
		:host([icon='key']):before {
			content: '\\eb11';
		}
		:host([icon='law']):before {
			content: '\\eb12';
		}
		:host([icon='lightbulb-autofix']):before {
			content: '\\eb13';
		}
		:host([icon='link-external']):before {
			content: '\\eb14';
		}
		:host([icon='link']):before {
			content: '\\eb15';
		}
		:host([icon='list-ordered']):before {
			content: '\\eb16';
		}
		:host([icon='list-unordered']):before {
			content: '\\eb17';
		}
		:host([icon='live-share']):before {
			content: '\\eb18';
		}
		:host([icon='loading']):before {
			content: '\\eb19';
		}
		:host([icon='location']):before {
			content: '\\eb1a';
		}
		:host([icon='mail-read']):before {
			content: '\\eb1b';
		}
		:host([icon='mail']):before {
			content: '\\eb1c';
		}
		:host([icon='markdown']):before {
			content: '\\eb1d';
		}
		:host([icon='megaphone']):before {
			content: '\\eb1e';
		}
		:host([icon='mention']):before {
			content: '\\eb1f';
		}
		:host([icon='milestone']):before {
			content: '\\eb20';
		}
		:host([icon='mortar-board']):before {
			content: '\\eb21';
		}
		:host([icon='move']):before {
			content: '\\eb22';
		}
		:host([icon='multiple-windows']):before {
			content: '\\eb23';
		}
		:host([icon='mute']):before {
			content: '\\eb24';
		}
		:host([icon='no-newline']):before {
			content: '\\eb25';
		}
		:host([icon='note']):before {
			content: '\\eb26';
		}
		:host([icon='octoface']):before {
			content: '\\eb27';
		}
		:host([icon='open-preview']):before {
			content: '\\eb28';
		}
		:host([icon='package']):before {
			content: '\\eb29';
		}
		:host([icon='paintcan']):before {
			content: '\\eb2a';
		}
		:host([icon='pin']):before {
			content: '\\eb2b';
		}
		:host([icon='play']):before {
			content: '\\eb2c';
		}
		:host([icon='run']):before {
			content: '\\eb2c';
		}
		:host([icon='plug']):before {
			content: '\\eb2d';
		}
		:host([icon='preserve-case']):before {
			content: '\\eb2e';
		}
		:host([icon='preview']):before {
			content: '\\eb2f';
		}
		:host([icon='project']):before {
			content: '\\eb30';
		}
		:host([icon='pulse']):before {
			content: '\\eb31';
		}
		:host([icon='question']):before {
			content: '\\eb32';
		}
		:host([icon='quote']):before {
			content: '\\eb33';
		}
		:host([icon='radio-tower']):before {
			content: '\\eb34';
		}
		:host([icon='reactions']):before {
			content: '\\eb35';
		}
		:host([icon='references']):before {
			content: '\\eb36';
		}
		:host([icon='refresh']):before {
			content: '\\eb37';
		}
		:host([icon='regex']):before {
			content: '\\eb38';
		}
		:host([icon='remote-explorer']):before {
			content: '\\eb39';
		}
		:host([icon='remote']):before {
			content: '\\eb3a';
		}
		:host([icon='remove']):before {
			content: '\\eb3b';
		}
		:host([icon='replace-all']):before {
			content: '\\eb3c';
		}
		:host([icon='replace']):before {
			content: '\\eb3d';
		}
		:host([icon='repo-clone']):before {
			content: '\\eb3e';
		}
		:host([icon='repo-force-push']):before {
			content: '\\eb3f';
		}
		:host([icon='repo-pull']):before {
			content: '\\eb40';
		}
		:host([icon='repo-push']):before {
			content: '\\eb41';
		}
		:host([icon='report']):before {
			content: '\\eb42';
		}
		:host([icon='request-changes']):before {
			content: '\\eb43';
		}
		:host([icon='rocket']):before {
			content: '\\eb44';
		}
		:host([icon='root-folder-opened']):before {
			content: '\\eb45';
		}
		:host([icon='root-folder']):before {
			content: '\\eb46';
		}
		:host([icon='rss']):before {
			content: '\\eb47';
		}
		:host([icon='ruby']):before {
			content: '\\eb48';
		}
		:host([icon='save-all']):before {
			content: '\\eb49';
		}
		:host([icon='save-as']):before {
			content: '\\eb4a';
		}
		:host([icon='save']):before {
			content: '\\eb4b';
		}
		:host([icon='screen-full']):before {
			content: '\\eb4c';
		}
		:host([icon='screen-normal']):before {
			content: '\\eb4d';
		}
		:host([icon='search-stop']):before {
			content: '\\eb4e';
		}
		:host([icon='server']):before {
			content: '\\eb50';
		}
		:host([icon='settings-gear']):before {
			content: '\\eb51';
		}
		:host([icon='settings']):before {
			content: '\\eb52';
		}
		:host([icon='shield']):before {
			content: '\\eb53';
		}
		:host([icon='smiley']):before {
			content: '\\eb54';
		}
		:host([icon='sort-precedence']):before {
			content: '\\eb55';
		}
		:host([icon='split-horizontal']):before {
			content: '\\eb56';
		}
		:host([icon='split-vertical']):before {
			content: '\\eb57';
		}
		:host([icon='squirrel']):before {
			content: '\\eb58';
		}
		:host([icon='star-full']):before {
			content: '\\eb59';
		}
		:host([icon='star-half']):before {
			content: '\\eb5a';
		}
		:host([icon='symbol-class']):before {
			content: '\\eb5b';
		}
		:host([icon='symbol-color']):before {
			content: '\\eb5c';
		}
		:host([icon='symbol-constant']):before {
			content: '\\eb5d';
		}
		:host([icon='symbol-enum-member']):before {
			content: '\\eb5e';
		}
		:host([icon='symbol-field']):before {
			content: '\\eb5f';
		}
		:host([icon='symbol-file']):before {
			content: '\\eb60';
		}
		:host([icon='symbol-interface']):before {
			content: '\\eb61';
		}
		:host([icon='symbol-keyword']):before {
			content: '\\eb62';
		}
		:host([icon='symbol-misc']):before {
			content: '\\eb63';
		}
		:host([icon='symbol-operator']):before {
			content: '\\eb64';
		}
		:host([icon='symbol-property']):before {
			content: '\\eb65';
		}
		:host([icon='wrench']):before {
			content: '\\eb65';
		}
		:host([icon='wrench-subaction']):before {
			content: '\\eb65';
		}
		:host([icon='symbol-snippet']):before {
			content: '\\eb66';
		}
		:host([icon='tasklist']):before {
			content: '\\eb67';
		}
		:host([icon='telescope']):before {
			content: '\\eb68';
		}
		:host([icon='text-size']):before {
			content: '\\eb69';
		}
		:host([icon='three-bars']):before {
			content: '\\eb6a';
		}
		:host([icon='thumbsdown']):before {
			content: '\\eb6b';
		}
		:host([icon='thumbsup']):before {
			content: '\\eb6c';
		}
		:host([icon='tools']):before {
			content: '\\eb6d';
		}
		:host([icon='triangle-down']):before {
			content: '\\eb6e';
		}
		:host([icon='triangle-left']):before {
			content: '\\eb6f';
		}
		:host([icon='triangle-right']):before {
			content: '\\eb70';
		}
		:host([icon='triangle-up']):before {
			content: '\\eb71';
		}
		:host([icon='twitter']):before {
			content: '\\eb72';
		}
		:host([icon='unfold']):before {
			content: '\\eb73';
		}
		:host([icon='unlock']):before {
			content: '\\eb74';
		}
		:host([icon='unmute']):before {
			content: '\\eb75';
		}
		:host([icon='unverified']):before {
			content: '\\eb76';
		}
		:host([icon='verified']):before {
			content: '\\eb77';
		}
		:host([icon='versions']):before {
			content: '\\eb78';
		}
		:host([icon='vm-active']):before {
			content: '\\eb79';
		}
		:host([icon='vm-outline']):before {
			content: '\\eb7a';
		}
		:host([icon='vm-running']):before {
			content: '\\eb7b';
		}
		:host([icon='watch']):before {
			content: '\\eb7c';
		}
		:host([icon='whitespace']):before {
			content: '\\eb7d';
		}
		:host([icon='whole-word']):before {
			content: '\\eb7e';
		}
		:host([icon='window']):before {
			content: '\\eb7f';
		}
		:host([icon='word-wrap']):before {
			content: '\\eb80';
		}
		:host([icon='zoom-in']):before {
			content: '\\eb81';
		}
		:host([icon='zoom-out']):before {
			content: '\\eb82';
		}
		:host([icon='list-filter']):before {
			content: '\\eb83';
		}
		:host([icon='list-flat']):before {
			content: '\\eb84';
		}
		:host([icon='list-selection']):before {
			content: '\\eb85';
		}
		:host([icon='selection']):before {
			content: '\\eb85';
		}
		:host([icon='list-tree']):before {
			content: '\\eb86';
		}
		:host([icon='debug-breakpoint-function-unverified']):before {
			content: '\\eb87';
		}
		:host([icon='debug-breakpoint-function']):before {
			content: '\\eb88';
		}
		:host([icon='debug-breakpoint-function-disabled']):before {
			content: '\\eb88';
		}
		:host([icon='debug-stackframe-active']):before {
			content: '\\eb89';
		}
		:host([icon='debug-stackframe-dot']):before {
			content: '\\eb8a';
		}
		:host([icon='debug-stackframe']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-stackframe-focused']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-breakpoint-unsupported']):before {
			content: '\\eb8c';
		}
		:host([icon='symbol-string']):before {
			content: '\\eb8d';
		}
		:host([icon='debug-reverse-continue']):before {
			content: '\\eb8e';
		}
		:host([icon='debug-step-back']):before {
			content: '\\eb8f';
		}
		:host([icon='debug-restart-frame']):before {
			content: '\\eb90';
		}
		:host([icon='debug-alt']):before {
			content: '\\eb91';
		}
		:host([icon='call-incoming']):before {
			content: '\\eb92';
		}
		:host([icon='call-outgoing']):before {
			content: '\\eb93';
		}
		:host([icon='menu']):before {
			content: '\\eb94';
		}
		:host([icon='expand-all']):before {
			content: '\\eb95';
		}
		:host([icon='feedback']):before {
			content: '\\eb96';
		}
		:host([icon='group-by-ref-type']):before {
			content: '\\eb97';
		}
		:host([icon='ungroup-by-ref-type']):before {
			content: '\\eb98';
		}
		:host([icon='account']):before {
			content: '\\eb99';
		}
		:host([icon='bell-dot']):before {
			content: '\\eb9a';
		}
		:host([icon='debug-console']):before {
			content: '\\eb9b';
		}
		:host([icon='library']):before {
			content: '\\eb9c';
		}
		:host([icon='output']):before {
			content: '\\eb9d';
		}
		:host([icon='run-all']):before {
			content: '\\eb9e';
		}
		:host([icon='sync-ignored']):before {
			content: '\\eb9f';
		}
		:host([icon='pinned']):before {
			content: '\\eba0';
		}
		:host([icon='github-inverted']):before {
			content: '\\eba1';
		}
		:host([icon='server-process']):before {
			content: '\\eba2';
		}
		:host([icon='server-environment']):before {
			content: '\\eba3';
		}
		:host([icon='pass']):before {
			content: '\\eba4';
		}
		:host([icon='issue-closed']):before {
			content: '\\eba4';
		}
		:host([icon='stop-circle']):before {
			content: '\\eba5';
		}
		:host([icon='play-circle']):before {
			content: '\\eba6';
		}
		:host([icon='record']):before {
			content: '\\eba7';
		}
		:host([icon='debug-alt-small']):before {
			content: '\\eba8';
		}
		:host([icon='vm-connect']):before {
			content: '\\eba9';
		}
		:host([icon='cloud']):before {
			content: '\\ebaa';
		}
		:host([icon='merge']):before {
			content: '\\ebab';
		}
		:host([icon='export']):before {
			content: '\\ebac';
		}
		:host([icon='graph-left']):before {
			content: '\\ebad';
		}
		:host([icon='magnet']):before {
			content: '\\ebae';
		}
		:host([icon='notebook']):before {
			content: '\\ebaf';
		}
		:host([icon='redo']):before {
			content: '\\ebb0';
		}
		:host([icon='check-all']):before {
			content: '\\ebb1';
		}
		:host([icon='pinned-dirty']):before {
			content: '\\ebb2';
		}
		:host([icon='pass-filled']):before {
			content: '\\ebb3';
		}
		:host([icon='circle-large-filled']):before {
			content: '\\ebb4';
		}
		:host([icon='circle-large-outline']):before {
			content: '\\ebb5';
		}
		:host([icon='combine']):before {
			content: '\\ebb6';
		}
		:host([icon='gather']):before {
			content: '\\ebb6';
		}
		:host([icon='table']):before {
			content: '\\ebb7';
		}
		:host([icon='variable-group']):before {
			content: '\\ebb8';
		}
		:host([icon='type-hierarchy']):before {
			content: '\\ebb9';
		}
		:host([icon='type-hierarchy-sub']):before {
			content: '\\ebba';
		}
		:host([icon='type-hierarchy-super']):before {
			content: '\\ebbb';
		}
		:host([icon='git-pull-request-create']):before {
			content: '\\ebbc';
		}
		:host([icon='run-above']):before {
			content: '\\ebbd';
		}
		:host([icon='run-below']):before {
			content: '\\ebbe';
		}
		:host([icon='notebook-template']):before {
			content: '\\ebbf';
		}
		:host([icon='debug-rerun']):before {
			content: '\\ebc0';
		}
		:host([icon='workspace-trusted']):before {
			content: '\\ebc1';
		}
		:host([icon='workspace-untrusted']):before {
			content: '\\ebc2';
		}
		:host([icon='workspace-unknown']):before {
			content: '\\ebc3';
		}
		:host([icon='terminal-cmd']):before {
			content: '\\ebc4';
		}
		:host([icon='terminal-debian']):before {
			content: '\\ebc5';
		}
		:host([icon='terminal-linux']):before {
			content: '\\ebc6';
		}
		:host([icon='terminal-powershell']):before {
			content: '\\ebc7';
		}
		:host([icon='terminal-tmux']):before {
			content: '\\ebc8';
		}
		:host([icon='terminal-ubuntu']):before {
			content: '\\ebc9';
		}
		:host([icon='terminal-bash']):before {
			content: '\\ebca';
		}
		:host([icon='arrow-swap']):before {
			content: '\\ebcb';
		}
		:host([icon='copy']):before {
			content: '\\ebcc';
		}
		:host([icon='person-add']):before {
			content: '\\ebcd';
		}
		:host([icon='filter-filled']):before {
			content: '\\ebce';
		}
		:host([icon='wand']):before {
			content: '\\ebcf';
		}
		:host([icon='debug-line-by-line']):before {
			content: '\\ebd0';
		}
		:host([icon='inspect']):before {
			content: '\\ebd1';
		}
		:host([icon='layers']):before {
			content: '\\ebd2';
		}
		:host([icon='layers-dot']):before {
			content: '\\ebd3';
		}
		:host([icon='layers-active']):before {
			content: '\\ebd4';
		}
		:host([icon='compass']):before {
			content: '\\ebd5';
		}
		:host([icon='compass-dot']):before {
			content: '\\ebd6';
		}
		:host([icon='compass-active']):before {
			content: '\\ebd7';
		}
		:host([icon='azure']):before {
			content: '\\ebd8';
		}
		:host([icon='issue-draft']):before {
			content: '\\ebd9';
		}
		:host([icon='git-pull-request-closed']):before {
			content: '\\ebda';
		}
		:host([icon='git-pull-request-draft']):before {
			content: '\\ebdb';
		}
		:host([icon='debug-all']):before {
			content: '\\ebdc';
		}
		:host([icon='debug-coverage']):before {
			content: '\\ebdd';
		}
		:host([icon='run-errors']):before {
			content: '\\ebde';
		}
		:host([icon='folder-library']):before {
			content: '\\ebdf';
		}
		:host([icon='debug-continue-small']):before {
			content: '\\ebe0';
		}
		:host([icon='beaker-stop']):before {
			content: '\\ebe1';
		}
		:host([icon='graph-line']):before {
			content: '\\ebe2';
		}
		:host([icon='graph-scatter']):before {
			content: '\\ebe3';
		}
		:host([icon='pie-chart']):before {
			content: '\\ebe4';
		}
		:host([icon='bracket']):before {
			content: '\\eb0f';
		}
		:host([icon='bracket-dot']):before {
			content: '\\ebe5';
		}
		:host([icon='bracket-error']):before {
			content: '\\ebe6';
		}
		:host([icon='lock-small']):before {
			content: '\\ebe7';
		}
		:host([icon='azure-devops']):before {
			content: '\\ebe8';
		}
		:host([icon='verified-filled']):before {
			content: '\\ebe9';
		}
		:host([icon='newline']):before {
			content: '\\ebea';
		}
		:host([icon='layout']):before {
			content: '\\ebeb';
		}
		:host([icon='layout-activitybar-left']):before {
			content: '\\ebec';
		}
		:host([icon='layout-activitybar-right']):before {
			content: '\\ebed';
		}
		:host([icon='layout-panel-left']):before {
			content: '\\ebee';
		}
		:host([icon='layout-panel-center']):before {
			content: '\\ebef';
		}
		:host([icon='layout-panel-justify']):before {
			content: '\\ebf0';
		}
		:host([icon='layout-panel-right']):before {
			content: '\\ebf1';
		}
		:host([icon='layout-panel']):before {
			content: '\\ebf2';
		}
		:host([icon='layout-sidebar-left']):before {
			content: '\\ebf3';
		}
		:host([icon='layout-sidebar-right']):before {
			content: '\\ebf4';
		}
		:host([icon='layout-statusbar']):before {
			content: '\\ebf5';
		}
		:host([icon='layout-menubar']):before {
			content: '\\ebf6';
		}
		:host([icon='layout-centered']):before {
			content: '\\ebf7';
		}
		:host([icon='target']):before {
			content: '\\ebf8';
		}
		:host([icon='pinned-filled']):before {
			font-family: 'glicons';
			content: '\\f11c';
			position: relative;
			left: 1px;
		}
	`,st([m()],he.prototype,"icon",2),he=st([S("code-icon")],he);const ct=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,at=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Nt=[["year",24*60*60*1e3*(365*2-1),24*60*60*1e3*365,"yr"],["month",24*60*60*1e3*365/12,24*60*60*1e3*365/12,"mo"],["week",24*60*60*1e3*7,24*60*60*1e3*7,"wk"],["day",24*60*60*1e3,24*60*60*1e3,"d"],["hour",60*60*1e3,60*60*1e3,"h"],["minute",60*1e3,60*1e3,"m"],["second",1e3,1e3,"s"]];let F;const ee=new Map;let x,j,E;function Ao(c){typeof c=="string"?c==="system"?x=void 0:x=[c]:x=c??void 0,j=void 0,E=void 0,ee.clear(),F=void 0}function Co(c,n){const i=new Date(c.getTime());for(const[r,s]of Object.entries(n))if(!!s)switch(r){case"years":i.setFullYear(i.getFullYear()+s);break;case"months":i.setMonth(i.getMonth()+s);break;case"days":i.setDate(i.getDate()+s);break;case"hours":i.setHours(i.getHours()+s);break;case"minutes":i.setMinutes(i.getMinutes()+s);break;case"seconds":i.setSeconds(i.getSeconds()+s);break}return i}function Ut(c,n){const i=c.getTime()-new Date().getTime();for(const[r,s,a,l]of Nt){const d=Math.abs(i);if(d>=s||s===1e3)return n?(F==null&&(E!=null?F=E.resolvedOptions().locale:j!=null?F=j.resolvedOptions().locale:(E=new Intl.RelativeTimeFormat(x,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),F=E.resolvedOptions().locale)),F==="en"||F?.startsWith("en-")?`${Math.round(d/a)}${l}`:(E==null&&(E=new Intl.RelativeTimeFormat(x,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),E.format(Math.round(i/a),r))):(j==null&&(j=new Intl.RelativeTimeFormat(x,{localeMatcher:"best fit",numeric:"auto",style:"long"})),j.format(Math.round(i/a),r))}return""}function qt(c,n,i,r=!0){n=n??void 0;const s=`${i??""}:${n}`;let a=ee.get(s);if(a==null){const h=Lt(n);let b;i==null?b=x:i==="system"?b=void 0:b=[i],a=new Intl.DateTimeFormat(b,h),r&&ee.set(s,a)}if(n==null||at.test(n))return a.format(c);function l(h){const b=`${i??""}:time:${h}`;let p=ee.get(b);if(p==null){const f={localeMatcher:"best fit",timeStyle:h};let u;i==null?u=x:i==="system"?u=void 0:u=[i],p=new Intl.DateTimeFormat(u,f),r&&ee.set(b,p)}return p}const d=a.formatToParts(c);return n.replace(ct,(h,b,p,f,u,w,oe,ne,xo,Eo,To,Mo,Oo,Do,dt)=>{if(b!=null)return b.substring(1,b.length-1);for(const ht in dt){const Te=dt[ht];if(Te==null)continue;const ie=d.find(bt=>bt.type===ht);return Te==="Do"&&ie?.type==="day"?zt(Number(ie.value)):Te==="a"&&ie?.type==="dayPeriod"?` ${(l("short").formatToParts(c).find(ao=>ao.type==="dayPeriod")??ie)?.value??""}`:ie?.value??""}return""})}function Po(c,n,i){const r=(typeof n=="number"?n:n.getTime())-(typeof c=="number"?c:c.getTime());switch(i){case"days":return Math.floor(r/(1e3*60*60*24));case"hours":return Math.floor(r/(1e3*60*60));case"minutes":return Math.floor(r/(1e3*60));case"seconds":return Math.floor(r/1e3);default:return r}}function Lt(c){if(c==null)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const n=at.exec(c);if(n?.groups!=null){const{dateStyle:r,timeStyle:s}=n.groups;return{localeMatcher:"best fit",dateStyle:r||"full",timeStyle:s||void 0}}const i={localeMatcher:"best fit"};for(const{groups:r}of c.matchAll(ct))if(r!=null)for(const s in r){const a=r[s];if(a!=null)switch(s){case"year":i.year=a.length===4?"numeric":"2-digit";break;case"month":switch(a.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric";break}break;case"day":a==="DD"?i.day="2-digit":i.day="numeric";break;case"weekday":switch(a.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow";break}break;case"hour":i.hour=a.length===2?"2-digit":"numeric",i.hour12=a==="hh"||a==="h";break;case"minute":i.minute=a.length===2?"2-digit":"numeric";break;case"second":i.second=a.length===2?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=a.length===2?"long":"short";break}}return i}const Se=["th","st","nd","rd"];function zt(c){const n=c%100;return`${c}${Se[(n-20)%10]??Se[n]??Se[0]}`}const Bt=()=>({toAttribute:c=>c.getTime(),fromAttribute:(c,n)=>new Date(parseInt(c,10))});var jt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,xe=(c,n,i,r)=>{for(var s=r>1?void 0:r?Vt(n,i):n,a=c.length-1,l;a>=0;a--)(l=c[a])&&(s=(r?l(n,i,s):l(s))||s);return r&&s&&jt(n,i,s),s};let be=class extends ${constructor(){super(...arguments),this.format="MMMM Do, YYYY h:mma",this.date=new Date}render(){return _`<time datetime="${this.date}" title="${qt(this.date,this.format??"MMMM Do, YYYY h:mma")}"
			>${Ut(this.date)}</time
		>`}};xe([m()],be.prototype,"format",2),xe([m({converter:Bt(),reflect:!0})],be.prototype,"date",2),be=xe([S("formatted-date")],be);var Wt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,T=(c,n,i,r)=>{for(var s=r>1?void 0:r?Yt(n,i):n,a=c.length-1,l;a>=0;a--)(l=c[a])&&(s=(r?l(n,i,s):l(s))||s);return r&&s&&Wt(n,i,s),s};let A=class extends ${constructor(){super(...arguments),this.name="",this.email="",this.date="",this.avatar="https://www.gravatar.com/avatar/?s=64&d=robohash",this.dateFormat="MMMM Do, YYYY h:mma",this.committer=!1,this.actionLabel="committed"}render(){const c=this.avatar.replace("s=32","s=64");return _`
			<a class="avatar" href="${this.email?`mailto:${this.email}`:"#"}"
				><img class="thumb" lazy src="${c}" alt="${this.name}"
			/></a>
			<a class="name" href="${this.email?`mailto:${this.email}`:"#"}">${this.name}</a>
			<span class="date"
				>${this.actionLabel} <formatted-date date=${this.date} dateFormat="${this.dateFormat}"></formatted-date
			></span>
		`}};A.styles=R`
		:host {
			display: grid;
			gap: 0rem 1rem;
			justify-content: start;
		}
		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}
		.avatar {
			grid-column: 1;
			grid-row: 1 / 3;
			width: 36px;
		}
		.thumb {
			width: 100%;
			height: auto;
			border-radius: 0.4rem;
		}
		.name {
			grid-column: 2;
			grid-row: 1;
			font-size: 1.5rem;
		}
		.date {
			grid-column: 2;
			grid-row: 2;
			font-size: 1.3rem;
		}
	`,T([m()],A.prototype,"name",2),T([m()],A.prototype,"email",2),T([m()],A.prototype,"date",2),T([m()],A.prototype,"avatar",2),T([m()],A.prototype,"dateFormat",2),T([m({type:Boolean,reflect:!0})],A.prototype,"committer",2),T([m()],A.prototype,"actionLabel",2),A=T([S("commit-identity")],A);var Zt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,V=(c,n,i,r)=>{for(var s=r>1?void 0:r?Kt(n,i):n,a=c.length-1,l;a>=0;a--)(l=c[a])&&(s=(r?l(n,i,s):l(s))||s);return r&&s&&Zt(n,i,s),s};let M=class extends ${constructor(){super(...arguments),this.url="",this.name="",this.date="",this.status="merged",this.key="#1999"}render(){const c=this.status.toLowerCase()==="merged"?"git-merge":this.status.toLowerCase()==="closed"?"pass":"issues";return _`
			<span class="icon"><code-icon icon=${c}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">
				${this.key} ${this.status}
				<formatted-date date="${this.date}"></formatted-date>
			</p>
		`}};M.styles=R`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
			text-align: center;
			padding-top: 0.1rem;
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
			font-size: 1.4rem;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
			font-size: 1.3rem;
		}
	`,V([m()],M.prototype,"url",2),V([m()],M.prototype,"name",2),V([m()],M.prototype,"date",2),V([m()],M.prototype,"status",2),V([m()],M.prototype,"key",2),M=V([S("issue-pull-request")],M);var Gt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,lt=(c,n,i,r)=>{for(var s=r>1?void 0:r?Jt(n,i):n,a=c.length-1,l;a>=0;a--)(l=c[a])&&(s=(r?l(n,i,s):l(s))||s);return r&&s&&Gt(n,i,s),s};let fe=class extends ${constructor(){super(...arguments),this.lines=1}render(){const c=`--skeleton-lines: ${this.lines};`;return _`<div class="skeleton" style=${c}></div>`}};fe.styles=R`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,lt([m({type:Number})],fe.prototype,"lines",2),fe=lt([S("skeleton-loader")],fe);var Xt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,ue=(c,n,i,r)=>{for(var s=r>1?void 0:r?Qt(n,i):n,a=c.length-1,l;a>=0;a--)(l=c[a])&&(s=(r?l(n,i,s):l(s))||s);return r&&s&&Xt(n,i,s),s};let W=class extends ${constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return _`
			<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
				><span class="label">+${this.added}</span></span
			>
			<span class="stat modified" title="${this.modified} modified" aria-label="${this.modified} modified"
				><span class="label">~${this.modified}</span></span
			>
			<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
				><span class="label">-${this.removed}</span></span
			>
		`}};W.styles=R`
        :host {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
        }

        .stat {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
        }

        .stat code-icon {
            margin-right: 0.25rem;
        }

        .added {
            color: var(--vscode-gitDecoration-addedResourceForeground);
        }
        .modified {
            color: var(--vscode-gitDecoration-modifiedResourceForeground);
        }
        .deleted {
            color: var(--vscode-gitDecoration-deletedResourceForeground);
        }

        .label {
            flex-basis: 100%;
            text-align: center;
        }
    }
    `,ue([m({type:Number})],W.prototype,"added",2),ue([m({type:Number})],W.prototype,"modified",2),ue([m({type:Number})],W.prototype,"removed",2),W=ue([S("commit-stats")],W);var eo=Object.defineProperty,to=Object.getOwnPropertyDescriptor,Y=(c,n,i,r)=>{for(var s=r>1?void 0:r?to(n,i):n,a=c.length-1,l;a>=0;a--)(l=c[a])&&(s=(r?l(n,i,s):l(s))||s);return r&&s&&eo(n,i,s),s};const oo={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"},no={".":void 0,"!":"diff-ignored","?":"diff-added",A:"diff-added",D:"diff-removed",M:"diff-modified",R:"diff-renamed",C:"diff-added",AA:"warning",AU:"warning",UA:"warning",DD:"warning",DU:"warning",UD:"warning",UU:"warning",T:"diff-modified",U:"diff-modified"};let O=class extends ${constructor(){super(...arguments),this.status="",this.path="",this.repoPath="",this.icon="",this.stash=!1}renderIcon(){if(this.icon!=="")return _`<img class="change-list__status-icon" src="${this.icon}" />`;const c=(this.status!==""&&no[this.status])??"file";return _` <code-icon icon="${c}"></code-icon> `}focus(c){this.shadowRoot?.getElementById("item")?.focus(c)}open(c){this.onComparePrevious(void 0,c)}render(){const c=this.status!==""?oo[this.status]:"",n=this.path.lastIndexOf("/"),i=n>-1?this.path.substring(n+1):this.path,r=n>-1?this.path.substring(0,n):"";return _`
			<a id="item" class="change-list__link" @click=${this.onComparePrevious} href="#">
				<span class="change-list__status" title="${c}" aria-label="${c}"
					>${this.renderIcon()}</span
				><span class="change-list__filename">${i}</span>
				<small class="change-list__path">${r}</small>
			</a>
			<nav class="change-list__actions">
				<a
					class="change-list__action"
					@click=${this.onOpenFile}
					href="#"
					title="Open file"
					aria-label="Open file"
					><code-icon icon="go-to-file"></code-icon></a
				><a
					class="change-list__action"
					@click=${this.onCompareWorking}
					href="#"
					title="Open Changes with Working File"
					aria-label="Open Changes with Working File"
					><code-icon icon="git-compare"></code-icon></a
				>${this.stash?g:_`<a
								class="change-list__action"
								@click=${this.onOpenFileOnRemote}
								href="#"
								title="Open on remote"
								aria-label="Open on remote"
								><code-icon icon="globe"></code-icon></a
							><a
								class="change-list__action"
								@click=${this.onMoreActions}
								href="#"
								title="Show more actions"
								aria-label="Show more actions"
								><code-icon icon="ellipsis"></code-icon
							></a>`}
			</nav>
		`}onOpenFile(c){c.preventDefault(),this.fireEvent("file-open")}onOpenFileOnRemote(c){c.preventDefault(),this.fireEvent("file-open-on-remote")}onCompareWorking(c){c.preventDefault(),this.fireEvent("file-compare-working")}onComparePrevious(c,n){c?.preventDefault(),this.fireEvent("file-compare-previous",n)}onMoreActions(c){c.preventDefault(),this.fireEvent("file-more-actions")}fireEvent(c,n){const i=new CustomEvent(c,{detail:{path:this.path,repoPath:this.repoPath,showOptions:n},bubbles:!0,composed:!0});this.dispatchEvent(i)}};O.styles=R`
		:host {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			line-height: 2rem;
			color: var(--vscode-sideBar-foreground);
		}
		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -1px;
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		* {
			box-sizing: border-box;
		}

		.change-list__link {
			width: 100%;
			color: inherit;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			text-decoration: none;
			outline: none;
		}

		.change-list__status {
			margin-right: 0.6rem;
		}

		.change-list__status-icon {
			width: 16px;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.change-list__path {
			opacity: 0.7;
			margin-left: 0.3rem;
		}

		.change-list__actions {
			flex: none;
			user-select: none;
			display: flex;
			align-items: center;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .change-list__actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host(:not(:hover):not(:focus-within)) .change-list__actions {
			display: none;
		}

		.change-list__action {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.25em;
			color: inherit;
			padding: 2px;
			vertical-align: text-bottom;
			text-decoration: none;
		}
		.change-list__action:focus {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}
		.change-list__action:hover {
			background-color: var(--vscode-toolbar-hoverBackground);
		}
		.change-list__action:active {
			background-color: var(--vscode-toolbar-activeBackground);
		}
	`,Y([m()],O.prototype,"status",2),Y([m()],O.prototype,"path",2),Y([m({attribute:"repo-path"})],O.prototype,"repoPath",2),Y([m()],O.prototype,"icon",2),Y([m({type:Boolean,reflect:!0})],O.prototype,"stash",2),O=Y([S("file-change-item")],O);var io=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,Ee=(c,n,i,r)=>{for(var s=r>1?void 0:r?ro(n,i):n,a=c.length-1,l;a>=0;a--)(l=c[a])&&(s=(r?l(n,i,s):l(s))||s);return r&&s&&io(n,i,s),s};let te=class extends ${constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1}renderTitle(){return this.collapsable?_`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:_`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return _`
			<header class="header">${this.renderTitle()}</header>
			<div id="content" role="region" class="content">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};te.styles=R`
		:host {
			display: flex;
			flex-direction: column;
			background-color: var(--vscode-sideBar-background);
		}

		* {
			box-sizing: border-box;
		}

		.header {
			flex: none;
			display: flex;
			background-color: var(--vscode-sideBarSectionHeader-background);
			color: var(--vscode-sideBarSectionHeader-foreground);
			border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
		}

		.header:focus-within {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}

		.label {
			appearance: none;
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 100%;
			padding: 0;
			border: none;
			text-align: left;
			font-family: var(--font-family);
			font-size: 1.1rem;
			line-height: 2.2rem;
			height: 2.2rem;
			background: transparent;
			color: inherit;
			cursor: pointer;
			outline: none;
			text-overflow: ellipsis;
		}

		.title {
			font-weight: bold;
			text-transform: uppercase;
		}

		.subtitle {
			margin-left: 1rem;
			opacity: 0.6;
		}

		.icon {
			font-weight: normal;
			margin: 0 0.2rem;
		}

		.content {
			overflow: auto;
			/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
			padding-top: 0.6rem;
		}

		:host([collapsable]:not([expanded])) .content,
		:host([collapsable][expanded='false']) .content {
			display: none;
		}
	`,Ee([m({type:Boolean,reflect:!0})],te.prototype,"collapsable",2),Ee([m({type:Boolean,reflect:!0})],te.prototype,"expanded",2),te=Ee([S("webview-pane")],te);const so="0000000000000000000000000000000000000000";class co extends St{constructor(){super("CommitDetailsApp"),this.log("CommitDetailsApp",this.state)}onInitialize(){this.log("CommitDetailsApp.onInitialize",this.state),this.renderContent()}onBind(){return[v.on("file-change-item","file-open-on-remote",i=>this.onOpenFileOnRemote(i.detail)),v.on("file-change-item","file-open",i=>this.onOpenFile(i.detail)),v.on("file-change-item","file-compare-working",i=>this.onCompareFileWithWorking(i.detail)),v.on("file-change-item","file-compare-previous",i=>this.onCompareFileWithPrevious(i.detail)),v.on("file-change-item","file-more-actions",i=>this.onFileMoreActions(i.detail)),v.on('[data-action="commit-actions-sha"]',"click",i=>this.onCommitShaActions(i)),v.on('[data-action="commit-actions-more"]',"click",i=>this.onCommitMoreActions(i)),v.on('[data-action="pick-commit"]',"click",i=>this.onPickCommit(i)),v.on('[data-action="search-commit"]',"click",i=>this.onSearchCommit(i)),v.on('[data-action="autolink-settings"]',"click",i=>this.onAutolinkSettings(i)),v.on("file-change-item","keydown",(i,r)=>{i.key==="Enter"||i.key===" "?r.open(i.key==="Enter"?{preserveFocus:!1}:void 0):i.key==="ArrowUp"?r.parentElement?.previousElementSibling?.firstElementChild?.focus():i.key==="ArrowDown"&&r.parentElement?.nextElementSibling?.firstElementChild?.focus()}),v.on('[data-action="commit-actions-pin"]',"click",i=>this.onTogglePin(i)),v.on('[data-region="rich-pane"]',"expanded-change",i=>this.onExpandedChange(i.detail))]}onMessageReceived(n){const i=n.data;switch(i.method){case Re.method:pe(Re,i,r=>{if(this.state.selected==null)return;const s={...this.state};r.formattedMessage!=null&&(s.selected.message=r.formattedMessage),s.pullRequest=r.pullRequest,s.autolinkedIssues=r.autolinkedIssues,this.state=s,this.renderRichContent()});break;case De.method:pe(De,i,r=>{r.state,this.state=r.state,this.renderContent()});break}}onExpandedChange(n){this.sendCommand(kt,{autolinksExpanded:n.expanded})}onTogglePin(n){n.preventDefault(),this.sendCommand(wt,{pin:!this.state.pinned})}onAutolinkSettings(n){n.preventDefault(),this.sendCommand($t,void 0)}onSearchCommit(n){this.sendCommand(_t,void 0)}onPickCommit(n){this.sendCommand(yt,void 0)}onOpenFileOnRemote(n){this.sendCommand(mt,n)}onOpenFile(n){this.sendCommand(pt,n)}onCompareFileWithWorking(n){this.sendCommand(gt,n)}onCompareFileWithPrevious(n){this.sendCommand(vt,n)}onFileMoreActions(n){this.sendCommand(ut,n)}onCommitMoreActions(n){if(n.preventDefault(),this.state.selected===void 0){n.stopPropagation();return}this.sendCommand(Oe,{action:"more"})}onCommitShaActions(n){if(n.preventDefault(),this.state.selected===void 0){n.stopPropagation();return}this.sendCommand(Oe,{action:"sha",alt:n.altKey})}renderCommit(n){const i=n.selected!==void 0,r=document.getElementById("empty"),s=document.getElementById("main");return r?.setAttribute("aria-hidden",i?"true":"false"),s?.setAttribute("aria-hidden",i?"false":"true"),i}renderRichContent(){!this.renderCommit(this.state)||(this.renderMessage(this.state),this.renderPullRequestAndAutolinks(this.state))}renderContent(){!this.renderCommit(this.state)||(this.renderPin(this.state),this.renderSha(this.state),this.renderMessage(this.state),this.renderAuthor(this.state),this.renderStats(this.state),this.renderFiles(this.state),this.renderPullRequestAndAutolinks(this.state))}renderPin(n){const i=document.querySelector('[data-action="commit-actions-pin"]');if(i==null)return;const r=n.pinned?"Unpin this Commit":"Pin this Commit";i.setAttribute("aria-label",r),i.setAttribute("title",r),i.classList.toggle("is-active",n.pinned),i.querySelector('[data-region="commit-pin"]')?.setAttribute("icon",n.pinned?"pinned-filled":"pin")}renderSha(n){const i=[...document.querySelectorAll('[data-region="shortsha"]')];i.length!==0&&i.forEach(r=>{r.textContent=n.selected.shortSha})}renderChoices(){const n=document.querySelector('[data-region="choices"]');n!=null&&(n.setAttribute("aria-hidden","true"),n.innerHTML="")}renderStats(n){const i=document.querySelector('[data-region="stats"]');if(i!=null)if(n.selected.stats?.changedFiles!==void 0)if(typeof n.selected.stats.changedFiles=="number")i.innerHTML=`
				<commit-stats added="?" modified="${n.selected.stats.changedFiles}" removed="?"></commit-stats>
			`;else{const{added:r,deleted:s,changed:a}=n.selected.stats.changedFiles;i.innerHTML=`
				<commit-stats added="${r}" modified="${a}" removed="${s}"></commit-stats>
			`}else i.innerHTML=""}renderFiles(n){const i=document.querySelector('[data-region="files"]');if(i!=null)if(n.selected.files?.length){const r=n.selected.isStash?"stash ":"";i.innerHTML=n.selected.files.map(s=>`
						<li class="change-list__item">
							<file-change-item class="commit-details__file" ${r}status="${s.status}" path="${s.path}" repo-path="${s.repoPath}" icon="${s.icon.dark}"></file-change-item>
						</li>
					`).join(""),i.setAttribute("aria-hidden","false")}else i.innerHTML=""}renderAuthor(n){const i=document.querySelector('[data-region="author"]');i!=null&&(n.selected?.isStash===!0?(i.innerHTML=`
				<div class="commit-stashed">
					<span class="commit-stashed__media"><code-icon class="commit-stashed__icon" icon="inbox"></code-icon></span>
					<span class="commit-stashed__date">stashed <formatted-date date=${n.selected.author.date} dateFormat="${n.dateFormat}"></formatted-date></span>
				</div>
			`,i.setAttribute("aria-hidden","false")):n.selected?.author!=null?(i.innerHTML=`
				<commit-identity
					name="${n.selected.author.name}"
					email="${n.selected.author.email}"
					date=${n.selected.author.date}
					dateFormat="${n.dateFormat}"
					avatar="${n.selected.author.avatar}"
					actionLabel="${n.selected.sha===so?"modified":"committed"}"
				></commit-identity>
			`,i.setAttribute("aria-hidden","false")):(i.innerHTML="",i.setAttribute("aria-hidden","true")))}renderTitle(n){const i=document.querySelector('[data-region="commit-title"]');i!=null&&(i.innerHTML=n.selected.shortSha)}renderMessage(n){const i=document.querySelector('[data-region="message"]');if(i==null)return;const[r,...s]=n.selected.message.split(`
`);s.length>1?i.innerHTML=`<strong>${r}</strong><br>${s.join("<br>")}`:i.innerHTML=`<strong>${r}</strong>`}renderPullRequestAndAutolinks(n){const i=document.querySelector('[data-region="rich-pane"]');if(i==null)return;i.expanded=this.state.preferences?.autolinksExpanded??!0;const r=i.querySelector('[data-region="rich-info"]'),s=i.querySelector('[data-region="autolinks"]');n.pullRequest!=null||n.autolinkedIssues?.length?(s?.setAttribute("aria-hidden","false"),r?.setAttribute("aria-hidden","true"),this.renderPullRequest(n),this.renderIssues(n)):(s?.setAttribute("aria-hidden","true"),r?.setAttribute("aria-hidden","false"));const a=i.querySelector('[data-region="autolink-count"]');if(a==null)return;const l=(n.pullRequest!=null?1:0)+(n.autolinkedIssues?.length??0);a.innerHTML=n.includeRichContent?`${l} found`:"\u2026"}renderPullRequest(n){const i=document.querySelector('[data-region="pull-request"]');i!=null&&(n.pullRequest!=null?(i.innerHTML=`
				<issue-pull-request
					name="${n.pullRequest.title}"
					url="${n.pullRequest.url}"
					key="${n.pullRequest.id}"
					status="${n.pullRequest.state}"
					date=${n.pullRequest.date}
					dateFormat="${n.dateFormat}"
				></issue-pull-request>
			`,i.setAttribute("aria-hidden","false")):(i.innerHTML="",i.setAttribute("aria-hidden","true")))}renderIssues(n){const i=document.querySelector('[data-region="issue"]');i!=null&&(n.autolinkedIssues?.length?(i.innerHTML=n.autolinkedIssues.map(r=>`
						<issue-pull-request
							name="${r.title}"
							url="${r.url}"
							key="${r.id}"
							status="${r.closed?"closed":"opened"}"
							date="${r.closed?r.closedDate:r.date}"
						></issue-pull-request>
					`).join(""),i.setAttribute("aria-hidden","false")):(i.innerHTML="",i.setAttribute("aria-hidden","true")))}}function So(c){}new co})();
