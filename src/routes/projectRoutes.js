const express = require('express');
const router = express.Router();
const {createProject, getProject, updateProject, deleteProject} = require("../controllers/projectController")
const auth = require("../middlewares/authMiddleware");

router.post("/createProject", auth, createProject);
router.get("/getProject", auth, getProject);
router.put("/updateProject/:projectId", auth,  updateProject);
router.delete("/deleteProject/:projectId", auth, deleteProject);


module.exports = router;