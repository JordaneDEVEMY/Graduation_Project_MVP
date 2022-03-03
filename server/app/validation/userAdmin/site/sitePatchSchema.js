const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string()
    .required(),
  address: Joi.string()
    .required(),
  zip_code: Joi.number()
    .required(),
  manager_name: Joi.string()
    .required(),
  estimated_duration: Joi.date()
    .iso()
    .required(),
}).required();
