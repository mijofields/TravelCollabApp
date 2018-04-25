const db = require('../models');
const bodyParser = require('body-parser');



module.exports = {
    // CRUD
newTrip: function (req, res) {

    console.log(`sending new holiday to the db`);
    let where = req.body.destination;
    console.log(`Where: ${where}`);
    let startdate = req.body.start;
    console.log(`Start date:  ${startdate}`);
    let enddate = req.body.end;
    console.log(`End date: ${enddate}`);


            db.User.findOneAndUpdate({"_id": "5ae0af24c74ec4553c243922"},
            {$push: { 'trips': req.body}},
            { upsert: true }, function (error, comment) {
      
              if (error) throw error;
              res.redirect('/calendar');
      
      
      
            });





            
                // .findOneAndUpdate({ "_id":"5ae0af24c74ec4553c243922"}, {$push: { "trips": req.body}})
                // .then(dbModel => res.json(dbModel))
                // .catch(err => res.status(422).json(err));
        }

    }

