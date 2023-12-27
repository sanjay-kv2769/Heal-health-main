const express = require("express");
const ProfileRouter = express.Router();
const patient = require("../models/Labschema");
const loginSchema = require("../models/LoginSchema");
const CheckAuth = require("../middlewares/CheckAuth");
const mongoose = require("mongoose");

//single view
ProfileRouter.get("/user-profile", CheckAuth, (req, res) => {
  console.log(req.userData.userId);
  loginSchema
    .aggregate([
      {
        $lookup: {
          from: "register_tbs",
          localField: "_id",
          foreignField: "login_id",
          as: "results",
        },
      },
      {
        $unwind: "$results",
      },
      {
        $match: { _id: new mongoose.Types.ObjectId(req.userData.userId) },
      },
      {
        $group: {
          _id: "$_id",
          name: { $first: "$results.name" },
          address: { $first: "$results.address" },
          phone: { $first: "$results.phone" },
          username: { $first: "$username" },
          password: { $first: "$password" },
        },
      },
    ])

    .then((data) => {
      res.status(201).json({
        success: true,
        error: false,
        data: data[0],
      });
    })
    .catch((err) =>
      res.status(400).json({
        success: true,
        error: false,
        message: err,
      })
    );
});

module.exports = ProfileRouter;
