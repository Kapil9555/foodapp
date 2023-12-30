import CONNECT_DATABASE from "@/app/config/connection"
import Shop from "@/models/shopmodel";
import { NextResponse } from "next/server";

export const PATCH =async(req,{params})=>{
    await CONNECT_DATABASE();
    try{
       const body = await req.json();
       const respData = await Shop.findOneAndUpdate({_id:params.mid},{...body},{new:true})
        //   const respData = await Shop.find({_id:params.mid})  
        if(respData){
            // console.log("find response",respData)
            return NextResponse.json({message:"Edited Successfully",resp:respData},{status:200})
        } 
        else{
            // console.log("null response")
            return NextResponse.json({message:"Failed To Edit Data"},{status:200})
        }
    }
    catch(err){
        console.log(err)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}