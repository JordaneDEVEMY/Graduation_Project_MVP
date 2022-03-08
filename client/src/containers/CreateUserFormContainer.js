import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreateEmployee, actionSetEmployeeInformation } from '../actions/employee';
import CreateUserForm from '../components/CreateUserForm/CreateUserForm';

function CreateUserFormContainer() {
  const dispatch = useDispatch();

  const changeField = (key, value) => {
    dispatch(actionSetEmployeeInformation(key, value));
  };

  const handleCreateUser = () => {
    dispatch(actionCreateEmployee());
  };

  return (
    <CreateUserForm
      changeField={changeField}
      handleCreateUser={handleCreateUser}
    />
  );
}

CreateUserFormContainer.propTypes = {};
CreateUserFormContainer.defaultProps = {};
export default React.memo(CreateUserFormContainer);
