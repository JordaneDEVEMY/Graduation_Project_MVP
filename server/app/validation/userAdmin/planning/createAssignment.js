const Joi = require('joi');

module.exports = Joi.object({
  employee_id: Joi.string()
    .required(),
  starting_date: Joi.string()
    .required(),
  ending_date: Joi.string()
    .required(),
  position: Joi.string()
    .required(),
  visibility: Joi.string()
    .required(),
  absence_id: Joi.number(),
  site_id: Joi.number(),
}).required();
