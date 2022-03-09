const client = require('../../config/database');

module.exports = {
  /**
   * Search if SSN already exist in db
   * @param {number} userEmail - User Email to find
   * @returns {boolean|ApiError} - Return boolean or ApiError if userEmail not found
   */
  async getEmail(userEmail) {
    const result = await client.query('SELECT * FROM "employee" WHERE email = $1', [userEmail]);

    return result.rows[0];
  },

};
