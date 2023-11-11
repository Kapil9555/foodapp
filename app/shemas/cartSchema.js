import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    cid:{
        type:String,
        required:true
    },
    foodType:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    isAvailable:{
        type:Boolean,
        required:true
    },
    isPopular:{
        type:Boolean,
        required:true
    },
    mid:{
        type:String,
        required:true
    },
    mrp:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    ratings:{
        type:Number,
        required:true
    },
    reviews:{
        type:Number,
        required:true
    },
    srp:{
        type:Number,
        required:true
    },
    uid:{
        type:String,
        required:true
    }


},{timestamps:true});

export default cartSchema;