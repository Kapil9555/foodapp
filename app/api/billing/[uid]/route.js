import CONNECT_DATABASE from "@/app/config/connection";
import Billing from "@/models/billingModel";
import { NextResponse } from "next/server";

export const GET =async(req,{params})=>{
    await CONNECT_DATABASE();
  
    try{
       const uid = params.uid;
    //    console.log("uid part",uid)
       const resp = await Billing.find({$and:[{uid:uid},{$or:[{orderStatus:'Determined'},{orderStatus:'Pending'},{orderStatus:'Picked'},{orderStatus:'Accepted'},{orderStatus:'UnDetermined'},{orderStatus:'Placed'},{orderStatus:'Cooking'},{orderStatus:'Preparing'},{orderStatus:'On The Way'}]}]});
      
    //   console.log("resp new ",resp)
        if(resp.length > 0){
             // console.log("response",resp)
           return NextResponse.json({message:"Successfull",resp:resp},{status:200})
         }
         else{
           return NextResponse.json({message:"No Data Found"},{status:200})

         }
     
    }
    catch(err){
       console.log(err);
       return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
  
  }