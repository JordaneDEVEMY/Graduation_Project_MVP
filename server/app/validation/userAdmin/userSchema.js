const Joi = require('joi');

module.exports = Joi.object({
  id: Joi.number()
    .required(),
  firstname: Joi.string()
    .required(),
  lastname: Joi.string()
    .required(),
  email: Joi.string()
    .required(),
  social_security_number: Joi.string()
    .required(),
  date_of_birth: Joi.string()
    .required(),
  address: Joi.string()
    .required(),
  zip_code: Joi.number()
    .required(),
  starting_date: Joi.string()
    .required(),
  avatar: Joi.string()
    .required(),
  function: Joi.string()
    .required(),
  role_application: Joi.string()
    .required(),
  employee_qualification_id: Joi.number()
    .required(),
  // qualification_label: Joi.string()
  // .required(),
}).required();
