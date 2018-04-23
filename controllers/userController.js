const db = require("../models");
const bcrypt = require("bcryptjs"); // encryption
const io = require("socket.io");

// Defining methods for the userController
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

  // Get User Information
  getUserInfo: function(req, res) {
    const username = res.body;
    db.User.findOne({ username })
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
    console.log("SIGN UP BODY:  ", req.body);
    const { email, name, password, username } = req.body;

    const salt = bcrypt.genSaltSync(10);
    console.log(password);
    const hash = bcrypt.hashSync(password, salt); // encrypted password

    db.User.create({ email, name, password: hash, username })
    .then(user => res.json(user))
    .catch(err => res.status(500).json("Error UserController: ", err));  
  },

  signin: function (req, res) {
    const { username, password } = req.body;

    db.User
        .findOne({ username })
        .then((user) => {
            const isEqual = bcrypt.compareSync(password, user.password); // true
            if(isEqual){
                res.json({status: "Loggedin"})
            } else{
                res.status(401).json({ status: "Fail to authenticate you!"});
            }
        })
        .catch((err) => res.status(500).json({ error: " Internal error " }));    
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
