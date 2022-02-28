import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import './planning.scss';

function Planning({
  isAdmin,
}) {
  return (
    <Typography paragraph sx={{ color: 'text.primary' }}>
      {`Planning en mode ${isAdmin ? 'admin' : 'user'}`}
    </Typography>
  );
}

Planning.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default React.memo(Planning);
