import CONNECT_DATABASE from "@/app/config/connection";
import Categorie from "@/models/categorieModel";
import Item from "@/models/itemModel";
import { NextResponse } from "next/server";

export const GET =async(req,{params})=>{
   await CONNECT_DATABASE();
     try{
       const catData= await Categorie.find({mid:params.mid})
       const itemData= await Item.find({mid:params.mid})
       return NextResponse.json({message:"Fetched Successfully",catData:catData,itemData:itemData},{status:200})
     }catch(err)
     {
        console.log(err)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
};