const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    friends: [{
        type: Schema.Types.ObjectId,
        name: String,
        username: String,
        email: String,
        ref: 'User'
    }],
    saveFriends: {
        type: Boolean,
        default:false
    }
});

module.exports = mongoose.model('Friend', FriendSchema);


// You will have to obtain more information on the users of the application
// in order to deliever the product that you want.

// Figure out the fields that you will have to add to the form to in order to
// really create a (package) for a user of for a group of traverlers.
