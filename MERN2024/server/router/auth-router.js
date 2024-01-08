const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).send("Welcome to Home page Using Router");
});

router.get("/register", (req, res)=>{
    res.status(200).send("Welcome to Register page Using Router");
});

// This is second option of using Router

router.route("/second").get((req, res) => {
    res
        .status(200)
        .send("This is second option of using Router");
});

module.exports = router