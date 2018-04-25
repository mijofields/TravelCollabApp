const db = require('../models');
const bcrypt = require("bcryptjs"); // encryption
const jwt = require('jsonwebtoken');

// Defining methods for the User Controller
module.exports = {
    // CRUD
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .find(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getUserInfo: function(req, res) {
      console.log("Get this route")
    },
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    signup: function (req, res) {
        console.log("body", req.body);
        const { email, name, password, username } = req.body;

        const salt = bcrypt.genSaltSync(10);
        console.log(password);
        const hash = bcrypt.hashSync(password, salt); // encrypted password

        db.User
            .create({ email, name, password: hash, username })
            .then(dbModel => res.json({ msg: "User created", _id: dbModel._id }))
            .catch(err => res.status(422).json("Error UserController 49: ", err));
            console.log(email, name, password, username);
     },


    signin: function (req, res) {
      console.log(req.body)
        const { username, password } = req.body;
        db.User
            .findOne({ username })
            .then((user) => {
                const isEqual = bcrypt.compareSync(password, user.password); // true
                if(isEqual){
                  // Send the token.
                  const currUser = {id: user._id, email: user.email, username: user.username };
                  const token = jwt.sign({ user: currUser }, 'my_secret_key') // Put 'my_secret_key' in an enviornment variable


                    res.json({
                      status: "Loggedin",
                      token: token
                    })

                } else{
                    res.status(401).json({ status: "Fail to authenticate you!"});
                }
            })
            .catch((err) => res.status(500).json({ error: " Internal error " }));


    },
    signout: function(req, res) {
      console.log('This is the signout route')
    }
};
