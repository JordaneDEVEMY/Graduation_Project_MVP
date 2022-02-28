const express = require('express');

const validate = require('../../validation');
const authSchema = require('../../validation/authConnectionSchema');

const { websiteAuth } = require('../../controllers');
const controllerHandler = require('../../helpers/websiteControllerHandler');

const router = express.Router();

router
  .route('/')
  /**
   * POST /login
   * @summary Connect on website
   * @tags Authentification
   * @return {Category} 200 - success response - application/json
  * @return {WebsiteError} 400 - Bad request response - application/json
  * @return {WebsiteError} 404 - Category not found - application/json
   */
  .post(validate('body', authSchema), controllerHandler(websiteAuth.loginAction));

module.exports = router;
