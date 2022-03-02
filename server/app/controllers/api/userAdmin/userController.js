const emailValidator = require('email-validator');
const userAdminDatamapper = require('../../../models/userAdmin/user');
const { ApiError } = require('../../../helpers/errorHandler');

const controller = {
  /**
   * User controller to get an user with REST response
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getOne(req, res) {
    const user = await userAdminDatamapper.findByPk(req.params.id);

    if (!user) {
      throw new ApiError(404, 'Utilisateur introuvable');
    }

    return res.json(user);
  },

  /**
   * User controller to update an user
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id and body params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async update(req, res) {
    const isEmailValid = emailValidator.validate(req.body.email);

    if (!isEmailValid) {
      throw new ApiError(400, 'Cet email n\'est pas valide');
    }

    const userUpdate = await userAdminDatamapper.update(req.params.id, req.body);
    return res.json(userUpdate);
  },
};

module.exports = controller;
