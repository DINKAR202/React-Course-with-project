const User = require("../models/user-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      return res.status(404).josn({ message: "No users found" });
    }
    return res.status(200).josn(users);
  } catch (error) {
    next(error);
  }
};


module.exports = getAllUsers;