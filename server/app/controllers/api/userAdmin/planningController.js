const planningAdminDatamapper = require('../../../models/userAdmin/planning');
const { ApiError } = require('../../../helpers/errorHandler');

const { getWeekPeriod, getWeekMonday, getDate } = require('../../../helpers/dateFunctions');

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

    const period = getWeekPeriod(yearId, weekId);

    if (!period) {
      throw new ApiError(404, `Il n'y a pas de semaine ${weekId} en ${yearId}`);
    }

    const monday = getWeekMonday(yearId, weekId);
    const sunday = getDate(monday).add(6, 'day').format('YYYY-MM-DD');

    const week = await planningAdminDatamapper.findByDates(monday, sunday);

    if (!week) {
      throw new ApiError(404, 'Semaine introuvable');
    }

    return res.json(week);
  },
};

module.exports = controller;
