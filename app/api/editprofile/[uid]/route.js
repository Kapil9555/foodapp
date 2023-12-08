import CONNECT_DATABASE from "@/app/config/connection"
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export const PATCH = async(req,{params})=>{
    await CONNECT_DATABASE();
    try{
      // console.log("params uid",params.uid)
      const body = await req.json();
      // console.log("body",body)
      const resp = await User.findOne({_id:params.uid});
      // console.log("user details",resp[0])

      if(resp != null){
            const respData = await User.findOneAndUpdate({_id:params.uid},{fullName:body.fullName,mobile:body.mobile,email:body.email},{new:true})
            return NextResponse.json({message:"Profile Updated Successfully",resp:respData},{status:200}) 
         }
      if(resp == null){
        return NextResponse.json({message:"Failed To Update Profile"})
      }
    
    }
    catch(err){
        console.log(err);
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}