const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
<<<<<<< HEAD
        required: true
=======
        required: true,
        ref: 'Member'
>>>>>>> auth
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
<<<<<<< HEAD
    },

    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
      }
});

//export to Controller
module.exports = mongoose.model('User', UserSchema);
=======
    }
});

//export to Controller
module.exports = mongoose.model('User', UserSchema);
>>>>>>> auth
