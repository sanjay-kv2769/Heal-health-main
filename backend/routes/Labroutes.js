const express=require('express')
const labRouter=express.Router()
const patient=require('../models/Labschema') 
const CheckAuth = require('../middlewares/CheckAuth')
const registerDB = require("../models/RegisterSchema");
const staffregisterDB = require("../models/StaffRegisterSchema");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/upload/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//Add
labRouter.post('/add-patient',upload.single('image'),async(req,res)=>{
  console.log(req.body.name);
  try {
    const prevBookingId = await patient.findOne().sort({
      _id: -1,
    });
    console.log('prev',prevBookingId);
      const incBookinId = prevBookingId!==null?prevBookingId.patient_id+ 1:100;
      console.log("inc",incBookinId);
          
      const Data={
        name:req.body.name,
        test:req.body.test,
        blood_group:req.body.blood_group,
        doctor_name:req.body.doctor_name,
        image:req.file?req.file.filename:null,
        patient_id:incBookinId,
    }
    const result = await patient(Data).save();
    if (result) {
      res.status(201).json({
        success: true,
        error: false,
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        error: true,
        message: err,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      Message: "Internal Server Error",
      Errormessage: error.message,
    });
  }  


})

//View
labRouter.get('/view-patient',CheckAuth,(req,res)=>{
   patient.find()
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
labRouter.get('/view-patient/:id',(req,res)=>{
  patient.findOne({_id:req.params.id})
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
labRouter.post('/update-patient/:id',(req,res)=>{
  patient.findOne({
      _id: req.params.id,
    })
    .then((data)=>{
    data.name = req.body.name;
    data.patient_id = req.body.patient_id;
    data.test = req.body.test;
    data.blood_group=req.body.blood_group;
    data.doctor_name = req.body.doctor_name;
    
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
labRouter.delete('/delete-patient/:id', (req, res) => {
  patient.deleteOne({
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

// Register tb registered patients
labRouter.get('/view-reg-patient',CheckAuth,(req,res)=>{
  registerDB.find()
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

// Register tb registered patients single view
labRouter.get('/view-reg-patient/:id',CheckAuth,(req,res)=>{
  registerDB.findOne({
    _id:req.params.id
  })
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

// Staff Register tb registered staffs
labRouter.get('/view-reg-staff',CheckAuth,(req,res)=>{
  staffregisterDB.find()
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

// Staff Register tb registered staffs
labRouter.get('/view-reg-staff/:id',CheckAuth,(req,res)=>{
  staffregisterDB.findOne({
    _id:req.params.id
  })
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




//Update registered patients
labRouter.post('/update-reg-patient/:id',(req,res)=>{
  registerDB.findOne({
        _id: req.params.id,
      })
      .then((data)=>{
      data.name = req.body.name;
      data.address = req.body.address;
      data.phone = req.body.phone;
      // data.username=req.body.username;
      // data.password = req.body.password;
      
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
        error:True,
        Error_message:err,
}));
})
})

//Update registered staffs
labRouter.post('/update-reg-staff/:id',(req,res)=>{
  staffregisterDB.findOne({
        _id: req.params.id,
      })
      .then((data)=>{
      data.name = req.body.name;
      data.gender = req.body.gender;
      data.phone = req.body.phone;
      data.experience=req.body.experience;
      data.email = req.body.email;
      data.city = req.body.city;
      
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




  //Delete registered patients
labRouter.delete('/delete-reg-patient/:id', (req, res) => {
  registerDB.deleteOne({
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

 //Delete registered staff
 labRouter.delete('/delete-reg-staff/:id', (req, res) => {
  staffregisterDB.deleteOne({
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

module.exports = labRouter;