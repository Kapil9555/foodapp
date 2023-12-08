import mongoose from "mongoose";

const billingSchema = new mongoose.Schema({
    subTotal:{
        type:Number,
        required:true
    },
    tax:{
        type:Number,
        required:true
    },
    delChrg:{
        type:Number,
        required:true
    },
    dis:{
        type:Number,
        required:true
    },
    toPay:{
        type:Number,
        required:true
    },
    uid:{
        type:String,
        required:true
    },
    paymentMethod:{
        type:String,
        required:true
    },
    items:[],

    delAddress:{},
   
    orderStatus:{
        type:String,
        required:false,
        default:'Placed'
    }
},{timestamps:true});

export default billingSchema;