import CONNECT_DATABASE from "@/app/config/connection";
import Shop from "@/models/shopmodel";
import { NextResponse } from "next/server";


export const GET = async (req) => {
    try {
        await CONNECT_DATABASE();
        const data =await Shop.find();
        return NextResponse.json({message:"All Data Fetched",resp:data},{status:200});

    } catch (err) {
        console.log(err);
    };
};


export const POST = async (req) => {
    try {
        await CONNECT_DATABASE();
        const rec =await req.json();
        // console.log(rec);
        const scheme = Shop({...rec});
        const saved = await scheme.save();
        // console.log(saved);
        return NextResponse.json({message:"Shop Created Successfully",resp:saved},{status:201})

    } catch (err) {
        console.log(err)
        return NextResponse.json({message:"Internal server error"},{status:500})
    }
};