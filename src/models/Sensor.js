const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  unit: { type: String },
  device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Sensor', sensorSchema);