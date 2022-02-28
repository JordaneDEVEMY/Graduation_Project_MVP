const express = require('express');

const validate = require('../../validation');
const userSchema = require('../../validation/userSchema');

const { userController } = require('../../controllers');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/:id(\\d+)')
  /**
   * GET /user/{id}
   * @summary Get one user
   * @tags User
   * @param {number} id.path.required - User identifier
   * @return {User} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .get(controllerHandler(userController.getOne));

router
  .route('/:id(\\d+)/profil')
  /**
   * PATCH /user/{id}/profil
   * @summary Update User profile
   * @tags User
   * @param {number} id.path.required - User identifier
   * @return {User} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .patch(validate('body', userSchema), controllerHandler(userController.update));

module.exports = router;
