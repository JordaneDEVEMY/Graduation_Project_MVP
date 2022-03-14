/* eslint-disable max-len */
const client = require('../../../../config/database');
const { ApiError } = require('../../../../helpers/errorHandler');

module.exports = {
  /**
   * Find all users
   * @returns {User|undefined} - response of all users or undefined if no users found
   */
  async findAll() {
    const result = await client.query('SELECT * FROM "assignment" ORDER BY "id";');

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Aucune affectation trouvée');
    }

    return result.rows;
  },
};
