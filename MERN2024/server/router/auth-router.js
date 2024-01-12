const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");

router.route("/").get(authcontrollers.home);
router.route("/register").post(authcontrollers.register)
router.route("/login").post(authcontrollers.login);

// This is second option of using Router

module.exports = router;
















// router.get("/", (req, res)=>{
//     res.status(200).send("Welcome to Home page Using Router This is priti here");
// });

// router.get("/register", (req, res)=>{
//     res.status(200).send("Welcome to Register page Using Router");
// });