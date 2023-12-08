import CONNECT_DATABASE from "@/app/config/connection"
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export const PATCH = async(req,{params})=>{
    await CONNECT_DATABASE();
    try{
      // console.log("params uid",params.uid)
      const body = await req.json();
      // console.log("body",body)
      const isUserExist = await User.findOne({_id:params.uid});
      // console.log("user details",isUserExist[0].password , "body password : ",body.currPassword)
      if(isUserExist != null){
        if(body.currPassword == isUserExist.password){
           const respData = await User.findOneAndUpdate({_id:params.uid},{password:body.newPassword},{new:true})
           return NextResponse.json({message:"Password Changed Successfully"},{status:200})
        }
        else{
          return NextResponse.json({message:"Incorrect Password"})
        }
      }
      if(!isUserExist == null){
        return NextResponse.json({message:"Failed To Updated Password"})
      }
    }
    catch(err){
        console.log(err);
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}