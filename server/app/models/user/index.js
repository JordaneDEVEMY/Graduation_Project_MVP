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
 * @property {number} id - Database primary key of assignement
 * @property {string} starting_date - assignment starting date
 * @property {string} ending_date - assignment ending date
 * @property {Absence} absence - User absence assignment
 * @property {Site} site - User site assignment
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

module.exports = {
  /**
   * Find an User by his id
   * @param {number} userId - User's ID
   * @returns {RestUser[]|undefined} - REST response of an User or undefined if no user found
   */
  async findByPk(userId) {
    const result = await client.query(
      `
        SELECT * FROM get_user_rest WHERE id=$1;
      `,
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
