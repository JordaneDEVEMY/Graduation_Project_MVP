/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchContainer from '../SearchContainer/SearchContainer';
import SiteUser from '../SiteUser/SiteUser';
import dateFunctions from '../../utils/dateFunctions';
import './planning.scss';

function Planning({
  absences,
  assignments,
  startDate,
  user,
}) {
  const theme = useTheme();
  console.log('assignments', assignments);
  console.log('absences', absences);

  return (
    <>
      <SearchContainer isAdmin={false} date={startDate} />

      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      {absences.map((absence) => (
        <Alert severity="success" key={absence.id}>
          {`Absence du ${dateFunctions.getDate(absence.starting_date).format('DD MM YYYY')} 
          au ${dateFunctions.getDate(absence.ending_date).format('DD MM YYYY')} : 
          ${absence.reason}`}
        </Alert>
      ))}

      {assignments.length
        ? (
          <Box
            sx={{
              display: 'flex',
              gap: theme.spacing(2),
            }}
          >
            {assignments.map((assignment) => (
              <SiteUser user={user} key={assignment.id} startDate={startDate} {...assignment} />
            ))}
          </Box>
        )
        : (
          <Typography sx={{ textAlign: 'center' }}>
            {'Aucun site d\'intervention à afficher.'}
          </Typography>
        )}
    </>
  );
}

Planning.propTypes = {
  absences: PropTypes.arrayOf(
    PropTypes.shape({
      ending_date: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      reason: PropTypes.string.isRequired,
      starting_date: PropTypes.string.isRequired,
    }),
  ).isRequired,
  assignments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  startDate: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
};

export default React.memo(Planning);
