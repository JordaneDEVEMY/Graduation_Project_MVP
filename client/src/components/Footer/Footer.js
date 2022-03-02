/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import './footer.scss';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: '1em',
        p: '0.5em',
      }}
    >
      <Typography>
        <Link to="/mentions-legales">Mentions légales</Link>
        {' '}
        - Tous droits réservés © O'lleks 2022
      </Typography>
    </Box>
  );
}

export default React.memo(Footer);
