const db = require('../models');
const bcrypt = require("bcryptjs"); // encryption
const io = require('socket.io');

// Defining methods for the booksController
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
            .catch(err => res.status(422).json("Error UserController: ", err));
            console.log(email, name, password, username);
    },

    signin: function (req, res) {
        const { username, password } = req.body;

        db.User
            .findOne({ username })
            .then((user) => {
                const isEqual = bcrypt.compareSync(password, user.password); // true
                if(isEqual){
                    res.json({status: "Loggedin"})
                } else{
                    res.status(401).json({ status: "Fail to authenticate you!"});
                }
            })
            .catch((err) => res.status(500).json({ error: "Signin Internal error " }));   
    },

    signout: function (req, res){
        const username = req.body.username;

        db.User
        .findOne({ username })
        .then((user) => {
            req.session.destroy();
        })
        .catch((err) => res.status(500).json({ error: "Signout Internal error"}));        
    }
};