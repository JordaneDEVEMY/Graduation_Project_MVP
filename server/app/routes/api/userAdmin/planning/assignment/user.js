const express = require('express');

const validate = require('../../../../../validation');
const userAssignmentSchema = require('../../../../../validation/userAdmin/planning/createAssignment');

const { assignmentUserController } = require('../../../../../controllers');

const controllerHandler = require('../../../../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/:id(\\d+)')
  /**
   * POST /api/admin/planning/assignment/user/{id}
   * @summary Create User assignment
   * @tags 6.UserAdmin - Planning CRUD section
   * @param {string} id.path.required - User Identifier
   * @return {TODOJSDOC} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Week not found - application/json
   */
  .post(validate('body', userAssignmentSchema), controllerHandler(assignmentUserController.create));

module.exports = router;
