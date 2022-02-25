const client = require('../../config/database');

module.exports = {

  async findOne(email, password) {
    const result = await client.query('SELECT * FROM "employee" WHERE "email" = $1 AND "password" = $2', [email, password]);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

};
