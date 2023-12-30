import CONNECT_DATABASE from "@/app/config/connection";
import Categorie from "@/models/categorieModel";
import fsPromises from 'fs/promises'

import { NextResponse } from "next/server";

export const POST =async(req)=>{
    await CONNECT_DATABASE();
   try{
    const body = await req.formData();
    const image = body.get('image');
    // console.log('imgae: ',image)
    // console.log('catname:',catName)
    if(image){
       const buffered = await image.arrayBuffer();
    //    console.log(buffered);
      const buffer = await Buffer.from(await buffered)
    //   console.log("buffer",image.name);
      const fileName = Date.now()+image.name.replaceAll(" ","_");
      const toSavePath = process.cwd()+'/public/uploads/'+fileName
    //   console.log("path",toSavePath)
    //   console.log("name",fileName)
      await fsPromises.writeFile(toSavePath,buffer);
      const records = {name:body.get('catName'),image:fileName,mid:body.get('mid')}
    //   console.log(records)
      const toSave = Categorie({...records});
    //   console.log("toSave",toSave);
      const saved = await toSave.save();
    //   console.log("saved",saved)
    if(saved){
        return NextResponse.json({message:"Category Created Successfully"},{status:201})
    }else{
        return NextResponse.json({message:"Failed To Create Category"},{status:200})
    }

      
    }else{
        return NextResponse.json({message:"Send Image Properly"},{status:200})
    }

  

   }catch(err){
    console.log(err)
    return NextResponse.json({message:"Internal Server Error"},{status:500})
   }
};

