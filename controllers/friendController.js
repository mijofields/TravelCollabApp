const db = require('../models');

module.exports = {
    // Find All Friends
//   findAll: function(req, res) {
//       console.log("DB Find All Friends running");
//         db.Friends.find(req.query)
//         .select("-password")
//         .then(friend => res.json(friend))
//         .catch(err => res.status(422).json(err));
//   },
  // GET ALL FRIENDS
  allFriends: function(req, res){
    console.log("DB ALL FRIEND IS RUNNING")
    db.Friends.find(req.query)
    .then(friend => res.json(friend))
    .catch(err => res.status(422).json(err));
  },
  // Find by Name
  findByName: function(req, res){
    console.log("DB running Find Friend By Name")
    db.User.findOne({username: req.params.username})
      .select("-password")
      .then(friend => res.json(friend))
      .catch(err => res.status(422).json(err));
  },

//   findById: function(req, res) {
//     db.Friends.find(req.params.id)
//       .then(friend => res.json(friend))
//       .catch(err => res.status(422).json(err));
//   },
  // Add Friend
  createFriend: function(req, res) {
    console.log("DB ADD FRIEND IS RUNNING")
    db.Friends.create({username: req.params.username})
      .select("-password")
      .then(friend => res.json(friend))
      .catch(err => res.status(422).json(err));
  },

  // Remove Friend by ID
  removeFriend: function(req, res) {
    db.Friends.findById({ _id: req.params.id })
        .then(friend => friend.remove())
        .then(friend => res.json(friend))
        .catch(err => res.status(422).json(err));
    },

//   create: function(req, res) {
//     db.User.create(req.body)
//       .then(user => res.json(user))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(user => res.json(user))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.User.findById({ _id: req.params.id })
//       .then(user => user.remove())
//       .then(user => res.json(user))
//       .catch(err => res.status(422).json(err));
//   },
  
    
}

// insertOne