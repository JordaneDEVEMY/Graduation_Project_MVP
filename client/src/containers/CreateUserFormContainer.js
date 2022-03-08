import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreateEmployee } from '../actions/employee';
import CreateUserForm from '../components/CreateUserForm/CreateUserForm';

function CreateUserFormContainer() {
  const dispatch = useDispatch();

  const firstnameValue = useSelector((state) => state.employee.firstname);

  const handleCreateUser = () => {
    dispatch(actionCreateEmployee());
  };

  return (
    <CreateUserForm
      firstnameValue={firstnameValue}
      handleCreateUser={handleCreateUser}
    />
  );
}

CreateUserFormContainer.propTypes = {};
CreateUserFormContainer.defaultProps = {};
export default React.memo(CreateUserFormContainer);
