/* eslint-disable react/prop-types */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';
import './layout.scss';
import './admin_layout.scss';

function AdminLayout() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default React.memo(AdminLayout);
