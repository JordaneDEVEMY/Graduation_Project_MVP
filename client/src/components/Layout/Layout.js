/* eslint-disable react/prop-types */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Main from '../Main/Main';
import NavTabs from '../NavTabs/NavTabs';
import Sidebar from '../Sidebar/Sidebar';
import './layout.scss';

function Layout({
  isAdmin,
}) {
  const theme = useTheme();

  return (
    <Box sx={{
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        position: 'relative',
      },
    }}
    >
      {isAdmin
        && (<Sidebar />)}
      <Main>
        {isAdmin
        && (<NavTabs />)}
        <Outlet />
      </Main>
    </Box>
  );
}

Layout.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default React.memo(Layout);
