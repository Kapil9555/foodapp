import CONNECT_DATABASE from "@/app/config/connection"
import Address from "@/models/addressModel";
import { NextResponse } from "next/server";

export const GET =async(req)=>{
  await CONNECT_DATABASE();
  try{
     const respData = await Address.find({});
     if(respData.length !=0 ){
        return NextResponse.json({message:"Fetched Successfully",resp:respData},{status:200});
     }
     if(respData == 0){
        return NextResponse.json({message:'No Data Found'},{status:200})
     }
  }
  catch(err){
      console.log(err);
       return NextResponse.json({message:"Internal Server Error"},{status:500})
  }
}