const router = require('express').Router();
const UserController = require('../controllers/UserController');



router.get('/', function (req, res) {
    res.redirect('/index');
  });
  
  
    //bring all the burgers into the index page
  
    router.get('/index', function(req, res) {
      // findAll returns all entries for a table when used with no options
      burgerdb.burgers.findAll({}).then(function(data) {
        // access to the burgers as an argument inside of the callback function
        var hbsObject = { burgers: data };
      //render via handlebars
      res.render('index', hbsObject);
    });
  });
  


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

router.route("/calendar")
    .get(UserController.calendar);

module.exports = router;
