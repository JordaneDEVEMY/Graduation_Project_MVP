const Joi = require('joi');

module.exports = Joi.object({
  firstname: Joi.string()
    .min(2)
    .required(),
  lastname: Joi.string()
    .min(2)
    .required(),
  email: Joi.string()
    .min(3)
    .email()
    .required(),
  phone_number: Joi.string()
    .min(10)
    .required(),
  mobile_number: Joi.string()
    .min(10)
    .required(),
  social_security_number: Joi.number()
    .min(13)
    .max(15)
    .required(),
  date_of_birth: Joi.date()
    .iso()
    .less('now')
    .required(),
  address: Joi.string()
    .required(),
  zip_code: Joi.number()
    .min(2)
    .required(),
  starting_date: Joi.date()
    .iso()
    .required(),
  avatar: Joi.string(),
  fonction: Joi.string()
    .required(),
  role_application: Joi.string()
    .required(),
  qualification_label: Joi.string(),,
}).required();
