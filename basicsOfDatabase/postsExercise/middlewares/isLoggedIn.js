const userModel = require("../models/userModel")

const isLoggedIn = async(req,res,next)=>{
    const {username, password} = req.body;
    const user = await userModel.findOne({
        username,
        password
    })

    if(!user){
        return (
            res.status(400).json({
                msg: "User Doesn't Exist",
                error: true,
                success: false
            })
        )
    }
    else{
        next();
    }
}

module.exports = isLoggedIn;