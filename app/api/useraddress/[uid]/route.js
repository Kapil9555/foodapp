import CONNECT_DATABASE from "@/app/config/connection"
import Address from "@/models/addressModel";
import { NextResponse } from "next/server";

export const GET =async(req,{params})=>{
   await CONNECT_DATABASE();
   try{
       console.log("uid",params.uid);
       const resp = await Address.find({uid:params.uid});
       if(resp){
        return NextResponse.json({message:"Data Fetched Successfully",resp:resp},{status:200});
       }
       if(!resp){
        return NextResponse.json({message:"Failed to Fetched Succesfully"},{status:403});
       }
   }catch(err){
    // console.log(err);
    return NextResponse.json({message:"Internal Server Error"});
   }
}