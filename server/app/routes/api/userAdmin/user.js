const express = require('express');

const { userAdminController } = require('../../../controllers');

const controllerHandler = require('../../../helpers/apiControllerHandler');
const { ApiError } = require('../../../helpers/errorHandler');

const router = express.Router();

router.get('/', (req, res) => res.send('in development'));

router.use(() => {
  throw new ApiError(404, 'Page introuvable');
});

module.exports = router;
