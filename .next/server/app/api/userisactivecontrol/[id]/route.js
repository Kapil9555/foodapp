"use strict";(()=>{var e={};e.id=7812,e.ids=[7812],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},48107:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>v,originalPathname:()=>_,requestAsyncStorage:()=>p,routeModule:()=>l,serverHooks:()=>m,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>g});var i={};t.r(i),t.d(i,{PATCH:()=>PATCH}),t(95655);var a=t(83323),s=t(54647),o=t(27454),n=t(44886),u=t(66886);let PATCH=async(e,{params:r})=>{await (0,o.Z)();try{let t=await e.json(),i=await n.Z.findOneAndUpdate({_id:r.id},{isActive:t.isActive},{new:!0});if(null!=i)return u.Z.json({message:"Updated Successfully",resp:i},{status:200});if(null==i)return u.Z.json({message:"Failed To Update",resp:i},{status:200})}catch(e){return console.log(e),u.Z.json({message:"Internal Server Error"},{status:500})}},d=a.AppRouteRouteModule,l=new d({definition:{kind:s.x.APP_ROUTE,page:"/api/userisactivecontrol/[id]/route",pathname:"/api/userisactivecontrol/[id]",filename:"route",bundlePath:"app/api/userisactivecontrol/[id]/route"},resolvedPagePath:"/home/kapil/Desktop/adel social projects/adelsocial/app/api/userisactivecontrol/[id]/route.js",nextConfigOutput:"",userland:i}),{requestAsyncStorage:p,staticGenerationAsyncStorage:c,serverHooks:m,headerHooks:v,staticGenerationBailout:g}=l,_="/api/userisactivecontrol/[id]/route"},44886:(e,r,t)=>{t.d(r,{Z:()=>n});var i=t(11185),a=t.n(i);let s=new(a()).Schema({fullName:{type:String,required:!0,trim:!0},email:{type:String,required:!0,trim:!0},mobile:{type:Number,required:!0},password:{type:String,required:!0},image:{type:String,required:!1,default:"abc.png"},isActive:{type:Boolean,required:!1,default:!0}},{timestamps:!0}),o=a().models.User||new(a()).model("User",s),n=o}};var r=require("../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[7882,9727,177,6981],()=>__webpack_exec__(48107));module.exports=t})();