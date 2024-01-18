const Service = require("../models/service-model");

const services = async (req, res) =>{
    try {
        const response = await Service.find();
    } catch (error) {
        console.log(`services ${error}`);
    }
}