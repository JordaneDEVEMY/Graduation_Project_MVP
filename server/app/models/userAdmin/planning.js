const client = require('../../config/database');
const { ApiError } = require('../../helpers/errorHandler');

/**
 * @typedef {object} Company
 * @property {string} name - Company name
 * @property {string} address - Company address
 * @property {number} zip_code - Company zip code
 * @property {string} type - Company type
 */

/**
 * @typedef {object} WeekDelete
 * @property {boolean} isDeleted - Status
 * @property {number} statusCode - HTTP Status code
 * @property {string} message - Status message
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
      throw new ApiError(400, 'Cet entreprise n\'existe pas');
    }

    return result.rows;
  },

};
