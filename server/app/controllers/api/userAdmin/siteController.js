const siteAdminDatamapper = require('../../../models/userAdmin/site');
const { ApiError } = require('../../../helpers/errorHandler');

const controller = {
  /**
   * UserAdmin controller to get a site
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getOne(req, res) {
    const site = await siteAdminDatamapper.findByPk(req.params.id);

    if (!site) {
      throw new ApiError(404, 'Site introuvable');
    }

    return res.json(site);
  },
};

module.exports = controller;
