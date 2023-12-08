import CONNECT_DATABASE from "@/app/config/connection"
import Billing from "@/models/billingModel";
import { NextResponse } from "next/server";

export const PATCH = async(req,{params}) =>{
       await CONNECT_DATABASE();
       try{
         const body = await req.json()
         //  console.log("orderStatus body : ",body)
          const respData = await Billing.findOneAndUpdate({_id:params.oid},{orderStatus:body.orderStatus},{new:true})
         //  console.log(respData)
         if(respData != null){
            return NextResponse.json({message:"Order Status Successfully Updated"})
         }

         if(respData == null){
            return NextResponse.json({message:"Failed To Update Order Status"})
         }
       }
       catch(err){
        console.log(err);
         return NextResponse.json({message:"Internal Server Error"})
       }
}