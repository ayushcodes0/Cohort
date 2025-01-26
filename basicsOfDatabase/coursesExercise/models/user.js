const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    purchasedCourses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;