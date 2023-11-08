import CONNECT_DATABASE from "@/app/config/connection";
import Item from "@/models/itemModel";
import { NextResponse } from "next/server";

export const DELETE =async(req,{params})=>{
   await CONNECT_DATABASE();
   try{
    const respData = await Item.deleteOne({_id:params.id})
    if(respData){
        return NextResponse.json({message:"Item Deleted Successfully"},{status:200})
    }
    else {
        return NextResponse.json({message:"Failed to Delete Item"})
    };
   }catch(err){
    console.log(err)
    return NextResponse.json({message:"Internal Server Error"},{status:500})
   };
};