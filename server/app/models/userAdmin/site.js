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
 * @property {number} created_at - Db timestamptz of create
 * @property {number} updated_at - Db timestamptz of update
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

/**
 * @typedef {object} SiteDelete
 * @property {boolean} isDeleted - Status
 * @property {number} statusCode - HTTP Status code
 * @property {string} message - Status message
 */

module.exports = {
  /**
   * Find all sites
   * @returns {Site|ApiError} - response of all sites or ApiError if no sites found
   */
  async findAll() {
    const result = await client.query(
      `
        SELECT * FROM "site";
      `,
    );

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Aucun site trouvé');
    }

    return result.rows;
  },

  /**
   * Find a site by his id
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
   * Insert Site
   * @param {object} site - Body request required
   * @returns {SiteInDatabase} - Return the new site
   */
  async insert(site) {
    const siteToCreate = await client.query(
      `
      INSERT INTO "site" 
      (
        "name",
        "address",
        "zip_code",
        "manager_name",
        "estimated_duration",
        "company_id"
      )
      VALUES (
        $1, $2, $3, $4, $5, $6
      )
      RETURNING *;`,
      [
        site.name,
        site.address,
        site.zip_code,
        site.manager_name,
        site.estimated_duration,
        site.company_id,
      ],
    );

    return siteToCreate.rows[0];
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

  /**
   * Remove site
   * @param {number} siteId - Site ID
   * @returns {boolean|ApiError} - Return boolean or ApiError if site not found
   */
  async delete(siteId) {
    const result = await client.query('SELECT * FROM "site" WHERE "id" = $1;', [siteId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Ce site n\'existe pas');
    }

    const siteToDelete = await client.query('DELETE FROM "site" WHERE "id" = $1;', [siteId]);

    return !!siteToDelete.rowCount;
  },

  /**
   * Search if company id already exist in db
   * @param {number} companyId - company id PK to find
   * @returns {boolean|ApiError} - Return boolean or ApiError if company id PK not found
   */
  async getCompanyId(companyId) {
    const result = await client.query('SELECT * FROM "company" WHERE "id" = $1', [companyId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'L\'id de la société n\'existe pas');
    }

    return result.rows[0];
  },
};
