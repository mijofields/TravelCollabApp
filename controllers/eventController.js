const db = require('../models');

// NOT TESTED YET !!

// SCHEMA
// events: [{
//     friends: [{
//         username: {
//             type: String
//         }
//     }],
//     title: {
//         type: String
//     },
//     location: {
//         type: String
//     },
//     type: Schema.Types.ObjectId,
//     ref: "Event",
// }]

module.exports = {

  // GET ALL EVENTS
//   findAll: function(req, res){
//     console.log("DB All Events is Running: ", req.query.events)
//     db.User.find(req.query.events)
//     .then(event => res.json(event))
//     .catch(err => res.status(422).json(err));
//   },
//   // Find by Title
//   findByTitle: function(req, res){
//     console.log("DB running Find Event By Title: ", req.body.events)
//     db.User.find({events: req.body.events.title}) //Might Not Be Right
//       .then(event => res.json(event))
//       .catch(err => res.status(422).json(err));
//   },

  // Create Event
  create: function(req, res) {
    // console.log("DB CREATE Event: ", req.body)

    const { title, location } = req.body;
    // people: {
    //     name: String, 
    //     friends: [{firstName: String, lastName: String}]
    //    }
    // var people = { firstname: 'Harry', lastname: 'Potter' };
    // PersonModel.update(
    //     { _id: person._id }, 
    //     { $push: { friends: friend } },
    //     done
    // );

    console.log("Event DB: ", req.params.id)
    console.log("Event DB: ", req.body)
    // create: function(req, res) {
        // console.log("DB CREATE FRIEND: ", req.body)
        db.User.findOneAndUpdate({username: req.body.username},  {$push: {events: req.body }} )
          .then(event => res.send(event))
          .catch(err => res.status(422).json(err));
      }



  // Remove Event 
//    delete: function(req, res) {
//       console.log("Delete Event from DB: ", req.body.events)
//     db.User.findAll({ events: req.body.events })
//         .then(event => event.remove())
//         .then(event => res.json(event))
//         .catch(err => res.status(422).json(err));
//     },
// // Add Friends
//     addFriend: function(req, res){
//         console.log("Add Friend on Event DB: ", req.params.friends);
//         console.log("DB inserted to What Event: ", req.body.events);
        
//         db.User.findOneAndUpdate({ friends: req.params.friends }, { events: req.body.events })
//         .then(event => res.json(event))
//         .catch(err => res.status(422).json(err));
//     }

}