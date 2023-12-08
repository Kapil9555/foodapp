import CONNECT_DATABASE from "@/app/config/connection"
import Billing from "@/models/billingModel";
import { NextResponse } from "next/server";

export const GET =async(req,{params})=>{
    await CONNECT_DATABASE();
    try{
       const respData = await Billing.find({$and:[
        {uid:params.uid},
        {$or:[{orderStatus:'Cancel By Customer'},{orderStatus:'Cancel By Merchant'},{orderStatus:'Cancel By Admin'},{orderStatus:'Cancel'},{orderStatus:'Delivered'},{orderStatus:'Rejected By Admin'},{orderStatus:'Rejected By Merchant'}]}
       ]})
    //    console.log('past order',respData)
       if(respData.length > 0){
           return NextResponse.json({message:"Fetched Successfully",resp:respData},{status:200})
        }
        else{
            return NextResponse.json({message:'No Data Found'},{status:200})
        }
    }
    catch(err){
        console.log(err)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}