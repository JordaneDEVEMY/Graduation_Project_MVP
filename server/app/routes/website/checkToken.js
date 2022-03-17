const express = require('express');

const validate = require('../../validation');
const checkTokenSchema = require('../../validation/checkTokenSchema');

const { websiteAuth } = require('../../controllers');
const controllerHandler = require('../../helpers/websiteControllerHandler');

const router = express.Router();

router
  .route('/')
  /**
   * POST /check-token
   * @summary Connect on website
   * @tags 1.Authentification
   * @param {string} request.body.required - Token
   * @return {AuthUser} 200 - success response - application/json
   * @return {WebsiteError} 400 - Bad request response - application/json
   * @return {WebsiteError} 401 - Invalid Token - application/json
   * @return {WebsiteError} 500 - Internal server error - application/json
   */
  .post(validate('body', checkTokenSchema), controllerHandler(websiteAuth.checkTokenAction));

module.exports = router;
