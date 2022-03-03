const client = require('../../config/database');
const { ApiError } = require('../../helpers/errorHandler');

/**
 * @typedef {object} User
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
 * @property {number} employee_qualification_id - FK of User qualification (will be change with label)
 */

/**
 * @typedef {object} UserToCreate
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {string} email - User email
 * @property {string} password - User password
 * @property {number} social_security_number - User social security number
 * @property {string} date_of_birth - User date of birth
 * @property {string} address - User address
 * @property {number} zip_code - User zip code
 * @property {string} starting_date - User starting date
 * @property {string} avatar - User avatar
 * @property {string} function - User function
 * @property {string} role_application - User role in web application
 * @property {number} employee_qualification_id - FK of User qualification (will be change with label)
 */

/**
 * @typedef {object} UserCreate
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {string} email - User email
 * @property {string} password - User password
 * @property {number} social_security_number - User social security number
 * @property {string} date_of_birth - User date of birth
 * @property {string} address - User address
 * @property {number} zip_code - User zip code
 * @property {string} starting_date - User starting date
 * @property {string} avatar - User avatar
 * @property {string} function - User function
 * @property {string} role_application - User role in web application
 * @property {number} employee_qualification_id - FK of User qualification (will be change with label)
 * @property {string} created_at - timestamp for the create in DB
 */

/**
 * @typedef {object} UserUpdate
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
 * @property {string} employee_qualification_id - FK of User qualification (will be change with label)
 * @property {number} updated_at - timestamp for the update in DB
 */

/**
 * Deleted user response
 * @typedef {object} UserDelete
 * @property {boolean} isDeleted - Status
 * @property {number} statusCode - HTTP Status code
 * @property {string} message - Status message
 */

module.exports = {
  /**
   * Find an User by his id
   * @param {number} userId - User's ID
   * @returns {User|undefined} - REST response of an user or undefined if no user found
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
   * Insert User
   * @param {object} user - Body request with email and password required
   * @returns {UserCreate|ApiError} - Return the new user or ApiError if user not found
   */
  async insert(user) {
    const userToCreate = await client.query(
      `
        INSERT INTO "employee" 
        (
          "firstname",
          "lastname",
          "email",
          "password",
          "social_security_number",
          "date_of_birth",
          "address",
          "zip_code",
          "starting_date",
          "avatar",
          "function",
          "role_application",
          "employee_qualification_id"
        )
        VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13
        )
        RETURNING 
          "firstname",
          "lastname",
          "email",
          "password",
          "social_security_number",
          "date_of_birth",
          "address",
          "zip_code",
          "starting_date",
          "avatar",
          "function",
          "role_application",
          "employee_qualification_id",
          "created_at";`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.password,
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

    // TODO: Gérer un retour d'erreur en cas de duplicate values : SSN, adress, email, ...(Sprint 2 voir 3 !);

    return userToCreate.rows[0];
  },

  /**
   * Update User
   * @param {number} userId - User's ID
   * @param {object} user - Body request with email and password required
   * @returns {UserUpdate|ApiError} - Return updated user or ApiError if user not found
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

  /**
   * Remove User
   * @param {number} userId - User's ID
   * @param {object} user - Body request with email and password required
   * @returns {boolean|ApiError} - Return updated user or ApiError if user not found
   */
  async delete(userId) {
    const result = await client.query('SELECT * FROM "employee" WHERE "id" = $1;', [userId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet utilisateur n\'existe pas');
    }

    const userToDelete = await client.query('DELETE FROM "employee" WHERE "id" = $1;', [userId]);

    return !!userToDelete.rowCount;
  },
};
