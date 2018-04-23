const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const bcrypt = require('bcrypt');
const path = require('path');
// const routes = require('./client/src/utils/eventControl.js');

const app = express();

const databaseUrl = "mongodb://localhost:27017/Events_db";
const collections = ["user"];

const Events = require("../models/Event.js");
mongoose.connect(
  process.env.MONGODB_URI || databaseUrl,{});


const db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.set("PORT", process.env.PORT || 5000);

// Setting up connection to mongoose.
const connection = mongoose.connection;

// Making sure Mongoose is connected.
connection.once('open', () => {
  console.log('Mongoose Connected.')
}).on('error', () => {
  console.log('Error loading Mongoose')
  // Throw error if any.
})

// Conncect to MongoDB
mongoose.Promise = Promise;
mongoose.connect(db);

// Use morgan logger for logging requests
app.use(logger('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin', 'X-Requested-With, Content-Type, Accept');
  next();
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', routes);

router.post('/newevent', function (req, res) {

  console.log(`sending new holiday to the db`);

  let where = req.params.destination;
  console.log(`Where: ${req.params.destination}`);
  let startdate = req.params.startdate;
  console.log(`Start date:  ${req.params.startdate}`);
  let enddate = req.params.enddate;
  console.log(`End date: ${req.params.enddate}`);

  Events.findOneAndUpdate({user_id: 1},
    {$push: { "trips": req.body}},
    { upsert: true }, function (error, comment) {

      if (error) throw error;
      res.redirect('/calendar');



    });
  };
});


app.listen(app.get("PORT"), () => {
  console.log(`You are listening on port ${app.get('PORT')}`);
})
