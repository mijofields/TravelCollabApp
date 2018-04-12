const router = require('express').Router();
const UserController = require('../controllers/UserController');


router.route('/')
    .get(UserController.findAll)
    .post(UserController.create);

router.route('/:id')
    .get(UserController.findById)
    .put(UserController.update)
    .delete(UserController.remove);

router.route("/signup")
    .post(UserController.signup);

router.route("/signin")
    .post(UserController.signin);

router.route("/signout")
    .get(UserController.signout);

module.exports = router;
