const Joi = require('joi');

module.exports = Joi.object({
  password: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  mobileNumber: Joi.string().required(),
}).required();
