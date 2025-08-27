const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventname: {
        type: String,
        required: true
    },
    organizername:{
        type: String,
        required: true
    },
    venue:{
        type: String,
        required: true
    },
    date:{
        type: Date,
    },
    time:{
        type: String,
        required: true
    },
    maxParticipants:{
        type: Number,
    },
    description:{
        type: String,
    }
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
