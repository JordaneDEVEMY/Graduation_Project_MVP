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
  console.log('planning', planning);
  const companies = planning;
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;

  return (
    <>
      <SearchContainer isAdmin date={startDate} handleCurrentWeek={handleStartDate} />

      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      {companies.length
        ? (companies.map((company) => (
          <>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              {company.company_name}
            </Typography>

            {company.sites.length
              ? company.sites.map((site) => (
                <Cards
                  siteName={site.site_name}
                  assignments={site.assignments}
                  week={currentWeek}
                  isAdmin
                />
              ))
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
          assignments: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
            }).isRequired,
          ).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  startDate: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default React.memo(PlanningAdmin);
