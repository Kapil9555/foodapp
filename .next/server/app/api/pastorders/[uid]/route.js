"use strict";(()=>{var e={};e.id=7306,e.ids=[7306],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},70506:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>y,originalPathname:()=>S,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>m,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>g});var a={};t.r(a),t.d(a,{GET:()=>GET}),t(95655);var s=t(83323),d=t(54647),o=t(27454),u=t(27166),i=t(66886);let GET=async(e,{params:r})=>{await (0,o.Z)();try{let e=await u.Z.find({$and:[{uid:r.uid},{$or:[{orderStatus:"Cancel By Customer"},{orderStatus:"Cancel By Merchant"},{orderStatus:"Cancel By Admin"},{orderStatus:"Cancel"},{orderStatus:"Delivered"},{orderStatus:"Rejected By Admin"},{orderStatus:"Rejected By Merchant"}]}]});if(e.length>0)return i.Z.json({message:"Fetched Successfully",resp:e},{status:200});return i.Z.json({message:"No Data Found"},{status:200})}catch(e){return console.log(e),i.Z.json({message:"Internal Server Error"},{status:500})}},n=s.AppRouteRouteModule,p=new n({definition:{kind:d.x.APP_ROUTE,page:"/api/pastorders/[uid]/route",pathname:"/api/pastorders/[uid]",filename:"route",bundlePath:"app/api/pastorders/[uid]/route"},resolvedPagePath:"/home/kapil/Desktop/adel social projects/adelsocial/app/api/pastorders/[uid]/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:m,headerHooks:y,staticGenerationBailout:g}=p,S="/api/pastorders/[uid]/route"},27166:(e,r,t)=>{t.d(r,{Z:()=>u});var a=t(11185),s=t.n(a);let d=new(s()).Schema({subTotal:{type:Number,required:!0},tax:{type:Number,required:!0},delChrg:{type:Number,required:!0},dis:{type:Number,required:!0},toPay:{type:Number,required:!0},uid:{type:String,required:!0},paymentMethod:{type:String,required:!0},items:[],delAddress:{},orderStatus:{type:String,required:!1,default:"Placed"}},{timestamps:!0}),o=s().models.Billing||new(s()).model("Billing",d),u=o}};var r=require("../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[7882,9727,177,6981],()=>__webpack_exec__(70506));module.exports=t})();