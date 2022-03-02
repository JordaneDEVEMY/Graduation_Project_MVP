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

  /**
   * Update User
   * @param {number} userId - User's ID
   * @param {object} user - Body request with email and password required
   * @returns {User|ApiError} - Return updated User or ApiError if user not found
   */
  async update(userId, user) {
    const result = await client.query('SELECT * FROM "employee" WHERE "id" = $1', [userId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet utilisateur n\'existe pas');
    }

    const userToSave = await client.query(
      `
      UPDATE "employee" 
      SET 
        "firstname" = $2,
        "lastname" = $3,
        "email" = $4,
        "social_security_number" = $5,
        "date_of_birth" = $6,
        "address" = $7,
        "zip_code" = $8,
        "starting_date" = $9,
        "avatar" = $10,
        "function" = $11,
        "role_application" = $12,
        "employee_qualification_id" = $13,
        "updated_at" = NOW()
      WHERE "id"= $1
      RETURNING 
        "firstname",
        "lastname",
        "email",
        "social_security_number",
        "date_of_birth",
        "address",
        "zip_code",
        "starting_date",
        "avatar",
        "function",
        "role_application",
        "employee_qualification_id",
        "updated_at";`,
      [
        userId,
        user.firstname,
        user.lastname,
        user.email,
        user.social_security_number,
        user.date_of_birth,
        user.address,
        user.zip_code,
        user.starting_date,
        user.avatar,
        user.function,
        user.role_application,
        user.employee_qualification_id,
      ],
    );

    // ? Standby Code for update function in SQL
    // const userToUpdate = result.rows[0];
    // const userUpdated = { ...userToUpdate, ...user };

    // const userToSave = await client.query('', [userUpdated]);

    return userToSave.rows[0];
  },
};
