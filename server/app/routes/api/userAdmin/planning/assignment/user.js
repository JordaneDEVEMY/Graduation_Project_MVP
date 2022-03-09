const express = require('express');

const validate = require('../../../../../validation');
const userSiteAssignmentSchema = require('../../../../../validation/userAdmin/planning/createSiteAssignment');

const { assignmentUserController } = require('../../../../../controllers');

const controllerHandler = require('../../../../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/')
  /**
   * POST /api/admin/planning/assignment/user
   * @summary Create User assignment in site_id OR absence_id
   * @tags 6.UserAdmin - Planning CRUD section
   * @param {AssignmentToCreateInSite} request.body.required - Assignment request
   * @return {Assignment} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Week not found - application/json
   */
  .post(validate('body', userSiteAssignmentSchema), controllerHandler(assignmentUserController.create));

module.exports = router;
