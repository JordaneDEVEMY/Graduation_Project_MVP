import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import 'dayjs/locale/fr';

dayjs.extend(isoWeek);

const dateFunctions = {

  /**
   * Get a dayjs object
   * @param {string=} dateString - A string date eg. 'YYYY-MM-DD'
   * @returns {object} dayjs object.
   */
  getDate: (dateString) => {
    const date = dateString || `${dayjs().format('YYYY')}-${dayjs().format('MM')}-${dayjs().format('DD')}`;

    return dayjs(date).locale('fr');
  },

  /**
   * Get next week from a date
   * @param {string} dateString A string date eg. 'YYYY-MM-DD'
   * @returns {number} Prev week.
   */
  getNextWeek: (dateString = null) => {
    let dateFrom;

    if (dateString) {
      dateFrom = dateFunctions.getDate(dateString);
    } else {
      dateFrom = dateFunctions.getDate();
    }

    return dateFrom.add(1, 'week').isoWeek();
  },

  /**
   * Get the week number of a date
   * @param {string=} dateString - A string date eg. 'YYYY-MM-DD'
   * @returns {number} the ISO week of the date.
   */
  getWeek: (dateString) => {
    let date;

    if (dateString) {
      date = dateFunctions.getDate(dateString);
    } else {
      date = dateFunctions.getDate();
    }

    return date.isoWeek();
  },

  /**
   * Get dates from a week number
   * @param {string} dateString A string date eg. 'YYYY-MM-DD'
   * @returns {array} List of week dates.
   */
  getWeekDates: (dateString = null) => {
    let dateFrom;

    if (dateString) {
      dateFrom = dateFunctions.getDate(dateString);
    } else {
      dateFrom = dateFunctions.getDate();
    }

    const dates = [];

    for (let i = 0; i < 7; i += 1) {
      const dayNum = dateFrom.get('d');
      const subtract = dayNum === 0 ? 6 : (dayNum - 1);
      const date = `${dateFrom.subtract(subtract, 'day').add(i, 'day').format('DD')} ${dateFrom.subtract(subtract, 'day').add(i, 'day').format('MMM')} ${dateFrom.subtract(subtract, 'day').add(i, 'day').format('YYYY')}`;

      dates.push(date);
    }

    return dates;
  },

  /**
   * Get prev week from a date
   * @param {string} dateString A string date eg. 'YYYY-MM-DD'
   * @returns {number} Prev week.
   */
  getPrevWeek: (dateString = null) => {
    let dateFrom;

    if (dateString) {
      dateFrom = dateFunctions.getDate(dateString);
    } else {
      dateFrom = dateFunctions.getDate();
    }

    return dateFrom.subtract(1, 'week').isoWeek();
  },
};

export default dateFunctions;
