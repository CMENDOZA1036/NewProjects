(()=>{"use strict";var Mi={};function Di(s,n){const i=[];let r=0;for(;r<s.length;)i.push(s.slice(r,n+r)),r+=n;return i}function Ii(s){let n=0;for(const i of s)n+=i.length;return n}function Fi(s,n){const i=Object.create(null);for(const r of s){const a=n(r);i[a]=(i[a]??0)+1}return i}function Li(s){return s==null?void 0:Array.isArray(s)?s:[s]}function Ri(s,n){let i=0;return s.reduce((r,a)=>{const c=n(a,i++);return c!=null&&r.push(c),r},[])}function Hi(s,n){let i=0;return s.reduce(async(r,a)=>{const c=await n(a,i++);return c!=null&&r.push(c),r},[])}function Vi(s,n){return s.reduce((i,r)=>{const a=n(r),c=i[a];return c===void 0?i[a]=[r]:c.push(r),i},Object.create(null))}function ji(s,n){return s.reduce((i,r)=>{const a=n(r),c=i.get(a);return c===void 0?i.set(a,[r]):c.push(r),i},new Map)}function qi(s,n,i){return s.reduce((r,a)=>{const c=i(a);if(c!=null){const l=n(a),d=r.get(l);d===void 0?r.set(l,[c]):d.push(c)}return r},new Map)}function zi(s){return typeof s[0]=="string"}function No(s,n,i,r=!1,a){const c={name:"",relativePath:"",children:new Map,descendants:[]};let l=s.reduce((d,h)=>{let f=d,b="";for(const u of n(h)){b=i(b,u),f.children===void 0&&(f.children=new Map);let p=f.children.get(u);p===void 0&&(p={name:u,relativePath:b,parent:f,children:void 0,descendants:void 0},f.children.set(u,p)),f.descendants===void 0&&(f.descendants=[]),f.descendants.push(h),f=p}return f.value=h,d},c);return r&&(l=_t(l,i,!0,a)),l}function _t(s,n,i=!0,r){if(s.children===void 0)return s;const a=[...s.children.values()];for(const c of a)_t(c,n,!1,r);if(!i&&a.length===1){const c=a[0];(c.value===void 0||r?.(c.value))&&(s.name=n(s.name,c.name),s.relativePath=c.relativePath,s.children=c.children,s.descendants=c.descendants,s.value=c.value)}return s}function Ui(s,n,i){return[...s.reduce((a,c)=>{const l=n(c),d=a.get(l);if(d===void 0)a.set(l,c);else{const h=i(d,c);h!==void 0&&a.set(l,h)}return a},new Map).values()]}class $t{constructor(n){this.method=n}}class x extends $t{}class le extends $t{}function Ct(s,n,i){s.method===n.method&&i(n.params)}const Mo=new x("webview/ready"),Wi=new x("command/execute"),Yi=new x("configuration/preview"),Qi=new x("configuration/update"),Zi=new le("configuration/didChange"),Ki=new le("configuration/didPreview"),Xi=new le("webview/didOpenAnchor"),Do=new x("commit/actions"),Io=new x("commit/file/actions"),Fo=new x("commit/file/open"),Lo=new x("commit/file/openOnRemote"),Ro=new x("commit/file/compareWorking"),Ho=new x("commit/file/comparePrevious"),Vo=new x("commit/pickCommit"),jo=new x("commit/searchCommit"),qo=new x("commit/autolinkSettings"),zo=new x("commit/pin"),xt=new x("commit/preferences"),kt=new le("commit/didChange"),Gi=new le("commit/didChange/rich");var k;(s=>{function n(a,c,l,d){let h=!1;if(typeof a=="string"){const b=function(u){const p=u?.target;!p?.matches(a)||l(u,p)};return document.addEventListener(c,b,d??!0),{dispose:()=>{h||(h=!0,document.removeEventListener(c,b,d??!0))}}}const f=function(b){l(b,this)};return a.addEventListener(c,f,d??!1),{dispose:()=>{h||(h=!0,a.removeEventListener(c,f,d??!1))}}}s.on=n;function i(a,c,l){const d=document.getElementById(a);if(c.replaceChildren(d?.content.cloneNode(!0)),c.className=d.className,l?.visible!=null){const h=c.querySelectorAll("[data-visible]");for(const f of h){const b=f.dataset.visible;!b||(l.visible[b]?f.style.display="initial":f.style.display="none")}}if(l?.bindings!=null){const h=c.querySelectorAll("[data-bind]");for(const f of h){const b=f.dataset.bind;if(!b)continue;const u=l.bindings[b];u!=null&&(f.textContent=String(u))}}}s.insertTemplate=i;function r(a){a.replaceChildren(),a.className=""}s.resetSlot=r})(k||(k={}));const Uo=/^(?:(#?)([0-9a-f]{3}|[0-9a-f]{6})|((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\))$/i;function je(s,n){const i=s+n,r=n<0?i<0?0:i:i>255?255:i;return Math.round(r)}function S(s,n){return P(s,-n)}function P(s,n){const i=_e(s);if(i==null)return s;const[r,a,c,l]=i,d=255*n/100;return`rgba(${je(r,d)}, ${je(a,d)}, ${je(c,d)}, ${l})`}function U(s,n){const i=_e(s);if(i==null)return s;const[r,a,c,l]=i;return`rgba(${r}, ${a}, ${c}, ${l*(n/100)})`}function Ji(s,n,i){const r=_e(s),a=_e(n);if(r==null||a==null)return s;const[c,l,d,h]=r,[f,b,u,p]=a;return`rgba(${we(c,f,i)}, ${we(l,b,i)}, ${we(d,u,i)}, ${we(h,p,i)})`}const we=(s,n,i)=>s+(n-s)*i/100;function _e(s){s=s.trim();const n=Uo.exec(s);if(n==null)return null;if(n[1]==="#"){const i=n[2];switch(i.length){case 3:return[parseInt(i[0]+i[0],16),parseInt(i[1]+i[1],16),parseInt(i[2]+i[2],16),1];case 6:return[parseInt(i.substring(0,2),16),parseInt(i.substring(2,4),16),parseInt(i.substring(4,6),16),1]}return null}switch(n[3]){case"rgb":return[parseInt(n[4],10),parseInt(n[5],10),parseInt(n[6],10),1];case"rgba":return[parseInt(n[4],10),parseInt(n[5],10),parseInt(n[6],10),parseFloat(n[7])];default:return null}}function Wo(s){const n=()=>{const r=document.body,a=window.getComputedStyle(r),c=r.classList.contains("vscode-light")||r.classList.contains("vscode-high-contrast-light"),l=r.style;l.setProperty("--font-family",a.getPropertyValue("--vscode-font-family").trim()),l.setProperty("--font-size",a.getPropertyValue("--vscode-font-size").trim()),l.setProperty("--font-weight",a.getPropertyValue("--vscode-font-weight").trim()),l.setProperty("--editor-font-family",a.getPropertyValue("--vscode-editor-font-family").trim()),l.setProperty("--editor-font-size",a.getPropertyValue("--vscode-editor-font-size").trim()),l.setProperty("--editor-font-weight",a.getPropertyValue("--vscode-editor-font-weight").trim());const d=a.getPropertyValue("--vscode-editor-background").trim();let h=d;l.setProperty("--color-background",h),l.setProperty("--color-background--lighten-05",P(h,5)),l.setProperty("--color-background--darken-05",S(h,5)),l.setProperty("--color-background--lighten-075",P(h,7.5)),l.setProperty("--color-background--darken-075",S(h,7.5)),l.setProperty("--color-background--lighten-10",P(h,10)),l.setProperty("--color-background--darken-10",S(h,10)),l.setProperty("--color-background--lighten-15",P(h,15)),l.setProperty("--color-background--darken-15",S(h,15)),l.setProperty("--color-background--lighten-30",P(h,30)),l.setProperty("--color-background--darken-30",S(h,30)),l.setProperty("--color-background--lighten-50",P(h,50)),l.setProperty("--color-background--darken-50",S(h,50)),h=a.getPropertyValue("--vscode-button-background").trim(),l.setProperty("--color-button-background",h),l.setProperty("--color-button-background--darken-30",S(h,30)),l.setProperty("--color-highlight",h),l.setProperty("--color-highlight--75",U(h,75)),l.setProperty("--color-highlight--50",U(h,50)),l.setProperty("--color-highlight--25",U(h,25)),h=a.getPropertyValue("--vscode-button-secondaryBackground").trim(),l.setProperty("--color-button-secondary-background",h),l.setProperty("--color-button-secondary-background--darken-30",S(h,30)),h=a.getPropertyValue("--vscode-button-foreground").trim(),l.setProperty("--color-button-foreground",h);let f=a.getPropertyValue("--vscode-editor-foreground").trim();f||(f=a.getPropertyValue("--vscode-foreground").trim()),l.setProperty("--color-foreground",f),l.setProperty("--color-foreground--85",U(f,85)),l.setProperty("--color-foreground--75",U(f,75)),l.setProperty("--color-foreground--65",U(f,65)),l.setProperty("--color-foreground--50",U(f,50)),h=a.getPropertyValue("--vscode-focusBorder").trim(),l.setProperty("--color-focus-border",h),h=a.getPropertyValue("--vscode-textLink-foreground").trim(),l.setProperty("--color-link-foreground",h),l.setProperty("--color-link-foreground--darken-20",S(h,20)),l.setProperty("--color-link-foreground--lighten-20",P(h,20)),h=a.getPropertyValue("--vscode-sideBar-background").trim(),l.setProperty("--color-view-background",h||d),h=a.getPropertyValue("--vscode-sideBar-foreground").trim(),l.setProperty("--color-view-foreground",h||f),l.setProperty("--color-view-header-foreground",a.getPropertyValue("--vscode-sideBarSectionHeader-foreground").trim()||h||f),h=a.getPropertyValue("--vscode-editorHoverWidget-background").trim(),l.setProperty("--color-hover-background",h),h=a.getPropertyValue("--vscode-editorHoverWidget-border").trim(),l.setProperty("--color-hover-border",h),h=a.getPropertyValue("--vscode-editorHoverWidget-foreground").trim(),l.setProperty("--color-hover-foreground",h),h=a.getPropertyValue("--vscode-editorHoverWidget-statusBarBackground").trim(),l.setProperty("--color-hover-statusBarBackground",h),l.setProperty("--graph-panel-bg",c?S(d,5):P(d,5)),l.setProperty("--graph-theme-opacity-factor",c?"0.5":"1"),h=a.getPropertyValue("--vscode-inputValidation-infoBackground").trim(),l.setProperty("--color-alert-infoHoverBackground",c?S(h,5):P(h,5)),l.setProperty("--color-alert-infoBackground",h),h=a.getPropertyValue("--vscode-inputValidation-warningBackground").trim(),l.setProperty("--color-alert-warningHoverBackground",c?S(h,5):P(h,5)),l.setProperty("--color-alert-warningBackground",h),h=a.getPropertyValue("--vscode-inputValidation-errorBackground").trim(),l.setProperty("--color-alert-errorHoverBackground",c?S(h,5):P(h,5)),l.setProperty("--color-alert-errorBackground",h),h=c?S(d,5):P(d,5),l.setProperty("--color-alert-neutralHoverBackground",c?S(h,5):P(h,5)),l.setProperty("--color-alert-neutralBackground",h),l.setProperty("--color-alert-infoBorder","var(--vscode-inputValidation-infoBorder)"),l.setProperty("--color-alert-warningBorder","var(--vscode-inputValidation-warningBorder)"),l.setProperty("--color-alert-errorBorder","var(--vscode-inputValidation-errorBorder)"),l.setProperty("--color-alert-neutralBorder","var(--vscode-input-foreground)"),l.setProperty("--color-alert-foreground","var(--vscode-input-foreground)"),s?.()},i=new MutationObserver(n);return i.observe(document.body,{attributes:!0,attributeFilter:["class"]}),n(),i}const Yo=2**30;let $e=0;function St(){return $e===Yo?$e=1:$e++,`webview:${$e}`}class Qo{constructor(n){this.appName=n,this.state=window.bootstrap,window.bootstrap=void 0,this.log(`${this.appName}()`),this._api=acquireVsCodeApi(),Wo(this.onThemeUpdated?.bind(this)),requestAnimationFrame(()=>{this.log(`${this.appName}.initializing`);try{this.onInitialize?.(),this.bind(),this.onMessageReceived!=null&&window.addEventListener("message",this.onMessageReceived.bind(this)),this.sendCommand(Mo,void 0),this.onInitialized?.()}finally{setTimeout(()=>{document.body.classList.remove("preload")},500)}})}bind(){this.bindDisposables?.forEach(n=>n.dispose()),this.bindDisposables=this.onBind?.()}log(n,...i){}getState(){return this._api.getState()}sendCommand(n,i){const r=St();return this.log(`${this.appName}.sendCommand(${r}): name=${n.method}`),this.postMessage({id:r,method:n.method,params:i})}sendCommandWithCompletion(n,i,r,a){const c=St();this.log(`${this.appName}.sendCommandWithCompletion(${c}): name=${n.method}`);const l=k.on(window,"message",d=>{Ct(r,d.data,h=>{h.completionId===c&&(l.dispose(),a(h))})});return this.postMessage({id:c,method:n.method,params:i})}setState(n){this.state=n,n!=null&&this._api.setState(n)}postMessage(n){this._api.postMessage(n)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=window,qe=Ce.ShadowRoot&&(Ce.ShadyCSS===void 0||Ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),At=new WeakMap;class Pt{constructor(n,i,r){if(this._$cssResult$=!0,r!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=i}get styleSheet(){let n=this.o;const i=this.t;if(qe&&n===void 0){const r=i!==void 0&&i.length===1;r&&(n=At.get(i)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),r&&At.set(i,n))}return n}toString(){return this.cssText}}const Zo=s=>new Pt(typeof s=="string"?s:s+"",void 0,ze),X=(s,...n)=>{const i=s.length===1?s[0]:n.reduce((r,a,c)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+s[c+1],s[0]);return new Pt(i,s,ze)},Ko=(s,n)=>{qe?s.adoptedStyleSheets=n.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):n.forEach(i=>{const r=document.createElement("style"),a=Ce.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=i.cssText,s.appendChild(r)})},Tt=qe?s=>s:s=>s instanceof CSSStyleSheet?(n=>{let i="";for(const r of n.cssRules)i+=r.cssText;return Zo(i)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ue;const xe=window,Et=xe.trustedTypes,Xo=Et?Et.emptyScript:"",Bt=xe.reactiveElementPolyfillSupport,We={toAttribute(s,n){switch(n){case Boolean:s=s?Xo:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,n){let i=s;switch(n){case Boolean:i=s!==null;break;case Number:i=s===null?null:Number(s);break;case Object:case Array:try{i=JSON.parse(s)}catch{i=null}}return i}},Ot=(s,n)=>n!==s&&(n==n||s==s),Ye={attribute:!0,type:String,converter:We,reflect:!1,hasChanged:Ot};class G extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(n){var i;(i=this.h)!==null&&i!==void 0||(this.h=[]),this.h.push(n)}static get observedAttributes(){this.finalize();const n=[];return this.elementProperties.forEach((i,r)=>{const a=this._$Ep(r,i);a!==void 0&&(this._$Ev.set(a,r),n.push(a))}),n}static createProperty(n,i=Ye){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(n,i),!i.noAccessor&&!this.prototype.hasOwnProperty(n)){const r=typeof n=="symbol"?Symbol():"__"+n,a=this.getPropertyDescriptor(n,r,i);a!==void 0&&Object.defineProperty(this.prototype,n,a)}}static getPropertyDescriptor(n,i,r){return{get(){return this[i]},set(a){const c=this[n];this[i]=a,this.requestUpdate(n,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)||Ye}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const n=Object.getPrototypeOf(this);if(n.finalize(),this.elementProperties=new Map(n.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,r=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const a of r)this.createProperty(a,i[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(n){const i=[];if(Array.isArray(n)){const r=new Set(n.flat(1/0).reverse());for(const a of r)i.unshift(Tt(a))}else n!==void 0&&i.push(Tt(n));return i}static _$Ep(n,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof n=="string"?n.toLowerCase():void 0}u(){var n;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(n=this.constructor.h)===null||n===void 0||n.forEach(i=>i(this))}addController(n){var i,r;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(n),this.renderRoot!==void 0&&this.isConnected&&((r=n.hostConnected)===null||r===void 0||r.call(n))}removeController(n){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(n)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((n,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var n;const i=(n=this.shadowRoot)!==null&&n!==void 0?n:this.attachShadow(this.constructor.shadowRootOptions);return Ko(i,this.constructor.elementStyles),i}connectedCallback(){var n;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$ES)===null||n===void 0||n.forEach(i=>{var r;return(r=i.hostConnected)===null||r===void 0?void 0:r.call(i)})}enableUpdating(n){}disconnectedCallback(){var n;(n=this._$ES)===null||n===void 0||n.forEach(i=>{var r;return(r=i.hostDisconnected)===null||r===void 0?void 0:r.call(i)})}attributeChangedCallback(n,i,r){this._$AK(n,r)}_$EO(n,i,r=Ye){var a;const c=this.constructor._$Ep(n,r);if(c!==void 0&&r.reflect===!0){const l=(((a=r.converter)===null||a===void 0?void 0:a.toAttribute)!==void 0?r.converter:We).toAttribute(i,r.type);this._$El=n,l==null?this.removeAttribute(c):this.setAttribute(c,l),this._$El=null}}_$AK(n,i){var r;const a=this.constructor,c=a._$Ev.get(n);if(c!==void 0&&this._$El!==c){const l=a.getPropertyOptions(c),d=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?l.converter:We;this._$El=c,this[c]=d.fromAttribute(i,l.type),this._$El=null}}requestUpdate(n,i,r){let a=!0;n!==void 0&&(((r=r||this.constructor.getPropertyOptions(n)).hasChanged||Ot)(this[n],i)?(this._$AL.has(n)||this._$AL.set(n,i),r.reflect===!0&&this._$El!==n&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(n,r))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((a,c)=>this[c]=a),this._$Ei=void 0);let i=!1;const r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),(n=this._$ES)===null||n===void 0||n.forEach(a=>{var c;return(c=a.hostUpdate)===null||c===void 0?void 0:c.call(a)}),this.update(r)):this._$Ek()}catch(a){throw i=!1,this._$Ek(),a}i&&this._$AE(r)}willUpdate(n){}_$AE(n){var i;(i=this._$ES)===null||i===void 0||i.forEach(r=>{var a;return(a=r.hostUpdated)===null||a===void 0?void 0:a.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(n){return!0}update(n){this._$EC!==void 0&&(this._$EC.forEach((i,r)=>this._$EO(r,this[r],i)),this._$EC=void 0),this._$Ek()}updated(n){}firstUpdated(n){}}G.finalized=!0,G.elementProperties=new Map,G.elementStyles=[],G.shadowRootOptions={mode:"open"},Bt?.({ReactiveElement:G}),((Ue=xe.reactiveElementVersions)!==null&&Ue!==void 0?Ue:xe.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qe;const ke=window,J=ke.trustedTypes,Nt=J?J.createPolicy("lit-html",{createHTML:s=>s}):void 0,I=`lit$${(Math.random()+"").slice(9)}$`,Ze="?"+I,Go=`<${Ze}>`,ee=document,he=(s="")=>ee.createComment(s),de=s=>s===null||typeof s!="object"&&typeof s!="function",Mt=Array.isArray,Dt=s=>Mt(s)||typeof s?.[Symbol.iterator]=="function",ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,It=/-->/g,Ft=/>/g,W=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,Rt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,Vt=s=>(n,...i)=>({_$litType$:s,strings:n,values:i}),F=Vt(1),es=Vt(2),te=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),jt=new WeakMap,Jo=(s,n,i)=>{var r,a;const c=(r=i?.renderBefore)!==null&&r!==void 0?r:n;let l=c._$litPart$;if(l===void 0){const d=(a=i?.renderBefore)!==null&&a!==void 0?a:null;c._$litPart$=l=new ne(n.insertBefore(he(),d),d,void 0,i??{})}return l._$AI(s),l},oe=ee.createTreeWalker(ee,129,null,!1),qt=(s,n)=>{const i=s.length-1,r=[];let a,c=n===2?"<svg>":"",l=ue;for(let h=0;h<i;h++){const f=s[h];let b,u,p=-1,m=0;for(;m<f.length&&(l.lastIndex=m,u=l.exec(f),u!==null);)m=l.lastIndex,l===ue?u[1]==="!--"?l=It:u[1]!==void 0?l=Ft:u[2]!==void 0?(Ht.test(u[2])&&(a=RegExp("</"+u[2],"g")),l=W):u[3]!==void 0&&(l=W):l===W?u[0]===">"?(l=a??ue,p=-1):u[1]===void 0?p=-2:(p=l.lastIndex-u[2].length,b=u[1],l=u[3]===void 0?W:u[3]==='"'?Rt:Lt):l===Rt||l===Lt?l=W:l===It||l===Ft?l=ue:(l=W,a=void 0);const v=l===W&&s[h+1].startsWith("/>")?" ":"";c+=l===ue?f+Go:p>=0?(r.push(b),f.slice(0,p)+"$lit$"+f.slice(p)+I+v):f+I+(p===-2?(r.push(void 0),h):v)}const d=c+(s[i]||"<?>")+(n===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Nt!==void 0?Nt.createHTML(d):d,r]};class fe{constructor({strings:n,_$litType$:i},r){let a;this.parts=[];let c=0,l=0;const d=n.length-1,h=this.parts,[f,b]=qt(n,i);if(this.el=fe.createElement(f,r),oe.currentNode=this.el.content,i===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(a=oe.nextNode())!==null&&h.length<d;){if(a.nodeType===1){if(a.hasAttributes()){const u=[];for(const p of a.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(I)){const m=b[l++];if(u.push(p),m!==void 0){const v=a.getAttribute(m.toLowerCase()+"$lit$").split(I),w=/([.?@])?(.*)/.exec(m);h.push({type:1,index:c,name:w[2],strings:v,ctor:w[1]==="."?Ut:w[1]==="?"?Wt:w[1]==="@"?Yt:be})}else h.push({type:6,index:c})}for(const p of u)a.removeAttribute(p)}if(Ht.test(a.tagName)){const u=a.textContent.split(I),p=u.length-1;if(p>0){a.textContent=J?J.emptyScript:"";for(let m=0;m<p;m++)a.append(u[m],he()),oe.nextNode(),h.push({type:2,index:++c});a.append(u[p],he())}}}else if(a.nodeType===8)if(a.data===Ze)h.push({type:2,index:c});else{let u=-1;for(;(u=a.data.indexOf(I,u+1))!==-1;)h.push({type:7,index:c}),u+=I.length-1}c++}}static createElement(n,i){const r=ee.createElement("template");return r.innerHTML=n,r}}function Y(s,n,i=s,r){var a,c,l,d;if(n===te)return n;let h=r!==void 0?(a=i._$Cl)===null||a===void 0?void 0:a[r]:i._$Cu;const f=de(n)?void 0:n._$litDirective$;return h?.constructor!==f&&((c=h?._$AO)===null||c===void 0||c.call(h,!1),f===void 0?h=void 0:(h=new f(s),h._$AT(s,i,r)),r!==void 0?((l=(d=i)._$Cl)!==null&&l!==void 0?l:d._$Cl=[])[r]=h:i._$Cu=h),h!==void 0&&(n=Y(s,h._$AS(s,n.values),h,r)),n}class zt{constructor(n,i){this.v=[],this._$AN=void 0,this._$AD=n,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(n){var i;const{el:{content:r},parts:a}=this._$AD,c=((i=n?.creationScope)!==null&&i!==void 0?i:ee).importNode(r,!0);oe.currentNode=c;let l=oe.nextNode(),d=0,h=0,f=a[0];for(;f!==void 0;){if(d===f.index){let b;f.type===2?b=new ne(l,l.nextSibling,this,n):f.type===1?b=new f.ctor(l,f.name,f.strings,this,n):f.type===6&&(b=new Qt(l,this,n)),this.v.push(b),f=a[++h]}d!==f?.index&&(l=oe.nextNode(),d++)}return c}m(n){let i=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(n,r,i),i+=r.strings.length-2):r._$AI(n[i])),i++}}class ne{constructor(n,i,r,a){var c;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=n,this._$AB=i,this._$AM=r,this.options=a,this._$C_=(c=a?.isConnected)===null||c===void 0||c}get _$AU(){var n,i;return(i=(n=this._$AM)===null||n===void 0?void 0:n._$AU)!==null&&i!==void 0?i:this._$C_}get parentNode(){let n=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&n.nodeType===11&&(n=i.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,i=this){n=Y(this,n,i),de(n)?n===$||n==null||n===""?(this._$AH!==$&&this._$AR(),this._$AH=$):n!==this._$AH&&n!==te&&this.$(n):n._$litType$!==void 0?this.T(n):n.nodeType!==void 0?this.k(n):Dt(n)?this.O(n):this.$(n)}S(n,i=this._$AB){return this._$AA.parentNode.insertBefore(n,i)}k(n){this._$AH!==n&&(this._$AR(),this._$AH=this.S(n))}$(n){this._$AH!==$&&de(this._$AH)?this._$AA.nextSibling.data=n:this.k(ee.createTextNode(n)),this._$AH=n}T(n){var i;const{values:r,_$litType$:a}=n,c=typeof a=="number"?this._$AC(n):(a.el===void 0&&(a.el=fe.createElement(a.h,this.options)),a);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===c)this._$AH.m(r);else{const l=new zt(c,this),d=l.p(this.options);l.m(r),this.k(d),this._$AH=l}}_$AC(n){let i=jt.get(n.strings);return i===void 0&&jt.set(n.strings,i=new fe(n)),i}O(n){Mt(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,a=0;for(const c of n)a===i.length?i.push(r=new ne(this.S(he()),this.S(he()),this,this.options)):r=i[a],r._$AI(c),a++;a<i.length&&(this._$AR(r&&r._$AB.nextSibling,a),i.length=a)}_$AR(n=this._$AA.nextSibling,i){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,i);n&&n!==this._$AB;){const a=n.nextSibling;n.remove(),n=a}}setConnected(n){var i;this._$AM===void 0&&(this._$C_=n,(i=this._$AP)===null||i===void 0||i.call(this,n))}}class be{constructor(n,i,r,a,c){this.type=1,this._$AH=$,this._$AN=void 0,this.element=n,this.name=i,this._$AM=a,this.options=c,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(n,i=this,r,a){const c=this.strings;let l=!1;if(c===void 0)n=Y(this,n,i,0),l=!de(n)||n!==this._$AH&&n!==te,l&&(this._$AH=n);else{const d=n;let h,f;for(n=c[0],h=0;h<c.length-1;h++)f=Y(this,d[r+h],i,h),f===te&&(f=this._$AH[h]),l||(l=!de(f)||f!==this._$AH[h]),f===$?n=$:n!==$&&(n+=(f??"")+c[h+1]),this._$AH[h]=f}l&&!a&&this.P(n)}P(n){n===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}}class Ut extends be{constructor(){super(...arguments),this.type=3}P(n){this.element[this.name]=n===$?void 0:n}}const en=J?J.emptyScript:"";class Wt extends be{constructor(){super(...arguments),this.type=4}P(n){n&&n!==$?this.element.setAttribute(this.name,en):this.element.removeAttribute(this.name)}}class Yt extends be{constructor(n,i,r,a,c){super(n,i,r,a,c),this.type=5}_$AI(n,i=this){var r;if((n=(r=Y(this,n,i,0))!==null&&r!==void 0?r:$)===te)return;const a=this._$AH,c=n===$&&a!==$||n.capture!==a.capture||n.once!==a.once||n.passive!==a.passive,l=n!==$&&(a===$||c);c&&this.element.removeEventListener(this.name,this,a),l&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){var i,r;typeof this._$AH=="function"?this._$AH.call((r=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&r!==void 0?r:this.element,n):this._$AH.handleEvent(n)}}class Qt{constructor(n,i,r){this.element=n,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(n){Y(this,n)}}const ts={A:"$lit$",M:I,C:Ze,L:1,R:qt,D:zt,V:Dt,I:Y,H:ne,N:be,U:Wt,B:Yt,F:Ut,W:Qt},Zt=ke.litHtmlPolyfillSupport;Zt?.(fe,ne),((Qe=ke.litHtmlVersions)!==null&&Qe!==void 0?Qe:ke.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ke,Xe;const os=null;class E extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n,i;const r=super.createRenderRoot();return(n=(i=this.renderOptions).renderBefore)!==null&&n!==void 0||(i.renderBefore=r.firstChild),r}update(n){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=Jo(i,this.renderRoot,this.renderOptions)}connectedCallback(){var n;super.connectedCallback(),(n=this._$Do)===null||n===void 0||n.setConnected(!0)}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this._$Do)===null||n===void 0||n.setConnected(!1)}render(){return te}}E.finalized=!0,E._$litElement$=!0,(Ke=globalThis.litElementHydrateSupport)===null||Ke===void 0||Ke.call(globalThis,{LitElement:E});const Kt=globalThis.litElementPolyfillSupport;Kt?.({LitElement:E});const ns={_$AK:(s,n,i)=>{s._$AK(n,i)},_$AL:s=>s._$AL};((Xe=globalThis.litElementVersions)!==null&&Xe!==void 0?Xe:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=s=>n=>typeof n=="function"?((i,r)=>(customElements.define(i,r),r))(s,n):((i,r)=>{const{kind:a,elements:c}=r;return{kind:a,elements:c,finisher(l){customElements.define(i,l)}}})(s,n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tn=(s,n)=>n.kind==="method"&&n.descriptor&&!("value"in n.descriptor)?{...n,finisher(i){i.createProperty(n.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:n.key,initializer(){typeof n.initializer=="function"&&(this[n.key]=n.initializer.call(this))},finisher(i){i.createProperty(n.key,s)}};function g(s){return(n,i)=>i!==void 0?((r,a,c)=>{a.constructor.createProperty(c,r)})(s,n,i):tn(s,n)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ge;const on=((Ge=window.HTMLSlotElement)===null||Ge===void 0?void 0:Ge.prototype.assignedElements)!=null?(s,n)=>s.assignedElements(n):(s,n)=>s.assignedNodes(n).filter(i=>i.nodeType===Node.ELEMENT_NODE);function is(s){const{slot:n,selector:i}=s??{};return o({descriptor:r=>({get(){var a;const c="slot"+(n?`[name=${n}]`:":not([name])"),l=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(c),d=l!=null?on(l,s):[];return i?d.filter(h=>h.matches(i)):d},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ss(s,n,i){let r,a=s;return typeof s=="object"?(a=s.slot,r=s):r={flatten:n},i?t({slot:a,flatten:n,selector:i}):e({descriptor:c=>({get(){var l,d;const h="slot"+(a?`[name=${a}]`:":not([name])"),f=(l=this.renderRoot)===null||l===void 0?void 0:l.querySelector(h);return(d=f?.assignedNodes(r))!==null&&d!==void 0?d:[]},enumerable:!0,configurable:!0})})}var nn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,Xt=(s,n,i,r)=>{for(var a=r>1?void 0:r?sn(n,i):n,c=s.length-1,l;c>=0;c--)(l=s[c])&&(a=(r?l(n,i,a):l(a))||a);return r&&a&&nn(n,i,a),a};let Se=class extends E{constructor(){super(...arguments),this.icon=""}render(){return F``}};Se.styles=X`
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
		:host([icon='graph']):before {
			font-family: 'glicons';
			content: '\\f102';
		}
	`,Xt([g()],Se.prototype,"icon",2),Se=Xt([Q("code-icon")],Se);const Gt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Jt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,rn=[["year",24*60*60*1e3*(365*2-1),24*60*60*1e3*365,"yr"],["month",24*60*60*1e3*365/12,24*60*60*1e3*365/12,"mo"],["week",24*60*60*1e3*7,24*60*60*1e3*7,"wk"],["day",24*60*60*1e3,24*60*60*1e3,"d"],["hour",60*60*1e3,60*60*1e3,"h"],["minute",60*1e3,60*1e3,"m"],["second",1e3,1e3,"s"]];let Z;const pe=new Map;let H,ie,V;function rs(s){typeof s=="string"?s==="system"?H=void 0:H=[s]:H=s??void 0,ie=void 0,V=void 0,pe.clear(),Z=void 0}function as(s,n){const i=new Date(s.getTime());for(const[r,a]of Object.entries(n))if(!!a)switch(r){case"years":i.setFullYear(i.getFullYear()+a);break;case"months":i.setMonth(i.getMonth()+a);break;case"days":i.setDate(i.getDate()+a);break;case"hours":i.setHours(i.getHours()+a);break;case"minutes":i.setMinutes(i.getMinutes()+a);break;case"seconds":i.setSeconds(i.getSeconds()+a);break}return i}function an(s,n){const i=s.getTime()-new Date().getTime();for(const[r,a,c,l]of rn){const d=Math.abs(i);if(d>=a||a===1e3)return n?(Z==null&&(V!=null?Z=V.resolvedOptions().locale:ie!=null?Z=ie.resolvedOptions().locale:(V=new Intl.RelativeTimeFormat(H,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Z=V.resolvedOptions().locale)),Z==="en"||Z?.startsWith("en-")?`${Math.round(d/c)}${l}`:(V==null&&(V=new Intl.RelativeTimeFormat(H,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),V.format(Math.round(i/c),r))):(ie==null&&(ie=new Intl.RelativeTimeFormat(H,{localeMatcher:"best fit",numeric:"auto",style:"long"})),ie.format(Math.round(i/c),r))}return""}function cn(s,n,i,r=!0){n=n??void 0;const a=`${i??""}:${n}`;let c=pe.get(a);if(c==null){const h=ln(n);let f;i==null?f=H:i==="system"?f=void 0:f=[i],c=new Intl.DateTimeFormat(f,h),r&&pe.set(a,c)}if(n==null||Jt.test(n))return c.format(s);function l(h){const f=`${i??""}:time:${h}`;let b=pe.get(f);if(b==null){const u={localeMatcher:"best fit",timeStyle:h};let p;i==null?p=H:i==="system"?p=void 0:p=[i],b=new Intl.DateTimeFormat(p,u),r&&pe.set(f,b)}return b}const d=c.formatToParts(s);return n.replace(Gt,(h,f,b,u,p,m,v,w,D,Po,ce,yt,To,K,Eo)=>{if(f!=null)return f.substring(1,f.length-1);for(const Bo in Eo){const wt=Eo[Bo];if(wt==null)continue;const ye=d.find(Oo=>Oo.type===Bo);return wt==="Do"&&ye?.type==="day"?hn(Number(ye.value)):wt==="a"&&ye?.type==="dayPeriod"?` ${(l("short").formatToParts(s).find(Ni=>Ni.type==="dayPeriod")??ye)?.value??""}`:ye?.value??""}return""})}function cs(s,n,i){const r=(typeof n=="number"?n:n.getTime())-(typeof s=="number"?s:s.getTime());switch(i){case"days":return Math.floor(r/(1e3*60*60*24));case"hours":return Math.floor(r/(1e3*60*60));case"minutes":return Math.floor(r/(1e3*60));case"seconds":return Math.floor(r/1e3);default:return r}}function ln(s){if(s==null)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const n=Jt.exec(s);if(n?.groups!=null){const{dateStyle:r,timeStyle:a}=n.groups;return{localeMatcher:"best fit",dateStyle:r||"full",timeStyle:a||void 0}}const i={localeMatcher:"best fit"};for(const{groups:r}of s.matchAll(Gt))if(r!=null)for(const a in r){const c=r[a];if(c!=null)switch(a){case"year":i.year=c.length===4?"numeric":"2-digit";break;case"month":switch(c.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric";break}break;case"day":c==="DD"?i.day="2-digit":i.day="numeric";break;case"weekday":switch(c.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow";break}break;case"hour":i.hour=c.length===2?"2-digit":"numeric",i.hour12=c==="hh"||c==="h";break;case"minute":i.minute=c.length===2?"2-digit":"numeric";break;case"second":i.second=c.length===2?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=c.length===2?"long":"short";break}}return i}const Je=["th","st","nd","rd"];function hn(s){const n=s%100;return`${s}${Je[(n-20)%10]??Je[n]??Je[0]}`}const dn=()=>({toAttribute:s=>s.getTime(),fromAttribute:(s,n)=>new Date(parseInt(s,10))});var un=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,et=(s,n,i,r)=>{for(var a=r>1?void 0:r?fn(n,i):n,c=s.length-1,l;c>=0;c--)(l=s[c])&&(a=(r?l(n,i,a):l(a))||a);return r&&a&&un(n,i,a),a};let Ae=class extends E{constructor(){super(...arguments),this.format="MMMM Do, YYYY h:mma",this.date=new Date}render(){return F`<time datetime="${this.date}" title="${cn(this.date,this.format??"MMMM Do, YYYY h:mma")}"
			>${an(this.date)}</time
		>`}};et([g()],Ae.prototype,"format",2),et([g({converter:dn(),reflect:!0})],Ae.prototype,"date",2),Ae=et([Q("formatted-date")],Ae);var bn=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,j=(s,n,i,r)=>{for(var a=r>1?void 0:r?pn(n,i):n,c=s.length-1,l;c>=0;c--)(l=s[c])&&(a=(r?l(n,i,a):l(a))||a);return r&&a&&bn(n,i,a),a};let O=class extends E{constructor(){super(...arguments),this.name="",this.email="",this.date="",this.avatar="https://www.gravatar.com/avatar/?s=64&d=robohash",this.dateFormat="MMMM Do, YYYY h:mma",this.committer=!1,this.actionLabel="committed"}render(){const s=this.avatar.replace("s=32","s=64");return F`
			<a class="avatar" href="${this.email?`mailto:${this.email}`:"#"}"
				><img class="thumb" lazy src="${s}" alt="${this.name}"
			/></a>
			<a class="name" href="${this.email?`mailto:${this.email}`:"#"}">${this.name}</a>
			<span class="date"
				>${this.actionLabel} <formatted-date date=${this.date} dateFormat="${this.dateFormat}"></formatted-date
			></span>
		`}};O.styles=X`
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
	`,j([g()],O.prototype,"name",2),j([g()],O.prototype,"email",2),j([g()],O.prototype,"date",2),j([g()],O.prototype,"avatar",2),j([g()],O.prototype,"dateFormat",2),j([g({type:Boolean,reflect:!0})],O.prototype,"committer",2),j([g()],O.prototype,"actionLabel",2),O=j([Q("commit-identity")],O);var mn=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,se=(s,n,i,r)=>{for(var a=r>1?void 0:r?gn(n,i):n,c=s.length-1,l;c>=0;c--)(l=s[c])&&(a=(r?l(n,i,a):l(a))||a);return r&&a&&mn(n,i,a),a};let q=class extends E{constructor(){super(...arguments),this.url="",this.name="",this.date="",this.status="merged",this.key="#1999"}render(){const s=this.status.toLowerCase()==="merged"?"git-merge":this.status.toLowerCase()==="closed"?"pass":"issues";return F`
			<span class="icon"><code-icon icon=${s}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">
				${this.key} ${this.status}
				<formatted-date date="${this.date}"></formatted-date>
			</p>
		`}};q.styles=X`
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
	`,se([g()],q.prototype,"url",2),se([g()],q.prototype,"name",2),se([g()],q.prototype,"date",2),se([g()],q.prototype,"status",2),se([g()],q.prototype,"key",2),q=se([Q("issue-pull-request")],q);var vn=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,eo=(s,n,i,r)=>{for(var a=r>1?void 0:r?yn(n,i):n,c=s.length-1,l;c>=0;c--)(l=s[c])&&(a=(r?l(n,i,a):l(a))||a);return r&&a&&vn(n,i,a),a};let Pe=class extends E{constructor(){super(...arguments),this.lines=1}render(){const s=`--skeleton-lines: ${this.lines};`;return F`<div class="skeleton" style=${s}></div>`}};Pe.styles=X`
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
	`,eo([g({type:Number})],Pe.prototype,"lines",2),Pe=eo([Q("skeleton-loader")],Pe);var wn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,Te=(s,n,i,r)=>{for(var a=r>1?void 0:r?_n(n,i):n,c=s.length-1,l;c>=0;c--)(l=s[c])&&(a=(r?l(n,i,a):l(a))||a);return r&&a&&wn(n,i,a),a};let re=class extends E{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return F`
			<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
				><span class="label">+${this.added}</span></span
			>
			<span class="stat modified" title="${this.modified} modified" aria-label="${this.modified} modified"
				><span class="label">~${this.modified}</span></span
			>
			<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
				><span class="label">-${this.removed}</span></span
			>
		`}};re.styles=X`
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
    `,Te([g({type:Number})],re.prototype,"added",2),Te([g({type:Number})],re.prototype,"modified",2),Te([g({type:Number})],re.prototype,"removed",2),re=Te([Q("commit-stats")],re);var $n=Object.defineProperty,Cn=Object.getOwnPropertyDescriptor,Ee=(s,n,i,r)=>{for(var a=r>1?void 0:r?Cn(n,i):n,c=s.length-1,l;c>=0;c--)(l=s[c])&&(a=(r?l(n,i,a):l(a))||a);return r&&a&&$n(n,i,a),a};let ae=class extends E{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?F`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:F`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return F`
			<header class="header">
				${this.renderTitle()}
				<progress-indicator active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" class="content">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};ae.styles=X`
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
			position: relative;
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
	`,Ee([g({type:Boolean,reflect:!0})],ae.prototype,"collapsable",2),Ee([g({type:Boolean,reflect:!0})],ae.prototype,"expanded",2),Ee([g({type:Boolean,reflect:!0})],ae.prototype,"loading",2),ae=Ee([Q("webview-pane")],ae);const z=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();z.trustedTypes===void 0&&(z.trustedTypes={createPolicy:(s,n)=>n});const to={configurable:!1,enumerable:!1,writable:!1};z.FAST===void 0&&Reflect.defineProperty(z,"FAST",Object.assign({value:Object.create(null)},to));const me=z.FAST;if(me.getById===void 0){const s=Object.create(null);Reflect.defineProperty(me,"getById",Object.assign({value(n,i){let r=s[n];return r===void 0&&(r=i?s[n]=i():null),r}},to))}const tt=Object.freeze([]),ot=z.FAST.getById(1,()=>{const s=[],n=[];function i(){if(n.length)throw n.shift()}function r(l){try{l.call()}catch(d){n.push(d),setTimeout(i,0)}}function a(){let d=0;for(;d<s.length;)if(r(s[d]),d++,d>1024){for(let h=0,f=s.length-d;h<f;h++)s[h]=s[h+d];s.length-=d,d=0}s.length=0}function c(l){s.length<1&&z.requestAnimationFrame(a),s.push(l)}return Object.freeze({enqueue:c,process:a})}),oo=z.trustedTypes.createPolicy("fast-html",{createHTML:s=>s});let nt=oo;const ge=`fast-${Math.random().toString(36).substring(2,8)}`,no=`${ge}{`,it=`}${ge}`,y=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(s){if(nt!==oo)throw new Error("The HTML policy can only be set once.");nt=s},createHTML(s){return nt.createHTML(s)},isMarker(s){return s&&s.nodeType===8&&s.data.startsWith(ge)},extractDirectiveIndexFromMarker(s){return parseInt(s.data.replace(`${ge}:`,""))},createInterpolationPlaceholder(s){return`${no}${s}${it}`},createCustomAttributePlaceholder(s,n){return`${s}="${this.createInterpolationPlaceholder(n)}"`},createBlockPlaceholder(s){return`<!--${ge}:${s}-->`},queueUpdate:ot.enqueue,processUpdates:ot.process,nextUpdate(){return new Promise(ot.enqueue)},setAttribute(s,n,i){i==null?s.removeAttribute(n):s.setAttribute(n,i)},setBooleanAttribute(s,n,i){i?s.setAttribute(n,""):s.removeAttribute(n)},removeChildNodes(s){for(let n=s.firstChild;n!==null;n=s.firstChild)s.removeChild(n)},createTemplateWalker(s){return document.createTreeWalker(s,133,null,!1)}});class Be{constructor(n,i){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=n,this.sub1=i}has(n){return this.spillover===void 0?this.sub1===n||this.sub2===n:this.spillover.indexOf(n)!==-1}subscribe(n){const i=this.spillover;if(i===void 0){if(this.has(n))return;if(this.sub1===void 0){this.sub1=n;return}if(this.sub2===void 0){this.sub2=n;return}this.spillover=[this.sub1,this.sub2,n],this.sub1=void 0,this.sub2=void 0}else i.indexOf(n)===-1&&i.push(n)}unsubscribe(n){const i=this.spillover;if(i===void 0)this.sub1===n?this.sub1=void 0:this.sub2===n&&(this.sub2=void 0);else{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}notify(n){const i=this.spillover,r=this.source;if(i===void 0){const a=this.sub1,c=this.sub2;a!==void 0&&a.handleChange(r,n),c!==void 0&&c.handleChange(r,n)}else for(let a=0,c=i.length;a<c;++a)i[a].handleChange(r,n)}}class io{constructor(n){this.subscribers={},this.sourceSubscribers=null,this.source=n}notify(n){var i;const r=this.subscribers[n];r!==void 0&&r.notify(n),(i=this.sourceSubscribers)===null||i===void 0||i.notify(n)}subscribe(n,i){var r;if(i){let a=this.subscribers[i];a===void 0&&(this.subscribers[i]=a=new Be(this.source)),a.subscribe(n)}else this.sourceSubscribers=(r=this.sourceSubscribers)!==null&&r!==void 0?r:new Be(this.source),this.sourceSubscribers.subscribe(n)}unsubscribe(n,i){var r;if(i){const a=this.subscribers[i];a!==void 0&&a.unsubscribe(n)}else(r=this.sourceSubscribers)===null||r===void 0||r.unsubscribe(n)}}const C=me.getById(2,()=>{const s=/(:|&&|\|\||if)/,n=new WeakMap,i=new WeakMap,r=y.queueUpdate;let a,c=b=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function l(b){let u=b.$fastController||n.get(b);return u===void 0&&(Array.isArray(b)?u=c(b):n.set(b,u=new io(b))),u}function d(b){let u=i.get(b);if(u===void 0){let p=Reflect.getPrototypeOf(b);for(;u===void 0&&p!==null;)u=i.get(p),p=Reflect.getPrototypeOf(p);u===void 0?u=[]:u=u.slice(0),i.set(b,u)}return u}class h{constructor(u){this.name=u,this.field=`_${u}`,this.callback=`${u}Changed`}getValue(u){return a!==void 0&&a.watch(u,this.name),u[this.field]}setValue(u,p){const m=this.field,v=u[m];if(v!==p){u[m]=p;const w=u[this.callback];typeof w=="function"&&w.call(u,v,p),l(u).notify(this.name)}}}class f extends Be{constructor(u,p,m=!1){super(u,p),this.binding=u,this.isVolatileBinding=m,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(u,p){this.needsRefresh&&this.last!==null&&this.disconnect();const m=a;a=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const v=this.binding(u,p);return a=m,v}disconnect(){if(this.last!==null){let u=this.first;for(;u!==void 0;)u.notifier.unsubscribe(this,u.propertyName),u=u.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(u,p){const m=this.last,v=l(u),w=m===null?this.first:{};if(w.propertySource=u,w.propertyName=p,w.notifier=v,v.subscribe(this,p),m!==null){if(!this.needsRefresh){let D;a=void 0,D=m.propertySource[m.propertyName],a=this,u===D&&(this.needsRefresh=!0)}m.next=w}this.last=w}handleChange(){this.needsQueue&&(this.needsQueue=!1,r(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let u=this.first;return{next:()=>{const p=u;return p===void 0?{value:void 0,done:!0}:(u=u.next,{value:p,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(b){c=b},getNotifier:l,track(b,u){a!==void 0&&a.watch(b,u)},trackVolatile(){a!==void 0&&(a.needsRefresh=!0)},notify(b,u){l(b).notify(u)},defineProperty(b,u){typeof u=="string"&&(u=new h(u)),d(b).push(u),Reflect.defineProperty(b,u.name,{enumerable:!0,get:function(){return u.getValue(this)},set:function(p){u.setValue(this,p)}})},getAccessors:d,binding(b,u,p=this.isVolatileBinding(b)){return new f(b,u,p)},isVolatileBinding(b){return s.test(b.toString())}})});function xn(s,n){C.defineProperty(s,n)}function Oe(s,n,i){return Object.assign({},i,{get:function(){return C.trackVolatile(),i.get.apply(this)}})}const so=me.getById(3,()=>{let s=null;return{get(){return s},set(n){s=n}}});class ve{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return so.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(n){so.set(n)}}C.defineProperty(ve.prototype,"index"),C.defineProperty(ve.prototype,"length");const Ne=Object.seal(new ve);class Me{constructor(){this.targetIndex=0}}class ro extends Me{constructor(){super(...arguments),this.createPlaceholder=y.createInterpolationPlaceholder}}class ao extends Me{constructor(n,i,r){super(),this.name=n,this.behavior=i,this.options=r}createPlaceholder(n){return y.createCustomAttributePlaceholder(this.name,n)}createBehavior(n){return new this.behavior(n,this.options)}}function kn(s,n){this.source=s,this.context=n,this.bindingObserver===null&&(this.bindingObserver=C.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(s,n))}function Sn(s,n){this.source=s,this.context=n,this.target.addEventListener(this.targetName,this)}function An(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Pn(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const s=this.target.$fastView;s!==void 0&&s.isComposed&&(s.unbind(),s.needsBindOnly=!0)}function Tn(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function En(s){y.setAttribute(this.target,this.targetName,s)}function Bn(s){y.setBooleanAttribute(this.target,this.targetName,s)}function On(s){if(s==null&&(s=""),s.create){this.target.textContent="";let n=this.target.$fastView;n===void 0?n=s.create():this.target.$fastTemplate!==s&&(n.isComposed&&(n.remove(),n.unbind()),n=s.create()),n.isComposed?n.needsBindOnly&&(n.needsBindOnly=!1,n.bind(this.source,this.context)):(n.isComposed=!0,n.bind(this.source,this.context),n.insertBefore(this.target),this.target.$fastView=n,this.target.$fastTemplate=s)}else{const n=this.target.$fastView;n!==void 0&&n.isComposed&&(n.isComposed=!1,n.remove(),n.needsBindOnly?n.needsBindOnly=!1:n.unbind()),this.target.textContent=s}}function Nn(s){this.target[this.targetName]=s}function Mn(s){const n=this.classVersions||Object.create(null),i=this.target;let r=this.version||0;if(s!=null&&s.length){const a=s.split(/\s+/);for(let c=0,l=a.length;c<l;++c){const d=a[c];d!==""&&(n[d]=r,i.classList.add(d))}}if(this.classVersions=n,this.version=r+1,r!==0){r-=1;for(const a in n)n[a]===r&&i.classList.remove(a)}}class st extends ro{constructor(n){super(),this.binding=n,this.bind=kn,this.unbind=An,this.updateTarget=En,this.isBindingVolatile=C.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(n){if(this.originalTargetName=n,n!==void 0)switch(n[0]){case":":if(this.cleanedTargetName=n.substr(1),this.updateTarget=Nn,this.cleanedTargetName==="innerHTML"){const i=this.binding;this.binding=(r,a)=>y.createHTML(i(r,a))}break;case"?":this.cleanedTargetName=n.substr(1),this.updateTarget=Bn;break;case"@":this.cleanedTargetName=n.substr(1),this.bind=Sn,this.unbind=Tn;break;default:this.cleanedTargetName=n,n==="class"&&(this.updateTarget=Mn);break}}targetAtContent(){this.updateTarget=On,this.unbind=Pn}createBehavior(n){return new Dn(n,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Dn{constructor(n,i,r,a,c,l,d){this.source=null,this.context=null,this.bindingObserver=null,this.target=n,this.binding=i,this.isBindingVolatile=r,this.bind=a,this.unbind=c,this.updateTarget=l,this.targetName=d}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(n){ve.setEvent(n);const i=this.binding(this.source,this.context);ve.setEvent(null),i!==!0&&n.preventDefault()}}let rt=null;class at{addFactory(n){n.targetIndex=this.targetIndex,this.behaviorFactories.push(n)}captureContentBinding(n){n.targetAtContent(),this.addFactory(n)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){rt=this}static borrow(n){const i=rt||new at;return i.directives=n,i.reset(),rt=null,i}}function In(s){if(s.length===1)return s[0];let n;const i=s.length,r=s.map(l=>typeof l=="string"?()=>l:(n=l.targetName||n,l.binding)),a=(l,d)=>{let h="";for(let f=0;f<i;++f)h+=r[f](l,d);return h},c=new st(a);return c.targetName=n,c}const Fn=it.length;function co(s,n){const i=n.split(no);if(i.length===1)return null;const r=[];for(let a=0,c=i.length;a<c;++a){const l=i[a],d=l.indexOf(it);let h;if(d===-1)h=l;else{const f=parseInt(l.substring(0,d));r.push(s.directives[f]),h=l.substring(d+Fn)}h!==""&&r.push(h)}return r}function lo(s,n,i=!1){const r=n.attributes;for(let a=0,c=r.length;a<c;++a){const l=r[a],d=l.value,h=co(s,d);let f=null;h===null?i&&(f=new st(()=>d),f.targetName=l.name):f=In(h),f!==null&&(n.removeAttributeNode(l),a--,c--,s.addFactory(f))}}function Ln(s,n,i){const r=co(s,n.textContent);if(r!==null){let a=n;for(let c=0,l=r.length;c<l;++c){const d=r[c],h=c===0?n:a.parentNode.insertBefore(document.createTextNode(""),a.nextSibling);typeof d=="string"?h.textContent=d:(h.textContent=" ",s.captureContentBinding(d)),a=h,s.targetIndex++,h!==n&&i.nextNode()}s.targetIndex--}}function Rn(s,n){const i=s.content;document.adoptNode(i);const r=at.borrow(n);lo(r,s,!0);const a=r.behaviorFactories;r.reset();const c=y.createTemplateWalker(i);let l;for(;l=c.nextNode();)switch(r.targetIndex++,l.nodeType){case 1:lo(r,l);break;case 3:Ln(r,l,c);break;case 8:y.isMarker(l)&&r.addFactory(n[y.extractDirectiveIndexFromMarker(l)])}let d=0;(y.isMarker(i.firstChild)||i.childNodes.length===1&&n.length)&&(i.insertBefore(document.createComment(""),i.firstChild),d=-1);const h=r.behaviorFactories;return r.release(),{fragment:i,viewBehaviorFactories:h,hostBehaviorFactories:a,targetOffset:d}}const ct=document.createRange();class ho{constructor(n,i){this.fragment=n,this.behaviors=i,this.source=null,this.context=null,this.firstChild=n.firstChild,this.lastChild=n.lastChild}appendTo(n){n.appendChild(this.fragment)}insertBefore(n){if(this.fragment.hasChildNodes())n.parentNode.insertBefore(this.fragment,n);else{const i=n.parentNode,r=this.lastChild;let a=this.firstChild,c;for(;a!==r;)c=a.nextSibling,i.insertBefore(a,n),a=c;i.insertBefore(r,n)}}remove(){const n=this.fragment,i=this.lastChild;let r=this.firstChild,a;for(;r!==i;)a=r.nextSibling,n.appendChild(r),r=a;n.appendChild(i)}dispose(){const n=this.firstChild.parentNode,i=this.lastChild;let r=this.firstChild,a;for(;r!==i;)a=r.nextSibling,n.removeChild(r),r=a;n.removeChild(i);const c=this.behaviors,l=this.source;for(let d=0,h=c.length;d<h;++d)c[d].unbind(l)}bind(n,i){const r=this.behaviors;if(this.source!==n)if(this.source!==null){const a=this.source;this.source=n,this.context=i;for(let c=0,l=r.length;c<l;++c){const d=r[c];d.unbind(a),d.bind(n,i)}}else{this.source=n,this.context=i;for(let a=0,c=r.length;a<c;++a)r[a].bind(n,i)}}unbind(){if(this.source===null)return;const n=this.behaviors,i=this.source;for(let r=0,a=n.length;r<a;++r)n[r].unbind(i);this.source=null}static disposeContiguousBatch(n){if(n.length!==0){ct.setStartBefore(n[0].firstChild),ct.setEndAfter(n[n.length-1].lastChild),ct.deleteContents();for(let i=0,r=n.length;i<r;++i){const a=n[i],c=a.behaviors,l=a.source;for(let d=0,h=c.length;d<h;++d)c[d].unbind(l)}}}}class uo{constructor(n,i){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=n,this.directives=i}create(n){if(this.fragment===null){let f;const b=this.html;if(typeof b=="string"){f=document.createElement("template"),f.innerHTML=y.createHTML(b);const p=f.content.firstElementChild;p!==null&&p.tagName==="TEMPLATE"&&(f=p)}else f=b;const u=Rn(f,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const i=this.fragment.cloneNode(!0),r=this.viewBehaviorFactories,a=new Array(this.behaviorCount),c=y.createTemplateWalker(i);let l=0,d=this.targetOffset,h=c.nextNode();for(let f=r.length;l<f;++l){const b=r[l],u=b.targetIndex;for(;h!==null;)if(d===u){a[l]=b.createBehavior(h);break}else h=c.nextNode(),d++}if(this.hasHostBehaviors){const f=this.hostBehaviorFactories;for(let b=0,u=f.length;b<u;++b,++l)a[l]=f[b].createBehavior(n)}return new ho(i,a)}render(n,i,r){typeof i=="string"&&(i=document.getElementById(i)),r===void 0&&(r=i);const a=this.create(r);return a.bind(n,Ne),a.appendTo(i),a}}const Hn=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function L(s,...n){const i=[];let r="";for(let a=0,c=s.length-1;a<c;++a){const l=s[a];let d=n[a];if(r+=l,d instanceof uo){const h=d;d=()=>h}if(typeof d=="function"&&(d=new st(d)),d instanceof ro){const h=Hn.exec(l);h!==null&&(d.targetName=h[2])}d instanceof Me?(r+=d.createPlaceholder(i.length),i.push(d)):r+=d}return r+=s[s.length-1],new uo(r,i)}class Vn{createCSS(){return""}createBehavior(){}}class N{constructor(){this.targets=new WeakSet}addStylesTo(n){this.targets.add(n)}removeStylesFrom(n){this.targets.delete(n)}isAttachedTo(n){return this.targets.has(n)}withBehaviors(...n){return this.behaviors=this.behaviors===null?n:this.behaviors.concat(n),this}}N.create=(()=>{if(y.supportsAdoptedStyleSheets){const s=new Map;return n=>new jn(n,s)}return s=>new Un(s)})();function lt(s){return s.map(n=>n instanceof N?lt(n.styles):[n]).reduce((n,i)=>n.concat(i),[])}function fo(s){return s.map(n=>n instanceof N?n.behaviors:null).reduce((n,i)=>i===null?n:(n===null&&(n=[]),n.concat(i)),null)}class jn extends N{constructor(n,i){super(),this.styles=n,this.styleSheetCache=i,this._styleSheets=void 0,this.behaviors=fo(n)}get styleSheets(){if(this._styleSheets===void 0){const n=this.styles,i=this.styleSheetCache;this._styleSheets=lt(n).map(r=>{if(r instanceof CSSStyleSheet)return r;let a=i.get(r);return a===void 0&&(a=new CSSStyleSheet,a.replaceSync(r),i.set(r,a)),a})}return this._styleSheets}addStylesTo(n){n.adoptedStyleSheets=[...n.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(n)}removeStylesFrom(n){const i=this.styleSheets;n.adoptedStyleSheets=n.adoptedStyleSheets.filter(r=>i.indexOf(r)===-1),super.removeStylesFrom(n)}}let qn=0;function zn(){return`fast-style-class-${++qn}`}class Un extends N{constructor(n){super(),this.styles=n,this.behaviors=null,this.behaviors=fo(n),this.styleSheets=lt(n),this.styleClass=zn()}addStylesTo(n){const i=this.styleSheets,r=this.styleClass;n=this.normalizeTarget(n);for(let a=0;a<i.length;a++){const c=document.createElement("style");c.innerHTML=i[a],c.className=r,n.append(c)}super.addStylesTo(n)}removeStylesFrom(n){n=this.normalizeTarget(n);const i=n.querySelectorAll(`.${this.styleClass}`);for(let r=0,a=i.length;r<a;++r)n.removeChild(i[r]);super.removeStylesFrom(n)}isAttachedTo(n){return super.isAttachedTo(this.normalizeTarget(n))}normalizeTarget(n){return n===document?document.body:n}}function bo(s,n){const i=[];let r="";const a=[];for(let c=0,l=s.length-1;c<l;++c){r+=s[c];let d=n[c];if(d instanceof Vn){const h=d.createBehavior();d=d.createCSS(),h&&a.push(h)}d instanceof N||d instanceof CSSStyleSheet?(r.trim()!==""&&(i.push(r),r=""),i.push(d)):r+=d}return r+=s[s.length-1],r.trim()!==""&&i.push(r),{styles:i,behaviors:a}}function De(s,...n){const{styles:i,behaviors:r}=bo(s,n),a=N.create(i);return r.length&&a.withBehaviors(...r),a}class Wn extends null{constructor(n,i){super(),this.behaviors=i,this.css="";const r=n.reduce((a,c)=>(typeof c=="string"?this.css+=c:a.push(c),a),[]);r.length&&(this.styles=ElementStyles.create(r))}createBehavior(){return this}createCSS(){return this.css}bind(n){this.styles&&n.$fastController.addStyles(this.styles),this.behaviors.length&&n.$fastController.addBehaviors(this.behaviors)}unbind(n){this.styles&&n.$fastController.removeStyles(this.styles),this.behaviors.length&&n.$fastController.removeBehaviors(this.behaviors)}}function ls(s,...n){const{styles:i,behaviors:r}=bo(s,n);return new Wn(i,r)}const Yn={toView(s){return s?"true":"false"},fromView(s){return!(s==null||s==="false"||s===!1||s===0)}},hs={toView(s){if(s==null)return null;const n=s*1;return isNaN(n)?null:n.toString()},fromView(s){if(s==null)return null;const n=s*1;return isNaN(n)?null:n}};class Ie{constructor(n,i,r=i.toLowerCase(),a="reflect",c){this.guards=new Set,this.Owner=n,this.name=i,this.attribute=r,this.mode=a,this.converter=c,this.fieldName=`_${i}`,this.callbackName=`${i}Changed`,this.hasCallback=this.callbackName in n.prototype,a==="boolean"&&c===void 0&&(this.converter=Yn)}setValue(n,i){const r=n[this.fieldName],a=this.converter;a!==void 0&&(i=a.fromView(i)),r!==i&&(n[this.fieldName]=i,this.tryReflectToAttribute(n),this.hasCallback&&n[this.callbackName](r,i),n.$fastController.notify(this.name))}getValue(n){return C.track(n,this.name),n[this.fieldName]}onAttributeChangedCallback(n,i){this.guards.has(n)||(this.guards.add(n),this.setValue(n,i),this.guards.delete(n))}tryReflectToAttribute(n){const i=this.mode,r=this.guards;r.has(n)||i==="fromView"||y.queueUpdate(()=>{r.add(n);const a=n[this.fieldName];switch(i){case"reflect":const c=this.converter;y.setAttribute(n,this.attribute,c!==void 0?c.toView(a):a);break;case"boolean":y.setBooleanAttribute(n,this.attribute,a);break}r.delete(n)})}static collect(n,...i){const r=[];i.push(n.attributes);for(let a=0,c=i.length;a<c;++a){const l=i[a];if(l!==void 0)for(let d=0,h=l.length;d<h;++d){const f=l[d];typeof f=="string"?r.push(new Ie(n,f)):r.push(new Ie(n,f.property,f.attribute,f.mode,f.converter))}}return r}}function _(s,n){let i;function r(a,c){arguments.length>1&&(i.property=c),(a.constructor.attributes||(a.constructor.attributes=[])).push(i)}if(arguments.length>1){i={},r(s,n);return}return i=s===void 0?{}:s,r}const po={mode:"open"},mo={},ht=me.getById(4,()=>{const s=new Map;return Object.freeze({register(n){return s.has(n.type)?!1:(s.set(n.type,n),!0)},getByType(n){return s.get(n)}})});class Fe{constructor(n,i=n.definition){typeof i=="string"&&(i={name:i}),this.type=n,this.name=i.name,this.template=i.template;const r=Ie.collect(n,i.attributes),a=new Array(r.length),c={},l={};for(let d=0,h=r.length;d<h;++d){const f=r[d];a[d]=f.attribute,c[f.name]=f,l[f.attribute]=f}this.attributes=r,this.observedAttributes=a,this.propertyLookup=c,this.attributeLookup=l,this.shadowOptions=i.shadowOptions===void 0?po:i.shadowOptions===null?void 0:Object.assign(Object.assign({},po),i.shadowOptions),this.elementOptions=i.elementOptions===void 0?mo:Object.assign(Object.assign({},mo),i.elementOptions),this.styles=i.styles===void 0?void 0:Array.isArray(i.styles)?N.create(i.styles):i.styles instanceof N?i.styles:N.create([i.styles])}get isDefined(){return!!ht.getByType(this.type)}define(n=customElements){const i=this.type;if(ht.register(this)){const r=this.attributes,a=i.prototype;for(let c=0,l=r.length;c<l;++c)C.defineProperty(a,r[c]);Reflect.defineProperty(i,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return n.get(this.name)||n.define(this.name,i,this.elementOptions),this}}Fe.forType=ht.getByType;const go=new WeakMap,Qn={bubbles:!0,composed:!0,cancelable:!0};function dt(s){return s.shadowRoot||go.get(s)||null}class ut extends io{constructor(n,i){super(n),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=n,this.definition=i;const r=i.shadowOptions;if(r!==void 0){const c=n.attachShadow(r);r.mode==="closed"&&go.set(n,c)}const a=C.getAccessors(n);if(a.length>0){const c=this.boundObservables=Object.create(null);for(let l=0,d=a.length;l<d;++l){const h=a[l].name,f=n[h];f!==void 0&&(delete n[h],c[h]=f)}}}get isConnected(){return C.track(this,"isConnected"),this._isConnected}setIsConnected(n){this._isConnected=n,C.notify(this,"isConnected")}get template(){return this._template}set template(n){this._template!==n&&(this._template=n,this.needsInitialization||this.renderTemplate(n))}get styles(){return this._styles}set styles(n){this._styles!==n&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=n,!this.needsInitialization&&n!==null&&this.addStyles(n))}addStyles(n){const i=dt(this.element)||this.element.getRootNode();if(n instanceof HTMLStyleElement)i.append(n);else if(!n.isAttachedTo(i)){const r=n.behaviors;n.addStylesTo(i),r!==null&&this.addBehaviors(r)}}removeStyles(n){const i=dt(this.element)||this.element.getRootNode();if(n instanceof HTMLStyleElement)i.removeChild(n);else if(n.isAttachedTo(i)){const r=n.behaviors;n.removeStylesFrom(i),r!==null&&this.removeBehaviors(r)}}addBehaviors(n){const i=this.behaviors||(this.behaviors=new Map),r=n.length,a=[];for(let c=0;c<r;++c){const l=n[c];i.has(l)?i.set(l,i.get(l)+1):(i.set(l,1),a.push(l))}if(this._isConnected){const c=this.element;for(let l=0;l<a.length;++l)a[l].bind(c,Ne)}}removeBehaviors(n,i=!1){const r=this.behaviors;if(r===null)return;const a=n.length,c=[];for(let l=0;l<a;++l){const d=n[l];if(r.has(d)){const h=r.get(d)-1;h===0||i?r.delete(d)&&c.push(d):r.set(d,h)}}if(this._isConnected){const l=this.element;for(let d=0;d<c.length;++d)c[d].unbind(l)}}onConnectedCallback(){if(this._isConnected)return;const n=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(n,Ne);const i=this.behaviors;if(i!==null)for(const[r]of i)r.bind(n,Ne);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const n=this.view;n!==null&&n.unbind();const i=this.behaviors;if(i!==null){const r=this.element;for(const[a]of i)a.unbind(r)}}onAttributeChangedCallback(n,i,r){const a=this.definition.attributeLookup[n];a!==void 0&&a.onAttributeChangedCallback(this.element,r)}emit(n,i,r){return this._isConnected?this.element.dispatchEvent(new CustomEvent(n,Object.assign(Object.assign({detail:i},Qn),r))):!1}finishInitialization(){const n=this.element,i=this.boundObservables;if(i!==null){const a=Object.keys(i);for(let c=0,l=a.length;c<l;++c){const d=a[c];n[d]=i[d]}this.boundObservables=null}const r=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():r.template&&(this._template=r.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():r.styles&&(this._styles=r.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(n){const i=this.element,r=dt(i)||i;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||y.removeChildNodes(r),n&&(this.view=n.render(i,r,i))}static forCustomElement(n){const i=n.$fastController;if(i!==void 0)return i;const r=Fe.forType(n.constructor);if(r===void 0)throw new Error("Missing FASTElement definition.");return n.$fastController=new ut(n,r)}}function vo(s){return class extends s{constructor(){super(),ut.forCustomElement(this)}$emit(n,i,r){return this.$fastController.emit(n,i,r)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(n,i,r){this.$fastController.onAttributeChangedCallback(n,i,r)}}}const Le=Object.assign(vo(HTMLElement),{from(s){return vo(s)},define(s,n){return new Fe(s,n).define().type}});function Re(s){return function(n){new Fe(n,s).define()}}var Zn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,ft=(s,n,i,r)=>{for(var a=r>1?void 0:r?Kn(n,i):n,c=s.length-1,l;c>=0;c--)(l=s[c])&&(a=(r?l(n,i,a):l(a))||a);return r&&a&&Zn(n,i,a),a};const Xn=L`
	<template class="${s=>s.mode}${s=>s.active?" active":""}" role="progressbar">
		<div class="progress-bar"></div>
	</template>
`,Gn=De`
	* {
		box-sizing: border-box;
	}

	:host {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 5;
		height: 2px;
		width: 100%;
		overflow: hidden;
	}

	.progress-bar {
		background-color: var(--vscode-progressBar-background);
		display: none;
		position: absolute;
		left: 0;
		width: 2%;
		height: 2px;
	}

	:host(.active) .progress-bar {
		display: inherit;
	}

	:host(.discrete) .progress-bar {
		left: 0;
		transition: width 0.1s linear;
	}

	:host(.discrete.done) .progress-bar {
		width: 100%;
	}

	:host(.infinite) .progress-bar {
		animation-name: progress;
		animation-duration: 4s;
		animation-iteration-count: infinite;
		animation-timing-function: steps(100);
		transform: translateZ(0);
	}

	@keyframes progress {
		0% {
			transform: translateX(0) scaleX(1);
		}

		50% {
			transform: translateX(2500%) scaleX(3);
		}

		to {
			transform: translateX(4900%) scaleX(1);
		}
	}
`;let He=class extends Le{constructor(){super(...arguments),this.mode="infinite",this.active=!1}};ft([_({mode:"reflect"})],He.prototype,"mode",2),ft([_({mode:"boolean"})],He.prototype,"active",2),He=ft([Re({name:"progress-indicator",template:Xn,styles:Gn})],He);function ds(s){return s?function(n,i,r){return n.nodeType===1&&n.matches(s)}:function(n,i,r){return n.nodeType===1}}class Jn{constructor(n,i){this.target=n,this.options=i,this.source=null}bind(n){const i=this.options.property;this.shouldUpdate=C.getAccessors(n).some(r=>r.name===i),this.source=n,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(tt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let n=this.getNodes();return this.options.filter!==void 0&&(n=n.filter(this.options.filter)),n}updateTarget(n){this.source[this.options.property]=n}}class ei extends Jn{constructor(n,i){super(n,i)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function ti(s){return typeof s=="string"&&(s={property:s}),new ao("fast-slotted",ei,s)}var oi=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,yo=(s,n,i,r)=>{for(var a=r>1?void 0:r?ni(n,i):n,c=s.length-1,l;c>=0;c--)(l=s[c])&&(a=(r?l(n,i,a):l(a))||a);return r&&a&&oi(n,i,a),a};const ii=L`
	<template role="tree">
		<slot ${ti("itemNodes")}></slot>
	</template>
`,si=De`
	::slotted(*) {
		box-sizing: inherit;
	}
`;let bt=class extends Le{itemNodesChanged(s,n){if(this.itemNodesDisposer?.(),!n?.length)return;const i=n?.filter(r=>r.nodeType===1).map(r=>{const a=this.handleKeydown.bind(this),c=this.handleSelected.bind(this);return r.addEventListener("keydown",a,!1),r.addEventListener("selected",c,!1),{dispose:function(){r?.removeEventListener("keydown",a,!1),r?.addEventListener("selected",c,!1)}}});this.itemNodesDisposer=()=>{i?.forEach(({dispose:r})=>r())}}handleSelected(s){if(!s.target||!s.detail.branch)return;const n=s.target,i=n.getAttribute("level"),r=l=>parseInt(l.getAttribute("level")??"0",10),a=l=>{const d=r(l);let h=l.previousElementSibling;for(;h;){if(r(h)<d)return h;h=h.previousElementSibling}};let c=n.nextElementSibling;for(;c&&c.getAttribute("level")!==i;){const l=a(c);c.setAttribute("parentexpanded",l?.expanded===!1?"false":"true"),c.setAttribute("expanded",s.detail.expanded?"true":"false"),c=c.nextElementSibling}}handleKeydown(s){if(!s.target)return;const n=s.target;s.key==="Enter"||s.key===" "?n.select(s.key==="Enter"?{preserveFocus:!1}:void 0):s.key==="ArrowUp"?n.previousElementSibling?.focus():s.key==="ArrowDown"&&n.nextElementSibling?.focus()}};yo([xn],bt.prototype,"itemNodes",2),bt=yo([Re({name:"list-container",template:ii,styles:si})],bt);function B(s,n,i){return{index:s,removed:n,addedCount:i}}const wo=0,_o=1,pt=2,mt=3;function ri(s,n,i,r,a,c){const l=c-a+1,d=i-n+1,h=new Array(l);let f,b;for(let u=0;u<l;++u)h[u]=new Array(d),h[u][0]=u;for(let u=0;u<d;++u)h[0][u]=u;for(let u=1;u<l;++u)for(let p=1;p<d;++p)s[n+p-1]===r[a+u-1]?h[u][p]=h[u-1][p-1]:(f=h[u-1][p]+1,b=h[u][p-1]+1,h[u][p]=f<b?f:b);return h}function ai(s){let n=s.length-1,i=s[0].length-1,r=s[n][i];const a=[];for(;n>0||i>0;){if(n===0){a.push(pt),i--;continue}if(i===0){a.push(mt),n--;continue}const c=s[n-1][i-1],l=s[n-1][i],d=s[n][i-1];let h;l<d?h=l<c?l:c:h=d<c?d:c,h===c?(c===r?a.push(wo):(a.push(_o),r=c),n--,i--):h===l?(a.push(mt),n--,r=l):(a.push(pt),i--,r=d)}return a.reverse(),a}function ci(s,n,i){for(let r=0;r<i;++r)if(s[r]!==n[r])return r;return i}function li(s,n,i){let r=s.length,a=n.length,c=0;for(;c<i&&s[--r]===n[--a];)c++;return c}function hi(s,n,i,r){return n<i||r<s?-1:n===i||r===s?0:s<i?n<r?n-i:r-i:r<n?r-s:n-s}function $o(s,n,i,r,a,c){let l=0,d=0;const h=Math.min(i-n,c-a);if(n===0&&a===0&&(l=ci(s,r,h)),i===s.length&&c===r.length&&(d=li(s,r,h-l)),n+=l,a+=l,i-=d,c-=d,i-n===0&&c-a===0)return tt;if(n===i){const v=B(n,[],0);for(;a<c;)v.removed.push(r[a++]);return[v]}else if(a===c)return[B(n,[],i-n)];const f=ai(ri(s,n,i,r,a,c)),b=[];let u,p=n,m=a;for(let v=0;v<f.length;++v)switch(f[v]){case wo:u!==void 0&&(b.push(u),u=void 0),p++,m++;break;case _o:u===void 0&&(u=B(p,[],0)),u.addedCount++,p++,u.removed.push(r[m]),m++;break;case pt:u===void 0&&(u=B(p,[],0)),u.addedCount++,p++;break;case mt:u===void 0&&(u=B(p,[],0)),u.removed.push(r[m]),m++;break}return u!==void 0&&b.push(u),b}const Co=Array.prototype.push;function di(s,n,i,r){const a=B(n,i,r);let c=!1,l=0;for(let d=0;d<s.length;d++){const h=s[d];if(h.index+=l,c)continue;const f=hi(a.index,a.index+a.removed.length,h.index,h.index+h.addedCount);if(f>=0){s.splice(d,1),d--,l-=h.addedCount-h.removed.length,a.addedCount+=h.addedCount-f;const b=a.removed.length+h.removed.length-f;if(!a.addedCount&&!b)c=!0;else{let u=h.removed;if(a.index<h.index){const p=a.removed.slice(0,h.index-a.index);Co.apply(p,u),u=p}if(a.index+a.removed.length>h.index+h.addedCount){const p=a.removed.slice(h.index+h.addedCount-a.index);Co.apply(u,p)}a.removed=u,h.index<a.index&&(a.index=h.index)}}else if(a.index<h.index){c=!0,s.splice(d,0,a),d++;const b=a.addedCount-a.removed.length;h.index+=b,l+=b}}c||s.push(a)}function ui(s){const n=[];for(let i=0,r=s.length;i<r;i++){const a=s[i];di(n,a.index,a.removed,a.addedCount)}return n}function fi(s,n){let i=[];const r=ui(n);for(let a=0,c=r.length;a<c;++a){const l=r[a];if(l.addedCount===1&&l.removed.length===1){l.removed[0]!==s[l.index]&&i.push(l);continue}i=i.concat($o(s,l.index,l.index+l.addedCount,l.removed,0,l.removed.length))}return i}let xo=!1;function gt(s,n){let i=s.index;const r=n.length;return i>r?i=r-s.addedCount:i<0&&(i=r+s.removed.length+i-s.addedCount),i<0&&(i=0),s.index=i,s}class bi extends Be{constructor(n){super(n),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(n,"$fastController",{value:this,enumerable:!1})}subscribe(n){this.flush(),super.subscribe(n)}addSplice(n){this.splices===void 0?this.splices=[n]:this.splices.push(n),this.needsQueue&&(this.needsQueue=!1,y.queueUpdate(this))}reset(n){this.oldCollection=n,this.needsQueue&&(this.needsQueue=!1,y.queueUpdate(this))}flush(){const n=this.splices,i=this.oldCollection;if(n===void 0&&i===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const r=i===void 0?fi(this.source,n):$o(this.source,0,this.source.length,i,0,i.length);this.notify(r)}}function pi(){if(xo)return;xo=!0,C.setArrayObserverFactory(h=>new bi(h));const s=Array.prototype;if(s.$fastPatch)return;Reflect.defineProperty(s,"$fastPatch",{value:1,enumerable:!1});const n=s.pop,i=s.push,r=s.reverse,a=s.shift,c=s.sort,l=s.splice,d=s.unshift;s.pop=function(){const h=this.length>0,f=n.apply(this,arguments),b=this.$fastController;return b!==void 0&&h&&b.addSplice(B(this.length,[f],0)),f},s.push=function(){const h=i.apply(this,arguments),f=this.$fastController;return f!==void 0&&f.addSplice(gt(B(this.length-arguments.length,[],arguments.length),this)),h},s.reverse=function(){let h;const f=this.$fastController;f!==void 0&&(f.flush(),h=this.slice());const b=r.apply(this,arguments);return f!==void 0&&f.reset(h),b},s.shift=function(){const h=this.length>0,f=a.apply(this,arguments),b=this.$fastController;return b!==void 0&&h&&b.addSplice(B(0,[f],0)),f},s.sort=function(){let h;const f=this.$fastController;f!==void 0&&(f.flush(),h=this.slice());const b=c.apply(this,arguments);return f!==void 0&&f.reset(h),b},s.splice=function(){const h=l.apply(this,arguments),f=this.$fastController;return f!==void 0&&f.addSplice(gt(B(+arguments[0],h,arguments.length>2?arguments.length-2:0),this)),h},s.unshift=function(){const h=d.apply(this,arguments),f=this.$fastController;return f!==void 0&&f.addSplice(gt(B(0,[],arguments.length),this)),h}}const ko=Object.freeze({positioning:!1,recycle:!0});function mi(s,n,i,r){s.bind(n[i],r)}function gi(s,n,i,r){const a=Object.create(r);a.index=i,a.length=n.length,s.bind(n[i],a)}class vi{constructor(n,i,r,a,c,l){this.location=n,this.itemsBinding=i,this.templateBinding=a,this.options=l,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=mi,this.itemsBindingObserver=C.binding(i,this,r),this.templateBindingObserver=C.binding(a,this,c),l.positioning&&(this.bindView=gi)}bind(n,i){this.source=n,this.originalContext=i,this.childContext=Object.create(i),this.childContext.parent=n,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(n,this.originalContext),this.template=this.templateBindingObserver.observe(n,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(n,i){n===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):n===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(i)}observeItems(n=!1){if(!this.items){this.items=tt;return}const i=this.itemsObserver,r=this.itemsObserver=C.getNotifier(this.items),a=i!==r;a&&i!==null&&i.unsubscribe(this),(a||n)&&r.subscribe(this)}updateViews(n){const i=this.childContext,r=this.views,a=this.bindView,c=this.items,l=this.template,d=this.options.recycle,h=[];let f=0,b=0;for(let u=0,p=n.length;u<p;++u){const m=n[u],v=m.removed;let w=0,D=m.index;const Po=D+m.addedCount,ce=r.splice(m.index,v.length);for(b=h.length+ce.length;D<Po;++D){const yt=r[D],To=yt?yt.firstChild:this.location;let K;d&&b>0?(w<=b&&ce.length>0?(K=ce[w],w++):(K=h[f],f++),b--):K=l.create(),r.splice(D,0,K),a(K,c,D,i),K.insertBefore(To)}ce[w]&&h.push(...ce.slice(w))}for(let u=f,p=h.length;u<p;++u)h[u].dispose();if(this.options.positioning)for(let u=0,p=r.length;u<p;++u){const m=r[u].context;m.length=p,m.index=u}}refreshAllViews(n=!1){const i=this.items,r=this.childContext,a=this.template,c=this.location,l=this.bindView;let d=i.length,h=this.views,f=h.length;if((d===0||n||!this.options.recycle)&&(ho.disposeContiguousBatch(h),f=0),f===0){this.views=h=new Array(d);for(let b=0;b<d;++b){const u=a.create();l(u,i,b,r),h[b]=u,u.insertBefore(c)}}else{let b=0;for(;b<d;++b)if(b<f){const p=h[b];l(p,i,b,r)}else{const p=a.create();l(p,i,b,r),h.push(p),p.insertBefore(c)}const u=h.splice(b,f-b);for(b=0,d=u.length;b<d;++b)u[b].dispose()}}unbindAllViews(){const n=this.views;for(let i=0,r=n.length;i<r;++i)n[i].unbind()}}class yi extends Me{constructor(n,i,r){super(),this.itemsBinding=n,this.templateBinding=i,this.options=r,this.createPlaceholder=y.createBlockPlaceholder,pi(),this.isItemsBindingVolatile=C.isVolatileBinding(n),this.isTemplateBindingVolatile=C.isVolatileBinding(i)}createBehavior(n){return new vi(n,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function wi(s,n,i=ko){const r=typeof n=="function"?n:()=>n;return new yi(s,r,Object.assign(Object.assign({},ko),i))}function Ve(s,n){const i=typeof n=="function"?n:()=>n;return(r,a)=>s(r,a)?i(r,a):null}const So={toView:function(s){return s.toString()},fromView:function(s){return parseInt(s,10)}};var _i=Object.defineProperty,$i=Object.getOwnPropertyDescriptor,R=(s,n,i,r)=>{for(var a=r>1?void 0:r?$i(n,i):n,c=s.length-1,l;c>=0;c--)(l=s[c])&&(a=(r?l(n,i,a):l(a))||a);return r&&a&&_i(n,i,a),a};const Ci=L`
	<template
		role="treeitem"
		aria-expanded="${s=>s.expanded===!0?"true":"false"}"
		aria-hidden="${s=>s.isHidden}"
	>
		<button id="item" class="item" type="button" @click="${(s,n)=>s.onItemClick(n.event)}">
			${wi(s=>s.treeLeaves,L`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`)}
			${Ve(s=>s.branch,L`<span class="node"
					><code-icon
						class="branch"
						icon="${s=>s.expanded?"chevron-down":"chevron-right"}"
					></code-icon
				></span>`)}
			<span class="icon"><slot name="icon"></slot></span>
			<span class="text">
				<span class="main"><slot></slot></span>
				<span class="description"><slot name="description"></slot></span>
			</span>
		</button>
		<nav class="actions"><slot name="actions"></slot></nav>
	</template>
`,xi=De`
	:host {
		box-sizing: border-box;
		padding-left: var(--gitlens-gutter-width);
		padding-right: var(--gitlens-scrollbar-gutter-width);
		padding-top: 0.1rem;
		padding-bottom: 0.1rem;
		line-height: 2.2rem;
		height: 2.2rem;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		font-size: var(--vscode-font-size);
		color: var(--vscode-sideBar-foreground);
	}

	:host(:hover) {
		color: var(--vscode-list-hoverForeground);
		background-color: var(--vscode-list-hoverBackground);
	}

	:host(:focus-within) {
		outline: 1px solid var(--vscode-list-focusOutline);
		outline-offset: -0.1rem;
		color: var(--vscode-list-activeSelectionForeground);
		background-color: var(--vscode-list-activeSelectionBackground);
	}

	:host([aria-hidden='true']) {
		display: none;
	}

	* {
		box-sizing: border-box;
	}

	.item {
		appearance: none;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 0.6rem;
		width: 100%;
		padding: 0;
		text-decoration: none;
		color: inherit;
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
	}

	.icon {
		display: inline-block;
		width: 1.6rem;
		text-align: center;
	}

	slot[name='icon']::slotted(*) {
		width: 1.6rem;
		aspect-ratio: 1;
		vertical-align: text-bottom;
	}

	.node {
		display: inline-block;
		width: 1.6rem;
		text-align: center;
	}

	.node--connector {
		position: relative;
	}
	.node--connector::before {
		content: '';
		position: absolute;
		height: 2.2rem;
		border-left: 1px solid var(--vscode-list-deemphasizedForeground);
		top: 50%;
		transform: translate(-50%, -50%);
		left: 0.8rem;
		width: 0.1rem;
		opacity: 0.5;
	}

	.text {
		overflow: hidden;
		white-space: nowrap;
		text-align: left;
		text-overflow: ellipsis;
	}

	.description {
		opacity: 0.7;
		margin-left: 0.3rem;
	}

	.actions {
		flex: none;
		user-select: none;
		color: var(--vscode-icon-foreground);
	}

	:host(:focus-within) .actions {
		color: var(--vscode-list-activeSelectionIconForeground);
	}

	:host(:not(:hover):not(:focus-within)) .actions {
		display: none;
	}

	slot[name='actions']::slotted(*) {
		display: flex;
		align-items: center;
	}
`;let M=class extends Le{constructor(){super(...arguments),this.tree=!1,this.branch=!1,this.expanded=!0,this.parentexpanded=!0,this.level=1,this.active=!1}get treeLeaves(){const s=this.level-1;return s<1?[]:Array.from({length:s},(n,i)=>i+1)}get isHidden(){return this.parentexpanded===!1||!this.branch&&!this.expanded?"true":"false"}onItemClick(s){this.select()}select(s,n=!1){this.expanded=!this.expanded,this.active=!0,n||window.requestAnimationFrame(()=>{this.$emit("selected",{tree:this.tree,branch:this.branch,expanded:this.expanded,level:this.level})})}focus(s){this.shadowRoot?.getElementById("item")?.focus(s)}};R([_({mode:"boolean"})],M.prototype,"tree",2),R([_({mode:"boolean"})],M.prototype,"branch",2),R([_({mode:"boolean"})],M.prototype,"expanded",2),R([_({mode:"boolean"})],M.prototype,"parentexpanded",2),R([_({converter:So})],M.prototype,"level",2),R([_({mode:"boolean"})],M.prototype,"active",2),R([Oe],M.prototype,"treeLeaves",1),R([Oe],M.prototype,"isHidden",1),M=R([Re({name:"list-item",template:Ci,styles:xi})],M);class ki{constructor(n,i){this.target=n,this.propertyName=i}bind(n){n[this.propertyName]=this.target}unbind(){}}function Si(s){return new ao("fast-ref",ki,s)}var Ai=Object.defineProperty,Pi=Object.getOwnPropertyDescriptor,T=(s,n,i,r)=>{for(var a=r>1?void 0:r?Pi(n,i):n,c=s.length-1,l;c>=0;c--)(l=s[c])&&(a=(r?l(n,i,a):l(a))||a);return r&&a&&Ai(n,i,a),a};const Ti=L`
	<list-item
		${Si("base")}
		tree="${s=>s.tree}"
		level="${s=>s.level}"
		active="${s=>s.active}"
		expanded="${s=>s.expanded}"
		parentexpanded="${s=>s.parentexpanded}"
		@selected="${(s,n)=>s.onComparePrevious(n.event)}"
	>
		<img slot="icon" src="${s=>s.icon}" title="${s=>s.statusName}" alt="${s=>s.statusName}" />
		${s=>s.fileName}
		${Ve(s=>!s.tree,L`<span slot="description">${s=>s.filePath}</span>`)}
		<span slot="actions">
			<a
				class="change-list__action"
				@click="${(s,n)=>s.onOpenFile(n.event)}"
				href="#"
				title="Open file"
				aria-label="Open file"
				><code-icon icon="go-to-file"></code-icon
			></a>
			${Ve(s=>!s.uncommitted,L`
					<a
						class="change-list__action"
						@click="${(s,n)=>s.onCompareWorking(n.event)}"
						href="#"
						title="Open Changes with Working File"
						aria-label="Open Changes with Working File"
						><code-icon icon="git-compare"></code-icon
					></a>
					${Ve(s=>!s.stash,L`<a
								class="change-list__action"
								@click="${(s,n)=>s.onOpenFileOnRemote(n.event)}"
								href="#"
								title="Open on remote"
								aria-label="Open on remote"
								><code-icon icon="globe"></code-icon></a
							><a
								class="change-list__action"
								@click="${(s,n)=>s.onMoreActions(n.event)}"
								href="#"
								title="Show more actions"
								aria-label="Show more actions"
								><code-icon icon="ellipsis"></code-icon
							></a>`)}
				`)}
		</span>
	</list-item>
`,Ei=De`
	.change-list__action {
		box-sizing: border-box;
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
`,Bi={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};let A=class extends Le{constructor(){super(...arguments),this.tree=!1,this.expanded=!0,this.parentexpanded=!0,this.level=1,this.active=!1,this.stash=!1,this.uncommitted=!1,this.icon="",this.path="",this.repo="",this.status=""}select(s){this.base?.select(s)}focus(s){this.base?.focus(s)}get isHidden(){return this.base?.isHidden??"false"}get pathIndex(){return this.path.lastIndexOf("/")}get fileName(){return this.pathIndex>-1?this.path.substring(this.pathIndex+1):this.path}get filePath(){return!this.tree&&this.pathIndex>-1?this.path.substring(0,this.pathIndex):""}get statusName(){return this.status!==""?Bi[this.status]:""}getEventDetail(s){return{path:this.path,repoPath:this.repo,showOptions:s}}onOpenFile(s){s.preventDefault(),this.$emit("file-open",this.getEventDetail())}onOpenFileOnRemote(s){s.preventDefault(),this.$emit("file-open-on-remote",this.getEventDetail())}onCompareWorking(s){s.preventDefault(),this.$emit("file-compare-working",this.getEventDetail())}onComparePrevious(s,n){s?.preventDefault(),this.$emit("file-compare-previous",this.getEventDetail(n))}onMoreActions(s){s.preventDefault(),this.$emit("file-more-actions",this.getEventDetail())}};T([_({mode:"boolean"})],A.prototype,"tree",2),T([_({mode:"boolean"})],A.prototype,"expanded",2),T([_({mode:"boolean"})],A.prototype,"parentexpanded",2),T([_({converter:So})],A.prototype,"level",2),T([_({mode:"boolean"})],A.prototype,"active",2),T([_({mode:"boolean"})],A.prototype,"stash",2),T([_({mode:"boolean"})],A.prototype,"uncommitted",2),T([_],A.prototype,"icon",2),T([_],A.prototype,"path",2),T([_],A.prototype,"repo",2),T([_],A.prototype,"status",2),T([Oe],A.prototype,"fileName",1),T([Oe],A.prototype,"filePath",1),A=T([Re({name:"file-change-list-item",template:Ti,styles:Ei})],A);const vt="0000000000000000000000000000000000000000";class Oi extends Qo{constructor(){super("CommitDetailsApp"),this.log("CommitDetailsApp",this.state)}onInitialize(){this.log("CommitDetailsApp.onInitialize",this.state),this.renderContent()}onBind(){return[k.on("file-change-list-item","file-open-on-remote",i=>this.onOpenFileOnRemote(i.detail)),k.on("file-change-list-item","file-open",i=>this.onOpenFile(i.detail)),k.on("file-change-list-item","file-compare-working",i=>this.onCompareFileWithWorking(i.detail)),k.on("file-change-list-item","file-compare-previous",i=>this.onCompareFileWithPrevious(i.detail)),k.on("file-change-list-item","file-more-actions",i=>this.onFileMoreActions(i.detail)),k.on('[data-action="commit-actions"]',"click",i=>this.onCommitActions(i)),k.on('[data-action="pick-commit"]',"click",i=>this.onPickCommit(i)),k.on('[data-action="search-commit"]',"click",i=>this.onSearchCommit(i)),k.on('[data-action="autolink-settings"]',"click",i=>this.onAutolinkSettings(i)),k.on("[data-switch-value]","click",i=>this.onTreeSetting(i)),k.on('[data-action="pin"]',"click",i=>this.onTogglePin(i)),k.on('[data-region="rich-pane"]',"expanded-change",i=>this.onExpandedChange(i.detail))]}onMessageReceived(n){const i=n.data;switch(i.method){case kt.method:Ct(kt,i,r=>{r.state,this.state=r.state,this.renderContent()});break}}onTreeSetting(n){const i=n.target?.getAttribute("data-switch-value")==="list-tree";i!==this.state.preferences?.filesAsTree&&(this.state.preferences={...this.state.preferences,filesAsTree:i},this.renderFiles(this.state),this.sendCommand(xt,{filesAsTree:i}))}onExpandedChange(n){this.sendCommand(xt,{autolinksExpanded:n.expanded})}onTogglePin(n){n.preventDefault(),this.sendCommand(zo,{pin:!this.state.pinned})}onAutolinkSettings(n){n.preventDefault(),this.sendCommand(qo,void 0)}onSearchCommit(n){this.sendCommand(jo,void 0)}onPickCommit(n){this.sendCommand(Vo,void 0)}onOpenFileOnRemote(n){this.sendCommand(Lo,n)}onOpenFile(n){this.sendCommand(Fo,n)}onCompareFileWithWorking(n){this.sendCommand(Ro,n)}onCompareFileWithPrevious(n){this.sendCommand(Ho,n)}onFileMoreActions(n){this.sendCommand(Io,n)}onCommitActions(n){if(n.preventDefault(),this.state.selected===void 0){n.stopPropagation();return}const i=n.target?.getAttribute("data-action-type");i!=null&&this.sendCommand(Do,{action:i,alt:n.altKey})}renderCommit(n){const i=n.selected!==void 0,r=document.getElementById("empty"),a=document.getElementById("main");return r?.setAttribute("aria-hidden",i?"true":"false"),a?.setAttribute("aria-hidden",i?"false":"true"),i}renderRichContent(){!this.renderCommit(this.state)||(this.renderMessage(this.state),this.renderPullRequestAndAutolinks(this.state))}renderContent(){!this.renderCommit(this.state)||(this.renderActions(this.state),this.renderPin(this.state),this.renderSha(this.state),this.renderMessage(this.state),this.renderAuthor(this.state),this.renderStats(this.state),this.renderFiles(this.state),this.renderPullRequestAndAutolinks(this.state))}renderActions(n){const i=n.selected?.sha===vt?"true":"false";[...document.querySelectorAll('[data-action-type="graph"],[data-action-type="more"]')].forEach(r=>r.setAttribute("aria-hidden",i))}renderPin(n){const i=document.querySelector('[data-action="pin"]');if(i==null)return;const r=n.pinned?"Unpin this Commit":"Pin this Commit";i.setAttribute("aria-label",r),i.setAttribute("title",r),i.classList.toggle("is-active",n.pinned),i.querySelector('[data-region="commit-pin"]')?.setAttribute("icon",n.pinned?"pinned-filled":"pin")}renderSha(n){const i=[...document.querySelectorAll('[data-region="shortsha"]')];i.length!==0&&i.forEach(r=>{r.textContent=n.selected.shortSha})}renderChoices(){const n=document.querySelector('[data-region="choices"]');n!=null&&(n.setAttribute("aria-hidden","true"),n.innerHTML="")}renderStats(n){const i=document.querySelector('[data-region="stats"]');if(i!=null)if(n.selected.stats?.changedFiles!==void 0)if(typeof n.selected.stats.changedFiles=="number")i.innerHTML=`
				<commit-stats added="?" modified="${n.selected.stats.changedFiles}" removed="?"></commit-stats>
			`;else{const{added:r,deleted:a,changed:c}=n.selected.stats.changedFiles;i.innerHTML=`
				<commit-stats added="${r}" modified="${c}" removed="${a}"></commit-stats>
			`}else i.innerHTML=""}renderFiles(n){const i=document.querySelector('[data-region="files"]');if(i!=null)if(n.selected.files?.length){const r=n.preferences?.filesAsTree===!0;document.querySelector('[data-switch-value="list"]')?.classList.toggle("is-selected",!r),document.querySelector('[data-switch-value="list-tree"]')?.classList.toggle("is-selected",r);const a=n.selected.isStash?"stash ":n.selected.sha===vt?"uncommitted ":"";if(r){const c=No(n.selected.files,d=>d.path.split("/"),(...d)=>d.join("/"),!0),l=Ao(c);i.innerHTML=`
					<li class="change-list__item">
						<list-container>
							${l.map(({level:d,item:h})=>h.name===""?"":h.value==null?`
											<list-item level="${d}" tree branch>
												<code-icon slot="icon" icon="folder" title="Directory" aria-label="Directory"></code-icon>
												${h.name}
											</list-item>
										`:`
										<file-change-list-item
											tree
											level="${d}"
											${a}
											path="${h.value.path}"
											icon="${h.value.icon.dark}"
											status="${h.value.status}"
										></file-change-list-item>
									`).join("")}
						</list-container>
					</li>`}else i.innerHTML=`
					<li class="change-list__item">
						<list-container>
							${n.selected.files.map(c=>`
											<file-change-list-item
												${a}
												path="${c.path}"
												icon="${c.icon.dark}"
												status="${c.status}"
											></file-change-list-item>
										`).join("")}
						</list-container>
					</li>`;i.setAttribute("aria-hidden","false")}else i.innerHTML=""}renderAuthor(n){const i=document.querySelector('[data-region="author"]');i!=null&&(n.selected?.isStash===!0?(i.innerHTML=`
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
					actionLabel="${n.selected.sha===vt?"modified":"committed"}"
				></commit-identity>
			`,i.setAttribute("aria-hidden","false")):(i.innerHTML="",i.setAttribute("aria-hidden","true")))}renderTitle(n){const i=document.querySelector('[data-region="commit-title"]');i!=null&&(i.innerHTML=n.selected.shortSha)}renderMessage(n){const i=document.querySelector('[data-region="message"]');if(i==null)return;const[r,...a]=n.selected.message.split(`
`);a.length>1?i.innerHTML=`<strong>${r}</strong><br>${a.join("<br>")}`:i.innerHTML=`<strong>${r}</strong>`}renderPullRequestAndAutolinks(n){const i=document.querySelector('[data-region="rich-pane"]');if(i==null)return;i.expanded=this.state.preferences?.autolinksExpanded??!0,i.loading=!n.includeRichContent;const r=i.querySelector('[data-region="rich-info"]'),a=i.querySelector('[data-region="autolinks"]');n.pullRequest!=null||n.autolinkedIssues?.length?(a?.setAttribute("aria-hidden","false"),r?.setAttribute("aria-hidden","true"),this.renderPullRequest(n),this.renderIssues(n)):(a?.setAttribute("aria-hidden","true"),r?.setAttribute("aria-hidden","false"));const c=i.querySelector('[data-region="autolink-count"]');if(c==null)return;const l=(n.pullRequest!=null?1:0)+(n.autolinkedIssues?.length??0);c.innerHTML=n.includeRichContent?`${l} found`:"\u2026"}renderPullRequest(n){const i=document.querySelector('[data-region="pull-request"]');i!=null&&(n.pullRequest!=null?(i.innerHTML=`
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
					`).join(""),i.setAttribute("aria-hidden","false")):(i.innerHTML="",i.setAttribute("aria-hidden","true")))}}function us(s){}function Ao(s,n=0){const i=[];if(s==null)return i;if(i.push({level:n,item:s}),s.children!=null){const r=Array.from(s.children.values());r.sort((a,c)=>!a.value||!c.value?(a.value?1:-1)-(c.value?1:-1):a.relativePath<c.relativePath?-1:a.relativePath>c.relativePath?1:0),r.forEach(a=>{i.push(...Ao(a,n+1))})}return i}new Oi})();
