const router = require("express").Router();
const {User} = require("../models/User");
const joi = require("joi");

router.post('/', async(req, res) => {
    try {
        
    } catch (error) {
        
    }
})

const validate = (data) => {
    const schema = Joi.object({
        email:Joi.string().email().required().label("Email"),
        password:joi.string().required().label("Password")
    });
    return schema.validate(data);
}

module.exports = router;