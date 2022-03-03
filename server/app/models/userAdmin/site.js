const client = require('../../config/database');
const { ApiError } = require('../../helpers/errorHandler');

/**
 * @typedef {object} SiteInDatabase
 * @property {number} id - id
 * @property {string} name - Site name
 * @property {string} address - Site address
 * @property {number} zip_code - Site zip code
 * @property {string} manager_name - Site manager name
 * @property {number} estimated_duration - Site estimated duration
 * @property {number} company_id - Site company id owner
 */

/**
 * @typedef {object} Site
 * @property {string} name - Site name
 * @property {string} address - Site address
 * @property {number} zip_code - Site zip code
 * @property {string} manager_name - Site manager name
 * @property {number} estimated_duration - Site estimated duration
 * @property {number} company_id - Site company id owner
 */
module.exports = {
  /**
   * Find a Site by his id
   * @param {number} siteId - Site ID
   * @returns {Site|ApiError} - REST response of Site or ApiError if no site found
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

  /**
   * Update Site
   * @param {number} siteId - Site ID
   * @param {object} site - Body request
   * @returns {Site|ApiError} - Return updated site or ApiError if site not found
   */
  async update(siteId, site) {
    const result = await client.query('SELECT * FROM "site" WHERE "id" = $1', [siteId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Ce site n\'existe pas');
    }

    const siteToSave = await client.query(
      `
      UPDATE "site" 
      SET 
        "name" = $2,
        "address" = $3,
        "zip_code" = $4,
        "manager_name" = $5,
        "estimated_duration" = $6,
        "company_id" = $7,
        "updated_at" = NOW()
      WHERE "id"= $1
      RETURNING *;
      `,
      [
        siteId,
        site.name,
        site.address,
        site.zip_code,
        site.manager_name,
        site.estimated_duration,
        site.company_id,
      ],
    );

    return siteToSave.rows[0];
  },
};
