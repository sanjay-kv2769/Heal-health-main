const mongoose=require('mongoose')
const Testschema=new mongoose.Schema({
    test:{
        type:String,
        require:true
    },
   
    amount:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
   
})

module.exports=mongoose.model('testdetails',Testschema)