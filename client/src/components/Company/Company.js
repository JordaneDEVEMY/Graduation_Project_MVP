/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Typography, useMediaQuery } from '@mui/material';
import SearchContainer from '../SearchContainer/SearchContainer';
import Cards from '../Cards/Cards';
import CardsDraggable from '../CardsDraggable/CardsDraggable';
import dateFunctions from '../../utils/dateFunctions';
import planningFunctions from '../../utils/planningFunctions';
import './company.scss';

function Company({
  handleStartDate,
  planning,
  startDate,
}) {
  const companies = planningFunctions.adminPlanningToCards(planning);
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  console.log('planning', planning);
  console.log('startDate', startDate);
  console.log('companies', companies);

  return (
    <>
      <SearchContainer isAdmin date={startDate} handleCurrentWeek={handleStartDate} />

      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      {companies.length
        ? !isMobile &&
          (<CardsDraggable
            companies={companies}
            week={currentWeek}
          />)
        : (companies.map(({ id, name, assignments }) => (
          <>
            <Typography
              variant="h2"
              sx={{ textAlign: 'center' }}
              id={`company-${id}-title`}
              key={`company-${id}-title`}
            >
              {name}
            </Typography>

            {assignments.length
              ? (
                <Cards
                  id={`company-${id}-sites`}
                  key={`company-${id}-sites`}
                  assignments={assignments}
                  week={currentWeek}
                  isAdmin
                />
              )
              : (
                <Typography
                  id={`company-${id}-nosites`}
                  key={`company-${id}-nosites`}
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

Company.propTypes = {
  handleStartDate: PropTypes.func.isRequired,
  planning: PropTypes.arrayOf(
    PropTypes.shape({
      company_name: PropTypes.string.isRequired,
      sites: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          site_name: PropTypes.string.isRequired,
          assignment: PropTypes.shape({
            id: PropTypes.number.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  startDate: PropTypes.string.isRequired,
};

export default React.memo(Company);
