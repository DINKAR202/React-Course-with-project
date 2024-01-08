const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).send("Welcome to Home page");
});

// app.get("/register", (req, res)=>{
//     res.status(200).send("Welcome to Register page");
// });

module.exports = router