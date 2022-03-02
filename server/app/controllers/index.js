const websiteController = require('./website');
const websiteAuth = require('./website/auth');
const userController = require('./api/user');
const userAdminController = require('./api/userAdmin');

module.exports = {
  websiteController,
  websiteAuth,
  userController,
  userAdminController,
};
