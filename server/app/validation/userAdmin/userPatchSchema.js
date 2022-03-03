const Joi = require('joi');

module.exports = Joi.object({
  firstname: Joi.string()
    .required(),
  lastname: Joi.string()
    .required(),
  email: Joi.string()
  // ? .pattern(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
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
