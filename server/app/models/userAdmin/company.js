const client = require('../../config/database');
const { ApiError } = require('../../helpers/errorHandler');

/**
 * @typedef {object} CompanyInDatabase
 * @property {number} id - id
 * @property {string} name - Company name
 * @property {string} address - Company address
 * @property {number} zip_code - Company zip code
 * @property {string} type - Company type
 * @property {number} created_at - Db timestamptz of create
 * @property {number} updated_at - Db timestamptz of update
 */

/**
 * @typedef {object} Company
 * @property {number} id - id
 * @property {string} name - Company name
 * @property {string} address - Company address
 * @property {number} zip_code - Company zip code
 * @property {string} type - Company type
 */

/**
 * @typedef {object} CompanyDelete
 * @property {boolean} isDeleted - Status
 * @property {number} statusCode - HTTP Status code
 * @property {string} message - Status message
 */

module.exports = {
  /**
   * Find a Company by his id
   * @param {number} companyId - Company ID
   * @returns {Company|ApiError} - REST response of Company or ApiError if no company found
   */
  async findByPk(companyId) {
    const result = await client.query(
      `
      SELECT * FROM "company" WHERE "id" = $1;
      `,
      [companyId],
    );

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet entreprise n\'existe pas');
    }

    return result.rows[0];
  },

};
