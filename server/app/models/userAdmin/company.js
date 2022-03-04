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

  /**
   * Update Company
   * @param {number} companyId - Company ID
   * @param {object} company - Body request
   * @returns {CompanyInDatabase|ApiError} - Return updated company or ApiError if company not found
   */
  async update(companyId, company) {
    const result = await client.query('SELECT * FROM "company" WHERE "id" = $1', [companyId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet entreprise n\'existe pas');
    }

    const companyToSave = await client.query(
      `
      UPDATE "company" 
      SET 
        "name" = $2,
        "address" = $3,
        "zip_code" = $4,
        "type" = $5,
        "updated_at" = NOW()
      WHERE "id"= $1
      RETURNING *;
      `,
      [
        companyId,
        company.name,
        company.address,
        company.zip_code,
        company.type,
      ],
    );

    return companyToSave.rows[0];
  },

  /**
   * Remove company
   * @param {number} companyId - Company ID
   * @returns {boolean|ApiError} - Return boolean or ApiError if company not found
   */
  async delete(companyId) {
    const result = await client.query('SELECT * FROM "company" WHERE "id" = $1;', [companyId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cette entreprise n\'existe pas');
    }

    const companyToDelete = await client.query('DELETE FROM "company" WHERE "id" = $1;', [companyId]);

    return !!companyToDelete.rowCount;
  },

};
