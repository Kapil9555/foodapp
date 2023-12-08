import CONNECT_DATABASE from "@/app/config/connection";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export const POST =async(req)=>{
 await CONNECT_DATABASE();
 try{
   const body = await req.json();
   // console.log("verify user",body);
   const isUserExist = await User.findOne({mobile:body.mobile});
   console.log(isUserExist);
   if(isUserExist){
     if(isUserExist.password == body.password){
        return NextResponse.json({message:"Login Successfull",resp:{uid:isUserExist._id}},{status:200});
     };
     if(isUserExist.password != body.password){
        return NextResponse.json({message:"Invalid Password"},{status:200});
     }
   }
   else{
      return NextResponse.json({message:"This Mobile No. is Not Registered With Us"},{status:200});
   };
 }catch(err){
    console.log(err);
    return NextResponse.json({message:"Internal Server Error"},{status:500})
 }
};