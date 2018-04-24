const router = require("express").Router();
var bodyParser = require("body-parser");
const stripe = require('../../constants/stripe');


function stripeCharge(req, res) {

    console.log(req.body); //logs object sent back by submitting payment form in the console
    var token = req.body.source;

    var charge = stripe.charges.create({
        amount: 100, //will have to grab this amount from the database in the future
        currency: "usd",
        source: token
    }, function (err, charge) {
        if (err) {
            console.log(err);
        }
    }
    );
    console.log("payment successful");
}

router.route('/charge').post(stripeCharge);


module.exports = router;
