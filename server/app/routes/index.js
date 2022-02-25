const express = require('express');
const websiteRouter = require('./website');
const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

router.use('/', websiteRouter);

router.use((err, _, response, next) => {
  errorHandler(err, response, next);
});

module.exports = router;
