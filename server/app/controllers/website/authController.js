const emailValidator = require('email-validator');
// ? const bcrypt = require('bcryptjs');
const { generateToken } = require('../../helpers/generateToken');
const authDatamapper = require('../../models/website/auth');
const { WebsiteError } = require('../../helpers/errorHandler');
const { sendResetLink } = require('../../helpers/sendResetLink');

const controller = {
  /**
   * Login action
   * ExpressMiddleware signature
   * @param {object} req Express request object : {email, password}
   * @param {object} res Express response object
   * @returns {user} Route API JSON response
   */
  async loginAction(req, res) {
    const { email, password } = req.body;

    const isEmailValid = emailValidator.validate(email);

    if (!email || !password) {
      throw new WebsiteError(400, 'L\'email et le mot de passe sont requis');
    }

    if (!isEmailValid) {
      throw new WebsiteError(400, 'Cet email n\'est pas valide');
    }

    const user = await authDatamapper.findOne(req.body);

    // ? if (user && (await bcrypt.compare(password, user.password))) {
    if (user) {
      res.json({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        avatar: user.avatar,
        role_application: user.role_application,
        token: generateToken(user.id),
      });
    } else {
      throw new WebsiteError(422, 'Email et/ou mot de passe invalide');
    }
  },

  /**
   * Forgot password action
   * ExpressMiddleware signature
   * @param {object} req Express request object
   * @param {object} res Express response object
   * @returns {user} Route API JSON response
   */
  async forgotPassword(req, res) {
    const { email } = req.body;

    const isEmailValid = emailValidator.validate(email);

    if (!email) {
      throw new WebsiteError(400, 'L\'email est requis');
    }

    if (!isEmailValid) {
      throw new WebsiteError(400, 'Cet email n\'est pas valide');
    }

    const user = await authDatamapper.findForgotOne(req.body.email);

    // ? if (user && (await bcrypt.compare(password, user.password))) {
    if (user) {
      const request = {
        id: user.id,
        email: user.email,
      };

      // createResetRequest(request);
      sendResetLink(user.email, user.id);
    } else {
      throw new WebsiteError(422, 'Email et/ou mot de passe invalide');
    }

    return res.status(200).json;
  },
};

module.exports = controller;
