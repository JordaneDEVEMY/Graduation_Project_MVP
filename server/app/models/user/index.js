const client = require('../../config/database');
const { ApiError } = require('../../helpers/errorHandler');

/**
 * @typedef {object} RestUser
 * @property {number} id - Database primary key of User
 * @property {number} social_security_number - User SSN
 * @property {number} date_of_birth - User date_of_birth
 * @property {string} address - User address
 * @property {number} zip_code - User zip_code
 * @property {string} starting_date - User starting_date
 * @property {string} function - User function
 * @property {number} employee_qualification_id - User qualification key
 * @property {string} label - User qualification label
 * @property {array.<Assignments>} assignments - User assignments
 */

/**
 * @typedef {object} UserUpdate
 * @property {number} id - Database primary key of User
 * @property {string} email - User email
 * @property {string} updated_at - User updated timestamptz
 */

/**
 * @typedef {Array} Assignments
 * @property {number} id - Database primary key of assignment
 * @property {string} starting_date - assignment starting date
 * @property {string} ending_date - assignment ending date
 * @property {Absence} absence - User absence assignment
 * @property {Site} site - User site assignment
 * @property {Colleagues} colleagues - User colleagues in assignment
 */

/**
 * @typedef {object} Absence
 * @property {number} id - Database primary key of absence
 * @property {string} reason - absence reason
 */

/**
 * @typedef {object} Site
 * @property {number} id - Database primary key of site
 * @property {string} name - site name
 * @property {string} adress - site adress
 * @property {number} zip_code - site zip code
 * @property {string} manager_name - site manager name
 * @property {Company} company - site owner's company
 */

/**
 * @typedef {object} Company
 * @property {number} id - Database primary key of site
 * @property {string} name - company name
 */

/**
 * @typedef {object} Colleagues
 * @property {number} id - Database primary key of this colleague
 * @property {string} firstname - Colleagues firstname
 * @property {string} lastname - Colleagues lastname
 * @property {number} site_id - Colleagues site assignment
 * @property {string} starting_date - Colleagues starting date of assignment
 * @property {string} ending_date - Colleagues ending date of assignment
 */
module.exports = {
  /**
   * Find an User by his id
   * @param {number} userId - User's ID
   * @returns {RestUser[]|ApiError} - REST response of an User or ApiError if user not found
   */
  async findByPk(userId) {
    const result = await client.query(
      `
        SELECT * FROM get_user_rest WHERE id=$1;
      `,
      [userId],
    );

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet utilisateur n\'existe pas');
    }

    return result.rows[0];
  },

  /**
   * Update and User by his id with email and password body request
   * @param {number} userId - User's ID
   * @param {object<email, password>} user - Body request with email and password required
   * @returns {UserUpdate|ApiError} - Return updated User or ApiError if user not found
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

  /**
   * Find colleagues of an employee
   * @param {number} startingDate - Starting date of site affectation
   * @param {number} endingDate - Ending date of site affectation
   * @param {number} siteId - Site ID
   * @param {number} userId - User ID
   * @returns {TODO|ApiError} - Colleagues response
   */
  async findColleagues(startingDate, endingDate, siteId, userId) {
    const result = await client.query(
      `
          SELECT * FROM get_user_colleagues 
          WHERE "starting_date" >= $1 
          AND "ending_date" <= $2
          AND "site_id" = $3
          AND "id" <> $4;
        `,
      [
        startingDate,
        endingDate,
        siteId,
        userId,
      ],
    );

    return result.rows;
  },

};
