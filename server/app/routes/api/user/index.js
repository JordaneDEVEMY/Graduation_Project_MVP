const express = require('express');

const validate = require('../../../validation');
const userSchema = require('../../../validation/userSchema');

const { userController } = require('../../../controllers');
const controllerHandler = require('../../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/:id(\\d+)')
  /**
   * GET /api/user/{id}
   * @summary Get one user
   * @tags 2.User
   * @param {number} id.path.required - User identifier
   * @return {RestUser} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .get(controllerHandler(userController.getOne));

router
  .route('/:id(\\d+)/profil')
  /**
   * PATCH /api/user/{id}/profil
   * @summary Update one user profile
   * @tags 2.User
   * @param {number} id.path.required - User identifier
   * @param {AuthProfilUpdate} request.body.required - User email/password to update
   * @return {UserUpdate} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .patch(validate('body', userSchema), controllerHandler(userController.update));

module.exports = router;
