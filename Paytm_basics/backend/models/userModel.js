const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String, 
        required: true,
        trim: true
    },
    lastName: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String, 
        required: true, 
        minLength: 6
    },
    amount: {
        type: Number
    }
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;