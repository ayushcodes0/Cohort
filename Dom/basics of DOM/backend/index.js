const express = require('express')
const app = express()
const cors = require("cors")
const port = 3000

app.use(cors());
app.use(express.json());

app.get('/interest', (req,res)=>{
    const principle = req.query.principle;
    const rate = req.query.rate;
    const time = req.query.time;

    const interest = (Number(principle)*Number(rate)*Number(time))/100;
    const total = Number(principle) + Number(interest);

    res.send({
        total : total,
        interest: interest
    })
})

app.listen(port, () => {
    console.log(`App is running`)
})