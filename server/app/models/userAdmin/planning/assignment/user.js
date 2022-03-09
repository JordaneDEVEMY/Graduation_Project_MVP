const client = require('../../../../config/database');
const { ApiError } = require('../../../../helpers/errorHandler');

/**
 * @typedef {array} Assignment
 * @property {number} id - Database primary key of assignment
 * @property {string} starting_date - assignment starting date
 * @property {string} ending_date - assignment ending date
 * @property {string} color - assignment card color
 * @property {number} position - card position
 * @property {string} visibility - planning visibility for the User/employee
 * @property {number} employee_id - employee PK id assigned
 * @property {number} absence_id - absence PK id assigned or null
 * @property {number} site_id - site PK id assigned or null
 * @property {string} created_at - Db timestamptz of create
 * @property {string} updated_at - Db timestamptz of update
 */

/**
 * @typedef {array} AssignmentToCreate
 * @property {string} starting_date - assignment starting date
 * @property {string} ending_date - assignment ending date
 * @property {string} color - assignment card color
 * @property {number} position - card position
 * @property {boolean} visibility - planning visibility for the User/employee
 * @property {number} employee_id - employee PK id assigned
 * @property {number} site_id - site PK id assigned or null
 * @property {number} absence_id - absence PK id assigned or null
 */

module.exports = {
  /**
   * Insert User assignment to a Site
   * @param {AssignmentToCreateInAbsence} assignment - Body request
   * @returns {Assignment} - Return the new user
   */
  async insert(assignment) {
    const assignmentToCreate = await client.query(
      `
      INSERT INTO "assignment"
      (
        "starting_date",
        "ending_date",
        "color",
        "position",
        "visibility",
        "site_id",
        "absence_id",
        "employee_id"
      )
      VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8
      )
      RETURNING *;`,
      [
        assignment.starting_date,
        assignment.ending_date,
        assignment.color,
        assignment.position,
        assignment.visibility,
        assignment.site_id,
        assignment.absence_id,
        assignment.employee_id,
      ],
    );

    return assignmentToCreate.rows[0];
  },

  /**
   * Insert User assignment to an Absence
   * @param {AssignmentToCreateInAbsence} assignment - Body request
   * @returns {Assignment} - Return the new user
   */
  async insertWithAbsence(assignment) {
    const assignmentToCreate = await client.query(
      `
      INSERT INTO "assignment"
      (
        "starting_date",
        "ending_date",
        "color",
        "position",
        "visibility",
        "absence_id",
        "employee_id"
      )
      VALUES (
        $1, $2, $3, $4, $5, $6, $7
      )
      RETURNING *;`,
      [
        assignment.starting_date,
        assignment.ending_date,
        assignment.color,
        assignment.position,
        assignment.visibility,
        assignment.absence_id,
        assignment.employee_id,
      ],
    );

    return assignmentToCreate.rows[0];
  },
};
