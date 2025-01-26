const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin.js")
const userRouter = require("./routes/user.js")

mongoose.connect("mongodb://localhost:27017/coursesDb");

const app = express()
const port = 3000

app.use(bodyParser.json());

app.use("/admin", adminRouter)
app.use("/user" , userRouter)

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})