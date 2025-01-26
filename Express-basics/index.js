
const express = require("express");
const app = express();


const users = [{
    name: 'Shivam',
    kidney: [{
        healthy: true
    },{
        healthy: false
    }]
}]

app.use(express.json());

app.get("/", function(req,res){
    const shivamKidneys = users[0].kidney;
    const noOfKidneys = shivamKidneys.length;
    let noOfHealtyKidneys = 0;
    for(let i = 0; i<noOfKidneys; i++){
        if(shivamKidneys[i].healthy === true ){
            noOfHealtyKidneys++;
        }
    }
    const noOfUnhealthyKidneys = noOfKidneys-noOfHealtyKidneys;
    res.json({
        totalKidneys: noOfKidneys,
        healthyKidneys: noOfHealtyKidneys,
        unhealthyKidneys: noOfUnhealthyKidneys
    })
})

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done!"
    })
})

app.put("/", function(req,res){
    for(let i = 0; i<users[0].kidney.length; i++){
        users[0].kidney[i].healthy = true;
    }

    res.json({
        msg: "Updated"
    })
})

app.delete("/", function(req,res){
    let newKidneys = [];
    for(let i = 0; i<users[0].kidney.length; i++){
        if(users[0].kidney[i].healthy){
            newKidneys.push({
                isHealthy : true
            })
        }
    }
    users[0].kidney = newKidneys;
    res.json({
        msg: "deleted unhealthy kidneys"
    })
})

app.listen(3000);



