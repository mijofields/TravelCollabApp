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

// _headLineId:{ }

//export to Controller
var Friend = mongoose.model('Friend', FriendSchema);

module.exports = Friend;