import CONNECT_DATABASE from "@/app/config/connection"
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export const GET = async(req,{params})=>{
    await CONNECT_DATABASE();
    try{
        // console.log("Uid checking : ",params.uid)
      const respData = await User.find({_id:params.uid});
    //   console.log("checking response",respData)
      if(respData != null){
        return NextResponse.json({message:"Failed To Fetched Data",resp:respData},{status:200})
    }
    if(respData == null){
        return NextResponse.json({message:"Failed To Fetched Data"},{status:200})
      }
    }
    catch(err){
        console.log(err)
        return NextResponse.json({message:"Internal Server Error"});
    }
}