const skillModel = require("../models/skill");
const errorMiddleware = require("../middlewares/errorMiddleware");
const skillSchema = require("../validation/skillValidation");

const createSkill = async (req, res, next) => {
  try {
    const validation = skillSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        message: validation.error,
      });
    }
    const { name, category } = req.body;

    const Create = await skillModel.create({
      name: name,
      category: category,
    });

    if (Create) {
      res.json({
        message: "Skill created",
      });
    } else {
      res.json({
        message: "Not found",
      });
    }
  } catch (error) {
    next(erro);
  }
};

const getSkill = async (req, res, next) => {
  try {
    const Get = await skillModel.find();

    if (Get) {
      res.json({
        Get: Get,
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

module.exports = { createSkill, getSkill };
