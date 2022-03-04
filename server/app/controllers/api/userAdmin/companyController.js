const companyAdminDatamapper = require('../../../models/userAdmin/company');
const { ApiError } = require('../../../helpers/errorHandler');

const controller = {
  /**
   * UserAdmin controller to get a company
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getOne(req, res) {
    const company = await companyAdminDatamapper.findByPk(req.params.id);

    if (!company) {
      throw new ApiError(404, 'Entreprise introuvable');
    }

    return res.json(company);
  },

};

module.exports = controller;
