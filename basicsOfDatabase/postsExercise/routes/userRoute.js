const express = require("express");
const isAlreadyExists = require("../middlewares/isAlreadyExists");
const signupController = require("../controller/signupController");
const isLoggedIn = require("../middlewares/isLoggedIn");
const signinController = require("../controller/signinController");
const isTokenAvailable = require("../middlewares/isTokenAvailable");
const createPostController = require("../controller/createPostController");
const getPostController = require("../controller/getPostController");
const router = express.Router();

router.post("/user/signup", isAlreadyExists, signupController);
router.post("/user/signin", isLoggedIn, signinController);

router.post("/post/create", isTokenAvailable, createPostController);
router.get("/post/get", isTokenAvailable, getPostController);


module.exports = router;