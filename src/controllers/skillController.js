const skillModel = require("../models/skill");

const createSkill = async (req, res) => {
  try {
    const { name, category } = req.body;

    const Create = await skillModel.create({
      name: name,
      category: category,
    });

    if(Create){
        res.json({
            message : "Skill created"
        })
    }else {
        res.json({
            message : "Not found"
        })
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getSkill = async (req, res) => {
    try{
    const Get = await skillModel.find()

    if(Get){
        res.json({
            Get : Get
        })
    }else {
        res.json({
            message : "Not found"
        })
    }
    }catch(error){
        res.status(404).json({
            message : error.message
        })
    }
}

module.exports = {createSkill, getSkill};