const projectModel = require("../models/project");
const errorMiddleware = require("../middlewares/errorMiddleware");
const projectSchema = require("../validation/projectValidation");

const createProject = async (req, res) => {
  try {
    const validation = projectSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        message: validation.error,
      });
    }
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

    const Create = await projectModel.create({
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
    next(error);
  }
};

const getProject = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const Get = await projectModel.find({
      userId: userId,
    });

    if (Get) {
      res.json({
        Get: Get,
      });
    } else {
      res.status(404).json({
        message: "Not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const projectId = req.params.projectId;

    const Update = await projectModel.findByIdAndUpdate(projectId, req.body, {
      new: true,
    });
    if (Update) {
      res.status(201).json({
        message: "Project Updated",
      });
    } else {
      res.json({
        message: "Not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const projectId = req.params.projectId;

    const Delete = await projectModel.findByIdAndDelete(projectId);

    if (Delete) {
      res.status(201).json({
        message: "Project deleted",
      });
    } else {
      res.json({
        message: "Not found any project",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { createProject, getProject, updateProject, deleteProject };
