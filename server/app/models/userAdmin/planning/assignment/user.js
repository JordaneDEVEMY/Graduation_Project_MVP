const client = require('../../../../config/database');
const { ApiError } = require('../../../../helpers/errorHandler');

/**
 * @typedef {array} Assignments
 * @property {number} id - Database primary key of assignment
 * @property {string} starting_date - assignment starting date
 * @property {string} ending_date - assignment ending date
 * @property {number} position - card position
 * @property {string} visibility - planning visibility for the User/employee
 * @property {Employee} employees - employees assigned
 */

module.exports = {
  /**
   * Insert User assignment
   * @param {object} user - Body request with email and password required
   * @returns {UserCreate} - Return the new user
   */
  async insertWithSite(assignment) {
    const assignmentToCreate = await client.query(
      `
      INSERT INTO "assignment"
      (
        "starting_date",
        "ending_date",
        "color",
        "position",
        "visibility",
        "site_id"
      )
      VALUES (
        $1, $2, $3, $4, $5, $6
      )
      RETURNING *;`,
      [
        assignment.starting_date,
        assignment.ending_date,
        assignment.color,
        assignment.position,
        assignment.visibility,
        assignment.site_id,
      ],
    );

    return assignmentToCreate.rows[0];
  },

  //TODO insertWithAbsence
};
