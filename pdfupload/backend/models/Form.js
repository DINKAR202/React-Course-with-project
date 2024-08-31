const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  redPDF: { type: String, required: true },
  greenPDF: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Form', FormSchema);
