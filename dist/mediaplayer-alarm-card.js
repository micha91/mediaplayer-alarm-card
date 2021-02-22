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
function e(e,t,i,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a<3?n(s):a>3?n(t,i,s):n(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s
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
 */}const t=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},r=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${r}--\x3e`,a=new RegExp(`${r}|${n}`);class s{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],s=document.createTreeWalker(t.content,133,null,!1);let l=0,d=-1,h=0;const{strings:p,values:{length:m}}=e;for(;h<m;){const e=s.nextNode();if(null!==e){if(d++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let r=0;for(let e=0;e<i;e++)o(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=p[h],i=c.exec(t)[2],r=i.toLowerCase()+"$lit$",n=e.getAttribute(r);e.removeAttribute(r);const s=n.split(a);this.parts.push({type:"attribute",index:d,name:i,strings:s}),h+=s.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const r=e.parentNode,n=t.split(a),s=n.length-1;for(let t=0;t<s;t++){let i,a=n[t];if(""===a)i=u();else{const e=c.exec(a);null!==e&&o(e[2],"$lit$")&&(a=a.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(a)}r.insertBefore(i,e),this.parts.push({type:"node",index:++d})}""===n[s]?(r.insertBefore(u(),e),i.push(e)):e.data=n[s],h+=s}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&d!==l||(d++,t.insertBefore(u(),e)),l=d,this.parts.push({type:"node",index:d}),null===e.nextSibling?e.data="":(i.push(e),d--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=n.pop()}for(const e of i)e.parentNode.removeChild(e)}}const o=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},l=e=>-1!==e.index,u=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(e,t){const{element:{content:i},parts:r}=e,n=document.createTreeWalker(i,133,null,!1);let a=p(r),s=r[a],o=-1,l=0;const u=[];let c=null;for(;n.nextNode();){o++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(u.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==s&&s.index===o;)s.index=null!==c?-1:s.index-l,a=p(r,a),s=r[a]}u.forEach(e=>e.parentNode.removeChild(e))}const h=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},p=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(l(t))return i}return-1};
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
const m=new WeakMap,f=e=>"function"==typeof e&&m.has(e),g={},_={};
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
class b{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],r=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let a,s=0,o=0,u=n.nextNode();for(;s<r.length;)if(a=r[s],l(a)){for(;o<a.index;)o++,"TEMPLATE"===u.nodeName&&(i.push(u),n.currentNode=u.content),null===(u=n.nextNode())&&(n.currentNode=i.pop(),u=n.nextNode());if("node"===a.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(u.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(u,a.name,a.strings,this.options));s++}else this.__parts.push(void 0),s++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const v=` ${r} `;class y{constructor(e,t,i,r){this.strings=e,this.values=t,this.type=i,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let a=0;a<e;a++){const e=this.strings[a],s=e.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===e.indexOf("--\x3e",s+1);const o=c.exec(e);t+=null===o?e+(i?v:n):e.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+r}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
 */const w=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new k(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let r=0;r<t;r++){i+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(w(e)||!S(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===g||w(e)&&e===this.value||(this.value=e,f(e)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const e=this.value;this.value=g,e(this)}this.value!==g&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}const e=this.__pendingValue;e!==g&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===_?(this.value=_,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const i=new b(t,e.processor,this.options),r=i._clone();i.update(e.values),this.__commitNode(r),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,r=0;for(const n of e)i=t[r],void 0===i&&(i=new C(this.options),t.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(t[r-1])),i.setValue(n),i.commit(),r++;r<t.length&&(t.length=r,this.clear(i&&i.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class P{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=g}}class N extends x{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends k{}let $=!1;try{const e={get capture(){return $=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=M(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=g}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const M=e=>e&&($?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function A(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const n=e.strings.join(r);return i=t.keyString.get(n),void 0===i&&(i=new s(e,e.getTemplateElement()),t.keyString.set(n,i)),t.stringsArray.set(e.strings,i),i}const V=new Map,I=new WeakMap;
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
class{handleAttributeExpressions(e,t,i,r){const n=t[0];if("."===n){return new N(e,t.slice(1),i).parts}return"@"===n?[new E(e,t.slice(1),r.eventContext)]:"?"===n?[new P(e,t.slice(1),i)]:new x(e,t,i).parts}handleTextExpression(e){return new C(e)}};
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
 */(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const D=(e,...t)=>new y(e,t,"html",R)
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
 */,O=(e,t)=>`${e}--${t}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const L=e=>t=>{const i=O(t.type,e);let n=V.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},V.set(i,n));let a=n.stringsArray.get(t.strings);if(void 0!==a)return a;const o=t.strings.join(r);if(a=n.keyString.get(o),void 0===a){const i=t.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(i,e),a=new s(t,i),n.keyString.set(o,a)}return n.stringsArray.set(t.strings,a),a},B=["html","svg"],U=new Set,Y=(e,t,i)=>{U.add(e);const r=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:a}=n;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<a;e++){const t=n[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{B.forEach(t=>{const i=V.get(O(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),d(e,i)})})})(e);const o=r.content;i?function(e,t,i=null){const{element:{content:r},parts:n}=e;if(null==i)return void r.appendChild(t);const a=document.createTreeWalker(r,133,null,!1);let s=p(n),o=0,l=-1;for(;a.nextNode();){for(l++,a.currentNode===i&&(o=h(t),i.parentNode.insertBefore(t,i));-1!==s&&n[s].index===l;){if(o>0){for(;-1!==s;)n[s].index+=o,s=p(n,s);return}s=p(n,s)}}}(i,s,o.firstChild):o.insertBefore(s,o.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){o.insertBefore(s,o.firstChild);const e=new Set;e.add(s),d(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const z={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},H=(e,t)=>t!==e&&(t==t||e==e),j={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:H};class F extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const r=this._attributeNameForProperty(i,t);void 0!==r&&(this._attributeToPropertyMap.set(r,i),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=j){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,i,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdateInternal(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||j}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=H){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,r=t.converter||z,n="function"==typeof r?r:r.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,r=t.converter;return(r&&r.toAttribute||z.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=j){const r=this.constructor,n=r._attributeNameForProperty(e,i);if(void 0!==n){const e=r._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(e);if(void 0!==r){const e=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let r=!0;if(void 0!==e){const n=this.constructor;i=i||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}F.finalized=!0;
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
const W=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:r}=t;return{kind:i,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),Z=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}}:Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}});function J(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Z(e,t)}function Q(e){return J({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class X{constructor(e,t){if(t!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const i=t.reduce((t,i,r)=>t+(e=>{if(e instanceof X)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[r+1],e[0]);return new X(i,G)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const te={};class ie extends F{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),r=[];i.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!K){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new X(String(t),G)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}ie.finalized=!0,ie.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,a=I.has(t),s=q&&11===t.nodeType&&!!t.host,o=s&&!U.has(n),l=o?document.createDocumentFragment():t;if(((e,t,r)=>{let n=I.get(t);void 0===n&&(i(t,t.firstChild),I.set(t,n=new C(Object.assign({templateFactory:A},r))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:L(n)},r)),o){const e=I.get(l);I.delete(l);const r=e.value instanceof b?e.value.template:void 0;Y(n,l,r),i(t,t.firstChild),t.appendChild(l),I.set(t,e)}!a&&s&&window.ShadyCSS.styleElement(t.host)};
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
const re=(e,t)=>{const i=e.startNode.parentNode,r=void 0===t?e.endNode:t.startNode,n=i.insertBefore(u(),r);i.insertBefore(u(),r);const a=new C(e.options);return a.insertAfterNode(n),a},ne=(e,t)=>(e.setValue(t),e.commit(),e),ae=(e,t,i)=>{const r=e.startNode.parentNode,n=i?i.startNode:e.endNode,a=t.endNode.nextSibling;a!==n&&((e,t,i=null,r=null)=>{for(;t!==i;){const i=t.nextSibling;e.insertBefore(t,r),t=i}})(r,t.startNode,a,n)},se=e=>{i(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},oe=(e,t,i)=>{const r=new Map;for(let n=t;n<=i;n++)r.set(e[n],n);return r},le=new WeakMap,ue=new WeakMap,ce=(de=(e,t,i)=>{let r;return void 0===i?i=t:void 0!==t&&(r=t),t=>{if(!(t instanceof C))throw new Error("repeat can only be used in text bindings");const n=le.get(t)||[],a=ue.get(t)||[],s=[],o=[],l=[];let u,c,d=0;for(const t of e)l[d]=r?r(t,d):d,o[d]=i(t,d),d++;let h=0,p=n.length-1,m=0,f=o.length-1;for(;h<=p&&m<=f;)if(null===n[h])h++;else if(null===n[p])p--;else if(a[h]===l[m])s[m]=ne(n[h],o[m]),h++,m++;else if(a[p]===l[f])s[f]=ne(n[p],o[f]),p--,f--;else if(a[h]===l[f])s[f]=ne(n[h],o[f]),ae(t,n[h],s[f+1]),h++,f--;else if(a[p]===l[m])s[m]=ne(n[p],o[m]),ae(t,n[p],n[h]),p--,m++;else if(void 0===u&&(u=oe(l,m,f),c=oe(a,h,p)),u.has(a[h]))if(u.has(a[p])){const e=c.get(l[m]),i=void 0!==e?n[e]:null;if(null===i){const e=re(t,n[h]);ne(e,o[m]),s[m]=e}else s[m]=ne(i,o[m]),ae(t,i,n[h]),n[e]=null;m++}else se(n[p]),p--;else se(n[h]),h++;for(;m<=f;){const e=re(t,s[f+1]);ne(e,o[m]),s[m++]=e}for(;h<=p;){const e=n[h++];null!==e&&se(e)}le.set(t,s),ue.set(t,l)}},(...e)=>{const t=de(...e);return m.set(t,!0),t});var de,he=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,pe="[^\\s]+",me=/\[([^]*?)\]/gm;function fe(e,t){for(var i=[],r=0,n=e.length;r<n;r++)i.push(e[r].substr(0,t));return i}var ge=function(e){return function(t,i){var r=i[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return r>-1?r:null}};function _e(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var r=0,n=t;r<n.length;r++){var a=n[r];for(var s in a)e[s]=a[s]}return e}var be=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ve=["January","February","March","April","May","June","July","August","September","October","November","December"],ye=fe(ve,3),we={dayNamesShort:fe(be,3),dayNames:be,monthNamesShort:ye,monthNames:ve,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},Se=_e({},we),xe=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},ke={D:function(e){return String(e.getDate())},DD:function(e){return xe(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return xe(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return xe(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return xe(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return xe(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return xe(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return xe(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return xe(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return xe(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return xe(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return xe(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+xe(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+xe(Math.floor(Math.abs(t)/60),2)+":"+xe(Math.abs(t)%60,2)}},Ce=function(e){return+e-1},Pe=[null,"[1-9]\\d?"],Ne=[null,pe],Te=["isPm",pe,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],$e=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}],Ee=(ge("monthNamesShort"),ge("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var Me=function(e,t,i){if(void 0===t&&(t=Ee.default),void 0===i&&(i={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var r=[];t=(t=Ee[t]||t).replace(me,(function(e,t){return r.push(t),"@@@"}));var n=_e(_e({},Se),i);return(t=t.replace(he,(function(t){return ke[t](e,n)}))).replace(/@@@/g,(function(){return r.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();var Ae=function(e,t,i,r){r=r||{},i=null==i?{}:i;var n=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return n.detail=i,e.dispatchEvent(n),n};var Ve={optional:"Optional",name:"Titel",media_player:"Media Player-Entität",platform:"Media Player Plattform",time_attribute:"Uhrzeit Attribut",volume_attribute:"Lautstärke Attribut",source_attribute:"Quelle Attribut",source_list_attribute:"Quellen Liste Attribut",volume_settings_attribute:"Lautstärke Einstellungs Attribut",invalid_configuration:"Ungültige Konfiguration",required_entity_missing:"Die notwendige Entität %entity% ist nicht gesetzt",required_entity_not_found:"Die notwendige Entität %entity% konnte nicht gefunden werden",required_attribute_not_found:"Das notwendige Attribut %attribute% konnte nicht im mediaplayer gefunden werden",required_attribute_missing:"Das notwendige Attribut %attribute% wurde nicht definiert.",force_native_time_picker_for_device:"Das integrierte Zeitauswahlmenü dises Browsers verwenden"},Ie={alarm_enabled:"Wecker an",alarm_volume:"Lautstärke",alarm_source:"Quelle"},Re={config:Ve,card:Ie},De={optional:"Optional",name:"Title",media_player:"Media-player entity",platform:"Media-player platform",time_attribute:"Alarm time",volume_attribute:"Volume attribute",source_attribute:"Source attribute",source_list_attribute:"Source list attribute",volume_settings_attribute:"Volume settings attribute",invalid_configuration:"Invalid configuration",required_entity_missing:"The entity %entity% has not been set",required_entity_not_found:"The needed entity %entity% has not been found",required_attribute_not_found:"The needed attribute %attribute% was not found in the given media player",required_attribute_missing:"The needed attribute %attribute% was not defined.",force_native_time_picker_for_device:"Use the integrated time picker"},Oe={alarm_enabled:"Alarm on",alarm_volume:"Volume",alarm_source:"Source"},qe={config:De,card:Oe};const Le={de:Object.freeze({__proto__:null,config:Ve,card:Ie,default:Re}),en:Object.freeze({__proto__:null,config:De,card:Oe,default:qe})};function Be(e,t="",i=""){const r=e.split(".")[0],n=e.split(".")[1],a=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let s;try{s=Le[a][r][n]}catch(e){s=Le.en[r][n]}return void 0===s&&(s=Le.en[r][n]),""!==t&&""!==i&&(s=s.replace(t,i)),s}let Ue=class extends ie{setConfig(e){this._config=e}get _title(){return this._config&&this._config.name||""}get _media_player_entity(){return this._config&&this._config.media_player||""}get _platform(){return this._config&&this._config.platform||""}get _time_attribute(){return this._config&&this._config.time_attribute||""}get _enabled_attribute(){return this._config&&this._config.enabled_attribute||""}get _volume_attribute(){return this._config&&this._config.volume_attribute||""}get _source_attribute(){return this._config&&this._config.source_attribute||""}get _source_list_attribute(){return this._config&&this._config.source_list_attribute||""}get _volume_settings_attribute(){return this._config&&this._config.volume_settings_attribute||""}get _force_native_time_picker_for_device(){return"true"===localStorage.getItem("mediaplayerAlarmCard.forceNativePicker")}render(){if(!this.hass)return D``;try{window.loadCardHelpers().then(e=>{e.createRowElement({type:"input-select-entity"})})}catch(e){}const e=Object.keys(this.hass.states).filter(e=>"media_player"===e.substr(0,e.indexOf(".")));return D`
      <div class="card-config">
        <paper-input
          label="${Be("config.name")} (${Be("config.optional")})"
          .value=${this._title}
          .configValue=${"name"}
          @value-changed=${this._valueChanged}
        ></paper-input>

        <div class="indent">
          <paper-dropdown-menu
            label="${Be("config.media_player")}"
            @value-changed=${this._valueChanged}
            .configValue=${"media_player"}
          >
            <paper-listbox
              slot="dropdown-content"
              .selected=${e.indexOf(this._media_player_entity)}
            >
              ${e.map(e=>D`
                  <paper-item>${e}</paper-item>
                `)}
            </paper-listbox>
          </paper-dropdown-menu>
          <br />
          <paper-input
            label="${Be("config.platform")}"
            @value-changed=${this._valueChanged}
            .configValue=${"platform"}
            .value=${this._platform}
          >
          </paper-input>
          <br />
          <paper-input
            label="${Be("config.time_attribute")}"
            @value-changed=${this._valueChanged}
            .configValue=${"time_attribute"}
            .value=${this._time_attribute}
          >
          </paper-input>
          <br />
          <paper-input
            label="${Be("config.enabled_attribute")}"
            @value-changed=${this._valueChanged}
            .configValue=${"enabled_attribute"}
            .value=${this._enabled_attribute}
          >
          </paper-input>
          <br />
          <paper-input
            label="${Be("config.volume_attribute")}"
            @value-changed=${this._valueChanged}
            .configValue=${"volume_attribute"}
            .value=${this._volume_attribute}
          >
          </paper-input>
          <br />
          <paper-input
            label="${Be("config.source_attribute")}"
            @value-changed=${this._valueChanged}
            .configValue=${"source_attribute"}
            .value=${this._source_attribute}
          >
          </paper-input>
          <br />
          <paper-input
            label="${Be("config.source_list_attribute")}"
            @value-changed=${this._valueChanged}
            .configValue=${"source_list_attribute"}
            .value=${this._source_list_attribute}
          >
          </paper-input>
          <br />
          <paper-input
            label="${Be("config.volume_settings_attribute")}"
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
        <span class="switch-label">${Be("config.force_native_time_picker_for_device")}</span>
      </div>
    `}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;this[`_${t.configValue}`]!==t.value&&(t.configValue&&("force_native_time_picker_for_device"===t.configValue?localStorage.setItem("mediaplayerAlarmCard.forceNativePicker",t.checked?"true":"false"):""===t.value?delete this._config[t.configValue]:this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:t.value})),Ae(this,"config-changed",{config:this._config}))}static get styles(){return ee`
      .indent {
        padding-left: 40px;
      }
      .switch-label {
        padding-left: 10px;
      }
    `}};e([J({attribute:!1})],Ue.prototype,"hass",void 0),e([Q()],Ue.prototype,"_config",void 0),Ue=e([W("mediaplayer-alarm-editor")],Ue);const Ye=window;Ye.customCards=Ye.customCards||[],Ye.customCards.push({type:"mediaplayer-alarm",name:"Media Player Alarm Card",preview:!1,description:"Coordinate mediaplayers alarm settings in a beautiful way"});console.info("%c MEDIAPLAYER-ALARM-CARD %c 3.0.3 ","color: cornsilk; font-weight: bold; background: firebrick","color: firebrick; font-weight: bold; background: cornsilk");let ze=class extends ie{constructor(){super(...arguments),this.timeInputStatus="none"}static async getConfigElement(){return document.createElement("mediaplayer-alarm-editor")}static getStubConfig(){return{}}setConfig(e){if(!e)throw new Error(Be("config.invalid_configuration"));if(!e.media_player)throw new Error(Be("config.required_entity_missing","%entity%",Be("config.media_player")));if(!e.time_attribute)throw new Error(Be("config.required_attribute_missing","%attribute%",Be("config.time_attribute")));if(!e.enabled_attribute)throw new Error(Be("config.required_attribute_missing","%attribute%",Be("config.enabled_attribute")));if(!e.volume_attribute)throw new Error(Be("config.required_attribute_missing","%attribute%",Be("config.volume_attribute")));if(!e.source_attribute)throw new Error(Be("config.required_attribute_missing","%attribute%",Be("config.source_attribute")));if(!e.source_list_attribute)throw new Error(Be("config.required_attribute_missing","%attribute%",Be("config.source_list_attribute")));if(!e.volume_settings_attribute)throw new Error(Be("config.required_attribute_missing","%attribute%",Be("config.volume_settings_attribute")));try{window.loadCardHelpers().then(e=>{e.createRowElement({type:"input-select-entity"})})}catch(e){}this.config=e}shouldUpdate(e){const t=function(e,t,i){if(t.has("config")||i)return!0;if(e.config.entity){var r=t.get("hass");return!r||r.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1);if(!t){const t=e.hass;return!t||t.states[this.config.media_player]!==this.hass.states[this.config.media_player]}return t}render(){if(!this.config||!this.hass)return D``;const e=this.hass.states[this.config.media_player].attributes[this.config.enabled_attribute];if(null===e)return D`
        <hui-warning
          >${this.hass.localize("config.required_attribute_not_found","%attribute%",this.config.enabled_attribute)}</hui-warning
        >
      `;const t=this.hass.states[this.config.media_player].attributes[this.config.time_attribute];if(!t)return D`
        <hui-warning
          >${this.hass.localize("config.required_attribute_not_found","%attribute%",this.config.time_attribute)}</hui-warning
        >
      `;const i=this.hass.states[this.config.media_player].attributes[this.config.source_attribute];if(!i)return D`
        <hui-warning
          >${this.hass.localize("config.required_attribute_not_found","%attribute%",this.config.source_attribute)}</hui-warning
        >
      `;const r=this.hass.states[this.config.media_player].attributes[this.config.source_list_attribute];if(!r)return D`
        <hui-warning
          >${this.hass.localize("config.required_attribute_not_found","%attribute%",this.config.source_list_attribute)}</hui-warning
        >
      `;const n=this.hass.states[this.config.media_player].attributes[this.config.volume_settings_attribute];if(!n)return D`
        <hui-warning
          >${this.hass.localize("config.required_attribute_not_found","%attribute%",this.config.volume_settings_attribute)}</hui-warning
        >
      `;const a=this.hass.states[this.config.media_player].attributes[this.config.volume_attribute];return a?D`
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
                ${t}
              </span>
              <input
                type="time"
                class="alarm-time-picker alarm-time-picker-left"
                required
                value="${t.slice(0,1)+":"+t.slice(2,3)}"
                id="alarm-time-picker-left"
                @input=${this._selectedTimeValueChangedPicker}
                @blur=${this._timePickerBlur}
                @click=${this._timePickerLeftClick}
              />
              <input
                type="time"
                class="alarm-time-picker alarm-time-picker-right"
                required
                value="${t.slice(0,1)+":"+t.slice(2,3)}"
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
                  value="${t.slice(0,1)}"
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
                  value="${t.slice(2,3)}"
                  id="alarm-time-input-minute"
                  @input=${this._selectedTimeValueChangedInput}
                  @blur=${this._timeInputsBlur}
                  @focus=${this._timePickerRightClick}
                />
              </div>
            </div>
          </div>

          <div class="alarm-properties-wrap">
            <label slot="label" for="alarm-enabled">${"alarm status"}</label>
            <ha-switch .checked=${e} @change=${this._enableChanged} id="alarm-enabled"></ha-switch>
            <label slot="label" for="alarm-input">${"source"}</label>
            <paper-dropdown-menu
              class="alarm-input"
              selected-item-label="${i}"
              @selected-item-label-changed="${this._inputChanged}"
              label="${r[i]}"
            >
              <paper-listbox slot="dropdown-content">
                ${ce(Object.keys(r),e=>D`
                      <paper-item .value="${e}">${r[e]}</paper-item>
                    `)}
              </paper-listbox>
            </paper-dropdown-menu>

            <div class="alarm-volume">
              <label slot="label" for="alarm-volume">${"volume"}</label>
              <div class="alarm-volume-slider">
                <ha-slider
                  .dir="${s=this.hass,function(e){var t=e.language||"en";return e.translationMetadata.translations[t]&&e.translationMetadata.translations[t].isRTL||!1}(s)?"rtl":"ltr"}"
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
      `;var s}static get styles(){return ee`
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
    `}_showTimeInputs(){const e=this.shadowRoot.getElementById("alarm-wrapper");e&&"shown"!==this.timeInputStatus&&(e.classList.add("show-input"),this.timeInputStatus="shown")}_selectedTimeValueChangedPicker(e){const t=e.target.value;if("true"===localStorage.getItem("mediaplayerAlarmCard.forceNativePicker"))this._debounce("saveTimePickerValue",3e3,!1,t);else{this._saveTimePickerValue(t);const e=this.shadowRoot.getElementById("alarm-time-input-hour");e.value=t.split(":")[0],null==e||e.blur(),clearTimeout(this.inputBlurTimer);const i=this.shadowRoot.getElementById("alarm-time-input-minute");i.value=t.split(":")[1],null==i||i.blur(),clearTimeout(this.inputBlurTimer);const r=this.shadowRoot.getElementById("alarm-wrapper");if(!r)return;r.classList.remove("show-input","force-native-input-hour","force-native-input-minute"),this.timeInputStatus="none"}}_selectedTimeValueChangedInput(){this._debounce("saveTimeInputValue",3e3)}_saveTimePickerValue(e){const t=this.hass.states[this.config.media_player].attributes[this.config.time_attribute];""!==e&&(this.shadowRoot.getElementById("alarm-time-picker-left").value=e,this.shadowRoot.getElementById("alarm-time-picker-right").value=e,e!==t&&this.hass.callService(this.config.platform,"set_alarm",{entity_id:this.config.media_player,alarm_time:e}))}_saveTimeInputValue(){const e=this.hass.states[this.config.media_player].attributes[this.config.time_attribute],t=this.shadowRoot.getElementById("alarm-time-input-hour"),i=this.shadowRoot.getElementById("alarm-time-input-minute"),r=Number(t.value),n=Number(i.value);if(isNaN(r)||isNaN(n)||r<0||r>23||n<0||n>59)return void console.error(`Values for alarm time of '${t.value}' hours and '${i.value}' is not a valid time!`);const a=("0"+r).slice(-2)+":"+("0"+n).slice(-2);this.shadowRoot.getElementById("alarm-time-picker-left").value=a,this.shadowRoot.getElementById("alarm-time-picker-right").value=a,a!==e&&this.hass.callService(this.config.platform,"set_alarm",{entity_id:this.config.media_player,alarm_time:a})}_timePickerLeftClick(){this._timePickerClick(!0)}_timePickerRightClick(){this._timePickerClick(!1)}_timePickerClick(e){if("true"===localStorage.getItem("mediaplayerAlarmCard.forceNativePicker")){const t=this.shadowRoot.getElementById("alarm-wrapper");if(!t)return;e?t.classList.add("force-native-input-hour"):t.classList.add("force-native-input-minute")}else if(this._showTimeInputs(),clearTimeout(this.inputBlurTimer),e){const e=this.shadowRoot.getElementById("alarm-time-input-hour");null==e||e.focus(),this._moveCursorToEnd(e)}else{const e=this.shadowRoot.getElementById("alarm-time-input-minute");null==e||e.focus(),this._moveCursorToEnd(e)}}_timePickerBlur(e){if("true"===localStorage.getItem("mediaplayerAlarmCard.forceNativePicker")){this._debounce("saveTimePickerValue",0,!0,e.target.value);const t=this.shadowRoot.getElementById("alarm-wrapper");if(!t)return;t.classList.remove("force-native-input-hour","force-native-input-minute")}}_timeInputsBlur(){this.inputBlurTimer=setTimeout(()=>{this._debounce("saveTimeInputValue",0,!0);const e=this.shadowRoot.getElementById("alarm-wrapper");e&&(e.classList.remove("show-input"),this.timeInputStatus="none")},20)}_inputChanged(e){Ae(window,"haptic","light");const t=this.hass.states[this.config.media_player].attributes[this.config.source_attribute];e.target.selectedItem&&""!==e.target.selectedItem.innerText&&e.target.selectedItem.value!==t&&this.hass.callService(this.config.platform,"set_alarm",{entity_id:this.config.media_player,source:e.target.selectedItem.value})}_volumeChanged(){const e=this.shadowRoot.querySelector("#volume-input"),t=this.hass.states[this.config.media_player].attributes[this.config.volume_attribute];e.value!==t&&this.hass.callService(this.config.platform,"set_alarm",{entity_id:this.config.media_player,volume:e.value})}_enableChanged(){const e=this.shadowRoot.querySelector("#alarm-enabled"),t=this.hass.states[this.config.media_player].attributes[this.config.enabled_attribute];e.checked!==t&&this.hass.callService(this.config.platform,"set_alarm",{entity_id:this.config.media_player,enable:e.checked})}_moveCursorToEnd(e){if(!e)return;e.focus();const t=e.value;e.value="",e.value=t}_debounce(e,t,i=!1,r=""){switch(clearTimeout(this.debounceTimer),e){case"saveTimeInputValue":i?this._saveTimeInputValue():this.debounceTimer=setTimeout(()=>this._saveTimeInputValue(),t);break;case"saveTimePickerValue":i?this._saveTimePickerValue(r):this.debounceTimer=setTimeout(()=>this._saveTimePickerValue(r),t)}}};e([J({attribute:!1})],ze.prototype,"hass",void 0),e([Q()],ze.prototype,"config",void 0),ze=e([W("mediaplayer-alarm")],ze);export{ze as MediaplayerAlarmCard};
