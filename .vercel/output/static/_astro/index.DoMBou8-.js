var Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function L(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var E=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;function z(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function H(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var u=Object.getOwnPropertyNames(r).map(function(f){return r[f]});if(u.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(f){n[f]=f}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var G=H()?Object.assign:function(e,r){for(var t,u=z(e),n,f=1;f<arguments.length;f++){t=Object(arguments[f]);for(var c in t)B.call(t,c)&&(u[c]=t[c]);if(E){n=E(t);for(var i=0;i<n.length;i++)V.call(t,n[i])&&(u[n[i]]=t[n[i]])}}return u},C={exports:{}},o={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=G,y=60103,$=60106;o.Fragment=60107;o.StrictMode=60108;o.Profiler=60114;var R=60109,P=60110,x=60112;o.Suspense=60113;var A=60115,I=60116;if(typeof Symbol=="function"&&Symbol.for){var a=Symbol.for;y=a("react.element"),$=a("react.portal"),o.Fragment=a("react.fragment"),o.StrictMode=a("react.strict_mode"),o.Profiler=a("react.profiler"),R=a("react.provider"),P=a("react.context"),x=a("react.forward_ref"),o.Suspense=a("react.suspense"),A=a("react.memo"),I=a("react.lazy")}var b=typeof Symbol=="function"&&Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=b&&e[b]||e["@@iterator"],typeof e=="function"?e:null)}function h(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F={};function d(e,r,t){this.props=e,this.context=r,this.refs=F,this.updater=t||q}d.prototype.isReactComponent={};d.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(h(85));this.updater.enqueueSetState(this,e,r,"setState")};d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function M(){}M.prototype=d.prototype;function j(e,r,t){this.props=e,this.context=r,this.refs=F,this.updater=t||q}var O=j.prototype=new M;O.constructor=j;g(O,d.prototype);O.isPureReactComponent=!0;var S={current:null},U=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function T(e,r,t){var u,n={},f=null,c=null;if(r!=null)for(u in r.ref!==void 0&&(c=r.ref),r.key!==void 0&&(f=""+r.key),r)U.call(r,u)&&!N.hasOwnProperty(u)&&(n[u]=r[u]);var i=arguments.length-2;if(i===1)n.children=t;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];n.children=s}if(e&&e.defaultProps)for(u in i=e.defaultProps,i)n[u]===void 0&&(n[u]=i[u]);return{$$typeof:y,type:e,key:f,ref:c,props:n,_owner:S.current}}function K(e,r){return{$$typeof:y,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function w(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function Q(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return r[t]})}var k=/\/+/g;function _(e,r){return typeof e=="object"&&e!==null&&e.key!=null?Q(""+e.key):r.toString(36)}function m(e,r,t,u,n){var f=typeof e;(f==="undefined"||f==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(f){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case y:case $:c=!0}}if(c)return c=e,n=n(c),e=u===""?"."+_(c,0):u,Array.isArray(n)?(t="",e!=null&&(t=e.replace(k,"$&/")+"/"),m(n,r,t,"",function(l){return l})):n!=null&&(w(n)&&(n=K(n,t+(!n.key||c&&c.key===n.key?"":(""+n.key).replace(k,"$&/")+"/")+e)),r.push(n)),1;if(c=0,u=u===""?".":u+":",Array.isArray(e))for(var i=0;i<e.length;i++){f=e[i];var s=u+_(f,i);c+=m(f,r,t,s,n)}else if(s=J(e),typeof s=="function")for(e=s.call(e),i=0;!(f=e.next()).done;)f=f.value,s=u+_(f,i++),c+=m(f,r,t,s,n);else if(f==="object")throw r=""+e,Error(h(31,r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function v(e,r,t){if(e==null)return e;var u=[],n=0;return m(e,u,"","",function(f){return r.call(t,f,n++)}),u}function W(e){if(e._status===-1){var r=e._result;r=r(),e._status=0,e._result=r,r.then(function(t){e._status===0&&(t=t.default,e._status=1,e._result=t)},function(t){e._status===0&&(e._status=2,e._result=t)})}if(e._status===1)return e._result;throw e._result}var D={current:null};function p(){var e=D.current;if(e===null)throw Error(h(321));return e}var Y={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:g};o.Children={map:v,forEach:function(e,r,t){v(e,function(){r.apply(this,arguments)},t)},count:function(e){var r=0;return v(e,function(){r++}),r},toArray:function(e){return v(e,function(r){return r})||[]},only:function(e){if(!w(e))throw Error(h(143));return e}};o.Component=d;o.PureComponent=j;o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y;o.cloneElement=function(e,r,t){if(e==null)throw Error(h(267,e));var u=g({},e.props),n=e.key,f=e.ref,c=e._owner;if(r!=null){if(r.ref!==void 0&&(f=r.ref,c=S.current),r.key!==void 0&&(n=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in r)U.call(r,s)&&!N.hasOwnProperty(s)&&(u[s]=r[s]===void 0&&i!==void 0?i[s]:r[s])}var s=arguments.length-2;if(s===1)u.children=t;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];u.children=i}return{$$typeof:y,type:e.type,key:n,ref:f,props:u,_owner:c}};o.createContext=function(e,r){return r===void 0&&(r=null),e={$$typeof:P,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:R,_context:e},e.Consumer=e};o.createElement=T;o.createFactory=function(e){var r=T.bind(null,e);return r.type=e,r};o.createRef=function(){return{current:null}};o.forwardRef=function(e){return{$$typeof:x,render:e}};o.isValidElement=w;o.lazy=function(e){return{$$typeof:I,_payload:{_status:-1,_result:e},_init:W}};o.memo=function(e,r){return{$$typeof:A,type:e,compare:r===void 0?null:r}};o.useCallback=function(e,r){return p().useCallback(e,r)};o.useContext=function(e,r){return p().useContext(e,r)};o.useDebugValue=function(){};o.useEffect=function(e,r){return p().useEffect(e,r)};o.useImperativeHandle=function(e,r,t){return p().useImperativeHandle(e,r,t)};o.useLayoutEffect=function(e,r){return p().useLayoutEffect(e,r)};o.useMemo=function(e,r){return p().useMemo(e,r)};o.useReducer=function(e,r,t){return p().useReducer(e,r,t)};o.useRef=function(e){return p().useRef(e)};o.useState=function(e){return p().useState(e)};o.version="17.0.2";C.exports=o;var X=C.exports;const ee=L(X);export{ee as R,Z as c,L as g,G as o,X as r};
