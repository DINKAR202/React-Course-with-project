import User from "../model/userModel.js";

export const fetch = async(req, res) => {
    try {
        
        const users = await User.find();
        if(users.length === 0){
            return res.status(400).json({message: "user not found"});
        }
        res.status(200).json(users);

    } catch (error) {
         res.status(500).json({error: "Internal server error"});
    }
}

export const create = async(req, res) => {
    try {
        const userData = new User(req.body);
        const {email} = userData;
        const userExit = await User.findOne({email});
        if(userExit){
            return res.status(400).json({message: "User already exist! "});
        }
        const savedUser = await userData.save();
        res.status(200).json(savedUser);

    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
}