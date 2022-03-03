/* eslint-disable react/prop-types */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Main from '../Main/Main';
import NavTabs from '../NavTabs/NavTabs';
import SidebarContainer from '../../containers/SidebarContainer';
import './layout.scss';

function Layout({
  isAdmin,
}) {
  const theme = useTheme();
  const isLogged = useSelector((state) => state.login.isLogged);

  if (!isLogged) {
    return (
      <Navigate to="/" />
    );
  }

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
        && (<SidebarContainer />)}
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
