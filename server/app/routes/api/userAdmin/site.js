const express = require('express');

const validate = require('../../../validation');
const sitePatchSchema = require('../../../validation/userAdmin/site/sitePatchSchema');
// const siteCreateSchema = require('../../../validation/userAdmin/site/siteCreateSchema');

const { userAdminSiteController } = require('../../../controllers');

const controllerHandler = require('../../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/:id(\\d+)')
  /**
   * GET /api/admin/site/{id}
   * @summary Get one site
   * @tags userAdmin - site CRUD section
   * @param {number} id.path.required - site identifier
   * @return {Site} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - site not found - application/json
   */
  .get(controllerHandler(userAdminSiteController.getOne))

module.exports = router;
