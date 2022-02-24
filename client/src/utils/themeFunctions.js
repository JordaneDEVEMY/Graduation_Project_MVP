const themeFunctions = {
  avalaibleModes: ['dark', 'light'],
  defaultMode: 'dark',

  /**
   * Get CSS theme mode from localStorage
   */
  getThemeMode: () => {
    const mode = localStorage.getItem('themeMode') || themeFunctions.defaultMode;
    if (themeFunctions.avalaibleModes.includes(mode)) {
      return mode;
    }

    return themeFunctions.defaultMode;
  },

  /**
   * Save CSS theme mode into localStorage
   * @param {('dark'|'light')} mode - Theme mode
   * @returns {boolean} Save successed or failed
   */
  setThemeMode: (mode) => {
    if (themeFunctions.avalaibleModes.includes(mode)) {
      return localStorage.setItem('themeMode', mode);
    }

    return false;
  },
};

export default themeFunctions;
