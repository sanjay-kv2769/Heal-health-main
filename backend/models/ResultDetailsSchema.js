const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ResultDetailsSchema=new mongoose.Schema({
    booking_id: { 
        type:Number,  
        required: true },
    a:{
        type:String,
        required:true
    },
    b:{
        type:String,
        required:true
    },
    c:{
        type:String,
        required:true
    },
    d:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('resultdetails_tb',ResultDetailsSchema)