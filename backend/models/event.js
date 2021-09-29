const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    name: String,
    date: String,
    description: String,
    img:String
   
});

const event = mongoose.model('Event', eventSchema);

module.exports = event;