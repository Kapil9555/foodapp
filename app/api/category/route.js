import CONNECT_DATABASE from "@/app/config/connection";
import Categorie from "@/models/categorieModel";
import { NextResponse } from "next/server";

export const POST =async(req)=>{
    await CONNECT_DATABASE();
   try{
    const rec = await req.json();
    // console.log("my response",rec)
    const scheme = Categorie({...rec});
    const saved = scheme.save();
    // console.log(saved)
    if(saved){
        return NextResponse.json({message:"Successfully submited",resp:saved},{status:201});
    }
    else{
        return NextResponse.json({message:"Failed to create"},{status:403})
    }

   }catch(err){
    console.log(err)
    return NextResponse.json({message:"Internal Server Error"},{status:500})
   }
};

