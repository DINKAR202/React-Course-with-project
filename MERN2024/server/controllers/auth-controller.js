const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

//Home logic 

const home = async (req, res) => {
    try {
        res
        .status(200)
        .send(
            "Welcome to Home page Using Controllers This is priti here"
        );
    } catch (error) {
        console.log(error)
    }
}

// Register logic

const register = async (req, res) => {
    try {
        console.log(req.body);
        const {username, email, phone, password} = req.body;
        const userExit = await User.findOne({email});
        if(userExit) {
            return res.status(400).json({msg: "email already exists"});
        }

        //Hash the password
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username, email, phone, password });

        res.status(200).json({msg: userCreated });
    } catch (error) {
        res.status(500).json("internal server error")        
    }
}

const login = async (req, res) => {
    res
        .status(200)
        .send("This is login page using Controllers");
}


module.exports = {home, register, login};