const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string()
  // ? .pattern(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
    .required(),
  password: Joi.string().required(),
}).required();
