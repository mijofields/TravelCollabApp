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
