const express = require('express');
const { createForm, getForms, updateForm, deleteForm } = require('../controllers/formController');
const { protect, formCreator, manager } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');
const router = express.Router();

router.route('/').post(protect, formCreator, upload.fields([{ name: 'redPDF' }, { name: 'greenPDF' }]), createForm)
                .get(protect, manager, getForms)
                .delete(protect, formCreator, deleteForm);

router.route('/:id').put(protect, manager, updateForm);

module.exports = router;
