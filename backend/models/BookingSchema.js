const mongoose=require('mongoose')
const BookingSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    test:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    booking_id:{
        type:Number,
        require:true,
        default:1
    },
    result:{
        type:String,
        require:true
    },
    
})

module.exports=mongoose.model('bookingdetails',BookingSchema)