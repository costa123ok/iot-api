const Joi = require('joi');

exports.deviceSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  location: Joi.string().allow(''),
  isActive: Joi.boolean()
});