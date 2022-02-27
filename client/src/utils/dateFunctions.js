import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import 'dayjs/locale/fr';

dayjs.extend(isoWeek);

const dateFunctions = {

  /**
   * Get a dayjs object from a date string
   * @param {string=} dateString - A string date eg. 'YYYY-MM-DD'
   * @returns {object} dayjs object.
   */
  getDate: (dateString) => {
    const date = dateString || `${dayjs().format('YYYY-MM-DD')}`;

    return dayjs(date).locale('fr');
  },

  /**
   * Get next week and dates from a date string
   * @param {string} dateString - A string date eg. 'YYYY-MM-DD'
   * @returns {object} week Next week.
   * @returns {object} week.num Next week number.
   * @returns {object} week.dates Next week dates.
   */
  getNextWeek: (dateString) => {
    const date = dateFunctions.getDate(dateString);
    const nextDateString = `${date.add(7, 'day').format('YYYY-MM-DD')}`;

    return {
      num: date.add(7, 'day').isoWeek(),
      dates: dateFunctions.getWeekDates(nextDateString),
    };
  },

  /**
   * Get week number and week days from a date string
   * @param {string} dateString - A string date eg. 'YYYY-MM-DD'
   * @returns {object} week Week infos.
   * @returns {object} week.current Current week.
   * @returns {object} week.current.num Current week number.
   * @returns {object} week.current.dates Current week dates.
   * @returns {object} week.next Next week.
   * @returns {object} week.next.num Next week number.
   * @returns {object} week.next.dates Next week dates.
   * @returns {object} week.prev Prev week.
   * @returns {object} week.prev.num Prev week number.
   * @returns {object} week.prev.dates Prev week dates.
   */
  getWeek: (dateString) => ({
    prev: dateFunctions.getPrevWeek(dateString),
    current: {
      num: dateFunctions.getWeekNumber(dateString),
      dates: dateFunctions.getWeekDates(dateString),
    },
    next: dateFunctions.getNextWeek(dateString),
  }),

  /**
   * Get the week number of a date
   * @param {string=} dateString - A string date eg. 'YYYY-MM-DD'
   * @returns {number} the ISO week of the date.
   */
  getWeekNumber: (dateString) => {
    const date = dateFunctions.getDate(dateString);

    return date.isoWeek();
  },

  /**
   * Get week dates from a date string
   * @param {string} dateString - A string date eg. 'YYYY-MM-DD'
   * @returns {array} List of week dates.
   */
  getWeekDates: (dateString) => {
    const date = dateFunctions.getDate(dateString);
    const dates = [];

    for (let i = 0; i < 7; i += 1) {
      const dayNum = date.get('d');
      const subtract = dayNum === 0 ? 6 : (dayNum - 1);

      dates.push(`${date.subtract(subtract, 'day').add(i, 'day').format('YYYY-MM-DD')}`);
    }

    return dates;
  },

  /**
   * Get prev week and dates from a date string
   * @param {string} dateString - A string date eg. 'YYYY-MM-DD'
   * @returns {object} week Prev week.
   * @returns {object} week.num Prev week number.
   * @returns {object} week.dates Prev week dates.
   */
  getPrevWeek: (dateString) => {
    const date = dateFunctions.getDate(dateString);
    const prevDateString = `${date.subtract(7, 'day').format('YYYY-MM-DD')}`;

    return {
      num: date.subtract(7, 'day').isoWeek(),
      dates: dateFunctions.getWeekDates(prevDateString),
    };
  },
};

export default dateFunctions;
