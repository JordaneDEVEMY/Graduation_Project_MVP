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
      throw new ApiError(400, 'Cette absence n\'existe pas');
    }

    return result.rows[0];
  },

};
