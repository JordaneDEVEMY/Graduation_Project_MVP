const jwt = require('jsonwebtoken');

/**
 * Generate JWT Token
 * @param {*} id - Id to looking for Token
 * @returns {string} Token string
 */
const generateToken = (id, duration) => jwt.sign({ id }, process.env.JWT_SECRET, {
  expiresIn: duration, // '30d'
});

module.exports = {
  generateToken,
};
