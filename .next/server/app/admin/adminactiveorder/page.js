(()=>{var e={};e.id=6135,e.ids=[6135,427],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},36555:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>r.a,__next_app__:()=>h,originalPathname:()=>p,pages:()=>x,routeModule:()=>m,tree:()=>c});var i=s(73137),a=s(54647),n=s(4183),r=s.n(n),l=s(71775),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=i.AppPageRouteModule,c=["",{children:["admin",{children:["adminactiveorder",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,70611)),"/home/kapil/Desktop/adel social projects/adelsocial/app/admin/adminactiveorder/page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,6610)),"/home/kapil/Desktop/adel social projects/adelsocial/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],x=["/home/kapil/Desktop/adel social projects/adelsocial/app/admin/adminactiveorder/page.js"],p="/admin/adminactiveorder/page",h={require:s,loadChunk:()=>Promise.resolve()},m=new d({definition:{kind:a.x.APP_PAGE,page:"/admin/adminactiveorder/page",pathname:"/admin/adminactiveorder",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7758:(e,t,s)=>{Promise.resolve().then(s.bind(s,11030))},11030:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>page});var i=s(60080);s(23700);var a=s(21971),n=s.n(a),r=s(33987),l=s.n(r),o=s(43872),d=s.n(o),c=s(77523),x=s.n(c),p=s(52694),h=s.n(p),m=s(70138),g=s.n(m),u=s(44233),j=s.n(u),f=s(80765),y=s.n(f),b=s(24608),_=s.n(b),C=s(16614),v=s.n(C),S=s(93258),k=s(52451),w=s.n(k),P=s(57114),A=s(9885),E=s(44197),D=s(80427),I=s(89440),z=s.n(I),q=s(47459),T=s.n(q),O=s(58111),W=s.n(O),N=s(51892),F=s.n(N),Z=s(88707),M=s.n(Z),R=s(99360),B=s.n(R);let components_AdminEditActiveOrder=({editModal:e,setErrorSnack:t,setCustomSnack:s,setEditModal:a,fetchData:r})=>{let[o,c]=(0,A.useState)(!1),[x,p]=(0,A.useState)([]),handleCollect=t=>{let{name:s,value:i,checked:n}=t.target;"isAvailable"==s||"isPopular"==s?a({...e,data:{...e.data,[s]:n}}):a({...e,data:{...e.data,[s]:i}})},fetchOrderStatus=async()=>{let e=await S.Z.get("/api/orderstatus");p(e.data.resp)},handleEdit=async()=>{c(!0);try{let i=await S.Z.patch(`/api/allactiveorder/${e.data._id}`,e.data);console.log("response",i),"Details Updated Successfully"==i.data.message?(r(),a({...e,open:!1}),s({open:!0,message:i.data.message})):(a({...e,open:!1}),t({open:!0,message:i.data.message})),c(!1)}catch(e){console.log(e.message)}};return(0,A.useEffect)(()=>{fetchOrderStatus()},[]),i.jsx(i.Fragment,{children:i.jsx(z(),{open:e.open,onClose:()=>{a({...e,open:!1})},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:i.jsx(h(),{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,bgcolor:"white",p:4,textAlign:"center",height:"fit-content",bgcolor:"white"},children:(0,i.jsxs)(n(),{container:!0,children:[i.jsx(n(),{item:!0,xs:12,sx:{mb:"45px"},children:i.jsx(l(),{align:"center",sx:{bgcolor:"black",color:"white",p:"10px",fontSize:"14px",fontWeight:"700"},children:"Edit Active Order"})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:3,lg:3,sx:{pr:"7px",display:"flex",alignItems:"center",justifyContent:{lg:"right",m:"right",sm:"center",xs:"center"}},children:i.jsx(l(),{sx:{fontSize:"14px"},children:"Delivery Charge:"})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:9,lg:9,sx:{display:"flex",alignItems:"center"},children:i.jsx(T(),{sx:{height:"30px"},name:"delChrg",value:e.data.delChrg,fullWidth:!0,onChange:handleCollect})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",pr:"7px",display:"flex",alignItems:"center",justifyContent:{lg:"right",m:"right",sm:"center",xs:"center"}},children:i.jsx(l(),{sx:{fontSize:"14px"},children:"Discount:"})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:9,lg:9,sx:{mt:"15px",display:"flex",alignItems:"center"},children:i.jsx(T(),{sx:{height:"30px"},type:"number",name:"dis",value:e.data.dis,fullWidth:!0,onChange:handleCollect})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:{lg:"right",m:"right",sm:"center",xs:"center"}},children:i.jsx(l(),{sx:{fontSize:"14px"},children:"Sub Total: "})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:9,lg:9,sx:{mt:"15px",display:"flex",alignItems:"center"},children:i.jsx(T(),{type:"number",sx:{height:"30px",width:"100%"},name:"subTotal",value:e.data.subTotal,onChange:handleCollect})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:{lg:"right",m:"right",sm:"center",xs:"center"}},children:i.jsx(l(),{sx:{fontSize:"14px"},children:"Tax: "})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:9,lg:9,sx:{mt:"15px",display:"flex",alignItems:"center"},children:i.jsx(T(),{type:"number",sx:{height:"30px",width:"100%"},name:"tax",value:e.data.tax,onChange:handleCollect})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:{lg:"right",m:"right",sm:"center",xs:"center"}},children:i.jsx(l(),{sx:{fontSize:"14px"},children:"To Pay: "})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:9,lg:9,sx:{mt:"15px",display:"flex",alignItems:"center"},children:i.jsx(T(),{type:"number",sx:{height:"30px",width:"100%"},name:"toPay",value:e.data.toPay,onChange:handleCollect})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:{lg:"right",m:"right",sm:"center",xs:"center"}},children:i.jsx(l(),{sx:{fontSize:"14px"},children:"Order Status: "})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:9,lg:9,sx:{mt:"15px",display:"flex",alignItems:"center"},children:i.jsx(W(),{sx:{m:1,minWidth:200},size:"small",children:i.jsx(F(),{labelId:"demo-select-small-label",id:"demo-select-small",name:"orderStatus",value:e.data.orderStatus,onChange:handleCollect,children:x.map((e,t)=>i.jsx(M(),{value:e,children:e},t))})})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(l(),{sx:{fontSize:"14px"},children:"Image:"})}),i.jsx(n(),{item:!0,xs:12,sm:12,md:9,lg:9,sx:{mt:"10px",display:"flex",alignItems:"center"},children:i.jsx(d(),{sx:{height:"30px",width:"100%"},children:(0,i.jsxs)(l(),{align:"center",sx:{position:"relative",top:"0px",mt:"4px",border:"1px solid gray"},children:[i.jsx("input",{type:"file",disabled:!0,style:{zIndex:99,opacity:0,position:"absolute",left:"0px",top:"0px",height:"30px",width:"100%"}}),"Choose Image"]})})}),i.jsx(n(),{item:!0,xs:12,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},children:!0==o?i.jsx(B(),{size:"1.7rem",color:"inherit"}):i.jsx(v(),{variant:"contained",sx:{bgcolor:"black",color:"white","&:hover":{bgcolor:"black"}},onClick:handleEdit,children:"Edit Product"})})]})})})})};var U=s(58947),X=s(49408);let page=()=>{let e=(0,P.useRouter)();(0,P.useParams)();let[t,s]=(0,A.useState)([]),[a,r]=(0,A.useState)({open:!1,data:{}}),[o,c]=(0,A.useState)(!1),[p,m]=(0,A.useState)({open:!1,message:""}),[u,f]=(0,A.useState)({open:!1,message:""}),b=["S.N","Receiver Name"," Order Status","To Pay","Payment Method","Address","Action"],handleNavigateDetails=t=>{e.push(`/admin/orderdetails/${t}`)},fetchData=async()=>{try{let e=await S.Z.get("/api/allactiveorder");"Fetched Successfully"==e.data.message&&s(e.data.resp),"No Data Found"==e.data.message&&c(!0)}catch(e){console.log(e)}},handleDeleteOrder=()=>{console.log("all deleted")},handleEditdetails=async e=>{r({open:!0,data:e})};return(0,A.useEffect)(()=>{fetchData()},[]),(0,i.jsxs)(i.Fragment,{children:[i.jsx(n(),{container:!0,sx:{height:"80px",bgcolor:"black",alignItems:"center",width:"100%"},children:i.jsx(n(),{item:!0,xs:4,children:i.jsx(l(),{sx:{fontSize:"30px",fontWeight:"900",color:"white"},children:"Admin DashBoard"})})}),(0,i.jsxs)(n(),{container:!0,sx:{},children:[i.jsx(n(),{item:!0,xs:12,children:i.jsx(d(),{sx:{p:"15px",bgcolor:"#e0e0e0"},children:i.jsx(l(),{align:"center",sx:{fontSize:"25px",fontWeight:"900",color:"black",cursor:"pointer"},children:"All Active Order"})})}),i.jsx(n(),{item:!0,xs:12,children:o?i.jsx(n(),{container:!0,sx:{},children:(0,i.jsxs)(n(),{item:!0,xs:12,sx:{height:"60vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[i.jsx(d(),{sx:{position:"relative",height:"200px",width:"200px"},children:i.jsx(w(),{src:E.Z,alt:"no data",style:{height:"100%",width:"100%",position:"absolute"}})}),i.jsx(l(),{sx:{fontSize:"20px",fontWeight:"800",color:"#bdbdbd"},children:"No Data Found"})]})}):0==t.length?i.jsx(D.Z,{tableHead:b}):i.jsx(x(),{container:"true",component:h(),children:(0,i.jsxs)(x(),{"aria-label":"sticky table",children:[i.jsx(g(),{children:i.jsx(j(),{sx:{backgroundColor:"black"},children:b.map((e,t)=>i.jsx(y(),{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:e},t))})}),i.jsx(_(),{children:t.map((e,t)=>(0,i.jsxs)(j(),{children:[i.jsx(y(),{align:"center",sx:{cursor:"pointer"},children:t+1}),i.jsx(y(),{align:"center",sx:{cursor:"pointer"},onClick:()=>{handleNavigateDetails(e._id)},children:e.delAddress.receiverName}),i.jsx(y(),{align:"center",sx:{cursor:"pointer"},children:e.orderStatus}),i.jsx(y(),{align:"center",sx:{cursor:"pointer"},children:e.toPay}),i.jsx(y(),{align:"center",sx:{cursor:"pointer"},children:e.paymentMethod}),(0,i.jsxs)(y(),{align:"center",sx:{cursor:"pointer",textTransform:"capitalize"},children:[e.delAddress.address," , ",e.delAddress.landMark," , ",e.delAddress.state," , ",e.delAddress.pinCode]}),i.jsx(y(),{align:"center",sx:{cursor:"pointer"},children:(0,i.jsxs)(d(),{children:[i.jsx(v(),{variant:"contained",sx:{bgcolor:"black","&:hover":{bgcolor:"black"},p:"3px 0px",fontSize:"12px",mr:"10px"},onClick:()=>{handleEditdetails(e)},children:"edit"}),i.jsx(v(),{variant:"contained",sx:{bgcolor:"red","&:hover":{bgcolor:"red"},p:"3px 0px",fontSize:"12px"},onClick:()=>{handleDeleteOrder(e._id)},children:"delete"})]})})]},t))})]})})})]}),i.jsx(X.Z,{customSnack:p,setCustomSnack:m}),i.jsx(U.Z,{errorSnack:u,setErrorSnack:f}),i.jsx(components_AdminEditActiveOrder,{setCustomSnack:m,setErrorSnack:f,editModal:a,setEditModal:r,fetchData:fetchData})]})}},23700:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var i=s(60080),a=s(89440),n=s.n(a),r=s(52694),l=s.n(r),o=s(21971),d=s.n(o),c=s(33987),x=s.n(c),p=s(47459),h=s.n(p),m=s(43872),g=s.n(m),u=s(16614),j=s.n(u),f=s(93258),y=s(9885);let __WEBPACK_DEFAULT_EXPORT__=({open:e,setOpen:t,mid:s,fetchData:a,setCustomSnack:r,setErrorSnack:o})=>{let[c,p]=(0,y.useState)({catName:"",mid:s,image:""}),handleCollectData=e=>{let{name:t,value:s,files:i}=e.target;"image"==t?p({...c,[t]:i[0]}):p({...c,[t]:s})},handleAddCategory=async()=>{if(c.catName&&c.image)try{let e=new FormData;e.append("catName",c.catName),e.append("image",c.image),e.append("mid",c.mid);let t=await f.Z.post("/api/category",e);"Category Created Successfully"==t.data.message?(a(),r({open:!0,message:t.data.message}),p({...c,catName:"",image:""})):o({open:!0,message:t.data.message})}catch(e){console.log(e)}else o({open:!0,message:"please fill the all details"});t(!1)};return i.jsx(i.Fragment,{children:i.jsx(n(),{open:e,onClose:()=>{t(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:i.jsx(l(),{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,bgcolor:"white",p:4,textAlign:"center",height:250,bgcolor:"white"},children:(0,i.jsxs)(d(),{container:!0,children:[i.jsx(d(),{item:!0,xs:12,sx:{mb:"45px"},children:i.jsx(x(),{align:"center",sx:{bgcolor:"black",color:"white",p:"10px",fontSize:"14px",fontWeight:"700"},children:" Add New"})}),i.jsx(d(),{item:!0,xs:12,sm:12,md:3,lg:3,sx:{pr:"7px",display:"flex",alignItems:"center",justifyContent:"right"},children:i.jsx(x(),{sx:{fontSize:"14px"},children:"Category Name:"})}),i.jsx(d(),{item:!0,xs:12,sm:12,md:9,lg:9,sx:{display:"flex",alignItems:"center"},children:i.jsx(h(),{sx:{height:"30px"},name:"catName",value:c.catName,fullWidth:!0,onChange:e=>{handleCollectData(e)}})}),i.jsx(d(),{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(x(),{sx:{fontSize:"17px"},children:"Image:"})}),i.jsx(d(),{item:!0,xs:12,sm:12,md:9,lg:9,sx:{display:"flex",alignItems:"center"},children:i.jsx(g(),{sx:{height:"30px",width:"100%"},children:(0,i.jsxs)(x(),{align:"center",sx:{position:"relative",top:"0px",mt:"4px",border:"1px solid gray"},children:[i.jsx("input",{type:"file",name:"image",value:c.img,style:{zIndex:99,opacity:0,position:"absolute",left:"0px",top:"0px",height:"30px",width:"100%"},onChange:e=>{handleCollectData(e)}}),"Choose Image"]})})}),i.jsx(d(),{item:!0,xs:12,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(j(),{variant:"contained",sx:{bgcolor:"black",color:"white","&:hover":{bgcolor:"black"}},onClick:handleAddCategory,children:"create Category"})})]})})})})}},58947:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var i=s(60080),a=s(64832),n=s.n(a),r=s(81932),l=s.n(r);s(9885);let __WEBPACK_DEFAULT_EXPORT__=({errorSnack:e,setErrorSnack:t})=>{let handleClose=(s,i)=>{"clickaway"!==i&&t({...e,open:!1})};return i.jsx(n(),{open:e.open,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:2e3,onClose:handleClose,children:i.jsx(l(),{onClose:handleClose,severity:"error",children:e.message})})}},80427:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var i=s(60080),a=s(77523),n=s.n(a),r=s(52694),l=s.n(r),o=s(70138),d=s.n(o),c=s(44233),x=s.n(c),p=s(80765),h=s.n(p),m=s(24608),g=s.n(m),u=s(10413),j=s.n(u);s(9885);let __WEBPACK_DEFAULT_EXPORT__=({tableHead:e})=>i.jsx(i.Fragment,{children:i.jsx(n(),{container:"true",component:l(),children:(0,i.jsxs)(n(),{"aria-label":"sticky table",children:[i.jsx(d(),{children:i.jsx(x(),{sx:{backgroundColor:"black"},children:e.map((e,t)=>i.jsx(h(),{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:e},t))})}),i.jsx(g(),{children:[,,,,,].fill(1).map((t,s)=>i.jsx(x(),{children:e.map((e,t)=>i.jsx(h(),{align:"center",sx:{cursor:"pointer",p:"2px"},children:i.jsx(j(),{sx:{height:"70px",width:"90%"}})},t))},s))})]})})})},70611:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>r,__esModule:()=>n,default:()=>o});var i=s(17536);let a=(0,i.createProxy)(String.raw`/home/kapil/Desktop/adel social projects/adelsocial/app/admin/adminactiveorder/page.js`),{__esModule:n,$$typeof:r}=a,l=a.default,o=l},44197:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});let i={src:"/_next/static/media/nodata2.bd7acd98.gif",height:600,width:800,blurWidth:0,blurHeight:0}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[7882,5957,6885,9474,9307,3987,4856,1971,6614,9537,3832,8677,413,2451,7209,4163,9897,8111,2193,8060,7459,1892,1272,4483,1153,8707,8220,4002],()=>__webpack_exec__(36555));module.exports=s})();