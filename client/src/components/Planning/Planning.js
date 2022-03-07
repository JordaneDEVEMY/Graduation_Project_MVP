import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import SearchContainer from '../SearchContainer/SearchContainer';
import Cards from '../Cards/Cards';
import dateFunctions from '../../utils/dateFunctions';
import './planning.scss';

function Planning({
  assignments,
  handleStartDate,
  startDate,
  user,
}) {
  const { isAdmin } = user;
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;
  console.log('isAdmin', isAdmin);
  console.log('currentWeek', currentWeek);

  // get only current week assignments
  const currentAssignments = assignments.filter((assignment) => {
    const startingDate = dateFunctions.getDate(assignment.starting_date).format('YYYY-MM-DD');
    return currentWeek.dates.includes(startingDate);
  });

  return (
    <>
      <SearchContainer isAdmin={isAdmin} date={startDate} handleCurrentWeek={handleStartDate} />

      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      {assignments.length
        ? (<Cards assignments={currentAssignments} week={currentWeek} isAdmin={isAdmin} />)
        : (
          <Typography sx={{ textAlign: 'center' }}>
            Aucun planning à afficher.
          </Typography>
        )}
    </>
  );
}

Planning.propTypes = {
  assignments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  handleStartDate: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  }).isRequired,
};

export default React.memo(Planning);
