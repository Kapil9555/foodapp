import CONNECT_DATABASE from "@/app/config/connection"
import Billing from "@/models/billingModel";
import { NextResponse } from "next/server";

export const GET =async(req,{params})=>{
   await CONNECT_DATABASE();
   
   try{
    const respData = await Billing.findOne({_id:params.id})
    // console.log("order details",respData)
    if(respData){
        return NextResponse.json({message:"Fetched Successfully",resp:respData},{status:200})
    }
    if(!respData){
        return NextResponse.json({message:"Failed to Fetched"},{status:200})
    }
   }
   catch(err){
    console.log(err)
    return NextResponse.json({message:"Internal Server Error"},{status:500})
   }
}