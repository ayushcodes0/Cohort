const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    imageLink: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String},
    likes: {type: Number}
})

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;