const userModel = require("../models/user");

const userMiddleware = async(req,res,next)=>{
    const username = req.headers.username;
    const password = req.headers.password;

    try {
        const user = await userModel.findOne({
            username: username,
            password: password
        });
        if(!user){
            return (
                res.status(403).json({
                    msg: "User Not Found",
                    error: true,
                    success: false
                })
            )
        }
        next();
        
    } catch (err) {
        res.status(403).json({
            msg: "User Not Found",
            error: true,
            success: false
        })
    }
}

module.exports = userMiddleware;