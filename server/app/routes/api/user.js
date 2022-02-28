const express = require('express');

const { userController } = require('../../controllers');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/:id(\\d+)')
  /**
   * GET /users/{id}
   * @summary Get one user
   * @tags User
   * @param {number} id.path.required - User identifier
   * @return {User} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   * //! à compléter avant le PUSH !!!!!!
   */
  .get(controllerHandler(userController.getOne));
// TODO PATCH

module.exports = router;
