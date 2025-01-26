const express = require("express");
const adminMiddleware = require("../middlewares/admin");
const adminModel = require("../models/admin");
const courseModel = require("../models/course");

const router = express.Router();

router.post("/signup", async (req,res)=>{
    const {username,password} = req.body;
    const admin = await adminModel.findOne({
        username: username,
        password: password
    })
    if(admin){
        return (
            res.status(403).json({
                msg: "Admin Already Exists",
                error: true,
                success: false
            })
        )
    }
    const createdAdmin = await adminModel.create({
        username: username,
        password: password
    })

    res.status(200).json({
        msg: "User Created Successfully",
        error: false,
        success: true,
        data: createdAdmin
    })

})

router.post("/courses", adminMiddleware, async(req, res)=>{

    const {title, description, imageLink, price} = req.body;

    const course = await courseModel.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        msg: "Course Created Successfully",
        courseId: course._id
    })
})

router.get("/courses", adminMiddleware, async(req, res)=>{

    
})

module.exports = router;