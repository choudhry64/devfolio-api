const express = require('express');
const router = express.Router();
const {createSkill, getSkill} = require('../controllers/skillController')
const auth = require("../middlewares/authMiddleware");

router.post("/createSkill", auth, createSkill);
router.get("/getSkill", getSkill);
module.exports = router;