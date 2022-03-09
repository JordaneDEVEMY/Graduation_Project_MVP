import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionUpdateUserPassword } from '../actions/user';
import ProfilPage from '../components/ProfilPage/ProfilPage';

function ProfilPageContainer() {
  const isLogged = useSelector((state) => state.login.isLogged);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // const changeField = (name, value) => {
  //   dispatch();
  // };

  const updateUserPassword = () => {
    dispatch(actionUpdateUserPassword());
  };

  return (
    <ProfilPage
      isLogged={isLogged}
      user={user}
      updateUserPassword={updateUserPassword}
      // changeField={changeField}
    />
  );
}

ProfilPageContainer.propTypes = {
};

export default React.memo(ProfilPageContainer);
