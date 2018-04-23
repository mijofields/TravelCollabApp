const router = require("express").Router();
const friendController = require("../../controllers/friendController")

router.route("/:username")
  .post(friendController.findByName);

router.route("/allfriends")
  .get(friendController.allFriends);

router.route("/createFriend")
  .post(friendController.createFriend)
  .put(friendController.createFriend);

router.route("/deleteFriend")
  .delete(friendController.removeFriend)

module.exports = router;