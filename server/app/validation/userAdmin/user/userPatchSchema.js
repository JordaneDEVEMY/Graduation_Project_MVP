const Joi = require('joi');

module.exports = Joi.object({
  firstname: Joi.string(),
  lastname: Joi.string(),
  email: Joi.string()
  // ? .pattern(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
    .required(),
  social_security_number: Joi.number()
    .required(),
  date_of_birth: Joi.date()
    .iso()
    .less('now')
    .required(),
  phone_number: Joi.string()
    .required(),
  mobile_number: Joi.string()
    .required(),
  address: Joi.string()
    .required(),
  zip_code: Joi.number()
    .required(),
  starting_date: Joi.date()
    .iso()
    .required(),
  avatar: Joi.string(),
  fonction: Joi.string()
    .required(),
  role_application: Joi.string()
    .required(),
  // employee_qualification_id: Joi.number()
  //   .min(1)
  //   .required(),
  qualification_label: Joi.string(),
}).required();
