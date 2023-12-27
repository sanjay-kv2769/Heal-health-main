const express=require('express')
const testRouter=express.Router()
const test=require('../models/TestSchema') 


//Add
testRouter.post('/add-test',(req,res)=>{
    const Data=new test({
        
        test:req.body.test,
        amount:req.body.amount,
        category:req.body.category,
        
    })
    Data.save()
    .then((data) => {
      
      res.status(201).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((err) =>
    
    res.status(400).json({
        success:false,
        error:true,
        Error_message:err,
}));

})

//View
testRouter.get('/view-test',(req,res)=>{
    test.find()
     .then((data) => {
       res.status(201).json({
         success: true,
         error: false,
         data: data,
       });
     })
     .catch((err) =>res.status(400).json({
         success:false,
         error:true,
         Error_message:err,
 }));
 })

   //single view
testRouter.get('/view-test/:test',(req,res)=>{
  const tests=req.params.test
  console.log(tests);
  test.find({category:tests})
   .then((data) => {
     res.status(201).json({
       success: true,
       error: false,
       data: data,
     });
   })
   .catch((err) =>res.status(400).json({
       success:false,
       error:true,
       Error_message:err,
}));
})


 //Update
testRouter.post('/update-test/:id',(req,res)=>{
  test.findOne({
      _id: req.params.id,
    })
    .then((data)=>{
    
    data.test = req.body.test;
    data.amount=req.body.amount;
    data.category=req.body.category;
    
    
  data.save()
  .then((data) => {
    res.status(201).json({
      success: true,
      error: false,
      data: data,
    });
  })
  .catch((err) =>res.status(400).json({
      success:false,
      error:true,
      Error_message:err,
}));
})
})

//Delete
testRouter.delete('/delete-test/:id', (req, res) => {
  test.deleteOne({
      _id: req.params.id,
    })
      .then(() => {
        res.status(200).json({
          success: true,
          error: false,
          message: 'Deleted successfully',
        });
      })
      .catch((err) =>res.status(400).json({
          success:false,
          error:true,
          Error_message:err,
  }));
  });




module.exports = testRouter;