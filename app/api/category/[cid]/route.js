import CONNECT_DATABASE from "@/app/config/connection";
import Categorie from "@/models/categorieModel";
import { NextResponse } from "next/server";


export const GET =async(req,{params})=>{
    await CONNECT_DATABASE();
   //  console.log("hello params",params)
     try{
        const respData= await Categorie.find({mid:params.cid});
      //   console.log("db",respData)
        return NextResponse.json({message:"Fetched Successfully",resp:respData},{status:200});
     }catch(err){
        console.log(err)
      return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
 }