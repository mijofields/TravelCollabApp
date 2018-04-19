const router = require("express").Router();
const userRoute = require("./userRoute.js");

// User routes
router.use("/", userRoute);

module.exports = router;
