(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5523],{7754:function(e,t,n){"use strict";var r=n(6314);t.Z=void 0;var i=r(n(984)),o=n(7437),u=(0,i.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");t.Z=u},984:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(9897)},1898:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(791),i=n(3428),o=n(2265),u=n(7042),l=n(9538),a=n(5600),s=n(9975),c=n(5843),d=n(7927),f=n(6520),h=n(5702);function getSkeletonUtilityClass(e){return(0,h.Z)("MuiSkeleton",e)}(0,f.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var p=n(7437);let v=["animation","className","component","height","style","variant","width"],_=e=>e,m,Z,g,b,useUtilityClasses=e=>{let{classes:t,variant:n,animation:r,hasChildren:i,width:o,height:u}=e;return(0,a.Z)({root:["root",n,r,i&&"withChildren",i&&!o&&"fitContent",i&&!u&&"heightAuto"]},getSkeletonUtilityClass,t)},y=(0,l.F4)(m||(m=_`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),S=(0,l.F4)(Z||(Z=_`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),w=(0,c.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let n=String(e.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",r=parseFloat(e.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,s.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,l.iv)(g||(g=_`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),y),({ownerState:e,theme:t})=>"wave"===e.animation&&(0,l.iv)(b||(b=_`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),S,(t.vars||t).palette.action.hover)),C=o.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:l,component:a="span",height:s,style:c,variant:f="text",width:h}=n,m=(0,r.Z)(n,v),Z=(0,i.Z)({},n,{animation:o,component:a,variant:f,hasChildren:!!m.children}),g=useUtilityClasses(Z);return(0,p.jsx)(w,(0,i.Z)({as:a,ref:t,className:(0,u.Z)(g.root,l),ownerState:Z},m,{style:(0,i.Z)({width:h,height:s},c)}))});var k=C},9446:function(e,t,n){"use strict";var r=n(2940);t.Z=r.Z},9782:function(e,t,n){"use strict";n.d(t,{Z:function(){return createSvgIcon}});var r=n(3428),i=n(2265),o=n(791),u=n(7042),l=n(5600),a=n(8702),s=n(7927),c=n(5843),d=n(6520),f=n(5702);function getSvgIconUtilityClass(e){return(0,f.Z)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=n(7437);let p=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],useUtilityClasses=e=>{let{color:t,fontSize:n,classes:r}=e,i={root:["root","inherit"!==t&&`color${(0,a.Z)(t)}`,`fontSize${(0,a.Z)(n)}`]};return(0,l.Z)(i,getSvgIconUtilityClass,r)},v=(0,c.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,a.Z)(n.color)}`],t[`fontSize${(0,a.Z)(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,i,o,u,l,a,s,c,d,f,h,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(n=e.transitions)||null==(r=n.create)?void 0:r.call(n,"fill",{duration:null==(i=e.transitions)||null==(i=i.duration)?void 0:i.shorter}),fontSize:({inherit:"inherit",small:(null==(o=e.typography)||null==(u=o.pxToRem)?void 0:u.call(o,20))||"1.25rem",medium:(null==(l=e.typography)||null==(a=l.pxToRem)?void 0:a.call(l,24))||"1.5rem",large:(null==(s=e.typography)||null==(c=s.pxToRem)?void 0:c.call(s,35))||"2.1875rem"})[t.fontSize],color:null!=(d=null==(f=(e.vars||e).palette)||null==(f=f[t.color])?void 0:f.main)?d:({action:null==(h=(e.vars||e).palette)||null==(h=h.action)?void 0:h.active,disabled:null==(p=(e.vars||e).palette)||null==(p=p.action)?void 0:p.disabled,inherit:void 0})[t.color]}}),m=i.forwardRef(function(e,t){let n=(0,s.Z)({props:e,name:"MuiSvgIcon"}),{children:l,className:a,color:c="inherit",component:d="svg",fontSize:f="medium",htmlColor:m,inheritViewBox:Z=!1,titleAccess:g,viewBox:b="0 0 24 24"}=n,y=(0,o.Z)(n,p),S=i.isValidElement(l)&&"svg"===l.type,w=(0,r.Z)({},n,{color:c,component:d,fontSize:f,instanceFontSize:e.fontSize,inheritViewBox:Z,viewBox:b,hasSvgAsChild:S}),C={};Z||(C.viewBox=b);let k=useUtilityClasses(w);return(0,h.jsxs)(v,(0,r.Z)({as:d,className:(0,u.Z)(k.root,a),focusable:"false",color:m,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t},C,y,S&&l.props,{ownerState:w,children:[S?l.props.children:l,g?(0,h.jsx)("title",{children:g}):null]}))});function createSvgIcon(e,t){function Component(n,i){return(0,h.jsx)(m,(0,r.Z)({"data-testid":`${t}Icon`,ref:i},n,{children:e}))}return Component.muiName=m.muiName,i.memo(i.forwardRef(Component))}m.muiName="SvgIcon"},494:function(e,t,n){"use strict";var r=n(8078);t.Z=r.Z},9897:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return i.Z},createChainedFunction:function(){return o.Z},createSvgIcon:function(){return u.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return utils_deprecatedPropType},isMuiElement:function(){return a.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return c.Z},requirePropFactory:function(){return utils_requirePropFactory},setRef:function(){return d},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return h.Z},unsupportedProp:function(){return utils_unsupportedProp},useControlled:function(){return p.Z},useEventCallback:function(){return v.Z},useForkRef:function(){return m.Z},useIsFocusVisible:function(){return Z.Z}});var r=n(5097),i=n(8702),o=n(9446),u=n(9782),l=n(494),utils_deprecatedPropType=function(e,t){return()=>null},a=n(673),s=n(3931),c=n(6649);n(3428);var utils_requirePropFactory=function(e,t){return()=>null},d=n(3406).Z,f=n(8519),h=n(2916),utils_unsupportedProp=function(e,t,n,r,i){return null},p=n(8496),v=n(96),m=n(7663),Z=n(3308);let g={configure:e=>{r.Z.configure(e)}}},673:function(e,t,n){"use strict";n.d(t,{Z:function(){return utils_isMuiElement}});var r=n(2265),utils_isMuiElement=function(e,t){var n,i;return r.isValidElement(e)&&-1!==t.indexOf(null!=(n=e.type.muiName)?n:null==(i=e.type)||null==(i=i._payload)||null==(i=i.value)?void 0:i.muiName)}},3931:function(e,t,n){"use strict";var r=n(6278);t.Z=r.Z},6649:function(e,t,n){"use strict";var r=n(8221);t.Z=r.Z},8496:function(e,t,n){"use strict";n.d(t,{Z:function(){return utils_useControlled}});var r=n(2265),utils_useControlled=function({controlled:e,default:t,name:n,state:i="value"}){let{current:o}=r.useRef(void 0!==e),[u,l]=r.useState(t),a=o?e:u,s=r.useCallback(e=>{o||l(e)},[]);return[a,s]}},8519:function(e,t,n){"use strict";var r=n(1091);t.Z=r.Z},2916:function(e,t,n){"use strict";var r=n(3449);t.Z=r.Z},2940:function(e,t,n){"use strict";function createChainedFunction(...e){return e.reduce((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)},()=>{})}n.d(t,{Z:function(){return createChainedFunction}})},8078:function(e,t,n){"use strict";function debounce(e,t=166){let n;function debounced(...r){clearTimeout(n),n=setTimeout(()=>{e.apply(this,r)},t)}return debounced.clear=()=>{clearTimeout(n)},debounced}n.d(t,{Z:function(){return debounce}})},6278:function(e,t,n){"use strict";function ownerDocument(e){return e&&e.ownerDocument||document}n.d(t,{Z:function(){return ownerDocument}})},8221:function(e,t,n){"use strict";n.d(t,{Z:function(){return ownerWindow}});var r=n(6278);function ownerWindow(e){let t=(0,r.Z)(e);return t.defaultView||window}},3449:function(e,t,n){"use strict";n.d(t,{Z:function(){return useId}});var r,i=n(2265);let o=0,u=(r||(r=n.t(i,2)))["useId".toString()];function useId(e){if(void 0!==u){let t=u();return null!=e?e:t}return function(e){let[t,n]=i.useState(e),r=e||t;return i.useEffect(()=>{null==t&&(o+=1,n(`mui-${o}`))},[t]),r}(e)}},6314:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);