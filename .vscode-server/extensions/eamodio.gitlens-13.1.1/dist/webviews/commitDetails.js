(()=>{"use strict";var Es={},Ko=(s=>(s.File="file",s.Window="window",s))(Ko||{}),Zo=(s=>(s.Issue="Issue",s.PullRequest="PullRequest",s))(Zo||{}),Xo=(s=>(s.Gutter="gutter",s.Line="line",s.Scrollbar="overview",s))(Xo||{}),Jo=(s=>(s.DateDesc="date:desc",s.DateAsc="date:asc",s.NameAsc="name:asc",s.NameDesc="name:desc",s))(Jo||{}),en=(s=>(s.Gutter="gutter",s.Line="line",s.Scrollbar="overview",s))(en||{}),tn=(s=>(s.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",s.CopyRemoteFileUrl="gitlens.copyRemoteFileUrl",s.DiffWithPrevious="gitlens.diffWithPrevious",s.OpenCommitOnRemote="gitlens.openCommitOnRemote",s.OpenFileOnRemote="gitlens.openFileOnRemote",s.RevealCommitInView="gitlens.revealCommitInView",s.ShowCommitsInView="gitlens.showCommitsInView",s.ShowQuickCommitDetails="gitlens.showQuickCommitDetails",s.ShowQuickCommitFileDetails="gitlens.showQuickCommitFileDetails",s.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",s.ShowQuickFileHistory="gitlens.showQuickFileHistory",s.ToggleFileBlame="gitlens.toggleFileBlame",s.ToggleFileChanges="gitlens.toggleFileChanges",s.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",s.ToggleFileHeatmap="gitlens.toggleFileHeatmap",s))(tn||{}),on=(s=>(s.Document="document",s.Containers="containers",s.Blocks="blocks",s))(on||{}),nn=(s=>(s.CountDesc="count:desc",s.CountAsc="count:asc",s.DateDesc="date:desc",s.DateAsc="date:asc",s.NameAsc="name:asc",s.NameDesc="name:desc",s))(nn||{}),sn=(s=>(s.AzureDevOps="AzureDevOps",s.Bitbucket="Bitbucket",s.BitbucketServer="BitbucketServer",s.Custom="Custom",s.Gerrit="Gerrit",s.GoogleSource="GoogleSource",s.Gitea="Gitea",s.GitHub="GitHub",s.GitLab="GitLab",s))(sn||{}),rn=(s=>(s.Authored="authored",s.Committed="committed",s))(rn||{}),an=(s=>(s.Absolute="absolute",s.Relative="relative",s))(an||{}),cn=(s=>(s.Blame="blame",s.Changes="changes",s.Heatmap="heatmap",s))(cn||{}),ln=(s=>(s.Name="name",s.Usage="usage",s))(ln||{}),hn=(s=>(s.Faces="wavatar",s.Geometric="identicon",s.Monster="monsterid",s.MysteryPerson="mp",s.Retro="retro",s.Robot="robohash",s))(hn||{}),dn=(s=>(s.Gutter="gutter",s.Line="line",s.Scrollbar="overview",s))(dn||{}),un=(s=>(s.Alternate="alternate",s.Chorded="chorded",s.None="none",s))(un||{}),fn=(s=>(s.Silent="silent",s.Errors="errors",s.Verbose="verbose",s.Debug="debug",s))(fn||{}),bn=(s=>(s.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",s.CopyRemoteFileUrl="gitlens.copyRemoteFileUrl",s.DiffWithPrevious="gitlens.diffWithPrevious",s.DiffWithWorking="gitlens.diffWithWorking",s.OpenCommitOnRemote="gitlens.openCommitOnRemote",s.OpenFileOnRemote="gitlens.openFileOnRemote",s.RevealCommitInView="gitlens.revealCommitInView",s.ShowCommitsInView="gitlens.showCommitsInView",s.ShowQuickCommitDetails="gitlens.showQuickCommitDetails",s.ShowQuickCommitFileDetails="gitlens.showQuickCommitFileDetails",s.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",s.ShowQuickFileHistory="gitlens.showQuickFileHistory",s.ToggleCodeLens="gitlens.toggleCodeLens",s.ToggleFileBlame="gitlens.toggleFileBlame",s.ToggleFileChanges="gitlens.toggleFileChanges",s.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",s.ToggleFileHeatmap="gitlens.toggleFileHeatmap",s))(bn||{}),pn=(s=>(s.DateDesc="date:desc",s.DateAsc="date:asc",s.NameAsc="name:asc",s.NameDesc="name:desc",s))(pn||{}),mn=(s=>(s.List="list",s.Tree="tree",s))(mn||{}),V=(s=>(s.Auto="auto",s.List="list",s.Tree="tree",s))(V||{}),gn=(s=>(s.Branch="branch",s.Working="working",s))(gn||{}),vn=(s=>(s.CommitHasNoPreviousCommitWarning="suppressCommitHasNoPreviousCommitWarning",s.CommitNotFoundWarning="suppressCommitNotFoundWarning",s.CreatePullRequestPrompt="suppressCreatePullRequestPrompt",s.SuppressDebugLoggingWarning="suppressDebugLoggingWarning",s.FileNotUnderSourceControlWarning="suppressFileNotUnderSourceControlWarning",s.GitDisabledWarning="suppressGitDisabledWarning",s.GitMissingWarning="suppressGitMissingWarning",s.GitVersionWarning="suppressGitVersionWarning",s.LineUncommittedWarning="suppressLineUncommittedWarning",s.NoRepositoryWarning="suppressNoRepositoryWarning",s.RebaseSwitchToTextWarning="suppressRebaseSwitchToTextWarning",s.IntegrationDisconnectedTooManyFailedRequestsWarning="suppressIntegrationDisconnectedTooManyFailedRequestsWarning",s.IntegrationRequestFailed500Warning="suppressIntegrationRequestFailed500Warning",s.IntegrationRequestTimedOutWarning="suppressIntegrationRequestTimedOutWarning",s))(vn||{});const Ns=null,Bs=null;function Fs(s,n){const i=[];let r=0;for(;r<s.length;)i.push(s.slice(r,n+r)),r+=n;return i}function Ds(s){let n=0;for(const i of s)n+=i.length;return n}function Is(s,n){const i=Object.create(null);for(const r of s){const a=n(r);i[a]=(i[a]??0)+1}return i}function Rs(s){return s==null?void 0:Array.isArray(s)?s:[s]}function Ms(s,n){let i=0;return s.reduce((r,a)=>{const l=n(a,i++);return l!=null&&r.push(l),r},[])}function Hs(s,n){let i=0;return s.reduce(async(r,a)=>{const l=await n(a,i++);return l!=null&&r.push(l),r},[])}function Us(s,n){return s.reduce((i,r)=>{const a=n(r),l=i[a];return l===void 0?i[a]=[r]:l.push(r),i},Object.create(null))}function Ls(s,n){return s.reduce((i,r)=>{const a=n(r),l=i.get(a);return l===void 0?i.set(a,[r]):l.push(r),i},new Map)}function Vs(s,n,i){return s.reduce((r,a)=>{const l=i(a);if(l!=null){const c=n(a),u=r.get(c);u===void 0?r.set(c,[l]):u.push(l)}return r},new Map)}function js(s){return typeof s[0]=="string"}function yn(s,n,i,r=!1,a){const l={name:"",relativePath:"",children:new Map,descendants:[]};let c=s.reduce((u,h)=>{let d=u,f="";for(const b of n(h)){f=i(f,b),d.children===void 0&&(d.children=new Map);let p=d.children.get(b);p===void 0&&(p={name:b,relativePath:f,parent:d,children:void 0,descendants:void 0},d.children.set(b,p)),d.descendants===void 0&&(d.descendants=[]),d.descendants.push(h),d=p}return d.value=h,u},l);return r&&(c=Ot(c,i,!0,a)),c}function Ot(s,n,i=!0,r){if(s.children===void 0)return s;const a=[...s.children.values()];for(const l of a)Ot(l,n,!1,r);if(!i&&a.length===1){const l=a[0];(l.value===void 0||r?.(l.value))&&(s.name=n(s.name,l.name),s.relativePath=l.relativePath,s.children=l.children,s.descendants=l.descendants,s.value=l.value)}return s}function qs(s){return[...new Set(s)]}function zs(s,n){return join(new Set(s),n)}function Ws(s,n,i){return[...s.reduce((a,l)=>{const c=n(l),u=a.get(c);if(u===void 0)a.set(c,l);else{const h=i(u,l);h!==void 0&&a.set(c,h)}return a},new Map).values()]}class Et{constructor(n,i=!1){this.method=n,this.overwriteable=i}}class A extends Et{}class fe extends Et{}function Nt(s,n,i){s.method===n.method&&i(n.params,s)}const wn=new A("webview/ready"),Bt=new A("webview/focus"),Qs=new A("command/execute"),Gs=new A("configuration/preview"),Ys=new A("configuration/update"),Ks=new fe("configuration/didChange"),Zs=new fe("configuration/didPreview"),Xs=new fe("webview/didOpenAnchor"),_n=`\0
\0`,$n=new A("commit/actions"),xn=new A("commit/file/actions"),Cn=new A("commit/file/open"),kn=new A("commit/file/openOnRemote"),An=new A("commit/file/compareWorking"),Pn=new A("commit/file/comparePrevious"),Sn=new A("commit/pickCommit"),Tn=new A("commit/searchCommit"),On=new A("commit/autolinkSettings"),En=new A("commit/pin"),Ge=new A("commit/preferences"),Ft=new fe("commit/didChange"),Js=new fe("commit/didChange/rich");var $;(s=>{function n(a,l,c,u){let h=!1;if(typeof a=="string"){const f=function(b){const p=b?.target?.closest(a);p!=null&&c(b,p)};return document.addEventListener(l,f,u??!0),{dispose:()=>{h||(h=!0,document.removeEventListener(l,f,u??!0))}}}const d=function(f){c(f,this)};return a.addEventListener(l,d,u??!1),{dispose:()=>{h||(h=!0,a.removeEventListener(l,d,u??!1))}}}s.on=n;function i(a,l,c){const u=document.getElementById(a);if(l.replaceChildren(u?.content.cloneNode(!0)),l.className=u.className,c?.visible!=null){const h=l.querySelectorAll("[data-visible]");for(const d of h){const f=d.dataset.visible;!f||(c.visible[f]?d.style.display="initial":d.style.display="none")}}if(c?.bindings!=null){const h=l.querySelectorAll("[data-bind]");for(const d of h){const f=d.dataset.bind;if(!f)continue;const b=c.bindings[f];b!=null&&(d.textContent=String(b))}}}s.insertTemplate=i;function r(a){a.replaceChildren(),a.className=""}s.resetSlot=r})($||($={}));const Nn=/^(?:(#?)([0-9a-f]{3}|[0-9a-f]{6})|((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\))$/i;function Ye(s,n){const i=s+n,r=n<0?i<0?0:i:i>255?255:i;return Math.round(r)}function x(s,n){return k(s,-n)}function k(s,n){const i=Se(s);if(i==null)return s;const[r,a,l,c]=i,u=255*n/100;return`rgba(${Ye(r,u)}, ${Ye(a,u)}, ${Ye(l,u)}, ${c})`}function N(s,n){const i=Se(s);if(i==null)return s;const[r,a,l,c]=i;return`rgba(${r}, ${a}, ${l}, ${c*(n/100)})`}function er(s,n,i){const r=Se(s),a=Se(n);if(r==null||a==null)return s;const[l,c,u,h]=r,[d,f,b,p]=a;return`rgba(${Pe(l,d,i)}, ${Pe(c,f,i)}, ${Pe(u,b,i)}, ${Pe(h,p,i)})`}const Pe=(s,n,i)=>s+(n-s)*i/100;function Se(s){s=s.trim();const n=Nn.exec(s);if(n==null)return null;if(n[1]==="#"){const i=n[2];switch(i.length){case 3:return[parseInt(i[0]+i[0],16),parseInt(i[1]+i[1],16),parseInt(i[2]+i[2],16),1];case 6:return[parseInt(i.substring(0,2),16),parseInt(i.substring(2,4),16),parseInt(i.substring(4,6),16),1]}return null}switch(n[3]){case"rgb":return[parseInt(n[4],10),parseInt(n[5],10),parseInt(n[6],10),1];case"rgba":return[parseInt(n[4],10),parseInt(n[5],10),parseInt(n[6],10),parseFloat(n[7])];default:return null}}const Dt=class{constructor(){this._disposed=!1}get event(){return this._event==null&&(this._event=(s,n,i)=>{this.listeners==null&&(this.listeners=new Rt);const r=this.listeners.push(n==null?s:[s,n]),a={dispose:()=>{a.dispose=Dt._noop,this._disposed||r()}};return Array.isArray(i)&&i.push(a),a}),this._event}fire(s){if(this.listeners!=null){this._deliveryQueue==null&&(this._deliveryQueue=new Rt);for(let n=this.listeners.iterator(),i=n.next();!i.done;i=n.next())this._deliveryQueue.push([i.value,s]);for(;this._deliveryQueue.size>0;){const[n,i]=this._deliveryQueue.shift();try{typeof n=="function"?n(i):n[0].call(n[1],i)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let It=Dt;It._noop=function(){};const Bn={done:!0,value:void 0},Te=class{constructor(s){this.element=s,this.next=Te.Undefined,this.prev=Te.Undefined}};let y=Te;y.Undefined=new Te(void 0);class Rt{constructor(){this._first=y.Undefined,this._last=y.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===y.Undefined}clear(){this._first=y.Undefined,this._last=y.Undefined,this._size=0}unshift(n){return this._insert(n,!1)}push(n){return this._insert(n,!0)}_insert(n,i){const r=new y(n);if(this._first===y.Undefined)this._first=r,this._last=r;else if(i){const l=this._last;this._last=r,r.prev=l,l.next=r}else{const l=this._first;this._first=r,r.next=l,l.prev=r}this._size+=1;let a=!1;return()=>{a||(a=!0,this._remove(r))}}shift(){if(this._first===y.Undefined)return;const n=this._first.element;return this._remove(this._first),n}pop(){if(this._last===y.Undefined)return;const n=this._last.element;return this._remove(this._last),n}_remove(n){if(n.prev!==y.Undefined&&n.next!==y.Undefined){const i=n.prev;i.next=n.next,n.next.prev=i}else n.prev===y.Undefined&&n.next===y.Undefined?(this._first=y.Undefined,this._last=y.Undefined):n.next===y.Undefined?(this._last=this._last.prev,this._last.next=y.Undefined):n.prev===y.Undefined&&(this._first=this._first.next,this._first.prev=y.Undefined);this._size-=1}iterator(){let n,i=this._first;return{next:function(){return i===y.Undefined?Bn:(n==null?n={done:!1,value:i.element}:n.value=i.element,i=i.next,n)}}}toArray(){const n=[];for(let i=this._first;i!==y.Undefined;i=i.next)n.push(i.element);return n}}const Mt=new It,Fn=Mt.event;function Dn(){const s=i=>{const r=document.body,a=window.getComputedStyle(r),l=r.classList.contains("vscode-light")||r.classList.contains("vscode-high-contrast-light"),c=r.style;c.setProperty("--font-family",a.getPropertyValue("--vscode-font-family").trim()),c.setProperty("--font-size",a.getPropertyValue("--vscode-font-size").trim()),c.setProperty("--font-weight",a.getPropertyValue("--vscode-font-weight").trim()),c.setProperty("--editor-font-family",a.getPropertyValue("--vscode-editor-font-family").trim()),c.setProperty("--editor-font-size",a.getPropertyValue("--vscode-editor-font-size").trim()),c.setProperty("--editor-font-weight",a.getPropertyValue("--vscode-editor-font-weight").trim());const u=a.getPropertyValue("--vscode-editor-background").trim();let h=u;c.setProperty("--color-background",h),c.setProperty("--color-background--lighten-05",k(h,5)),c.setProperty("--color-background--darken-05",x(h,5)),c.setProperty("--color-background--lighten-075",k(h,7.5)),c.setProperty("--color-background--darken-075",x(h,7.5)),c.setProperty("--color-background--lighten-10",k(h,10)),c.setProperty("--color-background--darken-10",x(h,10)),c.setProperty("--color-background--lighten-15",k(h,15)),c.setProperty("--color-background--darken-15",x(h,15)),c.setProperty("--color-background--lighten-30",k(h,30)),c.setProperty("--color-background--darken-30",x(h,30)),c.setProperty("--color-background--lighten-50",k(h,50)),c.setProperty("--color-background--darken-50",x(h,50)),h=a.getPropertyValue("--vscode-button-background").trim(),c.setProperty("--color-button-background",h),c.setProperty("--color-button-background--darken-30",x(h,30)),c.setProperty("--color-highlight",h),c.setProperty("--color-highlight--75",N(h,75)),c.setProperty("--color-highlight--50",N(h,50)),c.setProperty("--color-highlight--25",N(h,25)),h=a.getPropertyValue("--vscode-button-secondaryBackground").trim(),c.setProperty("--color-button-secondary-background",h),c.setProperty("--color-button-secondary-background--darken-30",x(h,30)),h=a.getPropertyValue("--vscode-button-foreground").trim(),c.setProperty("--color-button-foreground",h);let d=a.getPropertyValue("--vscode-editor-foreground").trim();d||(d=a.getPropertyValue("--vscode-foreground").trim()),c.setProperty("--color-foreground",d),c.setProperty("--color-foreground--85",N(d,85)),c.setProperty("--color-foreground--75",N(d,75)),c.setProperty("--color-foreground--65",N(d,65)),c.setProperty("--color-foreground--50",N(d,50)),h=a.getPropertyValue("--vscode-focusBorder").trim(),c.setProperty("--color-focus-border",h),h=a.getPropertyValue("--vscode-textLink-foreground").trim(),c.setProperty("--color-link-foreground",h),c.setProperty("--color-link-foreground--darken-20",x(h,20)),c.setProperty("--color-link-foreground--lighten-20",k(h,20)),h=a.getPropertyValue("--vscode-sideBar-background").trim(),c.setProperty("--color-view-background",h||u),h=a.getPropertyValue("--vscode-sideBar-foreground").trim(),c.setProperty("--color-view-foreground",h||d),c.setProperty("--color-view-header-foreground",a.getPropertyValue("--vscode-sideBarSectionHeader-foreground").trim()||h||d),h=a.getPropertyValue("--vscode-editorHoverWidget-background").trim(),c.setProperty("--color-hover-background",h),h=a.getPropertyValue("--vscode-editorHoverWidget-border").trim(),c.setProperty("--color-hover-border",h),h=a.getPropertyValue("--vscode-editorHoverWidget-foreground").trim(),c.setProperty("--color-hover-foreground",h),h=a.getPropertyValue("--vscode-editorHoverWidget-statusBarBackground").trim(),c.setProperty("--color-hover-statusBarBackground",h),c.setProperty("--graph-theme-opacity-factor",l?"0.5":"1"),c.setProperty("--color-graph-actionbar-background",l?x(u,5):k(u,5)),c.setProperty("--color-graph-actionbar-selectedBackground",l?x(u,10):k(u,10)),c.setProperty("--color-graph-background",l?x(u,5):k(u,5)),c.setProperty("--color-graph-background2",l?x(u,10):k(u,10)),h=a.getPropertyValue("--vscode-list-focusOutline").trim(),c.setProperty("--color-graph-contrast-border-color",h),h=a.getPropertyValue("--vscode-list-activeSelectionBackground").trim(),c.setProperty("--color-graph-selected-row",h),h=a.getPropertyValue("--vscode-list-hoverBackground").trim(),c.setProperty("--color-graph-hover-row",h),h=a.getPropertyValue("--vscode-list-activeSelectionForeground").trim(),c.setProperty("--color-graph-text-selected-row",h),c.setProperty("--color-graph-text-dimmed-selected",N(h,50)),c.setProperty("--color-graph-text-dimmed",N(d,20)),h=a.getPropertyValue("--vscode-list-hoverForeground").trim(),c.setProperty("--color-graph-text-hovered",h),c.setProperty("--color-graph-text-selected",d),c.setProperty("--color-graph-text-normal",N(d,85)),c.setProperty("--color-graph-text-secondary",N(d,65)),c.setProperty("--color-graph-text-disabled",N(d,50)),h=a.getPropertyValue("--vscode-inputValidation-infoBackground").trim(),c.setProperty("--color-alert-infoHoverBackground",l?x(h,5):k(h,5)),c.setProperty("--color-alert-infoBackground",h),h=a.getPropertyValue("--vscode-inputValidation-warningBackground").trim(),c.setProperty("--color-alert-warningHoverBackground",l?x(h,5):k(h,5)),c.setProperty("--color-alert-warningBackground",h),h=a.getPropertyValue("--vscode-inputValidation-errorBackground").trim(),c.setProperty("--color-alert-errorHoverBackground",l?x(h,5):k(h,5)),c.setProperty("--color-alert-errorBackground",h),h=l?x(u,5):k(u,5),c.setProperty("--color-alert-neutralHoverBackground",l?x(h,5):k(h,5)),c.setProperty("--color-alert-neutralBackground",h),c.setProperty("--color-alert-infoBorder","var(--vscode-inputValidation-infoBorder)"),c.setProperty("--color-alert-warningBorder","var(--vscode-inputValidation-warningBorder)"),c.setProperty("--color-alert-errorBorder","var(--vscode-inputValidation-errorBorder)"),c.setProperty("--color-alert-neutralBorder","var(--vscode-input-foreground)"),c.setProperty("--color-alert-foreground","var(--vscode-input-foreground)"),i!=null&&Mt.fire()};s();const n=new MutationObserver(s);return n.observe(document.body,{attributeFilter:["class"]}),n}const In=2**30;let Oe=0;function Ht(){return Oe===In?Oe=1:Oe++,`webview:${Oe}`}class Rn{constructor(n){this.appName=n,this.state=window.bootstrap,window.bootstrap=void 0,this.log(`${this.appName}()`),this._api=acquireVsCodeApi(),this.onThemeUpdated!=null&&Fn(this.onThemeUpdated,this),Dn(),requestAnimationFrame(()=>{this.log(`${this.appName}.initializing`);try{this.onInitialize?.(),this.bind(),this.onMessageReceived!=null&&window.addEventListener("message",this.onMessageReceived.bind(this)),this.sendCommand(wn,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}})}bind(){this.bindDisposables?.forEach(n=>n.dispose()),this.bindDisposables=this.onBind?.(),this.bindDisposables==null&&(this.bindDisposables=[]),this.bindDisposables.push($.on(document,"focusin",n=>{const i=n.target?.tagName.includes("-")||n.target?.closest("input")!=null;(this._focused!==!0||this._inputFocused!==i)&&(this._focused=!0,this._inputFocused=i,this.sendCommand(Bt,{focused:!0,inputFocused:i}))}),$.on(document,"focusout",()=>{(this._focused!==!1||this._inputFocused!==!1)&&(this._focused=!1,this._inputFocused=!1,this.sendCommand(Bt,{focused:!1,inputFocused:!1}))}))}log(n,...i){}getState(){return this._api.getState()}sendCommand(n,i){const r=Ht();this.log(`${this.appName}.sendCommand(${r}): name=${n.method}`),this.postMessage({id:r,method:n.method,params:i})}async sendCommandWithCompletion(n,i,r){const a=Ht();this.log(`${this.appName}.sendCommandWithCompletion(${a}): name=${n.method}`);const l=new Promise((c,u)=>{let h;const d=[$.on(window,"message",f=>{Nt(r,f.data,b=>{f.data.completionId===a&&(d.forEach(p=>p.dispose()),queueMicrotask(()=>c(b)))})}),{dispose:function(){h!=null&&(clearTimeout(h),h=void 0)}}];h=setTimeout(()=>{h=void 0,d.forEach(f=>f.dispose()),u(new Error(`Timed out waiting for completion of ${r.method}`))},6e4)});return this.postMessage({id:a,method:n.method,params:i,completionId:a}),l}setState(n){this.state=n,n!=null&&this._api.setState(n)}postMessage(n){this._api.postMessage(n)}}class Mn{createCSS(){return""}createBehavior(){}}const j=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();j.trustedTypes===void 0&&(j.trustedTypes={createPolicy:(s,n)=>n});const Ut={configurable:!1,enumerable:!1,writable:!1};j.FAST===void 0&&Reflect.defineProperty(j,"FAST",Object.assign({value:Object.create(null)},Ut));const be=j.FAST;if(be.getById===void 0){const s=Object.create(null);Reflect.defineProperty(be,"getById",Object.assign({value(n,i){let r=s[n];return r===void 0&&(r=i?s[n]=i():null),r}},Ut))}const Ke=Object.freeze([]);function Lt(){const s=new WeakMap;return function(n){let i=s.get(n);if(i===void 0){let r=Reflect.getPrototypeOf(n);for(;i===void 0&&r!==null;)i=s.get(r),r=Reflect.getPrototypeOf(r);i=i===void 0?[]:i.slice(0),s.set(n,i)}return i}}const Ze=j.FAST.getById(1,()=>{const s=[],n=[];function i(){if(n.length)throw n.shift()}function r(c){try{c.call()}catch(u){n.push(u),setTimeout(i,0)}}function a(){let u=0;for(;u<s.length;)if(r(s[u]),u++,u>1024){for(let h=0,d=s.length-u;h<d;h++)s[h]=s[h+u];s.length-=u,u=0}s.length=0}function l(c){s.length<1&&j.requestAnimationFrame(a),s.push(c)}return Object.freeze({enqueue:l,process:a})}),Vt=j.trustedTypes.createPolicy("fast-html",{createHTML:s=>s});let Xe=Vt;const pe=`fast-${Math.random().toString(36).substring(2,8)}`,jt=`${pe}{`,Je=`}${pe}`,w=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(s){if(Xe!==Vt)throw new Error("The HTML policy can only be set once.");Xe=s},createHTML(s){return Xe.createHTML(s)},isMarker(s){return s&&s.nodeType===8&&s.data.startsWith(pe)},extractDirectiveIndexFromMarker(s){return parseInt(s.data.replace(`${pe}:`,""))},createInterpolationPlaceholder(s){return`${jt}${s}${Je}`},createCustomAttributePlaceholder(s,n){return`${s}="${this.createInterpolationPlaceholder(n)}"`},createBlockPlaceholder(s){return`<!--${pe}:${s}-->`},queueUpdate:Ze.enqueue,processUpdates:Ze.process,nextUpdate(){return new Promise(Ze.enqueue)},setAttribute(s,n,i){i==null?s.removeAttribute(n):s.setAttribute(n,i)},setBooleanAttribute(s,n,i){i?s.setAttribute(n,""):s.removeAttribute(n)},removeChildNodes(s){for(let n=s.firstChild;n!==null;n=s.firstChild)s.removeChild(n)},createTemplateWalker(s){return document.createTreeWalker(s,133,null,!1)}});class F{constructor(){this.targets=new WeakSet}addStylesTo(n){this.targets.add(n)}removeStylesFrom(n){this.targets.delete(n)}isAttachedTo(n){return this.targets.has(n)}withBehaviors(...n){return this.behaviors=this.behaviors===null?n:this.behaviors.concat(n),this}}F.create=(()=>{if(w.supportsAdoptedStyleSheets){const s=new Map;return n=>new Hn(n,s)}return s=>new Vn(s)})();function et(s){return s.map(n=>n instanceof F?et(n.styles):[n]).reduce((n,i)=>n.concat(i),[])}function qt(s){return s.map(n=>n instanceof F?n.behaviors:null).reduce((n,i)=>i===null?n:(n===null&&(n=[]),n.concat(i)),null)}class Hn extends F{constructor(n,i){super(),this.styles=n,this.styleSheetCache=i,this._styleSheets=void 0,this.behaviors=qt(n)}get styleSheets(){if(this._styleSheets===void 0){const n=this.styles,i=this.styleSheetCache;this._styleSheets=et(n).map(r=>{if(r instanceof CSSStyleSheet)return r;let a=i.get(r);return a===void 0&&(a=new CSSStyleSheet,a.replaceSync(r),i.set(r,a)),a})}return this._styleSheets}addStylesTo(n){n.adoptedStyleSheets=[...n.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(n)}removeStylesFrom(n){const i=this.styleSheets;n.adoptedStyleSheets=n.adoptedStyleSheets.filter(r=>i.indexOf(r)===-1),super.removeStylesFrom(n)}}let Un=0;function Ln(){return`fast-style-class-${++Un}`}class Vn extends F{constructor(n){super(),this.styles=n,this.behaviors=null,this.behaviors=qt(n),this.styleSheets=et(n),this.styleClass=Ln()}addStylesTo(n){const i=this.styleSheets,r=this.styleClass;n=this.normalizeTarget(n);for(let a=0;a<i.length;a++){const l=document.createElement("style");l.innerHTML=i[a],l.className=r,n.append(l)}super.addStylesTo(n)}removeStylesFrom(n){n=this.normalizeTarget(n);const i=n.querySelectorAll(`.${this.styleClass}`);for(let r=0,a=i.length;r<a;++r)n.removeChild(i[r]);super.removeStylesFrom(n)}isAttachedTo(n){return super.isAttachedTo(this.normalizeTarget(n))}normalizeTarget(n){return n===document?document.body:n}}function zt(s,n){const i=[];let r="";const a=[];for(let l=0,c=s.length-1;l<c;++l){r+=s[l];let u=n[l];if(u instanceof Mn){const h=u.createBehavior();u=u.createCSS(),h&&a.push(h)}u instanceof F||u instanceof CSSStyleSheet?(r.trim()!==""&&(i.push(r),r=""),i.push(u)):r+=u}return r+=s[s.length-1],r.trim()!==""&&i.push(r),{styles:i,behaviors:a}}function q(s,...n){const{styles:i,behaviors:r}=zt(s,n),a=F.create(i);return r.length&&a.withBehaviors(...r),a}class jn extends null{constructor(n,i){super(),this.behaviors=i,this.css="";const r=n.reduce((a,l)=>(typeof l=="string"?this.css+=l:a.push(l),a),[]);r.length&&(this.styles=ElementStyles.create(r))}createBehavior(){return this}createCSS(){return this.css}bind(n){this.styles&&n.$fastController.addStyles(this.styles),this.behaviors.length&&n.$fastController.addBehaviors(this.behaviors)}unbind(n){this.styles&&n.$fastController.removeStyles(this.styles),this.behaviors.length&&n.$fastController.removeBehaviors(this.behaviors)}}function tr(s,...n){const{styles:i,behaviors:r}=zt(s,n);return new jn(i,r)}class Ee{constructor(n,i){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=n,this.sub1=i}has(n){return this.spillover===void 0?this.sub1===n||this.sub2===n:this.spillover.indexOf(n)!==-1}subscribe(n){const i=this.spillover;if(i===void 0){if(this.has(n))return;if(this.sub1===void 0){this.sub1=n;return}if(this.sub2===void 0){this.sub2=n;return}this.spillover=[this.sub1,this.sub2,n],this.sub1=void 0,this.sub2=void 0}else i.indexOf(n)===-1&&i.push(n)}unsubscribe(n){const i=this.spillover;if(i===void 0)this.sub1===n?this.sub1=void 0:this.sub2===n&&(this.sub2=void 0);else{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}notify(n){const i=this.spillover,r=this.source;if(i===void 0){const a=this.sub1,l=this.sub2;a!==void 0&&a.handleChange(r,n),l!==void 0&&l.handleChange(r,n)}else for(let a=0,l=i.length;a<l;++a)i[a].handleChange(r,n)}}class Wt{constructor(n){this.subscribers={},this.sourceSubscribers=null,this.source=n}notify(n){var i;const r=this.subscribers[n];r!==void 0&&r.notify(n),(i=this.sourceSubscribers)===null||i===void 0||i.notify(n)}subscribe(n,i){var r;if(i){let a=this.subscribers[i];a===void 0&&(this.subscribers[i]=a=new Ee(this.source)),a.subscribe(n)}else this.sourceSubscribers=(r=this.sourceSubscribers)!==null&&r!==void 0?r:new Ee(this.source),this.sourceSubscribers.subscribe(n)}unsubscribe(n,i){var r;if(i){const a=this.subscribers[i];a!==void 0&&a.unsubscribe(n)}else(r=this.sourceSubscribers)===null||r===void 0||r.unsubscribe(n)}}const C=be.getById(2,()=>{const s=/(:|&&|\|\||if)/,n=new WeakMap,i=w.queueUpdate;let r,a=d=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function l(d){let f=d.$fastController||n.get(d);return f===void 0&&(Array.isArray(d)?f=a(d):n.set(d,f=new Wt(d))),f}const c=Lt();class u{constructor(f){this.name=f,this.field=`_${f}`,this.callback=`${f}Changed`}getValue(f){return r!==void 0&&r.watch(f,this.name),f[this.field]}setValue(f,b){const p=this.field,m=f[p];if(m!==b){f[p]=b;const v=f[this.callback];typeof v=="function"&&v.call(f,m,b),l(f).notify(this.name)}}}class h extends Ee{constructor(f,b,p=!1){super(f,b),this.binding=f,this.isVolatileBinding=p,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(f,b){this.needsRefresh&&this.last!==null&&this.disconnect();const p=r;r=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const m=this.binding(f,b);return r=p,m}disconnect(){if(this.last!==null){let f=this.first;for(;f!==void 0;)f.notifier.unsubscribe(this,f.propertyName),f=f.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(f,b){const p=this.last,m=l(f),v=p===null?this.first:{};if(v.propertySource=f,v.propertyName=b,v.notifier=m,m.subscribe(this,b),p!==null){if(!this.needsRefresh){let E;r=void 0,E=p.propertySource[p.propertyName],r=this,f===E&&(this.needsRefresh=!0)}p.next=v}this.last=v}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let f=this.first;return{next:()=>{const b=f;return b===void 0?{value:void 0,done:!0}:(f=f.next,{value:b,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(d){a=d},getNotifier:l,track(d,f){r!==void 0&&r.watch(d,f)},trackVolatile(){r!==void 0&&(r.needsRefresh=!0)},notify(d,f){l(d).notify(f)},defineProperty(d,f){typeof f=="string"&&(f=new u(f)),c(d).push(f),Reflect.defineProperty(d,f.name,{enumerable:!0,get:function(){return f.getValue(this)},set:function(b){f.setValue(this,b)}})},getAccessors:c,binding(d,f,b=this.isVolatileBinding(d)){return new h(d,f,b)},isVolatileBinding(d){return s.test(d.toString())}})});function Qt(s,n){C.defineProperty(s,n)}function Ne(s,n,i){return Object.assign({},i,{get:function(){return C.trackVolatile(),i.get.apply(this)}})}const Gt=be.getById(3,()=>{let s=null;return{get(){return s},set(n){s=n}}});class me{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Gt.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(n){Gt.set(n)}}C.defineProperty(me.prototype,"index"),C.defineProperty(me.prototype,"length");const Be=Object.seal(new me),Yt=Object.freeze({locate:Lt()}),qn={toView(s){return s?"true":"false"},fromView(s){return!(s==null||s==="false"||s===!1||s===0)}},or={toView(s){if(s==null)return null;const n=s*1;return isNaN(n)?null:n.toString()},fromView(s){if(s==null)return null;const n=s*1;return isNaN(n)?null:n}};class Fe{constructor(n,i,r=i.toLowerCase(),a="reflect",l){this.guards=new Set,this.Owner=n,this.name=i,this.attribute=r,this.mode=a,this.converter=l,this.fieldName=`_${i}`,this.callbackName=`${i}Changed`,this.hasCallback=this.callbackName in n.prototype,a==="boolean"&&l===void 0&&(this.converter=qn)}setValue(n,i){const r=n[this.fieldName],a=this.converter;a!==void 0&&(i=a.fromView(i)),r!==i&&(n[this.fieldName]=i,this.tryReflectToAttribute(n),this.hasCallback&&n[this.callbackName](r,i),n.$fastController.notify(this.name))}getValue(n){return C.track(n,this.name),n[this.fieldName]}onAttributeChangedCallback(n,i){this.guards.has(n)||(this.guards.add(n),this.setValue(n,i),this.guards.delete(n))}tryReflectToAttribute(n){const i=this.mode,r=this.guards;r.has(n)||i==="fromView"||w.queueUpdate(()=>{r.add(n);const a=n[this.fieldName];switch(i){case"reflect":const l=this.converter;w.setAttribute(n,this.attribute,l!==void 0?l.toView(a):a);break;case"boolean":w.setBooleanAttribute(n,this.attribute,a);break}r.delete(n)})}static collect(n,...i){const r=[];i.push(Yt.locate(n));for(let a=0,l=i.length;a<l;++a){const c=i[a];if(c!==void 0)for(let u=0,h=c.length;u<h;++u){const d=c[u];typeof d=="string"?r.push(new Fe(n,d)):r.push(new Fe(n,d.property,d.attribute,d.mode,d.converter))}}return r}}function g(s,n){let i;function r(a,l){arguments.length>1&&(i.property=l),Yt.locate(a.constructor).push(i)}if(arguments.length>1){i={},r(s,n);return}return i=s===void 0?{}:s,r}const Kt={mode:"open"},Zt={},tt=be.getById(4,()=>{const s=new Map;return Object.freeze({register(n){return s.has(n.type)?!1:(s.set(n.type,n),!0)},getByType(n){return s.get(n)}})});class De{constructor(n,i=n.definition){typeof i=="string"&&(i={name:i}),this.type=n,this.name=i.name,this.template=i.template;const r=Fe.collect(n,i.attributes),a=new Array(r.length),l={},c={};for(let u=0,h=r.length;u<h;++u){const d=r[u];a[u]=d.attribute,l[d.name]=d,c[d.attribute]=d}this.attributes=r,this.observedAttributes=a,this.propertyLookup=l,this.attributeLookup=c,this.shadowOptions=i.shadowOptions===void 0?Kt:i.shadowOptions===null?void 0:Object.assign(Object.assign({},Kt),i.shadowOptions),this.elementOptions=i.elementOptions===void 0?Zt:Object.assign(Object.assign({},Zt),i.elementOptions),this.styles=i.styles===void 0?void 0:Array.isArray(i.styles)?F.create(i.styles):i.styles instanceof F?i.styles:F.create([i.styles])}get isDefined(){return!!tt.getByType(this.type)}define(n=customElements){const i=this.type;if(tt.register(this)){const r=this.attributes,a=i.prototype;for(let l=0,c=r.length;l<c;++l)C.defineProperty(a,r[l]);Reflect.defineProperty(i,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return n.get(this.name)||n.define(this.name,i,this.elementOptions),this}}De.forType=tt.getByType;const Xt=new WeakMap,zn={bubbles:!0,composed:!0,cancelable:!0};function ot(s){return s.shadowRoot||Xt.get(s)||null}class nt extends Wt{constructor(n,i){super(n),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=n,this.definition=i;const r=i.shadowOptions;if(r!==void 0){const l=n.attachShadow(r);r.mode==="closed"&&Xt.set(n,l)}const a=C.getAccessors(n);if(a.length>0){const l=this.boundObservables=Object.create(null);for(let c=0,u=a.length;c<u;++c){const h=a[c].name,d=n[h];d!==void 0&&(delete n[h],l[h]=d)}}}get isConnected(){return C.track(this,"isConnected"),this._isConnected}setIsConnected(n){this._isConnected=n,C.notify(this,"isConnected")}get template(){return this._template}set template(n){this._template!==n&&(this._template=n,this.needsInitialization||this.renderTemplate(n))}get styles(){return this._styles}set styles(n){this._styles!==n&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=n,!this.needsInitialization&&n!==null&&this.addStyles(n))}addStyles(n){const i=ot(this.element)||this.element.getRootNode();if(n instanceof HTMLStyleElement)i.append(n);else if(!n.isAttachedTo(i)){const r=n.behaviors;n.addStylesTo(i),r!==null&&this.addBehaviors(r)}}removeStyles(n){const i=ot(this.element)||this.element.getRootNode();if(n instanceof HTMLStyleElement)i.removeChild(n);else if(n.isAttachedTo(i)){const r=n.behaviors;n.removeStylesFrom(i),r!==null&&this.removeBehaviors(r)}}addBehaviors(n){const i=this.behaviors||(this.behaviors=new Map),r=n.length,a=[];for(let l=0;l<r;++l){const c=n[l];i.has(c)?i.set(c,i.get(c)+1):(i.set(c,1),a.push(c))}if(this._isConnected){const l=this.element;for(let c=0;c<a.length;++c)a[c].bind(l,Be)}}removeBehaviors(n,i=!1){const r=this.behaviors;if(r===null)return;const a=n.length,l=[];for(let c=0;c<a;++c){const u=n[c];if(r.has(u)){const h=r.get(u)-1;h===0||i?r.delete(u)&&l.push(u):r.set(u,h)}}if(this._isConnected){const c=this.element;for(let u=0;u<l.length;++u)l[u].unbind(c)}}onConnectedCallback(){if(this._isConnected)return;const n=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(n,Be);const i=this.behaviors;if(i!==null)for(const[r]of i)r.bind(n,Be);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const n=this.view;n!==null&&n.unbind();const i=this.behaviors;if(i!==null){const r=this.element;for(const[a]of i)a.unbind(r)}}onAttributeChangedCallback(n,i,r){const a=this.definition.attributeLookup[n];a!==void 0&&a.onAttributeChangedCallback(this.element,r)}emit(n,i,r){return this._isConnected?this.element.dispatchEvent(new CustomEvent(n,Object.assign(Object.assign({detail:i},zn),r))):!1}finishInitialization(){const n=this.element,i=this.boundObservables;if(i!==null){const a=Object.keys(i);for(let l=0,c=a.length;l<c;++l){const u=a[l];n[u]=i[u]}this.boundObservables=null}const r=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():r.template&&(this._template=r.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():r.styles&&(this._styles=r.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(n){const i=this.element,r=ot(i)||i;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||w.removeChildNodes(r),n&&(this.view=n.render(i,r,i))}static forCustomElement(n){const i=n.$fastController;if(i!==void 0)return i;const r=De.forType(n.constructor);if(r===void 0)throw new Error("Missing FASTElement definition.");return n.$fastController=new nt(n,r)}}function Jt(s){return class extends s{constructor(){super(),nt.forCustomElement(this)}$emit(n,i,r){return this.$fastController.emit(n,i,r)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(n,i,r){this.$fastController.onAttributeChangedCallback(n,i,r)}}}const z=Object.assign(Jt(HTMLElement),{from(s){return Jt(s)},define(s,n){return new De(s,n).define().type}});function W(s){return function(n){new De(n,s).define()}}var Wn=Object.defineProperty,Qn=Object.getOwnPropertyDescriptor,Ie=(s,n,i,r)=>{for(var a=r>1?void 0:r?Qn(n,i):n,l=s.length-1,c;l>=0;l--)(c=s[l])&&(a=(r?c(n,i,a):c(a))||a);return r&&a&&Wn(n,i,a),a};const Gn=q`
	:host {
		font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
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
	:host([icon='gl-pinned-filled']):before {
		font-family: 'glicons';
		content: '\\f11c';
		/* TODO: see relative positioning needed in every use-case */
		position: relative;
		left: 1px;
	}
	:host([icon='gl-graph']):before {
		font-family: 'glicons';
		content: '\\f102';
	}
	:host([icon='gl-list-auto']):before {
		font-family: 'glicons';
		content: '\\f11a';
	}

	@keyframes codicon-spin {
		100% {
			transform: rotate(360deg);
		}
	}

	:host([modifier='spin']) {
		/* Use steps to throttle FPS to reduce CPU usage */
		animation: codicon-spin 1.5s steps(30) infinite;
	}
	:host([icon='loading'][modifier='spin']) {
		/* Use steps to throttle FPS to reduce CPU usage */
		animation: codicon-spin 1.5s steps(30) infinite;

		/* custom speed & easing for loading icon */
		animation-duration: 1s !important;
		animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
	}
`;let ge=class extends z{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}sizeChanged(){this.style.setProperty("--code-icon-size",`${this.size}px`)}};Ie([g],ge.prototype,"icon",2),Ie([g],ge.prototype,"modifier",2),Ie([g],ge.prototype,"size",2),ge=Ie([W({name:"code-icon",styles:Gn})],ge);class Re{constructor(){this.targetIndex=0}}class eo extends Re{constructor(){super(...arguments),this.createPlaceholder=w.createInterpolationPlaceholder}}class to extends Re{constructor(n,i,r){super(),this.name=n,this.behavior=i,this.options=r}createPlaceholder(n){return w.createCustomAttributePlaceholder(this.name,n)}createBehavior(n){return new this.behavior(n,this.options)}}function Yn(s,n){this.source=s,this.context=n,this.bindingObserver===null&&(this.bindingObserver=C.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(s,n))}function Kn(s,n){this.source=s,this.context=n,this.target.addEventListener(this.targetName,this)}function Zn(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Xn(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const s=this.target.$fastView;s!==void 0&&s.isComposed&&(s.unbind(),s.needsBindOnly=!0)}function Jn(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function ei(s){w.setAttribute(this.target,this.targetName,s)}function ti(s){w.setBooleanAttribute(this.target,this.targetName,s)}function oi(s){if(s==null&&(s=""),s.create){this.target.textContent="";let n=this.target.$fastView;n===void 0?n=s.create():this.target.$fastTemplate!==s&&(n.isComposed&&(n.remove(),n.unbind()),n=s.create()),n.isComposed?n.needsBindOnly&&(n.needsBindOnly=!1,n.bind(this.source,this.context)):(n.isComposed=!0,n.bind(this.source,this.context),n.insertBefore(this.target),this.target.$fastView=n,this.target.$fastTemplate=s)}else{const n=this.target.$fastView;n!==void 0&&n.isComposed&&(n.isComposed=!1,n.remove(),n.needsBindOnly?n.needsBindOnly=!1:n.unbind()),this.target.textContent=s}}function ni(s){this.target[this.targetName]=s}function ii(s){const n=this.classVersions||Object.create(null),i=this.target;let r=this.version||0;if(s!=null&&s.length){const a=s.split(/\s+/);for(let l=0,c=a.length;l<c;++l){const u=a[l];u!==""&&(n[u]=r,i.classList.add(u))}}if(this.classVersions=n,this.version=r+1,r!==0){r-=1;for(const a in n)n[a]===r&&i.classList.remove(a)}}class it extends eo{constructor(n){super(),this.binding=n,this.bind=Yn,this.unbind=Zn,this.updateTarget=ei,this.isBindingVolatile=C.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(n){if(this.originalTargetName=n,n!==void 0)switch(n[0]){case":":if(this.cleanedTargetName=n.substr(1),this.updateTarget=ni,this.cleanedTargetName==="innerHTML"){const i=this.binding;this.binding=(r,a)=>w.createHTML(i(r,a))}break;case"?":this.cleanedTargetName=n.substr(1),this.updateTarget=ti;break;case"@":this.cleanedTargetName=n.substr(1),this.bind=Kn,this.unbind=Jn;break;default:this.cleanedTargetName=n,n==="class"&&(this.updateTarget=ii);break}}targetAtContent(){this.updateTarget=oi,this.unbind=Xn}createBehavior(n){return new si(n,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class si{constructor(n,i,r,a,l,c,u){this.source=null,this.context=null,this.bindingObserver=null,this.target=n,this.binding=i,this.isBindingVolatile=r,this.bind=a,this.unbind=l,this.updateTarget=c,this.targetName=u}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(n){me.setEvent(n);const i=this.binding(this.source,this.context);me.setEvent(null),i!==!0&&n.preventDefault()}}let st=null;class rt{addFactory(n){n.targetIndex=this.targetIndex,this.behaviorFactories.push(n)}captureContentBinding(n){n.targetAtContent(),this.addFactory(n)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){st=this}static borrow(n){const i=st||new rt;return i.directives=n,i.reset(),st=null,i}}function ri(s){if(s.length===1)return s[0];let n;const i=s.length,r=s.map(c=>typeof c=="string"?()=>c:(n=c.targetName||n,c.binding)),a=(c,u)=>{let h="";for(let d=0;d<i;++d)h+=r[d](c,u);return h},l=new it(a);return l.targetName=n,l}const ai=Je.length;function oo(s,n){const i=n.split(jt);if(i.length===1)return null;const r=[];for(let a=0,l=i.length;a<l;++a){const c=i[a],u=c.indexOf(Je);let h;if(u===-1)h=c;else{const d=parseInt(c.substring(0,u));r.push(s.directives[d]),h=c.substring(u+ai)}h!==""&&r.push(h)}return r}function no(s,n,i=!1){const r=n.attributes;for(let a=0,l=r.length;a<l;++a){const c=r[a],u=c.value,h=oo(s,u);let d=null;h===null?i&&(d=new it(()=>u),d.targetName=c.name):d=ri(h),d!==null&&(n.removeAttributeNode(c),a--,l--,s.addFactory(d))}}function ci(s,n,i){const r=oo(s,n.textContent);if(r!==null){let a=n;for(let l=0,c=r.length;l<c;++l){const u=r[l],h=l===0?n:a.parentNode.insertBefore(document.createTextNode(""),a.nextSibling);typeof u=="string"?h.textContent=u:(h.textContent=" ",s.captureContentBinding(u)),a=h,s.targetIndex++,h!==n&&i.nextNode()}s.targetIndex--}}function li(s,n){const i=s.content;document.adoptNode(i);const r=rt.borrow(n);no(r,s,!0);const a=r.behaviorFactories;r.reset();const l=w.createTemplateWalker(i);let c;for(;c=l.nextNode();)switch(r.targetIndex++,c.nodeType){case 1:no(r,c);break;case 3:ci(r,c,l);break;case 8:w.isMarker(c)&&r.addFactory(n[w.extractDirectiveIndexFromMarker(c)])}let u=0;(w.isMarker(i.firstChild)||i.childNodes.length===1&&n.length)&&(i.insertBefore(document.createComment(""),i.firstChild),u=-1);const h=r.behaviorFactories;return r.release(),{fragment:i,viewBehaviorFactories:h,hostBehaviorFactories:a,targetOffset:u}}const at=document.createRange();class io{constructor(n,i){this.fragment=n,this.behaviors=i,this.source=null,this.context=null,this.firstChild=n.firstChild,this.lastChild=n.lastChild}appendTo(n){n.appendChild(this.fragment)}insertBefore(n){if(this.fragment.hasChildNodes())n.parentNode.insertBefore(this.fragment,n);else{const i=this.lastChild;if(n.previousSibling===i)return;const r=n.parentNode;let a=this.firstChild,l;for(;a!==i;)l=a.nextSibling,r.insertBefore(a,n),a=l;r.insertBefore(i,n)}}remove(){const n=this.fragment,i=this.lastChild;let r=this.firstChild,a;for(;r!==i;)a=r.nextSibling,n.appendChild(r),r=a;n.appendChild(i)}dispose(){const n=this.firstChild.parentNode,i=this.lastChild;let r=this.firstChild,a;for(;r!==i;)a=r.nextSibling,n.removeChild(r),r=a;n.removeChild(i);const l=this.behaviors,c=this.source;for(let u=0,h=l.length;u<h;++u)l[u].unbind(c)}bind(n,i){const r=this.behaviors;if(this.source!==n)if(this.source!==null){const a=this.source;this.source=n,this.context=i;for(let l=0,c=r.length;l<c;++l){const u=r[l];u.unbind(a),u.bind(n,i)}}else{this.source=n,this.context=i;for(let a=0,l=r.length;a<l;++a)r[a].bind(n,i)}}unbind(){if(this.source===null)return;const n=this.behaviors,i=this.source;for(let r=0,a=n.length;r<a;++r)n[r].unbind(i);this.source=null}static disposeContiguousBatch(n){if(n.length!==0){at.setStartBefore(n[0].firstChild),at.setEndAfter(n[n.length-1].lastChild),at.deleteContents();for(let i=0,r=n.length;i<r;++i){const a=n[i],l=a.behaviors,c=a.source;for(let u=0,h=l.length;u<h;++u)l[u].unbind(c)}}}}class so{constructor(n,i){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=n,this.directives=i}create(n){if(this.fragment===null){let d;const f=this.html;if(typeof f=="string"){d=document.createElement("template"),d.innerHTML=w.createHTML(f);const p=d.content.firstElementChild;p!==null&&p.tagName==="TEMPLATE"&&(d=p)}else d=f;const b=li(d,this.directives);this.fragment=b.fragment,this.viewBehaviorFactories=b.viewBehaviorFactories,this.hostBehaviorFactories=b.hostBehaviorFactories,this.targetOffset=b.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const i=this.fragment.cloneNode(!0),r=this.viewBehaviorFactories,a=new Array(this.behaviorCount),l=w.createTemplateWalker(i);let c=0,u=this.targetOffset,h=l.nextNode();for(let d=r.length;c<d;++c){const f=r[c],b=f.targetIndex;for(;h!==null;)if(u===b){a[c]=f.createBehavior(h);break}else h=l.nextNode(),u++}if(this.hasHostBehaviors){const d=this.hostBehaviorFactories;for(let f=0,b=d.length;f<b;++f,++c)a[c]=d[f].createBehavior(n)}return new io(i,a)}render(n,i,r){typeof i=="string"&&(i=document.getElementById(i)),r===void 0&&(r=i);const a=this.create(r);return a.bind(n,Be),a.appendTo(i),a}}const hi=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function S(s,...n){const i=[];let r="";for(let a=0,l=s.length-1;a<l;++a){const c=s[a];let u=n[a];if(r+=c,u instanceof so){const h=u;u=()=>h}if(typeof u=="function"&&(u=new it(u)),u instanceof eo){const h=hi.exec(c);h!==null&&(u.targetName=h[2])}u instanceof Re?(r+=u.createPlaceholder(i.length),i.push(u)):r+=u}return r+=s[s.length-1],new so(r,i)}function te(s,n){const i=typeof n=="function"?n:()=>n;return(r,a)=>s(r,a)?i(r,a):null}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=window,ct=Me.ShadowRoot&&(Me.ShadyCSS===void 0||Me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lt=Symbol(),ro=new WeakMap;class ao{constructor(n,i,r){if(this._$cssResult$=!0,r!==lt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=i}get styleSheet(){let n=this.o;const i=this.t;if(ct&&n===void 0){const r=i!==void 0&&i.length===1;r&&(n=ro.get(i)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),r&&ro.set(i,n))}return n}toString(){return this.cssText}}const di=s=>new ao(typeof s=="string"?s:s+"",void 0,lt),He=(s,...n)=>{const i=s.length===1?s[0]:n.reduce((r,a,l)=>r+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+s[l+1],s[0]);return new ao(i,s,lt)},ui=(s,n)=>{ct?s.adoptedStyleSheets=n.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):n.forEach(i=>{const r=document.createElement("style"),a=Me.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=i.cssText,s.appendChild(r)})},co=ct?s=>s:s=>s instanceof CSSStyleSheet?(n=>{let i="";for(const r of n.cssRules)i+=r.cssText;return di(i)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ht;const Ue=window,lo=Ue.trustedTypes,fi=lo?lo.emptyScript:"",ho=Ue.reactiveElementPolyfillSupport,dt={toAttribute(s,n){switch(n){case Boolean:s=s?fi:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,n){let i=s;switch(n){case Boolean:i=s!==null;break;case Number:i=s===null?null:Number(s);break;case Object:case Array:try{i=JSON.parse(s)}catch{i=null}}return i}},uo=(s,n)=>n!==s&&(n==n||s==s),ut={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:uo};class oe extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(n){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(n)}static get observedAttributes(){this.finalize();const n=[];return this.elementProperties.forEach((i,r)=>{const a=this._$Ep(r,i);a!==void 0&&(this._$Ev.set(a,r),n.push(a))}),n}static createProperty(n,i=ut){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(n,i),!i.noAccessor&&!this.prototype.hasOwnProperty(n)){const r=typeof n=="symbol"?Symbol():"__"+n,a=this.getPropertyDescriptor(n,r,i);a!==void 0&&Object.defineProperty(this.prototype,n,a)}}static getPropertyDescriptor(n,i,r){return{get(){return this[i]},set(a){const l=this[n];this[i]=a,this.requestUpdate(n,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)||ut}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const n=Object.getPrototypeOf(this);if(n.finalize(),n.h!==void 0&&(this.h=[...n.h]),this.elementProperties=new Map(n.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,r=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const a of r)this.createProperty(a,i[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(n){const i=[];if(Array.isArray(n)){const r=new Set(n.flat(1/0).reverse());for(const a of r)i.unshift(co(a))}else n!==void 0&&i.push(co(n));return i}static _$Ep(n,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof n=="string"?n.toLowerCase():void 0}u(){var n;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(n=this.constructor.h)===null||n===void 0||n.forEach(i=>i(this))}addController(n){var i,r;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(n),this.renderRoot!==void 0&&this.isConnected&&((r=n.hostConnected)===null||r===void 0||r.call(n))}removeController(n){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(n)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((n,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var n;const i=(n=this.shadowRoot)!==null&&n!==void 0?n:this.attachShadow(this.constructor.shadowRootOptions);return ui(i,this.constructor.elementStyles),i}connectedCallback(){var n;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$ES)===null||n===void 0||n.forEach(i=>{var r;return(r=i.hostConnected)===null||r===void 0?void 0:r.call(i)})}enableUpdating(n){}disconnectedCallback(){var n;(n=this._$ES)===null||n===void 0||n.forEach(i=>{var r;return(r=i.hostDisconnected)===null||r===void 0?void 0:r.call(i)})}attributeChangedCallback(n,i,r){this._$AK(n,r)}_$EO(n,i,r=ut){var a;const l=this.constructor._$Ep(n,r);if(l!==void 0&&r.reflect===!0){const c=(((a=r.converter)===null||a===void 0?void 0:a.toAttribute)!==void 0?r.converter:dt).toAttribute(i,r.type);this._$El=n,c==null?this.removeAttribute(l):this.setAttribute(l,c),this._$El=null}}_$AK(n,i){var r;const a=this.constructor,l=a._$Ev.get(n);if(l!==void 0&&this._$El!==l){const c=a.getPropertyOptions(l),u=typeof c.converter=="function"?{fromAttribute:c.converter}:((r=c.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?c.converter:dt;this._$El=l,this[l]=u.fromAttribute(i,c.type),this._$El=null}}requestUpdate(n,i,r){let a=!0;n!==void 0&&(((r=r||this.constructor.getPropertyOptions(n)).hasChanged||uo)(this[n],i)?(this._$AL.has(n)||this._$AL.set(n,i),r.reflect===!0&&this._$El!==n&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(n,r))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((a,l)=>this[l]=a),this._$Ei=void 0);let i=!1;const r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),(n=this._$ES)===null||n===void 0||n.forEach(a=>{var l;return(l=a.hostUpdate)===null||l===void 0?void 0:l.call(a)}),this.update(r)):this._$Ek()}catch(a){throw i=!1,this._$Ek(),a}i&&this._$AE(r)}willUpdate(n){}_$AE(n){var i;(i=this._$ES)===null||i===void 0||i.forEach(r=>{var a;return(a=r.hostUpdated)===null||a===void 0?void 0:a.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(n){return!0}update(n){this._$EC!==void 0&&(this._$EC.forEach((i,r)=>this._$EO(r,this[r],i)),this._$EC=void 0),this._$Ek()}updated(n){}firstUpdated(n){}}oe.finalized=!0,oe.elementProperties=new Map,oe.elementStyles=[],oe.shadowRootOptions={mode:"open"},ho?.({ReactiveElement:oe}),((ht=Ue.reactiveElementVersions)!==null&&ht!==void 0?ht:Ue.reactiveElementVersions=[]).push("1.4.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ft;const Le=window,ne=Le.trustedTypes,fo=ne?ne.createPolicy("lit-html",{createHTML:s=>s}):void 0,R=`lit$${(Math.random()+"").slice(9)}$`,bt="?"+R,bi=`<${bt}>`,ie=document,ve=(s="")=>ie.createComment(s),ye=s=>s===null||typeof s!="object"&&typeof s!="function",bo=Array.isArray,po=s=>bo(s)||typeof s?.[Symbol.iterator]=="function",we=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mo=/-->/g,go=/>/g,Z=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vo=/'/g,yo=/"/g,wo=/^(?:script|style|textarea|title)$/i,_o=s=>(n,...i)=>({_$litType$:s,strings:n,values:i}),Q=_o(1),nr=_o(2),se=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),$o=new WeakMap,re=ie.createTreeWalker(ie,129,null,!1),xo=(s,n)=>{const i=s.length-1,r=[];let a,l=n===2?"<svg>":"",c=we;for(let h=0;h<i;h++){const d=s[h];let f,b,p=-1,m=0;for(;m<d.length&&(c.lastIndex=m,b=c.exec(d),b!==null);)m=c.lastIndex,c===we?b[1]==="!--"?c=mo:b[1]!==void 0?c=go:b[2]!==void 0?(wo.test(b[2])&&(a=RegExp("</"+b[2],"g")),c=Z):b[3]!==void 0&&(c=Z):c===Z?b[0]===">"?(c=a??we,p=-1):b[1]===void 0?p=-2:(p=c.lastIndex-b[2].length,f=b[1],c=b[3]===void 0?Z:b[3]==='"'?yo:vo):c===yo||c===vo?c=Z:c===mo||c===go?c=we:(c=Z,a=void 0);const v=c===Z&&s[h+1].startsWith("/>")?" ":"";l+=c===we?d+bi:p>=0?(r.push(f),d.slice(0,p)+"$lit$"+d.slice(p)+R+v):d+R+(p===-2?(r.push(void 0),h):v)}const u=l+(s[i]||"<?>")+(n===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[fo!==void 0?fo.createHTML(u):u,r]};class _e{constructor({strings:n,_$litType$:i},r){let a;this.parts=[];let l=0,c=0;const u=n.length-1,h=this.parts,[d,f]=xo(n,i);if(this.el=_e.createElement(d,r),re.currentNode=this.el.content,i===2){const b=this.el.content,p=b.firstChild;p.remove(),b.append(...p.childNodes)}for(;(a=re.nextNode())!==null&&h.length<u;){if(a.nodeType===1){if(a.hasAttributes()){const b=[];for(const p of a.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(R)){const m=f[c++];if(b.push(p),m!==void 0){const v=a.getAttribute(m.toLowerCase()+"$lit$").split(R),E=/([.?@])?(.*)/.exec(m);h.push({type:1,index:l,name:E[2],strings:v,ctor:E[1]==="."?ko:E[1]==="?"?Ao:E[1]==="@"?Po:$e})}else h.push({type:6,index:l})}for(const p of b)a.removeAttribute(p)}if(wo.test(a.tagName)){const b=a.textContent.split(R),p=b.length-1;if(p>0){a.textContent=ne?ne.emptyScript:"";for(let m=0;m<p;m++)a.append(b[m],ve()),re.nextNode(),h.push({type:2,index:++l});a.append(b[p],ve())}}}else if(a.nodeType===8)if(a.data===bt)h.push({type:2,index:l});else{let b=-1;for(;(b=a.data.indexOf(R,b+1))!==-1;)h.push({type:7,index:l}),b+=R.length-1}l++}}static createElement(n,i){const r=ie.createElement("template");return r.innerHTML=n,r}}function X(s,n,i=s,r){var a,l,c,u;if(n===se)return n;let h=r!==void 0?(a=i._$Co)===null||a===void 0?void 0:a[r]:i._$Cl;const d=ye(n)?void 0:n._$litDirective$;return h?.constructor!==d&&((l=h?._$AO)===null||l===void 0||l.call(h,!1),d===void 0?h=void 0:(h=new d(s),h._$AT(s,i,r)),r!==void 0?((c=(u=i)._$Co)!==null&&c!==void 0?c:u._$Co=[])[r]=h:i._$Cl=h),h!==void 0&&(n=X(s,h._$AS(s,n.values),h,r)),n}class Co{constructor(n,i){this.u=[],this._$AN=void 0,this._$AD=n,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(n){var i;const{el:{content:r},parts:a}=this._$AD,l=((i=n?.creationScope)!==null&&i!==void 0?i:ie).importNode(r,!0);re.currentNode=l;let c=re.nextNode(),u=0,h=0,d=a[0];for(;d!==void 0;){if(u===d.index){let f;d.type===2?f=new ae(c,c.nextSibling,this,n):d.type===1?f=new d.ctor(c,d.name,d.strings,this,n):d.type===6&&(f=new So(c,this,n)),this.u.push(f),d=a[++h]}u!==d?.index&&(c=re.nextNode(),u++)}return l}p(n){let i=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(n,r,i),i+=r.strings.length-2):r._$AI(n[i])),i++}}class ae{constructor(n,i,r,a){var l;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=n,this._$AB=i,this._$AM=r,this.options=a,this._$Cm=(l=a?.isConnected)===null||l===void 0||l}get _$AU(){var n,i;return(i=(n=this._$AM)===null||n===void 0?void 0:n._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let n=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&n.nodeType===11&&(n=i.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,i=this){n=X(this,n,i),ye(n)?n===_||n==null||n===""?(this._$AH!==_&&this._$AR(),this._$AH=_):n!==this._$AH&&n!==se&&this.g(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):po(n)?this.k(n):this.g(n)}O(n,i=this._$AB){return this._$AA.parentNode.insertBefore(n,i)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}g(n){this._$AH!==_&&ye(this._$AH)?this._$AA.nextSibling.data=n:this.T(ie.createTextNode(n)),this._$AH=n}$(n){var i;const{values:r,_$litType$:a}=n,l=typeof a=="number"?this._$AC(n):(a.el===void 0&&(a.el=_e.createElement(a.h,this.options)),a);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===l)this._$AH.p(r);else{const c=new Co(l,this),u=c.v(this.options);c.p(r),this.T(u),this._$AH=c}}_$AC(n){let i=$o.get(n.strings);return i===void 0&&$o.set(n.strings,i=new _e(n)),i}k(n){bo(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,a=0;for(const l of n)a===i.length?i.push(r=new ae(this.O(ve()),this.O(ve()),this,this.options)):r=i[a],r._$AI(l),a++;a<i.length&&(this._$AR(r&&r._$AB.nextSibling,a),i.length=a)}_$AR(n=this._$AA.nextSibling,i){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,i);n&&n!==this._$AB;){const a=n.nextSibling;n.remove(),n=a}}setConnected(n){var i;this._$AM===void 0&&(this._$Cm=n,(i=this._$AP)===null||i===void 0||i.call(this,n))}}class $e{constructor(n,i,r,a,l){this.type=1,this._$AH=_,this._$AN=void 0,this.element=n,this.name=i,this._$AM=a,this.options=l,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(n,i=this,r,a){const l=this.strings;let c=!1;if(l===void 0)n=X(this,n,i,0),c=!ye(n)||n!==this._$AH&&n!==se,c&&(this._$AH=n);else{const u=n;let h,d;for(n=l[0],h=0;h<l.length-1;h++)d=X(this,u[r+h],i,h),d===se&&(d=this._$AH[h]),c||(c=!ye(d)||d!==this._$AH[h]),d===_?n=_:n!==_&&(n+=(d??"")+l[h+1]),this._$AH[h]=d}c&&!a&&this.j(n)}j(n){n===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}}class ko extends $e{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===_?void 0:n}}const pi=ne?ne.emptyScript:"";class Ao extends $e{constructor(){super(...arguments),this.type=4}j(n){n&&n!==_?this.element.setAttribute(this.name,pi):this.element.removeAttribute(this.name)}}class Po extends $e{constructor(n,i,r,a,l){super(n,i,r,a,l),this.type=5}_$AI(n,i=this){var r;if((n=(r=X(this,n,i,0))!==null&&r!==void 0?r:_)===se)return;const a=this._$AH,l=n===_&&a!==_||n.capture!==a.capture||n.once!==a.once||n.passive!==a.passive,c=n!==_&&(a===_||l);l&&this.element.removeEventListener(this.name,this,a),c&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){var i,r;typeof this._$AH=="function"?this._$AH.call((r=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&r!==void 0?r:this.element,n):this._$AH.handleEvent(n)}}class So{constructor(n,i,r){this.element=n,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(n){X(this,n)}}const ir={P:"$lit$",A:R,M:bt,C:1,L:xo,R:Co,D:po,V:X,I:ae,H:$e,N:Ao,U:Po,B:ko,F:So},To=Le.litHtmlPolyfillSupport;To?.(_e,ae),((ft=Le.litHtmlVersions)!==null&&ft!==void 0?ft:Le.litHtmlVersions=[]).push("2.4.0");const mi=(s,n,i)=>{var r,a;const l=(r=i?.renderBefore)!==null&&r!==void 0?r:n;let c=l._$litPart$;if(c===void 0){const u=(a=i?.renderBefore)!==null&&a!==void 0?a:null;l._$litPart$=c=new ae(n.insertBefore(ve(),u),u,void 0,i??{})}return c._$AI(s),c};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pt,mt;const sr=null;class M extends oe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n,i;const r=super.createRenderRoot();return(n=(i=this.renderOptions).renderBefore)!==null&&n!==void 0||(i.renderBefore=r.firstChild),r}update(n){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=mi(i,this.renderRoot,this.renderOptions)}connectedCallback(){var n;super.connectedCallback(),(n=this._$Do)===null||n===void 0||n.setConnected(!0)}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this._$Do)===null||n===void 0||n.setConnected(!1)}render(){return se}}M.finalized=!0,M._$litElement$=!0,(pt=globalThis.litElementHydrateSupport)===null||pt===void 0||pt.call(globalThis,{LitElement:M});const Oo=globalThis.litElementPolyfillSupport;Oo?.({LitElement:M});const rr={_$AK:(s,n,i)=>{s._$AK(n,i)},_$AL:s=>s._$AL};((mt=globalThis.litElementVersions)!==null&&mt!==void 0?mt:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=s=>n=>typeof n=="function"?((i,r)=>(customElements.define(i,r),r))(s,n):((i,r)=>{const{kind:a,elements:l}=r;return{kind:a,elements:l,finisher(c){customElements.define(i,c)}}})(s,n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=(s,n)=>n.kind==="method"&&n.descriptor&&!("value"in n.descriptor)?{...n,finisher(i){i.createProperty(n.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:n.key,initializer(){typeof n.initializer=="function"&&(this[n.key]=n.initializer.call(this))},finisher(i){i.createProperty(n.key,s)}};function T(s){return(n,i)=>i!==void 0?((r,a,l)=>{a.constructor.createProperty(l,r)})(s,n,i):gi(s,n)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gt;const vi=((gt=window.HTMLSlotElement)===null||gt===void 0?void 0:gt.prototype.assignedElements)!=null?(s,n)=>s.assignedElements(n):(s,n)=>s.assignedNodes(n).filter(i=>i.nodeType===Node.ELEMENT_NODE);function ar(s){const{slot:n,selector:i}=s??{};return o({descriptor:r=>({get(){var a;const l="slot"+(n?`[name=${n}]`:":not([name])"),c=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(l),u=c!=null?vi(c,s):[];return i?u.filter(h=>h.matches(i)):u},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function cr(s,n,i){let r,a=s;return typeof s=="object"?(a=s.slot,r=s):r={flatten:n},i?t({slot:a,flatten:n,selector:i}):e({descriptor:l=>({get(){var c,u;const h="slot"+(a?`[name=${a}]`:":not([name])"),d=(c=this.renderRoot)===null||c===void 0?void 0:c.querySelector(h);return(u=d?.assignedNodes(r))!==null&&u!==void 0?u:[]},enumerable:!0,configurable:!0})})}const Eo=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,No=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,yi=[["year",24*60*60*1e3*(365*2-1),24*60*60*1e3*365,"yr"],["month",24*60*60*1e3*365/12,24*60*60*1e3*365/12,"mo"],["week",24*60*60*1e3*7,24*60*60*1e3*7,"wk"],["day",24*60*60*1e3,24*60*60*1e3,"d"],["hour",60*60*1e3,60*60*1e3,"h"],["minute",60*1e3,60*1e3,"m"],["second",1e3,1e3,"s"]];let J;const Ce=new Map;let G,ce,Y;function lr(s){typeof s=="string"?s==="system"?G=void 0:G=[s]:G=s??void 0,ce=void 0,Y=void 0,Ce.clear(),J=void 0}function hr(s,n){const i=new Date(s.getTime());for(const[r,a]of Object.entries(n))if(!!a)switch(r){case"years":i.setFullYear(i.getFullYear()+a);break;case"months":i.setMonth(i.getMonth()+a);break;case"days":i.setDate(i.getDate()+a);break;case"hours":i.setHours(i.getHours()+a);break;case"minutes":i.setMinutes(i.getMinutes()+a);break;case"seconds":i.setSeconds(i.getSeconds()+a);break}return i}function wi(s,n){const i=(typeof s=="number"?s:s.getTime())-new Date().getTime();for(const[r,a,l,c]of yi){const u=Math.abs(i);if(u>=a||a===1e3)return n?(J==null&&(Y!=null?J=Y.resolvedOptions().locale:ce!=null?J=ce.resolvedOptions().locale:(Y=new Intl.RelativeTimeFormat(G,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),J=Y.resolvedOptions().locale)),J==="en"||J?.startsWith("en-")?`${Math.round(u/l)}${c}`:(Y==null&&(Y=new Intl.RelativeTimeFormat(G,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Y.format(Math.round(i/l),r))):(ce==null&&(ce=new Intl.RelativeTimeFormat(G,{localeMatcher:"best fit",numeric:"auto",style:"long"})),ce.format(Math.round(i/l),r))}return""}function _i(s,n,i,r=!0){n=n??void 0;const a=`${i??""}:${n}`;let l=Ce.get(a);if(l==null){const h=$i(n);let d;i==null?d=G:i==="system"?d=void 0:d=[i],l=new Intl.DateTimeFormat(d,h),r&&Ce.set(a,l)}if(n==null||No.test(n))return l.format(s);function c(h){const d=`${i??""}:time:${h}`;let f=Ce.get(d);if(f==null){const b={localeMatcher:"best fit",timeStyle:h};let p;i==null?p=G:i==="system"?p=void 0:p=[i],f=new Intl.DateTimeFormat(p,b),r&&Ce.set(d,f)}return f}const u=l.formatToParts(s);return n.replace(Eo,(h,d,f,b,p,m,v,E,ee,zo,ue,Wo,St,Qo,L)=>{if(d!=null)return d.substring(1,d.length-1);for(const Go in L){const Tt=L[Go];if(Tt==null)continue;const Ae=u.find(Yo=>Yo.type===Go);return Tt==="Do"&&Ae?.type==="day"?xi(Number(Ae.value)):Tt==="a"&&Ae?.type==="dayPeriod"?` ${(c("short").formatToParts(s).find(Os=>Os.type==="dayPeriod")??Ae)?.value??""}`:Ae?.value??""}return""})}function dr(s,n,i){const r=(typeof n=="number"?n:n.getTime())-(typeof s=="number"?s:s.getTime());switch(i){case"days":return Math.floor(r/(1e3*60*60*24));case"hours":return Math.floor(r/(1e3*60*60));case"minutes":return Math.floor(r/(1e3*60));case"seconds":return Math.floor(r/1e3);default:return r}}function $i(s){if(s==null)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const n=No.exec(s);if(n?.groups!=null){const{dateStyle:r,timeStyle:a}=n.groups;return{localeMatcher:"best fit",dateStyle:r||"full",timeStyle:a||void 0}}const i={localeMatcher:"best fit"};for(const{groups:r}of s.matchAll(Eo))if(r!=null)for(const a in r){const l=r[a];if(l!=null)switch(a){case"year":i.year=l.length===4?"numeric":"2-digit";break;case"month":switch(l.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric";break}break;case"day":l==="DD"?i.day="2-digit":i.day="numeric";break;case"weekday":switch(l.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow";break}break;case"hour":i.hour=l.length===2?"2-digit":"numeric",i.hour12=l==="hh"||l==="h";break;case"minute":i.minute=l.length===2?"2-digit":"numeric";break;case"second":i.second=l.length===2?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=l.length===2?"long":"short";break}}return i}const vt=["th","st","nd","rd"];function xi(s){const n=s%100;return`${s}${vt[(n-20)%10]??vt[n]??vt[0]}`}const Ci=()=>({toAttribute:s=>s.getTime(),fromAttribute:(s,n)=>new Date(parseInt(s,10))});var ki=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,yt=(s,n,i,r)=>{for(var a=r>1?void 0:r?Ai(n,i):n,l=s.length-1,c;l>=0;l--)(c=s[l])&&(a=(r?c(n,i,a):c(a))||a);return r&&a&&ki(n,i,a),a};let Ve=class extends M{constructor(){super(...arguments),this.format="MMMM Do, YYYY h:mma",this.date=new Date}render(){return Q`<time datetime="${this.date}" title="${_i(this.date,this.format??"MMMM Do, YYYY h:mma")}"
			>${wi(this.date)}</time
		>`}};yt([T()],Ve.prototype,"format",2),yt([T({converter:Ci(),reflect:!0})],Ve.prototype,"date",2),Ve=yt([xe("formatted-date")],Ve);var Pi=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,H=(s,n,i,r)=>{for(var a=r>1?void 0:r?Si(n,i):n,l=s.length-1,c;l>=0;l--)(c=s[l])&&(a=(r?c(n,i,a):c(a))||a);return r&&a&&Pi(n,i,a),a};const Ti=S`
	<template>
		<a class="avatar" href="${s=>s.email?`mailto:${s.email}`:"#"}">
			${te(s=>s.showAvatar,S`<img class="thumb" lazy src="${s=>s.avatarUrl}" alt="${s=>s.name}" />`)}
			${te(s=>!s.showAvatar,S`<code-icon icon="person" size="32"></code-icon>`)}
		</a>
		<a class="name" href="${s=>s.email?`mailto:${s.email}`:"#"}">${s=>s.name}</a>
		<span class="date"
			>${s=>s.actionLabel} <formatted-date date=${s=>s.date} format="${s=>s.dateFormat}"></formatted-date
		></span>
	</template>
`,Oi=q`
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
`;let D=class extends z{constructor(){super(...arguments),this.name="",this.email="",this.date="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.committer=!1,this.actionLabel="committed"}};H([g({mode:"reflect"})],D.prototype,"name",2),H([g({mode:"reflect"})],D.prototype,"email",2),H([g({mode:"reflect"})],D.prototype,"date",2),H([g({mode:"reflect"})],D.prototype,"avatarUrl",2),H([g({mode:"boolean"})],D.prototype,"showAvatar",2),H([g({mode:"reflect"})],D.prototype,"dateFormat",2),H([g({mode:"boolean"})],D.prototype,"committer",2),H([g({mode:"reflect"})],D.prototype,"actionLabel",2),D=H([W({name:"commit-identity",template:Ti,styles:Oi})],D);var Ei=Object.defineProperty,Ni=Object.getOwnPropertyDescriptor,le=(s,n,i,r)=>{for(var a=r>1?void 0:r?Ni(n,i):n,l=s.length-1,c;l>=0;l--)(c=s[l])&&(a=(r?c(n,i,a):c(a))||a);return r&&a&&Ei(n,i,a),a};let K=class extends M{constructor(){super(...arguments),this.url="",this.name="",this.date="",this.status="merged",this.key="#1999"}renderDate(){return this.date===""?_:Q`<formatted-date date="${this.date}"></formatted-date>`}render(){let s="issues";switch(this.status.toLowerCase()){case"":s="link";break;case"merged":s="git-merge";break;case"closed":s="pass";break}return Q`
			<span class="icon"><code-icon icon=${s}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.key} ${this.status===""?this.status:_} ${this.renderDate()}</p>
		`}};K.styles=He`
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
	`,le([T()],K.prototype,"url",2),le([T()],K.prototype,"name",2),le([T()],K.prototype,"date",2),le([T()],K.prototype,"status",2),le([T()],K.prototype,"key",2),K=le([xe("issue-pull-request")],K);var Bi=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,Bo=(s,n,i,r)=>{for(var a=r>1?void 0:r?Fi(n,i):n,l=s.length-1,c;l>=0;l--)(c=s[l])&&(a=(r?c(n,i,a):c(a))||a);return r&&a&&Bi(n,i,a),a};let je=class extends M{constructor(){super(...arguments),this.lines=1}render(){const s=`--skeleton-lines: ${this.lines};`;return Q`<div class="skeleton" style=${s}></div>`}};je.styles=He`
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
	`,Bo([T({type:Number})],je.prototype,"lines",2),je=Bo([xe("skeleton-loader")],je);var Di=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,qe=(s,n,i,r)=>{for(var a=r>1?void 0:r?Ii(n,i):n,l=s.length-1,c;l>=0;l--)(c=s[l])&&(a=(r?c(n,i,a):c(a))||a);return r&&a&&Di(n,i,a),a};let he=class extends M{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return Q`
			<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
				><span class="label">+${this.added}</span></span
			>
			<span class="stat modified" title="${this.modified} modified" aria-label="${this.modified} modified"
				><span class="label">~${this.modified}</span></span
			>
			<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
				><span class="label">-${this.removed}</span></span
			>
		`}};he.styles=He`
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
    `,qe([T({type:Number})],he.prototype,"added",2),qe([T({type:Number})],he.prototype,"modified",2),qe([T({type:Number})],he.prototype,"removed",2),he=qe([xe("commit-stats")],he);function ur(s){return s?function(n,i,r){return n.nodeType===1&&n.matches(s)}:function(n,i,r){return n.nodeType===1}}class Ri{constructor(n,i){this.target=n,this.options=i,this.source=null}bind(n){const i=this.options.property;this.shouldUpdate=C.getAccessors(n).some(r=>r.name===i),this.source=n,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Ke),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let n=this.getNodes();return this.options.filter!==void 0&&(n=n.filter(this.options.filter)),n}updateTarget(n){this.source[this.options.property]=n}}class Mi extends Ri{constructor(n,i){super(n,i)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Fo(s){return typeof s=="string"&&(s={property:s}),new to("fast-slotted",Mi,s)}var Hi=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,Do=(s,n,i,r)=>{for(var a=r>1?void 0:r?Ui(n,i):n,l=s.length-1,c;l>=0;l--)(c=s[l])&&(a=(r?c(n,i,a):c(a))||a);return r&&a&&Hi(n,i,a),a};const Li=S`<template role="navigation"><slot ${Fo("actionNodes")}></slot></template>`,Vi=q`
	:host {
		display: flex;
		align-items: center;
		user-select: none;
	}
`;let wt=class extends z{actionNodesChanged(s,n){if(this.actionNodesDisposer?.(),!n?.length)return;const i=this.handleKeydown.bind(this),r=n?.filter(a=>a.nodeType===1).map((a,l)=>(a.setAttribute("tabindex",l===0?"0":"-1"),a.addEventListener("keydown",i,!1),{dispose:()=>{a?.removeEventListener("keydown",i,!1)}}));this.actionNodesDisposer=()=>{r?.forEach(({dispose:a})=>a())}}disconnectedCallback(){this.actionNodesDisposer?.()}handleKeydown(s){if(!s.target||this.actionNodes==null||this.actionNodes.length<2)return;const n=s.target;let i=null;if(s.key==="ArrowLeft"){if(i=n.previousElementSibling,i==null){const r=this.actionNodes.filter(a=>a.nodeType===1);i=r[r.length-1]??null}}else s.key==="ArrowRight"&&(i=n.nextElementSibling,i==null&&(i=this.actionNodes.find(r=>r.nodeType===1)??null));i==null||i===n||(n.setAttribute("tabindex","-1"),i.setAttribute("tabindex","0"),i.focus())}};Do([Qt],wt.prototype,"actionNodes",2),wt=Do([W({name:"action-nav",template:Li,styles:Vi})],wt);var ji=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,ze=(s,n,i,r)=>{for(var a=r>1?void 0:r?qi(n,i):n,l=s.length-1,c;l>=0;l--)(c=s[l])&&(a=(r?c(n,i,a):c(a))||a);return r&&a&&ji(n,i,a),a};let de=class extends M{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?Q`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:Q`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return Q`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" class="content">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};de.styles=He`
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

		slot[name='actions']::slotted(*) {
			flex: none;
			margin-left: auto;
		}
	`,ze([T({type:Boolean,reflect:!0})],de.prototype,"collapsable",2),ze([T({type:Boolean,reflect:!0})],de.prototype,"expanded",2),ze([T({type:Boolean,reflect:!0})],de.prototype,"loading",2),de=ze([xe("webview-pane")],de);var zi=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,_t=(s,n,i,r)=>{for(var a=r>1?void 0:r?Wi(n,i):n,l=s.length-1,c;l>=0;l--)(c=s[l])&&(a=(r?c(n,i,a):c(a))||a);return r&&a&&zi(n,i,a),a};const Qi=S`
	<template class="${s=>s.mode}${s=>s.active?" active":""}" role="progressbar">
		<div class="progress-bar"></div>
	</template>
`,Gi=q`
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
`;let We=class extends z{constructor(){super(...arguments),this.mode="infinite",this.active=!1}};_t([g({mode:"reflect"})],We.prototype,"mode",2),_t([g({mode:"boolean"})],We.prototype,"active",2),We=_t([W({name:"progress-indicator",template:Qi,styles:Gi})],We);var Yi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,Io=(s,n,i,r)=>{for(var a=r>1?void 0:r?Ki(n,i):n,l=s.length-1,c;l>=0;l--)(c=s[l])&&(a=(r?c(n,i,a):c(a))||a);return r&&a&&Yi(n,i,a),a};const Zi=S`
	<template role="tree">
		<slot ${Fo("itemNodes")}></slot>
	</template>
`,Xi=q`
	::slotted(*) {
		box-sizing: inherit;
	}
`;let $t=class extends z{itemNodesChanged(s,n){if(this.itemNodesDisposer?.(),!n?.length)return;const i=n?.filter(r=>r.nodeType===1).map(r=>{const a=this.handleKeydown.bind(this),l=this.handleBeforeSelected.bind(this),c=this.handleSelected.bind(this);return r.addEventListener("keydown",a,!1),r.addEventListener("select",l,!1),r.addEventListener("selected",c,!1),{dispose:function(){r?.removeEventListener("keydown",a,!1),r?.removeEventListener("select",l,!1),r?.removeEventListener("selected",c,!1)}}});this.itemNodesDisposer=()=>{i?.forEach(({dispose:r})=>r())}}disconnectedCallback(){this.itemNodesDisposer?.()}handleBeforeSelected(s){if(!s.target)return;const n=s.target;this._lastSelected!=null&&this._lastSelected!==n&&this._lastSelected.deselect(),this._lastSelected=n}handleSelected(s){if(!s.target||!s.detail.branch)return;const n=s.target,i=n.getAttribute("level"),r=c=>parseInt(c.getAttribute("level")??"0",10),a=c=>{const u=r(c);let h=c.previousElementSibling;for(;h;){if(r(h)<u)return h;h=h.previousElementSibling}};let l=n.nextElementSibling;for(;l&&l.getAttribute("level")!==i;){const c=a(l);l.setAttribute("parentexpanded",c?.expanded===!1?"false":"true"),l.setAttribute("expanded",s.detail.expanded?"true":"false"),l=l.nextElementSibling}}handleKeydown(s){if(!s.target)return;const n=s.target;s.key==="Enter"||s.key===" "?n.select(s.key==="Enter"?{preserveFocus:!1}:void 0):s.key==="ArrowUp"?n.previousElementSibling?.focus():s.key==="ArrowDown"&&n.nextElementSibling?.focus()}};Io([Qt],$t.prototype,"itemNodes",2),$t=Io([W({name:"list-container",template:Zi,styles:Xi})],$t);function B(s,n,i){return{index:s,removed:n,addedCount:i}}const Ro=0,Mo=1,xt=2,Ct=3;function Ji(s,n,i,r,a,l){const c=l-a+1,u=i-n+1,h=new Array(c);let d,f;for(let b=0;b<c;++b)h[b]=new Array(u),h[b][0]=b;for(let b=0;b<u;++b)h[0][b]=b;for(let b=1;b<c;++b)for(let p=1;p<u;++p)s[n+p-1]===r[a+b-1]?h[b][p]=h[b-1][p-1]:(d=h[b-1][p]+1,f=h[b][p-1]+1,h[b][p]=d<f?d:f);return h}function es(s){let n=s.length-1,i=s[0].length-1,r=s[n][i];const a=[];for(;n>0||i>0;){if(n===0){a.push(xt),i--;continue}if(i===0){a.push(Ct),n--;continue}const l=s[n-1][i-1],c=s[n-1][i],u=s[n][i-1];let h;c<u?h=c<l?c:l:h=u<l?u:l,h===l?(l===r?a.push(Ro):(a.push(Mo),r=l),n--,i--):h===c?(a.push(Ct),n--,r=c):(a.push(xt),i--,r=u)}return a.reverse(),a}function ts(s,n,i){for(let r=0;r<i;++r)if(s[r]!==n[r])return r;return i}function os(s,n,i){let r=s.length,a=n.length,l=0;for(;l<i&&s[--r]===n[--a];)l++;return l}function ns(s,n,i,r){return n<i||r<s?-1:n===i||r===s?0:s<i?n<r?n-i:r-i:r<n?r-s:n-s}function Ho(s,n,i,r,a,l){let c=0,u=0;const h=Math.min(i-n,l-a);if(n===0&&a===0&&(c=ts(s,r,h)),i===s.length&&l===r.length&&(u=os(s,r,h-c)),n+=c,a+=c,i-=u,l-=u,i-n===0&&l-a===0)return Ke;if(n===i){const v=B(n,[],0);for(;a<l;)v.removed.push(r[a++]);return[v]}else if(a===l)return[B(n,[],i-n)];const d=es(Ji(s,n,i,r,a,l)),f=[];let b,p=n,m=a;for(let v=0;v<d.length;++v)switch(d[v]){case Ro:b!==void 0&&(f.push(b),b=void 0),p++,m++;break;case Mo:b===void 0&&(b=B(p,[],0)),b.addedCount++,p++,b.removed.push(r[m]),m++;break;case xt:b===void 0&&(b=B(p,[],0)),b.addedCount++,p++;break;case Ct:b===void 0&&(b=B(p,[],0)),b.removed.push(r[m]),m++;break}return b!==void 0&&f.push(b),f}const Uo=Array.prototype.push;function is(s,n,i,r){const a=B(n,i,r);let l=!1,c=0;for(let u=0;u<s.length;u++){const h=s[u];if(h.index+=c,l)continue;const d=ns(a.index,a.index+a.removed.length,h.index,h.index+h.addedCount);if(d>=0){s.splice(u,1),u--,c-=h.addedCount-h.removed.length,a.addedCount+=h.addedCount-d;const f=a.removed.length+h.removed.length-d;if(!a.addedCount&&!f)l=!0;else{let b=h.removed;if(a.index<h.index){const p=a.removed.slice(0,h.index-a.index);Uo.apply(p,b),b=p}if(a.index+a.removed.length>h.index+h.addedCount){const p=a.removed.slice(h.index+h.addedCount-a.index);Uo.apply(b,p)}a.removed=b,h.index<a.index&&(a.index=h.index)}}else if(a.index<h.index){l=!0,s.splice(u,0,a),u++;const f=a.addedCount-a.removed.length;h.index+=f,c+=f}}l||s.push(a)}function ss(s){const n=[];for(let i=0,r=s.length;i<r;i++){const a=s[i];is(n,a.index,a.removed,a.addedCount)}return n}function rs(s,n){let i=[];const r=ss(n);for(let a=0,l=r.length;a<l;++a){const c=r[a];if(c.addedCount===1&&c.removed.length===1){c.removed[0]!==s[c.index]&&i.push(c);continue}i=i.concat(Ho(s,c.index,c.index+c.addedCount,c.removed,0,c.removed.length))}return i}let Lo=!1;function kt(s,n){let i=s.index;const r=n.length;return i>r?i=r-s.addedCount:i<0&&(i=r+s.removed.length+i-s.addedCount),i<0&&(i=0),s.index=i,s}class as extends Ee{constructor(n){super(n),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(n,"$fastController",{value:this,enumerable:!1})}subscribe(n){this.flush(),super.subscribe(n)}addSplice(n){this.splices===void 0?this.splices=[n]:this.splices.push(n),this.needsQueue&&(this.needsQueue=!1,w.queueUpdate(this))}reset(n){this.oldCollection=n,this.needsQueue&&(this.needsQueue=!1,w.queueUpdate(this))}flush(){const n=this.splices,i=this.oldCollection;if(n===void 0&&i===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const r=i===void 0?rs(this.source,n):Ho(this.source,0,this.source.length,i,0,i.length);this.notify(r)}}function cs(){if(Lo)return;Lo=!0,C.setArrayObserverFactory(h=>new as(h));const s=Array.prototype;if(s.$fastPatch)return;Reflect.defineProperty(s,"$fastPatch",{value:1,enumerable:!1});const n=s.pop,i=s.push,r=s.reverse,a=s.shift,l=s.sort,c=s.splice,u=s.unshift;s.pop=function(){const h=this.length>0,d=n.apply(this,arguments),f=this.$fastController;return f!==void 0&&h&&f.addSplice(B(this.length,[d],0)),d},s.push=function(){const h=i.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(kt(B(this.length-arguments.length,[],arguments.length),this)),h},s.reverse=function(){let h;const d=this.$fastController;d!==void 0&&(d.flush(),h=this.slice());const f=r.apply(this,arguments);return d!==void 0&&d.reset(h),f},s.shift=function(){const h=this.length>0,d=a.apply(this,arguments),f=this.$fastController;return f!==void 0&&h&&f.addSplice(B(0,[d],0)),d},s.sort=function(){let h;const d=this.$fastController;d!==void 0&&(d.flush(),h=this.slice());const f=l.apply(this,arguments);return d!==void 0&&d.reset(h),f},s.splice=function(){const h=c.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(kt(B(+arguments[0],h,arguments.length>2?arguments.length-2:0),this)),h},s.unshift=function(){const h=u.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(kt(B(0,[],arguments.length),this)),h}}const Vo=Object.freeze({positioning:!1,recycle:!0});function ls(s,n,i,r){s.bind(n[i],r)}function hs(s,n,i,r){const a=Object.create(r);a.index=i,a.length=n.length,s.bind(n[i],a)}class ds{constructor(n,i,r,a,l,c){this.location=n,this.itemsBinding=i,this.templateBinding=a,this.options=c,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=ls,this.itemsBindingObserver=C.binding(i,this,r),this.templateBindingObserver=C.binding(a,this,l),c.positioning&&(this.bindView=hs)}bind(n,i){this.source=n,this.originalContext=i,this.childContext=Object.create(i),this.childContext.parent=n,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(n,this.originalContext),this.template=this.templateBindingObserver.observe(n,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(n,i){n===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):n===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(i)}observeItems(n=!1){if(!this.items){this.items=Ke;return}const i=this.itemsObserver,r=this.itemsObserver=C.getNotifier(this.items),a=i!==r;a&&i!==null&&i.unsubscribe(this),(a||n)&&r.subscribe(this)}updateViews(n){const i=this.childContext,r=this.views,a=this.bindView,l=this.items,c=this.template,u=this.options.recycle,h=[];let d=0,f=0;for(let b=0,p=n.length;b<p;++b){const m=n[b],v=m.removed;let E=0,ee=m.index;const zo=ee+m.addedCount,ue=r.splice(m.index,v.length),Wo=f=h.length+ue.length;for(;ee<zo;++ee){const St=r[ee],Qo=St?St.firstChild:this.location;let L;u&&f>0?(E<=Wo&&ue.length>0?(L=ue[E],E++):(L=h[d],d++),f--):L=c.create(),r.splice(ee,0,L),a(L,l,ee,i),L.insertBefore(Qo)}ue[E]&&h.push(...ue.slice(E))}for(let b=d,p=h.length;b<p;++b)h[b].dispose();if(this.options.positioning)for(let b=0,p=r.length;b<p;++b){const m=r[b].context;m.length=p,m.index=b}}refreshAllViews(n=!1){const i=this.items,r=this.childContext,a=this.template,l=this.location,c=this.bindView;let u=i.length,h=this.views,d=h.length;if((u===0||n||!this.options.recycle)&&(io.disposeContiguousBatch(h),d=0),d===0){this.views=h=new Array(u);for(let f=0;f<u;++f){const b=a.create();c(b,i,f,r),h[f]=b,b.insertBefore(l)}}else{let f=0;for(;f<u;++f)if(f<d){const p=h[f];c(p,i,f,r)}else{const p=a.create();c(p,i,f,r),h.push(p),p.insertBefore(l)}const b=h.splice(f,d-f);for(f=0,u=b.length;f<u;++f)b[f].dispose()}}unbindAllViews(){const n=this.views;for(let i=0,r=n.length;i<r;++i)n[i].unbind()}}class us extends Re{constructor(n,i,r){super(),this.itemsBinding=n,this.templateBinding=i,this.options=r,this.createPlaceholder=w.createBlockPlaceholder,cs(),this.isItemsBindingVolatile=C.isVolatileBinding(n),this.isTemplateBindingVolatile=C.isVolatileBinding(i)}createBehavior(n){return new ds(n,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function fs(s,n,i=Vo){const r=typeof n=="function"?n:()=>n;return new us(s,r,Object.assign(Object.assign({},Vo),i))}const jo={toView:function(s){return s.toString()},fromView:function(s){return parseInt(s,10)}};var bs=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,U=(s,n,i,r)=>{for(var a=r>1?void 0:r?ps(n,i):n,l=s.length-1,c;l>=0;l--)(c=s[l])&&(a=(r?c(n,i,a):c(a))||a);return r&&a&&bs(n,i,a),a};const ms=S`
	<template
		role="treeitem"
		aria-expanded="${s=>s.expanded===!0?"true":"false"}"
		aria-hidden="${s=>s.isHidden}"
	>
		<button id="item" class="item" type="button" @click="${(s,n)=>s.onItemClick(n.event)}">
			${fs(s=>s.treeLeaves,S`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`)}
			${te(s=>s.branch,S`<span class="node"
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
`,gs=q`
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

	:host([active]) {
		color: var(--vscode-list-inactiveSelectionForeground);
		background-color: var(--vscode-list-inactiveSelectionBackground);
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
		min-width: 0;
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
		border-left: 1px solid transparent;
		top: 50%;
		transform: translate(-50%, -50%);
		left: 0.8rem;
		width: 0.1rem;
		transition: border-color 0.1s linear;
		opacity: 0.4;
	}

	:host-context(.indentGuides-always) .node--connector::before,
	:host-context(.indentGuides-onHover:focus-within) .node--connector::before,
	:host-context(.indentGuides-onHover:hover) .node--connector::before {
		border-color: var(--vscode-tree-indentGuidesStroke);
	}

	.text {
		overflow: hidden;
		white-space: nowrap;
		text-align: left;
		text-overflow: ellipsis;
		flex: 1;
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
`;let I=class extends z{constructor(){super(...arguments),this.tree=!1,this.branch=!1,this.expanded=!0,this.parentexpanded=!0,this.level=1,this.active=!1}get treeLeaves(){const s=this.level-1;return s<1?[]:Array.from({length:s},(n,i)=>i+1)}get isHidden(){return this.parentexpanded===!1||!this.branch&&!this.expanded?"true":"false"}onItemClick(s){this.select()}select(s,n=!1){this.$emit("select"),this.branch&&(this.expanded=!this.expanded),this.active=!0,n||window.requestAnimationFrame(()=>{this.$emit("selected",{tree:this.tree,branch:this.branch,expanded:this.expanded,level:this.level})})}deselect(){this.active=!1}focus(s){this.shadowRoot?.getElementById("item")?.focus(s)}};U([g({mode:"boolean"})],I.prototype,"tree",2),U([g({mode:"boolean"})],I.prototype,"branch",2),U([g({mode:"boolean"})],I.prototype,"expanded",2),U([g({mode:"boolean"})],I.prototype,"parentexpanded",2),U([g({converter:jo})],I.prototype,"level",2),U([g({mode:"boolean"})],I.prototype,"active",2),U([Ne],I.prototype,"treeLeaves",1),U([Ne],I.prototype,"isHidden",1),I=U([W({name:"list-item",template:ms,styles:gs})],I);class vs{constructor(n,i){this.target=n,this.propertyName=i}bind(n){n[this.propertyName]=this.target}unbind(){}}function ys(s){return new to("fast-ref",vs,s)}var ws=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,O=(s,n,i,r)=>{for(var a=r>1?void 0:r?_s(n,i):n,l=s.length-1,c;l>=0;l--)(c=s[l])&&(a=(r?c(n,i,a):c(a))||a);return r&&a&&ws(n,i,a),a};const $s=S`
	<list-item
		${ys("base")}
		tree="${s=>s.tree}"
		level="${s=>s.level}"
		active="${s=>s.active}"
		expanded="${s=>s.expanded}"
		parentexpanded="${s=>s.parentexpanded}"
		@selected="${(s,n)=>s.onComparePrevious(n.event)}"
	>
		<img slot="icon" src="${s=>s.icon}" title="${s=>s.statusName}" alt="${s=>s.statusName}" />
		${s=>s.fileName}
		${te(s=>!s.tree,S`<span slot="description">${s=>s.filePath}</span>`)}
		<span slot="actions">
			<a
				class="change-list__action"
				@click="${(s,n)=>s.onOpenFile(n.event)}"
				href="#"
				title="Open file"
				aria-label="Open file"
				><code-icon icon="go-to-file"></code-icon
			></a>
			${te(s=>!s.uncommitted,S`
					<a
						class="change-list__action"
						@click="${(s,n)=>s.onCompareWorking(n.event)}"
						href="#"
						title="Open Changes with Working File"
						aria-label="Open Changes with Working File"
						><code-icon icon="git-compare"></code-icon
					></a>
					${te(s=>!s.stash,S`<a
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
`,xs=q`
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
`,Cs={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};let P=class extends z{constructor(){super(...arguments),this.tree=!1,this.expanded=!0,this.parentexpanded=!0,this.level=1,this.active=!1,this.stash=!1,this.uncommitted=!1,this.icon="",this.path="",this.repo="",this.status=""}select(s){this.base?.select(s)}deselect(){this.base?.deselect()}focus(s){this.base?.focus(s)}get isHidden(){return this.base?.isHidden??"false"}get pathIndex(){return this.path.lastIndexOf("/")}get fileName(){return this.pathIndex>-1?this.path.substring(this.pathIndex+1):this.path}get filePath(){return!this.tree&&this.pathIndex>-1?this.path.substring(0,this.pathIndex):""}get statusName(){return this.status!==""?Cs[this.status]:""}getEventDetail(s){return{path:this.path,repoPath:this.repo,showOptions:s}}onOpenFile(s){s.preventDefault(),this.$emit("file-open",this.getEventDetail())}onOpenFileOnRemote(s){s.preventDefault(),this.$emit("file-open-on-remote",this.getEventDetail())}onCompareWorking(s){s.preventDefault(),this.$emit("file-compare-working",this.getEventDetail())}onComparePrevious(s,n){s?.preventDefault(),this.$emit("file-compare-previous",this.getEventDetail(n))}onMoreActions(s){s.preventDefault(),this.$emit("file-more-actions",this.getEventDetail())}};O([g({mode:"boolean"})],P.prototype,"tree",2),O([g({mode:"boolean"})],P.prototype,"expanded",2),O([g({mode:"boolean"})],P.prototype,"parentexpanded",2),O([g({converter:jo})],P.prototype,"level",2),O([g({mode:"boolean"})],P.prototype,"active",2),O([g({mode:"boolean"})],P.prototype,"stash",2),O([g({mode:"boolean"})],P.prototype,"uncommitted",2),O([g],P.prototype,"icon",2),O([g],P.prototype,"path",2),O([g],P.prototype,"repo",2),O([g],P.prototype,"status",2),O([Ne],P.prototype,"fileName",1),O([Ne],P.prototype,"filePath",1),P=O([W({name:"file-change-list-item",template:$s,styles:xs})],P);var ks=Object.defineProperty,As=Object.getOwnPropertyDescriptor,Qe=(s,n,i,r)=>{for(var a=r>1?void 0:r?As(n,i):n,l=s.length-1,c;l>=0;l--)(c=s[l])&&(a=(r?c(n,i,a):c(a))||a);return r&&a&&ks(n,i,a),a};const Ps=S`<a
	role="${s=>s.href?null:"button"}"
	type="${s=>s.href?null:"button"}"
	aria-label="${s=>s.label}"
	title="${s=>s.label}"
	><code-icon icon="${s=>s.icon}"></code-icon
></a>`,Ss=q`
	:host {
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		border-radius: 0.5rem;
		color: inherit;
		padding: 0.2rem;
		vertical-align: text-bottom;
		text-decoration: none;
		cursor: pointer;
	}
	:host(:focus) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	:host(:hover) {
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	:host(:active) {
		background-color: var(--vscode-toolbar-activeBackground);
	}
`;let ke=class extends z{constructor(){super(...arguments),this.label="",this.icon=""}};Qe([g],ke.prototype,"href",2),Qe([g],ke.prototype,"label",2),Qe([g],ke.prototype,"icon",2),ke=Qe([W({name:"action-item",template:Ps,styles:Ss})],ke);const At="0000000000000000000000000000000000000000";class Ts extends Rn{constructor(){super("CommitDetailsApp")}onInitialize(){this.log(`${this.appName}.onInitialize`),this.renderContent()}onBind(){return[$.on("file-change-list-item","file-open-on-remote",i=>this.onOpenFileOnRemote(i.detail)),$.on("file-change-list-item","file-open",i=>this.onOpenFile(i.detail)),$.on("file-change-list-item","file-compare-working",i=>this.onCompareFileWithWorking(i.detail)),$.on("file-change-list-item","file-compare-previous",i=>this.onCompareFileWithPrevious(i.detail)),$.on("file-change-list-item","file-more-actions",i=>this.onFileMoreActions(i.detail)),$.on('[data-action="dismiss-banner"]',"click",i=>this.onDismissBanner(i)),$.on('[data-action="commit-actions"]',"click",i=>this.onCommitActions(i)),$.on('[data-action="pick-commit"]',"click",i=>this.onPickCommit(i)),$.on('[data-action="search-commit"]',"click",i=>this.onSearchCommit(i)),$.on('[data-action="autolink-settings"]',"click",i=>this.onAutolinkSettings(i)),$.on("[data-switch-value]","click",i=>this.onToggleFilesLayout(i)),$.on('[data-action="pin"]',"click",i=>this.onTogglePin(i)),$.on('[data-region="rich-pane"]',"expanded-change",i=>this.onExpandedChange(i.detail))]}onMessageReceived(n){const i=n.data;switch(this.log(`${this.appName}.onMessageReceived(${i.id}): name=${i.method}`),i.method){case Ft.method:Nt(Ft,i,r=>{r.state,this.state=r.state,this.renderContent()});break;default:super.onMessageReceived?.(n)}}onDismissBanner(n){const i=this.state.preferences?.dismissed??[];if(i.includes("sidebar"))return;i.push("sidebar"),this.state.preferences={...this.state.preferences,dismissed:i};const r=n.target?.closest('[data-region="sidebar-banner"]')??void 0;this.renderBanner(this.state,r),this.sendCommand(Ge,{dismissed:i})}onToggleFilesLayout(n){const i=n.target?.getAttribute("data-switch-value")??void 0;if(i===this.state.preferences?.files?.layout)return;const r={...this.state.preferences?.files,layout:i??V.Auto,compact:this.state.preferences?.files?.compact??!0,threshold:this.state.preferences?.files?.threshold??5};this.state.preferences={...this.state.preferences,files:r},this.renderFiles(this.state),this.sendCommand(Ge,{files:r})}onExpandedChange(n){this.state.preferences={...this.state.preferences,autolinksExpanded:n.expanded},this.sendCommand(Ge,{autolinksExpanded:n.expanded})}onTogglePin(n){n.preventDefault(),this.sendCommand(En,{pin:!this.state.pinned})}onAutolinkSettings(n){n.preventDefault(),this.sendCommand(On,void 0)}onSearchCommit(n){this.sendCommand(Tn,void 0)}onPickCommit(n){this.sendCommand(Sn,void 0)}onOpenFileOnRemote(n){this.sendCommand(kn,n)}onOpenFile(n){this.sendCommand(Cn,n)}onCompareFileWithWorking(n){this.sendCommand(An,n)}onCompareFileWithPrevious(n){this.sendCommand(Pn,n)}onFileMoreActions(n){this.sendCommand(xn,n)}onCommitActions(n){if(n.preventDefault(),this.state.selected===void 0){n.stopPropagation();return}const i=n.target?.getAttribute("data-action-type");i!=null&&this.sendCommand($n,{action:i,alt:n.altKey})}renderCommit(n){const i=n.selected!==void 0,r=document.getElementById("empty"),a=document.getElementById("main");return r?.setAttribute("aria-hidden",i?"true":"false"),a?.setAttribute("aria-hidden",i?"false":"true"),i}renderRichContent(){!this.renderCommit(this.state)||(this.renderMessage(this.state),this.renderPullRequestAndAutolinks(this.state))}renderContent(){!this.renderCommit(this.state)||(this.renderBanner(this.state),this.renderActions(this.state),this.renderPin(this.state),this.renderSha(this.state),this.renderMessage(this.state),this.renderAuthor(this.state),this.renderStats(this.state),this.renderFiles(this.state),this.renderPullRequestAndAutolinks(this.state))}renderBanner(n,i){!n.preferences?.dismissed?.includes("sidebar")||(i||(i=document.querySelector('[data-region="sidebar-banner"]')??void 0),i?.remove())}renderActions(n){const i=n.selected?.sha===At,r=i.toString();for(const a of document.querySelectorAll('[data-action-type="sha"],[data-action-type="more"]'))a.setAttribute("aria-hidden",r);document.querySelector('[data-action-type="scm"]')?.setAttribute("aria-hidden",(!i).toString())}renderPin(n){const i=document.querySelector('[data-action="pin"]');if(i==null)return;const r=n.pinned?"Unpin this Commit":"Pin this Commit";i.setAttribute("aria-label",r),i.setAttribute("title",r),i.classList.toggle("is-active",n.pinned),i.querySelector('[data-region="commit-pin"]')?.setAttribute("icon",n.pinned?"gl-pinned-filled":"pin")}renderSha(n){const i=[...document.querySelectorAll('[data-region="shortsha"]')];if(i.length!==0)for(const r of i)r.textContent=n.selected.shortSha}renderChoices(){const n=document.querySelector('[data-region="choices"]');n!=null&&(n.setAttribute("aria-hidden","true"),n.innerHTML="")}renderStats(n){const i=document.querySelector('[data-region="stats"]');if(i!=null){if(n.selected.stats?.changedFiles==null){i.innerHTML="";return}if(typeof n.selected.stats.changedFiles=="number")i.innerHTML=`
			<commit-stats added="?" modified="${n.selected.stats.changedFiles}" removed="?"></commit-stats>
		`;else{const{added:r,deleted:a,changed:l}=n.selected.stats.changedFiles;i.innerHTML=`
			<commit-stats added="${r}" modified="${l}" removed="${a}"></commit-stats>
		`}}}renderFiles(n){const i=document.querySelector('[data-region="files"]');if(i==null)return;const r=n.preferences?.files?.layout??V.Auto,a=document.querySelector("[data-switch-value]");if(a)switch(r){case V.Auto:a.setAttribute("data-switch-value","list"),a.setAttribute("icon","list-flat"),a.setAttribute("label","View as List");break;case V.List:a.setAttribute("data-switch-value","tree"),a.setAttribute("icon","list-tree"),a.setAttribute("label","View as Tree");break;case V.Tree:a.setAttribute("data-switch-value","auto"),a.setAttribute("icon","gl-list-auto"),a.setAttribute("label","View as Auto");break}if(!n.selected.files?.length){i.innerHTML="";return}let l;r===V.Auto?l=n.selected.files.length>(n.preferences?.files?.threshold??5):l=r===V.Tree;const c=n.selected.isStash?"stash ":n.selected.sha===At?"uncommitted ":"";if(l){const u=yn(n.selected.files,d=>d.path.split("/"),(...d)=>d.join("/"),this.state.preferences?.files?.compact??!0),h=qo(u);i.innerHTML=`
					<li class="change-list__item">
						<list-container class="indentGuides-${n.indentGuides}">
							${h.map(({level:d,item:f})=>f.name===""?"":f.value==null?`
											<list-item level="${d}" tree branch>
												<code-icon slot="icon" icon="folder" title="Directory" aria-label="Directory"></code-icon>
												${f.name}
											</list-item>
										`:`
										<file-change-list-item
											tree
											level="${d}"
											${c}
											path="${f.value.path}"
											repo="${f.value.repoPath}"
											icon="${f.value.icon.dark}"
											status="${f.value.status}"
										></file-change-list-item>
									`).join("")}
						</list-container>
					</li>`}else i.innerHTML=`
				<li class="change-list__item">
					<list-container>
						${n.selected.files.map(u=>`
										<file-change-list-item
											${c}
											path="${u.path}"
											repo="${u.repoPath}"
											icon="${u.icon.dark}"
											status="${u.status}"
										></file-change-list-item>
									`).join("")}
					</list-container>
				</li>`;i.setAttribute("aria-hidden","false")}renderAuthor(n){const i=document.querySelector('[data-region="author"]');i!=null&&(n.selected?.isStash===!0?(i.innerHTML=`
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
					avatarUrl="${n.selected.author.avatar??""}"
					showAvatar="${n.preferences?.avatars??!0}"
					actionLabel="${n.selected.sha===At?"modified":"committed"}"
				></commit-identity>
			`,i.setAttribute("aria-hidden","false")):(i.innerHTML="",i.setAttribute("aria-hidden","true")))}renderTitle(n){const i=document.querySelector('[data-region="commit-title"]');i!=null&&(i.innerHTML=n.selected.shortSha)}renderMessage(n){const i=document.querySelector('[data-region="message"]');if(i==null)return;const r=n.selected.message.indexOf(_n);r===-1?i.innerHTML=`<strong>${n.selected.message}</strong>`:i.innerHTML=`<strong>${n.selected.message.substring(0,r)}</strong><br />${n.selected.message.substring(r+3)}`}renderPullRequestAndAutolinks(n){const i=document.querySelector('[data-region="rich-pane"]');if(i==null)return;i.expanded=this.state.preferences?.autolinksExpanded??!0,i.loading=!n.includeRichContent;const r=i.querySelector('[data-region="rich-info"]'),a=i.querySelector('[data-region="autolinks"]'),l=n.autolinkedIssues?.length??0;let c=n.selected.autolinks?.length??0,u=c;if(n.pullRequest!=null||l||c){let d=n.selected.autolinks;d?.length&&l&&(d=d.filter(f=>!n.autolinkedIssues?.some(b=>b.url===f.url))),a?.setAttribute("aria-hidden","false"),r?.setAttribute("aria-hidden","true"),this.renderAutolinks({...n,selected:{...n.selected,autolinks:d}}),this.renderPullRequest(n),this.renderIssues(n),c=d?.length??0,u=(n.pullRequest!=null?1:0)+l+c}else a?.setAttribute("aria-hidden","true"),r?.setAttribute("aria-hidden","false");const h=i.querySelector('[data-region="autolink-count"]');h!=null&&(h.innerHTML=`${n.includeRichContent||c?`${u} found `:""}${n.includeRichContent?"":"\u2026"}`)}renderAutolinks(n){const i=document.querySelector('[data-region="custom-autolinks"]');i!=null&&(n.selected.autolinks?.length?(i.innerHTML=n.selected.autolinks.map(r=>{let a=r.description??r.title;return a===void 0&&(a=`Custom Autolink ${r.prefix}${r.id}`),`
						<issue-pull-request
							name="${a?Pt(a):""}"
							url="${r.url}"
							key="${r.prefix}${r.id}"
							status=""
						></issue-pull-request>
					`}).join(""),i.setAttribute("aria-hidden","false")):(i.innerHTML="",i.setAttribute("aria-hidden","true")))}renderPullRequest(n){const i=document.querySelector('[data-region="pull-request"]');i!=null&&(n.pullRequest!=null?(i.innerHTML=`
				<issue-pull-request
					name="${Pt(n.pullRequest.title)}"
					url="${n.pullRequest.url}"
					key="#${n.pullRequest.id}"
					status="${n.pullRequest.state}"
					date=${n.pullRequest.date}
					dateFormat="${n.dateFormat}"
				></issue-pull-request>
			`,i.setAttribute("aria-hidden","false")):(i.innerHTML="",i.setAttribute("aria-hidden","true")))}renderIssues(n){const i=document.querySelector('[data-region="issue"]');i!=null&&(n.autolinkedIssues?.length?(i.innerHTML=n.autolinkedIssues.map(r=>`
						<issue-pull-request
							name="${Pt(r.title)}"
							url="${r.url}"
							key="${r.id}"
							status="${r.closed?"closed":"opened"}"
							date="${r.closed?r.closedDate:r.date}"
						></issue-pull-request>
					`).join(""),i.setAttribute("aria-hidden","false")):(i.innerHTML="",i.setAttribute("aria-hidden","true")))}}function fr(s){}function qo(s,n=0){const i=[];if(s==null)return i;if(i.push({level:n,item:s}),s.children!=null){const r=Array.from(s.children.values());r.sort((a,l)=>!a.value||!l.value?(a.value?1:-1)-(l.value?1:-1):a.relativePath<l.relativePath?-1:a.relativePath>l.relativePath?1:0),r.forEach(a=>{i.push(...qo(a,n+1))})}return i}function Pt(s){return s.replace(/"/g,"&quot;")}new Ts})();
