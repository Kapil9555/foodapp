import CONNECT_DATABASE from "@/app/config/connection";
import Shop from "@/models/shopmodel";
import { NextResponse } from "next/server";
import fsPromises from "fs/promises"

export const GET = async (req) => {
    try {
        await CONNECT_DATABASE();
        const data = await Shop.find();
        if (data.length > 0) {
            return NextResponse.json({ message: "All Data Fetched", resp: data }, { status: 200 });
        } else {
            return NextResponse.json({ message: "No Data Found" }, { status: 200 });
        }

    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    };
};


export const POST = async (req) => {
    try {
        await CONNECT_DATABASE();
        const body = await req.formData();
        const image = body.get('image')
        // console.log(image)

        if (image) {
        const buffered = await image.arrayBuffer();
        // console.log(buffered);
        const buffer = await Buffer.from(await buffered);
        // console.log("buffer",buffer);
        const fileName = Date.now()+image.name.replaceAll(" ","_")
        const toSavePath = process.cwd()+'/public/uploads/'+fileName;
        // console.log("to save path",toSavePath)
        await fsPromises.writeFile(toSavePath,buffer)
         const records = {
            shopName:body.get('shopName'),
            foodType:body.get('foodType'),
            image:fileName,
            offerPercentage:body.get('offerPercentage'),
            foodForCost:body.get('foodForCost'),
            foodForMany:body.get('foodForMany'),
            deliverIn:body.get('deliverIn'),
            mobOnShop:body.get('mobOnShop'),
            emailOnShop:body.get('emailOnShop'),
            shopAddress:body.get('shopAddress')
         }
        //  console.log("shopName",records)

        const toSave = Shop({...records});
        // console.log("records",toSave);
        const saved = await toSave.save();
       if(saved){
            return NextResponse.json({message:"Shop Created Successfully",resp:saved},{status:201})
        }else{
            return NextResponse.json({message:"Failed To Create",resp:saved},{status:200})

        }

        } else {
            return NextResponse.json({ message: "Send Image Properly" }, { status: 200 })
        }
        

    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
};