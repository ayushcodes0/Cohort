const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require("./routes/userRoute");
const connectDB = require('./db/connectDB');
require("dotenv").config();

const app = express()

const port = 3000
connectDB();

app.use(bodyParser.json());
app.use("/api", userRoute);


app.listen(port, () => {
    console.log(`App is running`)
})
