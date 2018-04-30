const router = require("express").Router();
const eventController = require("../event-route/eventRoute.js");

// NOT TESTED YET

//CREATE

// http://localhost:3000/users/34/books/8989.
//  We can extract this information as shown below, with the userId and bookId path parameters:

// app.get('/users/:userId/books/:bookId', function (req, res) {
    // Access userId via: req.params.userId
    // Access bookId via: req.params.bookId
    // res.send(req.params);
//   })

// /friends/:username

router.route("/events")
    .get(eventController.newTrip);

// router.route("/:id/events")
//     .put(eventController.create);

//List All Events
// router.route("/events")
//     .get(eventController.findAll)

// //Add Friends on an Event ==> Not Sure it's legal
// router.route("/events/:friends")
//     .get(eventController.addFriend)
//     .post(eventController.addFriend);

// //Delete Events
// router.route("/events/delete")
//     .get(eventController.delete)
//     .put(eventController.delete)
//     .post(eventController.delete);

module.exports = router;


