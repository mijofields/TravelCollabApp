const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// NOT TESTED YET

//CREATE
router.route("/events")
    .post(eventController.create);

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


