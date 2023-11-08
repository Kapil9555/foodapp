import { MONGO_URL } from "@/constant";
import mongoose from "mongoose";

let connected;
 const CONNECT_DATABASE = async ()=>{
   if(!connected){
     connected = await mongoose.connect(MONGO_URL);
   };  
   console.log("Database connected successfully");

   return connected;
};

export default CONNECT_DATABASE;