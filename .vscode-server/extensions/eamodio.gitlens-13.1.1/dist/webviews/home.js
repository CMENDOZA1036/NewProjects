(()=>{var zr={277:(X,Z)=>{"use strict";Z.byteLength=d,Z.toByteArray=$,Z.fromByteArray=M;for(var I=[],L=[],H=typeof Uint8Array<"u"?Uint8Array:Array,G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",C=0,O=G.length;C<O;++C)I[C]=G[C],L[G.charCodeAt(C)]=C;L["-".charCodeAt(0)]=62,L["_".charCodeAt(0)]=63;function b(g){var m=g.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=g.indexOf("=");v===-1&&(v=m);var S=v===m?0:4-v%4;return[v,S]}function d(g){var m=b(g),v=m[0],S=m[1];return(v+S)*3/4-S}function D(g,m,v){return(m+v)*3/4-v}function $(g){var m,v=b(g),S=v[0],z=v[1],R=new H(D(g,S,z)),w=0,k=z>0?S-4:S,F;for(F=0;F<k;F+=4)m=L[g.charCodeAt(F)]<<18|L[g.charCodeAt(F+1)]<<12|L[g.charCodeAt(F+2)]<<6|L[g.charCodeAt(F+3)],R[w++]=m>>16&255,R[w++]=m>>8&255,R[w++]=m&255;return z===2&&(m=L[g.charCodeAt(F)]<<2|L[g.charCodeAt(F+1)]>>4,R[w++]=m&255),z===1&&(m=L[g.charCodeAt(F)]<<10|L[g.charCodeAt(F+1)]<<4|L[g.charCodeAt(F+2)]>>2,R[w++]=m>>8&255,R[w++]=m&255),R}function P(g){return I[g>>18&63]+I[g>>12&63]+I[g>>6&63]+I[g&63]}function _(g,m,v){for(var S,z=[],R=m;R<v;R+=3)S=(g[R]<<16&16711680)+(g[R+1]<<8&65280)+(g[R+2]&255),z.push(P(S));return z.join("")}function M(g){for(var m,v=g.length,S=v%3,z=[],R=16383,w=0,k=v-S;w<k;w+=R)z.push(_(g,w,w+R>k?k:w+R));return S===1?(m=g[v-1],z.push(I[m>>2]+I[m<<4&63]+"==")):S===2&&(m=(g[v-2]<<8)+g[v-1],z.push(I[m>>10]+I[m>>4&63]+I[m<<2&63]+"=")),z.join("")}},291:(X,Z,I)=>{"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var L=I(277),H=I(608),G=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Z.Buffer=d,Z.SlowBuffer=R,Z.INSPECT_MAX_BYTES=50;var C=2147483647;Z.kMaxLength=C,d.TYPED_ARRAY_SUPPORT=O(),!d.TYPED_ARRAY_SUPPORT&&typeof console<"u";function O(){try{var c=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(c,o),c.foo()===42}catch{return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}}),Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function b(c){if(c>C)throw new RangeError('The value "'+c+'" is invalid for option "size"');var o=new Uint8Array(c);return Object.setPrototypeOf(o,d.prototype),o}function d(c,o,s){if(typeof c=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _(c)}return D(c,o,s)}d.poolSize=8192;function D(c,o,s){if(typeof c=="string")return M(c,o);if(ArrayBuffer.isView(c))return m(c);if(c==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c);if(f(c,ArrayBuffer)||c&&f(c.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(f(c,SharedArrayBuffer)||c&&f(c.buffer,SharedArrayBuffer)))return v(c,o,s);if(typeof c=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var u=c.valueOf&&c.valueOf();if(u!=null&&u!==c)return d.from(u,o,s);var E=S(c);if(E)return E;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof c[Symbol.toPrimitive]=="function")return d.from(c[Symbol.toPrimitive]("string"),o,s);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c)}d.from=function(c,o,s){return D(c,o,s)},Object.setPrototypeOf(d.prototype,Uint8Array.prototype),Object.setPrototypeOf(d,Uint8Array);function $(c){if(typeof c!="number")throw new TypeError('"size" argument must be of type number');if(c<0)throw new RangeError('The value "'+c+'" is invalid for option "size"')}function P(c,o,s){return $(c),c<=0?b(c):o!==void 0?typeof s=="string"?b(c).fill(o,s):b(c).fill(o):b(c)}d.alloc=function(c,o,s){return P(c,o,s)};function _(c){return $(c),b(c<0?0:z(c)|0)}d.allocUnsafe=function(c){return _(c)},d.allocUnsafeSlow=function(c){return _(c)};function M(c,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var s=w(c,o)|0,u=b(s),E=u.write(c,o);return E!==s&&(u=u.slice(0,E)),u}function g(c){for(var o=c.length<0?0:z(c.length)|0,s=b(o),u=0;u<o;u+=1)s[u]=c[u]&255;return s}function m(c){if(f(c,Uint8Array)){var o=new Uint8Array(c);return v(o.buffer,o.byteOffset,o.byteLength)}return g(c)}function v(c,o,s){if(o<0||c.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(c.byteLength<o+(s||0))throw new RangeError('"length" is outside of buffer bounds');var u;return o===void 0&&s===void 0?u=new Uint8Array(c):s===void 0?u=new Uint8Array(c,o):u=new Uint8Array(c,o,s),Object.setPrototypeOf(u,d.prototype),u}function S(c){if(d.isBuffer(c)){var o=z(c.length)|0,s=b(o);return s.length===0||c.copy(s,0,0,o),s}if(c.length!==void 0)return typeof c.length!="number"||p(c.length)?b(0):g(c);if(c.type==="Buffer"&&Array.isArray(c.data))return g(c.data)}function z(c){if(c>=C)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+C.toString(16)+" bytes");return c|0}function R(c){return+c!=c&&(c=0),d.alloc(+c)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype},d.compare=function(o,s){if(f(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),f(s,Uint8Array)&&(s=d.from(s,s.offset,s.byteLength)),!d.isBuffer(o)||!d.isBuffer(s))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===s)return 0;for(var u=o.length,E=s.length,N=0,j=Math.min(u,E);N<j;++N)if(o[N]!==s[N]){u=o[N],E=s[N];break}return u<E?-1:E<u?1:0},d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(o,s){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var u;if(s===void 0)for(s=0,u=0;u<o.length;++u)s+=o[u].length;var E=d.allocUnsafe(s),N=0;for(u=0;u<o.length;++u){var j=o[u];if(f(j,Uint8Array))N+j.length>E.length?d.from(j).copy(E,N):Uint8Array.prototype.set.call(E,j,N);else if(d.isBuffer(j))j.copy(E,N);else throw new TypeError('"list" argument must be an Array of Buffers');N+=j.length}return E};function w(c,o){if(d.isBuffer(c))return c.length;if(ArrayBuffer.isView(c)||f(c,ArrayBuffer))return c.byteLength;if(typeof c!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof c);var s=c.length,u=arguments.length>2&&arguments[2]===!0;if(!u&&s===0)return 0;for(var E=!1;;)switch(o){case"ascii":case"latin1":case"binary":return s;case"utf8":case"utf-8":return A(c).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return s*2;case"hex":return s>>>1;case"base64":return ne(c).length;default:if(E)return u?-1:A(c).length;o=(""+o).toLowerCase(),E=!0}}d.byteLength=w;function k(c,o,s){var u=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((s===void 0||s>this.length)&&(s=this.length),s<=0)||(s>>>=0,o>>>=0,s<=o))return"";for(c||(c="utf8");;)switch(c){case"hex":return We(this,o,s);case"utf8":case"utf-8":return qe(this,o,s);case"ascii":return Ie(this,o,s);case"latin1":case"binary":return Qe(this,o,s);case"base64":return q(this,o,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ye(this,o,s);default:if(u)throw new TypeError("Unknown encoding: "+c);c=(c+"").toLowerCase(),u=!0}}d.prototype._isBuffer=!0;function F(c,o,s){var u=c[o];c[o]=c[s],c[s]=u}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var s=0;s<o;s+=2)F(this,s,s+1);return this},d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var s=0;s<o;s+=4)F(this,s,s+3),F(this,s+1,s+2);return this},d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var s=0;s<o;s+=8)F(this,s,s+7),F(this,s+1,s+6),F(this,s+2,s+5),F(this,s+3,s+4);return this},d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?qe(this,0,o):k.apply(this,arguments)},d.prototype.toLocaleString=d.prototype.toString,d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0},d.prototype.inspect=function(){var o="",s=Z.INSPECT_MAX_BYTES;return o=this.toString("hex",0,s).replace(/(.{2})/g,"$1 ").trim(),this.length>s&&(o+=" ... "),"<Buffer "+o+">"},G&&(d.prototype[G]=d.prototype.inspect),d.prototype.compare=function(o,s,u,E,N){if(f(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(s===void 0&&(s=0),u===void 0&&(u=o?o.length:0),E===void 0&&(E=0),N===void 0&&(N=this.length),s<0||u>o.length||E<0||N>this.length)throw new RangeError("out of range index");if(E>=N&&s>=u)return 0;if(E>=N)return-1;if(s>=u)return 1;if(s>>>=0,u>>>=0,E>>>=0,N>>>=0,this===o)return 0;for(var j=N-E,ce=u-s,ue=Math.min(j,ce),he=this.slice(E,N),ye=o.slice(s,u),le=0;le<ue;++le)if(he[le]!==ye[le]){j=he[le],ce=ye[le];break}return j<ce?-1:ce<j?1:0};function U(c,o,s,u,E){if(c.length===0)return-1;if(typeof s=="string"?(u=s,s=0):s>2147483647?s=2147483647:s<-2147483648&&(s=-2147483648),s=+s,p(s)&&(s=E?0:c.length-1),s<0&&(s=c.length+s),s>=c.length){if(E)return-1;s=c.length-1}else if(s<0)if(E)s=0;else return-1;if(typeof o=="string"&&(o=d.from(o,u)),d.isBuffer(o))return o.length===0?-1:Y(c,o,s,u,E);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?E?Uint8Array.prototype.indexOf.call(c,o,s):Uint8Array.prototype.lastIndexOf.call(c,o,s):Y(c,[o],s,u,E);throw new TypeError("val must be string, number or Buffer")}function Y(c,o,s,u,E){var N=1,j=c.length,ce=o.length;if(u!==void 0&&(u=String(u).toLowerCase(),u==="ucs2"||u==="ucs-2"||u==="utf16le"||u==="utf-16le")){if(c.length<2||o.length<2)return-1;N=2,j/=2,ce/=2,s/=2}function ue(Ae,Ne){return N===1?Ae[Ne]:Ae.readUInt16BE(Ne*N)}var he;if(E){var ye=-1;for(he=s;he<j;he++)if(ue(c,he)===ue(o,ye===-1?0:he-ye)){if(ye===-1&&(ye=he),he-ye+1===ce)return ye*N}else ye!==-1&&(he-=he-ye),ye=-1}else for(s+ce>j&&(s=j-ce),he=s;he>=0;he--){for(var le=!0,Se=0;Se<ce;Se++)if(ue(c,he+Se)!==ue(o,Se)){le=!1;break}if(le)return he}return-1}d.prototype.includes=function(o,s,u){return this.indexOf(o,s,u)!==-1},d.prototype.indexOf=function(o,s,u){return U(this,o,s,u,!0)},d.prototype.lastIndexOf=function(o,s,u){return U(this,o,s,u,!1)};function ie(c,o,s,u){s=Number(s)||0;var E=c.length-s;u?(u=Number(u),u>E&&(u=E)):u=E;var N=o.length;u>N/2&&(u=N/2);for(var j=0;j<u;++j){var ce=parseInt(o.substr(j*2,2),16);if(p(ce))return j;c[s+j]=ce}return j}function ee(c,o,s,u){return ae(A(o,c.length-s),c,s,u)}function se(c,o,s,u){return ae(T(o),c,s,u)}function oe(c,o,s,u){return ae(ne(o),c,s,u)}function Te(c,o,s,u){return ae(W(o,c.length-s),c,s,u)}d.prototype.write=function(o,s,u,E){if(s===void 0)E="utf8",u=this.length,s=0;else if(u===void 0&&typeof s=="string")E=s,u=this.length,s=0;else if(isFinite(s))s=s>>>0,isFinite(u)?(u=u>>>0,E===void 0&&(E="utf8")):(E=u,u=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var N=this.length-s;if((u===void 0||u>N)&&(u=N),o.length>0&&(u<0||s<0)||s>this.length)throw new RangeError("Attempt to write outside buffer bounds");E||(E="utf8");for(var j=!1;;)switch(E){case"hex":return ie(this,o,s,u);case"utf8":case"utf-8":return ee(this,o,s,u);case"ascii":case"latin1":case"binary":return se(this,o,s,u);case"base64":return oe(this,o,s,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Te(this,o,s,u);default:if(j)throw new TypeError("Unknown encoding: "+E);E=(""+E).toLowerCase(),j=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function q(c,o,s){return o===0&&s===c.length?L.fromByteArray(c):L.fromByteArray(c.slice(o,s))}function qe(c,o,s){s=Math.min(c.length,s);for(var u=[],E=o;E<s;){var N=c[E],j=null,ce=N>239?4:N>223?3:N>191?2:1;if(E+ce<=s){var ue,he,ye,le;switch(ce){case 1:N<128&&(j=N);break;case 2:ue=c[E+1],(ue&192)===128&&(le=(N&31)<<6|ue&63,le>127&&(j=le));break;case 3:ue=c[E+1],he=c[E+2],(ue&192)===128&&(he&192)===128&&(le=(N&15)<<12|(ue&63)<<6|he&63,le>2047&&(le<55296||le>57343)&&(j=le));break;case 4:ue=c[E+1],he=c[E+2],ye=c[E+3],(ue&192)===128&&(he&192)===128&&(ye&192)===128&&(le=(N&15)<<18|(ue&63)<<12|(he&63)<<6|ye&63,le>65535&&le<1114112&&(j=le))}}j===null?(j=65533,ce=1):j>65535&&(j-=65536,u.push(j>>>10&1023|55296),j=56320|j&1023),u.push(j),E+=ce}return Ge(u)}var Oe=4096;function Ge(c){var o=c.length;if(o<=Oe)return String.fromCharCode.apply(String,c);for(var s="",u=0;u<o;)s+=String.fromCharCode.apply(String,c.slice(u,u+=Oe));return s}function Ie(c,o,s){var u="";s=Math.min(c.length,s);for(var E=o;E<s;++E)u+=String.fromCharCode(c[E]&127);return u}function Qe(c,o,s){var u="";s=Math.min(c.length,s);for(var E=o;E<s;++E)u+=String.fromCharCode(c[E]);return u}function We(c,o,s){var u=c.length;(!o||o<0)&&(o=0),(!s||s<0||s>u)&&(s=u);for(var E="",N=o;N<s;++N)E+=V[c[N]];return E}function Ye(c,o,s){for(var u=c.slice(o,s),E="",N=0;N<u.length-1;N+=2)E+=String.fromCharCode(u[N]+u[N+1]*256);return E}d.prototype.slice=function(o,s){var u=this.length;o=~~o,s=s===void 0?u:~~s,o<0?(o+=u,o<0&&(o=0)):o>u&&(o=u),s<0?(s+=u,s<0&&(s=0)):s>u&&(s=u),s<o&&(s=o);var E=this.subarray(o,s);return Object.setPrototypeOf(E,d.prototype),E};function pe(c,o,s){if(c%1!==0||c<0)throw new RangeError("offset is not uint");if(c+o>s)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,s,u){o=o>>>0,s=s>>>0,u||pe(o,s,this.length);for(var E=this[o],N=1,j=0;++j<s&&(N*=256);)E+=this[o+j]*N;return E},d.prototype.readUintBE=d.prototype.readUIntBE=function(o,s,u){o=o>>>0,s=s>>>0,u||pe(o,s,this.length);for(var E=this[o+--s],N=1;s>0&&(N*=256);)E+=this[o+--s]*N;return E},d.prototype.readUint8=d.prototype.readUInt8=function(o,s){return o=o>>>0,s||pe(o,1,this.length),this[o]},d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,s){return o=o>>>0,s||pe(o,2,this.length),this[o]|this[o+1]<<8},d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,s){return o=o>>>0,s||pe(o,2,this.length),this[o]<<8|this[o+1]},d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,s){return o=o>>>0,s||pe(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216},d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,s){return o=o>>>0,s||pe(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])},d.prototype.readIntLE=function(o,s,u){o=o>>>0,s=s>>>0,u||pe(o,s,this.length);for(var E=this[o],N=1,j=0;++j<s&&(N*=256);)E+=this[o+j]*N;return N*=128,E>=N&&(E-=Math.pow(2,8*s)),E},d.prototype.readIntBE=function(o,s,u){o=o>>>0,s=s>>>0,u||pe(o,s,this.length);for(var E=s,N=1,j=this[o+--E];E>0&&(N*=256);)j+=this[o+--E]*N;return N*=128,j>=N&&(j-=Math.pow(2,8*s)),j},d.prototype.readInt8=function(o,s){return o=o>>>0,s||pe(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]},d.prototype.readInt16LE=function(o,s){o=o>>>0,s||pe(o,2,this.length);var u=this[o]|this[o+1]<<8;return u&32768?u|4294901760:u},d.prototype.readInt16BE=function(o,s){o=o>>>0,s||pe(o,2,this.length);var u=this[o+1]|this[o]<<8;return u&32768?u|4294901760:u},d.prototype.readInt32LE=function(o,s){return o=o>>>0,s||pe(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24},d.prototype.readInt32BE=function(o,s){return o=o>>>0,s||pe(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]},d.prototype.readFloatLE=function(o,s){return o=o>>>0,s||pe(o,4,this.length),H.read(this,o,!0,23,4)},d.prototype.readFloatBE=function(o,s){return o=o>>>0,s||pe(o,4,this.length),H.read(this,o,!1,23,4)},d.prototype.readDoubleLE=function(o,s){return o=o>>>0,s||pe(o,8,this.length),H.read(this,o,!0,52,8)},d.prototype.readDoubleBE=function(o,s){return o=o>>>0,s||pe(o,8,this.length),H.read(this,o,!1,52,8)};function te(c,o,s,u,E,N){if(!d.isBuffer(c))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>E||o<N)throw new RangeError('"value" argument is out of bounds');if(s+u>c.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,s,u,E){if(o=+o,s=s>>>0,u=u>>>0,!E){var N=Math.pow(2,8*u)-1;te(this,o,s,u,N,0)}var j=1,ce=0;for(this[s]=o&255;++ce<u&&(j*=256);)this[s+ce]=o/j&255;return s+u},d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,s,u,E){if(o=+o,s=s>>>0,u=u>>>0,!E){var N=Math.pow(2,8*u)-1;te(this,o,s,u,N,0)}var j=u-1,ce=1;for(this[s+j]=o&255;--j>=0&&(ce*=256);)this[s+j]=o/ce&255;return s+u},d.prototype.writeUint8=d.prototype.writeUInt8=function(o,s,u){return o=+o,s=s>>>0,u||te(this,o,s,1,255,0),this[s]=o&255,s+1},d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,s,u){return o=+o,s=s>>>0,u||te(this,o,s,2,65535,0),this[s]=o&255,this[s+1]=o>>>8,s+2},d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,s,u){return o=+o,s=s>>>0,u||te(this,o,s,2,65535,0),this[s]=o>>>8,this[s+1]=o&255,s+2},d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,s,u){return o=+o,s=s>>>0,u||te(this,o,s,4,4294967295,0),this[s+3]=o>>>24,this[s+2]=o>>>16,this[s+1]=o>>>8,this[s]=o&255,s+4},d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,s,u){return o=+o,s=s>>>0,u||te(this,o,s,4,4294967295,0),this[s]=o>>>24,this[s+1]=o>>>16,this[s+2]=o>>>8,this[s+3]=o&255,s+4},d.prototype.writeIntLE=function(o,s,u,E){if(o=+o,s=s>>>0,!E){var N=Math.pow(2,8*u-1);te(this,o,s,u,N-1,-N)}var j=0,ce=1,ue=0;for(this[s]=o&255;++j<u&&(ce*=256);)o<0&&ue===0&&this[s+j-1]!==0&&(ue=1),this[s+j]=(o/ce>>0)-ue&255;return s+u},d.prototype.writeIntBE=function(o,s,u,E){if(o=+o,s=s>>>0,!E){var N=Math.pow(2,8*u-1);te(this,o,s,u,N-1,-N)}var j=u-1,ce=1,ue=0;for(this[s+j]=o&255;--j>=0&&(ce*=256);)o<0&&ue===0&&this[s+j+1]!==0&&(ue=1),this[s+j]=(o/ce>>0)-ue&255;return s+u},d.prototype.writeInt8=function(o,s,u){return o=+o,s=s>>>0,u||te(this,o,s,1,127,-128),o<0&&(o=255+o+1),this[s]=o&255,s+1},d.prototype.writeInt16LE=function(o,s,u){return o=+o,s=s>>>0,u||te(this,o,s,2,32767,-32768),this[s]=o&255,this[s+1]=o>>>8,s+2},d.prototype.writeInt16BE=function(o,s,u){return o=+o,s=s>>>0,u||te(this,o,s,2,32767,-32768),this[s]=o>>>8,this[s+1]=o&255,s+2},d.prototype.writeInt32LE=function(o,s,u){return o=+o,s=s>>>0,u||te(this,o,s,4,2147483647,-2147483648),this[s]=o&255,this[s+1]=o>>>8,this[s+2]=o>>>16,this[s+3]=o>>>24,s+4},d.prototype.writeInt32BE=function(o,s,u){return o=+o,s=s>>>0,u||te(this,o,s,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[s]=o>>>24,this[s+1]=o>>>16,this[s+2]=o>>>8,this[s+3]=o&255,s+4};function ot(c,o,s,u,E,N){if(s+u>c.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError("Index out of range")}function Ke(c,o,s,u,E){return o=+o,s=s>>>0,E||ot(c,o,s,4,34028234663852886e22,-34028234663852886e22),H.write(c,o,s,u,23,4),s+4}d.prototype.writeFloatLE=function(o,s,u){return Ke(this,o,s,!0,u)},d.prototype.writeFloatBE=function(o,s,u){return Ke(this,o,s,!1,u)};function Me(c,o,s,u,E){return o=+o,s=s>>>0,E||ot(c,o,s,8,17976931348623157e292,-17976931348623157e292),H.write(c,o,s,u,52,8),s+8}d.prototype.writeDoubleLE=function(o,s,u){return Me(this,o,s,!0,u)},d.prototype.writeDoubleBE=function(o,s,u){return Me(this,o,s,!1,u)},d.prototype.copy=function(o,s,u,E){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(u||(u=0),!E&&E!==0&&(E=this.length),s>=o.length&&(s=o.length),s||(s=0),E>0&&E<u&&(E=u),E===u||o.length===0||this.length===0)return 0;if(s<0)throw new RangeError("targetStart out of bounds");if(u<0||u>=this.length)throw new RangeError("Index out of range");if(E<0)throw new RangeError("sourceEnd out of bounds");E>this.length&&(E=this.length),o.length-s<E-u&&(E=o.length-s+u);var N=E-u;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(s,u,E):Uint8Array.prototype.set.call(o,this.subarray(u,E),s),N},d.prototype.fill=function(o,s,u,E){if(typeof o=="string"){if(typeof s=="string"?(E=s,s=0,u=this.length):typeof u=="string"&&(E=u,u=this.length),E!==void 0&&typeof E!="string")throw new TypeError("encoding must be a string");if(typeof E=="string"&&!d.isEncoding(E))throw new TypeError("Unknown encoding: "+E);if(o.length===1){var N=o.charCodeAt(0);(E==="utf8"&&N<128||E==="latin1")&&(o=N)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(s<0||this.length<s||this.length<u)throw new RangeError("Out of range index");if(u<=s)return this;s=s>>>0,u=u===void 0?this.length:u>>>0,o||(o=0);var j;if(typeof o=="number")for(j=s;j<u;++j)this[j]=o;else{var ce=d.isBuffer(o)?o:d.from(o,E),ue=ce.length;if(ue===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(j=0;j<u-s;++j)this[j+s]=ce[j%ue]}return this};var ft=/[^+/0-9A-Za-z-_]/g;function ht(c){if(c=c.split("=")[0],c=c.trim().replace(ft,""),c.length<2)return"";for(;c.length%4!==0;)c=c+"=";return c}function A(c,o){o=o||1/0;for(var s,u=c.length,E=null,N=[],j=0;j<u;++j){if(s=c.charCodeAt(j),s>55295&&s<57344){if(!E){if(s>56319){(o-=3)>-1&&N.push(239,191,189);continue}else if(j+1===u){(o-=3)>-1&&N.push(239,191,189);continue}E=s;continue}if(s<56320){(o-=3)>-1&&N.push(239,191,189),E=s;continue}s=(E-55296<<10|s-56320)+65536}else E&&(o-=3)>-1&&N.push(239,191,189);if(E=null,s<128){if((o-=1)<0)break;N.push(s)}else if(s<2048){if((o-=2)<0)break;N.push(s>>6|192,s&63|128)}else if(s<65536){if((o-=3)<0)break;N.push(s>>12|224,s>>6&63|128,s&63|128)}else if(s<1114112){if((o-=4)<0)break;N.push(s>>18|240,s>>12&63|128,s>>6&63|128,s&63|128)}else throw new Error("Invalid code point")}return N}function T(c){for(var o=[],s=0;s<c.length;++s)o.push(c.charCodeAt(s)&255);return o}function W(c,o){for(var s,u,E,N=[],j=0;j<c.length&&!((o-=2)<0);++j)s=c.charCodeAt(j),u=s>>8,E=s%256,N.push(E),N.push(u);return N}function ne(c){return L.toByteArray(ht(c))}function ae(c,o,s,u){for(var E=0;E<u&&!(E+s>=o.length||E>=c.length);++E)o[E+s]=c[E];return E}function f(c,o){return c instanceof o||c!=null&&c.constructor!=null&&c.constructor.name!=null&&c.constructor.name===o.name}function p(c){return c!==c}var V=function(){for(var c="0123456789abcdef",o=new Array(256),s=0;s<16;++s)for(var u=s*16,E=0;E<16;++E)o[u+E]=c[s]+c[E];return o}()},531:X=>{"use strict";var Z=typeof Reflect=="object"?Reflect:null,I=Z&&typeof Z.apply=="function"?Z.apply:function(k,F,U){return Function.prototype.apply.call(k,F,U)},L;Z&&typeof Z.ownKeys=="function"?L=Z.ownKeys:Object.getOwnPropertySymbols?L=function(k){return Object.getOwnPropertyNames(k).concat(Object.getOwnPropertySymbols(k))}:L=function(k){return Object.getOwnPropertyNames(k)};function H(w){}var G=Number.isNaN||function(k){return k!==k};function C(){C.init.call(this)}X.exports=C,X.exports.once=S,C.EventEmitter=C,C.prototype._events=void 0,C.prototype._eventsCount=0,C.prototype._maxListeners=void 0;var O=10;function b(w){if(typeof w!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof w)}Object.defineProperty(C,"defaultMaxListeners",{enumerable:!0,get:function(){return O},set:function(w){if(typeof w!="number"||w<0||G(w))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+w+".");O=w}}),C.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},C.prototype.setMaxListeners=function(k){if(typeof k!="number"||k<0||G(k))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+k+".");return this._maxListeners=k,this};function d(w){return w._maxListeners===void 0?C.defaultMaxListeners:w._maxListeners}C.prototype.getMaxListeners=function(){return d(this)},C.prototype.emit=function(k){for(var F=[],U=1;U<arguments.length;U++)F.push(arguments[U]);var Y=k==="error",ie=this._events;if(ie!==void 0)Y=Y&&ie.error===void 0;else if(!Y)return!1;if(Y){var ee;if(F.length>0&&(ee=F[0]),ee instanceof Error)throw ee;var se=new Error("Unhandled error."+(ee?" ("+ee.message+")":""));throw se.context=ee,se}var oe=ie[k];if(oe===void 0)return!1;if(typeof oe=="function")I(oe,this,F);else for(var Te=oe.length,q=g(oe,Te),U=0;U<Te;++U)I(q[U],this,F);return!0};function D(w,k,F,U){var Y,ie,ee;if(b(F),ie=w._events,ie===void 0?(ie=w._events=Object.create(null),w._eventsCount=0):(ie.newListener!==void 0&&(w.emit("newListener",k,F.listener?F.listener:F),ie=w._events),ee=ie[k]),ee===void 0)ee=ie[k]=F,++w._eventsCount;else if(typeof ee=="function"?ee=ie[k]=U?[F,ee]:[ee,F]:U?ee.unshift(F):ee.push(F),Y=d(w),Y>0&&ee.length>Y&&!ee.warned){ee.warned=!0;var se=new Error("Possible EventEmitter memory leak detected. "+ee.length+" "+String(k)+" listeners added. Use emitter.setMaxListeners() to increase limit");se.name="MaxListenersExceededWarning",se.emitter=w,se.type=k,se.count=ee.length}return w}C.prototype.addListener=function(k,F){return D(this,k,F,!1)},C.prototype.on=C.prototype.addListener,C.prototype.prependListener=function(k,F){return D(this,k,F,!0)};function $(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function P(w,k,F){var U={fired:!1,wrapFn:void 0,target:w,type:k,listener:F},Y=$.bind(U);return Y.listener=F,U.wrapFn=Y,Y}C.prototype.once=function(k,F){return b(F),this.on(k,P(this,k,F)),this},C.prototype.prependOnceListener=function(k,F){return b(F),this.prependListener(k,P(this,k,F)),this},C.prototype.removeListener=function(k,F){var U,Y,ie,ee,se;if(b(F),Y=this._events,Y===void 0)return this;if(U=Y[k],U===void 0)return this;if(U===F||U.listener===F)--this._eventsCount===0?this._events=Object.create(null):(delete Y[k],Y.removeListener&&this.emit("removeListener",k,U.listener||F));else if(typeof U!="function"){for(ie=-1,ee=U.length-1;ee>=0;ee--)if(U[ee]===F||U[ee].listener===F){se=U[ee].listener,ie=ee;break}if(ie<0)return this;ie===0?U.shift():m(U,ie),U.length===1&&(Y[k]=U[0]),Y.removeListener!==void 0&&this.emit("removeListener",k,se||F)}return this},C.prototype.off=C.prototype.removeListener,C.prototype.removeAllListeners=function(k){var F,U,Y;if(U=this._events,U===void 0)return this;if(U.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):U[k]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete U[k]),this;if(arguments.length===0){var ie=Object.keys(U),ee;for(Y=0;Y<ie.length;++Y)ee=ie[Y],ee!=="removeListener"&&this.removeAllListeners(ee);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(F=U[k],typeof F=="function")this.removeListener(k,F);else if(F!==void 0)for(Y=F.length-1;Y>=0;Y--)this.removeListener(k,F[Y]);return this};function _(w,k,F){var U=w._events;if(U===void 0)return[];var Y=U[k];return Y===void 0?[]:typeof Y=="function"?F?[Y.listener||Y]:[Y]:F?v(Y):g(Y,Y.length)}C.prototype.listeners=function(k){return _(this,k,!0)},C.prototype.rawListeners=function(k){return _(this,k,!1)},C.listenerCount=function(w,k){return typeof w.listenerCount=="function"?w.listenerCount(k):M.call(w,k)},C.prototype.listenerCount=M;function M(w){var k=this._events;if(k!==void 0){var F=k[w];if(typeof F=="function")return 1;if(F!==void 0)return F.length}return 0}C.prototype.eventNames=function(){return this._eventsCount>0?L(this._events):[]};function g(w,k){for(var F=new Array(k),U=0;U<k;++U)F[U]=w[U];return F}function m(w,k){for(;k+1<w.length;k++)w[k]=w[k+1];w.pop()}function v(w){for(var k=new Array(w.length),F=0;F<k.length;++F)k[F]=w[F].listener||w[F];return k}function S(w,k){return new Promise(function(F,U){function Y(ee){w.removeListener(k,ie),U(ee)}function ie(){typeof w.removeListener=="function"&&w.removeListener("error",Y),F([].slice.call(arguments))}R(w,k,ie,{once:!0}),k!=="error"&&z(w,Y,{once:!0})})}function z(w,k,F){typeof w.on=="function"&&R(w,"error",k,F)}function R(w,k,F,U){if(typeof w.on=="function")U.once?w.once(k,F):w.on(k,F);else if(typeof w.addEventListener=="function")w.addEventListener(k,function Y(ie){U.once&&w.removeEventListener(k,Y),F(ie)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof w)}},262:(X,Z,I)=>{"use strict";var L=I(707).Buffer,H=I(310).Transform,G=I(111);function C(b,d){if(!L.isBuffer(b)&&typeof b!="string")throw new TypeError(d+" must be a string or a buffer")}function O(b){H.call(this),this._block=L.allocUnsafe(b),this._blockSize=b,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}G(O,H),O.prototype._transform=function(b,d,D){var $=null;try{this.update(b,d)}catch(P){$=P}D($)},O.prototype._flush=function(b){var d=null;try{this.push(this.digest())}catch(D){d=D}b(d)},O.prototype.update=function(b,d){if(C(b,"Data"),this._finalized)throw new Error("Digest already called");L.isBuffer(b)||(b=L.from(b,d));for(var D=this._block,$=0;this._blockOffset+b.length-$>=this._blockSize;){for(var P=this._blockOffset;P<this._blockSize;)D[P++]=b[$++];this._update(),this._blockOffset=0}for(;$<b.length;)D[this._blockOffset++]=b[$++];for(var _=0,M=b.length*8;M>0;++_)this._length[_]+=M,M=this._length[_]/4294967296|0,M>0&&(this._length[_]-=4294967296*M);return this},O.prototype._update=function(){throw new Error("_update is not implemented")},O.prototype.digest=function(b){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var d=this._digest();b!==void 0&&(d=d.toString(b)),this._block.fill(0),this._blockOffset=0;for(var D=0;D<4;++D)this._length[D]=0;return d},O.prototype._digest=function(){throw new Error("_digest is not implemented")},X.exports=O},608:(X,Z)=>{/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Z.read=function(I,L,H,G,C){var O,b,d=C*8-G-1,D=(1<<d)-1,$=D>>1,P=-7,_=H?C-1:0,M=H?-1:1,g=I[L+_];for(_+=M,O=g&(1<<-P)-1,g>>=-P,P+=d;P>0;O=O*256+I[L+_],_+=M,P-=8);for(b=O&(1<<-P)-1,O>>=-P,P+=G;P>0;b=b*256+I[L+_],_+=M,P-=8);if(O===0)O=1-$;else{if(O===D)return b?NaN:(g?-1:1)*(1/0);b=b+Math.pow(2,G),O=O-$}return(g?-1:1)*b*Math.pow(2,O-G)},Z.write=function(I,L,H,G,C,O){var b,d,D,$=O*8-C-1,P=(1<<$)-1,_=P>>1,M=C===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=G?0:O-1,m=G?1:-1,v=L<0||L===0&&1/L<0?1:0;for(L=Math.abs(L),isNaN(L)||L===1/0?(d=isNaN(L)?1:0,b=P):(b=Math.floor(Math.log(L)/Math.LN2),L*(D=Math.pow(2,-b))<1&&(b--,D*=2),b+_>=1?L+=M/D:L+=M*Math.pow(2,1-_),L*D>=2&&(b++,D/=2),b+_>=P?(d=0,b=P):b+_>=1?(d=(L*D-1)*Math.pow(2,C),b=b+_):(d=L*Math.pow(2,_-1)*Math.pow(2,C),b=0));C>=8;I[H+g]=d&255,g+=m,d/=256,C-=8);for(b=b<<C|d,$+=C;$>0;I[H+g]=b&255,g+=m,b/=256,$-=8);I[H+g-m]|=v*128}},111:X=>{typeof Object.create=="function"?X.exports=function(I,L){L&&(I.super_=L,I.prototype=Object.create(L.prototype,{constructor:{value:I,enumerable:!1,writable:!0,configurable:!0}}))}:X.exports=function(I,L){if(L){I.super_=L;var H=function(){};H.prototype=L.prototype,I.prototype=new H,I.prototype.constructor=I}}},54:(X,Z,I)=>{"use strict";var L=I(111),H=I(262),G=I(707).Buffer,C=new Array(16);function O(){H.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878}L(O,H),O.prototype._update=function(){for(var _=C,M=0;M<16;++M)_[M]=this._block.readInt32LE(M*4);var g=this._a,m=this._b,v=this._c,S=this._d;g=d(g,m,v,S,_[0],3614090360,7),S=d(S,g,m,v,_[1],3905402710,12),v=d(v,S,g,m,_[2],606105819,17),m=d(m,v,S,g,_[3],3250441966,22),g=d(g,m,v,S,_[4],4118548399,7),S=d(S,g,m,v,_[5],1200080426,12),v=d(v,S,g,m,_[6],2821735955,17),m=d(m,v,S,g,_[7],4249261313,22),g=d(g,m,v,S,_[8],1770035416,7),S=d(S,g,m,v,_[9],2336552879,12),v=d(v,S,g,m,_[10],4294925233,17),m=d(m,v,S,g,_[11],2304563134,22),g=d(g,m,v,S,_[12],1804603682,7),S=d(S,g,m,v,_[13],4254626195,12),v=d(v,S,g,m,_[14],2792965006,17),m=d(m,v,S,g,_[15],1236535329,22),g=D(g,m,v,S,_[1],4129170786,5),S=D(S,g,m,v,_[6],3225465664,9),v=D(v,S,g,m,_[11],643717713,14),m=D(m,v,S,g,_[0],3921069994,20),g=D(g,m,v,S,_[5],3593408605,5),S=D(S,g,m,v,_[10],38016083,9),v=D(v,S,g,m,_[15],3634488961,14),m=D(m,v,S,g,_[4],3889429448,20),g=D(g,m,v,S,_[9],568446438,5),S=D(S,g,m,v,_[14],3275163606,9),v=D(v,S,g,m,_[3],4107603335,14),m=D(m,v,S,g,_[8],1163531501,20),g=D(g,m,v,S,_[13],2850285829,5),S=D(S,g,m,v,_[2],4243563512,9),v=D(v,S,g,m,_[7],1735328473,14),m=D(m,v,S,g,_[12],2368359562,20),g=$(g,m,v,S,_[5],4294588738,4),S=$(S,g,m,v,_[8],2272392833,11),v=$(v,S,g,m,_[11],1839030562,16),m=$(m,v,S,g,_[14],4259657740,23),g=$(g,m,v,S,_[1],2763975236,4),S=$(S,g,m,v,_[4],1272893353,11),v=$(v,S,g,m,_[7],4139469664,16),m=$(m,v,S,g,_[10],3200236656,23),g=$(g,m,v,S,_[13],681279174,4),S=$(S,g,m,v,_[0],3936430074,11),v=$(v,S,g,m,_[3],3572445317,16),m=$(m,v,S,g,_[6],76029189,23),g=$(g,m,v,S,_[9],3654602809,4),S=$(S,g,m,v,_[12],3873151461,11),v=$(v,S,g,m,_[15],530742520,16),m=$(m,v,S,g,_[2],3299628645,23),g=P(g,m,v,S,_[0],4096336452,6),S=P(S,g,m,v,_[7],1126891415,10),v=P(v,S,g,m,_[14],2878612391,15),m=P(m,v,S,g,_[5],4237533241,21),g=P(g,m,v,S,_[12],1700485571,6),S=P(S,g,m,v,_[3],2399980690,10),v=P(v,S,g,m,_[10],4293915773,15),m=P(m,v,S,g,_[1],2240044497,21),g=P(g,m,v,S,_[8],1873313359,6),S=P(S,g,m,v,_[15],4264355552,10),v=P(v,S,g,m,_[6],2734768916,15),m=P(m,v,S,g,_[13],1309151649,21),g=P(g,m,v,S,_[4],4149444226,6),S=P(S,g,m,v,_[11],3174756917,10),v=P(v,S,g,m,_[2],718787259,15),m=P(m,v,S,g,_[9],3951481745,21),this._a=this._a+g|0,this._b=this._b+m|0,this._c=this._c+v|0,this._d=this._d+S|0},O.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var _=G.allocUnsafe(16);return _.writeInt32LE(this._a,0),_.writeInt32LE(this._b,4),_.writeInt32LE(this._c,8),_.writeInt32LE(this._d,12),_};function b(_,M){return _<<M|_>>>32-M}function d(_,M,g,m,v,S,z){return b(_+(M&g|~M&m)+v+S|0,z)+M|0}function D(_,M,g,m,v,S,z){return b(_+(M&m|g&~m)+v+S|0,z)+M|0}function $(_,M,g,m,v,S,z){return b(_+(M^g^m)+v+S|0,z)+M|0}function P(_,M,g,m,v,S,z){return b(_+(g^(M|~m))+v+S|0,z)+M|0}X.exports=O},386:X=>{"use strict";function Z(b,d){b.prototype=Object.create(d.prototype),b.prototype.constructor=b,b.__proto__=d}var I={};function L(b,d,D){D||(D=Error);function $(_,M,g){return typeof d=="string"?d:d(_,M,g)}var P=function(_){Z(M,_);function M(g,m,v){return _.call(this,$(g,m,v))||this}return M}(D);P.prototype.name=D.name,P.prototype.code=b,I[b]=P}function H(b,d){if(Array.isArray(b)){var D=b.length;return b=b.map(function($){return String($)}),D>2?"one of ".concat(d," ").concat(b.slice(0,D-1).join(", "),", or ")+b[D-1]:D===2?"one of ".concat(d," ").concat(b[0]," or ").concat(b[1]):"of ".concat(d," ").concat(b[0])}else return"of ".concat(d," ").concat(String(b))}function G(b,d,D){return b.substr(!D||D<0?0:+D,d.length)===d}function C(b,d,D){return(D===void 0||D>b.length)&&(D=b.length),b.substring(D-d.length,D)===d}function O(b,d,D){return typeof D!="number"&&(D=0),D+d.length>b.length?!1:b.indexOf(d,D)!==-1}L("ERR_INVALID_OPT_VALUE",function(b,d){return'The value "'+d+'" is invalid for option "'+b+'"'},TypeError),L("ERR_INVALID_ARG_TYPE",function(b,d,D){var $;typeof d=="string"&&G(d,"not ")?($="must not be",d=d.replace(/^not /,"")):$="must be";var P;if(C(b," argument"))P="The ".concat(b," ").concat($," ").concat(H(d,"type"));else{var _=O(b,".")?"property":"argument";P='The "'.concat(b,'" ').concat(_," ").concat($," ").concat(H(d,"type"))}return P+=". Received type ".concat(typeof D),P},TypeError),L("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),L("ERR_METHOD_NOT_IMPLEMENTED",function(b){return"The "+b+" method is not implemented"}),L("ERR_STREAM_PREMATURE_CLOSE","Premature close"),L("ERR_STREAM_DESTROYED",function(b){return"Cannot call "+b+" after a stream was destroyed"}),L("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),L("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),L("ERR_STREAM_WRITE_AFTER_END","write after end"),L("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),L("ERR_UNKNOWN_ENCODING",function(b){return"Unknown encoding: "+b},TypeError),L("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),X.exports.q=I},879:(X,Z,I)=>{"use strict";var L=Object.keys||function(P){var _=[];for(var M in P)_.push(M);return _};X.exports=d;var H=I(70),G=I(501);I(111)(d,H);for(var C=L(G.prototype),O=0;O<C.length;O++){var b=C[O];d.prototype[b]||(d.prototype[b]=G.prototype[b])}function d(P){if(!(this instanceof d))return new d(P);H.call(this,P),G.call(this,P),this.allowHalfOpen=!0,P&&(P.readable===!1&&(this.readable=!1),P.writable===!1&&(this.writable=!1),P.allowHalfOpen===!1&&(this.allowHalfOpen=!1,this.once("end",D)))}Object.defineProperty(d.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(d.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(d.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}});function D(){this._writableState.ended||process.nextTick($,this)}function $(P){P.end()}Object.defineProperty(d.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set:function(_){this._readableState===void 0||this._writableState===void 0||(this._readableState.destroyed=_,this._writableState.destroyed=_)}})},100:(X,Z,I)=>{"use strict";X.exports=H;var L=I(269);I(111)(H,L);function H(G){if(!(this instanceof H))return new H(G);L.call(this,G)}H.prototype._transform=function(G,C,O){O(null,G)}},70:(X,Z,I)=>{"use strict";X.exports=oe;var L;oe.ReadableState=se;var H=I(531).EventEmitter,G=function(p,V){return p.listeners(V).length},C=I(72),O=I(291).Buffer,b=I.g.Uint8Array||function(){};function d(f){return O.from(f)}function D(f){return O.isBuffer(f)||f instanceof b}var $=I(2),P;$&&$.debuglog?P=$.debuglog("stream"):P=function(){};var _=I(799),M=I(204),g=I(44),m=g.getHighWaterMark,v=I(386).q,S=v.ERR_INVALID_ARG_TYPE,z=v.ERR_STREAM_PUSH_AFTER_EOF,R=v.ERR_METHOD_NOT_IMPLEMENTED,w=v.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,k,F,U;I(111)(oe,C);var Y=M.errorOrDestroy,ie=["error","close","destroy","pause","resume"];function ee(f,p,V){if(typeof f.prependListener=="function")return f.prependListener(p,V);!f._events||!f._events[p]?f.on(p,V):Array.isArray(f._events[p])?f._events[p].unshift(V):f._events[p]=[V,f._events[p]]}function se(f,p,V){L=L||I(879),f=f||{},typeof V!="boolean"&&(V=p instanceof L),this.objectMode=!!f.objectMode,V&&(this.objectMode=this.objectMode||!!f.readableObjectMode),this.highWaterMark=m(this,f,"readableHighWaterMark",V),this.buffer=new _,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=f.emitClose!==!1,this.autoDestroy=!!f.autoDestroy,this.destroyed=!1,this.defaultEncoding=f.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,f.encoding&&(k||(k=I(682).s),this.decoder=new k(f.encoding),this.encoding=f.encoding)}function oe(f){if(L=L||I(879),!(this instanceof oe))return new oe(f);var p=this instanceof L;this._readableState=new se(f,this,p),this.readable=!0,f&&(typeof f.read=="function"&&(this._read=f.read),typeof f.destroy=="function"&&(this._destroy=f.destroy)),C.call(this)}Object.defineProperty(oe.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState===void 0?!1:this._readableState.destroyed},set:function(p){!this._readableState||(this._readableState.destroyed=p)}}),oe.prototype.destroy=M.destroy,oe.prototype._undestroy=M.undestroy,oe.prototype._destroy=function(f,p){p(f)},oe.prototype.push=function(f,p){var V=this._readableState,c;return V.objectMode?c=!0:typeof f=="string"&&(p=p||V.defaultEncoding,p!==V.encoding&&(f=O.from(f,p),p=""),c=!0),Te(this,f,p,!1,c)},oe.prototype.unshift=function(f){return Te(this,f,null,!0,!1)};function Te(f,p,V,c,o){P("readableAddChunk",p);var s=f._readableState;if(p===null)s.reading=!1,Qe(f,s);else{var u;if(o||(u=qe(s,p)),u)Y(f,u);else if(s.objectMode||p&&p.length>0)if(typeof p!="string"&&!s.objectMode&&Object.getPrototypeOf(p)!==O.prototype&&(p=d(p)),c)s.endEmitted?Y(f,new w):q(f,s,p,!0);else if(s.ended)Y(f,new z);else{if(s.destroyed)return!1;s.reading=!1,s.decoder&&!V?(p=s.decoder.write(p),s.objectMode||p.length!==0?q(f,s,p,!1):pe(f,s)):q(f,s,p,!1)}else c||(s.reading=!1,pe(f,s))}return!s.ended&&(s.length<s.highWaterMark||s.length===0)}function q(f,p,V,c){p.flowing&&p.length===0&&!p.sync?(p.awaitDrain=0,f.emit("data",V)):(p.length+=p.objectMode?1:V.length,c?p.buffer.unshift(V):p.buffer.push(V),p.needReadable&&We(f)),pe(f,p)}function qe(f,p){var V;return!D(p)&&typeof p!="string"&&p!==void 0&&!f.objectMode&&(V=new S("chunk",["string","Buffer","Uint8Array"],p)),V}oe.prototype.isPaused=function(){return this._readableState.flowing===!1},oe.prototype.setEncoding=function(f){k||(k=I(682).s);var p=new k(f);this._readableState.decoder=p,this._readableState.encoding=this._readableState.decoder.encoding;for(var V=this._readableState.buffer.head,c="";V!==null;)c+=p.write(V.data),V=V.next;return this._readableState.buffer.clear(),c!==""&&this._readableState.buffer.push(c),this._readableState.length=c.length,this};var Oe=1073741824;function Ge(f){return f>=Oe?f=Oe:(f--,f|=f>>>1,f|=f>>>2,f|=f>>>4,f|=f>>>8,f|=f>>>16,f++),f}function Ie(f,p){return f<=0||p.length===0&&p.ended?0:p.objectMode?1:f!==f?p.flowing&&p.length?p.buffer.head.data.length:p.length:(f>p.highWaterMark&&(p.highWaterMark=Ge(f)),f<=p.length?f:p.ended?p.length:(p.needReadable=!0,0))}oe.prototype.read=function(f){P("read",f),f=parseInt(f,10);var p=this._readableState,V=f;if(f!==0&&(p.emittedReadable=!1),f===0&&p.needReadable&&((p.highWaterMark!==0?p.length>=p.highWaterMark:p.length>0)||p.ended))return P("read: emitReadable",p.length,p.ended),p.length===0&&p.ended?W(this):We(this),null;if(f=Ie(f,p),f===0&&p.ended)return p.length===0&&W(this),null;var c=p.needReadable;P("need readable",c),(p.length===0||p.length-f<p.highWaterMark)&&(c=!0,P("length less than watermark",c)),p.ended||p.reading?(c=!1,P("reading or ended",c)):c&&(P("do read"),p.reading=!0,p.sync=!0,p.length===0&&(p.needReadable=!0),this._read(p.highWaterMark),p.sync=!1,p.reading||(f=Ie(V,p)));var o;return f>0?o=T(f,p):o=null,o===null?(p.needReadable=p.length<=p.highWaterMark,f=0):(p.length-=f,p.awaitDrain=0),p.length===0&&(p.ended||(p.needReadable=!0),V!==f&&p.ended&&W(this)),o!==null&&this.emit("data",o),o};function Qe(f,p){if(P("onEofChunk"),!p.ended){if(p.decoder){var V=p.decoder.end();V&&V.length&&(p.buffer.push(V),p.length+=p.objectMode?1:V.length)}p.ended=!0,p.sync?We(f):(p.needReadable=!1,p.emittedReadable||(p.emittedReadable=!0,Ye(f)))}}function We(f){var p=f._readableState;P("emitReadable",p.needReadable,p.emittedReadable),p.needReadable=!1,p.emittedReadable||(P("emitReadable",p.flowing),p.emittedReadable=!0,process.nextTick(Ye,f))}function Ye(f){var p=f._readableState;P("emitReadable_",p.destroyed,p.length,p.ended),!p.destroyed&&(p.length||p.ended)&&(f.emit("readable"),p.emittedReadable=!1),p.needReadable=!p.flowing&&!p.ended&&p.length<=p.highWaterMark,A(f)}function pe(f,p){p.readingMore||(p.readingMore=!0,process.nextTick(te,f,p))}function te(f,p){for(;!p.reading&&!p.ended&&(p.length<p.highWaterMark||p.flowing&&p.length===0);){var V=p.length;if(P("maybeReadMore read 0"),f.read(0),V===p.length)break}p.readingMore=!1}oe.prototype._read=function(f){Y(this,new R("_read()"))},oe.prototype.pipe=function(f,p){var V=this,c=this._readableState;switch(c.pipesCount){case 0:c.pipes=f;break;case 1:c.pipes=[c.pipes,f];break;default:c.pipes.push(f);break}c.pipesCount+=1,P("pipe count=%d opts=%j",c.pipesCount,p);var o=(!p||p.end!==!1)&&f!==process.stdout&&f!==process.stderr,s=o?E:Se;c.endEmitted?process.nextTick(s):V.once("end",s),f.on("unpipe",u);function u(Ae,Ne){P("onunpipe"),Ae===V&&Ne&&Ne.hasUnpiped===!1&&(Ne.hasUnpiped=!0,ce())}function E(){P("onend"),f.end()}var N=ot(V);f.on("drain",N);var j=!1;function ce(){P("cleanup"),f.removeListener("close",ye),f.removeListener("finish",le),f.removeListener("drain",N),f.removeListener("error",he),f.removeListener("unpipe",u),V.removeListener("end",E),V.removeListener("end",Se),V.removeListener("data",ue),j=!0,c.awaitDrain&&(!f._writableState||f._writableState.needDrain)&&N()}V.on("data",ue);function ue(Ae){P("ondata");var Ne=f.write(Ae);P("dest.write",Ne),Ne===!1&&((c.pipesCount===1&&c.pipes===f||c.pipesCount>1&&ae(c.pipes,f)!==-1)&&!j&&(P("false write response, pause",c.awaitDrain),c.awaitDrain++),V.pause())}function he(Ae){P("onerror",Ae),Se(),f.removeListener("error",he),G(f,"error")===0&&Y(f,Ae)}ee(f,"error",he);function ye(){f.removeListener("finish",le),Se()}f.once("close",ye);function le(){P("onfinish"),f.removeListener("close",ye),Se()}f.once("finish",le);function Se(){P("unpipe"),V.unpipe(f)}return f.emit("pipe",V),c.flowing||(P("pipe resume"),V.resume()),f};function ot(f){return function(){var V=f._readableState;P("pipeOnDrain",V.awaitDrain),V.awaitDrain&&V.awaitDrain--,V.awaitDrain===0&&G(f,"data")&&(V.flowing=!0,A(f))}}oe.prototype.unpipe=function(f){var p=this._readableState,V={hasUnpiped:!1};if(p.pipesCount===0)return this;if(p.pipesCount===1)return f&&f!==p.pipes?this:(f||(f=p.pipes),p.pipes=null,p.pipesCount=0,p.flowing=!1,f&&f.emit("unpipe",this,V),this);if(!f){var c=p.pipes,o=p.pipesCount;p.pipes=null,p.pipesCount=0,p.flowing=!1;for(var s=0;s<o;s++)c[s].emit("unpipe",this,{hasUnpiped:!1});return this}var u=ae(p.pipes,f);return u===-1?this:(p.pipes.splice(u,1),p.pipesCount-=1,p.pipesCount===1&&(p.pipes=p.pipes[0]),f.emit("unpipe",this,V),this)},oe.prototype.on=function(f,p){var V=C.prototype.on.call(this,f,p),c=this._readableState;return f==="data"?(c.readableListening=this.listenerCount("readable")>0,c.flowing!==!1&&this.resume()):f==="readable"&&!c.endEmitted&&!c.readableListening&&(c.readableListening=c.needReadable=!0,c.flowing=!1,c.emittedReadable=!1,P("on readable",c.length,c.reading),c.length?We(this):c.reading||process.nextTick(Me,this)),V},oe.prototype.addListener=oe.prototype.on,oe.prototype.removeListener=function(f,p){var V=C.prototype.removeListener.call(this,f,p);return f==="readable"&&process.nextTick(Ke,this),V},oe.prototype.removeAllListeners=function(f){var p=C.prototype.removeAllListeners.apply(this,arguments);return(f==="readable"||f===void 0)&&process.nextTick(Ke,this),p};function Ke(f){var p=f._readableState;p.readableListening=f.listenerCount("readable")>0,p.resumeScheduled&&!p.paused?p.flowing=!0:f.listenerCount("data")>0&&f.resume()}function Me(f){P("readable nexttick read 0"),f.read(0)}oe.prototype.resume=function(){var f=this._readableState;return f.flowing||(P("resume"),f.flowing=!f.readableListening,ft(this,f)),f.paused=!1,this};function ft(f,p){p.resumeScheduled||(p.resumeScheduled=!0,process.nextTick(ht,f,p))}function ht(f,p){P("resume",p.reading),p.reading||f.read(0),p.resumeScheduled=!1,f.emit("resume"),A(f),p.flowing&&!p.reading&&f.read(0)}oe.prototype.pause=function(){return P("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&(P("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this};function A(f){var p=f._readableState;for(P("flow",p.flowing);p.flowing&&f.read()!==null;);}oe.prototype.wrap=function(f){var p=this,V=this._readableState,c=!1;f.on("end",function(){if(P("wrapped end"),V.decoder&&!V.ended){var u=V.decoder.end();u&&u.length&&p.push(u)}p.push(null)}),f.on("data",function(u){if(P("wrapped data"),V.decoder&&(u=V.decoder.write(u)),!(V.objectMode&&u==null)&&!(!V.objectMode&&(!u||!u.length))){var E=p.push(u);E||(c=!0,f.pause())}});for(var o in f)this[o]===void 0&&typeof f[o]=="function"&&(this[o]=function(E){return function(){return f[E].apply(f,arguments)}}(o));for(var s=0;s<ie.length;s++)f.on(ie[s],this.emit.bind(this,ie[s]));return this._read=function(u){P("wrapped _read",u),c&&(c=!1,f.resume())},this},typeof Symbol=="function"&&(oe.prototype[Symbol.asyncIterator]=function(){return F===void 0&&(F=I(978)),F(this)}),Object.defineProperty(oe.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(oe.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(oe.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(p){this._readableState&&(this._readableState.flowing=p)}}),oe._fromList=T,Object.defineProperty(oe.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}});function T(f,p){if(p.length===0)return null;var V;return p.objectMode?V=p.buffer.shift():!f||f>=p.length?(p.decoder?V=p.buffer.join(""):p.buffer.length===1?V=p.buffer.first():V=p.buffer.concat(p.length),p.buffer.clear()):V=p.buffer.consume(f,p.decoder),V}function W(f){var p=f._readableState;P("endReadable",p.endEmitted),p.endEmitted||(p.ended=!0,process.nextTick(ne,p,f))}function ne(f,p){if(P("endReadableNT",f.endEmitted,f.length),!f.endEmitted&&f.length===0&&(f.endEmitted=!0,p.readable=!1,p.emit("end"),f.autoDestroy)){var V=p._writableState;(!V||V.autoDestroy&&V.finished)&&p.destroy()}}typeof Symbol=="function"&&(oe.from=function(f,p){return U===void 0&&(U=I(625)),U(oe,f,p)});function ae(f,p){for(var V=0,c=f.length;V<c;V++)if(f[V]===p)return V;return-1}},269:(X,Z,I)=>{"use strict";X.exports=D;var L=I(386).q,H=L.ERR_METHOD_NOT_IMPLEMENTED,G=L.ERR_MULTIPLE_CALLBACK,C=L.ERR_TRANSFORM_ALREADY_TRANSFORMING,O=L.ERR_TRANSFORM_WITH_LENGTH_0,b=I(879);I(111)(D,b);function d(_,M){var g=this._transformState;g.transforming=!1;var m=g.writecb;if(m===null)return this.emit("error",new G);g.writechunk=null,g.writecb=null,M!=null&&this.push(M),m(_);var v=this._readableState;v.reading=!1,(v.needReadable||v.length<v.highWaterMark)&&this._read(v.highWaterMark)}function D(_){if(!(this instanceof D))return new D(_);b.call(this,_),this._transformState={afterTransform:d.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,_&&(typeof _.transform=="function"&&(this._transform=_.transform),typeof _.flush=="function"&&(this._flush=_.flush)),this.on("prefinish",$)}function $(){var _=this;typeof this._flush=="function"&&!this._readableState.destroyed?this._flush(function(M,g){P(_,M,g)}):P(this,null,null)}D.prototype.push=function(_,M){return this._transformState.needTransform=!1,b.prototype.push.call(this,_,M)},D.prototype._transform=function(_,M,g){g(new H("_transform()"))},D.prototype._write=function(_,M,g){var m=this._transformState;if(m.writecb=g,m.writechunk=_,m.writeencoding=M,!m.transforming){var v=this._readableState;(m.needTransform||v.needReadable||v.length<v.highWaterMark)&&this._read(v.highWaterMark)}},D.prototype._read=function(_){var M=this._transformState;M.writechunk!==null&&!M.transforming?(M.transforming=!0,this._transform(M.writechunk,M.writeencoding,M.afterTransform)):M.needTransform=!0},D.prototype._destroy=function(_,M){b.prototype._destroy.call(this,_,function(g){M(g)})};function P(_,M,g){if(M)return _.emit("error",M);if(g!=null&&_.push(g),_._writableState.length)throw new O;if(_._transformState.transforming)throw new C;return _.push(null)}},501:(X,Z,I)=>{"use strict";X.exports=se;function L(A,T,W){this.chunk=A,this.encoding=T,this.callback=W,this.next=null}function H(A){var T=this;this.next=null,this.entry=null,this.finish=function(){ht(T,A)}}var G;se.WritableState=ie;var C={deprecate:I(737)},O=I(72),b=I(291).Buffer,d=I.g.Uint8Array||function(){};function D(A){return b.from(A)}function $(A){return b.isBuffer(A)||A instanceof d}var P=I(204),_=I(44),M=_.getHighWaterMark,g=I(386).q,m=g.ERR_INVALID_ARG_TYPE,v=g.ERR_METHOD_NOT_IMPLEMENTED,S=g.ERR_MULTIPLE_CALLBACK,z=g.ERR_STREAM_CANNOT_PIPE,R=g.ERR_STREAM_DESTROYED,w=g.ERR_STREAM_NULL_VALUES,k=g.ERR_STREAM_WRITE_AFTER_END,F=g.ERR_UNKNOWN_ENCODING,U=P.errorOrDestroy;I(111)(se,O);function Y(){}function ie(A,T,W){G=G||I(879),A=A||{},typeof W!="boolean"&&(W=T instanceof G),this.objectMode=!!A.objectMode,W&&(this.objectMode=this.objectMode||!!A.writableObjectMode),this.highWaterMark=M(this,A,"writableHighWaterMark",W),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var ne=A.decodeStrings===!1;this.decodeStrings=!ne,this.defaultEncoding=A.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(ae){Qe(T,ae)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=A.emitClose!==!1,this.autoDestroy=!!A.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new H(this)}ie.prototype.getBuffer=function(){for(var T=this.bufferedRequest,W=[];T;)W.push(T),T=T.next;return W},function(){try{Object.defineProperty(ie.prototype,"buffer",{get:C.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch{}}();var ee;typeof Symbol=="function"&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]=="function"?(ee=Function.prototype[Symbol.hasInstance],Object.defineProperty(se,Symbol.hasInstance,{value:function(T){return ee.call(this,T)?!0:this!==se?!1:T&&T._writableState instanceof ie}})):ee=function(T){return T instanceof this};function se(A){G=G||I(879);var T=this instanceof G;if(!T&&!ee.call(se,this))return new se(A);this._writableState=new ie(A,this,T),this.writable=!0,A&&(typeof A.write=="function"&&(this._write=A.write),typeof A.writev=="function"&&(this._writev=A.writev),typeof A.destroy=="function"&&(this._destroy=A.destroy),typeof A.final=="function"&&(this._final=A.final)),O.call(this)}se.prototype.pipe=function(){U(this,new z)};function oe(A,T){var W=new k;U(A,W),process.nextTick(T,W)}function Te(A,T,W,ne){var ae;return W===null?ae=new w:typeof W!="string"&&!T.objectMode&&(ae=new m("chunk",["string","Buffer"],W)),ae?(U(A,ae),process.nextTick(ne,ae),!1):!0}se.prototype.write=function(A,T,W){var ne=this._writableState,ae=!1,f=!ne.objectMode&&$(A);return f&&!b.isBuffer(A)&&(A=D(A)),typeof T=="function"&&(W=T,T=null),f?T="buffer":T||(T=ne.defaultEncoding),typeof W!="function"&&(W=Y),ne.ending?oe(this,W):(f||Te(this,ne,A,W))&&(ne.pendingcb++,ae=qe(this,ne,f,A,T,W)),ae},se.prototype.cork=function(){this._writableState.corked++},se.prototype.uncork=function(){var A=this._writableState;A.corked&&(A.corked--,!A.writing&&!A.corked&&!A.bufferProcessing&&A.bufferedRequest&&pe(this,A))},se.prototype.setDefaultEncoding=function(T){if(typeof T=="string"&&(T=T.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((T+"").toLowerCase())>-1))throw new F(T);return this._writableState.defaultEncoding=T,this},Object.defineProperty(se.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}});function q(A,T,W){return!A.objectMode&&A.decodeStrings!==!1&&typeof T=="string"&&(T=b.from(T,W)),T}Object.defineProperty(se.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}});function qe(A,T,W,ne,ae,f){if(!W){var p=q(T,ne,ae);ne!==p&&(W=!0,ae="buffer",ne=p)}var V=T.objectMode?1:ne.length;T.length+=V;var c=T.length<T.highWaterMark;if(c||(T.needDrain=!0),T.writing||T.corked){var o=T.lastBufferedRequest;T.lastBufferedRequest={chunk:ne,encoding:ae,isBuf:W,callback:f,next:null},o?o.next=T.lastBufferedRequest:T.bufferedRequest=T.lastBufferedRequest,T.bufferedRequestCount+=1}else Oe(A,T,!1,V,ne,ae,f);return c}function Oe(A,T,W,ne,ae,f,p){T.writelen=ne,T.writecb=p,T.writing=!0,T.sync=!0,T.destroyed?T.onwrite(new R("write")):W?A._writev(ae,T.onwrite):A._write(ae,f,T.onwrite),T.sync=!1}function Ge(A,T,W,ne,ae){--T.pendingcb,W?(process.nextTick(ae,ne),process.nextTick(Me,A,T),A._writableState.errorEmitted=!0,U(A,ne)):(ae(ne),A._writableState.errorEmitted=!0,U(A,ne),Me(A,T))}function Ie(A){A.writing=!1,A.writecb=null,A.length-=A.writelen,A.writelen=0}function Qe(A,T){var W=A._writableState,ne=W.sync,ae=W.writecb;if(typeof ae!="function")throw new S;if(Ie(W),T)Ge(A,W,ne,T,ae);else{var f=te(W)||A.destroyed;!f&&!W.corked&&!W.bufferProcessing&&W.bufferedRequest&&pe(A,W),ne?process.nextTick(We,A,W,f,ae):We(A,W,f,ae)}}function We(A,T,W,ne){W||Ye(A,T),T.pendingcb--,ne(),Me(A,T)}function Ye(A,T){T.length===0&&T.needDrain&&(T.needDrain=!1,A.emit("drain"))}function pe(A,T){T.bufferProcessing=!0;var W=T.bufferedRequest;if(A._writev&&W&&W.next){var ne=T.bufferedRequestCount,ae=new Array(ne),f=T.corkedRequestsFree;f.entry=W;for(var p=0,V=!0;W;)ae[p]=W,W.isBuf||(V=!1),W=W.next,p+=1;ae.allBuffers=V,Oe(A,T,!0,T.length,ae,"",f.finish),T.pendingcb++,T.lastBufferedRequest=null,f.next?(T.corkedRequestsFree=f.next,f.next=null):T.corkedRequestsFree=new H(T),T.bufferedRequestCount=0}else{for(;W;){var c=W.chunk,o=W.encoding,s=W.callback,u=T.objectMode?1:c.length;if(Oe(A,T,!1,u,c,o,s),W=W.next,T.bufferedRequestCount--,T.writing)break}W===null&&(T.lastBufferedRequest=null)}T.bufferedRequest=W,T.bufferProcessing=!1}se.prototype._write=function(A,T,W){W(new v("_write()"))},se.prototype._writev=null,se.prototype.end=function(A,T,W){var ne=this._writableState;return typeof A=="function"?(W=A,A=null,T=null):typeof T=="function"&&(W=T,T=null),A!=null&&this.write(A,T),ne.corked&&(ne.corked=1,this.uncork()),ne.ending||ft(this,ne,W),this},Object.defineProperty(se.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}});function te(A){return A.ending&&A.length===0&&A.bufferedRequest===null&&!A.finished&&!A.writing}function ot(A,T){A._final(function(W){T.pendingcb--,W&&U(A,W),T.prefinished=!0,A.emit("prefinish"),Me(A,T)})}function Ke(A,T){!T.prefinished&&!T.finalCalled&&(typeof A._final=="function"&&!T.destroyed?(T.pendingcb++,T.finalCalled=!0,process.nextTick(ot,A,T)):(T.prefinished=!0,A.emit("prefinish")))}function Me(A,T){var W=te(T);if(W&&(Ke(A,T),T.pendingcb===0&&(T.finished=!0,A.emit("finish"),T.autoDestroy))){var ne=A._readableState;(!ne||ne.autoDestroy&&ne.endEmitted)&&A.destroy()}return W}function ft(A,T,W){T.ending=!0,Me(A,T),W&&(T.finished?process.nextTick(W):A.once("finish",W)),T.ended=!0,A.writable=!1}function ht(A,T,W){var ne=A.entry;for(A.entry=null;ne;){var ae=ne.callback;T.pendingcb--,ae(W),ne=ne.next}T.corkedRequestsFree.next=A}Object.defineProperty(se.prototype,"destroyed",{enumerable:!1,get:function(){return this._writableState===void 0?!1:this._writableState.destroyed},set:function(T){!this._writableState||(this._writableState.destroyed=T)}}),se.prototype.destroy=P.destroy,se.prototype._undestroy=P.undestroy,se.prototype._destroy=function(A,T){T(A)}},978:(X,Z,I)=>{"use strict";var L;function H(R,w,k){return w in R?Object.defineProperty(R,w,{value:k,enumerable:!0,configurable:!0,writable:!0}):R[w]=k,R}var G=I(738),C=Symbol("lastResolve"),O=Symbol("lastReject"),b=Symbol("error"),d=Symbol("ended"),D=Symbol("lastPromise"),$=Symbol("handlePromise"),P=Symbol("stream");function _(R,w){return{value:R,done:w}}function M(R){var w=R[C];if(w!==null){var k=R[P].read();k!==null&&(R[D]=null,R[C]=null,R[O]=null,w(_(k,!1)))}}function g(R){process.nextTick(M,R)}function m(R,w){return function(k,F){R.then(function(){if(w[d]){k(_(void 0,!0));return}w[$](k,F)},F)}}var v=Object.getPrototypeOf(function(){}),S=Object.setPrototypeOf((L={get stream(){return this[P]},next:function(){var w=this,k=this[b];if(k!==null)return Promise.reject(k);if(this[d])return Promise.resolve(_(void 0,!0));if(this[P].destroyed)return new Promise(function(ie,ee){process.nextTick(function(){w[b]?ee(w[b]):ie(_(void 0,!0))})});var F=this[D],U;if(F)U=new Promise(m(F,this));else{var Y=this[P].read();if(Y!==null)return Promise.resolve(_(Y,!1));U=new Promise(this[$])}return this[D]=U,U}},H(L,Symbol.asyncIterator,function(){return this}),H(L,"return",function(){var w=this;return new Promise(function(k,F){w[P].destroy(null,function(U){if(U){F(U);return}k(_(void 0,!0))})})}),L),v),z=function(w){var k,F=Object.create(S,(k={},H(k,P,{value:w,writable:!0}),H(k,C,{value:null,writable:!0}),H(k,O,{value:null,writable:!0}),H(k,b,{value:null,writable:!0}),H(k,d,{value:w._readableState.endEmitted,writable:!0}),H(k,$,{value:function(Y,ie){var ee=F[P].read();ee?(F[D]=null,F[C]=null,F[O]=null,Y(_(ee,!1))):(F[C]=Y,F[O]=ie)},writable:!0}),k));return F[D]=null,G(w,function(U){if(U&&U.code!=="ERR_STREAM_PREMATURE_CLOSE"){var Y=F[O];Y!==null&&(F[D]=null,F[C]=null,F[O]=null,Y(U)),F[b]=U;return}var ie=F[C];ie!==null&&(F[D]=null,F[C]=null,F[O]=null,ie(_(void 0,!0))),F[d]=!0}),w.on("readable",g.bind(null,F)),F};X.exports=z},799:(X,Z,I)=>{"use strict";function L(g,m){var v=Object.keys(g);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(g);m&&(S=S.filter(function(z){return Object.getOwnPropertyDescriptor(g,z).enumerable})),v.push.apply(v,S)}return v}function H(g){for(var m=1;m<arguments.length;m++){var v=arguments[m]!=null?arguments[m]:{};m%2?L(Object(v),!0).forEach(function(S){G(g,S,v[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(v)):L(Object(v)).forEach(function(S){Object.defineProperty(g,S,Object.getOwnPropertyDescriptor(v,S))})}return g}function G(g,m,v){return m in g?Object.defineProperty(g,m,{value:v,enumerable:!0,configurable:!0,writable:!0}):g[m]=v,g}function C(g,m){if(!(g instanceof m))throw new TypeError("Cannot call a class as a function")}function O(g,m){for(var v=0;v<m.length;v++){var S=m[v];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(g,S.key,S)}}function b(g,m,v){return m&&O(g.prototype,m),v&&O(g,v),g}var d=I(291),D=d.Buffer,$=I(15),P=$.inspect,_=P&&P.custom||"inspect";function M(g,m,v){D.prototype.copy.call(g,m,v)}X.exports=function(){function g(){C(this,g),this.head=null,this.tail=null,this.length=0}return b(g,[{key:"push",value:function(v){var S={data:v,next:null};this.length>0?this.tail.next=S:this.head=S,this.tail=S,++this.length}},{key:"unshift",value:function(v){var S={data:v,next:this.head};this.length===0&&(this.tail=S),this.head=S,++this.length}},{key:"shift",value:function(){if(this.length!==0){var v=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,v}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(v){if(this.length===0)return"";for(var S=this.head,z=""+S.data;S=S.next;)z+=v+S.data;return z}},{key:"concat",value:function(v){if(this.length===0)return D.alloc(0);for(var S=D.allocUnsafe(v>>>0),z=this.head,R=0;z;)M(z.data,S,R),R+=z.data.length,z=z.next;return S}},{key:"consume",value:function(v,S){var z;return v<this.head.data.length?(z=this.head.data.slice(0,v),this.head.data=this.head.data.slice(v)):v===this.head.data.length?z=this.shift():z=S?this._getString(v):this._getBuffer(v),z}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(v){var S=this.head,z=1,R=S.data;for(v-=R.length;S=S.next;){var w=S.data,k=v>w.length?w.length:v;if(k===w.length?R+=w:R+=w.slice(0,v),v-=k,v===0){k===w.length?(++z,S.next?this.head=S.next:this.head=this.tail=null):(this.head=S,S.data=w.slice(k));break}++z}return this.length-=z,R}},{key:"_getBuffer",value:function(v){var S=D.allocUnsafe(v),z=this.head,R=1;for(z.data.copy(S),v-=z.data.length;z=z.next;){var w=z.data,k=v>w.length?w.length:v;if(w.copy(S,S.length-v,0,k),v-=k,v===0){k===w.length?(++R,z.next?this.head=z.next:this.head=this.tail=null):(this.head=z,z.data=w.slice(k));break}++R}return this.length-=R,S}},{key:_,value:function(v,S){return P(this,H({},S,{depth:0,customInspect:!1}))}}]),g}()},204:X=>{"use strict";function Z(O,b){var d=this,D=this._readableState&&this._readableState.destroyed,$=this._writableState&&this._writableState.destroyed;return D||$?(b?b(O):O&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,process.nextTick(G,this,O)):process.nextTick(G,this,O)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(O||null,function(P){!b&&P?d._writableState?d._writableState.errorEmitted?process.nextTick(L,d):(d._writableState.errorEmitted=!0,process.nextTick(I,d,P)):process.nextTick(I,d,P):b?(process.nextTick(L,d),b(P)):process.nextTick(L,d)}),this)}function I(O,b){G(O,b),L(O)}function L(O){O._writableState&&!O._writableState.emitClose||O._readableState&&!O._readableState.emitClose||O.emit("close")}function H(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function G(O,b){O.emit("error",b)}function C(O,b){var d=O._readableState,D=O._writableState;d&&d.autoDestroy||D&&D.autoDestroy?O.destroy(b):O.emit("error",b)}X.exports={destroy:Z,undestroy:H,errorOrDestroy:C}},738:(X,Z,I)=>{"use strict";var L=I(386).q.ERR_STREAM_PREMATURE_CLOSE;function H(b){var d=!1;return function(){if(!d){d=!0;for(var D=arguments.length,$=new Array(D),P=0;P<D;P++)$[P]=arguments[P];b.apply(this,$)}}}function G(){}function C(b){return b.setHeader&&typeof b.abort=="function"}function O(b,d,D){if(typeof d=="function")return O(b,null,d);d||(d={}),D=H(D||G);var $=d.readable||d.readable!==!1&&b.readable,P=d.writable||d.writable!==!1&&b.writable,_=function(){b.writable||g()},M=b._writableState&&b._writableState.finished,g=function(){P=!1,M=!0,$||D.call(b)},m=b._readableState&&b._readableState.endEmitted,v=function(){$=!1,m=!0,P||D.call(b)},S=function(k){D.call(b,k)},z=function(){var k;if($&&!m)return(!b._readableState||!b._readableState.ended)&&(k=new L),D.call(b,k);if(P&&!M)return(!b._writableState||!b._writableState.ended)&&(k=new L),D.call(b,k)},R=function(){b.req.on("finish",g)};return C(b)?(b.on("complete",g),b.on("abort",z),b.req?R():b.on("request",R)):P&&!b._writableState&&(b.on("end",_),b.on("close",_)),b.on("end",v),b.on("finish",g),d.error!==!1&&b.on("error",S),b.on("close",z),function(){b.removeListener("complete",g),b.removeListener("abort",z),b.removeListener("request",R),b.req&&b.req.removeListener("finish",g),b.removeListener("end",_),b.removeListener("close",_),b.removeListener("finish",g),b.removeListener("end",v),b.removeListener("error",S),b.removeListener("close",z)}}X.exports=O},625:X=>{X.exports=function(){throw new Error("Readable.from is not available in the browser")}},718:(X,Z,I)=>{"use strict";var L;function H(g){var m=!1;return function(){m||(m=!0,g.apply(void 0,arguments))}}var G=I(386).q,C=G.ERR_MISSING_ARGS,O=G.ERR_STREAM_DESTROYED;function b(g){if(g)throw g}function d(g){return g.setHeader&&typeof g.abort=="function"}function D(g,m,v,S){S=H(S);var z=!1;g.on("close",function(){z=!0}),L===void 0&&(L=I(738)),L(g,{readable:m,writable:v},function(w){if(w)return S(w);z=!0,S()});var R=!1;return function(w){if(!z&&!R){if(R=!0,d(g))return g.abort();if(typeof g.destroy=="function")return g.destroy();S(w||new O("pipe"))}}}function $(g){g()}function P(g,m){return g.pipe(m)}function _(g){return!g.length||typeof g[g.length-1]!="function"?b:g.pop()}function M(){for(var g=arguments.length,m=new Array(g),v=0;v<g;v++)m[v]=arguments[v];var S=_(m);if(Array.isArray(m[0])&&(m=m[0]),m.length<2)throw new C("streams");var z,R=m.map(function(w,k){var F=k<m.length-1,U=k>0;return D(w,F,U,function(Y){z||(z=Y),Y&&R.forEach($),!F&&(R.forEach($),S(z))})});return m.reduce(P)}X.exports=M},44:(X,Z,I)=>{"use strict";var L=I(386).q.ERR_INVALID_OPT_VALUE;function H(C,O,b){return C.highWaterMark!=null?C.highWaterMark:O?C[b]:null}function G(C,O,b,d){var D=H(O,d,b);if(D!=null){if(!(isFinite(D)&&Math.floor(D)===D)||D<0){var $=d?b:"highWaterMark";throw new L($,D)}return Math.floor(D)}return C.objectMode?16:16384}X.exports={getHighWaterMark:G}},72:(X,Z,I)=>{X.exports=I(531).EventEmitter},310:(X,Z,I)=>{Z=X.exports=I(70),Z.Stream=Z,Z.Readable=Z,Z.Writable=I(501),Z.Duplex=I(879),Z.Transform=I(269),Z.PassThrough=I(100),Z.finished=I(738),Z.pipeline=I(718)},707:(X,Z,I)=>{/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var L=I(291),H=L.Buffer;function G(O,b){for(var d in O)b[d]=O[d]}H.from&&H.alloc&&H.allocUnsafe&&H.allocUnsafeSlow?X.exports=L:(G(L,Z),Z.Buffer=C);function C(O,b,d){return H(O,b,d)}C.prototype=Object.create(H.prototype),G(H,C),C.from=function(O,b,d){if(typeof O=="number")throw new TypeError("Argument must not be a number");return H(O,b,d)},C.alloc=function(O,b,d){if(typeof O!="number")throw new TypeError("Argument must be a number");var D=H(O);return b!==void 0?typeof d=="string"?D.fill(b,d):D.fill(b):D.fill(0),D},C.allocUnsafe=function(O){if(typeof O!="number")throw new TypeError("Argument must be a number");return H(O)},C.allocUnsafeSlow=function(O){if(typeof O!="number")throw new TypeError("Argument must be a number");return L.SlowBuffer(O)}},682:(X,Z,I)=>{"use strict";var L=I(707).Buffer,H=L.isEncoding||function(R){switch(R=""+R,R&&R.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function G(R){if(!R)return"utf8";for(var w;;)switch(R){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return R;default:if(w)return;R=(""+R).toLowerCase(),w=!0}}function C(R){var w=G(R);if(typeof w!="string"&&(L.isEncoding===H||!H(R)))throw new Error("Unknown encoding: "+R);return w||R}Z.s=O;function O(R){this.encoding=C(R);var w;switch(this.encoding){case"utf16le":this.text=M,this.end=g,w=4;break;case"utf8":this.fillLast=$,w=4;break;case"base64":this.text=m,this.end=v,w=3;break;default:this.write=S,this.end=z;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=L.allocUnsafe(w)}O.prototype.write=function(R){if(R.length===0)return"";var w,k;if(this.lastNeed){if(w=this.fillLast(R),w===void 0)return"";k=this.lastNeed,this.lastNeed=0}else k=0;return k<R.length?w?w+this.text(R,k):this.text(R,k):w||""},O.prototype.end=_,O.prototype.text=P,O.prototype.fillLast=function(R){if(this.lastNeed<=R.length)return R.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);R.copy(this.lastChar,this.lastTotal-this.lastNeed,0,R.length),this.lastNeed-=R.length};function b(R){return R<=127?0:R>>5===6?2:R>>4===14?3:R>>3===30?4:R>>6===2?-1:-2}function d(R,w,k){var F=w.length-1;if(F<k)return 0;var U=b(w[F]);return U>=0?(U>0&&(R.lastNeed=U-1),U):--F<k||U===-2?0:(U=b(w[F]),U>=0?(U>0&&(R.lastNeed=U-2),U):--F<k||U===-2?0:(U=b(w[F]),U>=0?(U>0&&(U===2?U=0:R.lastNeed=U-3),U):0))}function D(R,w,k){if((w[0]&192)!==128)return R.lastNeed=0,"\uFFFD";if(R.lastNeed>1&&w.length>1){if((w[1]&192)!==128)return R.lastNeed=1,"\uFFFD";if(R.lastNeed>2&&w.length>2&&(w[2]&192)!==128)return R.lastNeed=2,"\uFFFD"}}function $(R){var w=this.lastTotal-this.lastNeed,k=D(this,R,w);if(k!==void 0)return k;if(this.lastNeed<=R.length)return R.copy(this.lastChar,w,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);R.copy(this.lastChar,w,0,R.length),this.lastNeed-=R.length}function P(R,w){var k=d(this,R,w);if(!this.lastNeed)return R.toString("utf8",w);this.lastTotal=k;var F=R.length-(k-this.lastNeed);return R.copy(this.lastChar,0,F),R.toString("utf8",w,F)}function _(R){var w=R&&R.length?this.write(R):"";return this.lastNeed?w+"\uFFFD":w}function M(R,w){if((R.length-w)%2===0){var k=R.toString("utf16le",w);if(k){var F=k.charCodeAt(k.length-1);if(F>=55296&&F<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=R[R.length-2],this.lastChar[1]=R[R.length-1],k.slice(0,-1)}return k}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=R[R.length-1],R.toString("utf16le",w,R.length-1)}function g(R){var w=R&&R.length?this.write(R):"";if(this.lastNeed){var k=this.lastTotal-this.lastNeed;return w+this.lastChar.toString("utf16le",0,k)}return w}function m(R,w){var k=(R.length-w)%3;return k===0?R.toString("base64",w):(this.lastNeed=3-k,this.lastTotal=3,k===1?this.lastChar[0]=R[R.length-1]:(this.lastChar[0]=R[R.length-2],this.lastChar[1]=R[R.length-1]),R.toString("base64",w,R.length-k))}function v(R){var w=R&&R.length?this.write(R):"";return this.lastNeed?w+this.lastChar.toString("base64",0,3-this.lastNeed):w}function S(R){return R.toString(this.encoding)}function z(R){return R&&R.length?this.write(R):""}},737:(X,Z,I)=>{X.exports=L;function L(G,C){if(H("noDeprecation"))return G;var O=!1;function b(){if(!O){if(H("throwDeprecation"))throw new Error(C);H("traceDeprecation"),O=!0}return G.apply(this,arguments)}return b}function H(G){try{if(!I.g.localStorage)return!1}catch{return!1}var C=I.g.localStorage[G];return C==null?!1:String(C).toLowerCase()==="true"}},15:()=>{},2:()=>{}},kn={};function Xt(X){var Z=kn[X];if(Z!==void 0)return Z.exports;var I=kn[X]={exports:{}};return zr[X](I,I.exports,Xt),I.exports}Xt.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}();var ea={};(()=>{"use strict";const X=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();X.trustedTypes===void 0&&(X.trustedTypes={createPolicy:(e,t)=>t});const Z={configurable:!1,enumerable:!1,writable:!1};X.FAST===void 0&&Reflect.defineProperty(X,"FAST",Object.assign({value:Object.create(null)},Z));const I=X.FAST;if(I.getById===void 0){const e=Object.create(null);Reflect.defineProperty(I,"getById",Object.assign({value(t,n){let r=e[t];return r===void 0&&(r=n?e[t]=n():null),r}},Z))}const L=Object.freeze([]);function H(){const e=new WeakMap;return function(t){let n=e.get(t);if(n===void 0){let r=Reflect.getPrototypeOf(t);for(;n===void 0&&r!==null;)n=e.get(r),r=Reflect.getPrototypeOf(r);n=n===void 0?[]:n.slice(0),e.set(t,n)}return n}}const G=X.FAST.getById(1,()=>{const e=[],t=[];function n(){if(t.length)throw t.shift()}function r(l){try{l.call()}catch(h){t.push(h),setTimeout(n,0)}}function i(){let h=0;for(;h<e.length;)if(r(e[h]),h++,h>1024){for(let x=0,y=e.length-h;x<y;x++)e[x]=e[x+h];e.length-=h,h=0}e.length=0}function a(l){e.length<1&&X.requestAnimationFrame(i),e.push(l)}return Object.freeze({enqueue:a,process:i})}),C=X.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let O=C;const b=`fast-${Math.random().toString(36).substring(2,8)}`,d=`${b}{`,D=`}${b}`,$=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(O!==C)throw new Error("The HTML policy can only be set once.");O=e},createHTML(e){return O.createHTML(e)},isMarker(e){return e&&e.nodeType===8&&e.data.startsWith(b)},extractDirectiveIndexFromMarker(e){return parseInt(e.data.replace(`${b}:`,""))},createInterpolationPlaceholder(e){return`${d}${e}${D}`},createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(e){return`<!--${b}:${e}-->`},queueUpdate:G.enqueue,processUpdates:G.process,nextUpdate(){return new Promise(G.enqueue)},setAttribute(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)},setBooleanAttribute(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;t!==null;t=e.firstChild)e.removeChild(t)},createTemplateWalker(e){return document.createTreeWalker(e,133,null,!1)}});class P{constructor(t,n){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=n}has(t){return this.spillover===void 0?this.sub1===t||this.sub2===t:this.spillover.indexOf(t)!==-1}subscribe(t){const n=this.spillover;if(n===void 0){if(this.has(t))return;if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else n.indexOf(t)===-1&&n.push(t)}unsubscribe(t){const n=this.spillover;if(n===void 0)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}notify(t){const n=this.spillover,r=this.source;if(n===void 0){const i=this.sub1,a=this.sub2;i!==void 0&&i.handleChange(r,t),a!==void 0&&a.handleChange(r,t)}else for(let i=0,a=n.length;i<a;++i)n[i].handleChange(r,t)}}class _{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var n;const r=this.subscribers[t];r!==void 0&&r.notify(t),(n=this.sourceSubscribers)===null||n===void 0||n.notify(t)}subscribe(t,n){var r;if(n){let i=this.subscribers[n];i===void 0&&(this.subscribers[n]=i=new P(this.source)),i.subscribe(t)}else this.sourceSubscribers=(r=this.sourceSubscribers)!==null&&r!==void 0?r:new P(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,n){var r;if(n){const i=this.subscribers[n];i!==void 0&&i.unsubscribe(t)}else(r=this.sourceSubscribers)===null||r===void 0||r.unsubscribe(t)}}const M=I.getById(2,()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,n=$.queueUpdate;let r,i=y=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function a(y){let B=y.$fastController||t.get(y);return B===void 0&&(Array.isArray(y)?B=i(y):t.set(y,B=new _(y))),B}const l=H();class h{constructor(B){this.name=B,this.field=`_${B}`,this.callback=`${B}Changed`}getValue(B){return r!==void 0&&r.watch(B,this.name),B[this.field]}setValue(B,K){const Q=this.field,be=B[Q];if(be!==K){B[Q]=K;const ge=B[this.callback];typeof ge=="function"&&ge.call(B,be,K),a(B).notify(this.name)}}}class x extends P{constructor(B,K,Q=!1){super(B,K),this.binding=B,this.isVolatileBinding=Q,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(B,K){this.needsRefresh&&this.last!==null&&this.disconnect();const Q=r;r=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const be=this.binding(B,K);return r=Q,be}disconnect(){if(this.last!==null){let B=this.first;for(;B!==void 0;)B.notifier.unsubscribe(this,B.propertyName),B=B.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(B,K){const Q=this.last,be=a(B),ge=Q===null?this.first:{};if(ge.propertySource=B,ge.propertyName=K,ge.notifier=be,be.subscribe(this,K),Q!==null){if(!this.needsRefresh){let Ee;r=void 0,Ee=Q.propertySource[Q.propertyName],r=this,B===Ee&&(this.needsRefresh=!0)}Q.next=ge}this.last=ge}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let B=this.first;return{next:()=>{const K=B;return K===void 0?{value:void 0,done:!0}:(B=B.next,{value:K,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(y){i=y},getNotifier:a,track(y,B){r!==void 0&&r.watch(y,B)},trackVolatile(){r!==void 0&&(r.needsRefresh=!0)},notify(y,B){a(y).notify(B)},defineProperty(y,B){typeof B=="string"&&(B=new h(B)),l(y).push(B),Reflect.defineProperty(y,B.name,{enumerable:!0,get:function(){return B.getValue(this)},set:function(K){B.setValue(this,K)}})},getAccessors:l,binding(y,B,K=this.isVolatileBinding(y)){return new x(y,B,K)},isVolatileBinding(y){return e.test(y.toString())}})});function g(e,t){M.defineProperty(e,t)}function m(e,t,n){return Object.assign({},n,{get:function(){return M.trackVolatile(),n.get.apply(this)}})}const v=I.getById(3,()=>{let e=null;return{get(){return e},set(t){e=t}}});class S{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return v.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){v.set(t)}}M.defineProperty(S.prototype,"index"),M.defineProperty(S.prototype,"length");const z=Object.seal(new S);class R{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}}R.create=(()=>{if($.supportsAdoptedStyleSheets){const e=new Map;return t=>new F(t,e)}return e=>new ie(e)})();function w(e){return e.map(t=>t instanceof R?w(t.styles):[t]).reduce((t,n)=>t.concat(n),[])}function k(e){return e.map(t=>t instanceof R?t.behaviors:null).reduce((t,n)=>n===null?t:(t===null&&(t=[]),t.concat(n)),null)}class F extends R{constructor(t,n){super(),this.styles=t,this.styleSheetCache=n,this._styleSheets=void 0,this.behaviors=k(t)}get styleSheets(){if(this._styleSheets===void 0){const t=this.styles,n=this.styleSheetCache;this._styleSheets=w(t).map(r=>{if(r instanceof CSSStyleSheet)return r;let i=n.get(r);return i===void 0&&(i=new CSSStyleSheet,i.replaceSync(r),n.set(r,i)),i})}return this._styleSheets}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const n=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter(r=>n.indexOf(r)===-1),super.removeStylesFrom(t)}}let U=0;function Y(){return`fast-style-class-${++U}`}class ie extends R{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=k(t),this.styleSheets=w(t),this.styleClass=Y()}addStylesTo(t){const n=this.styleSheets,r=this.styleClass;t=this.normalizeTarget(t);for(let i=0;i<n.length;i++){const a=document.createElement("style");a.innerHTML=n[i],a.className=r,t.append(a)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);const n=t.querySelectorAll(`.${this.styleClass}`);for(let r=0,i=n.length;r<i;++r)t.removeChild(n[r]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const ee=Object.freeze({locate:H()}),se={toView(e){return e?"true":"false"},fromView(e){return!(e==null||e==="false"||e===!1||e===0)}},oe={toView(e){if(e==null)return null;const t=e*1;return isNaN(t)?null:t.toString()},fromView(e){if(e==null)return null;const t=e*1;return isNaN(t)?null:t}};class Te{constructor(t,n,r=n.toLowerCase(),i="reflect",a){this.guards=new Set,this.Owner=t,this.name=n,this.attribute=r,this.mode=i,this.converter=a,this.fieldName=`_${n}`,this.callbackName=`${n}Changed`,this.hasCallback=this.callbackName in t.prototype,i==="boolean"&&a===void 0&&(this.converter=se)}setValue(t,n){const r=t[this.fieldName],i=this.converter;i!==void 0&&(n=i.fromView(n)),r!==n&&(t[this.fieldName]=n,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](r,n),t.$fastController.notify(this.name))}getValue(t){return M.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,n){this.guards.has(t)||(this.guards.add(t),this.setValue(t,n),this.guards.delete(t))}tryReflectToAttribute(t){const n=this.mode,r=this.guards;r.has(t)||n==="fromView"||$.queueUpdate(()=>{r.add(t);const i=t[this.fieldName];switch(n){case"reflect":const a=this.converter;$.setAttribute(t,this.attribute,a!==void 0?a.toView(i):i);break;case"boolean":$.setBooleanAttribute(t,this.attribute,i);break}r.delete(t)})}static collect(t,...n){const r=[];n.push(ee.locate(t));for(let i=0,a=n.length;i<a;++i){const l=n[i];if(l!==void 0)for(let h=0,x=l.length;h<x;++h){const y=l[h];typeof y=="string"?r.push(new Te(t,y)):r.push(new Te(t,y.property,y.attribute,y.mode,y.converter))}}return r}}function q(e,t){let n;function r(i,a){arguments.length>1&&(n.property=a),ee.locate(i.constructor).push(n)}if(arguments.length>1){n={},r(e,t);return}return n=e===void 0?{}:e,r}const qe={mode:"open"},Oe={},Ge=I.getById(4,()=>{const e=new Map;return Object.freeze({register(t){return e.has(t.type)?!1:(e.set(t.type,t),!0)},getByType(t){return e.get(t)}})});class Ie{constructor(t,n=t.definition){typeof n=="string"&&(n={name:n}),this.type=t,this.name=n.name,this.template=n.template;const r=Te.collect(t,n.attributes),i=new Array(r.length),a={},l={};for(let h=0,x=r.length;h<x;++h){const y=r[h];i[h]=y.attribute,a[y.name]=y,l[y.attribute]=y}this.attributes=r,this.observedAttributes=i,this.propertyLookup=a,this.attributeLookup=l,this.shadowOptions=n.shadowOptions===void 0?qe:n.shadowOptions===null?void 0:Object.assign(Object.assign({},qe),n.shadowOptions),this.elementOptions=n.elementOptions===void 0?Oe:Object.assign(Object.assign({},Oe),n.elementOptions),this.styles=n.styles===void 0?void 0:Array.isArray(n.styles)?R.create(n.styles):n.styles instanceof R?n.styles:R.create([n.styles])}get isDefined(){return!!Ge.getByType(this.type)}define(t=customElements){const n=this.type;if(Ge.register(this)){const r=this.attributes,i=n.prototype;for(let a=0,l=r.length;a<l;++a)M.defineProperty(i,r[a]);Reflect.defineProperty(n,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,n,this.elementOptions),this}}Ie.forType=Ge.getByType;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qe=function(e,t){return Qe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},Qe(e,t)};function We(e,t){Qe(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Ye=function(){return Ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ye.apply(this,arguments)};function pe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function te(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,r);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(a=(i<3?l(a):i>3?l(t,n,a):l(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function ot(e,t){return function(n,r){t(n,r,e)}}function Ke(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function Me(e,t,n,r){function i(a){return a instanceof n?a:new n(function(l){l(a)})}return new(n||(n=Promise))(function(a,l){function h(B){try{y(r.next(B))}catch(K){l(K)}}function x(B){try{y(r.throw(B))}catch(K){l(K)}}function y(B){B.done?a(B.value):i(B.value).then(h,x)}y((r=r.apply(e,t||[])).next())})}function ft(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,l;return l={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function h(y){return function(B){return x([y,B])}}function x(y){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=y[0]&2?i.return:y[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,y[1])).done)return a;switch(i=0,a&&(y=[y[0]&2,a.value]),y[0]){case 0:case 1:a=y;break;case 4:return n.label++,{value:y[1],done:!1};case 5:n.label++,i=y[1],y=[0];continue;case 7:y=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(y[0]===6||y[0]===2)){n=0;continue}if(y[0]===3&&(!a||y[1]>a[0]&&y[1]<a[3])){n.label=y[1];break}if(y[0]===6&&n.label<a[1]){n.label=a[1],a=y;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(y);break}a[2]&&n.ops.pop(),n.trys.pop();continue}y=t.call(e,n)}catch(B){y=[6,B],i=0}finally{r=a=0}if(y[0]&5)throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}}function ht(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}function A(e,t){for(var n in e)n!=="default"&&!t.hasOwnProperty(n)&&(t[n]=e[n])}function T(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function W(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,a=[],l;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(h){l={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(l)throw l.error}}return a}function ne(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(W(arguments[t]));return e}function ae(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var a=arguments[t],l=0,h=a.length;l<h;l++,i++)r[i]=a[l];return r}function f(e){return this instanceof f?(this.v=e,this):new f(e)}function p(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,a=[];return i={},l("next"),l("throw"),l("return"),i[Symbol.asyncIterator]=function(){return this},i;function l(Q){r[Q]&&(i[Q]=function(be){return new Promise(function(ge,Ee){a.push([Q,be,ge,Ee])>1||h(Q,be)})})}function h(Q,be){try{x(r[Q](be))}catch(ge){K(a[0][3],ge)}}function x(Q){Q.value instanceof f?Promise.resolve(Q.value.v).then(y,B):K(a[0][2],Q)}function y(Q){h("next",Q)}function B(Q){h("throw",Q)}function K(Q,be){Q(be),a.shift(),a.length&&h(a[0][0],a[0][1])}}function V(e){var t,n;return t={},r("next"),r("throw",function(i){throw i}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(i,a){t[i]=e[i]?function(l){return(n=!n)?{value:f(e[i](l)),done:i==="return"}:a?a(l):l}:a}}function c(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof T=="function"?T(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(a){n[a]=e[a]&&function(l){return new Promise(function(h,x){l=e[a](l),i(h,x,l.done,l.value)})}}function i(a,l,h,x){Promise.resolve(x).then(function(y){a({value:y,done:h})},l)}}function o(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function s(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function u(e){return e&&e.__esModule?e:{default:e}}function E(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function N(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}const j=new WeakMap,ce={bubbles:!0,composed:!0,cancelable:!0};function ue(e){return e.shadowRoot||j.get(e)||null}class he extends _{constructor(t,n){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=n;const r=n.shadowOptions;if(r!==void 0){const a=t.attachShadow(r);r.mode==="closed"&&j.set(t,a)}const i=M.getAccessors(t);if(i.length>0){const a=this.boundObservables=Object.create(null);for(let l=0,h=i.length;l<h;++l){const x=i[l].name,y=t[x];y!==void 0&&(delete t[x],a[x]=y)}}}get isConnected(){return M.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,M.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){const n=ue(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)n.append(t);else if(!t.isAttachedTo(n)){const r=t.behaviors;t.addStylesTo(n),r!==null&&this.addBehaviors(r)}}removeStyles(t){const n=ue(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)n.removeChild(t);else if(t.isAttachedTo(n)){const r=t.behaviors;t.removeStylesFrom(n),r!==null&&this.removeBehaviors(r)}}addBehaviors(t){const n=this.behaviors||(this.behaviors=new Map),r=t.length,i=[];for(let a=0;a<r;++a){const l=t[a];n.has(l)?n.set(l,n.get(l)+1):(n.set(l,1),i.push(l))}if(this._isConnected){const a=this.element;for(let l=0;l<i.length;++l)i[l].bind(a,z)}}removeBehaviors(t,n=!1){const r=this.behaviors;if(r===null)return;const i=t.length,a=[];for(let l=0;l<i;++l){const h=t[l];if(r.has(h)){const x=r.get(h)-1;x===0||n?r.delete(h)&&a.push(h):r.set(h,x)}}if(this._isConnected){const l=this.element;for(let h=0;h<a.length;++h)a[h].unbind(l)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,z);const n=this.behaviors;if(n!==null)for(const[r]of n)r.bind(t,z);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;t!==null&&t.unbind();const n=this.behaviors;if(n!==null){const r=this.element;for(const[i]of n)i.unbind(r)}}onAttributeChangedCallback(t,n,r){const i=this.definition.attributeLookup[t];i!==void 0&&i.onAttributeChangedCallback(this.element,r)}emit(t,n,r){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:n},ce),r))):!1}finishInitialization(){const t=this.element,n=this.boundObservables;if(n!==null){const i=Object.keys(n);for(let a=0,l=i.length;a<l;++a){const h=i[a];t[h]=n[h]}this.boundObservables=null}const r=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():r.template&&(this._template=r.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():r.styles&&(this._styles=r.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const n=this.element,r=ue(n)||n;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||$.removeChildNodes(r),t&&(this.view=t.render(n,r,n))}static forCustomElement(t){const n=t.$fastController;if(n!==void 0)return n;const r=Ie.forType(t.constructor);if(r===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new he(t,r)}}function ye(e){return class extends e{constructor(){super(),he.forCustomElement(this)}$emit(t,n,r){return this.$fastController.emit(t,n,r)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,n,r){this.$fastController.onAttributeChangedCallback(t,n,r)}}}const le=Object.assign(ye(HTMLElement),{from(e){return ye(e)},define(e,t){return new Ie(e,t).define().type}});function Se(e){return function(t){new Ie(t,e).define()}}const Ae=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(n){Reflect.defineMetadata(e,t,n)}},Reflect.defineMetadata=function(e,t,n){let r=Ae.get(n);r===void 0&&Ae.set(n,r=new Map),r.set(e,t)},Reflect.getOwnMetadata=function(e,t){const n=Ae.get(t);if(n!==void 0)return n.get(e)});class Ne{constructor(t,n){this.container=t,this.key=n}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,On(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,n){const{container:r,key:i}=this;return this.container=this.key=void 0,r.registerResolver(i,new Fe(i,t,n))}}function wt(e){const t=e.slice(),n=Object.keys(e),r=n.length;let i;for(let a=0;a<r;++a)i=n[a],$n(i)||(t[i]=e[i]);return t}const qr=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton(e){return new Fe(e,1,e)},transient(e){return new Fe(e,2,e)}}),Kt=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:qr.singleton})}),_n=new Map;function En(e){return t=>Reflect.getOwnMetadata(e,t)}let Pn=null;const de=Object.freeze({createContainer(e){return new xt(null,Object.assign({},Kt.default,e))},findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:de.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(Ln,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||de.getOrCreateDOMContainer()},getOrCreateDOMContainer(e,t){return e?e.$$container$$||new xt(e,Object.assign({},Kt.default,t,{parentLocator:de.findParentContainer})):Pn||(Pn=new xt(null,Object.assign({},Kt.default,t,{parentLocator:()=>null})))},getDesignParamtypes:En("design:paramtypes"),getAnnotationParamtypes:En("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=_n.get(e);if(t===void 0){const n=e.inject;if(n===void 0){const r=de.getDesignParamtypes(e),i=de.getAnnotationParamtypes(e);if(r===void 0)if(i===void 0){const a=Object.getPrototypeOf(e);typeof a=="function"&&a!==Function.prototype?t=wt(de.getDependencies(a)):t=[]}else t=wt(i);else if(i===void 0)t=wt(r);else{t=wt(r);let a=i.length,l;for(let y=0;y<a;++y)l=i[y],l!==void 0&&(t[y]=l);const h=Object.keys(i);a=h.length;let x;for(let y=0;y<a;++y)x=h[y],$n(x)||(t[x]=i[x])}}else t=wt(n);_n.set(e,t)}return t},defineProperty(e,t,n,r=!1){const i=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let a=this[i];if(a===void 0&&(a=(this instanceof HTMLElement?de.findResponsibleContainer(this):de.getOrCreateDOMContainer()).get(n),this[i]=a,r&&this instanceof le)){const h=this.$fastController,x=()=>{const B=de.findResponsibleContainer(this).get(n),K=this[i];B!==K&&(this[i]=a,h.notify(t))};h.subscribe({handleChange:x},"isConnected")}return a}})},createInterface(e,t){const n=typeof e=="function"?e:t,r=typeof e=="string"?e:e&&"friendlyName"in e&&e.friendlyName||Bn,i=typeof e=="string"?!1:e&&"respectConnection"in e&&e.respectConnection||!1,a=function(l,h,x){if(l==null||new.target!==void 0)throw new Error(`No registration for interface: '${a.friendlyName}'`);if(h)de.defineProperty(l,h,a,i);else{const y=de.getOrCreateAnnotationParamTypes(l);y[x]=a}};return a.$isInterface=!0,a.friendlyName=r??"(anonymous)",n!=null&&(a.register=function(l,h){return n(new Ne(l,h??a))}),a.toString=function(){return`InterfaceSymbol<${a.friendlyName}>`},a},inject(...e){return function(t,n,r){if(typeof r=="number"){const i=de.getOrCreateAnnotationParamTypes(t),a=e[0];a!==void 0&&(i[r]=a)}else if(n)de.defineProperty(t,n,e[0]);else{const i=r?de.getOrCreateAnnotationParamTypes(r.value):de.getOrCreateAnnotationParamTypes(t);let a;for(let l=0;l<e.length;++l)a=e[l],a!==void 0&&(i[l]=a)}}},transient(e){return e.register=function(n){return St.transient(e,e).register(n)},e.registerInRequestor=!1,e},singleton(e,t=Qr){return e.register=function(r){return St.singleton(e,e).register(r)},e.registerInRequestor=t.scoped,e}}),Gr=de.createInterface("Container"),ta=null;function Ot(e){return function(t){const n=function(r,i,a){de.inject(n)(r,i,a)};return n.$isResolver=!0,n.resolve=function(r,i){return e(t,r,i)},n}}const na=de.inject;function Tn(e){return de.transient(e)}function ra(e){return e==null?Tn:Tn(e)}const Qr={scoped:!1};function ia(e){return de.singleton(e)}function oa(e){return typeof e=="function"?de.singleton(e):function(t){return de.singleton(t,e)}}function Yr(e){return function(t,n){n=!!n;const r=function(i,a,l){de.inject(r)(i,a,l)};return r.$isResolver=!0,r.resolve=function(i,a){return e(t,i,a,n)},r}}const sa=Yr((e,t,n,r)=>n.getAll(e,r)),aa=Ot((e,t,n)=>()=>n.get(e)),la=Ot((e,t,n)=>{if(n.has(e,!0))return n.get(e)});function en(e,t,n){de.inject(en)(e,t,n)}en.$isResolver=!0,en.resolve=()=>{};const ca=Ot((e,t,n)=>{const r=An(e,t),i=new Fe(e,0,r);return n.registerResolver(e,i),r}),ua=Ot((e,t,n)=>An(e,t));function An(e,t){return t.getFactory(e).construct(t)}class Fe{constructor(t,n,r){this.key=t,this.strategy=n,this.state=r,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,n){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(n),this.strategy=0,this.resolving=!1,this.state}case 2:{const r=t.getFactory(this.state);if(r===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return r.construct(n)}case 3:return this.state(t,n,this);case 4:return this.state[0].resolve(t,n);case 5:return n.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var n,r,i;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(i=(r=(n=t.getResolver(this.state))===null||n===void 0?void 0:n.getFactory)===null||r===void 0?void 0:r.call(n,t))!==null&&i!==void 0?i:null;default:return null}}}function Fn(e){return this.get(e)}function Jr(e,t){return t(e)}class Zr{constructor(t,n){this.Type=t,this.dependencies=n,this.transformers=null}construct(t,n){let r;return n===void 0?r=new this.Type(...this.dependencies.map(Fn,t)):r=new this.Type(...this.dependencies.map(Fn,t),...n),this.transformers==null?r:this.transformers.reduce(Jr,r)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const Xr={$isResolver:!0,resolve(e,t){return t}};function It(e){return typeof e.register=="function"}function Kr(e){return It(e)&&typeof e.registerInRequestor=="boolean"}function Dn(e){return Kr(e)&&e.registerInRequestor}function ei(e){return e.prototype!==void 0}const ti=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Ln="__DI_LOCATE_PARENT__",tn=new Map;class xt{constructor(t,n){this.owner=t,this.config=n,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Gr,Xr),t instanceof Node&&t.addEventListener(Ln,r=>{r.composedPath()[0]!==this.owner&&(r.detail.container=this,r.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...n){return this.context=t,this.register(...n),this.context=null,this}register(...t){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let n,r,i,a,l;const h=this.context;for(let x=0,y=t.length;x<y;++x)if(n=t[x],!!Cn(n))if(It(n))n.register(this,h);else if(ei(n))St.singleton(n,n).register(this);else for(r=Object.keys(n),a=0,l=r.length;a<l;++a)i=n[r[a]],Cn(i)&&(It(i)?i.register(this,h):this.register(i));return--this.registerDepth,this}registerResolver(t,n){Bt(t);const r=this.resolvers,i=r.get(t);return i==null?r.set(t,n):i instanceof Fe&&i.strategy===4?i.state.push(n):r.set(t,new Fe(t,4,[i,n])),n}registerTransformer(t,n){const r=this.getResolver(t);if(r==null)return!1;if(r.getFactory){const i=r.getFactory(this);return i==null?!1:(i.registerTransformer(n),!0)}return!1}getResolver(t,n=!0){if(Bt(t),t.resolve!==void 0)return t;let r=this,i;for(;r!=null;)if(i=r.resolvers.get(t),i==null){if(r.parent==null){const a=Dn(t)?this:r;return n?this.jitRegister(t,a):null}r=r.parent}else return i;return null}has(t,n=!1){return this.resolvers.has(t)?!0:n&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(Bt(t),t.$isResolver)return t.resolve(this,this);let n=this,r;for(;n!=null;)if(r=n.resolvers.get(t),r==null){if(n.parent==null){const i=Dn(t)?this:n;return r=this.jitRegister(t,i),r.resolve(n,this)}n=n.parent}else return r.resolve(n,this);throw new Error(`Unable to resolve key: ${t}`)}getAll(t,n=!1){Bt(t);const r=this;let i=r,a;if(n){let l=L;for(;i!=null;)a=i.resolvers.get(t),a!=null&&(l=l.concat(In(a,i,r))),i=i.parent;return l}else for(;i!=null;)if(a=i.resolvers.get(t),a==null){if(i=i.parent,i==null)return L}else return In(a,i,r);return L}getFactory(t){let n=tn.get(t);if(n===void 0){if(ni(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);tn.set(t,n=new Zr(t,de.getDependencies(t)))}return n}registerFactory(t,n){tn.set(t,n)}createChild(t){return new xt(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,n){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(ti.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(It(t)){const r=t.register(n);if(!(r instanceof Object)||r.resolve==null){const i=n.resolvers.get(t);if(i!=null)return i;throw new Error("A valid resolver was not returned from the static register method")}return r}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const r=this.config.defaultResolver(t,n);return n.resolvers.set(t,r),r}}}}const nn=new WeakMap;function On(e){return function(t,n,r){if(nn.has(r))return nn.get(r);const i=e(t,n,r);return nn.set(r,i),i}}const St=Object.freeze({instance(e,t){return new Fe(e,0,t)},singleton(e,t){return new Fe(e,1,t)},transient(e,t){return new Fe(e,2,t)},callback(e,t){return new Fe(e,3,t)},cachedCallback(e,t){return new Fe(e,3,On(t))},aliasTo(e,t){return new Fe(t,5,e)}});function Bt(e){if(e==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function In(e,t,n){if(e instanceof Fe&&e.strategy===4){const r=e.state;let i=r.length;const a=new Array(i);for(;i--;)a[i]=r[i].resolve(t,n);return a}return[e.resolve(t,n)]}const Bn="(anonymous)";function Cn(e){return typeof e=="object"&&e!==null||typeof e=="function"}const ni=function(){const e=new WeakMap;let t=!1,n="",r=0;return function(i){return t=e.get(i),t===void 0&&(n=i.toString(),r=n.length,t=r>=29&&r<=100&&n.charCodeAt(r-1)===125&&n.charCodeAt(r-2)<=32&&n.charCodeAt(r-3)===93&&n.charCodeAt(r-4)===101&&n.charCodeAt(r-5)===100&&n.charCodeAt(r-6)===111&&n.charCodeAt(r-7)===99&&n.charCodeAt(r-8)===32&&n.charCodeAt(r-9)===101&&n.charCodeAt(r-10)===118&&n.charCodeAt(r-11)===105&&n.charCodeAt(r-12)===116&&n.charCodeAt(r-13)===97&&n.charCodeAt(r-14)===110&&n.charCodeAt(r-15)===88,e.set(i,t)),t}}(),Ct={};function $n(e){switch(typeof e){case"number":return e>=0&&(e|0)===e;case"string":{const t=Ct[e];if(t!==void 0)return t;const n=e.length;if(n===0)return Ct[e]=!1;let r=0;for(let i=0;i<n;++i)if(r=e.charCodeAt(i),i===0&&r===48&&n>1||r<48||r>57)return Ct[e]=!1;return Ct[e]=!0}default:return!1}}function Mn(e){return`${e.toLowerCase()}:presentation`}const $t=new Map,Nn=Object.freeze({define(e,t,n){const r=Mn(e);$t.get(r)===void 0?$t.set(r,t):$t.set(r,!1),n.register(St.instance(r,t))},forTag(e,t){const n=Mn(e),r=$t.get(n);return r===!1?de.findResponsibleContainer(t).get(n):r||null}});class ri{constructor(t,n){this.template=t||null,this.styles=n===void 0?null:Array.isArray(n)?R.create(n):n instanceof R?n:R.create([n])}applyTo(t){const n=t.$fastController;n.template===null&&(n.template=this.template),n.styles===null&&(n.styles=this.styles)}}class st extends le{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Nn.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(n={})=>new ii(this===st?class extends st{}:this,t,n)}}te([g],st.prototype,"template",void 0),te([g],st.prototype,"styles",void 0);function Rt(e,t,n){return typeof e=="function"?e(t,n):e}class ii{constructor(t,n,r){this.type=t,this.elementDefinition=n,this.overrideDefinition=r,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,n){const r=this.definition,i=this.overrideDefinition,l=`${r.prefix||n.elementPrefix}-${r.baseName}`;n.tryDefineElement({name:l,type:this.type,baseClass:this.elementDefinition.baseClass,callback:h=>{const x=new ri(Rt(r.template,h,r),Rt(r.styles,h,r));h.definePresentation(x);let y=Rt(r.shadowOptions,h,r);h.shadowRootMode&&(y?i.shadowOptions||(y.mode=h.shadowRootMode):y!==null&&(y={mode:h.shadowRootMode})),h.defineElement({elementOptions:Rt(r.elementOptions,h,r),shadowOptions:y,attributes:Rt(r.attributes,h,r)})}})}}class Un{createCSS(){return""}createBehavior(){}}function rn(e){const t=e.parentElement;if(t)return t;{const n=e.getRootNode();if(n.host instanceof HTMLElement)return n.host}return null}function oi(e,t){let n=t;for(;n!==null;){if(n===e)return!0;n=rn(n)}return!1}const Je=document.createElement("div");function si(e){return e instanceof le}class on{setProperty(t,n){$.queueUpdate(()=>this.target.setProperty(t,n))}removeProperty(t){$.queueUpdate(()=>this.target.removeProperty(t))}}class ai extends on{constructor(t){super();const n=new CSSStyleSheet;this.target=n.cssRules[n.insertRule(":host{}")].style,t.$fastController.addStyles(R.create([n]))}}class li extends on{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class ci extends on{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const n=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[n].style}}}class Vn{constructor(t){this.store=new Map,this.target=null;const n=t.$fastController;this.style=document.createElement("style"),n.addStyles(this.style),M.getNotifier(n).subscribe(this,"isConnected"),this.handleChange(n,"isConnected")}targetChanged(){if(this.target!==null)for(const[t,n]of this.store.entries())this.target.setProperty(t,n)}setProperty(t,n){this.store.set(t,n),$.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,n)})}removeProperty(t){this.store.delete(t),$.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,n){const{sheet:r}=this.style;if(r){const i=r.insertRule(":host{}",r.cssRules.length);this.target=r.cssRules[i].style}else this.target=null}}te([g],Vn.prototype,"target",void 0);class ui{constructor(t){this.target=t.style}setProperty(t,n){$.queueUpdate(()=>this.target.setProperty(t,n))}removeProperty(t){$.queueUpdate(()=>this.target.removeProperty(t))}}class Re{setProperty(t,n){Re.properties[t]=n;for(const r of Re.roots.values())dt.getOrCreate(Re.normalizeRoot(r)).setProperty(t,n)}removeProperty(t){delete Re.properties[t];for(const n of Re.roots.values())dt.getOrCreate(Re.normalizeRoot(n)).removeProperty(t)}static registerRoot(t){const{roots:n}=Re;if(!n.has(t)){n.add(t);const r=dt.getOrCreate(this.normalizeRoot(t));for(const i in Re.properties)r.setProperty(i,Re.properties[i])}}static unregisterRoot(t){const{roots:n}=Re;if(n.has(t)){n.delete(t);const r=dt.getOrCreate(Re.normalizeRoot(t));for(const i in Re.properties)r.removeProperty(i)}}static normalizeRoot(t){return t===Je?document:t}}Re.roots=new Set,Re.properties={};const sn=new WeakMap,fi=$.supportsAdoptedStyleSheets?ai:Vn,dt=Object.freeze({getOrCreate(e){if(sn.has(e))return sn.get(e);let t;return e===Je?t=new Re:e instanceof Document?t=$.supportsAdoptedStyleSheets?new li:new ci:si(e)?t=new fi(e):t=new ui(e),sn.set(e,t),t}});class Pe extends Un{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Pe.uniqueId(),Pe.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new Pe({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return Pe.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const n=we.getOrCreate(t).get(this);if(n!==void 0)return n;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,n){return this._appliedTo.add(t),n instanceof Pe&&(n=this.alias(n)),we.getOrCreate(t).set(this,n),this}deleteValueFor(t){return this._appliedTo.delete(t),we.existsFor(t)&&we.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(Je,t),this}subscribe(t,n){const r=this.getOrCreateSubscriberSet(n);n&&!we.existsFor(n)&&we.getOrCreate(n),r.has(t)||r.add(t)}unsubscribe(t,n){const r=this.subscribers.get(n||this);r&&r.has(t)&&r.delete(t)}notify(t){const n=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(r=>r.handleChange(n)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(r=>r.handleChange(n))}alias(t){return n=>t.getValueFor(n)}}Pe.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),Pe.tokensById=new Map;class hi{startReflection(t,n){t.subscribe(this,n),this.handleChange({token:t,target:n})}stopReflection(t,n){t.unsubscribe(this,n),this.remove(t,n)}handleChange(t){const{token:n,target:r}=t;this.add(n,r)}add(t,n){dt.getOrCreate(n).setProperty(t.cssCustomProperty,this.resolveCSSValue(we.getOrCreate(n).get(t)))}remove(t,n){dt.getOrCreate(n).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}}class di{constructor(t,n,r){this.source=t,this.token=n,this.node=r,this.dependencies=new Set,this.observer=M.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,z))}}class pi{constructor(){this.values=new Map}set(t,n){this.values.get(t)!==n&&(this.values.set(t,n),M.getNotifier(this).notify(t.id))}get(t){return M.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const kt=new WeakMap,_t=new WeakMap;class we{constructor(t){this.target=t,this.store=new pi,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(n,r)=>{const i=Pe.getTokenById(r);if(i&&(i.notify(this.target),Pe.isCSSDesignToken(i))){const a=this.parent,l=this.isReflecting(i);if(a){const h=a.get(i),x=n.get(i);h!==x&&!l?this.reflectToCSS(i):h===x&&l&&this.stopReflectToCSS(i)}else l||this.reflectToCSS(i)}}},kt.set(t,this),M.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof le?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return kt.get(t)||new we(t)}static existsFor(t){return kt.has(t)}static findParent(t){if(Je!==t.target){let n=rn(t.target);for(;n!==null;){if(kt.has(n))return kt.get(n);n=rn(n)}return we.getOrCreate(Je)}return null}static findClosestAssignedNode(t,n){let r=n;do{if(r.has(t))return r;r=r.parent?r.parent:r.target!==Je?we.getOrCreate(Je):null}while(r!==null);return null}get parent(){return _t.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const n=this.store.get(t);if(n!==void 0)return n;const r=this.getRaw(t);if(r!==void 0)return this.hydrate(t,r),this.get(t)}getRaw(t){var n;return this.assignedValues.has(t)?this.assignedValues.get(t):(n=we.findClosestAssignedNode(t,this))===null||n===void 0?void 0:n.getRaw(t)}set(t,n){Pe.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,n),Pe.isDerivedDesignTokenValue(n)?this.setupBindingObserver(t,n):this.store.set(t,n)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const n=this.getRaw(t);n?this.hydrate(t,n):this.store.delete(t)}bind(){const t=we.findParent(this);t&&t.appendChild(this);for(const n of this.assignedValues.keys())n.notify(this.target)}unbind(){this.parent&&_t.get(this).removeChild(this)}appendChild(t){t.parent&&_t.get(t).removeChild(t);const n=this.children.filter(r=>t.contains(r));_t.set(t,this),this.children.push(t),n.forEach(r=>t.appendChild(r)),M.getNotifier(this.store).subscribe(t);for(const[r,i]of this.store.all())t.hydrate(r,this.bindingObservers.has(r)?this.getRaw(r):i)}removeChild(t){const n=this.children.indexOf(t);return n!==-1&&this.children.splice(n,1),M.getNotifier(this.store).unsubscribe(t),t.parent===this?_t.delete(t):!1}contains(t){return oi(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),we.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),we.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,n){const r=Pe.getTokenById(n);!r||this.hydrate(r,this.getRaw(r))}hydrate(t,n){if(!this.has(t)){const r=this.bindingObservers.get(t);Pe.isDerivedDesignTokenValue(n)?r?r.source!==n&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,n)):this.setupBindingObserver(t,n):(r&&this.tearDownBindingObserver(t),this.store.set(t,n))}}setupBindingObserver(t,n){const r=new di(n,t,this);return this.bindingObservers.set(t,r),r}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}}we.cssCustomPropertyReflector=new hi,te([g],we.prototype,"children",void 0);function gi(e){return Pe.from(e)}const jn=Object.freeze({create:gi,notifyConnection(e){return!e.isConnected||!we.existsFor(e)?!1:(we.getOrCreate(e).bind(),!0)},notifyDisconnection(e){return e.isConnected||!we.existsFor(e)?!1:(we.getOrCreate(e).unbind(),!0)},registerRoot(e=Je){Re.registerRoot(e)},unregisterRoot(e=Je){Re.unregisterRoot(e)}}),an=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ln=new Map,Mt=new Map;let pt=null;const Et=de.createInterface(e=>e.cachedCallback(t=>(pt===null&&(pt=new Hn(null,t)),pt))),Wn=Object.freeze({tagFor(e){return Mt.get(e)},responsibleFor(e){const t=e.$$designSystem$$;return t||de.findResponsibleContainer(e).get(Et)},getOrCreate(e){if(!e)return pt===null&&(pt=de.getOrCreateDOMContainer().get(Et)),pt;const t=e.$$designSystem$$;if(t)return t;const n=de.getOrCreateDOMContainer(e);if(n.has(Et,!1))return n.get(Et);{const r=new Hn(e,n);return n.register(St.instance(Et,r)),r}}});function bi(e,t,n){return typeof e=="string"?{name:e,type:t,callback:n}:e}class Hn{constructor(t,n){this.owner=t,this.container=n,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>an.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const n=this.container,r=[],i=this.disambiguate,a=this.shadowRootMode,l={elementPrefix:this.prefix,tryDefineElement(h,x,y){const B=bi(h,x,y),{name:K,callback:Q,baseClass:be}=B;let{type:ge}=B,Ee=K,Dt=ln.get(Ee),Zt=!0;for(;Dt;){const Sn=i(Ee,ge,Dt);switch(Sn){case an.ignoreDuplicate:return;case an.definitionCallbackOnly:Zt=!1,Dt=void 0;break;default:Ee=Sn,Dt=ln.get(Ee);break}}Zt&&((Mt.has(ge)||ge===st)&&(ge=class extends ge{}),ln.set(Ee,ge),Mt.set(ge,Ee),be&&Mt.set(be,Ee)),r.push(new yi(n,Ee,ge,a,Q,Zt))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&jn.registerRoot(this.designTokenRoot)),n.registerWithContext(l,...t);for(const h of r)h.callback(h),h.willDefine&&h.definition!==null&&h.definition.define();return this}}class yi{constructor(t,n,r,i,a,l){this.container=t,this.name=n,this.type=r,this.shadowRootMode=i,this.callback=a,this.willDefine=l,this.definition=null}definePresentation(t){Nn.define(this.name,t,this.container)}defineElement(t){this.definition=new Ie(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return Wn.tagFor(t)}}function vi(e){return Wn.getOrCreate(e).withPrefix("vscode")}var cn=function(e,t){return cn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},cn(e,t)};function fa(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");cn(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var zn=function(){return zn=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},zn.apply(this,arguments)};function ha(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function mi(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,r);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(a=(i<3?l(a):i>3?l(t,n,a):l(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function da(e,t){return function(n,r){t(n,r,e)}}function pa(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function ga(e,t,n,r){function i(a){return a instanceof n?a:new n(function(l){l(a)})}return new(n||(n=Promise))(function(a,l){function h(B){try{y(r.next(B))}catch(K){l(K)}}function x(B){try{y(r.throw(B))}catch(K){l(K)}}function y(B){B.done?a(B.value):i(B.value).then(h,x)}y((r=r.apply(e,t||[])).next())})}function ba(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,l;return l={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function h(y){return function(B){return x([y,B])}}function x(y){if(r)throw new TypeError("Generator is already executing.");for(;l&&(l=0,y[0]&&(n=0)),n;)try{if(r=1,i&&(a=y[0]&2?i.return:y[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,y[1])).done)return a;switch(i=0,a&&(y=[y[0]&2,a.value]),y[0]){case 0:case 1:a=y;break;case 4:return n.label++,{value:y[1],done:!1};case 5:n.label++,i=y[1],y=[0];continue;case 7:y=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(y[0]===6||y[0]===2)){n=0;continue}if(y[0]===3&&(!a||y[1]>a[0]&&y[1]<a[3])){n.label=y[1];break}if(y[0]===6&&n.label<a[1]){n.label=a[1],a=y;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(y);break}a[2]&&n.ops.pop(),n.trys.pop();continue}y=t.call(e,n)}catch(B){y=[6,B],i=0}finally{r=a=0}if(y[0]&5)throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}}var qn=Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]};function ya(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&qn(t,e,n)}function Gn(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function wi(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,a=[],l;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(h){l={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(l)throw l.error}}return a}function va(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(wi(arguments[t]));return e}function ma(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var a=arguments[t],l=0,h=a.length;l<h;l++,i++)r[i]=a[l];return r}function wa(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function Nt(e){return this instanceof Nt?(this.v=e,this):new Nt(e)}function xa(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,a=[];return i={},l("next"),l("throw"),l("return"),i[Symbol.asyncIterator]=function(){return this},i;function l(Q){r[Q]&&(i[Q]=function(be){return new Promise(function(ge,Ee){a.push([Q,be,ge,Ee])>1||h(Q,be)})})}function h(Q,be){try{x(r[Q](be))}catch(ge){K(a[0][3],ge)}}function x(Q){Q.value instanceof Nt?Promise.resolve(Q.value.v).then(y,B):K(a[0][2],Q)}function y(Q){h("next",Q)}function B(Q){h("throw",Q)}function K(Q,be){Q(be),a.shift(),a.length&&h(a[0][0],a[0][1])}}function Sa(e){var t,n;return t={},r("next"),r("throw",function(i){throw i}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(i,a){t[i]=e[i]?function(l){return(n=!n)?{value:Nt(e[i](l)),done:i==="return"}:a?a(l):l}:a}}function Ra(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof Gn=="function"?Gn(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(a){n[a]=e[a]&&function(l){return new Promise(function(h,x){l=e[a](l),i(h,x,l.done,l.value)})}}function i(a,l,h,x){Promise.resolve(x).then(function(y){a({value:y,done:h})},l)}}function ka(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var xi=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function _a(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&qn(t,e,n);return xi(t,e),t}function Ea(e){return e&&e.__esModule?e:{default:e}}function Pa(e,t,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(e):r?r.value:t.get(e)}function Ta(e,t,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(e,n):i?i.value=n:t.set(e,n),n}function Aa(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}class xe{}te([q({attribute:"aria-atomic"})],xe.prototype,"ariaAtomic",void 0),te([q({attribute:"aria-busy"})],xe.prototype,"ariaBusy",void 0),te([q({attribute:"aria-controls"})],xe.prototype,"ariaControls",void 0),te([q({attribute:"aria-current"})],xe.prototype,"ariaCurrent",void 0),te([q({attribute:"aria-describedby"})],xe.prototype,"ariaDescribedby",void 0),te([q({attribute:"aria-details"})],xe.prototype,"ariaDetails",void 0),te([q({attribute:"aria-disabled"})],xe.prototype,"ariaDisabled",void 0),te([q({attribute:"aria-errormessage"})],xe.prototype,"ariaErrormessage",void 0),te([q({attribute:"aria-flowto"})],xe.prototype,"ariaFlowto",void 0),te([q({attribute:"aria-haspopup"})],xe.prototype,"ariaHaspopup",void 0),te([q({attribute:"aria-hidden"})],xe.prototype,"ariaHidden",void 0),te([q({attribute:"aria-invalid"})],xe.prototype,"ariaInvalid",void 0),te([q({attribute:"aria-keyshortcuts"})],xe.prototype,"ariaKeyshortcuts",void 0),te([q({attribute:"aria-label"})],xe.prototype,"ariaLabel",void 0),te([q({attribute:"aria-labelledby"})],xe.prototype,"ariaLabelledby",void 0),te([q({attribute:"aria-live"})],xe.prototype,"ariaLive",void 0),te([q({attribute:"aria-owns"})],xe.prototype,"ariaOwns",void 0),te([q({attribute:"aria-relevant"})],xe.prototype,"ariaRelevant",void 0),te([q({attribute:"aria-roledescription"})],xe.prototype,"ariaRoledescription",void 0);class un{constructor(){this.targetIndex=0}}class Qn extends un{constructor(){super(...arguments),this.createPlaceholder=$.createInterpolationPlaceholder}}class Yn extends un{constructor(t,n,r){super(),this.name=t,this.behavior=n,this.options=r}createPlaceholder(t){return $.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function Si(e,t){this.source=e,this.context=t,this.bindingObserver===null&&(this.bindingObserver=M.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function Ri(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function ki(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function _i(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function Ei(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Pi(e){$.setAttribute(this.target,this.targetName,e)}function Ti(e){$.setBooleanAttribute(this.target,this.targetName,e)}function Ai(e){if(e==null&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Fi(e){this.target[this.targetName]=e}function Di(e){const t=this.classVersions||Object.create(null),n=this.target;let r=this.version||0;if(e!=null&&e.length){const i=e.split(/\s+/);for(let a=0,l=i.length;a<l;++a){const h=i[a];h!==""&&(t[h]=r,n.classList.add(h))}}if(this.classVersions=t,this.version=r+1,r!==0){r-=1;for(const i in t)t[i]===r&&n.classList.remove(i)}}class fn extends Qn{constructor(t){super(),this.binding=t,this.bind=Si,this.unbind=ki,this.updateTarget=Pi,this.isBindingVolatile=M.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=Fi,this.cleanedTargetName==="innerHTML"){const n=this.binding;this.binding=(r,i)=>$.createHTML(n(r,i))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=Ti;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=Ri,this.unbind=Ei;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=Di);break}}targetAtContent(){this.updateTarget=Ai,this.unbind=_i}createBehavior(t){return new Li(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Li{constructor(t,n,r,i,a,l,h){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=n,this.isBindingVolatile=r,this.bind=i,this.unbind=a,this.updateTarget=l,this.targetName=h}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){S.setEvent(t);const n=this.binding(this.source,this.context);S.setEvent(null),n!==!0&&t.preventDefault()}}let hn=null;class dn{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){hn=this}static borrow(t){const n=hn||new dn;return n.directives=t,n.reset(),hn=null,n}}function Oi(e){if(e.length===1)return e[0];let t;const n=e.length,r=e.map(l=>typeof l=="string"?()=>l:(t=l.targetName||t,l.binding)),i=(l,h)=>{let x="";for(let y=0;y<n;++y)x+=r[y](l,h);return x},a=new fn(i);return a.targetName=t,a}const Ii=D.length;function Jn(e,t){const n=t.split(d);if(n.length===1)return null;const r=[];for(let i=0,a=n.length;i<a;++i){const l=n[i],h=l.indexOf(D);let x;if(h===-1)x=l;else{const y=parseInt(l.substring(0,h));r.push(e.directives[y]),x=l.substring(h+Ii)}x!==""&&r.push(x)}return r}function Zn(e,t,n=!1){const r=t.attributes;for(let i=0,a=r.length;i<a;++i){const l=r[i],h=l.value,x=Jn(e,h);let y=null;x===null?n&&(y=new fn(()=>h),y.targetName=l.name):y=Oi(x),y!==null&&(t.removeAttributeNode(l),i--,a--,e.addFactory(y))}}function Bi(e,t,n){const r=Jn(e,t.textContent);if(r!==null){let i=t;for(let a=0,l=r.length;a<l;++a){const h=r[a],x=a===0?t:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);typeof h=="string"?x.textContent=h:(x.textContent=" ",e.captureContentBinding(h)),i=x,e.targetIndex++,x!==t&&n.nextNode()}e.targetIndex--}}function Ci(e,t){const n=e.content;document.adoptNode(n);const r=dn.borrow(t);Zn(r,e,!0);const i=r.behaviorFactories;r.reset();const a=$.createTemplateWalker(n);let l;for(;l=a.nextNode();)switch(r.targetIndex++,l.nodeType){case 1:Zn(r,l);break;case 3:Bi(r,l,a);break;case 8:$.isMarker(l)&&r.addFactory(t[$.extractDirectiveIndexFromMarker(l)])}let h=0;($.isMarker(n.firstChild)||n.childNodes.length===1&&t.length)&&(n.insertBefore(document.createComment(""),n.firstChild),h=-1);const x=r.behaviorFactories;return r.release(),{fragment:n,viewBehaviorFactories:x,hostBehaviorFactories:i,targetOffset:h}}const pn=document.createRange();class $i{constructor(t,n){this.fragment=t,this.behaviors=n,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const n=this.lastChild;if(t.previousSibling===n)return;const r=t.parentNode;let i=this.firstChild,a;for(;i!==n;)a=i.nextSibling,r.insertBefore(i,t),i=a;r.insertBefore(n,t)}}remove(){const t=this.fragment,n=this.lastChild;let r=this.firstChild,i;for(;r!==n;)i=r.nextSibling,t.appendChild(r),r=i;t.appendChild(n)}dispose(){const t=this.firstChild.parentNode,n=this.lastChild;let r=this.firstChild,i;for(;r!==n;)i=r.nextSibling,t.removeChild(r),r=i;t.removeChild(n);const a=this.behaviors,l=this.source;for(let h=0,x=a.length;h<x;++h)a[h].unbind(l)}bind(t,n){const r=this.behaviors;if(this.source!==t)if(this.source!==null){const i=this.source;this.source=t,this.context=n;for(let a=0,l=r.length;a<l;++a){const h=r[a];h.unbind(i),h.bind(t,n)}}else{this.source=t,this.context=n;for(let i=0,a=r.length;i<a;++i)r[i].bind(t,n)}}unbind(){if(this.source===null)return;const t=this.behaviors,n=this.source;for(let r=0,i=t.length;r<i;++r)t[r].unbind(n);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){pn.setStartBefore(t[0].firstChild),pn.setEndAfter(t[t.length-1].lastChild),pn.deleteContents();for(let n=0,r=t.length;n<r;++n){const i=t[n],a=i.behaviors,l=i.source;for(let h=0,x=a.length;h<x;++h)a[h].unbind(l)}}}}class Xn{constructor(t,n){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=n}create(t){if(this.fragment===null){let y;const B=this.html;if(typeof B=="string"){y=document.createElement("template"),y.innerHTML=$.createHTML(B);const Q=y.content.firstElementChild;Q!==null&&Q.tagName==="TEMPLATE"&&(y=Q)}else y=B;const K=Ci(y,this.directives);this.fragment=K.fragment,this.viewBehaviorFactories=K.viewBehaviorFactories,this.hostBehaviorFactories=K.hostBehaviorFactories,this.targetOffset=K.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const n=this.fragment.cloneNode(!0),r=this.viewBehaviorFactories,i=new Array(this.behaviorCount),a=$.createTemplateWalker(n);let l=0,h=this.targetOffset,x=a.nextNode();for(let y=r.length;l<y;++l){const B=r[l],K=B.targetIndex;for(;x!==null;)if(h===K){i[l]=B.createBehavior(x);break}else x=a.nextNode(),h++}if(this.hasHostBehaviors){const y=this.hostBehaviorFactories;for(let B=0,K=y.length;B<K;++B,++l)i[l]=y[B].createBehavior(t)}return new $i(n,i)}render(t,n,r){typeof n=="string"&&(n=document.getElementById(n)),r===void 0&&(r=n);const i=this.create(r);return i.bind(t,z),i.appendTo(n),i}}const Mi=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function fe(e,...t){const n=[];let r="";for(let i=0,a=e.length-1;i<a;++i){const l=e[i];let h=t[i];if(r+=l,h instanceof Xn){const x=h;h=()=>x}if(typeof h=="function"&&(h=new fn(h)),h instanceof Qn){const x=Mi.exec(l);x!==null&&(h.targetName=x[2])}h instanceof un?(r+=h.createPlaceholder(n.length),n.push(h)):r+=h}return r+=e[e.length-1],new Xn(r,n)}class Ni{constructor(t,n){this.target=t,this.propertyName=n}bind(t){t[this.propertyName]=this.target}unbind(){}}function Ue(e){return new Yn("fast-ref",Ni,e)}class Ui{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Vi=(e,t)=>fe`
    <span
        part="end"
        ${Ue("endContainer")}
        class=${n=>t.end?"end":void 0}
    >
        <slot name="end" ${Ue("end")} @slotchange="${n=>n.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,ji=(e,t)=>fe`
    <span
        part="start"
        ${Ue("startContainer")}
        class="${n=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Ue("start")}
            @slotchange="${n=>n.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`,Fa=fe`
    <span part="end" ${Ue("endContainer")}>
        <slot
            name="end"
            ${Ue("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Da=fe`
    <span part="start" ${Ue("startContainer")}>
        <slot
            name="start"
            ${Ue("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function Kn(e,...t){const n=ee.locate(e);t.forEach(r=>{Object.getOwnPropertyNames(r.prototype).forEach(a=>{a!=="constructor"&&Object.defineProperty(e.prototype,a,Object.getOwnPropertyDescriptor(r.prototype,a))}),ee.locate(r).forEach(a=>n.push(a))})}var er;(function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"})(er||(er={}));const La=18,Oa=40,Ia=37,Ba=39,Ca=38,$a=8,Ma=220,Na=19,Ua=20,Va=221,ja=186,Wa=59,Ha=188,za=17,qa=46,Ga=35,Qa=13,Ya=187,Ja=61,Za=107,Xa=27,Ka=191,el=112,tl=121,nl=122,rl=123,il=113,ol=114,sl=115,al=116,ll=117,cl=118,ul=119,fl=120,hl=36,dl=45,pl=93,gl=189,bl=109,yl=144,vl=96,ml=97,wl=98,xl=99,Sl=100,Rl=101,kl=102,_l=103,El=104,Pl=105,Tl=111,Al=110,Fl=109,Dl=106,Ll=107,Ol=219,Il=34,Bl=33,Cl=190,$l=44,Ml=222,Nl=145,Ul=16,Vl=32,jl=9,Wl=192,Hl=91,zl=219,ql=92,Wi="ArrowDown",Hi="ArrowLeft",zi="ArrowRight",qi="ArrowUp",Gi="Enter",Gl="Escape",Ql="Home",Yl="End",Jl="F2",Zl="PageDown",Xl="PageUp",Kl=" ",ec="Tab",tc="Backspace",nc="Delete",rc={ArrowDown:Wi,ArrowLeft:Hi,ArrowRight:zi,ArrowUp:qi},tr="form-associated-proxy",nr="ElementInternals",rr=nr in window&&"setFormValue"in window[nr].prototype,ir=new WeakMap;function or(e){const t=class extends e{constructor(...n){super(...n),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return rr}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const n=this.proxy.labels,r=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=n?r.concat(Array.from(n)):r;return Object.freeze(i)}else return L}valueChanged(n,r){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(n,r){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(n,r){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),$.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(n,r){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(n,r){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),$.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!rr)return null;let n=ir.get(this);return n||(n=this.attachInternals(),ir.set(this,n)),n}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(n=>this.proxy.removeEventListener(n,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(n,r,i){this.elementInternals?this.elementInternals.setValidity(n,r,i):typeof r=="string"&&this.proxy.setCustomValidity(r)}formDisabledCallback(n){this.disabled=n}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var n;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(r=>this.proxy.addEventListener(r,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",tr),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",tr)),(n=this.shadowRoot)===null||n===void 0||n.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var n;this.removeChild(this.proxy),(n=this.shadowRoot)===null||n===void 0||n.removeChild(this.proxySlot)}validate(n){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,n)}setFormValue(n,r){this.elementInternals&&this.elementInternals.setFormValue(n,r||n)}_keypressHandler(n){switch(n.key){case Gi:if(this.form instanceof HTMLFormElement){const r=this.form.querySelector("[type=submit]");r?.click()}break}}stopPropagation(n){n.stopPropagation()}};return q({mode:"boolean"})(t.prototype,"disabled"),q({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),q({attribute:"current-value"})(t.prototype,"currentValue"),q(t.prototype,"name"),q({mode:"boolean"})(t.prototype,"required"),g(t.prototype,"value"),t}function ic(e){class t extends or(e){}class n extends t{constructor(...i){super(i),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(i,a){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),i!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(i,a){this.checked=this.currentChecked}updateForm(){const i=this.checked?this.value:null;this.setFormValue(i,i)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return attr({attribute:"checked",mode:"boolean"})(n.prototype,"checkedAttribute"),attr({attribute:"current-checked",converter:booleanConverter})(n.prototype,"currentChecked"),observable(n.prototype,"defaultChecked"),observable(n.prototype,"checked"),n}class Qi extends st{}class Yi extends or(Qi){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ve extends Yi{constructor(){super(...arguments),this.handleClick=t=>{var n;this.disabled&&((n=this.defaultSlottedContent)===null||n===void 0?void 0:n.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&((t=this.$fastController.definition.shadowOptions)===null||t===void 0?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,n){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),n==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),n==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const n=Array.from((t=this.control)===null||t===void 0?void 0:t.children);n&&n.forEach(r=>{r.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();const n=Array.from((t=this.control)===null||t===void 0?void 0:t.children);n&&n.forEach(r=>{r.removeEventListener("click",this.handleClick)})}}te([q({mode:"boolean"})],Ve.prototype,"autofocus",void 0),te([q({attribute:"form"})],Ve.prototype,"formId",void 0),te([q],Ve.prototype,"formaction",void 0),te([q],Ve.prototype,"formenctype",void 0),te([q],Ve.prototype,"formmethod",void 0),te([q({mode:"boolean"})],Ve.prototype,"formnovalidate",void 0),te([q],Ve.prototype,"formtarget",void 0),te([q],Ve.prototype,"type",void 0),te([g],Ve.prototype,"defaultSlottedContent",void 0);class Ut{}te([q({attribute:"aria-expanded"})],Ut.prototype,"ariaExpanded",void 0),te([q({attribute:"aria-pressed"})],Ut.prototype,"ariaPressed",void 0),Kn(Ut,xe),Kn(Ve,Ui,Ut);function oc(e){return e?function(t,n,r){return t.nodeType===1&&t.matches(e)}:function(t,n,r){return t.nodeType===1}}class Ji{constructor(t,n){this.target=t,this.options=n,this.source=null}bind(t){const n=this.options.property;this.shouldUpdate=M.getAccessors(t).some(r=>r.name===n),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(L),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class Zi extends Ji{constructor(t,n){super(t,n)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Vt(e){return typeof e=="string"&&(e={property:e}),new Yn("fast-slotted",Zi,e)}const Xi=(e,t)=>fe`
    <button
        class="control"
        part="control"
        ?autofocus="${n=>n.autofocus}"
        ?disabled="${n=>n.disabled}"
        form="${n=>n.formId}"
        formaction="${n=>n.formaction}"
        formenctype="${n=>n.formenctype}"
        formmethod="${n=>n.formmethod}"
        formnovalidate="${n=>n.formnovalidate}"
        formtarget="${n=>n.formtarget}"
        name="${n=>n.name}"
        type="${n=>n.type}"
        value="${n=>n.value}"
        aria-atomic="${n=>n.ariaAtomic}"
        aria-busy="${n=>n.ariaBusy}"
        aria-controls="${n=>n.ariaControls}"
        aria-current="${n=>n.ariaCurrent}"
        aria-describedby="${n=>n.ariaDescribedby}"
        aria-details="${n=>n.ariaDetails}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-errormessage="${n=>n.ariaErrormessage}"
        aria-expanded="${n=>n.ariaExpanded}"
        aria-flowto="${n=>n.ariaFlowto}"
        aria-haspopup="${n=>n.ariaHaspopup}"
        aria-hidden="${n=>n.ariaHidden}"
        aria-invalid="${n=>n.ariaInvalid}"
        aria-keyshortcuts="${n=>n.ariaKeyshortcuts}"
        aria-label="${n=>n.ariaLabel}"
        aria-labelledby="${n=>n.ariaLabelledby}"
        aria-live="${n=>n.ariaLive}"
        aria-owns="${n=>n.ariaOwns}"
        aria-pressed="${n=>n.ariaPressed}"
        aria-relevant="${n=>n.ariaRelevant}"
        aria-roledescription="${n=>n.ariaRoledescription}"
        ${Ue("control")}
    >
        ${ji(e,t)}
        <span class="content" part="content">
            <slot ${Vt("defaultSlottedContent")}></slot>
        </span>
        ${Vi(e,t)}
    </button>
`;function sr(e,t){const n=[];let r="";const i=[];for(let a=0,l=e.length-1;a<l;++a){r+=e[a];let h=t[a];if(h instanceof Un){const x=h.createBehavior();h=h.createCSS(),x&&i.push(x)}h instanceof R||h instanceof CSSStyleSheet?(r.trim()!==""&&(n.push(r),r=""),n.push(h)):r+=h}return r+=e[e.length-1],r.trim()!==""&&n.push(r),{styles:n,behaviors:i}}function De(e,...t){const{styles:n,behaviors:r}=sr(e,t),i=R.create(n);return r.length&&i.withBehaviors(...r),i}class Ki extends null{constructor(t,n){super(),this.behaviors=n,this.css="";const r=t.reduce((i,a)=>(typeof a=="string"?this.css+=a:i.push(a),i),[]);r.length&&(this.styles=ElementStyles.create(r))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function sc(e,...t){const{styles:n,behaviors:r}=sr(e,t);return new Ki(n,r)}const eo=":host([hidden]){display:none}";function to(e){return`${eo}:host{display:${e}}`}function no(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function ro(...e){return e.every(t=>t instanceof HTMLElement)}function ac(e,t){return!e||!t||!ro(e)?void 0:Array.from(e.querySelectorAll(t)).filter(r=>r.offsetParent!==null)}function lc(e){return e===null?null:e.which||e.keyCode||e.charCode}function io(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}let et;function oo(){if(typeof et=="boolean")return et;if(!no())return et=!1,et;const e=document.createElement("style"),t=io();t!==null&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),et=!0}catch{et=!1}finally{document.head.removeChild(e)}return et}let gt;function cc(){if(typeof gt=="boolean")return gt;try{gt=CSS.supports("display","grid")}catch{gt=!1}return gt}function uc(){return canUseDOM()&&(window.matchMedia("(forced-colors: none)").matches||window.matchMedia("(forced-colors: active)").matches)}function fc(){gt=void 0,et=void 0}const hc=null,jt=oo()?"focus-visible":"focus",so="not-allowed";function ao(e){window.addEventListener("load",()=>{new MutationObserver(()=>{ar(e)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),ar(e)})}function ar(e){const t=getComputedStyle(document.body),n=document.querySelector("body");if(n){const r=n.getAttribute("data-vscode-theme-kind");for(const[i,a]of e){let l=t.getPropertyValue(i).toString();r==="vscode-high-contrast"?(l.length===0&&a.name.includes("background")&&(l="transparent"),a.name==="button-icon-hover-background"&&(l="transparent")):a.name==="contrast-active-border"&&(l="transparent"),a.setValueFor(n,l)}}}const lr=new Map;let cr=!1;function J(e,t){const n=jn.create(e);if(t){if(t.includes("--fake-vscode-token")){const r="id"+Math.random().toString(16).slice(2);t=`${t}-${r}`}lr.set(t,n)}return cr||(ao(lr),cr=!0),n}const dc=J("background","--vscode-editor-background").withDefault("#1e1e1e"),tt=J("border-width").withDefault(1),lo=J("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),pc=J("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),gc=J("corner-radius").withDefault(0),ur=J("design-unit").withDefault(4),co=J("disabled-opacity").withDefault(.4),Wt=J("focus-border","--vscode-focusBorder").withDefault("#007fd4"),uo=J("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),bc=J("font-weight","--vscode-font-weight").withDefault("400"),fo=J("foreground","--vscode-foreground").withDefault("#cccccc"),yc=J("input-height").withDefault("26"),vc=J("input-min-width").withDefault("100px"),ho=J("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),po=J("type-ramp-base-line-height").withDefault("normal"),mc=J("type-ramp-minus1-font-size").withDefault("11px"),wc=J("type-ramp-minus1-line-height").withDefault("16px"),xc=J("type-ramp-minus2-font-size").withDefault("9px"),Sc=J("type-ramp-minus2-line-height").withDefault("16px"),Rc=J("type-ramp-plus1-font-size").withDefault("16px"),kc=J("type-ramp-plus1-line-height").withDefault("24px"),_c=J("scrollbarWidth").withDefault("10px"),Ec=J("scrollbarHeight").withDefault("10px"),Pc=J("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Tc=J("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Ac=J("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Fc=J("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Dc=J("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),go=J("button-border","--vscode-button-border").withDefault("transparent"),fr=J("button-icon-background").withDefault("transparent"),bo=J("button-icon-corner-radius").withDefault("5px"),yo=J("button-icon-outline-offset").withDefault(0),hr=J("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),vo=J("button-icon-padding").withDefault("3px"),bt=J("button-primary-background","--vscode-button-background").withDefault("#0e639c"),dr=J("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),pr=J("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),gn=J("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),mo=J("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),wo=J("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),xo=J("button-padding-horizontal").withDefault("11px"),So=J("button-padding-vertical").withDefault("4px"),Lc=J("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Oc=J("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Ic=J("checkbox-corner-radius").withDefault(3),Bc=J("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),Cc=J("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),$c=J("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Mc=J("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Nc=J("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Uc=J("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Vc=J("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),jc=J("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),Wc=J("dropdown-list-max-height").withDefault("200px"),Hc=J("input-background","--vscode-input-background").withDefault("#3c3c3c"),zc=J("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),qc=J("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),Gc=J("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),Qc=J("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Yc=J("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Jc=J("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Zc=J("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Xc=J("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),Kc=J("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),eu=J("panel-view-border","--vscode-panel-border").withDefault("#80808059"),tu=J("tag-corner-radius").withDefault("2px"),Ro=De`
	${to("inline-flex")} :host {
		outline: none;
		font-family: ${uo};
		font-size: ${ho};
		line-height: ${po};
		color: ${dr};
		background: ${bt};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${So} ${xo};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${tt} * 1px) solid ${go};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${pr};
	}
	:host(:active) {
		background: ${bt};
	}
	.control:${jt} {
		outline: calc(${tt} * 1px) solid ${Wt};
		outline-offset: calc(${tt} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${co};
		background: ${bt};
		cursor: ${so};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${ur} * 4px);
		height: calc(${ur} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,ko=De`
	:host([appearance='primary']) {
		background: ${bt};
		color: ${dr};
	}
	:host([appearance='primary']:hover) {
		background: ${pr};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${bt};
	}
	:host([appearance='primary']) .control:${jt} {
		outline: calc(${tt} * 1px) solid ${Wt};
		outline-offset: calc(${tt} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${bt};
	}
`,_o=De`
	:host([appearance='secondary']) {
		background: ${gn};
		color: ${mo};
	}
	:host([appearance='secondary']:hover) {
		background: ${wo};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${gn};
	}
	:host([appearance='secondary']) .control:${jt} {
		outline: calc(${tt} * 1px) solid ${Wt};
		outline-offset: calc(${tt} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${gn};
	}
`,Eo=De`
	:host([appearance='icon']) {
		background: ${fr};
		border-radius: ${bo};
		color: ${fo};
	}
	:host([appearance='icon']:hover) {
		background: ${hr};
		outline: 1px dotted ${lo};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${vo};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${hr};
	}
	:host([appearance='icon']) .control:${jt} {
		outline: calc(${tt} * 1px) solid ${Wt};
		outline-offset: ${yo};
	}
	:host([appearance='icon'][disabled]) {
		background: ${fr};
	}
`,Po=(e,t)=>De`
	${Ro}
	${ko}
	${_o}
	${Eo}
`;class gr extends Ve{connectedCallback(){if(super.connectedCallback(),!this.appearance){const t=this.getAttribute("appearance");this.appearance=t}}attributeChangedCallback(t,n,r){t==="appearance"&&r==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),t==="aria-label"&&(this.ariaLabel=r),t==="disabled"&&(this.disabled=r!==null)}}mi([q],gr.prototype,"appearance",void 0);const To=gr.compose({baseName:"button",template:Xi,styles:Po,shadowOptions:{delegatesFocus:!0}}),br=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,yr=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Ao=null;let at;const Pt=new Map;let nt,yt,rt;function nu(e){typeof e=="string"?e==="system"?nt=void 0:nt=[e]:nt=e??void 0,yt=void 0,rt=void 0,Pt.clear(),at=void 0}function ru(e,t){const n=new Date(e.getTime());for(const[r,i]of Object.entries(t))if(!!i)switch(r){case"years":n.setFullYear(n.getFullYear()+i);break;case"months":n.setMonth(n.getMonth()+i);break;case"days":n.setDate(n.getDate()+i);break;case"hours":n.setHours(n.getHours()+i);break;case"minutes":n.setMinutes(n.getMinutes()+i);break;case"seconds":n.setSeconds(n.getSeconds()+i);break}return n}function iu(e,t){const n=(typeof e=="number"?e:e.getTime())-new Date().getTime();for(const[r,i,a,l]of Ao){const h=Math.abs(n);if(h>=i||i===1e3)return t?(at==null&&(rt!=null?at=rt.resolvedOptions().locale:yt!=null?at=yt.resolvedOptions().locale:(rt=new Intl.RelativeTimeFormat(nt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),at=rt.resolvedOptions().locale)),at==="en"||at?.startsWith("en-")?`${Math.round(h/a)}${l}`:(rt==null&&(rt=new Intl.RelativeTimeFormat(nt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),rt.format(Math.round(n/a),r))):(yt==null&&(yt=new Intl.RelativeTimeFormat(nt,{localeMatcher:"best fit",numeric:"auto",style:"long"})),yt.format(Math.round(n/a),r))}return""}function ou(e,t,n,r=!0){t=t??void 0;const i=`${n??""}:${t}`;let a=Pt.get(i);if(a==null){const x=Do(t);let y;n==null?y=nt:n==="system"?y=void 0:y=[n],a=new Intl.DateTimeFormat(y,x),r&&Pt.set(i,a)}if(t==null||yr.test(t))return a.format(e);function l(x){const y=`${n??""}:time:${x}`;let B=Pt.get(y);if(B==null){const K={localeMatcher:"best fit",timeStyle:x};let Q;n==null?Q=nt:n==="system"?Q=void 0:Q=[n],B=new Intl.DateTimeFormat(Q,K),r&&Pt.set(y,B)}return B}const h=a.formatToParts(e);return t.replace(br,(x,y,B,K,Q,be,ge,Ee,Dt,Zt,Sn,Zu,Xu,Ku,jr)=>{if(y!=null)return y.substring(1,y.length-1);for(const Wr in jr){const Rn=jr[Wr];if(Rn==null)continue;const Lt=h.find(Hr=>Hr.type===Wr);return Rn==="Do"&&Lt?.type==="day"?Lo(Number(Lt.value)):Rn==="a"&&Lt?.type==="dayPeriod"?` ${(l("short").formatToParts(e).find(Ks=>Ks.type==="dayPeriod")??Lt)?.value??""}`:Lt?.value??""}return""})}function Fo(e,t,n){const r=(typeof t=="number"?t:t.getTime())-(typeof e=="number"?e:e.getTime());switch(n){case"days":return Math.floor(r/(1e3*60*60*24));case"hours":return Math.floor(r/(1e3*60*60));case"minutes":return Math.floor(r/(1e3*60));case"seconds":return Math.floor(r/1e3);default:return r}}function Do(e){if(e==null)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=yr.exec(e);if(t?.groups!=null){const{dateStyle:r,timeStyle:i}=t.groups;return{localeMatcher:"best fit",dateStyle:r||"full",timeStyle:i||void 0}}const n={localeMatcher:"best fit"};for(const{groups:r}of e.matchAll(br))if(r!=null)for(const i in r){const a=r[i];if(a!=null)switch(i){case"year":n.year=a.length===4?"numeric":"2-digit";break;case"month":switch(a.length){case 4:n.month="long";break;case 3:n.month="short";break;case 2:n.month="2-digit";break;case 1:n.month="numeric";break}break;case"day":a==="DD"?n.day="2-digit":n.day="numeric";break;case"weekday":switch(a.length){case 4:n.weekday="long";break;case 3:n.weekday="short";break;case 2:n.weekday="narrow";break}break;case"hour":n.hour=a.length===2?"2-digit":"numeric",n.hour12=a==="hh"||a==="h";break;case"minute":n.minute=a.length===2?"2-digit":"numeric";break;case"second":n.second=a.length===2?"2-digit":"numeric";break;case"fractionalSecond":n.fractionalSecondDigits=3;break;case"dayPeriod":n.dayPeriod="narrow",n.hour12=!0,n.hourCycle="h12";break;case"timeZoneName":n.timeZoneName=a.length===2?"long":"short";break}}return n}const bn=null;function Lo(e){const t=e%100;return`${e}${bn[(t-20)%10]??bn[t]??bn[0]}`}var Oo=(e=>(e.Free="free",e.FreePlus="free+",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))(Oo||{}),re=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.Paid=5]="Paid",e))(re||{});function su(e){const{account:t,plan:{actual:n,effective:r},previewTrial:i}=e;if(t?.verified===!1)return-1;if(n.id===r.id)switch(r.id){case"free":return i==null?0:2;case"free+":return 4;case"pro":case"teams":case"enterprise":return 5}switch(r.id){case"free":return i==null?0:1;case"free+":return 4;case"pro":return n.id==="free"?1:3;case"teams":case"enterprise":return 5}}function au(e,t,n){return{id:e,name:Io(e),startedOn:(t??new Date).toISOString(),expiresOn:n?.toISOString()}}function Io(e){switch(e){case"free+":return"GitLens Free";case"pro":return"GitLens Pro";case"teams":return"GitLens Teams";case"enterprise":return"GitLens Enterprise";case"free":default:return"GitLens"}}const Bo=new Map([[void 0,-1],["free",0],["free+",1],["pro",2],["teams",3],["enterprise",4]]);function lu(e){return Bo.get(e)}function vr(e,t){return mr(e.plan.effective.expiresOn,t)}function mr(e,t){return e!=null?Fo(Date.now(),new Date(e),t):void 0}function cu(e){return Co(e.plan.effective.id)}function Co(e){return e!=="free"&&e!=="free+"}function uu(e){const t=vr(e);return t!=null&&t<=0}function fu(e){return e.plan.actual.id!==e.plan.effective.id}function hu(e){const t=mr(e.previewTrial?.expiresOn);return t!=null?t<=0:void 0}class wr{constructor(t,n=!1){this.method=t,this.overwriteable=n}}class Ze extends wr{}class lt extends wr{}function Tt(e,t,n){e.method===t.method&&n(t.params,e)}const $o=new Ze("webview/ready"),xr=new Ze("webview/focus"),Mo=new Ze("command/execute"),du=new Ze("configuration/preview"),pu=new Ze("configuration/update"),gu=new lt("configuration/didChange"),bu=new lt("configuration/didPreview"),yu=new lt("webview/didOpenAnchor");var No=(e=>(e.DismissedWelcome="dismissed:welcome",e.OpenedSCM="opened:scm",e))(No||{});const Uo=new Ze("home/step/complete"),Vo=new Ze("home/section/dismiss"),jo=new Ze("home/status/dismiss"),Wo=new Ze("home/banner/dismiss"),Sr=new lt("subscription/didChange"),Rr=new lt("extensionEnabled/didChange"),kr=new lt("configuration/didChange"),_r=new lt("layout/didChange");var je;(e=>{function t(i,a,l,h){let x=!1;if(typeof i=="string"){const B=function(K){const Q=K?.target?.closest(i);Q!=null&&l(K,Q)};return document.addEventListener(a,B,h??!0),{dispose:()=>{x||(x=!0,document.removeEventListener(a,B,h??!0))}}}const y=function(B){l(B,this)};return i.addEventListener(a,y,h??!1),{dispose:()=>{x||(x=!0,i.removeEventListener(a,y,h??!1))}}}e.on=t;function n(i,a,l){const h=document.getElementById(i);if(a.replaceChildren(h?.content.cloneNode(!0)),a.className=h.className,l?.visible!=null){const x=a.querySelectorAll("[data-visible]");for(const y of x){const B=y.dataset.visible;!B||(l.visible[B]?y.style.display="initial":y.style.display="none")}}if(l?.bindings!=null){const x=a.querySelectorAll("[data-bind]");for(const y of x){const B=y.dataset.bind;if(!B)continue;const K=l.bindings[B];K!=null&&(y.textContent=String(K))}}}e.insertTemplate=n;function r(i){i.replaceChildren(),i.className=""}e.resetSlot=r})(je||(je={}));const Ho=/^(?:(#?)([0-9a-f]{3}|[0-9a-f]{6})|((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\))$/i;function yn(e,t){const n=e+t,r=t<0?n<0?0:n:n>255?255:n;return Math.round(r)}function ke(e,t){return _e(e,-t)}function _e(e,t){const n=zt(e);if(n==null)return e;const[r,i,a,l]=n,h=255*t/100;return`rgba(${yn(r,h)}, ${yn(i,h)}, ${yn(a,h)}, ${l})`}function Be(e,t){const n=zt(e);if(n==null)return e;const[r,i,a,l]=n;return`rgba(${r}, ${i}, ${a}, ${l*(t/100)})`}function vu(e,t,n){const r=zt(e),i=zt(t);if(r==null||i==null)return e;const[a,l,h,x]=r,[y,B,K,Q]=i;return`rgba(${Ht(a,y,n)}, ${Ht(l,B,n)}, ${Ht(h,K,n)}, ${Ht(x,Q,n)})`}const Ht=(e,t,n)=>e+(t-e)*n/100;function zt(e){e=e.trim();const t=Ho.exec(e);if(t==null)return null;if(t[1]==="#"){const n=t[2];switch(n.length){case 3:return[parseInt(n[0]+n[0],16),parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),1];case 6:return[parseInt(n.substring(0,2),16),parseInt(n.substring(2,4),16),parseInt(n.substring(4,6),16),1]}return null}switch(t[3]){case"rgb":return[parseInt(t[4],10),parseInt(t[5],10),parseInt(t[6],10),1];case"rgba":return[parseInt(t[4],10),parseInt(t[5],10),parseInt(t[6],10),parseFloat(t[7])];default:return null}}const Er=class{constructor(){this._disposed=!1}get event(){return this._event==null&&(this._event=(e,t,n)=>{this.listeners==null&&(this.listeners=new Tr);const r=this.listeners.push(t==null?e:[e,t]),i={dispose:()=>{i.dispose=Er._noop,this._disposed||r()}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){if(this.listeners!=null){this._deliveryQueue==null&&(this._deliveryQueue=new Tr);for(let t=this.listeners.iterator(),n=t.next();!n.done;n=t.next())this._deliveryQueue.push([n.value,e]);for(;this._deliveryQueue.size>0;){const[t,n]=this._deliveryQueue.shift();try{typeof t=="function"?t(n):t[0].call(t[1],n)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let Pr=Er;Pr._noop=function(){};const zo={done:!0,value:void 0},qt=class{constructor(e){this.element=e,this.next=qt.Undefined,this.prev=qt.Undefined}};let ve=qt;ve.Undefined=new qt(void 0);class Tr{constructor(){this._first=ve.Undefined,this._last=ve.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===ve.Undefined}clear(){this._first=ve.Undefined,this._last=ve.Undefined,this._size=0}unshift(t){return this._insert(t,!1)}push(t){return this._insert(t,!0)}_insert(t,n){const r=new ve(t);if(this._first===ve.Undefined)this._first=r,this._last=r;else if(n){const a=this._last;this._last=r,r.prev=a,a.next=r}else{const a=this._first;this._first=r,r.next=a,a.prev=r}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(r))}}shift(){if(this._first===ve.Undefined)return;const t=this._first.element;return this._remove(this._first),t}pop(){if(this._last===ve.Undefined)return;const t=this._last.element;return this._remove(this._last),t}_remove(t){if(t.prev!==ve.Undefined&&t.next!==ve.Undefined){const n=t.prev;n.next=t.next,t.next.prev=n}else t.prev===ve.Undefined&&t.next===ve.Undefined?(this._first=ve.Undefined,this._last=ve.Undefined):t.next===ve.Undefined?(this._last=this._last.prev,this._last.next=ve.Undefined):t.prev===ve.Undefined&&(this._first=this._first.next,this._first.prev=ve.Undefined);this._size-=1}iterator(){let t,n=this._first;return{next:function(){return n===ve.Undefined?zo:(t==null?t={done:!1,value:n.element}:t.value=n.element,n=n.next,t)}}}toArray(){const t=[];for(let n=this._first;n!==ve.Undefined;n=n.next)t.push(n.element);return t}}const Ar=new Pr,qo=Ar.event;function Go(){const e=n=>{const r=document.body,i=window.getComputedStyle(r),a=r.classList.contains("vscode-light")||r.classList.contains("vscode-high-contrast-light"),l=r.style;l.setProperty("--font-family",i.getPropertyValue("--vscode-font-family").trim()),l.setProperty("--font-size",i.getPropertyValue("--vscode-font-size").trim()),l.setProperty("--font-weight",i.getPropertyValue("--vscode-font-weight").trim()),l.setProperty("--editor-font-family",i.getPropertyValue("--vscode-editor-font-family").trim()),l.setProperty("--editor-font-size",i.getPropertyValue("--vscode-editor-font-size").trim()),l.setProperty("--editor-font-weight",i.getPropertyValue("--vscode-editor-font-weight").trim());const h=i.getPropertyValue("--vscode-editor-background").trim();let x=h;l.setProperty("--color-background",x),l.setProperty("--color-background--lighten-05",_e(x,5)),l.setProperty("--color-background--darken-05",ke(x,5)),l.setProperty("--color-background--lighten-075",_e(x,7.5)),l.setProperty("--color-background--darken-075",ke(x,7.5)),l.setProperty("--color-background--lighten-10",_e(x,10)),l.setProperty("--color-background--darken-10",ke(x,10)),l.setProperty("--color-background--lighten-15",_e(x,15)),l.setProperty("--color-background--darken-15",ke(x,15)),l.setProperty("--color-background--lighten-30",_e(x,30)),l.setProperty("--color-background--darken-30",ke(x,30)),l.setProperty("--color-background--lighten-50",_e(x,50)),l.setProperty("--color-background--darken-50",ke(x,50)),x=i.getPropertyValue("--vscode-button-background").trim(),l.setProperty("--color-button-background",x),l.setProperty("--color-button-background--darken-30",ke(x,30)),l.setProperty("--color-highlight",x),l.setProperty("--color-highlight--75",Be(x,75)),l.setProperty("--color-highlight--50",Be(x,50)),l.setProperty("--color-highlight--25",Be(x,25)),x=i.getPropertyValue("--vscode-button-secondaryBackground").trim(),l.setProperty("--color-button-secondary-background",x),l.setProperty("--color-button-secondary-background--darken-30",ke(x,30)),x=i.getPropertyValue("--vscode-button-foreground").trim(),l.setProperty("--color-button-foreground",x);let y=i.getPropertyValue("--vscode-editor-foreground").trim();y||(y=i.getPropertyValue("--vscode-foreground").trim()),l.setProperty("--color-foreground",y),l.setProperty("--color-foreground--85",Be(y,85)),l.setProperty("--color-foreground--75",Be(y,75)),l.setProperty("--color-foreground--65",Be(y,65)),l.setProperty("--color-foreground--50",Be(y,50)),x=i.getPropertyValue("--vscode-focusBorder").trim(),l.setProperty("--color-focus-border",x),x=i.getPropertyValue("--vscode-textLink-foreground").trim(),l.setProperty("--color-link-foreground",x),l.setProperty("--color-link-foreground--darken-20",ke(x,20)),l.setProperty("--color-link-foreground--lighten-20",_e(x,20)),x=i.getPropertyValue("--vscode-sideBar-background").trim(),l.setProperty("--color-view-background",x||h),x=i.getPropertyValue("--vscode-sideBar-foreground").trim(),l.setProperty("--color-view-foreground",x||y),l.setProperty("--color-view-header-foreground",i.getPropertyValue("--vscode-sideBarSectionHeader-foreground").trim()||x||y),x=i.getPropertyValue("--vscode-editorHoverWidget-background").trim(),l.setProperty("--color-hover-background",x),x=i.getPropertyValue("--vscode-editorHoverWidget-border").trim(),l.setProperty("--color-hover-border",x),x=i.getPropertyValue("--vscode-editorHoverWidget-foreground").trim(),l.setProperty("--color-hover-foreground",x),x=i.getPropertyValue("--vscode-editorHoverWidget-statusBarBackground").trim(),l.setProperty("--color-hover-statusBarBackground",x),l.setProperty("--graph-theme-opacity-factor",a?"0.5":"1"),l.setProperty("--color-graph-actionbar-background",a?ke(h,5):_e(h,5)),l.setProperty("--color-graph-actionbar-selectedBackground",a?ke(h,10):_e(h,10)),l.setProperty("--color-graph-background",a?ke(h,5):_e(h,5)),l.setProperty("--color-graph-background2",a?ke(h,10):_e(h,10)),x=i.getPropertyValue("--vscode-list-focusOutline").trim(),l.setProperty("--color-graph-contrast-border-color",x),x=i.getPropertyValue("--vscode-list-activeSelectionBackground").trim(),l.setProperty("--color-graph-selected-row",x),x=i.getPropertyValue("--vscode-list-hoverBackground").trim(),l.setProperty("--color-graph-hover-row",x),x=i.getPropertyValue("--vscode-list-activeSelectionForeground").trim(),l.setProperty("--color-graph-text-selected-row",x),l.setProperty("--color-graph-text-dimmed-selected",Be(x,50)),l.setProperty("--color-graph-text-dimmed",Be(y,20)),x=i.getPropertyValue("--vscode-list-hoverForeground").trim(),l.setProperty("--color-graph-text-hovered",x),l.setProperty("--color-graph-text-selected",y),l.setProperty("--color-graph-text-normal",Be(y,85)),l.setProperty("--color-graph-text-secondary",Be(y,65)),l.setProperty("--color-graph-text-disabled",Be(y,50)),x=i.getPropertyValue("--vscode-inputValidation-infoBackground").trim(),l.setProperty("--color-alert-infoHoverBackground",a?ke(x,5):_e(x,5)),l.setProperty("--color-alert-infoBackground",x),x=i.getPropertyValue("--vscode-inputValidation-warningBackground").trim(),l.setProperty("--color-alert-warningHoverBackground",a?ke(x,5):_e(x,5)),l.setProperty("--color-alert-warningBackground",x),x=i.getPropertyValue("--vscode-inputValidation-errorBackground").trim(),l.setProperty("--color-alert-errorHoverBackground",a?ke(x,5):_e(x,5)),l.setProperty("--color-alert-errorBackground",x),x=a?ke(h,5):_e(h,5),l.setProperty("--color-alert-neutralHoverBackground",a?ke(x,5):_e(x,5)),l.setProperty("--color-alert-neutralBackground",x),l.setProperty("--color-alert-infoBorder","var(--vscode-inputValidation-infoBorder)"),l.setProperty("--color-alert-warningBorder","var(--vscode-inputValidation-warningBorder)"),l.setProperty("--color-alert-errorBorder","var(--vscode-inputValidation-errorBorder)"),l.setProperty("--color-alert-neutralBorder","var(--vscode-input-foreground)"),l.setProperty("--color-alert-foreground","var(--vscode-input-foreground)"),n!=null&&Ar.fire()};e();const t=new MutationObserver(e);return t.observe(document.body,{attributeFilter:["class"]}),t}const Qo=2**30;let Gt=0;function Fr(){return Gt===Qo?Gt=1:Gt++,`webview:${Gt}`}class Yo{constructor(t){this.appName=t,this.state=window.bootstrap,window.bootstrap=void 0,this.log(`${this.appName}()`),this._api=acquireVsCodeApi(),this.onThemeUpdated!=null&&qo(this.onThemeUpdated,this),Go(),requestAnimationFrame(()=>{this.log(`${this.appName}.initializing`);try{this.onInitialize?.(),this.bind(),this.onMessageReceived!=null&&window.addEventListener("message",this.onMessageReceived.bind(this)),this.sendCommand($o,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}})}bind(){this.bindDisposables?.forEach(t=>t.dispose()),this.bindDisposables=this.onBind?.(),this.bindDisposables==null&&(this.bindDisposables=[]),this.bindDisposables.push(je.on(document,"focusin",t=>{const n=t.target?.tagName.includes("-")||t.target?.closest("input")!=null;(this._focused!==!0||this._inputFocused!==n)&&(this._focused=!0,this._inputFocused=n,this.sendCommand(xr,{focused:!0,inputFocused:n}))}),je.on(document,"focusout",()=>{(this._focused!==!1||this._inputFocused!==!1)&&(this._focused=!1,this._inputFocused=!1,this.sendCommand(xr,{focused:!1,inputFocused:!1}))}))}log(t,...n){}getState(){return this._api.getState()}sendCommand(t,n){const r=Fr();this.log(`${this.appName}.sendCommand(${r}): name=${t.method}`),this.postMessage({id:r,method:t.method,params:n})}async sendCommandWithCompletion(t,n,r){const i=Fr();this.log(`${this.appName}.sendCommandWithCompletion(${i}): name=${t.method}`);const a=new Promise((l,h)=>{let x;const y=[je.on(window,"message",B=>{Tt(r,B.data,K=>{B.data.completionId===i&&(y.forEach(Q=>Q.dispose()),queueMicrotask(()=>l(K)))})}),{dispose:function(){x!=null&&(clearTimeout(x),x=void 0)}}];x=setTimeout(()=>{x=void 0,y.forEach(B=>B.dispose()),h(new Error(`Timed out waiting for completion of ${r.method}`))},6e4)});return this.postMessage({id:i,method:t.method,params:n,completionId:i}),a}setState(t){this.state=t,t!=null&&this._api.setState(t)}postMessage(t){this._api.postMessage(t)}}var Jo=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,Qt=(e,t,n,r)=>{for(var i=r>1?void 0:r?Zo(t,n):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(i=(r?l(t,n,i):l(i))||i);return r&&i&&Jo(t,n,i),i};const Xo=De`
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
`;let At=class extends le{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}sizeChanged(){this.style.setProperty("--code-icon-size",`${this.size}px`)}};Qt([q],At.prototype,"icon",2),Qt([q],At.prototype,"modifier",2),Qt([q],At.prototype,"size",2),At=Qt([Se({name:"code-icon",styles:Xo})],At);function me(e,t){const n=typeof t=="function"?t:()=>t;return(r,i)=>e(r,i)?n(r,i):null}function Dr(...e){return e.some(t=>(t?.length??0)>0)}function mu(e){return t=>t.nodeType===e}const Ko=De`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;var es=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,Xe=(e,t,n,r)=>{for(var i=r>1?void 0:r?ts(t,n):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(i=(r?l(t,n,i):l(i))||i);return r&&i&&es(t,n,i),i};const ns=fe`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${Vt("typeNodes")} name="type"></slot>
			<slot ${Vt("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${Vt("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${me(e=>e.caret,fe`<span class="caret"></span>`)}
	</template>
`,rs=De`
	${Ko}

	:host {
		position: absolute;
		width: var(--popover-width, 100%);
		max-width: var(--popover-max-width, 30rem);
		padding: 1.2rem 1.2rem 1.2rem;
		/* update with a standardized z-index */
		z-index: 10;

		background-color: var(--popover-bg);

		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	:host([caret]:not([placement~='bottom'])) {
		transform: translateY(0.8rem);
	}

	:host([caret][placement~='bottom']) {
		transform: translateY(-0.8rem);
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.5;
		margin-top: -0.4rem;
	}

	.heading {
		font-weight: 600;
	}

	.caret {
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.8rem solid transparent;
		border-right: 0.8rem solid transparent;
		border-bottom: 0.8rem solid var(--popover-bg);
	}

	:host(:not([placement~='bottom'])) .caret {
		bottom: 100%;
	}

	:host([placement~='bottom']) .caret {
		top: 100%;
		transform: rotate(180deg);
	}

	:host(:not([placement~='end'])) .caret {
		left: 1.2rem;
	}

	:host([placement~='end']) .caret {
		right: 1.2rem;
	}
`;let He=class extends le{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return Dr(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return Dr(this.headingNodes)}};Xe([q({mode:"boolean"})],He.prototype,"open",2),Xe([q({mode:"boolean"})],He.prototype,"caret",2),Xe([q],He.prototype,"placement",2),Xe([g],He.prototype,"typeNodes",2),Xe([g],He.prototype,"actionsNodes",2),Xe([g],He.prototype,"headingNodes",2),Xe([m],He.prototype,"hasTopNodes",1),Xe([m],He.prototype,"hasHeadingNodes",1),He=Xe([Se({name:"pop-over",template:ns,styles:rs})],He);const ze={toView:function(e){return e.toString()},fromView:function(e){return parseInt(e,10)}};var is=Object.defineProperty,os=Object.getOwnPropertyDescriptor,Ft=(e,t,n,r)=>{for(var i=r>1?void 0:r?os(t,n):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(i=(r?l(t,n,i):l(i))||i);return r&&i&&is(t,n,i),i};const ss=fe`<template role="region">
	${me(e=>e.noHeading===!1,fe`<header>
			<div class="heading" role="heading" aria-level="${e=>e.headingLevel}">
				<slot name="heading"></slot>
				<small class="description"><slot name="description"></slot></small>
			</div>
			${me(e=>e.dismissable,fe`<button
					class="dismiss"
					type="button"
					@click="${(e,t)=>e.handleDismiss(t.event)}"
					title="dismiss"
					aria-label="dismiss"
				>
					<code-icon icon="close"></code-icon>
				</button>`)}
		</header>`)}
	<div class="content"><slot></slot></div>
</template>`,as=De`
	* {
		box-sizing: border-box;
	}

	:host {
		display: block;
		padding: 1.2rem;
		background-color: var(--card-background);
		margin-bottom: 1rem;
		border-radius: 0.4rem;
		background-repeat: no-repeat;
		background-size: cover;
		transition: aspect-ratio linear 100ms, background-color linear 100ms;
	}

	:host(:hover) {
		background-color: var(--card-hover-background);
	}

	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 0.4rem;
		margin-bottom: 1rem;
	}

	.dismiss {
		width: 2rem;
		height: 2rem;
		padding: 0;
		font-size: var(--vscode-editor-font-size);
		line-height: 2rem;
		font-family: inherit;
		border: none;
		color: inherit;
		background: none;
		text-align: left;
		cursor: pointer;
		opacity: 0.5;
		flex: none;
		text-align: center;
	}

	.dismiss:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 0.2rem;
	}

	.heading {
		text-transform: uppercase;
	}

	.description {
		margin-left: 0.2rem;
		text-transform: none;
		/* color needs to come from some sort property */
		color: #b68cd8;
	}
`;let vt=class extends le{constructor(){super(...arguments),this.noHeading=!1,this.headingLevel=2,this.dismissable=!1,this.expanded=!0}handleDismiss(e){this.$emit("dismiss")}};Ft([q({attribute:"no-heading",mode:"boolean"})],vt.prototype,"noHeading",2),Ft([q({attribute:"heading-level",converter:ze})],vt.prototype,"headingLevel",2),Ft([q({mode:"boolean"})],vt.prototype,"dismissable",2),Ft([q({mode:"boolean"})],vt.prototype,"expanded",2),vt=Ft([Se({name:"card-section",template:ss,styles:as})],vt);var ls=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,vn=(e,t,n,r)=>{for(var i=r>1?void 0:r?cs(t,n):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(i=(r?l(t,n,i):l(i))||i);return r&&i&&ls(t,n,i),i};const us=fe`<template role="region">
	<header class="heading" role="heading" aria-level="${e=>e.headingLevel}">
		<button
			id="button"
			class="button"
			type="button"
			aria-expanded="${e=>!e.completed}"
			aria-controls="content"
			@click="${(e,t)=>e.handleClick(t.event)}"
		>
			<slot name="heading"></slot>
			<span class="description"><slot name="description"></slot></span>
		</button>
	</header>
	<div class="content${e=>e.completed?" is-hidden":""}" id="content" aria-labelledby="button">
		<slot></slot>
	</div>
	<span class="checkline">
		<span
			class="checkbox"
			title="${e=>e.completed?"Uncheck step":"Check step"}"
			@click="${(e,t)=>e.handleClick(t.event)}"
			><code-icon
				class="check-icon"
				icon="${e=>e.completed?"pass-filled":"circle-large-outline"}"
			></code-icon
			><code-icon class="check-hover-icon" icon="${e=>e.completed?"pass-filled":"pass"}"></code-icon
		></span>
	</span>
</template>`,fs=De`
	* {
		box-sizing: border-box;
	}

	:host {
		display: grid;
		gap: 0 0.8rem;
		grid-template-columns: 16px auto;
		grid-auto-flow: column;
		margin-bottom: 2.4rem;
	}

	.button {
		width: 100%;
		padding: 0.1rem 0 0 0;
		font-size: var(--vscode-editor-font-size);
		line-height: 1.6rem;
		font-family: inherit;
		border: none;
		color: inherit;
		background: none;
		text-align: left;
		text-transform: uppercase;
		cursor: pointer;
	}

	.button:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 0.2rem;
	}

	.checkline {
		position: relative;
		grid-column: 1;
		grid-row: 1 / span 2;
		color: var(--vscode-textLink-foreground);
	}

	:host(:not(:last-of-type)) .checkline:after {
		content: '';
		position: absolute;
		border-left: 0.1rem solid currentColor;
		width: 0;
		top: 1.6rem;
		bottom: -2.4rem;
		left: 50%;
		transform: translateX(-50%);
		opacity: 0.3;
	}

	.checkbox {
		cursor: pointer;
	}
	.checkbox code-icon {
		pointer-events: none;
	}

	.heading:hover ~ .checkline .check-icon,
	.checkbox:hover .check-icon {
		display: none;
	}

	.check-hover-icon {
		display: none;
	}
	.heading:hover ~ .checkline .check-hover-icon,
	.checkbox:hover .check-hover-icon {
		display: unset;
	}

	.content {
		margin-top: 1rem;
	}

	.content.is-hidden {
		display: none;
	}

	.description {
		margin-left: 0.6rem;
		text-transform: none;
		opacity: 0.5;
	}
`;let Yt=class extends le{constructor(){super(...arguments),this.headingLevel=2,this.completed=!1}handleClick(e){this.completed=!this.completed,this.$emit("complete",this.completed)}};vn([q({attribute:"heading-level",converter:ze})],Yt.prototype,"headingLevel",2),vn([q({mode:"boolean"})],Yt.prototype,"completed",2),Yt=vn([Se({name:"stepped-section",template:us,styles:fs})],Yt);var wu=Xt(54);const{fromCharCode:hs}=String,ds=new TextEncoder;function xu(e){let t=typeof e=="string"?ds.encode(e):e,n="";for(let r=0,{length:i}=t;r<i;r++)n+=hs(t[r]);return globalThis.btoa(n)}function Su(e){const t=globalThis.atob(e),n=t.length,r=new Uint8Array(n);for(let i=0;i<n;i++)r[i]=t.charCodeAt(i);return r}function Ru(){return base64(globalThis.crypto.getRandomValues(new Uint8Array(16)))}function ku(e,t="base64"){return new MD5().update(e).digest(t)}function _u(){return globalThis.crypto.randomUUID()}const Eu=80,Pu={".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"};var ps=(e=>(e[e.Slash=47]="Slash",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.Z=90]="Z",e[e.a=97]="a",e[e.z=122]="z",e))(ps||{}),gs=(e=>(e.GutterBackgroundColor="gitlens.gutterBackgroundColor",e.GutterForegroundColor="gitlens.gutterForegroundColor",e.GutterUncommittedForegroundColor="gitlens.gutterUncommittedForegroundColor",e.TrailingLineBackgroundColor="gitlens.trailingLineBackgroundColor",e.TrailingLineForegroundColor="gitlens.trailingLineForegroundColor",e.LineHighlightBackgroundColor="gitlens.lineHighlightBackgroundColor",e.LineHighlightOverviewRulerColor="gitlens.lineHighlightOverviewRulerColor",e.ClosedAutolinkedIssueIconColor="gitlens.closedAutolinkedIssueIconColor",e.ClosedPullRequestIconColor="gitlens.closedPullRequestIconColor",e.OpenAutolinkedIssueIconColor="gitlens.openAutolinkedIssueIconColor",e.OpenPullRequestIconColor="gitlens.openPullRequestIconColor",e.MergedPullRequestIconColor="gitlens.mergedPullRequestIconColor",e.UnpublishedChangesIconColor="gitlens.unpublishedChangesIconColor",e.UnpublishedCommitIconColor="gitlens.unpublishedCommitIconColor",e.UnpulledChangesIconColor="gitlens.unpulledChangesIconColor",e))(gs||{}),bs=(e=>(e.ActionPrefix="gitlens.action.",e.AddAuthors="gitlens.addAuthors",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CloseWelcomeView="gitlens.closeWelcomeView",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyAutolinkUrl="gitlens.copyAutolinkUrl",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemoteIssueUrl="gitlens.copyRemoteIssueUrl",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GetStarted="gitlens.getStarted",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenAutolinkUrl="gitlens.openAutolinkUrl",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenIssueOnRemote="gitlens.openIssueOnRemote",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWalkthrough="gitlens.openWalkthrough",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.PlusHide="gitlens.plus.hide",e.PlusLearn="gitlens.plus.learn",e.PlusLoginOrSignUp="gitlens.plus.loginOrSignUp",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusPurchase="gitlens.plus.purchase",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusValidate="gitlens.plus.validate",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.RefreshTimelinePage="gitlens.refreshTimelinePage",e.ResetAvatarCache="gitlens.resetAvatarCache",e.ResetSuppressedWarnings="gitlens.resetSuppressedWarnings",e.ResetTrackedUsage="gitlens.resetTrackedUsage",e.RevealCommitInView="gitlens.revealCommitInView",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.SetViewsLayout="gitlens.setViewsLayout",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowHomeView="gitlens.showHomeView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage#branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage#commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage#contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage#file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage#line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage#remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage#repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage#search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage#stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage#tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage#worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage#views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage#commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage#autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowGraphPage="gitlens.showGraphPage",e.ShowWelcomePage="gitlens.showWelcomePage",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(bs||{}),ys=(e=>(e.ActionPrefix="gitlens:action:",e.KeyPrefix="gitlens:key:",e.WebviewPrefix="gitlens:webview:",e.WebviewViewPrefix="gitlens:webviewView:",e.ActiveFileStatus="gitlens:activeFileStatus",e.AnnotationStatus="gitlens:annotationStatus",e.Debugging="gitlens:debugging",e.DisabledToggleCodeLens="gitlens:disabledToggleCodeLens",e.Disabled="gitlens:disabled",e.Enabled="gitlens:enabled",e.HasConnectedRemotes="gitlens:hasConnectedRemotes",e.HasRemotes="gitlens:hasRemotes",e.HasRichRemotes="gitlens:hasRichRemotes",e.HasVirtualFolders="gitlens:hasVirtualFolders",e.Readonly="gitlens:readonly",e.Untrusted="gitlens:untrusted",e.ViewsCanCompare="gitlens:views:canCompare",e.ViewsCanCompareFile="gitlens:views:canCompare:file",e.ViewsCommitsMyCommitsOnly="gitlens:views:commits:myCommitsOnly",e.ViewsFileHistoryCanPin="gitlens:views:fileHistory:canPin",e.ViewsFileHistoryCursorFollowing="gitlens:views:fileHistory:cursorFollowing",e.ViewsFileHistoryEditorFollowing="gitlens:views:fileHistory:editorFollowing",e.ViewsLineHistoryEditorFollowing="gitlens:views:lineHistory:editorFollowing",e.ViewsRepositoriesAutoRefresh="gitlens:views:repositories:autoRefresh",e.ViewsSearchAndCompareKeepResults="gitlens:views:searchAndCompare:keepResults",e.Vsls="gitlens:vsls",e.Plus="gitlens:plus",e.PlusEnabled="gitlens:plus:enabled",e.PlusRequired="gitlens:plus:required",e.PlusState="gitlens:plus:state",e))(ys||{}),vs=(e=>(e.CloseActiveEditor="workbench.action.closeActiveEditor",e.CloseAllEditors="workbench.action.closeAllEditors",e.CursorMove="cursorMove",e.CustomEditorShowFindWidget="editor.action.webvieweditor.showFind",e.Diff="vscode.diff",e.EditorScroll="editorScroll",e.EditorShowHover="editor.action.showHover",e.ExecuteDocumentSymbolProvider="vscode.executeDocumentSymbolProvider",e.ExecuteCodeLensProvider="vscode.executeCodeLensProvider",e.FocusFilesExplorer="workbench.files.action.focusFilesExplorer",e.InstallExtension="workbench.extensions.installExtension",e.MoveViews="vscode.moveViews",e.Open="vscode.open",e.OpenFolder="vscode.openFolder",e.OpenInTerminal="openInTerminal",e.OpenWalkthrough="workbench.action.openWalkthrough",e.OpenWith="vscode.openWith",e.NextEditor="workbench.action.nextEditor",e.PreviewHtml="vscode.previewHtml",e.RevealLine="revealLine",e.RevealInExplorer="revealInExplorer",e.RevealInFileExplorer="revealFileInOS",e.SetContext="setContext",e.ShowExplorer="workbench.view.explorer",e.ShowReferences="editor.action.showReferences",e.ShowSCM="workbench.view.scm",e.UninstallExtension="workbench.extensions.uninstallExtension",e))(vs||{}),ms=(e=>(e.Publish="git.publish",e.Pull="git.pull",e.PullRebase="git.pullRebase",e.Push="git.push",e.PushForce="git.pushForce",e.UndoCommit="git.undoCommit",e))(ms||{}),ws=(e=>(e.AutoRepositoryDetection="git.autoRepositoryDetection",e.RepositoryScanMaxDepth="git.repositoryScanMaxDepth",e.FetchOnPull="git.fetchOnPull",e.UseForcePushWithLease="git.useForcePushWithLease",e))(ws||{}),xs=(e=>(e.AngleBracketLeftHeavy="\u2770",e.AngleBracketRightHeavy="\u2771",e.ArrowBack="\u21A9",e.ArrowDown="\u2193",e.ArrowDownUp="\u21F5",e.ArrowDropRight="\u2937",e.ArrowHeadRight="\u27A4",e.ArrowLeft="\u2190",e.ArrowLeftDouble="\u21D0",e.ArrowLeftRight="\u2194",e.ArrowLeftRightDouble="\u21D4",e.ArrowLeftRightDoubleStrike="\u21CE",e.ArrowLeftRightLong="\u27F7",e.ArrowRight="\u2192",e.ArrowRightDouble="\u21D2",e.ArrowRightHollow="\u21E8",e.ArrowUp="\u2191",e.ArrowUpDown="\u21C5",e.ArrowUpRight="\u2197",e.ArrowsHalfLeftRight="\u21CB",e.ArrowsHalfRightLeft="\u21CC",e.ArrowsLeftRight="\u21C6",e.ArrowsRightLeft="\u21C4",e.Asterisk="\u2217",e.Check="\u2714",e.Dash="\u2014",e.Dot="\u2022",e.Ellipsis="\u2026",e.EnDash="\u2013",e.Envelope="\u2709",e.EqualsTriple="\u2261",e.Flag="\u2691",e.FlagHollow="\u2690",e.MiddleEllipsis="\u22EF",e.MuchLessThan="\u226A",e.MuchGreaterThan="\u226B",e.Pencil="\u270E",e.Space="\xA0",e.SpaceThin="\u2009",e.SpaceThinnest="\u200A",e.SquareWithBottomShadow="\u274F",e.SquareWithTopShadow="\u2750",e.Warning="\u26A0",e.ZeroWidthSpace="\u200B",e))(xs||{}),Ss=(e=>(e.DebugConsole="debug",e.File="file",e.Git="git",e.GitHub="github",e.GitLens="gitlens",e.Output="output",e.PRs="pr",e.Vsls="vsls",e.VslsScc="vsls-scc",e.Virtual="vscode-vfs",e))(Ss||{});const Rs=new Intl.Collator(void 0,{sensitivity:"accent"});function ks(e,t){const n=Rs.compare(e,t);return n===0?0:n>0?1:-1}function Tu(e,t){return e==null&&t==null?!0:e==null||t==null?!1:ks(e,t)===0}const Fu=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare;function _s(e,t,n=0,r=e.length,i=0,a=t.length){for(;n<r&&i<a;n++,i++){const x=e.charCodeAt(n),y=t.charCodeAt(i);if(x<y)return-1;if(x>y)return 1}const l=r-n,h=a-i;return l<h?-1:l>h?1:0}function Du(e,t,n=0,r=e.length,i=0,a=t.length){for(;n<r&&i<a;n++,i++){const x=e.charCodeAt(n),y=t.charCodeAt(i);if(x===y)continue;const B=x-y;if(!(B===32&&Mr(y))&&!(B===-32&&Mr(x)))return $r(x)&&$r(y)?B:_s(e.toLowerCase(),t.toLowerCase(),n,r,i,a)}const l=r-n,h=a-i;return l<h?-1:l>h?1:0}function Lu(e){return e?.replace(/[<>&"]/g,t=>{switch(t){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";case'"':return"&quot;";default:return t}})}const Es=/[\\`*_{}[\]()#+\-.!]/g,Ps=/^===/gm,Ts=/\r?\n/g;function Ou(e,t={}){return e=e.replace(Es,"\\$&").replace(Ps,"\u200B==="),t.quoted?e.trim().replace(Ts,`	\\
>  `):e}function Iu(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function Bu(e){const[t,n]=hrtime(e);return t*1e3+Math.floor(n/1e6)}function*Cu(e,t=`
`){if(typeof e=="string"){let i=0;for(;i<e.length;){let a=e.indexOf(t,i);a===-1&&(a=e.length),yield e.substring(i,a),i=a+1}return}let n=0,r;for(let i of e){n++,r&&(i=r+i,r=void 0);let a=0;for(;a<i.length;){let l=i.indexOf(t,a);if(l===-1)if(n===e.length)l=i.length;else{r=i.substring(a);break}yield i.substring(a,l),a=l+1}}}const As=null;function $u(e){return As[e-1]??""}const Fs=/\$\{('.*?[^\\]'|\W*)?([^|]*?)(?:\|(\d+)(-|\?)?)?('.*?[^\\]'|\W*)?\}/g,Jt=/\$\{(?:'.*?[^\\]'|\W*)?(\w*?)(?:'.*?[^\\]'|[\W\d]*)\}/g,Lr="'",Or=/(\\')/g,Ir=/^'?(.*?)'?$/s;function Mu(e){const t=[];let n;do{if(n=Fs.exec(e),n==null)break;let[,r,i,a,l,h]=n;r!=null&&(n=Ir.exec(r),n!=null&&([,r]=n,r=r.replace(Or,Lr))),h!=null&&(n=Ir.exec(h),n!=null&&([,h]=n,h=h.replace(Or,Lr))),t.push({key:i,options:{collapseWhitespace:l==="?",padDirection:l==="-"?"left":"right",prefix:r||void 0,suffix:h||void 0,truncateTo:a==null?void 0:parseInt(a,10)}})}while(!0);return t}const Ds=null,Br=new Map;function Nu(e,t){if(e==null||e.length===0)return e;if(t==null)return e.replace(Jt,"");let n=Br.get(e);return n==null&&(n=new Function(`return \`${e.replace(Jt,Ds)}\`;`),Br.set(e,n)),n.call(t)}const Ls=Object.getPrototypeOf(async function(){}).constructor,Os=null,Cr=new Map;async function Uu(e,t){if(e==null||e.length===0)return e;if(t==null)return e.replace(Jt,"");let n=Cr.get(e);if(n==null){const i=`return \`${e.replace(Jt,Os)}\`;`;n=new Ls(i),Cr.set(e,n)}return await n.call(t)}function $r(e){return e>=CharCode.a&&e<=CharCode.z}function Mr(e){return e>=CharCode.A&&e<=CharCode.Z}function Vu(e,t="base64"){return _md5(e,t)}function ju(e,t=0,n=0,r="\xA0"){return t===0&&n===0?e:`${t===0?"":r.repeat(t)}${e}${n===0?"":r.repeat(n)}`}function Nr(e,t,n="\xA0",r){const i=t-(r??Ce(e));return i<=0?e:n.repeat(i)+e}function Wu(e,t,n,r){return r=r??Ce(e),r<t?Nr(e,t,n,r):r>t?wn(e,t,void 0,r):e}function Ur(e,t,n="\xA0",r){const i=t-(r??Ce(e));return i<=0?e:e+n.repeat(i)}function Hu(e,t,n,r){const i=t<0;return t=Math.abs(t),r=r??Ce(e),r<t?i?Nr(e,t,n,r):Ur(e,t,n,r):r>t?wn(e,t,void 0,r):e}function zu(e,t,n,r){return r=r??Ce(e),r<t?Ur(e,t,n,r):r>t?wn(e,t):e}function mn(e,t,n){if(n==null)return`${t} ${e}${t===1?"":"s"}`;const r=t===1?e:n.plural??`${e}s`;return n.only?r:`${t===0?n.zero??t:n.format?.(t)??t}${n.infix??" "}${r}`}const Is=/[\\/:*?"<>|\x00-\x1f\x80-\x9f]/g;function qu(e,t="_"){return e&&e.replace(Is,t)}function Gu(e,t){const n=e.lastIndexOf(t);return n===-1?[e]:[e.substr(n),e.substring(0,n-1)]}function Qu(e,t){const n=e.split(t,1),r=n[0];return r.length===e.length?n:[r,e.substr(r.length+1)]}function wn(e,t,n="\u2026",r){if(!e)return e;if(t<=1)return n;if(r=r??Ce(e),r<=t)return e;if(r===e.length)return`${e.substring(0,t-1)}${n}`;let i=Math.floor(t/(r/e.length)),a=Ce(e.substring(0,i));for(;a<t;)a+=Ce(e[i++]);return a>=t&&i--,`${e.substring(0,i)}${n}`}function Yu(e,t,n="\u2026",r){if(!e)return e;if(t<=1)return n;if(r=r??Ce(e),r<=t)return e;if(r===e.length)return`${n}${e.substring(r-t)}`;let i=Math.floor(t/(r/e.length)),a=Ce(e.substring(0,i));for(;a<t;)a+=Ce(e[i++]);return a>=t&&i--,`${n}${e.substring(e.length-i)}`}function Ju(e,t,n="\u2026"){if(!e)return e;if(t<=1)return n;const r=Ce(e);return r<=t?e:`${e.slice(0,Math.floor(t/2)-1)}${n}${e.slice(r-Math.ceil(t/2))}`}let xn;const Bs=/[^\x20-\x7F\u00a0\u2026]/;function Ce(e){if(e==null||e.length===0)return 0;if(!Bs.test(e))return e.length;if(xn==null&&(xn=ansiRegex()),e=e.replace(xn,""),e.length===0)return 0;let t=0,n=0,r=0;const i=[...e];for(let l=0;l<i.length;l++){const h=i[l].codePointAt(0);if(!(h<=31||h>=127&&h<=159)&&!(h>=768&&h<=879)){if(h>=128512&&h<=128591||h>=127744&&h<=128511||h>=128640&&h<=128767||h>=9728&&h<=9983||h>=9984&&h<=10175||h>=65024&&h<=65039||h>=129280&&h<=129535||h>=65024&&h<=65039||h>=8400&&h<=8447){if(h>=127995&&h<=127999)continue;n++,t+=2;continue}if(h===8205){r++,t-=2;continue}h>65535&&l++,t+=Cs(h)?2:1}}const a=n-r;return a>1&&(t+=a-1),t}function Cs(e){return e>=4352&&(e<=4447||e===9001||e===9002||e>=11904&&e<=12871&&e!==12351||e>=12880&&e<=19903||e>=19968&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65131||e>=65281&&e<=65376||e>=65504&&e<=65510||e>=110592&&e<=110593||e>=127488&&e<=127569||e>=131072&&e<=262141)}var $s=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor,ct=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ms(t,n):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(i=(r?l(t,n,i):l(i))||i);return r&&i&&$s(t,n,i),i};const Ns=fe`
	${me(e=>e.state===re.Free,fe`
			<h3>
				<a title="Learn more about GitLens+ features" href="command:gitlens.plus.learn"
					>Powerful, additional features</a
				>
				that enhance your GitLens experience.
			</h3>

			<p class="mb-1">
				<vscode-button @click="${e=>e.fireAction("command:gitlens.plus.startPreviewTrial")}"
					>Try GitLens+ features on private repos</vscode-button
				>
			</p>
			<p class="mb-0">
				${me(e=>e.plus,fe`<a class="minimal" href="command:gitlens.plus.hide">Hide GitLens+ features</a>`)}
				${me(e=>!e.plus,fe`<a href="command:gitlens.plus.restore">Restore GitLens+ features</a>`)}
			</p>
		`)}
	${me(e=>e.state===re.Paid,fe`
			<h3>Welcome to ${e=>e.planName}!</h3>
			<p class="mb-0">
				You have access to
				<a title="Learn more about GitLens+ features" href="command:gitlens.plus.learn">GitLens+ features</a>
				on any repo.
			</p>
		`)}
	${me(e=>e.state===re.FreeInPreviewTrial,fe`
			<h3>GitLens Pro Trial</h3>
			<p>
				You have ${e=>e.daysRemaining} left in your 3-day GitLens Pro trial. Don't worry if you need more
				time, you can extend your trial for an additional free 7-days of
				<a title="Learn more about GitLens+ features" href="command:gitlens.plus.learn">GitLens+ features</a> on
				private repos.
			</p>
			<p class="mb-1">
				<vscode-button @click="${e=>e.fireAction("command:gitlens.plus.purchase")}"
					>Upgrade to Pro</vscode-button
				>
			</p>
		`)}
	${me(e=>e.state===re.FreePlusInTrial,fe`
			<h3>GitLens Pro Trial</h3>
			<p class="mb-1">
				You have ${e=>e.daysRemaining} left in your GitLens Pro trial. Once your trial ends, you'll continue
				to have access to
				<a title="Learn more about GitLens+ features" href="command:gitlens.plus.learn">GitLens+ features</a> on
				local and public repos, while upgrading to GitLens Pro gives you access on private repos.
			</p>
		`)}
	${me(e=>e.state===re.FreePreviewTrialExpired,fe`
			<h3>Extend Your GitLens Pro Trial</h3>
			<p>
				Your free 3-day GitLens Pro trial has ended, extend your trial to get an additional free 7-days of
				GitLens+ features on private repos.
			</p>
			<p class="mb-1">
				<vscode-button @click="${e=>e.fireAction("command:gitlens.plus.loginOrSignUp")}"
					>Extend Pro Trial</vscode-button
				>
			</p>
		`)}
	${me(e=>e.state===re.FreePlusTrialExpired,fe`
			<h3>GitLens Pro Trial Expired</h3>
			<p>
				Your GitLens Pro trial has ended, please upgrade to GitLens Pro to continue to use GitLens+ features on
				private repos.
			</p>
			<p class="mb-1">
				<vscode-button @click="${e=>e.fireAction("command:gitlens.plus.purchase")}"
					>Upgrade to Pro</vscode-button
				>
			</p>
		`)}
	${me(e=>e.state===re.VerificationRequired,fe`
			<h3>Please verify your email</h3>
			<p class="alert__message">
				Before you can also use GitLens+ features on private repos, please verify your email address.
			</p>
			<p class="mb-1">
				<vscode-button @click="${e=>e.fireAction("command:gitlens.plus.resendVerification")}"
					>Resend Verification Email</vscode-button
				>
			</p>
			<p class="mb-1">
				<vscode-button @click="${e=>e.fireAction("command:gitlens.plus.validate")}"
					>Refresh Verification Status</vscode-button
				>
			</p>
		`)}
`,Us=De`
	* {
		box-sizing: border-box;
	}

	:host {
		display: block;
		text-align: center;
	}

	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		text-decoration: underline;
	}

	h3,
	p {
		margin-top: 0;
	}

	h3 a {
		color: inherit;
		text-decoration: underline;
		text-decoration-color: var(--color-foreground--50);
	}

	h3 a:hover {
		text-decoration-color: inherit;
	}

	.mb-1 {
		margin-bottom: 0.4rem;
	}
	.mb-0 {
		margin-bottom: 0;
	}

	.minimal {
		color: var(--color-foreground--50);
		font-size: 1rem;
		position: relative;
		top: -0.2rem;
	}
`;let it=class extends le{constructor(){super(...arguments),this.days=0,this.state=re.Free,this.plan="",this.visibility="public",this.plus=!0}get daysRemaining(){return this.days<1?"less than one day":mn("day",this.days)}get isFree(){return["local","public"].includes(this.visibility)}get planName(){switch(this.state){case re.Free:case re.FreePreviewTrialExpired:case re.FreePlusTrialExpired:return"GitLens Free";case re.FreeInPreviewTrial:case re.FreePlusInTrial:return"GitLens Pro (Trial)";case re.VerificationRequired:return`${this.plan} (Unverified)`;default:return this.plan}}fireAction(e){this.$emit("action",e)}};ct([q({converter:ze})],it.prototype,"days",2),ct([q({converter:ze})],it.prototype,"state",2),ct([q],it.prototype,"plan",2),ct([q],it.prototype,"visibility",2),ct([q({mode:"boolean"})],it.prototype,"plus",2),ct([m],it.prototype,"planName",1),it=ct([Se({name:"plus-banner",template:Ns,styles:Us})],it);var Vs=Object.defineProperty,js=Object.getOwnPropertyDescriptor,mt=(e,t,n,r)=>{for(var i=r>1?void 0:r?js(t,n):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(i=(r?l(t,n,i):l(i))||i);return r&&i&&Vs(t,n,i),i};const Ws=fe`
	<div class="icon"><code-icon icon="info"></code-icon></div>
	<div class="content">
		${me(e=>e.state===re.Free,fe`
				<p class="mb-1">
					<a title="Learn more about GitLens+ features" href="command:gitlens.plus.learn"
						>GitLens+ features</a
					>
					are free for local and public repos, no account required, while upgrading to GitLens Pro gives you
					access on private repos.
				</p>
				<p class="mb-0">All other GitLens features can always be used on any repo.</p>
			`)}
		${me(e=>e.state!==re.Free,fe` <p class="mb-0">All other GitLens features can always be used on any repo</p> `)}
	</div>
`,Hs=De`
	* {
		box-sizing: border-box;
	}

	:host {
		display: flex;
		flex-direction: row;
		padding: 0.8rem 1.2rem;
		background-color: var(--color-alert-neutralBackground);
		border-left: 0.3rem solid var(--color-foreground--50);
		color: var(--color-alert-foreground);
	}

	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		text-decoration: underline;
	}

	p {
		margin-top: 0;
	}

	.icon {
		display: none;
		flex: none;
		margin-right: 0.4rem;
	}

	.icon code-icon {
		font-size: 2.4rem;
		margin-top: 0.2rem;
	}

	.content {
		font-size: 1.2rem;
		line-height: 1.2;
		text-align: left;
	}

	.mb-1 {
		margin-bottom: 0.8rem;
	}
	.mb-0 {
		margin-bottom: 0;
	}
`;let ut=class extends le{constructor(){super(...arguments),this.days=0,this.state=re.Free,this.plan="",this.visibility="public"}get daysRemaining(){return this.days<1?"less than one day":mn("day",this.days)}get isFree(){return["local","public"].includes(this.visibility)}get planName(){switch(this.state){case re.Free:case re.FreePreviewTrialExpired:case re.FreePlusTrialExpired:return"GitLens Free";case re.FreeInPreviewTrial:case re.FreePlusInTrial:return"GitLens Pro (Trial)";case re.VerificationRequired:return`${this.plan} (Unverified)`;default:return this.plan}}fireAction(e){this.$emit("action",e)}};mt([q({converter:ze})],ut.prototype,"days",2),mt([q({converter:ze})],ut.prototype,"state",2),mt([q],ut.prototype,"plan",2),mt([q],ut.prototype,"visibility",2),mt([m],ut.prototype,"planName",1),ut=mt([Se({name:"plus-content",template:Ws,styles:Hs})],ut);var zs=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,$e=(e,t,n,r)=>{for(var i=r>1?void 0:r?qs(t,n):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(i=(r?l(t,n,i):l(i))||i);return r&&i&&zs(t,n,i),i};const Gs=fe`
	<div class="header-card__media"><img class="header-card__image" src="${e=>e.image}" alt="GitLens Logo" /></div>
	<h1 class="header-card__title${e=>e.name===""?" logo":""}">
		${me(e=>e.name==="",fe`Git<span class="brand">Lens</span> 13`)}
		${me(e=>e.name!=="",fe`${e=>e.name}`)}
	</h1>
	<p class="header-card__account">
		<span class="status">
			<span ${Ue("statusNode")} tabindex="-1" class="status-label"
				><span class="repo-access${e=>e.isPro?" is-pro":""}">✨</span>${e=>`${e.planName}${e.daysLeft}`}</span
			>
			<pop-over class="${e=>e.pinStatus?"is-pinned":null}">
				${me(e=>e.pinStatus,fe`
						<span slot="type">${e=>e.planName}</span>
						<a
							href="#"
							class="action is-icon"
							slot="actions"
							@click="${(e,t)=>e.dismissStatus(t.event)}"
							title="Dismiss"
							aria-label="Dismiss"
							><code-icon icon="close"></code-icon
						></a>
					`)}
				You have access to GitLens+ features on ${e=>e.isPro?"any repo":"local & public repos"}, and all
				other GitLens features on any repo.<br /><br />
				✨ indicates GitLens+ features, <a class="link-inline" href="command:gitlens.plus.learn">learn more</a>
			</pop-over>
		</span>
		<span class="account-actions">
			${me(e=>!e.hasAccount,fe`<a class="action" href="command:gitlens.plus.loginOrSignUp">Sign In</a>`)}
			${me(e=>e.hasAccount,fe`
					<a
						class="action is-icon"
						href="command:gitlens.plus.manage"
						aria-label="Manage Account"
						title="Manage Account"
						><code-icon icon="account"></code-icon></a
					>&nbsp;<a
						class="action is-icon"
						href="command:gitlens.plus.logout"
						aria-label="Sign Out"
						title="Sign Out"
						><code-icon icon="sign-out"></code-icon
					></a>
				`)}
		</span>
	</p>
	<div
		class="progress header-card__progress"
		role="progressbar"
		aria-valuemax="${e=>e.progressMax}"
		aria-valuenow="${e=>e.progressNow}"
		aria-label="${e=>e.progressNow} of ${e=>e.progressMax} steps completed"
	>
		<div ${Ue("progressNode")} class="progress__indicator"></div>
	</div>
	<span class="actions">
		${me(e=>e.state===re.FreePreviewTrialExpired,fe`<a class="action is-primary" href="command:gitlens.plus.loginOrSignUp"
				>Extend Pro Trial</a
			>`)}
		${me(e=>e.state===re.FreeInPreviewTrial||e.state===re.FreePlusInTrial||e.state===re.FreePlusTrialExpired,fe`<a class="action is-primary" href="command:gitlens.plus.purchase">Upgrade to Pro</a>`)}
		${me(e=>e.state===re.VerificationRequired,fe`
				<a
					class="action is-primary"
					href="command:gitlens.plus.resendVerification"
					title="Resend Verification Email"
					aria-label="Resend Verification Email"
					>Verify</a
				>&nbsp;<a
					class="action"
					href="command:gitlens.plus.validate"
					title="Refresh Verification Status"
					aria-label="Refresh Verification Status"
					>Refresh</a
				>
			`)}
	</span>
`,Qs=De`
	* {
		box-sizing: border-box;
	}

	:host {
		position: relative;
		display: grid;
		/*
		padding: 1rem 1rem 1.2rem;
		background-color: var(--card-background);
		border-radius: 0.4rem;
		*/
		padding: 1rem 0 1.2rem;
		gap: 0 0.8rem;
		grid-template-columns: 3.4rem auto;
		grid-auto-flow: column;
	}

	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		text-decoration: underline;
	}

	.header-card__media {
		grid-column: 1;
		grid-row: 1 / span 2;
		display: flex;
		align-items: center;
	}

	.header-card__image {
		width: 100%;
		aspect-ratio: 1 / 1;
		border-radius: 50%;
	}

	.header-card__title {
		font-size: var(--vscode-font-size);
		font-weight: 600;
		margin: 0;
	}

	.header-card__title.logo {
		font-family: 'Segoe UI Semibold', var(--font-family);
		font-size: 1.5rem;
	}

	.header-card__account {
		position: relative;
		margin: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 0 0.4rem;
	}

	.progress {
		width: 100%;
		overflow: hidden;
	}

	:host-context(.vscode-high-contrast) .progress,
	:host-context(.vscode-dark) .progress {
		background-color: var(--color-background--lighten-15);
	}

	:host-context(.vscode-high-contrast-light) .progress,
	:host-context(.vscode-light) .progress {
		background-color: var(--color-background--darken-15);
	}

	.progress__indicator {
		height: 4px;
		background-color: var(--vscode-progressBar-background);
	}

	.header-card__progress {
		position: absolute;
		bottom: 0;
		left: 0;
		/*
		border-bottom-left-radius: 0.4rem;
		border-bottom-right-radius: 0.4rem;
		*/
	}

	.brand {
		color: var(--gitlens-brand-color-2);
	}
	.status {
		color: var(--color-foreground--65);
	}

	.status-label {
		cursor: help;
	}

	.status pop-over {
		top: 1.6em;
		left: 0;
	}
	.status-label:not(:hover) + pop-over:not(.is-pinned) {
		display: none;
	}

	.repo-access {
		font-size: 1.1em;
		margin-right: 0.2rem;
	}
	.repo-access:not(.is-pro) {
		filter: grayscale(1) brightness(0.7);
	}

	.actions {
		position: absolute;
		right: 0.1rem;
		top: 0.1rem;
	}

	.action {
		display: inline-block;
		padding: 0.2rem 0.6rem;
		border-radius: 0.3rem;
		color: var(--color-foreground--75);
	}
	:host-context(.vscode-high-contrast) .action.is-primary,
	:host-context(.vscode-dark) .action.is-primary {
		border: 1px solid var(--color-background--lighten-15);
	}

	:host-context(.vscode-high-contrast-light) .action.is-primary,
	:host-context(.vscode-light) .action.is-primary {
		border: 1px solid var(--color-background--darken-15);
	}

	.action.is-icon {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2.2rem;
		height: 2.2rem;
		padding: 0;
	}
	.action:hover {
		text-decoration: none;
		color: var(--color-foreground);
	}

	:host-context(.vscode-high-contrast) .action:hover,
	:host-context(.vscode-dark) .action:hover {
		background-color: var(--color-background--lighten-10);
	}

	:host-context(.vscode-high-contrast-light) .action:hover,
	:host-context(.vscode-light) .action:hover {
		background-color: var(--color-background--darken-10);
	}

	pop-over .action {
		margin-right: -0.2rem;
	}

	.link-inline {
		color: inherit;
		text-decoration: underline;
	}
	.link-inline:hover {
		color: var(--vscode-textLink-foreground);
	}
`;let Le=class extends le{constructor(){super(...arguments),this.image="",this.name="",this.days=0,this.steps=4,this.completed=0,this.state=re.Free,this.plan="",this.pinStatus=!0}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),!(t===n||this.progressNode==null)&&this.updateProgressWidth()}get daysRemaining(){return this.days<1?"<1 day":mn("day",this.days)}get progressNow(){return this.completed+1}get progressMax(){return this.steps+1}get progress(){return`${this.progressNow/this.progressMax*100}%`}get planName(){switch(this.state){case re.Free:case re.FreePreviewTrialExpired:case re.FreePlusTrialExpired:return"GitLens Free";case re.FreeInPreviewTrial:case re.FreePlusInTrial:return"GitLens Pro (Trial)";case re.VerificationRequired:return`${this.plan} (Unverified)`;default:return this.plan}}get daysLeft(){switch(this.state){case re.FreeInPreviewTrial:case re.FreePlusInTrial:return`, ${this.daysRemaining} left`;default:return""}}get hasAccount(){switch(this.state){case re.Free:case re.FreePreviewTrialExpired:case re.FreeInPreviewTrial:return!1}return!0}get isPro(){switch(this.state){case re.Free:case re.FreePreviewTrialExpired:case re.FreePlusTrialExpired:case re.VerificationRequired:return!1}return!0}updateProgressWidth(){this.progressNode.style.width=this.progress}dismissStatus(e){this.pinStatus=!1,this.$emit("dismiss-status"),window.requestAnimationFrame(()=>{this.statusNode?.focus()})}};$e([q],Le.prototype,"image",2),$e([q],Le.prototype,"name",2),$e([q({converter:ze})],Le.prototype,"days",2),$e([q({converter:ze})],Le.prototype,"steps",2),$e([q({converter:ze})],Le.prototype,"completed",2),$e([q({converter:ze})],Le.prototype,"state",2),$e([q],Le.prototype,"plan",2),$e([q({attribute:"pin-status",mode:"boolean"})],Le.prototype,"pinStatus",2),$e([m],Le.prototype,"progress",1),$e([m],Le.prototype,"planName",1),$e([m],Le.prototype,"daysLeft",1),Le=$e([Se({name:"header-card",template:Gs,styles:Qs})],Le);class Ys extends Yo{constructor(){super("HomeApp")}onInitialize(){vi().register(To()),this.$steps=[...document.querySelectorAll("stepped-section[id]")],this.$cards=[...document.querySelectorAll("card-section[id]")],this.updateState()}onBind(){const t=super.onBind?.()??[];return t.push(je.on("[data-action]","click",(n,r)=>this.onDataActionClicked(n,r))),t.push(je.on("plus-banner","action",(n,r)=>this.onPlusActionClicked(n,r))),t.push(je.on("stepped-section","complete",(n,r)=>this.onStepComplete(n,r))),t.push(je.on("card-section","dismiss",(n,r)=>this.onCardDismissed(n,r))),t.push(je.on("header-card","dismiss-status",(n,r)=>this.onStatusDismissed(n,r))),t.push(je.on("[data-banner-dismiss]","click",(n,r)=>this.onBannerDismissed(n,r))),t}onMessageReceived(t){const n=t.data;switch(n.method){case Sr.method:this.log(`${this.appName}.onMessageReceived(${n.id}): name=${n.method}`),Tt(Sr,n,r=>{this.state.subscription=r.subscription,this.state.completedActions=r.completedActions,this.state.avatar=r.avatar,this.state.pinStatus=r.pinStatus,this.updateState()});break;case Rr.method:this.log(`${this.appName}.onMessageReceived(${n.id}): name=${n.method}`),Tt(Rr,n,r=>{this.state.extensionEnabled=r.extensionEnabled,this.updateNoRepo()});break;case kr.method:this.log(`${this.appName}.onMessageReceived(${n.id}): name=${n.method}`),Tt(kr,n,r=>{this.state.plusEnabled=r.plusEnabled,this.updatePlusContent()});break;case _r.method:this.log(`${this.appName}.onMessageReceived(${n.id}): name=${n.method}`),Tt(_r,n,r=>{this.state.layout=r.layout,this.updateLayout()});break;default:super.onMessageReceived?.(t);break}}onStepComplete(t,n){const r=n.id,i=t.detail??!1;this.state.completedSteps=Vr(this.state.completedSteps,r,i),this.sendCommand(Uo,{id:r,completed:i}),this.updateState()}onCardDismissed(t,n){const r=n.id;this.state.dismissedSections=Vr(this.state.dismissedSections,r),this.sendCommand(Vo,{id:r}),this.updateState()}onStatusDismissed(t,n){this.state.pinStatus=!1,this.sendCommand(jo,void 0),this.updateHeader()}onBannerDismissed(t,n){const r=n.getAttribute("data-banner-dismiss");r==null||this.state.dismissedBanners?.includes(r)||(this.state.dismissedBanners=this.state.dismissedBanners??[],this.state.dismissedBanners.push(r),this.sendCommand(Wo,{id:r}),this.updateBanners())}onDataActionClicked(t,n){const r=n.dataset.action;this.onActionClickedCore(r)}onPlusActionClicked(t,n){this.onActionClickedCore(t.detail)}onActionClickedCore(t){t?.startsWith("command:")&&this.sendCommand(Mo,{command:t.slice(8)})}getDaysRemaining(){return[re.FreeInPreviewTrial,re.FreePlusInTrial].includes(this.state.subscription.state)?vr(this.state.subscription,"days")??0:0}forceShowPlus(){return[re.FreePreviewTrialExpired,re.FreePlusTrialExpired,re.VerificationRequired].includes(this.state.subscription.state)}updateHeader(t=this.getDaysRemaining(),n=this.forceShowPlus()){const{subscription:r,completedSteps:i,avatar:a,pinStatus:l}=this.state,h=document.getElementById("header-card");if(h){a&&h.setAttribute("image",a),h.setAttribute("name",r.account?.name??"");const x=this.$steps?.length??0;let y=i?.length??0;if(x>0&&y>0){const B=this.$steps.map(Q=>Q.id),K=i.filter(Q=>B.includes(Q));y=K.length,n&&K.includes("plus")&&(y-=1)}h.setAttribute("steps",x.toString()),h.setAttribute("completed",y.toString()),h.setAttribute("state",r.state.toString()),h.setAttribute("plan",r.plan.effective.name),h.setAttribute("days",t.toString()),h.pinStatus=l}}updateBanners(){const t=[...document.querySelectorAll("[data-banner]")];if(!t.length)return;const{subscription:n,dismissedBanners:r}=this.state,i=n.state===re.Paid;t.forEach(a=>{const l=a.getAttribute("data-banner");i||l!==null&&r?.includes(l)||l==="cyberweek2022"&&!Xs()?a.setAttribute("hidden","true"):a.removeAttribute("hidden")})}updateNoRepo(){const{extensionEnabled:t}=this.state,n=document.getElementById("no-repo");n&&n.setAttribute("aria-hidden",t?"true":"false")}updateLayout(){const{layout:t}=this.state;[...document.querySelectorAll("[data-gitlens-layout]")].forEach(r=>{const i=r.getAttribute("data-gitlens-layout");r.classList.toggle("is-active",i===t)})}updatePlusContent(t=this.getDaysRemaining()){const{subscription:n,visibility:r,plusEnabled:i}=this.state;let a=document.getElementById("plus-banner");a&&(a.setAttribute("days",t.toString()),a.setAttribute("state",n.state.toString()),a.setAttribute("visibility",r),a.setAttribute("plan",n.plan.effective.name),a.setAttribute("plus",i.toString())),a=document.getElementById("plus-content"),a&&(a.setAttribute("days",t.toString()),a.setAttribute("state",n.state.toString()),a.setAttribute("visibility",r),a.setAttribute("plan",n.plan.effective.name))}updateSteps(t=this.forceShowPlus()){this.$steps==null||this.$steps.length===0||this.state.completedSteps==null||this.state.completedSteps.length===0||this.$steps.forEach(n=>{n.setAttribute("completed",n.id==="plus"&&t||this.state.completedSteps?.includes(n.id)!==!0?"false":"true")})}updateSections(){this.$cards==null||this.$cards.length===0||this.state.dismissedSections==null||this.state.dismissedSections.length===0||this.state.dismissedSections.forEach(t=>{const n=this.$cards.findIndex(r=>r.id===t);n>-1&&(this.$cards[n].remove(),this.$cards.splice(n,1))})}updateState(){const{completedSteps:t,dismissedSections:n}=this.state;this.updateNoRepo(),this.updateLayout();const r=t?.length||n?.length;document.getElementById("restore-welcome")?.classList.toggle("hide",!r);const i=this.forceShowPlus(),a=this.getDaysRemaining();this.updateHeader(a,i),this.updatePlusContent(a),this.updateSteps(i),this.updateSections(),this.updateBanners()}}function Vr(e=[],t,n=!0){const r=e.includes(t);return!r&&n?e.push(t):r&&!n&&e.splice(e.indexOf(t),1),e}const Js=Date.parse("2022-11-28T07:00:00.000-08:00"),Zs=Date.parse("2022-12-06T00:00:00.000-08:00");function Xs(){const e=Date.now();return e<Zs&&e>=Js}new Ys})()})();
