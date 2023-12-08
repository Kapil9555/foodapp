import CONNECT_DATABASE from "@/app/config/connection";
import Cart from "@/models/cartModel";
import { NextResponse } from "next/server";

export const POST = async (req)=>{
   await CONNECT_DATABASE();
   try{
      const body =await req.json();
        // console.log("body data here",body)
        const {_id,...other} = body;
        // console.log('Other',other);
      const toSave = await Cart(other);
        //  console.log("to save here",toSave);
      const saved = await toSave.save();
      // console.log("saved here",saved)
      if(saved){
        return NextResponse.json({message:"Item Added Successfully",resp:saved},{status:200});
      }
      if(!saved){
        return NextResponse.json({message:"Failed to Add Data"},{status:403})
      }
   }catch(err){
    console.log(err);
    return NextResponse.json({message:"Internal Servel Error"},{status:500});
   }
};



