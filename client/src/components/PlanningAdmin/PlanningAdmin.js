/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import SearchContainer from '../SearchContainer/SearchContainer';
import Cards from '../Cards/Cards';
import dateFunctions from '../../utils/dateFunctions';
import './planning_admin.scss';

function PlanningAdmin({
  handleStartDate,
  planning,
  startDate,
}) {
  const companies = [];
  console.log('startDate', startDate);
  planning.forEach(({ company_name, sites }) => {
    console.log(company_name, sites);
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

  console.log('companies', companies);
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;

  return (
    <>
      <SearchContainer isAdmin date={startDate} handleCurrentWeek={handleStartDate} />

      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      {companies.length
        ? (companies.map(({ name, assignments }) => (
          <>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              {name}
            </Typography>

            {assignments.length
              ? (
                <Cards
                  assignments={assignments}
                  week={currentWeek}
                  isAdmin
                />
              )
              : (
                <Typography sx={{ textAlign: 'center' }}>
                  Aucun planning à afficher.
                </Typography>
              )}
          </>
        )))
        : (
          <Typography sx={{ textAlign: 'center' }}>
            Aucune entreprise à afficher.
          </Typography>
        )}
    </>
  );
}

PlanningAdmin.propTypes = {
  handleStartDate: PropTypes.func.isRequired,
  planning: PropTypes.arrayOf(
    PropTypes.shape({
      company_name: PropTypes.string.isRequired,
      sites: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          site_name: PropTypes.string.isRequired,
          assignments: PropTypes.shape({
            id: PropTypes.number.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  startDate: PropTypes.string.isRequired,
};

export default React.memo(PlanningAdmin);
