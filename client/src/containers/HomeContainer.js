import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../components/HomePage/HomePage';

function HomeContainerContainer() {
  const isLogged = useSelector((state) => state.login.isLogged);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const userId = useSelector((state) => state.user.id);

  return (
    <Home isLogged={isLogged} isAdmin={isAdmin} userId={userId} />
  );
}

HomeContainerContainer.propTypes = {};
HomeContainerContainer.defaultProps = {};
export default React.memo(HomeContainerContainer);
