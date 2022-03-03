const client = require('../../config/database');
const { ApiError } = require('../../helpers/errorHandler');

/**
 * @typedef {object} Site
 * @property {number} id - id
 * @property {string} name- Site name
 * @property {string} address - Site address
 * @property {number} zip_code - Site zip code
 * @property {string} manager_name - Site manager name
 * @property {string} estimated_duration - Site estimated duration
 * @property {number} company_id - Site company id owner
 */

module.exports = {
  /**
   * Find a Site by his id
   * @param {number} siteId - Site ID
   * @returns {Site|ApiError} - REST response of an user or ApiError if no site found
   */
  async findByPk(siteId) {
    const result = await client.query(
      `
      SELECT * FROM "site" WHERE "id" = $1;
      `,
      [siteId],
    );

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Ce site n\'existe pas');
    }

    return result.rows[0];
  },
};
