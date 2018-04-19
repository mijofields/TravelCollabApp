const path = require("path");
const router = require("express").Router();
const routes = require("./user-route/index.js");

// API Routes
router.use("/api", routes);

// If no routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
