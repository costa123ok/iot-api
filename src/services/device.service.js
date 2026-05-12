const Device = require('../models/Device');

exports.create = (data) => Device.create(data);

exports.getAll = async ({ page = 1, limit = 10, type, isActive }) => {
  const filter = {};
  if (type) filter.type = type;
  if (isActive !== undefined) filter.isActive = isActive === 'true';

  const devices = await Device.find(filter)
    .populate('owner', 'name email')
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Device.countDocuments(filter);
  return { devices, total, page: Number(page), pages: Math.ceil(total / limit) };
};

exports.getById = (id) => Device.findById(id).populate('owner', 'name email');

exports.update = (id, data) => Device.findByIdAndUpdate(id, data, { new: true });

exports.remove = (id) => Device.findByIdAndDelete(id);