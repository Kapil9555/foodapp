import CONNECT_DATABASE from "@/app/config/connection"
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export const PATCH = async(req,{params})=>{
   await CONNECT_DATABASE();
   try{
      const body = await req.json()
    //   console.log("is body data",body)
      console.log("is params data",params.uid)
      const resp = await User.findOneAndUpdate({_id:params.uid},{fullName:body.fullName,email:body.email,mobile:body.mobile,isActive:body.isActive},{new:true})
   
   if(resp != null){
    return NextResponse.json({message:"Details Edited Successfully"})
   }

   if(resp == null){
    return NextResponse.json({message:"Failed To Edited Details"})
   }

   }
   catch(err){
    console.log(err)
    return NextResponse.json({message:"Internal Server Error"},{status:500})
   }
}