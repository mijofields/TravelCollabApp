const router = require("express").Router();
const userController = require("../../controllers/userController");
const friendController = require("../../controllers/friendController")
const auth = require('../../auth/jwt-auth');
const path = require("path");
// Requiring jwt for testing. Remove when ready to deploy
const jwt = require('jsonwebtoken');;

//Sign Up
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
//Sign In
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

//Find Friend By Name
router.route("/friends/:username")
  .post(friendController.findByName);

//Create Friend ==> Unsuccesful yet
  router.route("/friends/:username/createFriend")
  .put(friendController.createFriend);

  //Get All Friends ==> Not tested yet
router.route("/friends/allfriends")
  .get(friendController.allFriends);

router.route("/friends/createFriend")
  .get(friendController.createFriend)
  .post(friendController.createFriend)
  .put(friendController.createFriend);
//Remove Friend
router.route("/friends/deleteFriend")
  .delete(friendController.removeFriend)

module.exports = router;
