const emailValidator = require('email-validator');
const jwt = require('jsonwebtoken');
// // ? const bcrypt = require('bcryptjs');
// const { generateToken } = require('../../helpers/generateToken');
// const authDatamapper = require('../../models/website/auth');
const { WebsiteError } = require('../../helpers/errorHandler');
const sendResetPasswordLink = require('../../helpers/sendResetPasswordLink');

const forgotPasswordDatamapper = require('../../models/website/forgotPassword');
const { ApiError } = require('../../helpers/errorHandler');

const controller = {
  async forgotPassword(req, res) {
    const { email } = req.body;

    if (!email) {
      throw new WebsiteError(400, 'L\'email est requis');
    }

    const isEmailValid = emailValidator.validate(email);

    if (!isEmailValid) {
      throw new WebsiteError(400, 'Cet email n\'est pas valide');
    }
    const user = await forgotPasswordDatamapper.getEmail(email);

    if (!user) {
      throw new ApiError(404, 'Utilisateur non enregistré');
    }

    const secret = process.env.JWT_SECRET + user.password;
    const payload = {
      id: user.id,
      email: user.email,
    };
    const token = jwt.sign(payload, secret, { expiresIn: '15m' });
    const link = `http://localhost:${process.env.PORT}/reset-password/${user.id}/${token}`;

    sendResetPasswordLink(email, user.firstname, user.lastname, link);

    console.log(link);
    res.send('Password reset link has been sent to ur email...');
  },
};

module.exports = controller;
