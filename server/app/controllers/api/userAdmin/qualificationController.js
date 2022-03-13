const qualificationAdminDatamapper = require('../../../models/userAdmin/qualification');
const { ApiError } = require('../../../helpers/errorHandler');

const controller = {
  /**
   * UserAdmin controller to get all qualifications
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getAll(req, res) {
    const qualifications = await qualificationAdminDatamapper.findAll();

    if (!qualifications) {
      throw new ApiError(404, 'Qualifications introuvables');
    }

    return res.json(qualifications);
  },

};

module.exports = controller;
