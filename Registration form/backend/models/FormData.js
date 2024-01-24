const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name : String,
    phone: String,
    email: String,
    password: String
})

const FormDataModel = mongoose.model('Registration_Data', FormDataSchema);

module.exports = FormDataModel;
