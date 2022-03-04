const express = require('express');

// const validate = require('../../../validation');
// const Schema = require('../../../validation/userAdmin/site');

const { userAdminPlanningController } = require('../../../controllers');

const controllerHandler = require('../../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/:id(\\d+)')
  /**
   * GET /api/admin/planning/{id}
   * @summary Get one week of planning information
   * @tags 6.UserAdmin - Planning CRUD section
   * @param {number} id.path.required - Week identifier
   * @return {TODO !!!!!!!!!!!!} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Week not found - application/json
   */
  .get(controllerHandler(userAdminPlanningController.getOne));

module.exports = router;
