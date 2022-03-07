import {
  getOneEmployee, createEmployee, updateEmployee, deleteEmployee,
} from '../requests/employeeRequest';
import * as actions from '../actions';

const employeeMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_EMPLOYEE_INFORMATIONS: {
      const { employee } = store.getState();
      const response = await getOneEmployee(employee.id);
      if (response.status === 200) {
        const {
          id,
          firstname,
          lastname,
          email,
          adress,
          avatar,
          social_security_number: socialSecurityNumber,
          date_of_birth: dateOfBirth,
          zip_code: zipCode,
          starting_date: startingDate,
          function: fonction,
          role_application: roleApplication,
          qualification_label: label,
        } = response.data;

        store.dispatch(actions.actionGetEmployeeInformations({
          id,
          firstname,
          lastname,
          email,
          socialSecurityNumber,
          dateOfBirth,
          adress,
          zipCode,
          startingDate,
          avatar,
          fonction,
          roleApplication,
          label,
        }));
      }
      return;
    }
    case actions.CREATE_EMPLOYEE: {
      const { employee } = store.getState();
      const {
        firstname,
        lastname,
        email,
        socialSecurityNumber,
        dateOfBirth,
        adress,
        zipCode,
        startingDate,
        avatar,
        fonction,
        roleApplication,
        label,
      } = employee;
      const employeeDatas = {
        firstname,
        lastname,
        email,
        socialSecurityNumber,
        dateOfBirth,
        adress,
        zipCode,
        startingDate,
        avatar,
        fonction,
        roleApplication,
        label,
      };
      const response = await createEmployee(employeeDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionRequestEmployInformations(response.data.id));
      }
      return;
    }
    case actions.UPDATE_EMPLOYEE: {
      const { employee } = store.getState();
      const {
        firstname,
        lastname,
        email,
        socialSecurityNumber,
        dateOfBirth,
        adress,
        zipCode,
        startingDate,
        avatar,
        fonction,
        roleApplication,
        label,
      } = employee;
      const employeeDatas = {
        firstname,
        lastname,
        email,
        socialSecurityNumber,
        dateOfBirth,
        adress,
        zipCode,
        startingDate,
        avatar,
        fonction,
        roleApplication,
        label,
      };
      const response = await updateEmployee(employee.id, employeeDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionRequestEmployInformations(response.data.id));
      }
      return;
    }
    default: {
      next(action);
    }
  }
};

export default employeeMiddleware;
