const Joi = require('joi');

module.exports = Joi.object({
  password: Joi.string().required(),
  phone_number: Joi.string().required(),
  mobile_number: Joi.string().required(),
}).required();
