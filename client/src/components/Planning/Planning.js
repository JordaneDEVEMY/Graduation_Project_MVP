/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import SearchContainer from '../SearchContainer/SearchContainer';
import Cards from '../Cards/Cards';
import utils from '../../utils';
import './planning.scss';

function Planning({
  isAdmin,
  userAssignments,
}) {
  const currentDate = utils.dateFunctions.getDate().format('YYYY-MM-DD');
  const { current: currentWeek } = utils.dateFunctions.getWeek(currentDate);
  console.log(currentWeek);
  return (
    <>
      <SearchContainer isAdmin={isAdmin} />

      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      {userAssignments.length
        ? (<Cards assignments={userAssignments} week={currentWeek} isAdmin={isAdmin} />)
        : (
          <Typography sx={{ textAlign: 'center' }}>
            Aucun planning à afficher.
          </Typography>
        )}
    </>
  );
}

Planning.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  userAssignments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default React.memo(Planning);
