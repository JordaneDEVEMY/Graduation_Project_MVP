const websiteController = require('./website');
const websiteAuth = require('./website/auth');
const userController = require('./api/user');
const userAdminUserController = require('./api/userAdmin/userController');
const userAdminSiteController = require('./api/userAdmin/siteController');
const userAdminCompanyController = require('./api/userAdmin/companyController');
const userAdminPlanningController = require('./api/userAdmin/planningController');

module.exports = {
  websiteController,
  websiteAuth,
  userController,
  userAdminUserController,
  userAdminSiteController,
  userAdminCompanyController,
  userAdminPlanningController,
};
