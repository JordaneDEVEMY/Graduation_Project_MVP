const express = require('express');

const { websiteAuth } = require('../../controllers');
const controllerHandler = require('../../helpers/websiteControllerHandler');

const router = express.Router();

router
  .route('/')
  /**
   * POST /login
   * @summary Connect on website
   * @tags Authentification
   * @param {User} user
   * @return {User} 200 - success response - application/json
   * @return {WebsiteError} 400 - Bad request response - application/json
   * @return {WebsiteError} 422 - Incorrect email/password association - application/json
   * @return {WebsiteError} 500 - Internal server error - application/json
   */
  .post(controllerHandler(websiteAuth.loginAction));

module.exports = router;
