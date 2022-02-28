/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './error404.scss';
import errorimg from '../../Assets/images/404img.png';

function Error404() {
  return (
    <Box sx={{
      position: 'relative',
      textAlign: {
        xs: 'center',
      },
      backgroundImage: `url(${errorimg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      backgroundSize: 'contain',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Box>
        <Typography variant="h2">
          Il n'y a rien ici !
        </Typography>
        <Typography>
          <Link to="/">Revenir sur le site</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default React.memo(Error404);
