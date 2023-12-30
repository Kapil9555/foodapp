import CONNECT_DATABASE from "@/app/config/connection"
import Billing from "@/models/billingModel";
import { NextResponse } from "next/server";

export const PATCH =async(req,{params})=>{
    await CONNECT_DATABASE();
    try{
        // console.log("active orders",params.id)
        const body= await req.json();
        const {_id,image,paymentMethod,items,delAddress,createdAt,updatedAt,__v,...others}=body
        // console.log("body",others)
        const res = await Billing.findOneAndUpdate({_id:params.id},{...others},{new:true});
         if(res){
            return NextResponse.json({message:"Details Updated Successfully"},{status:200})
         }else{
            return NextResponse.json({message:"Failed To Update Details"},{status:200})
         }
    }
    catch(err){
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}