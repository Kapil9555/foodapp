import Shop from "@/models/shopmodel";
import CONNECT_DATABASE from "@/app/config/connection";
const { NextResponse } = require("next/server");

export const PATCH =async(req,{params})=>{
     await CONNECT_DATABASE();
    try{
        const body = await req.json()
        // console.log("req here",body)
       const resp = await Shop.findOneAndUpdate({_id:params.id},{isShopOpen:body.isAvailable},{new:true})
       //console.log("find shop",resp)
       if(resp != null){
        return NextResponse.json({message:"Updated Successfully",resp:resp},{status:200})
       }
       if(resp == null){
        return NextResponse.json({message:"Failed To Update",resp:resp},{status:200})
       }
    }
    catch(err){
        console.log(err)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }

}

export const GET = async(req,{params})=>{
    await CONNECT_DATABASE();
    try{
      const respData = await Shop.findOne({_id:params.id});
      if(respData !=null){
        return NextResponse.json({message:"Fetched Successfully",resp:respData},{status:200})
      }
      if(respData == null){
        return NextResponse.json({message:"Failed To Fetch Data"},{status:200})
      }
    }
    catch(err){
        console.log(err.message);
        return NextResponse.json({message:"Internal Server Error"});
    }
}