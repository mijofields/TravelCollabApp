const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = new Schema({    
    user_id: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Friend', FriendSchema);
