const mongoose = require('mongoose');

const successSchema = new mongoose.Schema({
    eventname: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    volunteers: {
        type: Number,
        required: true
    },
    totalweight: {
        type: Number,
        required: true
    },
    totalplastic: {
        type: Number,
        required: true
    },
    totalplasticbags: {
        type: Number,
        required: true
    },
   
},{timestamps:true})

const Success = mongoose.model('Success', successSchema);
module.exports = Success;
