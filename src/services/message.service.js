const Message = require('../models/Message');

exports.create = (data) => Message.create(data);

exports.getAll = async ({ page = 1, limit = 10, device, sensor }) => {
  const filter = {};
  if (device) filter.device = device;
  if (sensor) filter.sensor = sensor;

  const messages = await Message.find(filter)
    .populate('sensor', 'name unit')
    .populate('device', 'name type')
    .sort({ timestamp: -1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Message.countDocuments(filter);
  return { messages, total, page: Number(page), pages: Math.ceil(total / limit) };
};

exports.getById = (id) => Message.findById(id)
  .populate('sensor', 'name unit')
  .populate('device', 'name type');

exports.update = (id, data) => Message.findByIdAndUpdate(id, data, { new: true });

exports.remove = (id) => Message.findByIdAndDelete(id);