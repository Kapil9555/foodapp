import CONNECT_DATABASE from "@/app/config/connection"
import Cart from "@/models/cartModel";
import { NextResponse } from "next/server";

export const POST =async(req,{params})=>{
     await CONNECT_DATABASE();
     try{
        console.log("params here",params.id);
        const resp =await Cart.deleteOne({_id:params.id});
        console.log("response here",resp);
        if(resp){
            return NextResponse.json({message:"Item Removed Successfully"},{status:200});
        }
        if(!resp){
            return NextResponse.json({message:"Failed To Remove Item"});
        }

     }
     catch(err){
        console.log(err);
        return NextResponse.json({message:"Internal Server Error"})
     }

}