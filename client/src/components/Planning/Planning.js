/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import SearchContainer from '../SearchContainer/SearchContainer';
import Cards from '../Cards/Cards';
import './planning.scss';

function Planning({
  isAdmin,
  userAssignements,
}) {
  return (
    <>
      <SearchContainer isAdmin={isAdmin} />

      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      {userAssignements.length
        && (<Cards assignements={userAssignements} />)}
    </>
  );
}

Planning.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  userAssignements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default React.memo(Planning);
