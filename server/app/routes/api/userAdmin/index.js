const express = require('express');

const userRouter = require('./user');
const siteRouter = require('./site');

const { ApiError } = require('../../../helpers/errorHandler');

const router = express.Router();

router.use('/user', userRouter);
router.use('/site', siteRouter);

router.use(() => {
  throw new ApiError(404, 'Page introuvable');
});

module.exports = router;
