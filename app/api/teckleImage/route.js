import CONNECT_DATABASE from "@/app/config/connection"
import { NextResponse } from "next/server";
import fsPromises from 'fs/promises';
import ImgData from "@/models/preImage";
// import fsPromises from 'fs/promises';

export const POST =async(req)=>{
   await CONNECT_DATABASE();
   try{
     const body =await req.formData();
    //  console.log("body form",body.get('image'))
    const image = body.get('image');
    if(image){
        const buffered = await image.arrayBuffer();
        const buffer = await Buffer.from(await buffered);
        // console.log(image.name);
        const fileName =Date.now()+image.name.replaceAll(" ","_");
        const toSavePath = process.cwd()+'/public/uploads/'+fileName;
        await fsPromises.writeFile(toSavePath,buffer);
        const record = {
          name:body.get('name'),
          email:body.get('email'),
          image:fileName
        }
        const toSave = ImgData(record);
        const saved = await toSave.save();
        // console.log("records",saved);
        if(saved){
          return NextResponse.json({message:"ImageData Saved Successfully"},{status:201});
        }
        else{
          return NextResponse.json({message:"Failed To Saved Image data"},{status:200})
        }
    }

   }
   catch(err){
    console.log(err);
    return NextResponse.json("Internal Server Error");
   }
};




export const GET = async(req)=>{
  await CONNECT_DATABASE();
  try{
    const resp = await ImgData.find();
    if(resp.length !=0){
      return NextResponse.json({message:"Fetched Data Successfully",resp:resp},{status:200});
    }else{
      return NextResponse.json({message:"No Data Found"},{status:200});
    }
  }catch(err){
    console.log(err);
    return NextResponse.json({message:"Internal Server Error"},{status:500})
  }
}