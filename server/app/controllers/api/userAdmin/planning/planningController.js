/* eslint-disable no-param-reassign */
const planningAdminDatamapper = require('../../../../models/userAdmin/planning/planning');
const { ApiError } = require('../../../../helpers/errorHandler');

const { getWeekPeriod, getWeekMonday, getDate } = require('../../../../helpers/dateFunctions');

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

    const absences = await planningAdminDatamapper.findByAbsenceDates(monday, sunday);

    if (!week) {
      throw new ApiError(404, 'Semaine introuvable');
    }

    if (!Array.isArray(week)) {
      // TODO: Sprint 3 - TESTING
      return;
    }

    const filteredWeek = [];

    /**
     * Function who delete starting_date and ending_date using only for SQL condition in a view
     * And who filter the array of assignment of the week without any company repetitions
     */
    week.forEach((item) => {
      delete item.starting_date;
      delete item.ending_date;

      const existing = filteredWeek.filter((value) => value.company_id === item.company_id);
      if (existing.length) {
        const existingIndex = filteredWeek.indexOf(existing[0]);
        filteredWeek[existingIndex].sites = filteredWeek[existingIndex].sites.concat(item.sites);
      } else {
        if (typeof item.sites === 'string') { item.sites = [item.sites]; }
        filteredWeek.push(item);
      }
    });

    absences.forEach((item) => {
      delete item.starting_date;
      delete item.ending_date;
    });
    const periods = { weekStart: monday, planning: filteredWeek, absences };

    res.json(periods);
  },

  /**
   * UserAdmin controller to create user assignment in a week
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id and body params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async create(req, res) {
    const userAssignment = await planningAdminDatamapper.insert(req.params, req.body);
    return res.json(userAssignment);
  },
};

module.exports = controller;