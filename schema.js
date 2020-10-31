const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    number: String,
    password:String
});

module.exports = mongoose.model('flight', userSchema);