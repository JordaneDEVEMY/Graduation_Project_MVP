const dateFunctions = {

  /**
   * Get week monday day
   * @param {number} year Week year.
   * @param {number} weekNumber Number of week.
   * @returns {string} the ISO date.
   */
  getFirstDayOfWeek: (year, weekNumber) => {
    const firstMonday = new Date(dateFunctions.getFirstMondayOfYear(year));
    // first day of week
    firstMonday.setDate(firstMonday.getDate() + (7 * (weekNumber - 1)));

    return firstMonday.toString();
  },

  /**
   * Get first monday of a year
   * @param {date} date A date object.
   * @param {number} nbWeeks Number of weeks to add.
   * @returns {string} the ISO week of the date.
   */
  getFirstMondayOfYear: (year) => {
    const oneJan = new Date(year, 0, 1);
    const oneJanvDayNum = oneJan.getDay();

    // in JS, weeks start on sunday
    if (oneJanvDayNum === 0) {
      oneJan.setDate(oneJan.getDate() + 1);
    // add days if not on monday
    } else if (oneJanvDayNum > 2) {
      oneJan.setDate(oneJan.getDate() + (8 - oneJanvDayNum));
    }

    return oneJan.toString();
  },

  /**
   * Get the week number of adate
   * @param {date} date A date object.
   * @returns {number} the ISO week of the date.
   */
  getWeekNumberFromDate: (date) => {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const oneJanvDayNum = oneJan.getDay();
    let numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));

    // weeks start on monday
    // so, if 1st jan is on sunday, add one day
    if (oneJanvDayNum === 0) {
      numberOfDays += 1;
    // substract days
    } else {
      numberOfDays -= (oneJanvDayNum - 1);
    }

    return Math.ceil(numberOfDays / 7);
  },

  /**
   * Get dates from a week number
   * @param {string} year Full year.
   * @param {number} weekNumber The week number.
   * @returns {array} List of week dates.
   */
  getDatesFromWeekNumber: (year, weekNumber) => {
    const firstDay = new Date(dateFunctions.getFirstDayOfWeek(year, weekNumber));
    const dates = [];

    for (let i = 0; i < 7; i += 1) {
      const date = new Date(firstDay.toString());
      date.setDate(date.getDate() + i);
      dates.push(date.toString());
    }

    return dates;
  },

  /**
   * get prev week from a week
   * @param {date} date A date object.
   * @returns {number} the ISO week of the prev week.
   */
  getPrevWeek: (year, weekNumber) => {
    const firstDay = new Date(dateFunctions.getFirstDayOfWeek(year, weekNumber));
    // subtract one week to first day
    firstDay.setDate(firstDay.getDate() - 7);
    const firstDayPrevWeek = new Date(firstDay.toString());

    return dateFunctions.getWeekNumberFromDate(firstDayPrevWeek);
  },
};

export default dateFunctions;
