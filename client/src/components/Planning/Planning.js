import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import useWindowWidth from '../../hooks/useWindowWidth';
import Carousel from '../Carousel/Carousel';
import SearchContainer from '../SearchContainer/SearchContainer';
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
    <>
      <Typography variant="h1" sx={{ color: 'text.primary' }}>
        {'Planning d\'intervention'}
      </Typography>
      <SearchContainer isAdmin={isAdmin} />
      {displayCarousel && (
      <Carousel />
      )}
    </>
  );
}

Planning.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default React.memo(Planning);
