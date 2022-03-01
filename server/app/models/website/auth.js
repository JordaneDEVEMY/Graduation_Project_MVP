const client = require('../../config/database');

/**
 * @typedef {object} AuthUser
 * @property {number} id - Database primary key of User
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {string} email - User email
 * @property {string} avatar - User avatar
 * @property {string} role_application - User role in web application
 * @property {number} token - Generated Json Web Token
 */

/**
 * @typedef {object} authInput
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
    const result = await client.query(
      `
    SELECT 
      "id", 
      "firstname", 
      "lastname", 
      "email", 
      "avatar",
      "role_application" 
    FROM "employee" WHERE "email" = $1 AND "password" = $2
    `,
      [inputsAuth.email, inputsAuth.password],
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

};
