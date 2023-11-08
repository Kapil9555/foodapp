import CONNECT_DATABASE from "@/app/config/connection";
import Item from "@/models/itemModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    await CONNECT_DATABASE();
    try {
        const reqData = await req.json();
        const scheme =  Item({ ...reqData });
        // console.log("reqData", reqData);
        const saved = await scheme.save();
        // console.log("model data", saved);
        if (saved) {
            return NextResponse.json({ message: "Item Added Successfully",resp:saved}, { status: 201 });
        }
        else {
            return NextResponse.json({ message: "Failed to Add Data"}, { status: 403 });
        }
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    };
};