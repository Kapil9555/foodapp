import CONNECT_DATABASE from "@/app/config/connection";
import Cart from "@/models/cartModel";
import { NextResponse } from "next/server";

export const GET =async(req,{params})=>{
 await CONNECT_DATABASE();
console.log("params with id",params.uid)

 try{
    const resp = await Cart.find({uid:params.uid});
   //  console.log("response here",resp);
    if(resp){
       return NextResponse.json({message:"Data Fetched Successfully",resp:resp},{status:200});
    }
    if(!resp){
        return NextResponse.json({message:"Failed to Fetch Data"});
    }
 }catch(err){
    console.log(err);
    return NextResponse.json({message:"Internal Server Error"},{status:500});
 }
};