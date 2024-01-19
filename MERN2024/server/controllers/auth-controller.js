const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

//Home logic

const home = async (req, res) => {
  try {
    res
      .status(200)
      .send("Welcome to Home page Using Controllers This is DINKAR here");
  } catch (error) {
    console.log(error);
  }
};

// Register logic

const register = async (req, res) => {
  try {
    // const data = req.body;
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ message: "email already exists" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// User login logic

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExit = await User.findOne({ email });
    console.log(userExit);

    if (!userExit) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // const user = await bcrypt.compare(password, userExit.password);
    const user = await userExit.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExit.generateToken(),
        userId: userExit._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
  // res.status(201).send("This is login page using Controllers");
};

// To send user data - User logic

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
    // res.status(200).json({msg: "Hi user"});
  } catch (error) {
    console.log(`Error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
