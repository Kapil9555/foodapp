import CONNECT_DATABASE from "@/app/config/connection";
import Item from "@/models/itemModel";
import { NextResponse } from "next/server";


export const GET =async(req,{params})=>{
   await CONNECT_DATABASE(); 
    try{
    const respData = await Item.find({cid:params.id})
    if(respData.length > 0){
       return NextResponse.json({message:"Fetched Successfully",resp:respData},{status:200})
    }
    if(respData.length == 0){
      return NextResponse.json({message:"No Data Found"},{status:200})
    }
     }catch(err){
        console.log(err)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
     }
};



export const PATCH =async(req,{params})=>{
   await CONNECT_DATABASE();
   try{
      const body = await req.json();
      // console.log("body",body)
      // console.log("params check",params.id);
      const {_id,createdAt,updatedAt, __v,...items}=body;
      // console.log("rest items",items);
      const toEdit= await Item.findOneAndUpdate({_id:params.id},{...items},{new:true});
      console.log("edited",toEdit)
      if(toEdit){
         return NextResponse.json({message:"Details Updated Successfully"},{status:200});
      }else{
         return NextResponse.json({message:"Failed Update Details"},{status:200})
      }

   }
   catch(err){
      return NextResponse.json({message:"Internal Server Error"},{status:500})
   }
}