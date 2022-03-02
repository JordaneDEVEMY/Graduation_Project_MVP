const express = require('express');

const validate = require('../../../validation');
const userSchema = require('../../../validation/userAdmin/userSchema');

const { userAdminUserController } = require('../../../controllers');

const controllerHandler = require('../../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/:id(\\d+)')
  /**
   * GET /api/admin/user/{id}
   * @summary Get one user
   * @tags UserAdmin
   * @param {number} id.path.required - User identifier
   * @return {User} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .get(controllerHandler(userAdminUserController.getOne))
  /**
   * PATCH /api/admin/user/{id}
   * @summary Update User profile
   * @tags UserAdmin
   * @param {number} id.path.required - User identifier
   * @param {AuthInput} request.body.required - User email/password to update
   * @return {UserUpdate} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .patch(validate('body', userSchema), controllerHandler(userAdminUserController.update));
module.exports = router;
