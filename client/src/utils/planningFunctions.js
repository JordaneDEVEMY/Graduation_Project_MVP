/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import dateFunctions from './dateFunctions';

const planningFunctions = {

  /**
   * Convert admin data in assignments array
   * @param {object} planning - Planning data
   * @returns {object} dayjs object.
   */
  adminPlanningToCompanies: (planning) => {
    const companies = [];

    planning.forEach(({ company_id, company_name, sites: companySites }) => {
      const company = {
        id: company_id,
        name: company_name,
        sites: [],
      };

      // group company sites by id
      const companySitesIds = [];
      companySites.forEach(({ id, site_name: name }) => {
        if (!companySitesIds.includes(id)) {
          company.sites.push({
            id,
            name,
            assignments: [],
          });
          companySitesIds.push(id);
        }
      });

      // get assignments of each site
      company.sites.forEach((site) => {
        const siteAssignments = companySites.filter(({ id }) => id === site.id);

        siteAssignments.forEach(({ assignment }) => {
          site.assignments.push(assignment);
        });

        return site;
      });

      companies.push(company);
    });

    return companies;
  },

  /**
   * Get all sites stored in an object
   * @param {object} companies - Companies data
   * @returns {object} Object of sites wich contains arrays.
   */
  getPlanningSites: (companies) => {
    const planningSites = {};
    companies.forEach(({ sites }) => {
      sites.forEach((site) => {
        planningSites[`site-${site.id}`] = site.assignments;
      });
    });

    return planningSites;
  },

  /**
   * Get all sites stored in an object
   * @param {object} companies - Companies data
   * @returns {object} Object of sites wich contains arrays.
   */
  refreshAssignmentsPosition: (companies, assignmentsPosition) => {
    if (assignmentsPosition === undefined) {
      return companies;
    }

    companies.forEach(({ sites }) => {
      sites.map((site) => {
        site.assignments = assignmentsPosition[`site-${site.id}`];
        return site;
      });
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
      ending_date: dateFunctions.getDate(ending_date).format('YYYY-MM-DD'),
      firstname,
      lastname,
      starting_date: dateFunctions.getDate(starting_date).format('YYYY-MM-DD'),
      position: destination.index,
    };

    return result;
  },

  /**
   * Get all cards of pallning stored in an object
   * @param {object} companies - Companies data
   * @returns {object} Object wich contains arrays.
   */
  refreshCardsPosition: (result, cards) => {
    const refresh = { ...cards };
    const { source, destination, draggableId } = result;
    const cardFrom = source.droppableId;
    const cardTo = destination.droppableId;
    // get assignment
    const employeeId = Number(draggableId.replace('employee-', ''));
    const assignment = refresh[cardFrom].filter(({ id }) => id === employeeId);
    // remove assignment from source
    refresh[cardFrom] = refresh[cardFrom].filter(({ id }) => id !== employeeId);
    // add assignment to destination
    // if (destination.index + 1 <= cards[cardTo].length) {
    //   cards[cardTo].splice(destination.index, 0, assignment);
    // } else {
    //   cards[cardTo].push(assignment);
    // }
    refresh[cardTo].push(assignment[0]);

    return refresh;
  },

  /**
   * Get current year and week as string
   * @returns {string} YYYY-<week number>
   */
  getSlugFromDate: (date) => {
    const year = dateFunctions.getDate(date).format('YYYY');
    const weekNum = dateFunctions.getDate(date).isoWeek();

    return `${year}-${weekNum}`;
  },

  /**
   * Get current year and week as string
   * @returns {string} YYYY-<week number>
   */
  getDateFromSlug: (slug) => {
    const regex = /^([0-9]{4})-([0-9]{2})$/;
    const matches = slug.match(regex);
    const year = matches[1];
    const week = matches[2];

    return dateFunctions.getWeekMonday(year, week);
  },
};

export default planningFunctions;
