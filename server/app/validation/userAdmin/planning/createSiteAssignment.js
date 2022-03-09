const Joi = require('joi');

module.exports = Joi.object({
  starting_date: Joi.string()
    .required(),
  ending_date: Joi.string()
    .required(),
  color: Joi.string()
    .required(),
  position: Joi.number()
    .required(),
  visibility: Joi.boolean()
    .required(),
  employee_id: Joi.number()
    .required(),
  site_id: Joi.number(),
  absence_id: Joi.number(),
}).required();
