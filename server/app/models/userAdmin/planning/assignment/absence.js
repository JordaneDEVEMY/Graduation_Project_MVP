const client = require('../../../../config/database');
const { ApiError } = require('../../../../helpers/errorHandler');

module.exports = {
  /**
   * Find an absence by his id
   * @param {number} absenceId - Absence ID
   * @returns {Absence|ApiError} - Absence response or ApiError if no absence found
   */
  async findByPk(absenceId) {
    const result = await client.query(
      `
      SELECT * FROM "absence" WHERE "id" = $1;
      `,
      [absenceId],
    );

    if (result.rowCount === 0) {
      throw new ApiError(404, 'Absence not found');
    }

    return result.rows[0];
  },

};
