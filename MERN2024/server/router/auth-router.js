const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).send("Welcome to Home page Using Router");
});

router.get("/register", (req, res)=>{
    res.status(200).send("Welcome to Register page Using Router");
});

module.exports = router