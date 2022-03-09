import React from 'react';
import { useSelector } from 'react-redux';
import CreateUserForm from '../components/CreateEmployeeForm/CreateEmployeeForm';

function CreateEmployeeFormContainer() {
  const allEmployees = useSelector((state) => state.allEmployees.employees);
  console.log(allEmployees);
  return (
    <CreateUserForm
      datas={allEmployees}
    />
  );
}

CreateEmployeeFormContainer.propTypes = {};
CreateEmployeeFormContainer.defaultProps = {};
export default React.memo(CreateEmployeeFormContainer);
