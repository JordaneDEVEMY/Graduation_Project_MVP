import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionUpdateUserInput } from '../actions/user';
import ProfilPage from '../components/ProfilPage/ProfilPage';

function ProfilPageContainer() {
  const isLogged = useSelector((state) => state.login.isLogged);
  const user = useSelector((state) => state.user);

  const userPassword = useSelector((state) => state.user.password);
  const userConfirmPassword = useSelector((state) => state.user.confirmPassword);

  const dispatch = useDispatch();

  const changeField = (name, value) => {
    dispatch(actionUpdateUserInput(name, value));
  };

  return (
    <ProfilPage
      isLogged={isLogged}
      user={user}
      changeField={changeField}
      userPassword={userPassword}
      userConfirmPassword={userConfirmPassword}
    />
  );
}

ProfilPageContainer.propTypes = {
};

export default React.memo(ProfilPageContainer);
