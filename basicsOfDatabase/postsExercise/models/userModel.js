const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {type: String},
    username: {type: String, required: true},
    password: {type: String, required: true},
    createdPosts: {type: mongoose.Schema.ObjectId, ref: "Posts"}
})

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;