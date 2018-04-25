//dependencies
const router = require("express").Router();
const bodyParser = require("body-parser");
const path = require("path");
const eventController = require("../../controllers/eventController");


//add event route - POST method
router.route("/event")
.post(eventController.newTrip);



module.exports = router;