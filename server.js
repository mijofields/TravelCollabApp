const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const bcrypt = require('bcrypt');
const path = require('path');
const routes = require('./client/src/utils/eventControl.js');

const app = express();


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

app.use('/', routes);




app.listen(app.get("PORT"), () => {
  console.log(`You are listening on port ${app.get('PORT')}`);
})
