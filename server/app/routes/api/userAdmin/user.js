const express = require('express');

const { websiteController } = require('../../../controllers');

const controllerHandler = require('../../../helpers/websiteControllerHandler');
const { WebsiteError } = require('../../../helpers/errorHandler');

const router = express.Router();

router.get('/', (req, res) => res.send('in development'));

router.use(() => {
  throw new WebsiteError(404, 'Page introuvable');
});

module.exports = router;
