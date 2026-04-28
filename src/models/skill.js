const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillSchema = new Schema(
  {
    name: {type : String, required : true},
    category: {type : String, enum :["technical", "soft"]}
  },
  { timestamps: true },
);

const skillModel = mongoose.model('skill', skillSchema);
module.exports = skillModel;
