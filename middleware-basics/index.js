const express = require("express");
const app = express();

const authorization = (req, res, next)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    if(username !== "Ayush" || password !== "12345"){
        res.json({
            msg: "user doesn't exist",
            error: true,
            success: false
        })
        return;
    }
    next();
}

app.get("/health-checkup",authorization, async (req,res)=>{ 
    res.json({
        msg: "User Loggdin Successfully",
        error: false,
        success: true
    })
})

app.listen(3000);