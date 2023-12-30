import CONNECT_DATABASE from "@/app/config/connection";
import Categorie from "@/models/categorieModel";
import { NextResponse } from "next/server";


export const GET =async(req,{params})=>{
    await CONNECT_DATABASE();
   //  console.log("hello params",params)
     try{
        const respData= await Categorie.find({mid:params.cid});
      //   console.log("db",respData)
      if(respData.length > 0){
        return NextResponse.json({message:"Fetched Successfully",resp:respData},{status:200});
      }
      else{
        return NextResponse.json({message:"Failed To Fetch"},{status:200});
      }
     }catch(err){
        console.log(err)
      return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
 }

 export const PATCH =async(req,{params})=>{
     await CONNECT_DATABASE();
     try{
       const body = await req.json();
      //  console.log(body)
       const resp = await Categorie.findOneAndUpdate({_id:params.cid},{name:body.name,isAvailable:body.isAvailable},{new:true});
      //  console.log("category response",resp)
        if(resp){
          return NextResponse.json({message:"Details Edited Successfully"})
        }else{
          return NextResponse.json({message:"Failed To Edited Details"})
        }
      }
     catch(err){
      return NextResponse.json({message:"Internal Server Error"},{status:500})
     }
 }