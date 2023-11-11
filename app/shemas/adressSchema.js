import mongoose from "mongoose";

const addressSchema =new mongoose.Schema({
    receiverName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    landMark:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    pinCode:{
       type:String,
       required:true
    },
    uid:{
       type:String,
       required:true
    },
    defaultAddress:{
        type:String,
        required:false,
        default:false
    }
},{timestamps:true});


export default addressSchema;
