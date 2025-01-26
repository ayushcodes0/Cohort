const userModel = require("../models/userModel");

const signupController = async (req,res)=>{
    const {username, password, name} = req.body;
    try {
        const user = await userModel.create({
            name,
            username,
            password
        })
        res.status(200).json({
            msg: "User Created Successfully",
            error: false,
            success: true,
            data: user
        })
    } catch (err) {
        res.status(400).json({
            msg: err.message || err,
            error: true,
            success: false
        })
    }

}

module.exports = signupController;