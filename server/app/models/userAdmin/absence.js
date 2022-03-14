/* eslint-disable max-len */
const client = require('../../config/database');
const { ApiError } = require('../../helpers/errorHandler');

/**
 * @typedef {object} Absence
 * @property {string} id - Absence PK in the database
 * @property {string} reason - Absence reason
 * @property {string} created_at - Absence timestamptz creation
 * @property {string} updated_at - Absence timestamptz update
 */

module.exports = {
  /**
   * Find all absences
   * @returns {Absence|ApiError} - response of all absences or ApiError if no absence found
   */
  async findAll() {
    const result = await client.query(
      `
        SELECT * FROM "absence";
      `,
    );

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Aucune absence trouvée');
    }

    return result.rows;
  },

};
