"use strict";(()=>{var e={};e.id=1255,e.ids=[1255],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},251:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>g,originalPathname:()=>h,requestAsyncStorage:()=>p,routeModule:()=>l,serverHooks:()=>c,staticGenerationAsyncStorage:()=>m,staticGenerationBailout:()=>y});var a={};t.r(a),t.d(a,{GET:()=>GET}),t(95655);var i=t(83323),d=t(54647),o=t(27454),s=t(27166),u=t(66886);let GET=async(e,{params:r})=>{await (0,o.Z)();try{let e=await s.Z.findOne({_id:r.id});if(e)return u.Z.json({message:"Fetched Successfully",resp:e},{status:200});if(!e)return u.Z.json({message:"Failed to Fetched"},{status:200})}catch(e){return console.log(e),u.Z.json({message:"Internal Server Error"},{status:500})}},n=i.AppRouteRouteModule,l=new n({definition:{kind:d.x.APP_ROUTE,page:"/api/orderdetail/[id]/route",pathname:"/api/orderdetail/[id]",filename:"route",bundlePath:"app/api/orderdetail/[id]/route"},resolvedPagePath:"/home/kapil/Desktop/adel social projects/adelsocial/app/api/orderdetail/[id]/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:p,staticGenerationAsyncStorage:m,serverHooks:c,headerHooks:g,staticGenerationBailout:y}=l,h="/api/orderdetail/[id]/route"},27166:(e,r,t)=>{t.d(r,{Z:()=>s});var a=t(11185),i=t.n(a);let d=new(i()).Schema({subTotal:{type:Number,required:!0},tax:{type:Number,required:!0},delChrg:{type:Number,required:!0},dis:{type:Number,required:!0},toPay:{type:Number,required:!0},uid:{type:String,required:!0},paymentMethod:{type:String,required:!0},items:[],delAddress:{},orderStatus:{type:String,required:!1,default:"Placed"}},{timestamps:!0}),o=i().models.Billing||new(i()).model("Billing",d),s=o}};var r=require("../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[7882,9727,177,6981],()=>__webpack_exec__(251));module.exports=t})();