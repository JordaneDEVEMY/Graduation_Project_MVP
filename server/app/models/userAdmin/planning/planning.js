const client = require('../../../config/database');
const { ApiError } = require('../../../helpers/errorHandler');

/**
 * @typedef {object} Week
 * @property {string} weekStart - Monday start of the week
 * @property {Planning} planning - Array of the planning for this period
 */

/**
 * @typedef {array} Planning
 * @property {number} company_id - Company PK in database
 * @property {string} company_name - Company name
 * @property {Sites} sites - Sites of the company
 */

/**
 * @typedef {array} Sites
 * @property {number} id - Database primary key of site
 * @property {string} site_name - site name
 * @property {array.<Assignments>} assignments - Assignments
 */

/**
 * @typedef {array} Assignments
 * @property {number} id - Database primary key of assignment
 * @property {string} starting_date - assignment starting date
 * @property {string} ending_date - assignment ending date
 * @property {number} position - card position
 * @property {string} visibility - planning visibility for the User/employee
 * @property {Employee} employees - employees assigned
 */

/**
 * @typedef {object} Employee
 * @property {number} id - Employee Pk in database
 * @property {string} firstname - Employee firstname
 * @property {string} lastname - Employee lastname
 */

module.exports = {
  /**
   * Find a Week planning with first and last ISO date of the week
   * @param {string} mondayIsoDate - Week monday ISO date ID
   * @param {string} sundayIsoDate - Week sunday ISO date ID
   * @returns {Week[]|ApiError} - Response of Week or ApiError if no week found
   */
  async findByDates(mondayIsoDate, sundayIsoDate) {
    const result = await client.query(
      `
      SELECT * FROM get_Week_admin_planning 
      WHERE starting_date >= $1 
      AND ending_date <= $2
      `,
      [mondayIsoDate, sundayIsoDate],
    );

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Semaine non planifiée pour le moment');
    }

    return result.rows;
  },

  // /**
  //  * Insert User assignment
  //  * @param {object} user - Body request with email and password required
  //  * @returns {UserCreate} - Return the new user
  //  */
  // async insert(reqParams, assignment) {
  //   const { slugYearWeekId, userId } = reqParams;

  //   // const qualificationId = await client.query('SELECT * FROM "employee_qualification" WHERE "label" = $1', [user.qualification_label]);

  //   // if (qualificationId.rowCount === 0) {
  //   //   throw new ApiError(400, 'Cette qualification n\'existe pas');
  //   // }

  //   // const userToCreate = await client.query(
  //   //   `
  //   //   ;`,
  //   //   [

  //   //   ],
  //   // );

  //   // Object.assign(userToCreate.rows[0], { qualification_label: qualificationId.rows[0].label });
  //   // console.log(userToCreate.rows[0]);
  //   // userToCreate.rows[0];
  // },

};
