const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");

router.route("/").get(authcontrollers.home);

router.route("/register").post(authcontrollers.register)

// This is second option of using Router
router.route("/login").get(authcontrollers.login);

module.exports = router;
















// router.get("/", (req, res)=>{
//     res.status(200).send("Welcome to Home page Using Router This is priti here");
// });

// router.get("/register", (req, res)=>{
//     res.status(200).send("Welcome to Register page Using Router");
// });