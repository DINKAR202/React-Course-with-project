import User from "../model/userModel.js";

export const fetch = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export const create = async(req, res) => {
    try {
        const userData = new User(req.body);
        const {email} = userData;

    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
}