const express = require('express');

// TODO :
// const validate = require('../../validation');
// const authSchema = require('../../validation/authConnectionSchema');

const { resetPasswordController } = require('../../controllers');
const controllerHandler = require('../../helpers/websiteControllerHandler');

const router = express.Router();

router
  .route('/:id/:token')
  // /**
  //  * POST /forgot-password
  //  * @summary Forgot password to connect on website
  //  * @tags 1.Authentification
  //  * @param {ForgotInput} request.body.required - User email/password
  //  * @return {AuthUser} 200 - success response - application/json
  //  * @return {WebsiteError} 400 - Bad request response - application/json
  //  * @return {WebsiteError} 422 - Incorrect email - application/json
  //  * @return {WebsiteError} 500 - Internal server error - application/json
  //  */
  .get(controllerHandler(resetPasswordController.passwordToReset))
  // TODO JSDOC
  .post(controllerHandler(resetPasswordController.resetPassword));

module.exports = router;
