const express = require("express");
const userMiddleware = require("../middlewares/user");
const userModel = require("../models/user");
const courseModel = require("../models/course");

const router = express.Router();

router.post("/signup", async (req,res)=>{
    const {username,password} = req.body;
    const user = await userModel.findOne({
        username: username,
        password: password
    })
    if(user){
        return (
            res.status(403).json({
                msg: "User Already Exists",
                error: true,
                success: false
            })
        )
    }
    const createdUser = await userModel.create({
        username,
        password
    })
    const savedUser = await createdUser.save();

    res.status(200).json({
        msg: "User Created Successfully",
        error: false,
        success: true,
        data: savedUser
    })

})
router.get("/courses", async (req,res)=>{
    const courses = await courseModel.find();
    res.json({
        data: courses
    })
})
router.post("/course/:courseId", userMiddleware, async (req,res)=>{

    const courseId = req.params.courseId;

    const username = req.headers.username;
    await userModel.updateOne({
        username: username
    },{
       "$push": {
        purchasedCourses: courseId
       }
    })
    res.json({
        msg: "Purchased Completed"
    })

})
router.get("/purchasedCourse", userMiddleware, async (req,res)=>{

    const username = req.headers.username;
    const user = await userModel.findOne({
        username: username
    })

    console.log(user.purchasedCourses);
    const courses = await courseModel.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        msg: "Done!",
        data: courses
    })

})

module.exports = router;