const UserModel = require("../models/user");
const bcrypt = require("bcrypt");

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
    username : username
  });

  res.status(201).json({
      message: "register completed",
    });
    } catch(error){
        res.status(500).json({message : error.message})
    }
};

module.exports = register;