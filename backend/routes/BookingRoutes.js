const express = require("express");
const BookingRouter = express.Router();
const booking = require("../models/BookingSchema");
const multer = require("multer");
const ResultSchema = require("../models/ResultSchema");
const ResultDetailsSchema=require("../models/ResultDetailsSchema")
// const CheckAuth = require("../middlewares/CheckAuth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/upload/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//Add
BookingRouter.post("/add-patient", async (req, res) => {
  try {
    const prevBookingId = await booking.findOne().sort({
      _id: -1,
    });
    // booking_id=prevBookinId++
    // if(!prevBookingId){
    // prevBookingId=1
    // }
    // else{
    console.log("prev", prevBookingId);
    const incBookinId =
      prevBookingId !== null ? prevBookingId.booking_id + 1 : 1;
    console.log("inc", incBookinId);

    // }
    const Data = {
      name: req.body.name,
      age: req.body.age,
      test: req.body.test,
      date: req.body.date,
      time: req.body.time,
      booking_id: incBookinId,
    };

    const result = await booking(Data).save();
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
});

//View
BookingRouter.get("/view-patient", (req, res) => {
  booking
    .find()
    .then((data) => {
      res.status(201).json({
        success: true,
        error: false,
        data: data,
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

//single view
BookingRouter.get("/view-patient/:id", (req, res) => {
  booking
    .findOne({ _id: req.params.id })
    .then((data) => {
      res.status(201).json({
        success: true,
        error: false,
        data: data,
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

//Update
BookingRouter.post("/update-patient/:id", (req, res) => {
  booking
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      data.name = req.body.name;
      data.age = req.body.age;
      data.test = req.body.test;
      data.date = req.body.date;
      data.time = req.body.time;

      data
        .save()
        .then((data) => {
          res.status(201).json({
            success: true,
            error: false,
            data: data,
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
});

//Result Update
BookingRouter.post(
  "/update-patient/result/:id",
  upload.single("result"),
  async (req, res) => {
    try {
      // console.log(req.file);
      const id = req.params.id;
      const bookingData = await booking.findOne({ _id: id });
      const booking_id = bookingData.booking_id;
      console.log(booking_id);
      const result = {
        result: req.file ? req.file.filename : null,
      };
      booking
        .updateOne(
          {
            _id: req.params.id,
          },
          { $set: result }
        )
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      const result2 = {
        result: req.file ? req.file.filename : null,
        booking_id: booking_id,
      };
      const finalResult = ResultSchema(result2).save();
      if (finalResult) {
        res.status(201).json({
          success: true,
          error: false,
          data: finalResult,
          message: " Result uploaded succesfully",
        });
      } else {
        res.status(400).json({
          success: false,
          error: true,
          message: "Result uploading failed",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        error: true,
        message: "Internal server error",
        ErrorMessage: error.message,
      });
    }
  }
);


// //Result Update Details
BookingRouter.post(
  "/update-patient/result/details/:id",
  // upload.single("result"),
  async (req, res) => {
    try {
      console.log(req.body);
      // console.log(req.file);
      const id = req.params.id;
      const bookingData = await booking.findOne({ _id: id });
      const booking_id = bookingData.booking_id;
      console.log("ID",booking_id);
      
      const result = {
        // result: req.file ? req.file.filename : null,
      booking_id: booking_id,
      a : req.body.a,
      b : req.body.b,
      c : req.body.c,
      d : req.body.d
      };
      // booking
      //   .updateOne(
      //     {
      //       _id: req.params.id,
      //     },
          // { $set: result }
        // )
        // .then((data) => {
        //     console.log(data);
        // })
        // .catch((err) => {
        //   console.log(err);
        // });
      // const result2 = {
      //   booking_id: booking_id,
      // };
      const finalResult = ResultDetailsSchema(result).save();
      if (finalResult) {
        res.status(201).json({
          success: true,
          error: false,
          data: finalResult,
          message: " Details uploaded succesfully",
        });
      } else {
        res.status(400).json({
          success: false,
          error: true,
          message: "Details uploading failed",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        error: true,
        message: "Internal server error",
        ErrorMessage: error.message,
      });
    }
  }
);


//Update Result Details
// BookingRouter.post("/update-patient/result/details/:id", (req, res) => {
//   ResultDetailsSchema
//     .findOne({
//       _id: req.params.id,
//     })
//     .then((data) => {
//       data.a = req.body.a;
//       data.b = req.body.b;
//       data.c = req.body.c;
//       data.d = req.body.d;

//       data
//         .save()
//         .then((data) => {
//           res.status(201).json({
//             success: true,
//             error: false,
//             data: data,
//           });
//         })
//         .catch((err) =>
//           res.status(400).json({
//             success: true,
//             error: false,
//             message: err,
//           })
//         );
//     });
// });

//View Result
BookingRouter.get("/view-result/:id",(req,res)=>{
  ResultSchema.findOne({booking_id:req.params.id})
  .then((data)=>{
    res.status(200).json({
      success: true,
      error: false,
      data: data,
    })
  })
  .catch((err)=>
  res.status(400).json({
    success: true,
    error: false,
    message: err,
  })
  )
})

//View Result Details
BookingRouter.get("/view-result/details/:id",(req,res)=>{
  ResultDetailsSchema.findOne({booking_id:req.params.id})
  .then((data)=>{
    res.status(200).json({
      success: true,
      error: false,
      data: data,
    })
  })
  .catch((err)=>
  res.status(400).json({
    success: true,
    error: false,
    message: err,
  })
  )
})

//Delete
BookingRouter.delete("/delete-patient/:id", (req, res) => {
  booking
    .deleteOne({
      _id: req.params.id,
    })
    .then(() => {
      res.status(200).json({
        success: true,
        error: false,
        message: "Deleted successfully",
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

module.exports = BookingRouter;
