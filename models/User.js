const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    friends: [
        {username: {type: String},
        type: Schema.Types.ObjectId,
        ref: "Friend"
    }],
    events: [{
        type: Schema.Types.ObjectId,
        title: { type: String},
        location: {type: String},
        ref: "Event"
    }]

});

//export to Controller
module.exports = mongoose.model('User', UserSchema);
