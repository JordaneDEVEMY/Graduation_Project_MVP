/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import './footer.scss';

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        p: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography sx={{
        color: theme.palette.text.disabled,
      }}
      >
        <small>
          <Link to="/mentions-legales">Mentions légales</Link>
          {' '}
          - Tous droits réservés © O'lleks 2022
        </small>
      </Typography>
    </Box>
  );
}

export default React.memo(Footer);
