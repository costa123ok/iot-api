const Joi = require('joi');

exports.messageSchema = Joi.object({
  value: Joi.number().required(),
  unit: Joi.string().allow(''),
  sensor: Joi.string().required(),
  device: Joi.string().required()
});