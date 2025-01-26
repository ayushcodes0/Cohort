const express = require('express')
const zod = require("zod")
const app = express()
const port = 3000

const schema = zod.array(zod.number);
app.use(express.json());

app.post('/health-checkup', (req,res)=>{
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney);
    if(!response.success){
        res.status(411).json({
            message: "Input is invalid"
        })
    }
    else{
        
        res.send({
            response
        })
    }
})

app.listen(port, () => {
    console.log(`App is running`)
}) 