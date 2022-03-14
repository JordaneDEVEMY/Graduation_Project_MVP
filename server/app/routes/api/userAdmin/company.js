const express = require('express');
// ? const cache = require('../../../helpers/redisCache');

const validate = require('../../../validation');
const companySchema = require('../../../validation/userAdmin/company');

const { userAdminCompanyController } = require('../../../controllers');

const controllerHandler = require('../../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/')
/**
   * GET /api/admin/company
   * @summary Get all companies
   * @tags 5.UserAdmin - Company CRUD section
   * @return {array.<CompanyInDatabase>} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .get(controllerHandler(userAdminCompanyController.getAll))

  /**
   * POST /api/admin/company
   * @summary Create one company
   * @tags 5.UserAdmin - Company CRUD section
   * @param {Company} request.body.required - All for creating company
   * @return {CompanyInDatabase} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - company not found - application/json
   */
  .post(validate('body', companySchema), controllerHandler(userAdminCompanyController.create));

router
  .route('/:id(\\d+)')
  /**
   * GET /api/admin/company/{id}
   * @summary Get one company
   * @tags 5.UserAdmin - Company CRUD section
   * @param {number} id.path.required - Company identifier
   * @return {CompanyInDatabase} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - company not found - application/json
   */
  .get(controllerHandler(userAdminCompanyController.getOne))

  /**
   * PATCH /api/admin/company/{id}
   * @summary Update one company
   * @tags 5.UserAdmin - Company CRUD section
   * @param {number} id.path.required - company identifier
   * @param {Company} request.body.required - All for updating company
   * @return {CompanyInDatabase} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Company not found - application/json
   */
  .patch(validate('body', companySchema), controllerHandler(userAdminCompanyController.update))

/**
   * DELETE /api/admin/company/{id}
   * @summary Remove one company
   * @tags 5.UserAdmin - Company CRUD section
   * @param {number} id.path.required - company identifier
   * @return {CompanyDelete} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Company not found - application/json
   */
  .delete(controllerHandler(userAdminCompanyController.delete));

module.exports = router;
