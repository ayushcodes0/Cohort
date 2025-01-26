const adminModel = require("../models/admin");

const adminMiddleware = async(req,res,next)=>{
    const username = req.headers.username;
    const password = req.headers.password;

    try {
        const admin = await adminModel.findOne({
            username: username,
            password: password
        });
        if(!admin){
            return (
                res.status(400).json({
                    msg: "Admin Not Found",
                    error: true,
                    success: false
                })
            )
        }
        next();
        
    } catch (err) {
        res.status(400).json({
            msg: "Admin Not Found",
            error: true,
            success: false
        })
    }
}

module.exports = adminMiddleware;