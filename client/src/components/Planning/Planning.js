/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';
import useWindowWidth from '../../hooks/useWindowWidth';
import Carousel from '../Carousel/Carousel';
import SearchContainer from '../SearchContainer/SearchContainer';
import Card from '../Card/Card';
import './planning.scss';

function Planning({
  isAdmin,
  userAssignements,
}) {
  const [displayCarousel, setDisplayCarousel] = useState(false);

  const theme = useTheme();
  const width = useWindowWidth();
  const minWidth = theme.breakpoints.values.sm;

  useEffect(() => {
    if (width < minWidth) {
      setDisplayCarousel(true);
    }

    if (width >= minWidth) {
      setDisplayCarousel(false);
    }
  }, [width]);

  return (
    <>
      <SearchContainer isAdmin={isAdmin} />
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>
      {displayCarousel ? (
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
