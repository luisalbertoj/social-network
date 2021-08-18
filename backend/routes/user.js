const express = require("express");
const router = express.Router();
const User = require("../controllers/user");
const Auth = require("../middlewares/auth");
const ValidateUser = require("../middlewares/validateUser");

router.post("/register", User.create);
router.get("/list/:name?", Auth, ValidateUser, User.list);

module.exports = router;