const websiteController = require('./website');
const websiteAuth = require('./website/authController');
const forgotPasswordController = require('./website/forgotPasswordController');
const userController = require('./api/user');
const userAdminUserController = require('./api/userAdmin/userController');
const userAdminSiteController = require('./api/userAdmin/siteController');
const userAdminCompanyController = require('./api/userAdmin/companyController');
const userAdminPlanningController = require('./api/userAdmin/planningController');

module.exports = {
  websiteController,
  websiteAuth,
  forgotPasswordController,
  userController,
  userAdminUserController,
  userAdminSiteController,
  userAdminCompanyController,
  userAdminPlanningController,
};
