const mongoose = require("mongoose");

const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/newYearApp")
    .then(()=>{
        console.log("mongodb connected");
    })
}

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todoModel = mongoose.model("todo", todoSchema);


module.exports = {connectDB, todoModel};