const emailValidator = require('email-validator');
const authDatamapper = require('../../models/website/auth');
const { WebsiteError } = require('../../helpers/errorHandler');

const controller = {

  /**
   * Login action
   * ExpressMiddleware signature
   * @param {object} req Express request object : {email, password}
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async loginAction(req, res) {
    const isEmailValid = emailValidator.validate(req.body.email);

    if (!req.body.email) {
      return { error: 'L\'email obligatoire' };
    }

    if (!isEmailValid) {
      return { error: 'Cet email n\'est pas valide' };
    }

    if (!req.body.password) {
      return { error: 'Le mot de passe est obligatoire' };
    }

    const user = await authDatamapper.findOne(req.body.email, req.body.password);

    if (!user) {
      throw new WebsiteError(401, 'Email et/ou mot de passe invalide');
    }

    return res.json(user);
  },
};

module.exports = controller;
