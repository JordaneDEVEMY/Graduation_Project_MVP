/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
const planningFunctions = {

  /**
   * Convert admin data in assignments array
   * @param {object} planning - Planning data
   * @returns {object} dayjs object.
   */
  adminPlanningToCards: (planning) => {
    const companies = [];

    planning.forEach(({ company_name, sites }) => {
      const company = {
        name: company_name,
        assignments: [],
      };

      // group assignments by company sites
      const companySitesIds = [];
      sites.forEach(({ id, site_name: name }) => {
        if (!companySitesIds.includes(id)) {
          company.assignments.push({
            id,
            site: {
              name,
            },
            colleagues: [],
          });
          companySitesIds.push(id);
        }
      });

      // get each assignment of company
      company.assignments.map((assignment) => {
        const sitesById = sites.filter((item) => item.id === assignment.id);
        sitesById.forEach(({
          assignments,
        }) => {
          const {
            color, starting_date, ending_date, employees,
          } = assignments;

          const { id, firstname, lastname } = employees;

          assignment.colleagues.push({
            id,
            color,
            firstname,
            lastname,
            starting_date,
            ending_date,
          });
        });

        return assignment;
      });

      companies.push(company);
    });

    return companies;
  },
};

export default planningFunctions;
