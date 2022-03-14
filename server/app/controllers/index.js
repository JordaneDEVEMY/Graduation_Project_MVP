const websiteController = require('./website');
const websiteAuth = require('./website/authController');
const forgotPasswordController = require('./website/forgotPasswordController');
const resetPasswordController = require('./website/resetPasswordController');
const userController = require('./api/user');
const userAdminUserController = require('./api/userAdmin/userController');
const userAdminSiteController = require('./api/userAdmin/siteController');
const userAdminCompanyController = require('./api/userAdmin/companyController');
const userAdminPlanningController = require('./api/userAdmin/planning/planningController');
const assignmentUserController = require('./api/userAdmin/planning/assignment/assignmentUserController');
const userAdminQualificationController = require('./api/userAdmin/qualificationController');
<<<<<<< HEAD
const userAdminUploadController = require('./api/userAdmin/uploadController');
=======
const userAdminAbsenceController = require('./api/userAdmin/absenceController');
>>>>>>> e4f1c12d586c48a0bcec91d7b82491ead4d79435

module.exports = {
  // == Website ==
  websiteController,
  websiteAuth,
  forgotPasswordController,
  resetPasswordController,
  // == API ==
  // - User -
  userController,
  // - User Admin -
  userAdminUserController,
  userAdminSiteController,
  userAdminCompanyController,
  userAdminPlanningController,
  assignmentUserController,
  userAdminQualificationController,
<<<<<<< HEAD
  userAdminUploadController,
=======
  userAdminAbsenceController,
>>>>>>> e4f1c12d586c48a0bcec91d7b82491ead4d79435
};
