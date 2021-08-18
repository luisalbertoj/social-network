const express = require("express");
const router = express.Router();
const Post = require("../controllers/post");
const Auth = require("../middlewares/auth");
const ValidateUser = require("../middlewares/validateUser");

router.post("/register", Auth, ValidateUser, Post.create);
router.get("/list", Auth, ValidateUser, Post.list);

module.exports = router;