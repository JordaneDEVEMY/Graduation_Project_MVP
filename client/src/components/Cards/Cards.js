/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Box, useMediaQuery } from '@mui/material';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';
import './cards.scss';

function Cards({
  assignements,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    isMobile ? (
      <Carousel assignements={assignements} />
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
            {assignements.map((assignement) => (
              <Card key={assignement.id} isMobile={isMobile} {...assignement} />
            ))}
          </Box>
        </Box>
      )
  );
}

Cards.propTypes = {
  assignements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default React.memo(Cards);
