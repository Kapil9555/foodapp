import CONNECT_DATABASE from "@/app/config/connection";
import Item from "@/models/itemModel";
import { NextResponse } from "next/server";

export const GET =async(req,{params})=>{
   await CONNECT_DATABASE(); 
    try{
//    console.log(params)
   const respData = await Item.find({cid:params.cid})
    return NextResponse.json({message:"Fetched Successfully",resp:respData},{status:200})
        
     }catch(err){
        console.log(err)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
     }
};