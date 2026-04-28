const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["student", "developer", "employer"],
      required: true,
    },
    bio: { type: String },
    college: { type: String },
    currentCompany: { type: String },
    socialLinks: {
      linkedin: { type: String },
      github: { type: String },
      twitter: { type: String },
    },
  },
  { timestamps: true },
);

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
