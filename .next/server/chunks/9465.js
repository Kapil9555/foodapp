"use strict";exports.id=9465,exports.ids=[9465],exports.modules={59465:(e,r,t)=>{t.d(r,{Z:()=>p});var d=t(11185),i=t.n(d);let o=new(i()).Schema({shopName:{type:String,required:!0},foodType:{type:String,required:!0},image:{type:String,required:!0},ratings:{type:Number,required:!1,default:0},offerPercentage:{type:Number,required:!0},foodForCost:{type:Number,required:!0},foodForMany:{type:Number,required:!0},deliverIn:{type:Number,required:!0},mobOnShop:{type:Number,required:!0},emailOnShop:{type:String,required:!0},shopAddress:{type:String,required:!0},wallet:{type:Number,required:!1,default:0},isShopBanned:{type:Boolean,required:!1,default:!1},isShopOpen:{type:Boolean,required:!1,default:!1},isPopular:{type:Boolean,required:!1,default:!1},isTrending:{type:Boolean,required:!1,default:!1}},{timestamps:!0}),u=i().models.Shop||new(i()).model("Shop",o),p=u}};