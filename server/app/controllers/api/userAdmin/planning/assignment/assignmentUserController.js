const userAssignmentDatamapper = require('../../../../../models/userAdmin/planning/assignment/user');
const userAdminDatamapper = require('../../../../../models/userAdmin/user');

const { ApiError } = require('../../../../../helpers/errorHandler');

const controller = {
  /**
   * UserAdmin controller to create an user assignment
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id and body params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async create(req, res) {
    // TODO: Sprint 3 après retour d'utilisation par les fronts
    // if (req.params.id !== employee.id) {
    // }

    const user = await userAdminDatamapper.findByPk(req.params.id);

    if (!user) {
      throw new ApiError(404, 'Utilisateur introuvable');
    }

    const absence = await userAssignmentDatamapper.findAbsenceById(req.body.absence_id);

    if (!absence) {
      throw new ApiError(404, 'Absence introuvable');
    }

    const site = await userAssignmentDatamapper.findSiteById(req.body.site_id);

    if (!site) {
      throw new ApiError(404, 'Site introuvable');
    }

    const userAssignment = await userAssignmentDatamapper.insert(req.body);

    return res.json(userAssignment);
  },

};

module.exports = controller;
