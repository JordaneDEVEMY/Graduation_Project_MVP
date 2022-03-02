/* eslint-disable react/prop-types */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function Layout({
  isAdmin,
}) {
  return (
    <Box sx={{
      display: 'flex',
      flexGrow: 1,
      alignItems: 'flex-start',
      position: 'relative',
    }}
    >
      {isAdmin
        && (<Sidebar />)}
      <Main>
        <Outlet />
      </Main>
      <Footer isAdmin />
    </Box>
  );
}

Layout.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default React.memo(Layout);
