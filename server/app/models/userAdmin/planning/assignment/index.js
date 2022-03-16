/* eslint-disable max-len */
const client = require('../../../../config/database');
const { ApiError } = require('../../../../helpers/errorHandler');

module.exports = {
  /**
   * Find all users
   * @returns {User|undefined} - response of all users or undefined if no users found
   */
  async findAll() {
    const result = await client.query('SELECT * FROM "assignment" ORDER BY "position";');

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Aucune affectation trouvée');
    }

    return result.rows;
  },

  /**
   * Find an User by his id
   * @param {number} userId - User ID
   * @returns {User|undefined} - REST response of an user or undefined if no user found
   */
  async findByPk(userId) {
    const result = await client.query(
      `
      SELECT * FROM get_user_by_admin
      WHERE id = $1;
      `,
      [userId],
    );

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet utilisateur n\'existe pas');
    }

    return result.rows[0];
  },

  /**
   * Insert User
   * @param {object} user - Body request with email and password required
   * @returns {UserCreate} - Return the new user
   */
  async insert(user) {
    const qualificationId = await client.query('SELECT * FROM "employee_qualification" WHERE "label" = $1', [user.qualification_label]);

    if (qualificationId.rowCount === 0) {
      throw new ApiError(400, 'Cette qualification n\'existe pas');
    }

    const userToCreate = await client.query(
      `
        INSERT INTO "employee" 
        (
          "firstname",
          "lastname",
          "email",
          "password",
          "phone_number",
          "mobile_number",
          "address",
          "zip_code",
          "date_of_birth",
          "social_security_number",
          "starting_date",
          "fonction",
          "avatar",
          "role_application",
          "employee_qualification_id"
        )
        VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15
        )
        RETURNING 
        "id",
        "firstname",
        "lastname",
        "email",
        "password",
        "phone_number",
        "mobile_number",
        "address",
        "zip_code",
        "date_of_birth",
        "social_security_number",
        "starting_date",
        "fonction",
        "avatar",
        "role_application",
        "employee_qualification_id",
        "created_at";`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.phone_number,
        user.mobile_number,
        user.address,
        user.zip_code,
        user.date_of_birth,
        user.social_security_number,
        user.starting_date,
        user.fonction,
        user.avatar,
        user.role_application,
        qualificationId.rows[0].id,
      ],
    );

    Object.assign(userToCreate.rows[0], { qualification_label: qualificationId.rows[0].label });

    return userToCreate.rows[0];
  },

  /**
   * Update User
   * @param {number} userId - User ID
   * @param {object} user - Body request with email and password required
   * @returns {UserUpdate|ApiError} - Return updated user or ApiError if user not found
   */
  async update(userId, user) {
    const result = await client.query('SELECT * FROM "employee" WHERE "id" = $1', [userId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet utilisateur n\'existe pas');
    }

    const qualificationId = await client.query('SELECT * FROM "employee_qualification" WHERE "label" = $1', [user.qualification_label]);

    if (qualificationId.rowCount === 0) {
      throw new ApiError(400, 'Cette qualification n\'existe pas');
    }

    const userToSave = await client.query(
      `
      UPDATE "employee" 
      SET 
        "firstname" = $2,
        "lastname" = $3,
        "email" = $4,
        "phone_number" = $5,
        "mobile_number" = $6,
        "address" = $7,
        "zip_code" = $8,
        "date_of_birth" = $9,
        "social_security_number" = $10,
        "starting_date" = $11,
        "fonction" = $12,
        "avatar" = $13,
        "role_application" = $14,
        "employee_qualification_id" = $15,
        "updated_at" = NOW()
      WHERE "id"= $1
      RETURNING 
        "firstname",
        "lastname",
        "email",
        "phone_number",
        "mobile_number",
        "social_security_number",
        "date_of_birth",
        "address",
        "zip_code",
        "starting_date",
        "avatar",
        "fonction",
        "role_application",
        "employee_qualification_id",
        "updated_at";`,
      [
        userId,
        user.firstname,
        user.lastname,
        user.email,
        user.phone_number,
        user.mobile_number,
        user.address,
        user.zip_code,
        user.date_of_birth,
        user.social_security_number,
        user.starting_date,
        user.fonction,
        user.avatar,
        user.role_application,
        qualificationId.rows[0].id,
      ],
    );

    Object.assign(userToSave.rows[0], { qualification_label: qualificationId.rows[0].label });

    // ? Standby Code for update fonction in SQL
    // const userToUpdate = result.rows[0];
    // const userUpdated = { ...userToUpdate, ...user };

    // const userToSave = await client.query('', [userUpdated]);

    return userToSave.rows[0];
  },

  /**
   * Remove User
   * @param {number} userId - User ID
   * @returns {boolean|ApiError} - Return boolean or ApiError if user not found
   */
  async delete(userId) {
    const result = await client.query('SELECT * FROM "employee" WHERE "id" = $1;', [userId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Cet utilisateur n\'existe pas');
    }

    const userToDelete = await client.query('DELETE FROM "employee" WHERE "id" = $1;', [userId]);

    return !!userToDelete.rowCount;
  },

  /**
   * Search if SSN already exist in db
   * @param {number} userSsn - User Ssn to find
   * @returns {boolean|ApiError} - Return boolean or ApiError if userSsn not found
   */
  async getSsn(userSsn) {
    const result = await client.query('SELECT social_security_number FROM "employee" WHERE social_security_number = $1', [userSsn]);

    if (result.rowCount > 0) {
      throw new ApiError(400, 'Le numéro de sécurité social est déjà affecté à un autre salarié');
    }

    return !result.rowCount;
  },

  /**
   * Search if SSN already exist in db
   * @param {number} userEmail - User Email to find
   * @returns {boolean|ApiError} - Return boolean or ApiError if userEmail not found
   */
  async getEmail(userEmail) {
    const result = await client.query('SELECT email FROM "employee" WHERE email = $1', [userEmail]);

    if (result.rowCount > 0) {
      throw new ApiError(400, 'L\'email est déjà affecté à un autre salarié');
    }

    return !result.rowCount;
  },
};
