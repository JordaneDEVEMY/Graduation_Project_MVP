// request site
export const REQUEST_COMPANY_INFORMATIONS = 'REQUEST_COMPANY_INFORMATIONS';
export const CREATE_COMPANY = 'CREATE_COMPANY';
export const UPDATE_COMPANY = 'UPDATE_COMPANY';
export const DELETE_COMPANY = 'DELETE_COMPANY';

// get site informations
export const GET_COMPANY_INFORMATIONS = 'GET_COMPANY_INFORMATIONS';
export const GET_COMPANY_ID = 'GET_COMPANY_ID';

// create or update site informations
export const SET_COMPANY_INFORMATION = 'SET_COMPANY_INFORMATION';

// reset site informations
export const RESET_COMPANY_INFORMATIONS = 'RESET_COMPANY_INFORMATIONS';

export function actionRequestCompanyInformations() {
  return {
    type: REQUEST_COMPANY_INFORMATIONS,
  };
}

export function actionCreateCompany() {
  return {
    type: CREATE_COMPANY,
  };
}

export function actionUpdateCompany() {
  return {
    type: UPDATE_COMPANY,
  };
}

export function actionDeleteCompany() {
  return {
    type: DELETE_COMPANY,
  };
}

export function actionGetCompanyInformations({
  id,
  name,
  adress,
  zipCode,
  type,
  createdAt,
  updatedAt,
}) {
  return {
    type: GET_COMPANY_INFORMATIONS,
    payload: {
      id,
      name,
      adress,
      zipCode,
      type,
      createdAt,
      updatedAt,
    },
  };
}

export function actionGetCompanyId(id) {
  return {
    type: GET_COMPANY_ID, payload: id,
  };
}

export function actionSetCompanyInformation(key, value) {
  return {
    type: SET_COMPANY_INFORMATION,
    payload: { key, value },
  };
}

export function actionResetCompanyInformations() {
  return {
    type: RESET_COMPANY_INFORMATIONS,
  };
}
