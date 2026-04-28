const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

const projectSchema = new Schema(
  {
    userId: { type: objectId, ref: "users" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    skills: [{ type: objectId, ref: "skills" }],
    githubUrl: { type: String },
    liveUrl: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    collaborators: [{ type: String }],
  },
  { timestamps: true },
);

const projectModel = mongoose.model("project", projectSchema);
module.exports = projectModel;
