const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = new Schema({    
    _id: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
       
    },{
    username: String
    }
]
});

module.exports = mongoose.model('Friend', FriendSchema);
