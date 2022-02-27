const express = require('express');

const { websiteController } = require('../../controllers');

const controllerHandler = require('../../helpers/websiteControllerHandler');
const { WebsiteError } = require('../../helpers/errorHandler');

const router = express.Router();

router.get('/', controllerHandler(websiteController.homePage));

router.use(() => {
  throw new WebsiteError(404, 'Page introuvable');
});

module.exports = router;
