/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Typography, Box, useMediaQuery } from '@mui/material';
import Carousel from '../Carousel/Carousel';
import SearchContainer from '../SearchContainer/SearchContainer';
import Card from '../Card/Card';
import './planning.scss';

function Planning({
  isAdmin,
  userAssignements,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <SearchContainer isAdmin={isAdmin} />
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>
      {isMobile ? (
        <Carousel assignements={userAssignements} />
      )
        : (
          <Box
            sx={{
              overflowX: 'auto',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: theme.spacing(2),
                flexWrap: 'nowrap',
                justifyContent: 'center',
              }}
            >
              {userAssignements.map((assignement) => (
                <Card key={assignement.id} {...assignement} />
              ))}
            </Box>

          </Box>
        )}
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
