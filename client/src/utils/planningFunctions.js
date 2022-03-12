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
  getDraggedAssignment: (drag, companies) => {
    let result = {};
    const { destination, draggableId } = drag;
    const siteId = Number(destination.droppableId.replace('site-', ''));
    const assignmentId = Number(draggableId.replace('assignment-', ''));
    console.log(siteId, assignmentId, companies);
    // get site destination
    let toSite;
    companies.forEach(({ sites }) => {
      [toSite] = sites.filter(({ id }) => id === siteId);
    });

    // get assignment
    if (toSite) {
      const { assignments: fromAssignments } = toSite;
      const [assignment] = fromAssignments.filter(({ id }) => id === assignmentId);

      console.log('assignment', assignment);
      const {
        color, employee, ending_date, id, starting_date,
      } = assignment;
      const { firstname, id: employee_id, lastname } = employee;
      const endDate = dateFunctions.getDate(ending_date).format('YYYY-MM-DD');
      const startDate = dateFunctions.getDate(starting_date).format('YYYY-MM-DD');

      result = {
        id,
        employee_id,
        color,
        ending_date: endDate,
        firstname,
        lastname,
        starting_date: startDate,
        position: destination.index,
      };
    }

    return result;
  },

  /**
   * Get all cards of pallning stored in an object
   * @param {object} companies - Companies data
   * @returns {object} Object wich contains arrays.
   */
  setAssignmentPosition: (result, companies) => {
    const refresh = [...companies];
    const { source, destination, draggableId } = result;
    const fromSiteId = Number(source.droppableId.replace('site-', ''));
    const toSiteId = Number(destination.droppableId.replace('site-', ''));
    const assignmentId = Number(draggableId.replace('assignment-', ''));

    if (fromSiteId === toSiteId) {
      return companies;
    }

    // get site source
    let fromSite;
    refresh.forEach(({ sites }) => {
      [fromSite] = sites.filter(({ id }) => id === fromSiteId);
    });

    if (fromSite) {
      // get site destination
      let toSite;
      refresh.forEach(({ sites }) => {
        [toSite] = sites.filter(({ id }) => id === toSiteId);
      });

      if (toSite) {
        let { assignments: fromAssignments } = fromSite;
        let { assignments: toAssignments } = toSite;
        const [assignment] = fromAssignments.filter(({ id }) => id === assignmentId);

        // remove from source
        fromAssignments = fromAssignments.filter(({ id }) => id !== assignmentId);

        // add to destination
        toAssignments = [...toAssignments, assignment];

        // add to destination
        refresh.map((company) => {
          company.sites.map((site) => {
            if (site.id === fromSiteId) {
              site.assignments = fromAssignments;
            } else if (site.id === toSiteId) {
              site.assignments = toAssignments;
            }
            return site;
          });

          return company;
        });
      }
    }

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
