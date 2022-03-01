import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionUpdateLoginInput, actionSubmitLogin } from '../actions/login';
import Login from '../components/Login/Login';

function LoginContainer() {
  const dispatch = useDispatch();

  const emailValue = useSelector((state) => state.login.email);
  const passwordValue = useSelector((state) => state.login.password);

  const changeField = (name, value) => {
    dispatch(actionUpdateLoginInput(name, value));
  };
  const handleLogin = () => {
    dispatch(actionSubmitLogin());
  };
  return (
    <Login
      emailValue={emailValue}
      passwordValue={passwordValue}
      changeField={changeField}
      handleLogin={handleLogin}
    />
  );
}

LoginContainer.propTypes = {};
LoginContainer.defaultProps = {};
export default React.memo(LoginContainer);
