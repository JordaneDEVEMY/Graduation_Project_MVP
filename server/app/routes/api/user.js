const express = require('express');

const { userController } = require('../../controllers');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router
  .route('/users')
  //TODO GET
  //TODO PATCH

module.exports = router;
