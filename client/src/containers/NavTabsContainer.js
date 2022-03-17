import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import NavTabs from '../components/NavTabs/NavTabs';

function NavTabsContainer() {
  const isLogged = useSelector((state) => state.login.isLogged);
  const userId = useSelector((state) => state.user.id);

  return (
    <NavTabs
      isLogged={isLogged}
      userId={userId}
    />
  );
}

NavTabsContainer.propTypes = {
};

export default React.memo(NavTabsContainer);
