const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Trip = new Schema({

    destination: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },

    end: {
        type: Date,
        required: true
      }
});

//export to Controller

const Trip = mongoose.model('Trip', UserSchema);
module.exports = Trip;
