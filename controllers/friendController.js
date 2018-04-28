const db = require('../models');

module.exports = {

  // Get All Friends ==>> NOT TESTED YET
  allFriends: function(req, res){
    console.log("DB ALL FRIEND IS RUNNING")
    db.User.find(req.query.friends)
    .then(friend => res.json(friend))
    .catch(err => res.status(422).json(err));
  },
  // Find by Name ==> Tested, Working
  findByName: function(req, res){
    console.log("DB running Find Friend By Name")
    db.User.findOne({username: req.body.username})
      .select("-password")
      .then(friend => res.json(friend))
      .catch(err => res.status(422).json(err));
  },
  

  // Add Friend ==> Tested, Working
  create: function(req, res) {
    console.log("DB CREATE FRIEND: ", req.params.username)
    db.Friend.findOneAndUpdate({_id: req.params.id}, {username: req.body.username})
      // .select("-password")
      .then(event => res.json(event))
      .catch(err => res.status(422).json(err));
  },

  // Remove Friend by ID ==> NOT TESTED YET
  removeFriend: function(req, res) {
    db.User.findOne({ friends: req.body.friends })
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