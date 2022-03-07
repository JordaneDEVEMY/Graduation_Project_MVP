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
          id, firstname, lastname, email, adress, avatar,
        } = response.data;
        const socialSecurityNumber = response.data.social_security_number;
        const dateOfBirth = response.data.date_of_birth;
        const zipCode = response.data.zip_code;
        const startingDate = response.data.starting_date;
        const fonction = response.data.function;
        const roleApplication = response.data.role_application;
        const label = response.data.qualification_label;

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
    default: {
      next(action);
    }
  }
};

export default employeeMiddleware;
