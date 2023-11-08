import CONNECT_DATABASE from "@/app/config/connection";
import Categorie from "@/models/categorieModel";
import Item from "@/models/itemModel";
import { NextResponse } from "next/server";

export const DELETE =async(req,{params})=>{


   await CONNECT_DATABASE();

   try{
    console.log("params for change",params);
      const respCat = await Categorie.deleteOne({_id:params.cid});
      const respItem = await Item.deleteMany({cid:params.cid});

      const getItem = await Item.find({cid:params.cid});
      const getCate = await Categorie.find({_id:params.cid});

      console.log("delted item",getItem);
      console.log("delted category",getCate);

       if(getItem.length <1 && getCate.length <1){
           return NextResponse.json({message:"Category Deleted Successfull"},{status:201});
        }
     else{
        return NextResponse.json({message:"Failed To Delete Category"},{status:403});
     }

   }catch(err){
       console.log(err)
       return NextResponse.json({message:"Internal Server Error"},{status:500})
   }
};