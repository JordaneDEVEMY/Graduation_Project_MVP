const express = require('express');

const { websiteController, websiteAuth } = require('../../controllers');

const controllerHandler = require('../../helpers/websiteControllerHandler');
const { WebsiteError } = require('../../helpers/errorHandler');

const router = express.Router();

router.all('/', controllerHandler(websiteController.homePage));

router.use('/login', websiteAuth);

router.use(() => {
  throw new WebsiteError(404, 'Page introuvable');
});

module.exports = router;
