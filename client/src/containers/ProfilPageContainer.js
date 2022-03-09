import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionUpdateUserPassword } from '../actions/user';
import { actionSetEmployeeInformation, actionGetEmployeeInformations } from '../actions/employee';
import ProfilPage from '../components/ProfilPage/ProfilPage';

function ProfilPageContainer() {
  const isLogged = useSelector((state) => state.login.isLogged);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const updateUserPassword = () => {
    dispatch(actionUpdateUserPassword());
  };

  const changeField = (key, value) => {
    dispatch(actionSetEmployeeInformation(key, value));
  };

  const handleUpdateUser = (data) => {
    dispatch(actionGetEmployeeInformations(data));
  };

  return (
    <ProfilPage
      isLogged={isLogged}
      user={user}
      updateUserPassword={updateUserPassword}
      changeField={changeField}
      handleUpdateUser={handleUpdateUser}
    />
  );
}

ProfilPageContainer.propTypes = {
};

export default React.memo(ProfilPageContainer);
