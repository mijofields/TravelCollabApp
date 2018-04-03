const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const PORT = process.env.PORT || 8080;
const app = express();
const routes = require('./routes/user-route/userInfo');
const db = 'mongodb://localhost/users';

//Setting up connection to mongoose
const connection = mongoose.connection;
//Making sure Mongoose is Connected
connection.once("open", function(){
  console.log("Mongoose Connected!");
}).on("error", function(){
  console.log("Error loading Mongoose");
  //Throw Error if any
});
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(db);

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
// Set mongoose to leverage built in JavaScript ES6 Promises

app.listen(PORT, function(){
    console.log("Server is Listening on Port: ", PORT);
})