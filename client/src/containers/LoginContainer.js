import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionUpdateLoginInput, actionSubmitLogin } from '../actions/login';
import Login from '../components/Login/Login';

function LoginContainer() {
  const dispatch = useDispatch();

  const emailValue = useSelector((state) => state.login.email);
  const isLogged = useSelector((state) => state.login.isLogged);
  const passwordValue = useSelector((state) => state.login.password);

  const changeField = (name, value) => {
    dispatch(actionUpdateLoginInput(name, value));
  };

  const handleLogin = () => {
    dispatch(actionSubmitLogin());
  };
  return (
    <Login
      isLogged={isLogged}
      emailValue={emailValue}
      passwordValue={passwordValue}
      changeField={changeField}
      handleLogin={handleLogin}
    />
  );
}

export default React.memo(React.forwardRef(LoginContainer));
