import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import { actionUpdateEmailInput } from '../actions/forgotPassword';

function ForgotPasswordContainer() {
  const email = useSelector((state) => state.forgotPassword.email);

  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(actionUpdateEmailInput(value));
  };

  return (
    <ForgotPassword
      email={email}
      handleChange={handleChange}
    />
  );
}

ForgotPasswordContainer.propTypes = {};
ForgotPasswordContainer.defaultProps = {};
export default React.memo(ForgotPasswordContainer);
