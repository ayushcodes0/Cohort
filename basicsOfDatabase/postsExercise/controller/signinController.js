const jwt = require("jsonwebtoken");

const signinController = async(req,res)=>{
    const {username} = req.body;

    try {
        const token  = jwt.sign({username: username}, process.env.JWT_SECRET);
        res.status(200).json({
            msg: "User Logged In Successfully",
            error: false,
            success: true,
            data: token
        })
        
    } catch (err) {
        res.status(400).json({
            msg: err.message,
            error: true,
            success: false
        })
    }
}

module.exports = signinController;