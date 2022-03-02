/* eslint-disable react/prop-types */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import useWindowWidth from '../../hooks/useWindowWidth';
import './layout.scss';
import './admin_layout.scss';

function Layout({
  isAdmin,
}) {
  const theme = useTheme();
  const windowWidth = useWindowWidth();
  const minWidth = theme.breakpoints.values.sm;

  return (
    <div className="wrapper">
      {isAdmin && (windowWidth >= minWidth)
        && (<Sidebar />)}
      <Main>
        <Outlet />
      </Main>
      <Footer isAdmin />
    </div>
  );
}

Layout.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default React.memo(Layout);
