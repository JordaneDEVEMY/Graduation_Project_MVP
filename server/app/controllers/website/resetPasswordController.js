// const emailValidator = require('email-validator');
// // ? const bcrypt = require('bcryptjs');
// const { generateToken } = require('../../helpers/generateToken');
const jwt = require('jsonwebtoken');
const userAdminDatamapper = require('../../models/userAdmin/user');
// const { WebsiteError } = require('../../helpers/errorHandler');
// const { sendResetLink } = require('../../helpers/sendResetLink');

// const forgotPasswordDatamapper = require('../../models/website/forgotPassword');

const { ApiError } = require('../../helpers/errorHandler');

const controller = {
  async passwordToReset(req, res) {
    const { id, token } = req.params;

    const user = await userAdminDatamapper.findByPkReturnPassword(id);

    if (!user) {
      throw new ApiError(404, 'Utilisateur introuvable');
    }

    const secret = process.env.JWT_SECRET + user.password;

    // ? const payload = jwt.verify(token, secret);
    jwt.verify(token, secret);

    res.render('reset-password', { email: user.email });
  },

  async resetPassword(req, res) {
    const { id, token } = req.params;
    const { password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      throw new ApiError(400, 'Les mots de passes doivent être identiques');
    }

    const user = await userAdminDatamapper.findByPkReturnPassword(id);

    if (!user) {
      throw new ApiError(404, 'Utilisateur introuvable');
    }

    const secret = process.env.JWT_SECRET + user.password;

    // ? const payload = jwt.verify(token, secret);
    jwt.verify(token, secret);

    const userWithNewPassword = await userAdminDatamapper.updatePassword(id, password);

    res.json(userWithNewPassword);
  },

};

module.exports = controller;
