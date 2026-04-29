const express = require('express');
const router = express.Router();
const {createProject, getProject} = require("../controllers/projectController")
const auth = require("../middlewares/authMiddleware");

router.post("/createProject", auth, createProject);
router.get("/getProject", auth, getProject);


module.exports = router;