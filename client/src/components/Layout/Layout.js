/* eslint-disable react/prop-types */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Main from '../Main/Main';
import NavTabs from '../NavTabs/NavTabs';
import Sidebar from '../Sidebar/Sidebar';
import './layout.scss';

function Layout({
  isAdmin,
}) {
  console.log('layout', isAdmin);
  return (
    <Box sx={{
      display: 'flex',
      flexGrow: 1,
      flexWrap: 'wrap',
      position: 'relative',
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
