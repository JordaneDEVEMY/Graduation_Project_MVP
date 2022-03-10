import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetEmployeeInformation, actionGetEmployeeInformations, actionUpdateEmployee } from '../actions';
import DataGridEmployee from '../components/DataGridEmployee/DataGridEmployee';

function DatagridEmployeeContainer() {
  const dispatch = useDispatch();

  const allEmployees = useSelector((state) => state.allEmployees.employees);

  const handleGetEmployee = (datas) => {
    dispatch(actionGetEmployeeInformations(datas));
  };
  const handleUpdateEmployee = (data) => {
    dispatch(actionSetEmployeeInformation(data.field, data.value));
    dispatch(actionUpdateEmployee());
  };
  return (
    <DataGridEmployee
      employees={allEmployees}
      handleGetEmployee={handleGetEmployee}
      handleUpdateEmployee={handleUpdateEmployee}
    />
  );
}

DatagridEmployeeContainer.propTypes = {};
DatagridEmployeeContainer.defaultProps = {};
export default React.memo(DatagridEmployeeContainer);
