import CONNECT_DATABASE from "@/app/config/connection";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export const POST =async (req)=>{
    await CONNECT_DATABASE();
    try{
        const body =await req.json();
        const isUserExist = await User.findOne({mobile:body.mobile});

        if(isUserExist){
            return NextResponse.json({message:"This Mobile No. is Already Registered"},{status:200});
        };
        if(!isUserExist){
        //  console.log(body);
        const toSave =await User(body);
        const saved = await toSave.save();
         console.log(saved); 
        
        return NextResponse.json({message:"User Registered Successfully",resp:saved},{status:201});
        };

    }catch(err){
        console.log(err);
        return NextResponse.json({message:"Internal Server Error"},{status:500});
    }
};


export const GET =async()=>{
   await CONNECT_DATABASE();

   try{
     const resp =await User.find();
    //  console.log("data response",resp);
     if(resp.length !=0){
        return NextResponse.json({message:"Successfully Fetched",resp:resp},{status:200});
     }
     if(resp == 0){
        return NextResponse.json({message:"No Data Found"},{status:200});
     }
   }
   catch(err){
       console.log(err);
       return NextResponse.json({message:"Internal Server Error"},{status:500})
   }
};