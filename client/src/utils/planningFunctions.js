/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import dateFunctions from './dateFunctions';

const planningFunctions = {

  /**
   * Convert user API data to a companies list
   * @param {object} assignments and absences- Assignments list from API request
   * @returns {object} object of Sites list containing assignments, and absences.
   */
  userPlanningToSites: (userData) => {
    const sites = [];
    const absences = [];
    const { assignments } = userData;
    console.log('userData', userData);

    assignments.forEach((assignment) => {
      const { absence, colleagues, site } = assignment;
      console.log(absence.id === null);
      if (absence.id === null) {
        site.assignments = colleagues;
        sites.push(site);
      } else {
        absences.push(absence);
      }
    });

    return { absences, sites };
  },

  /**
   * Get user infos from API data object
   * @param {object} data - API data
   * @returns {object} User data.
   */
  userFromData: (data) => {
    const {
      avatar,
      firstname,
      id,
      label,
      lastname,
      mobileNumber,
      phoneNumber,
    } = data;

    return ({
      avatar,
      firstname,
      id,
      label,
      lastname,
      mobileNumber,
      phoneNumber,
    });
  },

  /**
   * Convert admin API data to a companies list
   * @param {object} planning - Planning list from API request
   * @returns {array} Companies list.
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
   * Prepare data to assignment form after a drag and drop
   * @param {object} drag - Drag and drop data
   * @param {object} companies - Companies object
   * @returns {object} Datas sended to Assignment form
   */
  getDraggedAssignment: (drag, companies) => {
    let result = {};
    const { destination, draggableId } = drag;
    const siteId = Number(destination.droppableId.replace('site-', ''));
    const assignmentId = Number(draggableId.replace('assignment-', ''));

    // get site destination
    let toSite;
    companies.forEach(({ sites }) => {
      sites.forEach((item) => {
        if (item.id === siteId) {
          toSite = item;
        }
      });
    });

    // get assignment
    if (toSite) {
      const { name, assignments: fromAssignments } = toSite;
      const [assignment] = fromAssignments.filter(({ id }) => id === assignmentId);

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
        site: {
          id: siteId,
          name,
        },
      };
    }

    return result;
  },

  /**
   * Refresh assignments position after a drag and drop
   * @param {object} result - Drag and drop data
   * @param {object} companies - Companies object
   * @returns {object} Companies containing sorted assignments
   */
  setAssignmentPosition: (result, companies) => {
    const refresh = [...companies];
    const { source, destination, draggableId } = result;
    const fromSiteId = Number(source.droppableId.replace('site-', ''));
    const toSiteId = Number(destination.droppableId.replace('site-', ''));
    const assignmentId = Number(draggableId.replace('assignment-', ''));

    // get site source
    let fromSite;
    refresh.forEach(({ sites }) => {
      sites.forEach((item) => {
        if (item.id === fromSiteId) {
          fromSite = item;
        }
      });
    });

    if (fromSite) {
      // get site destination
      let toSite;
      refresh.forEach(({ sites }) => {
        sites.forEach((item) => {
          if (item.id === toSiteId) {
            toSite = item;
          }
        });
      });

      if (toSite) {
        let { assignments: fromAssignments } = fromSite;
        const { assignments: toAssignments } = toSite;
        const [assignment] = fromAssignments.filter(({ id }) => id === assignmentId);

        // position only
        if (fromSiteId === toSiteId) {
          assignment.position = destination.index;
          // remove from source
          fromAssignments = fromAssignments.filter(({ id }) => id !== assignmentId);
          // add to source
          fromAssignments.splice(destination.index, 0, assignment);

          // refresh position
          refresh.map((company) => {
            company.sites.map((site) => {
              if (site.id === fromSiteId) {
                site.assignments = fromAssignments;
              }
              return site;
            });
            return company;
          });

        // from a site to another
        } else {
          // remove from source
          fromAssignments = fromAssignments.filter(({ id }) => id !== assignmentId);

          // add to destination
          toAssignments.splice(destination.index, 0, assignment);

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
    }

    return refresh;
  },

  /**
   * Get current week slug
   * @returns {string} Slug as YYYY-<week number>
   */
  getCurrentWeekSlug: () => {
    const year = dateFunctions.getDate().format('YYYY');
    const weekNum = dateFunctions.getDate().isoWeek();

    return `${year}-${weekNum}`;
  },

  /**
   * Get week slug from a date string
   * @returns {string} Slug as YYYY-<week number>
   */
  getWeekSlugFromDate: (date) => {
    const year = dateFunctions.getDate(date).format('YYYY');
    const weekNum = dateFunctions.getDate(date).isoWeek();

    return `${year}-${weekNum}`;
  },

  /**
   * Get monday date as a string from a week slug
   * @returns {string} YYYY-MM-DD date
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
