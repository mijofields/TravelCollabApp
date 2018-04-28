const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema ({
    user_id: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true }
}, 
{ _id: false });


const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
