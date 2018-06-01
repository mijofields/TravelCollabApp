const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema ({
    title: String,
    body: String
});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;



//  Im not sure what this model does. I believe that a note is just a message
// that a user can send to another user.


// We will keep this model until we determine if it is useful or note.
