const jwt = require("jsonwebtoken");
const isTokenAvailable = async(req,res,next)=>{

    try {
        const tokenData = req.headers.authorization;
        const tokenArr = tokenData.split(" ");
        const token = tokenArr[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded.username){
            req.username = decoded.username;
            next();
        }
        else{
            return (
                res.status(403).json({
                    msg: "You Are Not Authenticated",
                    error: true,
                    success: false
                })
            )
        }
    } catch (err) {
        res.status(403).json({
            msg: "You Are Not Authenticated",
            error: true,
            success: false
        })
    }
}

module.exports = isTokenAvailable;