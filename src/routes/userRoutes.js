const express = require('express');
const router = express.Router();
const {register, login, getProfile} = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");


router.post("/register", register);
router.post("/login", login);
router.get("/getProfile", auth, getProfile);


module.exports = router;