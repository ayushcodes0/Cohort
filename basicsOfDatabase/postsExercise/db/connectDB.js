const mongoose = require("mongoose");

const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/PostDB")
    .then(()=>console.log("Database Connected"));
}

module.exports = connectDB;