const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    titel: String,
    description: String,
    imageLink: String,
    price: Number
})

const courseModel = mongoose.model("course", courseSchema);

module.exports = courseModel;