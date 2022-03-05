const planningAdminDatamapper = require('../../../models/userAdmin/planning');
const { ApiError } = require('../../../helpers/errorHandler');

const dateFunctions = require('../../../helpers/dateFunctions');

const controller = {
  /**
   * UserAdmin controller to get a week informations
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getOne(req, res) {
    const { slugYearWeekId } = req.params;
    const yearId = slugYearWeekId.substring(0, 4);
    const weekId = slugYearWeekId.substring(5, 7);

    const period = dateFunctions.getWeekPeriod(yearId, weekId);

    if (!period) {
      throw new ApiError(404, `Il n'y a pas de semaine ${weekId} en ${yearId}`);
    }

    const monday = period.substring(0, 10);
    const sunday = period.substring(14, 24);

    const week = await planningAdminDatamapper.findByDates(monday, sunday);

    if (!week) {
      throw new ApiError(404, 'Semaine introuvable');
    }

    return res.json(week);
  },
};

module.exports = controller;
