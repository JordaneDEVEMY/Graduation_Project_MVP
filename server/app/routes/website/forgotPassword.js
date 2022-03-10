const express = require('express');

// TODO :
// const validate = require('../../validation');
// const authSchema = require('../../validation/authConnectionSchema');

const { forgotPasswordController } = require('../../controllers');
const controllerHandler = require('../../helpers/websiteControllerHandler');

const router = express.Router();

router
  .route('/')
  // ! .get only for back-end dev devlopment = No docs on swagger
  .get((req, res) => {
    res.render('forgot-password', { title: "O'lleks - API" });
  })
  /**
   * POST /forgot-password
   * @summary Forgot password to connect on website
   * @tags 1.Authentification
   * @param {ForgotPassword} request.body.required - User email
   * @return {string} 200 - success response - application/json
   * @return {WebsiteError} 400 - Bad request response - application/json
   * @return {WebsiteError} 422 - Incorrect email - application/json
   * @return {WebsiteError} 500 - Internal server error - application/json
   */
  .post(controllerHandler(forgotPasswordController.forgotPassword));

module.exports = router;
