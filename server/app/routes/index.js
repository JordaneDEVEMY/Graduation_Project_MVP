const express = require('express');
const websiteRouter = require('./website');

const router = express.Router();

router.use('/', websiteRouter);

module.exports = router;
