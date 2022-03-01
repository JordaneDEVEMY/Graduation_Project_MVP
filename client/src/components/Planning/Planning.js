import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import useWindowWidth from '../../hooks/useWindowWidth';
import Carousel from '../Carousel/Carousel';
import './planning.scss';

function Planning({
  isAdmin,
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
    <Box
      component="div"
    >
      <Typography paragraph sx={{ color: 'text.primary' }}>
        {`Planning en mode ${isAdmin ? 'admin' : 'user'}`}
      </Typography>
      {displayCarousel && (
      <Carousel />
      )}
    </Box>
  );
}

Planning.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default React.memo(Planning);
