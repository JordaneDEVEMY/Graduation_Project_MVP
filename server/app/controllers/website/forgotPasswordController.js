// const emailValidator = require('email-validator');
// // ? const bcrypt = require('bcryptjs');
// const { generateToken } = require('../../helpers/generateToken');
// const authDatamapper = require('../../models/website/auth');
// const { WebsiteError } = require('../../helpers/errorHandler');
// const { sendResetLink } = require('../../helpers/sendResetLink');

const jwt = require('jsonwebtoken');

const forgotPasswordDatamapper = require('../../models/website/forgotPassword');
const { ApiError } = require('../../helpers/errorHandler');

const controller = {
  async resetPassword(req, res) {
    const { email } = req.body;

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
    const link = `http://localhost:3000/reset-password/${user.id}/${token}`;

    console.log(link);
    res.send(`Password reset at ${link}`);
  },
};

module.exports = controller;
