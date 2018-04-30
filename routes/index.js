const path = require("path");
const router = require("express").Router();
const userRoute = require("./user-route/userRoute.js");
const stripeRoute = require("./stripe-route/stripeRoute.js");
// const eventRoute = require("./event-route/eventRoute");

// User routes
router.use("/", userRoute);

// Stripe routes
router.use("/", stripeRoute);

// Events routes
// router.use( eventRoute);

// If no routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
