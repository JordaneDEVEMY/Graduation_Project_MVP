const dateFunctions = {
  /**
   * Get the week number of current date
   * Returns the ISO week of the date.
   */
  addDaystoDate: (date, nbDays) => {
    date.setDate(date.getDate() + nbDays);

    return date;
  },

  /**
   * Get the week number of current date
   * Returns the ISO week of the date.
   */
  getCurrentWeekNumber: () => {
    const currentdate = new Date();
    const oneJan = new Date(currentdate.getFullYear(), 0, 1);
    const numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    const result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);

    return result;
  },
};

export default dateFunctions;
