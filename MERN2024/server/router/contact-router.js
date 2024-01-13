const express = require("express");
const router = express.Router();


router.route("/contact").post(contactForm);

module.exports = router;