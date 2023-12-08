const { NextResponse } = require("next/server");

export const GET =()=>{
   
   try{
      const orderStatus =['Placed','Determined','UnDetermined','Cancel By Admin','Cancel By Merchant','Cancel','Picked','Pending','Cooking','Preparing','Delivered','On The Way','Rejected By Admin','Rejected By Merchant','Accepted']
       
        return NextResponse.json({message:'Successfull',resp:orderStatus},{status:200})
   
    }
   catch(err){
    console.log(err);
    return NextResponse.json({message:"Internal Server Error"});
   }
}