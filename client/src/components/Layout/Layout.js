/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './layout.scss';
import './admin_layout.scss';
import SidebarContainer from '../../containers/SidebarContainer';

function Layout({
  isAdmin,
}) {
  const isLogged = useSelector((state) => state.login.isLogged);
  if (!isLogged) {
    return (
      <Navigate to="/" />
    );
  }
  return (
    <div className="wrapper">
      {isAdmin
        && (<SidebarContainer />)}
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
