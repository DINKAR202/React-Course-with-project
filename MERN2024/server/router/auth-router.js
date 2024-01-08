const express = require("express");
const router = express.Router();
const {home, register} = require("../controllers/auth-controller");

// router.get("/", (req, res)=>{
//     res.status(200).send("Welcome to Home page Using Router This is priti here");
// });

// router.get("/register", (req, res)=>{
//     res.status(200).send("Welcome to Register page Using Router");
// });

router.route("/").get(home);

router.route("/register").get(register)

// This is second option of using Router
router.route("/second").get((req, res) => {
    res
        .status(200)
        .send("This is second option of using Router");
});

module.exports = router;