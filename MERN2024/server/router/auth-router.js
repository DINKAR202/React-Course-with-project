const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = required("../middlewares/validate-middleware")

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);

// This is second option of using Router

module.exports = router;
















// router.get("/", (req, res)=>{
//     res.status(200).send("Welcome to Home page Using Router This is priti here");
// });

// router.get("/register", (req, res)=>{
//     res.status(200).send("Welcome to Register page Using Router");
// });