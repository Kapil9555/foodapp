import CONNECT_DATABASE from "@/app/config/connection"
import Address from "@/models/addressModel";
import { NextResponse } from "next/server";

export const DELETE =async(req,{params}) =>{
   await CONNECT_DATABASE();
   try{
     console.log("params of delte",params)
     const resp =await Address.deleteOne({_id:[params.id]});
     console.log(resp)
     if(resp){
        return NextResponse.json({message:"Address Removed Successfully",resp:resp},{status:200})
     }
     if(!resp){
        return NextResponse.json({message:"Failed to Remove Address"},{status:403})
     }
   }
   catch(err){
    console.log(err);
    return NextResponse.json({message:"Internal Server Error"},{status:500})
   }
}