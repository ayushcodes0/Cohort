const express = require('express')
const jwt = require("jsonwebtoken")

const mongoose  = require("mongoose");
mongoose.connect("mongodb://localhost:27017/users_data");

const userSchema = mongoose.Schema({
    username: {type: String , required: true},
    password: {type: String , required: true},
    firstname: {type: String , required: true},
});

const userModel = mongoose.model("user", userSchema );

const user = new userModel({
    username: "ayushsingh@gmail.com",
    password: "12345",
    firstname: "Ayush Singh"
})

user.save();

const app = express()
const port = 3000

app.use(express.json());

function userExists(username, password, allUser){
    for(let i = 0; i<allUser.length; i++){
        if(allUser[i].username == username && allUser[i].password == password){
            return true;
        }
    }
    return false; 
}

app.post("/signup", async (req,res)=>{
    const {username, password, firstname} = req.body;
    const allUser = await userModel.find();
    if(userExists(username, password,allUser)){
        return res.status(403).json({
            message: "User Already Exists",
            success: false,
            error: true
        })
    }
    const user = await new userModel({
        username,
        password,
        firstname
    })
    user.save();
    const token = jwt.sign({username: username}, "shhhhh");
    return res.json({
        token,
        
    })
})

app.post('/login', async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const allUser = await userModel.find();
    if(!userExists(username,password, allUser)){
        return res.status(403).json({
            message: "User Does Not Exist",
            success: false,
            error: true
        })
    }
    const token = jwt.sign({username: username}, "shhhhh");
    return res.json({
        token,
        success: true,
        error: false
    })

})

app.get("/users", async(req,res)=>{
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token,"shhhhh")
        const username = decoded.username;
        const user = await userModel.find();
        res.json({
            users: user.filter(function(value){
                if(value.username == username){
                    return false;
                }
                return true;
            }),
            success: true,
            error: false
        })
        
    } catch (err) {
        res.json({
            message: "Not Authorized",
            success: false,
            error: true
        })
    }
})

app.listen(port, () => {
    console.log(`App is running`)
})