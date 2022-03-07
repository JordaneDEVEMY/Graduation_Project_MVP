const planningAdminDatamapper = require('../../../models/userAdmin/planning');
const { ApiError } = require('../../../helpers/errorHandler');

const controller = {
  /**
   * UserAdmin controller to get a week informations
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getOne(req, res) {
    const week = await planningAdminDatamapper.findByPk(req.params.id);

    if (!week) {
      throw new ApiError(404, 'Semaine introuvable');
    }

    return res.json(week);
  },
};

module.exports = controller;
