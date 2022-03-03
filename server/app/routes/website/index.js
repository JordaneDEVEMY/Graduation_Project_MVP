const express = require('express');

const authRouter = require('./auth');
const { websiteController } = require('../../controllers');

const controllerHandler = require('../../helpers/websiteControllerHandler');
const { WebsiteError } = require('../../helpers/errorHandler');

const router = express.Router();

router.all('/', controllerHandler(websiteController.home));

router.use('/login', authRouter);

router.use(() => {
  throw new WebsiteError(404, 'Page introuvable');
});

module.exports = router;
