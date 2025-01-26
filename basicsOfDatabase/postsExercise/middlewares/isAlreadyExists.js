const userModel = require("../models/userModel");

const isAlreadyExists = async(req,res,next)=>{
    const {username, password} = req.body;
    const user = await userModel.findOne({
        username,
        password
    })

    if(user){
        return (
            res.status(400).json({
                msg: "User Already Exists",
                error: true,
                success: false
            })
        )
    }
    else{
        next();
    }

}

module.exports = isAlreadyExists;