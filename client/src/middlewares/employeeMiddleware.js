/* eslint-disable no-alert */
/* eslint-disable camelcase */
import {
  getAllEmployees, createEmployee, updateEmployee, deleteEmployee,
} from '../requests/employeeRequest';
import * as actions from '../actions';

const employeeMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_ALL_EMPLOYEES: {
      const response = await getAllEmployees();
      if (response.status === 200) {
        store.dispatch(actions.actionGetAllEmployees(response.data));
      }
      return;
    }
    case actions.CREATE_EMPLOYEE: {
      const { employee } = store.getState();
      const {
        firstname,
        lastname,
        email,
        password,
        phoneNumber: phone_number,
        mobileNumber: mobile_number,
        address,
        zipCode: zip_code,
        socialSecurityNumber: social_security_number,
        dateOfBirth: date_of_birth,
        startingDate: starting_date,
        avatar,
        fonction,
        roleApplication: role_application,
        label: qualification_label,
      } = employee;
      const employeeDatas = {
        firstname,
        lastname,
        email,
        password,
        phone_number,
        mobile_number,
        address,
        zip_code,
        social_security_number,
        date_of_birth,
        starting_date,
        avatar,
        fonction,
        role_application,
        qualification_label,
      };
      const response = await createEmployee(employeeDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionResetEmployeeInformations());
        store.dispatch(actions.actionRequestAllEmployees());
        alert('Employee created successfully');
      }
      return;
    }
    case actions.UPDATE_EMPLOYEE: {
      const { employee } = store.getState();
      const {
        firstname,
        lastname,
        email,
        phoneNumber: phone_number,
        mobileNumber: mobile_number,
        address,
        zipCode: zip_code,
        socialSecurityNumber: social_security_number,
        dateOfBirth: date_of_birth,
        startingDate: starting_date,
        avatar,
        fonction,
        roleApplication: role_application,
        label: qualification_label,
      } = employee;
      const employeeDatas = {
        firstname,
        lastname,
        email,
        phone_number,
        mobile_number,
        address,
        zip_code,
        social_security_number,
        date_of_birth,
        starting_date,
        avatar,
        fonction,
        role_application,
        qualification_label,
      };
      const response = await updateEmployee(employee.id, employeeDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionResetEmployeeInformations());
        store.dispatch(actions.actionRequestAllEmployees());
        alert('Employee updated successfully');
      }
      return;
    }
    case actions.DELETE_EMPLOYEE: {
      const { employee } = store.getState();
      employee.employeesToDelete.map(async (id) => {
        const response = await deleteEmployee(id);
        if (response.status === 200) {
          store.dispatch(actions.actionRequestAllEmployees());
          alert('Employee deleted successfully');
        }
      });
      store.dispatch(actions.actionResetEmployeeInformations());
      return;
    }
    default: {
      next(action);
    }
  }
};

export default employeeMiddleware;
