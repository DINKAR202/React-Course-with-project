const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router.route('/users').get(adminController.getAllUsers);
router.route('/contacts').get(adminController.getAllContacts);

module.exports = router;