const client = require('../../config/database');
const { ApiError } = require('../../helpers/errorHandler');

/**
 * @typedef {object} CompanyInDatabase
 * @property {number} id - id
 * @property {string} name - Company name
 * @property {string} address - Company address
 * @property {number} zip_code - Company zip code
 * @property {string} type - Company type
 * @property {string} created_at - Db timestamptz of create
 * @property {string} updated_at - Db timestamptz of update
 */

/**
 * @typedef {object} Company
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
   * Find all companies
   * @returns {Company|ApiError} - response of companies or ApiError if no companies found
   */
  async findAll() {
    const result = await client.query(
      `
        SELECT * FROM "company";
      `,
    );

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Aucune entreprise trouvée');
    }

    return result.rows;
  },

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
      throw new ApiError(400, 'Cette entreprise n\'existe pas');
    }

    return result.rows[0];
  },

  /**
   * Insert Company
   * @param {object} company - Body request required
   * @returns {CompanyInDatabase} - Return the new company
   */
  async insert(company) {
    const companyToCreate = await client.query(
      `
      SELECT * FROM insert_company($1);`,
      [company],
    );

    return companyToCreate.rows[0];
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
      throw new ApiError(400, 'Cette entreprise n\'existe pas');
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

  /**
   * Search if company name already exist in db
   * @param {number} companyName - company name to find
   * @returns {string|ApiError} - Return email string or ApiError if company id PK not found
   */
  async findByName(companyName) {
    const result = await client.query('SELECT "name" FROM "company" WHERE "name" = $1', [companyName]);

    if (result.rowCount > 0) {
      throw new ApiError(400, 'Le nom de la société est déjà utilisé');
    }

    return !result.rowCount;
  },

  /**
   * Search if company id already exist in db
   * @param {number} companyAddress - company address to find
   * @returns {string|ApiError} - Return address string or ApiError if company id PK not found
   */
  async findByAddress(companyAddress) {
    const result = await client.query('SELECT "address" FROM "company" WHERE "address" = $1', [companyAddress]);

    if (result.rowCount > 0) {
      throw new ApiError(400, 'L\'adresse de la société est déjà utilisée');
    }

    return !result.rowCount;
  },
};
