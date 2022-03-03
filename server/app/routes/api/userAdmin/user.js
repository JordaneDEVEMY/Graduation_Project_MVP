const express = require('express');

const validate = require('../../../validation');
const userPatchSchema = require('../../../validation/userAdmin/userPatchSchema');
const userCreateSchema = require('../../../validation/userAdmin/userCreateSchema');

const { userAdminUserController } = require('../../../controllers');

const controllerHandler = require('../../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/:id(\\d+)')
  /**
   * GET /api/admin/user/{id}
   * @summary Get one user
   * @tags UserAdmin - User CRUD section
   * @param {number} id.path.required - User identifier
   * @return {User} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .get(controllerHandler(userAdminUserController.getOne))

  /**
   * POST /api/admin/user/{id}
   * @summary Create one user
   * @tags UserAdmin - User CRUD section
   * @param {number} id.path.required - User identifier
   * @param {UserCreate} request.body.required - All informations for creating user
   * @return {User} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .patch(validate('body', userCreateSchema), controllerHandler(userAdminUserController.create))

  /**
   * PATCH /api/admin/user/{id}
   * @summary Update one user
   * @tags UserAdmin - User CRUD section
   * @param {number} id.path.required - User identifier
   * @param {User} request.body.required - User email/password to update
   * @return {User} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .patch(validate('body', userPatchSchema), controllerHandler(userAdminUserController.update))

  /**
   * DELETE /api/admin/user/{id}
   * @summary Delete one user
   * @tags UserAdmin - User CRUD section
   * @param {number} id.path.required - User identifier
   * @return {UserDelete} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .delete(controllerHandler(userAdminUserController.delete));
module.exports = router;
