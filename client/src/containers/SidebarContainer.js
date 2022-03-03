import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionLogout } from '../actions/login';
import Sidebar from '../components/Sidebar/Sidebar';

function SidebarContainer() {
  const userId = useSelector((state) => state.user.id);
  const userFirstname = useSelector((state) => state.user.firstname);
  const userLastname = useSelector((state) => state.user.lastname);
  const userAvatar = useSelector((state) => state.user.avatar);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actionLogout());
  };

  return (
    <Sidebar
      userId={userId}
      userFirstname={userFirstname}
      userLastname={userLastname}
      userAvatar={userAvatar}
      handleLogout={handleLogout}
    />
  );
}

export default React.memo(SidebarContainer);
