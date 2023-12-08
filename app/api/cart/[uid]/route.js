import CONNECT_DATABASE from "@/app/config/connection";
import Cart from "@/models/cartModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
   await CONNECT_DATABASE();
   // console.log("params with id", params.uid)

   try {
      const resp = await Cart.find({ uid: params.uid });
      //  console.log("response here",resp);

      if (resp.length > 0) {
         return NextResponse.json({ message: "Data Fetched Successfully", resp: resp }, { status: 200 });
      }
      if (resp.length == 0) {
         return NextResponse.json({ message: "No Data Found"}, { status: 200 });
      }

     
   } catch (err) {
      console.log(err);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
   }
};


export const DELETE = async (req, { params }) => {
   await CONNECT_DATABASE();
   try {

      const resp = await Cart.deleteMany({ uid: params.uid });
      // console.log("delete cart",resp)
      if (resp) {
         return NextResponse.json({ message: "Cart Cleared Successfully" }, { status: 200 })
      }
      if (!resp) {
         return NextResponse.json({ message: "Failed To Clear Cart" })
      }
   }
   catch (err) {
      console.log(err);
      return NextResponse.json({ message: "Internal Server Error" });
   }
} 