"use strict";exports.id=7209,exports.ids=[7209],exports.modules={46536:(e,t,n)=>{var r=n(92439);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(43259)),o=r(n(54845)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(9885));r(n(55601)),n(44268);var l=n(65481),u=r(n(48650)),s=n(65972),d=r(n(99215)),c=n(60080);let f=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}function getScale(e){return`scale(${e}, ${e**2})`}let p={entering:{opacity:1,transform:getScale(1)},entered:{opacity:1,transform:"none"}},g="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),y=a.forwardRef(function(e,t){let{addEndListener:n,appear:r=!0,children:y,easing:m,in:v,onEnter:b,onEntered:E,onEntering:T,onExit:_,onExited:j,onExiting:h,style:x,timeout:O="auto",TransitionComponent:P=l.Transition}=e,C=(0,o.default)(e,f),k=a.useRef(),w=a.useRef(),R=(0,u.default)(),z=a.useRef(null),M=(0,d.default)(z,y.ref,t),normalizedTransitionCallback=e=>t=>{if(e){let n=z.current;void 0===t?e(n):e(n,t)}},D=normalizedTransitionCallback(T),W=normalizedTransitionCallback((e,t)=>{let n;(0,s.reflow)(e);let{duration:r,delay:i,easing:o}=(0,s.getTransitionProps)({style:x,timeout:O,easing:m},{mode:"enter"});"auto"===O?(n=R.transitions.getAutoHeightDuration(e.clientHeight),w.current=n):n=r,e.style.transition=[R.transitions.create("opacity",{duration:n,delay:i}),R.transitions.create("transform",{duration:g?n:.666*n,delay:i,easing:o})].join(","),b&&b(e,t)}),A=normalizedTransitionCallback(E),S=normalizedTransitionCallback(h),H=normalizedTransitionCallback(e=>{let t;let{duration:n,delay:r,easing:i}=(0,s.getTransitionProps)({style:x,timeout:O,easing:m},{mode:"exit"});"auto"===O?(t=R.transitions.getAutoHeightDuration(e.clientHeight),w.current=t):t=n,e.style.transition=[R.transitions.create("opacity",{duration:t,delay:r}),R.transitions.create("transform",{duration:g?t:.666*t,delay:g?r:r||.333*t,easing:i})].join(","),e.style.opacity=0,e.style.transform=getScale(.75),_&&_(e)}),q=normalizedTransitionCallback(j);return a.useEffect(()=>()=>{clearTimeout(k.current)},[]),(0,c.jsx)(P,(0,i.default)({appear:r,in:v,nodeRef:z,onEnter:W,onEntered:A,onEntering:D,onExit:H,onExited:q,onExiting:S,addEndListener:e=>{"auto"===O&&(k.current=setTimeout(e,w.current||0)),n&&n(z.current,e)},timeout:"auto"===O?null:O},C,{children:(e,t)=>a.cloneElement(y,(0,i.default)({style:(0,i.default)({opacity:0,transform:getScale(.75),visibility:"exited"!==e||v?void 0:"hidden"},p[e],x,y.props.style),ref:M},t))}))});y.muiSupportAuto=!0,t.default=y},7209:(e,t,n)=>{var r=n(92439);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=r(n(46536))},65972:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTransitionProps=function(e,t){var n,r;let{timeout:i,easing:o,style:a={}}=e;return{duration:null!=(n=a.transitionDuration)?n:"number"==typeof i?i:i[t.mode]||0,easing:null!=(r=a.transitionTimingFunction)?r:"object"==typeof o?o[t.mode]:o,delay:a.transitionDelay}},t.reflow=void 0,t.reflow=e=>e.scrollTop}};