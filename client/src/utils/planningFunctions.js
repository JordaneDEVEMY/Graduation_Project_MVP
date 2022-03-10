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

    planning.forEach(({ company_id, company_name, sites }) => {
      const company = {
        id: company_id,
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
              id,
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
          assignment: assignmentData,
        }) => {
          const {
            color, id: assignmentId, starting_date, ending_date, employee,
          } = assignmentData;

          const { id, firstname, lastname } = employee;

          assignment.colleagues.push({
            assignmentId,
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

  /**
   * Prepare dragEnd data to assignment form
   * @returns {object} Datas ready for Assignment form
   */
  getDragEndData: (companies, cards, drag) => {
    let result = {};
    const { destination, draggableId, source } = drag;
    const cardId = Number(destination.droppableId.replace('card-', ''));
    const employeeId = Number(draggableId.replace('employee-', ''));

    // get site
    companies.forEach((company) => {
      const { assignments } = company;
      const assignment = assignments.filter(({ id }) => id === cardId);
      if (assignment.length === 1) {
        result.site = assignment[0].site;
      }
    });

    // get assignment
    const assignment = cards[source.droppableId].filter(({ id }) => id === employeeId);
    const {
      assignmentId,
      id: employee_id,
      color,
      ending_date,
      firstname,
      lastname,
      starting_date,
    } = assignment[0];

    result = {
      ...result,
      id: assignmentId,
      employee_id,
      color,
      ending_date,
      firstname,
      lastname,
      starting_date,
      position: destination.index,
    };

    return result;
  },

  /**
   * Get all cards of pallning stored in an object
   * @param {object} companies - Companies data
   * @returns {object} Object wich contains arrays.
   */
  setPlanningCards: (companies) => {
    const cards = {};
    companies.forEach(({ assignments }) => {
      assignments.forEach((assignment) => {
        const { site, colleagues } = assignment;
        const { id } = site;
        cards[`card-${id}`] = colleagues;
      });
    });

    return cards;
  },
};

export default planningFunctions;
