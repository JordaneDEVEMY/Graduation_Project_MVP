const express = require('express');

// TODO :
// const validate = require('../../validation');
// const authSchema = require('../../validation/authConnectionSchema');

const { resetPasswordController } = require('../../controllers');
const controllerHandler = require('../../helpers/websiteControllerHandler');

const router = express.Router();

router
  .route('/:id/:token')
  /**
   * GET /reset-password/{id}/{token}
   * @summary Reset password to connect on website
   * @tags 1.Authentification
   * @param {number} id.path.required - URL id
   * @param {string} token.path.required - URL token
   * @return {string} 200 - success response - application/json
   * @return {WebsiteError} 400 - Bad request response - application/json
   * @return {WebsiteError} 422 - Incorrect email - application/json
   * @return {WebsiteError} 500 - Internal server error - application/json
   */
  .get(controllerHandler(resetPasswordController.passwordToReset))
  /**
   * POST /reset-password/{id}/{token}
   * @summary Reset password to connect on website
   * @tags 1.Authentification
   * @param {number} id.path.required - URL id
   * @param {string} token.path.required - URL token
   * @param {ResetPassword} request.body.required - new password with new password confirmation
   * @return {UserWithPassword} 200 - success response - application/json
   * @return {WebsiteError} 400 - Bad request response - application/json
   * @return {WebsiteError} 422 - Incorrect email - application/json
   * @return {WebsiteError} 500 - Internal server error - application/json
   */
  .post(controllerHandler(resetPasswordController.resetPassword));

module.exports = router;
