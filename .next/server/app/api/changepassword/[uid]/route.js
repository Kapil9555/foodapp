"use strict";(()=>{var e={};e.id=4404,e.ids=[4404],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},87318:(e,r,a)=>{a.r(r),a.d(r,{headerHooks:()=>w,originalPathname:()=>h,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>m,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>g});var s={};a.r(s),a.d(s,{PATCH:()=>PATCH}),a(95655);var t=a(83323),i=a(54647),o=a(27454),n=a(44886),d=a(66886);let PATCH=async(e,{params:r})=>{await (0,o.Z)();try{let a=await e.json(),s=await n.Z.findOne({_id:r.uid});if(null!=s){if(a.currPassword==s.password)return await n.Z.findOneAndUpdate({_id:r.uid},{password:a.newPassword},{new:!0}),d.Z.json({message:"Password Changed Successfully"},{status:200});return d.Z.json({message:"Incorrect Password"})}if(null==!s)return d.Z.json({message:"Failed To Updated Password"})}catch(e){return console.log(e),d.Z.json({message:"Internal Server Error"},{status:500})}},u=t.AppRouteRouteModule,p=new u({definition:{kind:i.x.APP_ROUTE,page:"/api/changepassword/[uid]/route",pathname:"/api/changepassword/[uid]",filename:"route",bundlePath:"app/api/changepassword/[uid]/route"},resolvedPagePath:"/home/kapil/Desktop/adel social projects/adelsocial/app/api/changepassword/[uid]/route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:m,headerHooks:w,staticGenerationBailout:g}=p,h="/api/changepassword/[uid]/route"},44886:(e,r,a)=>{a.d(r,{Z:()=>n});var s=a(11185),t=a.n(s);let i=new(t()).Schema({fullName:{type:String,required:!0,trim:!0},email:{type:String,required:!0,trim:!0},mobile:{type:Number,required:!0},password:{type:String,required:!0},image:{type:String,required:!1,default:"abc.png"},isActive:{type:Boolean,required:!1,default:!0}},{timestamps:!0}),o=t().models.User||new(t()).model("User",i),n=o}};var r=require("../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),a=r.X(0,[7882,9727,177,6981],()=>__webpack_exec__(87318));module.exports=a})();