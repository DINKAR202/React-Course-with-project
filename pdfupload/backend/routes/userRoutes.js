const express = require('express');
const { registerUser, loginUser, deleteUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, admin, registerUser).delete(protect, admin, deleteUser);
router.post('/login', loginUser);

module.exports = router;
