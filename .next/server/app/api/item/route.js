"use strict";(()=>{var e={};e.id=3891,e.ids=[3891],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},80890:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>g,originalPathname:()=>v,requestAsyncStorage:()=>l,routeModule:()=>d,serverHooks:()=>m,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>_});var r={};a.r(r),a.d(r,{POST:()=>POST}),a(95655);var s=a(83323),o=a(54647),i=a(27454),n=a(97355),u=a(66886);let POST=async e=>{await (0,i.Z)();try{let t=await e.json(),a=(0,n.Z)({...t}),r=await a.save();if(r)return u.Z.json({message:"Item Added Successfully",resp:r},{status:201});return u.Z.json({message:"Failed to Add Data"},{status:403})}catch(e){return console.log(e),u.Z.json({message:"Internal Server Error"},{status:500})}},p=s.AppRouteRouteModule,d=new p({definition:{kind:o.x.APP_ROUTE,page:"/api/item/route",pathname:"/api/item",filename:"route",bundlePath:"app/api/item/route"},resolvedPagePath:"/home/kapil/Desktop/adel social projects/adelsocial/app/api/item/route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:m,headerHooks:g,staticGenerationBailout:_}=d,v="/api/item/route"}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[7882,9727,177,6981,7355],()=>__webpack_exec__(80890));module.exports=a})();