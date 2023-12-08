import CONNECT_DATABASE from "@/app/config/connection"
import Address from "@/models/addressModel";
import { NextResponse } from "next/server";

export const POST =async(req)=>{
   await CONNECT_DATABASE();
    
   try{
     const body = await req.json();
     console.log("body data",body)  
   
      const toSave =await Address(body);
      // console.log("toSave",toSave)
      const saved =await toSave.save();
      // console.log(saved)
      if(saved){
        return NextResponse.json({message:"Address Added Successfully",resp:saved},{status:200});
      }
      if(!saved){
        return NextResponse.json({message:"Failed To Add Address"});
      }

   }catch(err){
    console.log(err);
    return NextResponse.json({message:"Internal Server Error"},{status:500})
   }
}