const express = require("express");
const AdminRegisterRouter = express.Router();
const bcrypt = require("bcryptjs");
const adminregisterDB = require("../models/AdminRegisterSchema");
const loginDB = require("../models/LoginSchema");

AdminRegisterRouter.post("/", async (req, res) => {
  try {
    const oldUser = await loginDB.findOne({ username: req.body.username });
    if (oldUser) {
      return res
        .status(400)
        .json({ success: false, error: true, message: "Admin already exists" });
    }
    // const { firstName, lastName, email, password, role } = req.body;

    const oldphone = await adminregisterDB.findOne({ phone: req.body.phone });
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
      role: 1,
    };
    const result = await loginDB(log).save();
    let reg = {
      login_id: result._id,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      city: req.body.city,
      admin: req.body.admin,
    };
    const result2 = await adminregisterDB(reg).save();
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

module.exports = AdminRegisterRouter;
