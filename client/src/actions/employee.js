// request employee
export const REQUEST_EMPLOYEE_INFORMATIONS = 'REQUEST_EMPLOYEE_INFORMATIONS';
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

// get employee informations
export const GET_EMPLOYEE_INFORMATIONS = 'GET_EMPLOYEE_INFORMATIONS';
export const GET_EMPLOYEE_ID = 'GET_EMPLOYEE_ID';

// create or update employee informations
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

export function actionDeleteEmployee() {
  return {
    type: DELETE_EMPLOYEE,
  };
}

export function actionGetEmployeeInformations({
  id,
  firstname,
  lastname,
  email,
  phone_number: phoneNumber,
  mobile_number: mobileNumber,
  social_security_number: socialSecurityNumber,
  date_of_birth: dateOfBirth,
  address,
  zip_code: zipCode,
  starting_date: startingDate,
  avatar,
  fonction,
  role_application: roleApplication,
  label,
}) {
  return {
    type: GET_EMPLOYEE_INFORMATIONS,
    payload: {
      id,
      firstname,
      lastname,
      email,
      phoneNumber,
      mobileNumber,
      socialSecurityNumber,
      dateOfBirth,
      address,
      zipCode,
      startingDate,
      avatar,
      fonction,
      roleApplication,
      label,
    },
  };
}

export function actionGetEmployeeId(id) {
  return {
    type: GET_EMPLOYEE_ID, payload: id,
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
