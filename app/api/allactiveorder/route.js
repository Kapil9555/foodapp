import CONNECT_DATABASE from "@/app/config/connection"
import Billing from "@/models/billingModel";
import axios from "axios";
import { NextResponse } from "next/server";

export const GET =async()=>{
    await CONNECT_DATABASE();
    try{
       const respData = await Billing.find({$or:[{orderStatus:'Placed'},{orderStatus:'Determined'},{orderStatus:'UnDetermined'},{orderStatus:'Picked'},{orderStatus:'pending'},{orderStatus:'Cooking'},{orderStatus:'Preparing'},{orderStatus:'On The Way'},{orderStatus:'Accepted'}]});
        if(respData.length !=0){
            return NextResponse.json({message:'Fetched Successfully',resp:respData},{status:200});
        }

        if(respData == 0){
            return NextResponse.json({message:"No Data Found"},{status:200})
        }
    }
    catch(err){
        console.log(err);
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}