import CONNECT_DATABASE from "@/app/config/connection"
import Address from "@/models/addressModel";
import { NextResponse } from "next/server";

export const GET =async(req,{params})=>{
   await CONNECT_DATABASE();
   try{
       // console.log("uid",params.uid);
       const resp = await Address.find({uid:params.uid});
        console.log("response length",resp)
       if(resp.length > 0){
        return NextResponse.json({message:"Fetched Successfully",resp:resp},{status:200});
        }
       if(resp.length == 0){
         return NextResponse.json({message:"No Data found"},{status:200});
       }
   }catch(err){
    // console.log(err);
    return NextResponse.json({message:"Internal Server Error"});
   }
}
