(()=>{var e={};e.id=2393,e.ids=[2393],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},61278:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>r.a,__next_app__:()=>h,originalPathname:()=>c,pages:()=>x,routeModule:()=>m,tree:()=>p});var n=s(73137),i=s(54647),o=s(4183),r=s.n(o),a=s(71775),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);s.d(t,l);let d=n.AppPageRouteModule,p=["",{children:["admin",{children:["adminaddnewshop",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,33754)),"/home/kapil/Desktop/adel social projects/adelsocial/app/admin/adminaddnewshop/page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,6610)),"/home/kapil/Desktop/adel social projects/adelsocial/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],x=["/home/kapil/Desktop/adel social projects/adelsocial/app/admin/adminaddnewshop/page.js"],c="/admin/adminaddnewshop/page",h={require:s,loadChunk:()=>Promise.resolve()},m=new d({definition:{kind:i.x.APP_PAGE,page:"/admin/adminaddnewshop/page",pathname:"/admin/adminaddnewshop",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},24493:(e,t,s)=>{Promise.resolve().then(s.bind(s,23403))},23403:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var n=s(60080),i=s(21971),o=s.n(i),r=s(33987),a=s.n(r),l=s(47459),d=s.n(l),p=s(58111),x=s.n(p),c=s(51892),h=s.n(c),m=s(88707),f=s.n(m),u=s(43872),g=s.n(u),j=s(16614),y=s.n(j),_=s(93258),C=s(9885);let __WEBPACK_DEFAULT_EXPORT__=()=>{let[e,t]=(0,C.useState)({shopName:"",foodType:"",offerPercentage:"",foodForCost:"",foodForMany:"",deliverIn:"",mobOnShop:"",emailOnShop:"",shopAddress:"",image:""}),handleCollect=s=>{let{name:n,value:i,files:o}=s.target;"image"==n?t({...e,[n]:o[0]}):t({...e,[n]:i})},handleSubmit=async()=>{if(e.shopName&&e.foodType&&e.offerPercentage&&e.foodForCost&&e.foodForMany&&e.deliverIn&&e.mobOnShop&&e.emailOnShop&&e.shopAddress)try{let s=new FormData;s.append("shopName",e.shopName),s.append("deliverIn",e.deliverIn),s.append("emailOnShop",e.emailOnShop),s.append("foodForCost",e.foodForCost),s.append("foodForMany",e.foodForMany),s.append("foodType",e.foodType),s.append("image",e.image),s.append("mobOnShop",e.mobOnShop),s.append("offerPercentage",e.offerPercentage),s.append("shopAddress",e.shopAddress);let n=await _.Z.post("/api/shop",s);"Shop Created Successfully"==n.data.message&&alert(n.data.message),t({shopName:"",foodType:"",offerPercentage:"",foodForCost:"",foodForMany:"",deliverIn:"",mobOnShop:"",emailOnShop:"",shopAddress:""})}catch(e){console.log(e),alert(e.message)}else alert("please enter the details carefully")};return n.jsx(o(),{container:!0,sx:{justifyContent:"center",overflow:"scroll",pb:"15px"},children:n.jsx(o(),{item:!0,xs:6,sx:{border:"1px solid gray"},children:(0,n.jsxs)(o(),{container:!0,children:[n.jsx(o(),{item:!0,xs:12,sx:{mb:"15px"},children:n.jsx(a(),{align:"center",sx:{bgcolor:"black",color:"white",p:"10px",fontSize:"14px",fontWeight:"700"},children:" Add New Shop"})}),(0,n.jsxs)(o(),{container:!0,sx:{p:"10px"},children:[n.jsx(o(),{item:!0,xs:12,sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(a(),{sx:{fontSize:"17px"},children:"Shop Name:"})}),n.jsx(o(),{item:!0,xs:12,sx:{display:"flex",alignItems:"center"},children:n.jsx(d(),{sx:{height:"30px",width:"100%"},name:"shopName",value:e.shopName,onChange:handleCollect})}),n.jsx(o(),{item:!0,xs:12,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(a(),{sx:{fontSize:"17px"},children:"Food Type:"})}),n.jsx(o(),{item:!0,xs:12,sx:{display:"flex",alignItems:"center"},children:n.jsx(x(),{fullWidth:!0,size:"small",children:(0,n.jsxs)(h(),{labelId:"demo-simple-select-label",id:"demo-simple-select",value:e.foodType,name:"foodType",onChange:handleCollect,children:[n.jsx(f(),{value:"Veg",children:"Veg"}),n.jsx(f(),{value:"Non Veg",children:"Non Veg"}),n.jsx(f(),{value:"Both",children:"Both"})]})})}),n.jsx(o(),{item:!0,xs:12,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(a(),{sx:{fontSize:"17px"},children:"Image:"})}),n.jsx(o(),{item:!0,xs:12,sx:{display:"flex",alignItems:"center"},children:n.jsx(g(),{sx:{height:"30px",width:"100%"},children:(0,n.jsxs)(a(),{align:"center",sx:{position:"relative",top:"0px",mt:"4px",border:"1px solid gray"},children:[n.jsx("input",{type:"file",name:"image",style:{zIndex:99,opacity:0,position:"absolute",left:"0px",top:"0px",height:"30px",width:"100%"},onChange:handleCollect}),"Choose Image"]})})}),n.jsx(o(),{item:!0,xs:12,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(a(),{sx:{fontSize:"17px"},children:"Off Percentage :"})}),n.jsx(o(),{item:!0,xs:12,sx:{display:"flex",alignItems:"center"},children:n.jsx(d(),{type:"number",sx:{height:"30px",width:"100%"},name:"offerPercentage",value:e.offerPercentage,onChange:handleCollect})}),n.jsx(o(),{item:!0,xs:12,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(a(),{sx:{fontSize:"17px"},children:"Food for Cost:"})}),n.jsx(o(),{item:!0,xs:12,sx:{display:"flex",alignItems:"center"},children:n.jsx(d(),{type:"number",sx:{height:"30px",width:"100%"},name:"foodForCost",value:e.foodForCost,onChange:handleCollect})}),n.jsx(o(),{item:!0,xs:12,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(a(),{sx:{fontSize:"17px"},children:"Food for Many:"})}),n.jsx(o(),{item:!0,xs:12,sx:{display:"flex",alignItems:"center"},children:n.jsx(d(),{type:"number",sx:{height:"30px",width:"100%"},name:"foodForMany",value:e.foodForMany,onChange:handleCollect})}),n.jsx(o(),{item:!0,xs:12,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(a(),{sx:{fontSize:"17px"},children:"Deliver In:"})}),n.jsx(o(),{item:!0,xs:12,sx:{display:"flex",alignItems:"center"},children:n.jsx(d(),{type:"number",sx:{height:"30px",width:"100%"},name:"deliverIn",value:e.deliverIn,onChange:handleCollect})}),n.jsx(o(),{item:!0,xs:12,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(a(),{sx:{fontSize:"17px"},children:"Moble no. of Shop:"})}),n.jsx(o(),{item:!0,xs:12,sx:{display:"flex",alignItems:"center"},children:n.jsx(d(),{type:"number",sx:{height:"30px",width:"100%"},name:"mobOnShop",value:e.mobOnShop,onChange:handleCollect})}),n.jsx(o(),{item:!0,xs:12,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(a(),{sx:{fontSize:"17px"},children:"Email no. of Shop:"})}),n.jsx(o(),{item:!0,xs:12,sx:{display:"flex",alignItems:"center"},children:n.jsx(d(),{sx:{height:"30px",width:"100%"},name:"emailOnShop",value:e.emailOnShop,onChange:handleCollect})}),n.jsx(o(),{item:!0,xs:12,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(a(),{sx:{fontSize:"17px"},children:"Shop Address:"})}),n.jsx(o(),{item:!0,xs:12,sx:{display:"flex",alignItems:"center"},children:n.jsx(d(),{sx:{height:"30px",width:"100%"},name:"shopAddress",value:e.shopAddress,onChange:handleCollect})}),n.jsx(o(),{item:!0,xs:12,sx:{mt:"20px",display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},children:n.jsx(y(),{variant:"contained",sx:{bgcolor:"black",color:"white","&:hover":{bgcolor:"black"}},onClick:handleSubmit,children:"Add new shop"})})]})]})})})}},33754:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>r,__esModule:()=>o,default:()=>l});var n=s(17536);let i=(0,n.createProxy)(String.raw`/home/kapil/Desktop/adel social projects/adelsocial/app/admin/adminaddnewshop/page.js`),{__esModule:o,$$typeof:r}=i,a=i.default,l=a},57481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var n=s(96885);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,n.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[7882,5957,6885,9474,9307,3987,4856,1971,6614,9537,3832,8677,7209,4163,9897,8111,7459,1892,1272,8707,8220],()=>__webpack_exec__(61278));module.exports=s})();