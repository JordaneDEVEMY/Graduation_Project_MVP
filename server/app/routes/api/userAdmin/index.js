const express = require('express');

const userRouter = require('./user');
const siteRouter = require('./site');
const companyRouter = require('./company');
const planningRouter = require('./planning');
const qualificationRouter = require('./qualification');

const { ApiError } = require('../../../helpers/errorHandler');

const router = express.Router();

router.use('/user', userRouter);
router.use('/site', siteRouter);
router.use('/company', companyRouter);
router.use('/planning', planningRouter);
router.use('/qualification', qualificationRouter);

router.use(() => {
  throw new ApiError(404, 'Page introuvable');
});

module.exports = router;
