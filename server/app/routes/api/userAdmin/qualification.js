const express = require('express');
// ? const cache = require('../../../helpers/redisCache');

// const validate = require('../../../validation');
// const qualificationSchema = require('../../../validation/userAdmin/qualification');

const { userAdminQualificationController } = require('../../../controllers');

const controllerHandler = require('../../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/')
  /**
   * GET /api/admin/qualification
   * @summary Get all qualifications
   * @tags 7.UserAdmin - qualification CRUD section
   * @return {array.<Qualification>} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .get(controllerHandler(userAdminQualificationController.getAll));

module.exports = router;
