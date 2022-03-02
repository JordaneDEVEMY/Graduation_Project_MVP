const express = require('express');

const userRouter = require('./user');

const { WebsiteError } = require('../../../helpers/errorHandler');

const router = express.Router();

router.use('/user', userRouter);

router.use(() => {
  throw new WebsiteError(404, 'Page introuvable');
});

module.exports = router;
