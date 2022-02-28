const emailValidator = require('email-validator');
const authDatamapper = require('../../models/website/auth');
const { WebsiteError } = require('../../helpers/errorHandler');

const controller = {

  /**
   * Login action
   * ExpressMiddleware signature
   * @param {object} req Express request object : {email, password}
   * @param {object} res Express response object
   * @returns {user} Route API JSON response
   */
  async loginAction(req, res) {
    const isEmailValid = emailValidator.validate(req.body.email);

    if (!isEmailValid) {
      throw new WebsiteError(400, 'Cet email n\'est pas valide');
    }

    const user = await authDatamapper.findOne(req.body);

    if (!user) {
      throw new WebsiteError(422, 'Email et/ou mot de passe invalide');
    }

    return res.json(user);
  },
};

module.exports = controller;
