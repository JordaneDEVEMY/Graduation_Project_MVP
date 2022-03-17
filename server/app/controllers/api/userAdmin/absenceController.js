const absenceAdminDatamapper = require('../../../models/userAdmin/absence');
const { ApiError } = require('../../../helpers/errorHandler');

const controller = {
  /**
   * UserAdmin controller to get all absences
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getAll(req, res) {
    const absences = await absenceAdminDatamapper.findAll();

    if (!absences) {
      throw new ApiError(404, 'Absences not found');
    }

    return res.json(absences);
  },

};

module.exports = controller;
