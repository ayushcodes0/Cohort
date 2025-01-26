const express = require('express');
const { connectDB } = require('./db');
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(port, () => {
    connectDB();
    console.log(`App is running`)
})  