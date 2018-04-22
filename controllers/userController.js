const db = require("../models");
const bcrypt = require("bcryptjs"); // encryption
const io = require("socket.io");

// Defining methods for the booksController
module.exports = {
  // CRUD
  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.find(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },

  findByName: function(req, res){
    console.log("running Find Friend")
    db.User.findOne({username: req.params.username})
      .select("-password")
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },

  allFriends: function(req, res){
    console.log("ALL FRIEND IS RUNNING")
    db.User.find({})
    .then(user => res.json(user))
    .catch(err => res.status(422).json(err));
  },

  addFriend: function(req, res) {
    db.User.create(req.body)
      .select("-password")
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },

  // Get User Information
  getUserInfo: function(req, res) {
    db.User.findOne({ _id: req.cookies.id })
      .select("-password")
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.User.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(user => user.remove())
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },

  signup: function(req, res) {
    console.log("body", req.body);
    const { email, name, password, username } = req.body;

    const salt = bcrypt.genSaltSync(10);
    console.log(password);
    const hash = bcrypt.hashSync(password, salt); // encrypted password

    db.User.create({ email, name, password: hash, username })
      .then(user => {
        res.cookie("id", user._id);
        res.json({ msg: "User created", _id: user._id });
      })
      .catch(err => res.status(500).json("Error UserController: ", err));
    console.log(email, name, password, username);
  },

  signin: function(req, res) {
    const { username, password } = req.body;

    db.User.findOne({ username })
      .then(user => {
        const isEqual = bcrypt.compareSync(password, user.password); // true
        if (isEqual) {
          res.cookie("id", user._id);
          res.json({ status: "Loggedin" });
        } else {
          res.status(401).json({ status: "Fail to authenticate you!" });
        }
      })
      .catch(err => res.status(500).json({ error: "Signin Internal error " }));
  },

  signout: function(req, res) {
    const username = req.body.username;

    db.User.findOne({ username })
      .then(user => {
        req.session.destroy();
      })
      .catch(err => res.status(500).json({ error: "Signout Internal error" }));
  }
};
