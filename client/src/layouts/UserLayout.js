/* eslint-disable react/prop-types */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Main from '../components/Main/Main';

function UserLayout() {
  return (
    <div className="wrapper">
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default React.memo(UserLayout);
