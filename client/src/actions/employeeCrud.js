// get employee informations
export const GET_EMPLOYEE_INFORMATIONS = 'GET_EMPLOYEE_INFORMATIONS';

// update employee informations
export const SET_EMPLOYEE_FIRSTNAME = 'SET_EMPLOYEE_FIRSTNAME';
export const SET_EMPLOYEE_LASTNAME = 'SET_EMPLOYEE_LASTNAME';
export const SET_EMPLOYEE_EMAIL = 'SET_EMPLOYEE_EMAIL';
export const SET_EMPLOYEE_PASSWORD = 'SET_EMPLOYEE_PASSWORD';
export const SET_EMPLOYEE_SOCIAL_SECURITY_NUMBER = 'SET_EMPLOYEE_SOCIAL_SECURITY_NUMBER';
export const SET_EMPLOYEE_BIRTHDAY = 'SET_EMPLOYEE_BIRTHDAY';
export const SET_EMPLOYEE_ADRESS = 'SET_EMPLOYEE_ADRESS';
export const SET_EMPLOYEE_ZIPCODE = 'SET_EMPLOYEE_ZIPCODE';
export const SET_EMPLOYEE_STARTING_DATE = 'SET_EMPLOYEE_STARTING_DATE';
export const SET_EMPLOYEE_AVATAR = 'SET_EMPLOYEE_AVATAR';
export const SET_EMPLOYEE_FUNCTION = 'SET_EMPLOYEE_FUNCTION';
export const SET_EMPLOYEE_ROLE_APPLICATION = 'SET_EMPLOYEE_ROLE_APPLICATION';
export const SET_EMPLOYEE_QUALIFICATION = 'SET_EMPLOYEE_QUALIFICATION';
export const SET_EMPLOYEE_LABEL = 'SET_EMPLOYEE_LABEL';
export const SET_EMPLOYEE_ASSIGNEMENTS = 'SET_EMPLOYEE_ASSIGNEMENTS';

// reset employee informations
export const RESET_EMPLOYEE_INFORMATIONS = 'RESET_EMPLOYEE_INFORMATIONS';

export function actionGetEmployeeId({
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
  qualificationId,
  label,
  assignements,
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
      qualificationId,
      label,
      assignements,
    },
  };
}

export function actionSetEmployeeFirstname(firstname) {
  return {
    type: SET_EMPLOYEE_FIRSTNAME, payload: firstname,
  };
}

export function actionSetEmployeeLastname(lastname) {
  return {
    type: SET_EMPLOYEE_LASTNAME, payload: lastname,
  };
}

export function actionSetEmployeeEmail(email) {
  return {
    type: SET_EMPLOYEE_EMAIL, payload: email,
  };
}

export function actionSetEmployeePassword(password) {
  return {
    type: SET_EMPLOYEE_PASSWORD, payload: password,
  };
}

export function actionSetEmployeeSocialSecurityNumber(ssNum) {
  return {
    type: SET_EMPLOYEE_SOCIAL_SECURITY_NUMBER, payload: ssNum,
  };
}

export function actionSetEmployeeBirthday(dateOfBirth) {
  return {
    type: SET_EMPLOYEE_BIRTHDAY, payload: dateOfBirth,
  };
}

export function actionSetEmployeeAdress(adress) {
  return {
    type: SET_EMPLOYEE_ADRESS, payload: adress,
  };
}

export function actionSetEmployeeZipcode(zipCode) {
  return {
    type: SET_EMPLOYEE_ZIPCODE, payload: zipCode,
  };
}

export function actionSetEmployeeStartingDate(startingDate) {
  return {
    type: SET_EMPLOYEE_STARTING_DATE, payload: startingDate,
  };
}

export function actionSetEmployeeAvatar(avatar) {
  return {
    type: SET_EMPLOYEE_AVATAR, payload: avatar,
  };
}

export function actionSetEmployeeFunction(fonction) {
  return {
    type: SET_EMPLOYEE_FUNCTION, payload: fonction,
  };
}

export function actionSetEmployeeRole(role) {
  return {
    type: SET_EMPLOYEE_ROLE_APPLICATION, payload: role,
  };
}

export function actionSetEmployeeQualification(qualification) {
  return {
    type: SET_EMPLOYEE_QUALIFICATION, payload: qualification,
  };
}

export function actionSetEmployeeLabel(label) {
  return {
    type: SET_EMPLOYEE_LABEL, payload: label,
  };
}

export function actionSetEmployeeAssignements(assignements) {
  return {
    type: SET_EMPLOYEE_ASSIGNEMENTS, payload: assignements,
  };
}

export function actionResetEmployeeInformations() {
  return {
    type: RESET_EMPLOYEE_INFORMATIONS,
  };
}
