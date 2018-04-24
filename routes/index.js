const path = require("path");
const router = require("express").Router();
const userRoute = require("./user-route/userRoute.js");

// User routes
router.use("/", userRoute);

// If no routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;