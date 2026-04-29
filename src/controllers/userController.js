const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role, username } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
      role: role,
      username: username,
    });

    res.status(201).json({
      message: "register completed",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({
      email: email,
    });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (user && passwordMatch) {
      const token = jwt.sign(
        {
          userId: user._id,
        },
        process.env.JWT_SECRET,
      );

      res.json({
        token,
      });
    } else {
      res.status(403).json({
        message: "incorrect cred",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await UserModel.findById(userId).select("-password");

    if (user){
      res.json({
        user
      })
    }else {
      res.status(404).json({
        message : "User not found"
      })
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = { register, login, getProfile };
