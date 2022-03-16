/* eslint-disable max-len */
const client = require('../../config/database');
const { ApiError } = require('../../helpers/errorHandler');

/**
 * @typedef {object} User
 * @property {number} id - User Pk in database
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {string} email - User email
 * @property {string} phone_number - User phone number
 * @property {string} mobile_number - User mobile number
 * @property {string} address - User address
 * @property {number} zip_code - User zip code
 * @property {string} social_security_number - User social security number
 * @property {string} date_of_birth - User date of birth
 * @property {string} starting_date - User starting date
 * @property {string} avatar - User avatar
 * @property {string} fonction - User fonction
 * @property {string} role_application - User role in web application
 * @property {number} employee_qualification_id - FK of User qualification
 * @property {string} qualification_label - FK of User qualification label
 */

/**
 * @typedef {object} UserToCreate
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {string} email - User email
 * @property {string} password - User password
 * @property {string} phone_number - User phone number
 * @property {string} mobile_number - User mobile number
 * @property {string} address - User address
 * @property {number} zip_code - User zip code
 * @property {string} social_security_number - User social security number
 * @property {string} date_of_birth - User date of birth
 * @property {string} starting_date - User starting date
 * @property {string} avatar - User avatar
 * @property {string} fonction - User fonction
 * @property {string} role_application - User role in web application
 * @property {string} qualification_label - FK of User qualification label
 */

/**
 * @typedef {object} UserToUpdate
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {string} email - User email
 * @property {string} phone_number - User phone number
 * @property {string} mobile_number - User mobile number
 * @property {string} address - User address
 * @property {number} zip_code - User zip code
 * @property {string} social_security_number - User social security number
 * @property {string} date_of_birth - User date of birth
 * @property {string} starting_date - User starting date
 * @property {string} avatar - User avatar
 * @property {string} fonction - User fonction
 * @property {string} role_application - User role in web application
 * @property {string} qualification_label - FK of User qualification label
 */

/**
 * @typedef {object} UserCreate
 * @property {number} id - User Pk in database
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {string} email - User email
 * @property {string} password - User password
 * @property {string} phone_number - User phone number
 * @property {string} mobile_number - User mobile number
 * @property {string} address - User address
 * @property {number} zip_code - User zip code
 * @property {string} social_security_number - User social security number
 * @property {string} date_of_birth - User date of birth
 * @property {string} starting_date - User starting date
 * @property {string} avatar - User avatar
 * @property {string} fonction - User fonction
 * @property {string} role_application - User role in web application
 * @property {number} employee_qualification_id - FK of User qualification
 * @property {string} qualification_label - FK of User qualification label
 * @property {string} created_at - timestamp for the create in DB
 */

/**
 * @typedef {object} UserUpdate
 * @property {number} id - User Pk in database
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {string} email - User email
 * @property {string} phone_number - User phone number
 * @property {string} mobile_number - User mobile number
 * @property {string} address - User address
 * @property {number} zip_code - User zip code
 * @property {string} social_security_number - User social security number
 * @property {string} date_of_birth - User date of birth
 * @property {string} starting_date - User starting date
 * @property {string} avatar - User avatar
 * @property {string} fonction - User fonction
 * @property {string} role_application - User role in web application
 * @property {string} employee_qualification_id - FK of User qualification
 * @property {string} qualification_label - FK of User qualification label
 * @property {string} updated_at - timestamp for the update in DB
 */

/**
 * @typedef {object} UserDelete
 * @property {boolean} isDeleted - Status
 * @property {number} statusCode - HTTP Status code
 * @property {string} message - Status message
 */

module.exports = {
  /**
   * Find all users
   * @returns {User|undefined} - response of all users or undefined if no users found
   */
  async findAll() {
    const result = await client.query(`
      SELECT * FROM get_user_by_admin;
    `);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Aucun utilisateur trouvé');
    }

    return result.rows;
  },

  /**
   * Find an User by his id
   * @param {number} userId - User ID
   * @returns {User|undefined} - REST response of an user or undefined if no user found
   */
  async findByPk(userId) {
    const result = await client.query(
      `
      SELECT * FROM get_user_by_admin
      WHERE id = $1;
      `,
      [userId],
    );

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet utilisateur n\'existe pas');
    }

    return result.rows[0];
  },

  /**
   * Find an User by his id
   * @param {number} userId - User ID
   * @returns {UserToCreate|undefined} - REST response of an user or undefined if no user found
   */
  async findByPkReturnPassword(userId) {
    const result = await client.query(
      `
        SELECT * FROM "employee"
        WHERE id = $1;
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
   * @returns {UserCreate} - Return the new user
   */
  async insert(user) {
    const qualificationId = await client.query('SELECT * FROM "employee_qualification" WHERE "label" = $1', [user.qualification_label]);

    if (qualificationId.rowCount === 0) {
      throw new ApiError(400, 'Cette qualification n\'existe pas');
    }

    Object.assign(user, { employee_qualification_id : qualificationId.rows[0].id });

    const userToCreate = await client.query(
      `
        SELECT * FROM insert_user($1)
      `,
      [user],
    );

    Object.assign(userToCreate.rows[0], { qualification_label: qualificationId.rows[0].label });

    return userToCreate.rows[0];
  },

  /**
   * Update User
   * @param {number} userId - User ID
   * @param {object} user - Body request with email and password required
   * @returns {UserUpdate|ApiError} - Return updated user or ApiError if user not found
   */
  async update(userId, user) {
    const result = await client.query('SELECT * FROM "employee" WHERE "id" = $1', [userId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet utilisateur n\'existe pas');
    }

    const qualificationId = await client.query('SELECT * FROM "employee_qualification" WHERE "label" = $1', [user.qualification_label]);

    if (qualificationId.rowCount === 0) {
      throw new ApiError(400, 'Cette qualification n\'existe pas');
    }

    Object.assign(user, 
      {
        id : parseInt(userId, 10), 
        employee_qualification_id : qualificationId.rows[0].id 
      });

    const userToSave = await client.query(
      `
      SELECT * FROM update_employee_by_admin($1)`,
      [user],
    );

    delete userToSave.rows[0].password;

    Object.assign(userToSave.rows[0], { qualification_label: qualificationId.rows[0].label });

    // ? Standby Code for update fonction in SQL
    // const userToUpdate = result.rows[0];
    // const userUpdated = { ...userToUpdate, ...user };

    // const userToSave = await client.query('', [userUpdated]);

    return userToSave.rows[0];
  },

  /**
   * Remove User
   * @param {number} userId - User ID
   * @returns {boolean|ApiError} - Return boolean or ApiError if user not found
   */
  async delete(userId) {
    const result = await client.query('SELECT * FROM "employee" WHERE "id" = $1;', [userId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet utilisateur n\'existe pas');
    }

    const userToDelete = await client.query('DELETE FROM "employee" WHERE "id" = $1;', [userId]);

    return !!userToDelete.rowCount;
  },

  /**
   * Search if SSN already exist in db
   * @param {number} userSsn - User Ssn to find
   * @returns {boolean|ApiError} - Return boolean or ApiError if userSsn not found
   */
  async getSsn(userSsn) {
    const result = await client.query('SELECT social_security_number FROM "employee" WHERE social_security_number = $1', [userSsn]);

    if (result.rowCount > 0) {
      throw new ApiError(400, 'Le numéro de sécurité social est déjà affecté à un autre salarié');
    }

    return !result.rowCount;
  },

  /**
   * Search if SSN already exist in db
   * @param {number} userEmail - User Email to find
   * @returns {boolean|ApiError} - Return boolean or ApiError if userEmail not found
   */
  async getEmail(userEmail) {
    const result = await client.query('SELECT email FROM "employee" WHERE email = $1', [userEmail]);

    if (result.rowCount > 0) {
      throw new ApiError(400, 'L\'email est déjà affecté à un autre salarié');
    }

    return !result.rowCount;
  },

  async updatePassword(userId, password) {
    const result = await client.query('SELECT * FROM "employee" WHERE "id" = $1', [userId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet utilisateur n\'existe pas');
    }

    // TODO: SPRINT 3 - Modifier le returning
    const userToUpdate = await client.query(
      `
      UPDATE "employee" 
      SET 
        "password" = $2,
        "updated_at" = NOW()
      WHERE "id"= $1
      RETURNING *;`,
      [
        userId,
        password,
      ],
    );

    return userToUpdate.rows[0];
  },
};
