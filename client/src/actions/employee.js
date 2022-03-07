// request employee
export const REQUEST_EMPLOYEE_INFORMATIONS = 'REQUEST_EMPLOYEE_INFORMATIONS';
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

// get employee informations
export const GET_EMPLOYEE_INFORMATIONS = 'GET_EMPLOYEE_INFORMATIONS';

// update employee informations
export const SET_EMPLOYEE_INFORMATION = 'SET_EMPLOYEE_INFORMATION';

// reset employee informations
export const RESET_EMPLOYEE_INFORMATIONS = 'RESET_EMPLOYEE_INFORMATIONS';

export function actionRequestEmployInformations() {
  return {
    type: REQUEST_EMPLOYEE_INFORMATIONS,
  };
}

export function actionCreateEmployee() {
  return {
    type: CREATE_EMPLOYEE,
  };
}

export function actionUpdateEmployee() {
  return {
    type: UPDATE_EMPLOYEE,
  };
}

export function actionGetEmployeeInformations({
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
}) {
  return {
    type: GET_EMPLOYEE_INFORMATIONS,
    payload: {
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
    },
  };
}

export function actionSetEmployeeInformation(key, value) {
  return {
    type: SET_EMPLOYEE_INFORMATION, payload: { key, value },
  };
}

export function actionResetEmployeeInformations() {
  return {
    type: RESET_EMPLOYEE_INFORMATIONS,
  };
}
