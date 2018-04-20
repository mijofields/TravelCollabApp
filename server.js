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
