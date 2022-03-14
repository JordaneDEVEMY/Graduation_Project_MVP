import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionSetEmployeeInformation,
  actionGetEmployeeInformations,
  actionUpdateEmployee,
  actionDeleteEmployee,
  actionGetEmployeeIdToDelete,
  actionCreateEmployee,
  actionResetEmployeeInformations,
} from '../actions';
import DataGridEmployee from '../components/DataGridEmployee/DataGridEmployee';

function DatagridEmployeeContainer() {
  const dispatch = useDispatch();

  const allEmployees = useSelector((state) => state.allEmployees.employees);
  const oneEmployee = useSelector((state) => state.employee);

  const handleGetEmployee = (datas) => {
    dispatch(actionGetEmployeeInformations(datas));
  };
  const handleUpdateEmployee = (data) => {
    dispatch(actionSetEmployeeInformation(data.field, data.value));
    dispatch(actionUpdateEmployee());
  };

  const pushEmployeeId = (ids) => {
    dispatch(actionGetEmployeeIdToDelete(ids));
  };

  const handleDeleteEmployee = () => {
    dispatch(actionDeleteEmployee());
  };

  const handleCreateEmployee = () => {
    dispatch(actionCreateEmployee());
  };

  const resetEmployeeInformations = () => {
    dispatch(actionResetEmployeeInformations());
  };

  const changeField = (key, value) => {
    dispatch(actionSetEmployeeInformation(key, value));
  };

  return (
    <DataGridEmployee
      employees={allEmployees}
      oneEmployee={oneEmployee}
      handleGetEmployee={handleGetEmployee}
      handleUpdateEmployee={handleUpdateEmployee}
      handleDeleteEmployee={handleDeleteEmployee}
      handleCreateEmployee={handleCreateEmployee}
      pushEmployeeId={pushEmployeeId}
      changeField={changeField}
      resetEmployeeInformations={resetEmployeeInformations}
    />
  );
}

DatagridEmployeeContainer.propTypes = {};
DatagridEmployeeContainer.defaultProps = {};
export default React.memo(DatagridEmployeeContainer);
