const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Event = new Schema({

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

const Events = mongoose.model('Event', UserSchema);
module.exports = Events;
