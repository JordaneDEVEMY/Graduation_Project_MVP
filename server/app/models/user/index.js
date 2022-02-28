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
module.exports = {
  /**
   * Find an User by his id
   * @param {number} userId - User's ID
   * @returns {User[]} - REST response of an User
   */
  async findByPk(userId) {
    const result = await client.query('SELECT * FROM "employee" WHERE "id" = $1', [userId]);
    //! Mettre à jour la query conjointement avec Hicham ASAP
    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

};
