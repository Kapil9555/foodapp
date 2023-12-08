import CONNECT_DATABASE from "@/app/config/connection"
import User from "@/models/userModel";
import { NextResponse } from "next/server"

export const PATCH = async(req,{params})=>{
      await CONNECT_DATABASE();
    try{
       const body = await req.json();
    //    console.log("Body Data : ",body)
    //    console.log("Params Id : ",params.id)
       const resp = await User.findOneAndUpdate({_id:params.id},{isActive:body.isActive},{new:true})
    //    console.log("check response : ",resp)
    if(resp != null){
        return NextResponse.json({message:"Updated Successfully",resp:resp},{status:200})
    }
    if(resp == null){
        return NextResponse.json({message:"Failed To Update",resp:resp},{status:200})
    }
    }
    catch(err){
        console.log(err)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}