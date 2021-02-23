const Joi = require('joi');

const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().max(255).email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

module.exports.registerUserSchema = registerUserSchema;
module.exports.loginSchema = loginSchema;
