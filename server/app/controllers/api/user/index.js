const userDatamapper = require('../../../models/user');
const { ApiError } = require('../../../helpers/errorHandler');

const controller = {
  /**
   * User controller to get a user with REST response
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url params id
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getOne(req, res) {
    const user = await userDatamapper.findByPk(req.params.id);

    if (!user) {
      throw new ApiError(404, 'Utilisateur introuvable');
    }

    return res.json(user);
  },
};

module.exports = controller;
