const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EventSchema = new Schema({

    destination: {
        type: Schema.Types.ObjectId,
        type: String,
        required: true,
        ref: 'User'
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

module.exports = mongoose.model('Event', EventSchema);
