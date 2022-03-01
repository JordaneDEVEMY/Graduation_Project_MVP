import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Carousel from '../Carousel/Carousel';
import './planning.scss';

function Planning({
  isAdmin,
}) {
  return (
    <Box
      component="div"
    >
      <Typography paragraph sx={{ color: 'text.primary' }}>
        {`Planning en mode ${isAdmin ? 'admin' : 'user'}`}
      </Typography>
      <Carousel />
    </Box>
  );
}

Planning.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default React.memo(Planning);
