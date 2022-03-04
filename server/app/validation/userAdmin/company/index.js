const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string()
    .required(),
  address: Joi.string()
    .required(),
  zip_code: Joi.number()
    .required(),
  type: Joi.string()
    .required(),
}).required();
