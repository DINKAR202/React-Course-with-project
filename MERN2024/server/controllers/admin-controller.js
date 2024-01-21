const User = require("../models/user-model");
const Contact = require('../models/contact-model');

// Get Users logics

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log("admin data", users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// User Data delete logic

const deleteUserById = async(req, res) => {
  
};

// Get Contacts logic

const getAllContacts = async (req, res) => {
    try {
      const contacts = await Contact.find();
      console.log("admin data", contacts);
      if (!contacts || contacts.length === 0) {
        return res.status(404).json({ message: "No users found" });
      }
      return res.status(200).json(contacts);
    } catch (error) {
      next(error);
    }
  };



module.exports = {getAllUsers, getAllContacts};
