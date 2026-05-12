const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  unit: { type: String },
  sensor: { type: mongoose.Schema.Types.ObjectId, ref: 'Sensor', required: true },
  device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true },
  timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);