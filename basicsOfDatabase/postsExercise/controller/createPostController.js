const postModel = require("../models/postModel");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createPostController = async(req,res)=>{
    const {imageLink, title, description, likes} = req.body;


    try {

        const post = await postModel.create({
            imageLink,
            title,
            description,
            likes
        })
        console.log(req.username) // sending username from the isTokenMiddleware to this next function.

        const updatedUser = await userModel.updateOne({
            username: req.username
        },{
            "$push": {
                createdPosts : post._id
            }
        })

        res.status(200).json({
            msg: "Post Created Successfully",
            success: true,
            error: false,
            data: updatedUser
        })


        
    } catch (err) {
        res.status(400).json({
            msg: err.message,
            error: true,
            success: false
        })
        
    }
}

module.exports = createPostController;