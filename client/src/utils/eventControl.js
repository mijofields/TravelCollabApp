// import express from 'express';
// const router = express.Router();
// import mongojs from "mongojs";
// import mongoose from "mongoose";
// import bodyParser from 'body-parser';
// const databaseUrl = "mongodb://localhost:27017/Events_db";
// const collections = ["user"];
//
// const Events = require("../models/Event.js");
// mongoose.connect(
//   process.env.MONGODB_URI || databaseUrl,{});
//
//
// const db = mongojs(databaseUrl, collections);
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });
//
//
// router.post('/newevent', function (req, res) {
//
//     console.log(`sending new holiday to the db`);
//
//     let where = req.params.destination;
//     console.log(`Where: ${req.params.destination}`);
//     let startdate = req.params.startdate;
//     console.log(`Start date:  ${req.params.startdate}`);
//     let enddate = req.params.enddate;
//     console.log(`End date: ${req.params.enddate}`);
//
//     Events.findOneAndUpdate({user_id: 1},
//       {$push: { "trips": req.body}},
//       { upsert: true }, function (error, comment) {
//
//         if (error) throw error;
//         res.redirect('/calendar');
//
//
//
//       });
//     };
//   });
