const mongoose=require('mongoose')
const Labschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    patient_id:{
        type:Number,
        required:true,
        default:100
    },
    test:{
        type:String,
        required:true
    },
    blood_group:{
        type:String,
        required:true
    },
    doctor_name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('patientdetails',Labschema)