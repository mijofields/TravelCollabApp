<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('logger');
const bcrypt = require('bcrypt');
const path = require('path');
const routes = require('./routes/userRoutes');
const db = 'mongod://localhost/travelcollabapp'
const app = express();

app.set("PORT", process.env.PORT || 3001);

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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
})


app.listen(app.get("PORT"), () => {
  console.log(`You are listening on port ${app.get('PORT')}`);
})
=======
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server); //Binding socket
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 8080;
const routes = require("./routes/user-route/userRoute");
const db = "mongodb://localhost/users";

app.use(cookieParser()); // configure Cookie Parser
//Setting up connection to mongoose
const connection = mongoose.connection;
//Making sure Mongoose is Connected
connection
  .once("open", function() {
    console.log("Mongoose Connected!");
  })
  .on("error", function() {
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
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
// Set mongoose to leverage built in JavaScript ES6 Promises

// Set socket.io listeners.
io.on("connection", socket => {
  console.log("SOCKET CONNECTION", socket.id);
  socket.on("chat message", msg => {
    io.emit("chat message", msg); // send messages to everyone
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
>>>>>>> auth
