const websiteController = require('./website');
const websiteAuth = require('./website/auth');
const userController = require('./api/user');
const userAdminUserController = require('./api/userAdmin/userController');

module.exports = {
  websiteController,
  websiteAuth,
  userController,
  userAdminUserController,
};
