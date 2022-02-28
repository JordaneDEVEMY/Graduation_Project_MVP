const client = require('../../config/database');

/**
 * @typedef {object} User
 * @property {number} id - Database primary key of User
 * @property {number} social_security_number - User SSN
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {number} date_of_birth - User date_of_birth
 * @property {string} address - User address
 * @property {number} zip_code - User zip_code
 * @property {string} email - User email
 * @property {string} password - User password
 * @property {string} starting_date - User starting_date
 * @property {string} avatar - User avatar
 * @property {string} function - User function
 */

/**
 * @typedef {Object} InputsAuth
 * @property {string} email - Email used for connection
 * @property {string} password - Password used for connection
 */
module.exports = {

  /**
   * Find one user
   * @param {InputsAuth} inputsAuth - Email and Password for authentication
   * @returns {User|null} - Return User or null if no user found
   */
  async findOne(inputsAuth) {
    const result = await client.query('SELECT * FROM "employee" WHERE "email" = $1 AND "password" = $2', [inputsAuth.email, inputsAuth.password]);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

};
