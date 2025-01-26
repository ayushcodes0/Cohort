const postModel = require("../models/postModel")

const getPostController = async(req, res)=>{
    
    try {
        const posts = await postModel.find();

        res.status(200).json({
            msg: "Done!",
            error: false,
            success: true,
            data: posts
        })
        
    } catch (err) {
        res.status(400).json({
            msg: err.message,
            error: true,
            success: false
        })
        
    }
}

module.exports = getPostController;