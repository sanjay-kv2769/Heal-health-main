const express = require("express");
const StaffRegisterRouter = express.Router();
const bcrypt = require("bcryptjs");
const staffregisterDB = require("../models/StaffRegisterSchema");
const loginDB = require("../models/LoginSchema");


//Add staff
StaffRegisterRouter.post("/", async (req, res) => {
  try {
    const oldUser = await loginDB.findOne({ username: req.body.username });
    if (oldUser) {
      return res
        .status(400)
        .json({ success: false, error: true, message: "User already exists" });
    }
    // const { firstName, lastName, email, password, role } = req.body;

    const oldphone = await staffregisterDB.findOne({ phone: req.body.phone });
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    if (oldphone) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Phone number already exists",
      });
    }
    let log = {
      username: req.body.username,
      password: hashedPassword,
      role: 3,
    };
    const result = await loginDB(log).save();
    let reg = {
      login_id: result._id,
      name: req.body.name,
      gender: req.body.gender,
      phone: req.body.phone,
      experience: req.body.experience,
      email: req.body.email,
      city: req.body.city,
    };
    const result2 = await staffregisterDB(reg).save();
    if (result2) {
      res.status(201).json({
        success: true,
        error: false,
        message: "Registration completed",
        details: result2,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: true, message: "Something went wrong" });
    console.log(error);
  }
});

//Update Staff Profile
StaffRegisterRouter.post("/update/staff-profile/:id",  (req, res) => {
  console.log(
    'hiiiii'
  );
  try {


    const oldUserdata=loginDB.findOne({_id:req.params.id})
    const oldUsername=oldUserdata.username
    loginDB.updateOne({_id:req.params.id},{$set:{username:req.body.username?req.body.username:oldUsername}})
    staffregisterDB.findOne({
      login_id: req.params.id,
    })
             
    .then((data)=>{
    // console.log(req.body);

      console.log(data);
      data.name = req.body.name?req.body.name:data.name;
      data.gender=req.body.gender?req.body.gender:data.gender;
      data.phone=req.body.phone?req.body.phone:data.phone;
      data.experience=req.body.experience?req.body.experience:data.experience;
      data.email=req.body.email?req.body.email:data.email;
      // data.username=req.body.username

  
      data.save()
      .then((data) => {
        res.status(200).json({
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
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: "Internal server error",
      ErrorMessage: error.message,
    });
  }
  
  
})

module.exports = StaffRegisterRouter;
