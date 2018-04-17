const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server); //Binding socket
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const bcrypt = require('bcryptjs');
const PORT = process.env.PORT || 8080;
const routes = require('./routes/user-route/userRoute');
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
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
// Set mongoose to leverage built in JavaScript ES6 Promises

// Set socket.io listeners.
io.on('connection', (socket) => {
  console.log("SOCKET CONNECTION", socket.id)
  // console.log('a user connected');
  // On conversation entry, join broadcast channel
  socket.on('testing', (conversation) => {
    io.emit('testing', "It works");
      // socket.join(conversation);
     //  console.log('joined ' + conversation);
  });
  socket.on('leave conversation', (conversation) => {
      socket.leave(conversation);
      console.log('left ' + conversation);
  });
  socket.on('message', (conversation) => {
      io.sockets.in(conversation).emit('refresh messages', conversation);
  });
  socket.on('disconnect', () => {
      console.log('user disconnected');
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
