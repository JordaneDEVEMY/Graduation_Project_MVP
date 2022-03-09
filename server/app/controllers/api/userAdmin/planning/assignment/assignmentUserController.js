const userAssignmentDatamapper = require('../../../../../models/userAdmin/planning/assignment/user');
const userAdminDatamapper = require('../../../../../models/userAdmin/user');
const siteAdminDatamapper = require('../../../../../models/userAdmin/site');
const absenceAdminDatamapper = require('../../../../../models/userAdmin/planning/assignment/absence');

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
    const user = await userAdminDatamapper.findByPk(req.body.employee_id);

    if (!user) {
      throw new ApiError(404, 'Utilisateur introuvable');
    }

    if (req.body.site_id) {
      const site = await siteAdminDatamapper.findByPk(req.body.site_id);

      if (!site) {
        throw new ApiError(404, 'Site introuvable');
      }
    }

    if (req.body.absence_id) {
      const absence = await absenceAdminDatamapper.findByPk(req.body.absence_id);

      if (!absence) {
        throw new ApiError(404, 'Absence introuvable');
      }
    }

    const userAssignment = await userAssignmentDatamapper.insert(req.body);

    return res.json(userAssignment);
  },

  /**
   * UserAdmin controller to update an user assignment
   * ExpressMiddleware signature
   * @param {object} req Express req.object
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async update(req, res) {
    const user = await userAdminDatamapper.findByPk(req.body.employee_id);

    if (!user) {
      throw new ApiError(404, 'Utilisateur introuvable');
    }

    if (req.body.site_id) {
      const site = await siteAdminDatamapper.findByPk(req.body.site_id);

      if (!site) {
        throw new ApiError(404, 'Site introuvable');
      }
    }

    if (req.body.absence_id) {
      const absence = await absenceAdminDatamapper.findByPk(req.body.absence_id);

      if (!absence) {
        throw new ApiError(404, 'Absence introuvable');
      }
    }

    const userAssignment = await userAssignmentDatamapper.update(req.params.id, req.body);

    return res.json(userAssignment);
  },
};

module.exports = controller;
