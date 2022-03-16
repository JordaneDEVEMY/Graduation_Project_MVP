const express = require('express');
// ? NOT IN MVP - const cache = require('../../../helpers/redisCache');

const { userAdminAbsenceController } = require('../../../controllers');

const controllerHandler = require('../../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/')
  /**
   * GET /api/admin/absence
   * @summary Get all absences
   * @tags 8.UserAdmin - absence CRUD section
   * @return {array.<Absence>} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .get(controllerHandler(userAdminAbsenceController.getAll));

module.exports = router;
