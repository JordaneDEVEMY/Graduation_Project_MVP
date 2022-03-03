import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';

function HeaderContainer({
  handleMode,
}) {
  const isLogged = useSelector((state) => state.login.isLogged);
  const user = useSelector((state) => state.user);
  console.log('Header container', user);

  return (
    <Header
      isLogged={isLogged}
      user={user}
      handleMode={handleMode}
    />
  );
}

HeaderContainer.propTypes = {
  handleMode: PropTypes.func.isRequired,
};

export default React.memo(HeaderContainer);
