const express = require("express");
const RegisterRouter = express.Router();
const bcrypt = require("bcryptjs");
const registerDB = require("../models/RegisterSchema");
const loginDB = require("../models/LoginSchema");
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

RegisterRouter.post("/",upload.single('image'), async (req, res) => {
  try {
    const oldUser = await loginDB.findOne({ username: req.body.username });
    if (oldUser) {
      return res
        .status(400)
        .json({ success: false, error: true, message: "User already exists" });
    }
    // const { firstName, lastName, email, password, role } = req.body;

    const oldphone = await registerDB.findOne({ phone: req.body.phone });
    console.log(req.body.password);
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
//     const salt = await bcrypt.gensaltsync(10);
//     const password = await req.body.password;
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
      role: 2,
    };
    const result = await loginDB(log).save();
    let reg = {
      login_id: result._id,
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      image:req.file?req.file.filename:null
    };
    const result2 = await registerDB(reg).save();
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

module.exports = RegisterRouter;
