const Sensor = require('../models/Sensor');

exports.create = (data) => Sensor.create(data);

exports.getAll = async ({ page = 1, limit = 10, device }) => {
  const filter = {};
  if (device) filter.device = device;

  const sensors = await Sensor.find(filter)
    .populate('device', 'name type')
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Sensor.countDocuments(filter);
  return { sensors, total, page: Number(page), pages: Math.ceil(total / limit) };
};

exports.getById = (id) => Sensor.findById(id).populate('device', 'name type');

exports.update = (id, data) => Sensor.findByIdAndUpdate(id, data, { new: true });

exports.remove = (id) => Sensor.findByIdAndDelete(id);