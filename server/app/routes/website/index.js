const express = require('express');

const { websiteController, websiteAuth } = require('../../controllers');

const controllerHandler = require('../../helpers/websiteControllerHandler');
const { WebsiteError } = require('../../helpers/errorHandler');

const router = express.Router();

router.get('/', controllerHandler(websiteController.homePage));

router.get('/login', controllerHandler(websiteAuth.loginAction));

router.use(() => {
  throw new WebsiteError(404, 'Page introuvable');
});

module.exports = router;
