/* eslint-disable react/prop-types */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

function Layout({
  isAdmin,
}) {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      flexGrow: 1,
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    }}
    >
      {isAdmin
        && (<Sidebar />)}
      <Main>
        <Outlet />
      </Main>
    </Box>
  );
}

Layout.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default React.memo(Layout);
