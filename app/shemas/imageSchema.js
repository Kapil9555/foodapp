import mongoose from "mongoose"

const imageSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    image:{type:String,required:true,trim:true}
})

export default imageSchema;