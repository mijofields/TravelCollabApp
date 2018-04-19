const router = require("express").Router();
const userController = require("../../controllers/userController");
const auth = require('../../auth/jwt-auth');
const path = require("path");
// Requiring jwt for testing. Remove when ready to deploy
const jwt = require('jsonwebtoken');


router.route("/signup").post(userController.signup);


// This route is for testing only. Remove when ready to deploy
router.route('/protected').get(auth.ensureToken, (req, res) => {
  jwt.verify(req.token, 'my_secret_key', (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        text: 'This is a protected route',
        data: data
      })
    }
  })
})
router
  .route("/signin")
  .get(userController.findById)
  .post(userController.signin);

router.route("/user").get(auth.ensureToken, userController.getUserInfo);

router.route("/signout").get(userController.signout);

router
  .route("/user/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
