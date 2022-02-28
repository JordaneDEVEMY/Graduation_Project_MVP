const express = require('express');
const websiteRouter = require('./website');
const websiteAuth = require('./website/auth');
const apiRouter = require('./api');

const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

router.use('/', websiteRouter);
router.use('/login', websiteAuth);
router.use('/user', apiRouter);

router.use((err, _, response, next) => {
  errorHandler(err, response, next);
});

module.exports = router;
