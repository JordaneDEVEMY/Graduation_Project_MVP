const client = require('../../config/database');
const { ApiError } = require('../../helpers/errorHandler');

/**
 * @typedef {object} User
 * @property {number} id - Database primary key of User
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {string} email - User email
 * @property {number} social_security_number - User social security number
 * @property {string} date_of_birth - User date of birth
 * @property {string} address - User address
 * @property {number} zip_code - User zip code
 * @property {string} starting_date - User starting date
 * @property {string} avatar - User avatar
 * @property {string} function - User function
 * @property {string} role_application - User role in web application
 * @property {string} qualification_label - label of User qualification
 */

module.exports = {
  /**
   * Find an User by his id
   * @param {number} userId - User's ID
   * @returns {User[]|undefined} - REST response of an User or undefined if no user found
   */
  async findByPk(userId) {
    const result = await client.query(
      `
      SELECT 
        "employee"."id", 
        "employee"."firstname", 
        "employee"."lastname", 
        "employee"."email", 
        "employee"."social_security_number", 
        "employee"."date_of_birth", 
        "employee"."address", 
        "employee"."zip_code", 
        "employee"."starting_date", 
        "employee"."avatar", 
        "employee"."function", 
        "employee"."role_application", 
        "employee_qualification"."label" AS qualification_label
      FROM "employee"
      LEFT JOIN "employee_qualification" ON "employee"."employee_qualification_id" = "employee_qualification"."id"
      WHERE "employee"."id" = $1;
      `,
      [userId],
    );

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet utilisateur n\'existe pas');
    }

    return result.rows[0];
  },
};
