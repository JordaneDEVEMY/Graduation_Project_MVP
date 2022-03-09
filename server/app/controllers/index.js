const websiteController = require('./website');
const websiteAuth = require('./website/authController');
const forgotPasswordController = require('./website/forgotPasswordController');
const userController = require('./api/user');
const userAdminUserController = require('./api/userAdmin/userController');
const userAdminSiteController = require('./api/userAdmin/siteController');
const userAdminCompanyController = require('./api/userAdmin/companyController');
const userAdminPlanningController = require('./api/userAdmin/planning/planningController');
const assignmentUserController = require('./api/userAdmin/planning/assignment/assignmentUserController');

module.exports = {
  // == Website ==
  websiteController,
  websiteAuth,
  forgotPasswordController,
  // == API ==
  // - User -
  userController,
  // - User Admin -
  userAdminUserController,
  userAdminSiteController,
  userAdminCompanyController,
  userAdminPlanningController,
  assignmentUserController,
};
