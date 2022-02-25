const { Router } = require('express');
const { websiteController } = require('../../controllers');

const router = Router();

//! Development fonctionnality
router.get('/', websiteController.homePage);

module.exports = router;
