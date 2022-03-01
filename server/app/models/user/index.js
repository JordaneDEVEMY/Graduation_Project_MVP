const client = require('../../config/database');
const { ApiError } = require('../../helpers/errorHandler');

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
 * @property {string} starting_date - User starting_date
 * @property {string} avatar - User avatar
 * @property {string} function - User function
 * @property {string} role_application - User role in web application
 * @property {number} employee_qualification_id - User qualification key
 * @property {string} label - User qualification label
 */

/**
 * @typedef {object} UserUpdate
 * @property {number} id - Database primary key of User
 * @property {string} email - User email
 * @property {string} updated_at - User updated timestamptz
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
        "employee"."social_security_number", 
        "employee"."firstname", 
        "employee"."lastname", 
        "employee"."date_of_birth", 
        "employee"."address", 
        "employee"."zip_code", 
        "employee"."email", 
        "employee"."starting_date", 
        "employee"."avatar", 
        "employee"."function", 
        "employee"."role_application", 
        "employee"."employee_qualification_id",
        "employee_qualification"."label"
      FROM "employee" 
      JOIN "employee_qualification" ON "employee_qualification"."id" = "employee"."employee_qualification_id"
      WHERE "employee"."id" = $1`,
      [userId],
    );

    if (result.rowCount === 0) {
      return undefined;
    }

    return result.rows[0];
  },

  async update(userId, user) {
    const result = await client.query('SELECT * FROM "employee" WHERE "id" = $1', [userId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet utilisateur n\'existe pas');
    }

    const userToSave = await client.query(
      `
      UPDATE "employee" 
      SET 
        "email" = $1, 
        "password" = $2,
        "updated_at" = NOW()
      WHERE "id"= $3 
      RETURNING 
        "id", 
        "email",
        "updated_at";`,
      [user.email, user.password, userId],
    );

    // ? Standby Code for update function in SQL
    // const userToUpdate = result.rows[0];
    // const userUpdated = { ...userToUpdate, ...user };

    // const userToSave = await client.query('', [userUpdated]);

    return userToSave.rows[0];
  },
};
