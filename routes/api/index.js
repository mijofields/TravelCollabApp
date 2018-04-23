const router = require("express").Router();
const userRoute = require("./userRoute");
const friendsRoute = require("./friendsRoute");

// User routes
router.use("/user", userRoute);
//Friends routes
router.use("/friends", friendsRoute);


module.exports = router;
