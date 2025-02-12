/*! *****************************************************************************
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
***************************************************************************** */
function t(t,e,i,r){var n,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},r=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${r}--\x3e`,a=new RegExp(`${r}|${n}`);class s{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],s=document.createTreeWalker(e.content,133,null,!1);let l=0,d=-1,h=0;const{strings:p,values:{length:m}}=t;for(;h<m;){const t=s.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let r=0;for(let t=0;t<i;t++)o(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=p[h],i=c.exec(e)[2],r=i.toLowerCase()+"$lit$",n=t.getAttribute(r);t.removeAttribute(r);const s=n.split(a);this.parts.push({type:"attribute",index:d,name:i,strings:s}),h+=s.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,n=e.split(a),s=n.length-1;for(let e=0;e<s;e++){let i,a=n[e];if(""===a)i=u();else{const t=c.exec(a);null!==t&&o(t[2],"$lit$")&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(a)}r.insertBefore(i,t),this.parts.push({type:"node",index:++d})}""===n[s]?(r.insertBefore(u(),t),i.push(t)):t.data=n[s],h+=s}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&d!==l||(d++,e.insertBefore(u(),t)),l=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(i.push(t),d--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const o=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,u=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:i},parts:r}=t,n=document.createTreeWalker(i,133,null,!1);let a=p(r),s=r[a],o=-1,l=0;const u=[];let c=null;for(;n.nextNode();){o++;const t=n.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(u.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==s&&s.index===o;)s.index=null!==c?-1:s.index-l,a=p(r,a),s=r[a]}u.forEach(t=>t.parentNode.removeChild(t))}const h=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),_={},g={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],r=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let a,s=0,o=0,u=n.nextNode();for(;s<r.length;)if(a=r[s],l(a)){for(;o<a.index;)o++,"TEMPLATE"===u.nodeName&&(i.push(u),n.currentNode=u.content),null===(u=n.nextNode())&&(n.currentNode=i.pop(),u=n.nextNode());if("node"===a.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(u.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(u,a.name,a.strings,this.options));s++}else this.__parts.push(void 0),s++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=` ${r} `;class y{constructor(t,e,i,r){this.strings=t,this.values=e,this.type=i,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let a=0;a<t;a++){const t=this.strings[a],s=t.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===t.indexOf("--\x3e",s+1);const o=c.exec(t);e+=null===o?t+(i?v:n):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+r}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let r=0;r<e;r++){i+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(w(t)||!S(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===_||w(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=_,t(this)}this.value!==_&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(u()),this.endNode=t.appendChild(u())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=u()),t.__insert(this.endNode=u())}insertAfterPart(t){t.__insert(this.startNode=u()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=_,t(this)}const t=this.__pendingValue;t!==_&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof y?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===g?(this.value=g,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const i=new b(e,t.processor,this.options),r=i._clone();i.update(t.values),this.__commitNode(r),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,r=0;for(const n of t)i=e[r],void 0===i&&(i=new C(this.options),e.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(e[r-1])),i.setValue(n),i.commit(),r++;r<e.length&&(e.length=r,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=_,t(this)}if(this.__pendingValue===_)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=_}}class N extends x{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends k{}let $=!1;try{const t={get capture(){return $=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class A{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=_,t(this)}if(this.__pendingValue===_)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=E(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=_}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&($?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function M(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(r);return i=e.keyString.get(n),void 0===i&&(i=new s(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const V=new Map,I=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const R=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,r){const n=e[0];if("."===n){return new N(t,e.slice(1),i).parts}return"@"===n?[new A(t,e.slice(1),r.eventContext)]:"?"===n?[new P(t,e.slice(1),i)]:new x(t,e,i).parts}handleTextExpression(t){return new C(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const D=(t,...e)=>new y(t,e,"html",R)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,O=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const L=t=>e=>{const i=O(e.type,t);let n=V.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},V.set(i,n));let a=n.stringsArray.get(e.strings);if(void 0!==a)return a;const o=e.strings.join(r);if(a=n.keyString.get(o),void 0===a){const i=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(i,t),a=new s(e,i),n.keyString.set(o,a)}return n.stringsArray.set(e.strings,a),a},B=["html","svg"],U=new Set,Y=(t,e,i)=>{U.add(t);const r=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:a}=n;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(r,t);const s=document.createElement("style");for(let t=0;t<a;t++){const e=n[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{B.forEach(e=>{const i=V.get(O(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),d(t,i)})})})(t);const o=r.content;i?function(t,e,i=null){const{element:{content:r},parts:n}=t;if(null==i)return void r.appendChild(e);const a=document.createTreeWalker(r,133,null,!1);let s=p(n),o=0,l=-1;for(;a.nextNode();){for(l++,a.currentNode===i&&(o=h(e),i.parentNode.insertBefore(e,i));-1!==s&&n[s].index===l;){if(o>0){for(;-1!==s;)n[s].index+=o,s=p(n,s);return}s=p(n,s)}}}(i,s,o.firstChild):o.insertBefore(s,o.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){o.insertBefore(s,o.firstChild);const t=new Set;t.add(s),d(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const z={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},H=(t,e)=>e!==t&&(e==e||t==t),j={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:H};class F extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const r=this._attributeNameForProperty(i,e);void 0!==r&&(this._attributeToPropertyMap.set(r,i),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=j){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||j}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=H){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,r=e.converter||z,n="function"==typeof r?r:r.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,r=e.converter;return(r&&r.toAttribute||z.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=j){const r=this.constructor,n=r._attributeNameForProperty(t,i);if(void 0!==n){const t=r._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(t);if(void 0!==r){const t=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let r=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}F.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),Z=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}});function J(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Z(t,e)}function Q(t){return J({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class X{constructor(t,e){if(e!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const i=e.reduce((e,i,r)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1],t[0]);return new X(i,G)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class it extends F{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),r=[];i.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new X(String(e),G)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return et}}it.finalized=!0,it.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,a=I.has(e),s=q&&11===e.nodeType&&!!e.host,o=s&&!U.has(n),l=o?document.createDocumentFragment():e;if(((t,e,r)=>{let n=I.get(e);void 0===n&&(i(e,e.firstChild),I.set(e,n=new C(Object.assign({templateFactory:M},r))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:L(n)},r)),o){const t=I.get(l);I.delete(l);const r=t.value instanceof b?t.value.template:void 0;Y(n,l,r),i(e,e.firstChild),e.appendChild(l),I.set(e,t)}!a&&s&&window.ShadyCSS.styleElement(e.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const rt=(t,e)=>{const i=t.startNode.parentNode,r=void 0===e?t.endNode:e.startNode,n=i.insertBefore(u(),r);i.insertBefore(u(),r);const a=new C(t.options);return a.insertAfterNode(n),a},nt=(t,e)=>(t.setValue(e),t.commit(),t),at=(t,e,i)=>{const r=t.startNode.parentNode,n=i?i.startNode:t.endNode,a=e.endNode.nextSibling;a!==n&&((t,e,i=null,r=null)=>{for(;e!==i;){const i=e.nextSibling;t.insertBefore(e,r),e=i}})(r,e.startNode,a,n)},st=t=>{i(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},ot=(t,e,i)=>{const r=new Map;for(let n=e;n<=i;n++)r.set(t[n],n);return r},lt=new WeakMap,ut=new WeakMap,ct=(dt=(t,e,i)=>{let r;return void 0===i?i=e:void 0!==e&&(r=e),e=>{if(!(e instanceof C))throw new Error("repeat can only be used in text bindings");const n=lt.get(e)||[],a=ut.get(e)||[],s=[],o=[],l=[];let u,c,d=0;for(const e of t)l[d]=r?r(e,d):d,o[d]=i(e,d),d++;let h=0,p=n.length-1,m=0,f=o.length-1;for(;h<=p&&m<=f;)if(null===n[h])h++;else if(null===n[p])p--;else if(a[h]===l[m])s[m]=nt(n[h],o[m]),h++,m++;else if(a[p]===l[f])s[f]=nt(n[p],o[f]),p--,f--;else if(a[h]===l[f])s[f]=nt(n[h],o[f]),at(e,n[h],s[f+1]),h++,f--;else if(a[p]===l[m])s[m]=nt(n[p],o[m]),at(e,n[p],n[h]),p--,m++;else if(void 0===u&&(u=ot(l,m,f),c=ot(a,h,p)),u.has(a[h]))if(u.has(a[p])){const t=c.get(l[m]),i=void 0!==t?n[t]:null;if(null===i){const t=rt(e,n[h]);nt(t,o[m]),s[m]=t}else s[m]=nt(i,o[m]),at(e,i,n[h]),n[t]=null;m++}else st(n[p]),p--;else st(n[h]),h++;for(;m<=f;){const t=rt(e,s[f+1]);nt(t,o[m]),s[m++]=t}for(;h<=p;){const t=n[h++];null!==t&&st(t)}lt.set(e,s),ut.set(e,l)}},(...t)=>{const e=dt(...t);return m.set(e,!0),e});var dt,ht=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,pt="[^\\s]+",mt=/\[([^]*?)\]/gm;function ft(t,e){for(var i=[],r=0,n=t.length;r<n;r++)i.push(t[r].substr(0,e));return i}var _t=function(t){return function(e,i){var r=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return r>-1?r:null}};function gt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var r=0,n=e;r<n.length;r++){var a=n[r];for(var s in a)t[s]=a[s]}return t}var bt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],vt=["January","February","March","April","May","June","July","August","September","October","November","December"],yt=ft(vt,3),wt={dayNamesShort:ft(bt,3),dayNames:bt,monthNamesShort:yt,monthNames:vt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},St=gt({},wt),xt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},kt={D:function(t){return String(t.getDate())},DD:function(t){return xt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return xt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return xt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return xt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return xt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return xt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return xt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return xt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return xt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return xt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return xt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+xt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+xt(Math.floor(Math.abs(e)/60),2)+":"+xt(Math.abs(e)%60,2)}},Ct=function(t){return+t-1},Pt=[null,"[1-9]\\d?"],Nt=[null,pt],Tt=["isPm",pt,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],$t=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],At=(_t("monthNamesShort"),_t("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var Et=function(t,e,i){if(void 0===e&&(e=At.default),void 0===i&&(i={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var r=[];e=(e=At[e]||e).replace(mt,(function(t,e){return r.push(e),"@@@"}));var n=gt(gt({},St),i);return(e=e.replace(ht,(function(e){return kt[e](t,n)}))).replace(/@@@/g,(function(){return r.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var Mt=function(t,e,i,r){r=r||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return n.detail=i,t.dispatchEvent(n),n};var Vt={optional:"Optional",name:"Titel",switch:"Switch-Entität",platform:"Switch Plattform",time_attribute:"Uhrzeit Attribut",enabled_attribute:"Alarm Status Attribut",volume_attribute:"Lautstärke Attribut",source_attribute:"Quelle Attribut",source_list_attribute:"Quellen Liste Attribut",volume_settings_attribute:"Lautstärke Einstellungs Attribut",invalid_configuration:"Ungültige Konfiguration",required_entity_missing:"Die notwendige Entität %entity% ist nicht gesetzt",required_entity_not_found:"Die notwendige Entität %entity% konnte nicht gefunden werden",required_attribute_not_found:"Das notwendige Attribut %attribute% konnte nicht im switch gefunden werden",required_attribute_missing:"Das notwendige Attribut %attribute% wurde nicht definiert.",force_native_time_picker_for_device:"Das integrierte Zeitauswahlmenü dises Browsers verwenden"},It={alarm_enabled:"Wecker an",alarm_volume:"Lautstärke",alarm_source:"Quelle"},Rt={config:Vt,card:It},Dt={optional:"Optional",name:"Title",switch:"Switch Entity",platform:"Switch Platform",time_attribute:"Alarm Time Attribute",enabled_attribute:"Alarm Status Attribute",volume_attribute:"Volume Attribute",source_attribute:"Source Attribute",source_list_attribute:"Source List Attribute",volume_settings_attribute:"Volume Settings Attribute",invalid_configuration:"Invalid Configuration",required_entity_missing:"The entity %entity% has not been set",required_entity_not_found:"The needed entity %entity% has not been found",required_attribute_not_found:"The needed Attribute %attribute% was not found in the given switch",required_attribute_missing:"The needed Attribute %attribute% was not defined.",force_native_time_picker_for_device:"Use the integrated time picker"},Ot={alarm_enabled:"Alarm On",alarm_volume:"Volume",alarm_source:"Source"},qt={config:Dt,card:Ot};const Lt={de:Object.freeze({__proto__:null,config:Vt,card:It,default:Rt}),en:Object.freeze({__proto__:null,config:Dt,card:Ot,default:qt})};function Bt(t,e="",i=""){const r=t.split(".")[0],n=t.split(".")[1],a=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let s;try{s=Lt[a][r][n]}catch(t){s=Lt.en[r][n]}return void 0===s&&(s=Lt.en[r][n]),""!==e&&""!==i&&(s=s.replace(e,i)),s}let Ut=class extends it{setConfig(t){this._config=t}get _title(){return this._config&&this._config.name||""}get _entity(){return this._config&&this._config.entity||""}get _platform(){return this._config&&this._config.platform||""}get _time_attribute(){return this._config&&this._config.time_attribute||""}get _enabled_attribute(){return this._config&&this._config.enabled_attribute||""}get _volume_attribute(){return this._config&&this._config.volume_attribute||""}get _source_attribute(){return this._config&&this._config.source_attribute||""}get _source_list_attribute(){return this._config&&this._config.source_list_attribute||""}get _volume_settings_attribute(){return this._config&&this._config.volume_settings_attribute||""}get _force_native_time_picker_for_device(){return"true"===localStorage.getItem("serviceAlarmCard.forceNativePicker")}render(){if(!this.hass)return D``;try{window.loadCardHelpers().then(t=>{t.createRowElement({type:"input-select-entity"})})}catch(t){}const t=Object.keys(this.hass.states).filter(t=>"switch"===t.substr(0,t.indexOf(".")));return D`
      <div class="card-config">
        <paper-input
          label="${Bt("config.name")} (${Bt("config.optional")})"
          .value=${this._title}
          .configValue=${"name"}
          @value-changed=${this._valueChanged}
        ></paper-input>

        <div class="indent">
          <paper-dropdown-menu
            label="${Bt("config.entity")}"
            @value-changed=${this._valueChanged}
            .configValue=${"switch"}
          >
            <paper-listbox
              slot="dropdown-content"
              .selected=${t.indexOf(this._switch_entity)}
            >
              ${t.map(t=>D`
                  <paper-item>${t}</paper-item>
                `)}
            </paper-listbox>
          </paper-dropdown-menu>
          <br />
          <paper-input
            label="${Bt("config.platform")}"
            @value-changed=${this._valueChanged}
            .configValue=${"platform"}
            .value=${this._platform}
          >
          </paper-input>
          <br />
          <paper-input
            label="${Bt("config.time_attribute")}"
            @value-changed=${this._valueChanged}
            .configValue=${"time_attribute"}
            .value=${this._time_attribute}
          >
          </paper-input>
          <br />
          <paper-input
            label="${Bt("config.enabled_attribute")}"
            @value-changed=${this._valueChanged}
            .configValue=${"enabled_attribute"}
            .value=${this._enabled_attribute}
          >
          </paper-input>
          <br />
          <paper-input
            label="${Bt("config.volume_attribute")}"
            @value-changed=${this._valueChanged}
            .configValue=${"volume_attribute"}
            .value=${this._volume_attribute}
          >
          </paper-input>
          <br />
          <paper-input
            label="${Bt("config.source_attribute")}"
            @value-changed=${this._valueChanged}
            .configValue=${"source_attribute"}
            .value=${this._source_attribute}
          >
          </paper-input>
          <br />
          <paper-input
            label="${Bt("config.source_list_attribute")}"
            @value-changed=${this._valueChanged}
            .configValue=${"source_list_attribute"}
            .value=${this._source_list_attribute}
          >
          </paper-input>
          <br />
          <paper-input
            label="${Bt("config.volume_settings_attribute")}"
            @value-changed=${this._valueChanged}
            .configValue=${"volume_settings_attribute"}
            .value=${this._volume_settings_attribute}
          >
          </paper-input>
        </div>
        <br />
        <ha-switch
          .checked=${this._force_native_time_picker_for_device}
          .configValue=${"force_native_time_picker_for_device"}
          @change=${this._valueChanged}
        ></ha-switch>
        <span class="switch-label">${Bt("config.force_native_time_picker_for_device")}</span>
      </div>
    `}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&("force_native_time_picker_for_device"===e.configValue?localStorage.setItem("serviceAlarmCard.forceNativePicker",e.checked?"true":"false"):""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),Mt(this,"config-changed",{config:this._config}))}static get styles(){return tt`
      .indent {
        padding-left: 40px;
      }
      .entity-label {
        padding-left: 10px;
      }
    `}};t([J({attribute:!1})],Ut.prototype,"hass",void 0),t([Q()],Ut.prototype,"_config",void 0),Ut=t([W("service-alarm-editor")],Ut);const Yt=window;Yt.customCards=Yt.customCards||[],Yt.customCards.push({type:"service-alarm",name:"Switch Alarm Card",preview:!1,description:"Coordinate switchs alarm settings in a beautiful way"});console.info("%c MEDIAPLAYER-ALARM-CARD %c 3.0.3 ","color: cornsilk; font-weight: bold; background: firebrick","color: firebrick; font-weight: bold; background: cornsilk");let zt=class extends it{constructor(){super(...arguments),this.timeInputStatus="none"}static async getConfigElement(){return document.createElement("service-alarm-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(Bt("config.invalid_configuration"));if(!t.entity)throw new Error(Bt("config.required_entity_missing","%entity%",Bt("config.entity")));if(!t.time_attribute)throw new Error(Bt("config.required_attribute_missing","%attribute%",Bt("config.time_attribute")));if(!t.enabled_attribute)throw new Error(Bt("config.required_attribute_missing","%attribute%",Bt("config.enabled_attribute")));if(!t.volume_attribute)throw new Error(Bt("config.required_attribute_missing","%attribute%",Bt("config.volume_attribute")));if(!t.source_attribute)throw new Error(Bt("config.required_attribute_missing","%attribute%",Bt("config.source_attribute")));if(!t.source_list_attribute)throw new Error(Bt("config.required_attribute_missing","%attribute%",Bt("config.source_list_attribute")));if(!t.volume_settings_attribute)throw new Error(Bt("config.required_attribute_missing","%attribute%",Bt("config.volume_settings_attribute")));try{window.loadCardHelpers().then(t=>{t.createRowElement({type:"input-select-entity"})})}catch(t){}this.config=t}shouldUpdate(t){const e=function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var r=e.get("hass");return!r||r.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1);if(!e){const e=t.hass;return!e||e.states[this.config.entity]!==this.hass.states[this.config.entity]}return e}render(){if(!this.config||!this.hass)return D``;const t=this.hass.states[this.config.entity].attributes[this.config.enabled_attribute];if(null===t)return D`
        <hui-warning
          >${this.hass.localize("config.required_attribute_not_found","%attribute%",this.config.enabled_attribute)}</hui-warning
        >
      `;const e=this.hass.states[this.config.entity].attributes[this.config.time_attribute];if(!e)return D`
        <hui-warning
          >${this.hass.localize("config.required_attribute_not_found","%attribute%",this.config.time_attribute)}</hui-warning
        >
      `;const i=this.hass.states[this.config.entity].attributes[this.config.source_attribute];if(!i)return D`
        <hui-warning
          >${this.hass.localize("config.required_attribute_not_found","%attribute%",this.config.source_attribute)}</hui-warning
        >
      `;const r=this.hass.states[this.config.entity].attributes[this.config.source_list_attribute];if(!r)return D`
        <hui-warning
          >${this.hass.localize("config.required_attribute_not_found","%attribute%",this.config.source_list_attribute)}</hui-warning
        >
      `;const n=this.hass.states[this.config.entity].attributes[this.config.volume_settings_attribute];if(!n)return D`
        <hui-warning
          >${this.hass.localize("config.required_attribute_not_found","%attribute%",this.config.volume_settings_attribute)}</hui-warning
        >
      `;const a=this.hass.states[this.config.entity].attributes[this.config.volume_attribute];return a?D`
      <ha-card .header=${this.config.name} tabindex="0">
        <div class="alarm-wrapper" id="alarm-wrapper">
          <div class="alarm-time-and-decorator-wrap">
            <svg viewBox="0 0 24 24" class="alarm-time-decorator">
              <path
                d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"
              />
            </svg>
            <div class="alarm-time-wrap">
              <span class="alarm-time-display">
                ${e}
              </span>
              <input
                type="time"
                class="alarm-time-picker alarm-time-picker-left"
                required
                value="${e.slice(0,1)+":"+e.slice(2,3)}"
                id="alarm-time-picker-left"
                @input=${this._selectedTimeValueChangedPicker}
                @blur=${this._timePickerBlur}
                @click=${this._timePickerLeftClick}
              />
              <input
                type="time"
                class="alarm-time-picker alarm-time-picker-right"
                required
                value="${e.slice(0,1)+":"+e.slice(2,3)}"
                id="alarm-time-picker-right"
                @input=${this._selectedTimeValueChangedPicker}
                @blur=${this._timePickerBlur}
                @click=${this._timePickerRightClick}
              />
              <div class="alarm-time-input">
                <input
                  type="number"
                  required
                  min="0"
                  max="23"
                  value="${e.slice(0,1)}"
                  id="alarm-time-input-hour"
                  @input=${this._selectedTimeValueChangedInput}
                  @blur=${this._timeInputsBlur}
                  @focus=${this._timePickerLeftClick}
                /><span>:</span
                ><input
                  type="number"
                  required
                  min="0"
                  max="59"
                  value="${e.slice(2,3)}"
                  id="alarm-time-input-minute"
                  @input=${this._selectedTimeValueChangedInput}
                  @blur=${this._timeInputsBlur}
                  @focus=${this._timePickerRightClick}
                />
              </div>
            </div>
          </div>

          <div class="alarm-properties-wrap">
            <label slot="label" for="alarm-enabled">${Bt("card.alarm_enabled")}</label>
            <ha-switch .checked=${t} @change=${this._enableChanged} id="alarm-enabled"></ha-switch>
            <label slot="label" for="alarm-input">${Bt("card.alarm_source")}</label>
            <paper-dropdown-menu
              class="alarm-input"
              selected-item-label="${i}"
              @selected-item-label-changed="${this._inputChanged}"
              label="${r[i]}"
            >
              <paper-listbox slot="dropdown-content">
                ${ct(Object.keys(r),t=>D`
                      <paper-item .value="${t}">${r[t]}</paper-item>
                    `)}
              </paper-listbox>
            </paper-dropdown-menu>

            <div class="alarm-volume">
              <label slot="label" for="alarm-volume">${Bt("card.alarm_volume")}</label>
              <div class="alarm-volume-slider">
                <ha-slider
                  .dir="${s=this.hass,function(t){var e=t.language||"en";return t.translationMetadata.translations[e]&&t.translationMetadata.translations[e].isRTL||!1}(s)?"rtl":"ltr"}"
                  .step="${Number(n.step)}"
                  .min="${Number(n.min)}"
                  .max="${Number(n.max)}"
                  .value="${Number(a)}"
                  pin
                  @change="${this._volumeChanged}"
                  ignore-bar-touch
                  id="volume-input"
                ></ha-slider>
                <span>
                  ${Number(a)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `:D`
        <hui-warning
          >${this.hass.localize("config.required_attribute_not_found","%attribute%",this.config.volume_attribute)}</hui-warning
        >
      `;var s}static get styles(){return tt`
      ha-card:focus {
        outline: none;
      }
      ha-card::-moz-focus-inner {
        border: 0;
      }

      .alarm-wrapper {
        max-width: 100%;
        padding: 5px 15px 5px 0;
        display: flex;
        align-items: stretch;
      }
      .alarm-wrapper .alarm-time-and-decorator-wrap {
        flex-basis: auto;
        flex-basis: content;
        position: relative;
        margin-right: 5px;
      }
      .alarm-wrapper .alarm-properties-wrap {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }

      .alarm-wrapper .alarm-time-decorator {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 100%;
        fill: var(--paper-item-icon-color, --text-color);
        opacity: 0.3;
        transition: opacity 150ms ease-in-out;
      }

      .alarm-wrapper.show-input .alarm-time-decorator,
      .alarm-wrapper.force-native-input-hour .alarm-time-decorator,
      .alarm-wrapper.force-native-input-minute .alarm-time-decorator {
        opacity: 0.07;
      }

      .alarm-wrapper .alarm-time-wrap {
        position: relative;
        font-size: 1.4rem;
        line-height: 1em;
        text-align: center;
        z-index: 2;
        top: 50%;
        margin-top: -0.2em;
      }
      .alarm-wrapper .alarm-time-display {
        box-sizing: border-box;
        position: relative;
        margin: 0 2.5rem;
      }
      .alarm-wrapper.show-input .alarm-time-display,
      .alarm-wrapper.force-native-input-hour .alarm-time-display,
      .alarm-wrapper.force-native-input-minute .alarm-time-display {
        opacity: 0;
      }
      .alarm-wrapper .alarm-time-picker {
        position: absolute;
        opacity: 0;
        width: 42%;
        top: 0;
        border: 0;
        padding: 0;
        margin: 0;
        margin-top: -0.7em;
        line-height: 3em;
        font-family: inherit;
        z-index: 2;
      }

      .alarm-wrapper .alarm-time-picker-left {
        left: 8%;
      }
      .alarm-wrapper .alarm-time-picker-right {
        left: 50%;
      }

      .alarm-wrapper.force-native-input-hour .alarm-time-picker-left {
        opacity: 1;
        width: 84%;
        left: 50%;
        transform: translate(-50%, 0);
      }
      .alarm-wrapper.force-native-input-minute .alarm-time-picker-right {
        opacity: 1;
        width: 84%;
        left: 50%;
        transform: translate(-50%, 0);
      }

      .alarm-wrapper .alarm-time-input {
        position: absolute;
        display: none;
        top: -0.4rem;
        left: 8%;
        width: 84%;
        opacity: 1;
      }
      .alarm-wrapper.show-input .alarm-time-input {
        display: block;
      }
      .alarm-wrapper .alarm-time-input input {
        width: 1.5em;
        width: 2.3ch;
        box-sizing: content-box;
        display: inline-block;
        padding: 2px;
        background: none;
        border: none;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        color: inherit;
        font-family: inherit;
        text-align: center;
        font-size: inherit;
      }
      .alarm-wrapper .alarm-time-input span {
        margin: 0 1px;
      }
      .alarm-wrapper .alarm-time-input input:focused {
        border-bottom: 1px solid var(--paper-input-container-focus-color, var(--primary-color));
      }
      .alarm-wrapper .alarm-time-input input[type='number'] {
        -moz-appearance: textfield;
      }
      .alarm-wrapper .alarm-time-input input::-webkit-outer-spin-button,
      .alarm-wrapper .alarm-time-input input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      .alarm-wrapper .alarm-input {
        margin-bottom: 8px;
      }

      .alarm-wrapper .alarm-volume label {
        font-family: var(--paper-font-subhead_-_font-family);
        -webkit-font-smoothing: var(--paper-font-subhead_-_-webkit-font-smoothing);
        font-size: calc(var(--paper-font-subhead_-_font-size) * 0.75);
        font-weight: var(--paper-font-subhead_-_font-weight);
        line-height: var(--paper-font-subhead_-_line-height);
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: scale(0.75);
        transform: scale(0.75);
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }
      .alarm-wrapper .alarm-volume-slider {
        display: flex;
        align-items: center;
      }
      .alarm-wrapper .alarm-volume-slider ha-slider {
        flex-grow: 1;
        width: auto;
        margin-left: calc(-15px - var(--calculated-paper-slider-height) / 2);
      }
    `}_showTimeInputs(){const t=this.shadowRoot.getElementById("alarm-wrapper");t&&"shown"!==this.timeInputStatus&&(t.classList.add("show-input"),this.timeInputStatus="shown")}_selectedTimeValueChangedPicker(t){const e=t.target.value;if("true"===localStorage.getItem("serviceAlarmCard.forceNativePicker"))this._debounce("saveTimePickerValue",3e3,!1,e);else{this._saveTimePickerValue(e);const t=this.shadowRoot.getElementById("alarm-time-input-hour");t.value=e.split(":")[0],null==t||t.blur(),clearTimeout(this.inputBlurTimer);const i=this.shadowRoot.getElementById("alarm-time-input-minute");i.value=e.split(":")[1],null==i||i.blur(),clearTimeout(this.inputBlurTimer);const r=this.shadowRoot.getElementById("alarm-wrapper");if(!r)return;r.classList.remove("show-input","force-native-input-hour","force-native-input-minute"),this.timeInputStatus="none"}}_selectedTimeValueChangedInput(){this._debounce("saveTimeInputValue",3e3)}_saveTimePickerValue(t){const e=this.hass.states[this.config.entity].attributes[this.config.time_attribute];""!==t&&(this.shadowRoot.getElementById("alarm-time-picker-left").value=t,this.shadowRoot.getElementById("alarm-time-picker-right").value=t,t!==e&&this.hass.callService(this.config.platform,"set_alarm",{entity_id:this.config.entity,alarm_time:t}))}_saveTimeInputValue(){const t=this.hass.states[this.config.entity].attributes[this.config.time_attribute],e=this.shadowRoot.getElementById("alarm-time-input-hour"),i=this.shadowRoot.getElementById("alarm-time-input-minute"),r=Number(e.value),n=Number(i.value);if(isNaN(r)||isNaN(n)||r<0||r>23||n<0||n>59)return void console.error(`Values for alarm time of '${e.value}' hours and '${i.value}' is not a valid time!`);const a=("0"+r).slice(-2)+":"+("0"+n).slice(-2);this.shadowRoot.getElementById("alarm-time-picker-left").value=a,this.shadowRoot.getElementById("alarm-time-picker-right").value=a,a!==t&&this.hass.callService(this.config.platform,"set_alarm",{entity_id:this.config.entity,alarm_time:a})}_timePickerLeftClick(){this._timePickerClick(!0)}_timePickerRightClick(){this._timePickerClick(!1)}_timePickerClick(t){if("true"===localStorage.getItem("serviceAlarmCard.forceNativePicker")){const e=this.shadowRoot.getElementById("alarm-wrapper");if(!e)return;t?e.classList.add("force-native-input-hour"):e.classList.add("force-native-input-minute")}else if(this._showTimeInputs(),clearTimeout(this.inputBlurTimer),t){const t=this.shadowRoot.getElementById("alarm-time-input-hour");null==t||t.focus(),this._moveCursorToEnd(t)}else{const t=this.shadowRoot.getElementById("alarm-time-input-minute");null==t||t.focus(),this._moveCursorToEnd(t)}}_timePickerBlur(t){if("true"===localStorage.getItem("serviceAlarmCard.forceNativePicker")){this._debounce("saveTimePickerValue",0,!0,t.target.value);const e=this.shadowRoot.getElementById("alarm-wrapper");if(!e)return;e.classList.remove("force-native-input-hour","force-native-input-minute")}}_timeInputsBlur(){this.inputBlurTimer=setTimeout(()=>{this._debounce("saveTimeInputValue",0,!0);const t=this.shadowRoot.getElementById("alarm-wrapper");t&&(t.classList.remove("show-input"),this.timeInputStatus="none")},20)}_inputChanged(t){Mt(window,"haptic","light");const e=this.hass.states[this.config.entity].attributes[this.config.source_attribute];t.target.selectedItem&&""!==t.target.selectedItem.innerText&&t.target.selectedItem.value!==e&&this.hass.callService(this.config.platform,"set_alarm",{entity_id:this.config.entity,source:t.target.selectedItem.value})}_volumeChanged(){const t=this.shadowRoot.querySelector("#volume-input"),e=this.hass.states[this.config.entity].attributes[this.config.volume_attribute];t.value!==e&&this.hass.callService(this.config.platform,"set_alarm",{entity_id:this.config.entity,volume:t.value})}_enableChanged(){const t=this.shadowRoot.querySelector("#alarm-enabled"),e=this.hass.states[this.config.entity].attributes[this.config.enabled_attribute];t.checked!==e&&this.hass.callService(this.config.platform,"set_alarm",{entity_id:this.config.entity,enable:t.checked})}_moveCursorToEnd(t){if(!t)return;t.focus();const e=t.value;t.value="",t.value=e}_debounce(t,e,i=!1,r=""){switch(clearTimeout(this.debounceTimer),t){case"saveTimeInputValue":i?this._saveTimeInputValue():this.debounceTimer=setTimeout(()=>this._saveTimeInputValue(),e);break;case"saveTimePickerValue":i?this._saveTimePickerValue(r):this.debounceTimer=setTimeout(()=>this._saveTimePickerValue(r),e)}}};t([J({attribute:!1})],zt.prototype,"hass",void 0),t([Q()],zt.prototype,"config",void 0),zt=t([W("service-alarm")],zt);export{zt as SwitchAlarmCard};
