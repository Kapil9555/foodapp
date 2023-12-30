import CONNECT_DATABASE from "@/app/config/connection";
import Categorie from "@/models/categorieModel";
import Item from "@/models/itemModel";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {


  await CONNECT_DATABASE();
  console.log("params",params.cid)

  try {
    //  console.log("params for change",params);
    const isCatExist = await Categorie.findOne({ _id: params.cid });
    // console.log("iscatexist",isCatExist)
    if (isCatExist) {
      const catItem = await Item.find({ cid: isCatExist._id })
        // console.log("cat items",catItem)
      if (catItem.length > 0) {
        // console.log("cat items")
        const deletedItem = await Item.deleteMany({ cid: isCatExist._id });
        // console.log("Items Deleted",deletedItem)
        if (deletedItem) {
          const deleteCat = await Categorie.deleteOne({ _id: isCatExist._id });
          if (deleteCat) {
            return NextResponse.json({ message: "Category Deleted Successfully" }, { status: 200 })
          } else {
            return NextResponse.json({ message: "Failed To Delete Category" }, { status: 200 })
          }
        }else{
           console.log("Failed To Delete Items")
        }
      }
      if (catItem.length == 0) {
        // console.log("length 0")
        const deleteCat = await Categorie.deleteOne({ _id: isCatExist._id })
        // console.log("category",deleteCat)
        if (deleteCat) {
          return NextResponse.json({ message: "Category Deleted Successfully" }, { status: 200 })
        } else{
          return NextResponse.json({ message: "Failed To Delete Category" }, { status: 200 })
        }
      }
    }
    if (!isCatExist) {
      return NextResponse.json({ message: "Failed To Delete Category" }, { status: 200 })
    }

  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
};

export const PATCH = async (req, { params }) => {
  await CONNECT_DATABASE();
  try {
    const body = await req.json();
    const resp = await Categorie.findOneAndUpdate({ _id: params.cid }, { isAvailable: body.isAvailable }, { new: true });
    //   const resp = await Categorie.findOne({_id:params.cid});
    // console.log("response line 41", resp);
    if (resp) {
      return NextResponse.json({ message: "Edited Successfully" })
    } else {
      return NextResponse.json({ message: "Failed To Edit" })
    }
  }
  catch (err) {
    console.log(err);
    NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}