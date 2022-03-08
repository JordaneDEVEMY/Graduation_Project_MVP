import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreateEmployee, actionSetEmployeeInformation } from '../actions/employee';
import CreateUserForm from '../components/CreateEmployeeForm/CreateEmployeeForm';

function CreateEmployeeFormContainer() {
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

CreateEmployeeFormContainer.propTypes = {};
CreateEmployeeFormContainer.defaultProps = {};
export default React.memo(CreateEmployeeFormContainer);
