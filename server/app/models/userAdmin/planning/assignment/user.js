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
