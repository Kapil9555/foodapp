import CONNECT_DATABASE from "@/app/config/connection"
import Address from "@/models/addressModel";
import Billing from "@/models/billingModel";
import { NextResponse } from "next/server";

export const POST =async(req)=>{
  await CONNECT_DATABASE();
  
  try{
    const body = await req.json();
    const {addressId , ...others}=body
    const delAddress = await Address.find({_id:addressId})
    const newBody = await {...others,delAddress:delAddress[0]}

    // console.log("main body",body)

    // console.log("newBody",newBody)

    // console.log("otherData",others)

    const toSave =await Billing(newBody);

    // console.log("toSave Data",toSave)

    const saved = await toSave.save();

    // console.log("saved",saved);

    if(saved){
        return NextResponse.json({message:"Order Placed Successfully",resp:saved},{status:200})
    }
    if(!saved){
        return NextResponse.json({message:"Failed To Placed Successfully",resp:saved})
    }

  }
  catch(err){
    console.log(err);
    return NextResponse.json({message:"Internal Server Error"},{status:500})
  }
}




