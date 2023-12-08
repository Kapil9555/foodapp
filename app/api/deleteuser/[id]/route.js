import CONNECT_DATABASE from "@/app/config/connection"
import User from "@/models/userModel";
import { NextResponse } from "next/server";



export const DELETE =async(req,{params})=>{
   await CONNECT_DATABASE();
   try{
     const resp = await User.deleteOne({_id:params.id})
    //  console.log("delete user",resp);
     if(resp){
        return NextResponse.json({message:"User Deleted Successfully"},{status:200});
     }
     if(!resp){
        return NextResponse.json({message:"Failed To Delete User"},{status:200});
     }
   }
   catch(err){
    // console.log(err);
    return NextResponse.json({message:"Internal Server Error"},{status:500});
   }
}