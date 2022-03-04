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

  /**
   * UserAdmin controller to update a company
   * ExpressMiddleware signature
   * @param {object} req Express req.object
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async update(req, res) {
    const companyUpdate = await companyAdminDatamapper.update(req.params.id, req.body);
    return res.json(companyUpdate);
  },

  /**
   * UserAdmin controller to delete a company
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id
   * @param {object} res Express response object
   * @returns {object} Route API JSON response
   */
  async delete(req, res) {
    const companyDelete = await companyAdminDatamapper.delete(req.params.id);

    return res.status(200).json({
      isDeleted: companyDelete,
      statusCode: 200,
      message: 'Entreprise supprimée',
    });
  },

};

module.exports = controller;
