const express = require('express');
const cache = require('../../../helpers/redisCache');

const validate = require('../../../validation');
const siteSchema = require('../../../validation/userAdmin/site');

const { userAdminSiteController } = require('../../../controllers');

const controllerHandler = require('../../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/')
  /**
   * GET /api/admin/site
   * @summary Get all sites
   * @tags 4.UserAdmin - Site CRUD section
   * @return {array.<SiteInDatabase>} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   */
  .get(cache.route(), controllerHandler(userAdminSiteController.getAll))

  /**
   * POST /api/admin/site
   * @summary Create one site
   * @tags 4.UserAdmin - Site CRUD section
   * @param {Site} request.body.required - All for creating site
   * @return {SiteInDatabase} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - site not found - application/json
   */
  .post(cache.del(), validate('body', siteSchema), controllerHandler(userAdminSiteController.create));

router
  .route('/:id(\\d+)')
  /**
   * GET /api/admin/site/{id}
   * @summary Get one site
   * @tags 4.UserAdmin - Site CRUD section
   * @param {number} id.path.required - site identifier
   * @return {SiteInDatabase} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - site not found - application/json
   */
  .get(cache.route(), controllerHandler(userAdminSiteController.getOne))

  /**
   * PATCH /api/admin/site/{id}
   * @summary Update one site
   * @tags 4.UserAdmin - Site CRUD section
   * @param {number} id.path.required - site identifier
   * @param {Site} request.body.required - All for updating site
   * @return {SiteInDatabase} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Site not found - application/json
   */
  .patch(cache.del(), validate('body', siteSchema), controllerHandler(userAdminSiteController.update))

  /**
   * DELETE /api/admin/site/{id}
   * @summary Remove one site
   * @tags 4.UserAdmin - Site CRUD section
   * @param {number} id.path.required - site identifier
   * @return {SiteDelete} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Site not found - application/json
   */
  .delete(cache.del(), controllerHandler(userAdminSiteController.delete));

module.exports = router;
