import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Typography } from '@mui/material';
import SearchContainer from '../SearchContainer/SearchContainer';
import Cards from '../Cards/Cards';
import dateFunctions from '../../utils/dateFunctions';
import './planning.scss';

function Planning({
  handleStartDate,
  startDate,
  user,
}) {
  const { assignments } = user;
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;

  // get only current week assignments
  const currentAssignments = assignments.filter((assignment) => {
    const startingDate = dateFunctions.getDate(assignment.starting_date).format('YYYY-MM-DD');
    return currentWeek.dates.includes(startingDate);
  });

  // has absence ?
  const absences = currentAssignments.filter((assignment) => assignment.absence.id !== null);

  return (
    <>
      <SearchContainer isAdmin={false} date={startDate} handleCurrentWeek={handleStartDate} />

      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      {absences.map((absence) => (
        <Alert severity="success">
          {`Absence du ${dateFunctions.getDate(absence.starting_date).format('DD MM YYYY')} 
          au ${dateFunctions.getDate(absence.ending_date).format('DD MM YYYY')} : 
          ${absence.reason}`}
        </Alert>
      ))}

      {currentAssignments.length
        ? (<Cards assignments={currentAssignments} week={currentWeek} isAdmin={false} />)
        : (
          <Typography sx={{ textAlign: 'center' }}>
            Aucun planning à afficher.
          </Typography>
        )}
    </>
  );
}

Planning.propTypes = {
  handleStartDate: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  user: PropTypes.shape({
    assignments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default React.memo(Planning);
