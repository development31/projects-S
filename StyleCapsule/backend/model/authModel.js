const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    otp: {
        type: String        
    },
    otpExpiration: {
        type: String
    }
    
})

module.exports = mongoose.model('User', userSchema);
