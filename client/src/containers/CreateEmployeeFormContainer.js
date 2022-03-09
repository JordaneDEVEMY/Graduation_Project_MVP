import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreateEmployee, actionSetEmployeeInformation, actionGetEmployeeInformations } from '../actions/employee';
import CreateUserForm from '../components/CreateEmployeeForm/CreateEmployeeForm';

function CreateEmployeeFormContainer() {
  const dispatch = useDispatch();
  const allEmployees = useSelector((state) => state.allEmployees.employees);
  const employee = useSelector((state) => state.employee);
  console.log(allEmployees);

  const changeField = (key, value) => {
    dispatch(actionSetEmployeeInformation(key, value));
  };

  const handleUpdateUser = (data) => {
    dispatch(actionGetEmployeeInformations(data));
  };

  const handleCreateUser = () => {
    dispatch(actionCreateEmployee());
  };

  return (
    <CreateUserForm
      changeField={changeField}
      handleCreateUser={handleCreateUser}
      datas={allEmployees}
      handleUpdateUser={handleUpdateUser}
      employee={employee}
    />
  );
}

CreateEmployeeFormContainer.propTypes = {};
CreateEmployeeFormContainer.defaultProps = {};
export default React.memo(CreateEmployeeFormContainer);
