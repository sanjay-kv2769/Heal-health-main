const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ResultSchema=new mongoose.Schema({
    booking_id: { type:Number ,  required: true },
    result:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('resultdetails',ResultSchema)