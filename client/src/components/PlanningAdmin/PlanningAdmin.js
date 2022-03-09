/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import SearchContainer from '../SearchContainer/SearchContainer';
import Cards from '../Cards/Cards';
import dateFunctions from '../../utils/dateFunctions';
import planningFunctions from '../../utils/planningFunctions';
import './planning_admin.scss';

function PlanningAdmin({
  handleStartDate,
  planning,
  startDate,
}) {
  console.log('planning', planning);
  const companies = planningFunctions.adminPlanningToCards(planning);
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;

  console.log('startDate', startDate);
  console.log('companies', companies);

  return (
    <>
      <SearchContainer isAdmin date={startDate} handleCurrentWeek={handleStartDate} />

      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      {companies.length
        ? (companies.map(({ id, name, assignments }) => (
          <>
            <Typography
              variant="h2"
              sx={{ textAlign: 'center' }}
              key={`title-${id}`}
            >
              {name}
            </Typography>

            {assignments.length
              ? (
                <Cards
                  key={`cards-${id}`}
                  assignments={assignments}
                  week={currentWeek}
                  isAdmin
                />
              )
              : (
                <Typography
                  key={`nocards-${id}`}
                  sx={{ textAlign: 'center' }}
                >
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
