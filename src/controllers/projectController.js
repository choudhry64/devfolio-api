const projectModel = require("../models/project");

const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      skills,
      githubUrl,
      liveUrl,
      startDate,
      endDate,
      collaborators,
    } = req.body;

    const userId = req.user.userId;

    const newProject = await projectModel.create({
      userId: userId,
      title: title,
      description: description,
      skills: skills,
      githubUrl: githubUrl,
      liveUrl: liveUrl,
      startDate: startDate,
      endDate: endDate,
      collaborators: collaborators,
    });
    res.status(201).json({
      message: "project created",
      project: newProject,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getProject = async (req, res) => {
  try {
    const userId = req.user.userId;

    const project = await projectModel.find({
      userId: userId,
    });

    if (project) {
      res.json({
        project: project,
      });
    } else {
      res.status(404).json({
        message: "Not found",
      });
    }
  } catch (error) {
    res.status(403).json({
      message: error.message,
    });
  }
};

module.exports = { createProject, getProject };
