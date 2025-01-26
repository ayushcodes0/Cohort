const mongoose = require("mongoose")

const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/paytm_basic").then(()=>{
        console.log("Database Connected");
    }).catch(()=>{
        console.log("Error while connecting mongodb")
    })
}

module.exports = {connectDB} ;