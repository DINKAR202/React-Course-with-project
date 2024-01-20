const User = require("../models/user-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).josn(users);
  } catch (error) {
    next(error);
  }
};
