"use strict";(()=>{var e={};e.id=148,e.ids=[148],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4598:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>g,originalPathname:()=>y,requestAsyncStorage:()=>p,routeModule:()=>l,serverHooks:()=>m,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>S});var a={};t.r(a),t.d(a,{GET:()=>GET}),t(95655);var o=t(83323),i=t(54647),s=t(27454),d=t(27166),u=t(66886);let GET=async()=>{await (0,s.Z)();try{let e=await d.Z.find({$or:[{orderStatus:"Placed"},{orderStatus:"Determined"},{orderStatus:"UnDetermined"},{orderStatus:"Picked"},{orderStatus:"pending"},{orderStatus:"Cooking"},{orderStatus:"Preparing"},{orderStatus:"On The Way"},{orderStatus:"Accepted"}]});if(0!=e.length)return u.Z.json({message:"Fetched Successfully",resp:e},{status:200});if(0==e)return u.Z.json({message:"No Data Found"},{status:200})}catch(e){return console.log(e),u.Z.json({message:"Internal Server Error"},{status:500})}},n=o.AppRouteRouteModule,l=new n({definition:{kind:i.x.APP_ROUTE,page:"/api/allactiveorder/route",pathname:"/api/allactiveorder",filename:"route",bundlePath:"app/api/allactiveorder/route"},resolvedPagePath:"/home/kapil/Desktop/adel social projects/adelsocial/app/api/allactiveorder/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:p,staticGenerationAsyncStorage:c,serverHooks:m,headerHooks:g,staticGenerationBailout:S}=l,y="/api/allactiveorder/route"},27166:(e,r,t)=>{t.d(r,{Z:()=>d});var a=t(11185),o=t.n(a);let i=new(o()).Schema({subTotal:{type:Number,required:!0},tax:{type:Number,required:!0},delChrg:{type:Number,required:!0},dis:{type:Number,required:!0},toPay:{type:Number,required:!0},uid:{type:String,required:!0},paymentMethod:{type:String,required:!0},items:[],delAddress:{},orderStatus:{type:String,required:!1,default:"Placed"}},{timestamps:!0}),s=o().models.Billing||new(o()).model("Billing",i),d=s}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[7882,9727,177,6981],()=>__webpack_exec__(4598));module.exports=t})();