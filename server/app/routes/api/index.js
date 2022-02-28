const express = require('express');

const userRouter = require('./user');

const { ApiError } = require('../../helpers/errorHandler');

const router = express.Router();

router.use('/', userRouter);

router.use(() => {
  throw new ApiError(404, 'Page introuvable');
});

module.exports = router;
