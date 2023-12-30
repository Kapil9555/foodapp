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


export const PATCH = async(req,{params})=>{
    await CONNECT_DATABASE();
    try{
      const body = await req.json();
      const resp = await Item.findOneAndUpdate({_id:params.id},{isAvailable:body.isAvailable},{new:true})
    //   console.log("response edit",resp);
    if(resp){
        return NextResponse.json({message:"Edited Successfully"},{status:200})
    }else{
        return NextResponse.json({message:"Failed To Edit"},{status:200})
    }
    }
    catch(err){
        console.log(err);
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}