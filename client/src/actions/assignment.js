// request assignment
export const REQUEST_ASSIGNMENT_INFORMATIONS = 'REQUEST_ASSIGNMENT_INFORMATIONS';
export const CREATE_ASSIGNMENT = 'CREATE_ASSIGNMENT';
export const UPDATE_ASSIGNMENT = 'UPDATE_ASSIGNMENT';
export const DELETE_ASSIGNMENT = 'DELETE_ASSIGNMENT';

// get assignment informations
export const GET_ASSIGNMENT_INFORMATIONS = 'GET_ASSIGNMENT_INFORMATIONS';
export const GET_ASSIGNMENT_ID = 'GET_ASSIGNMENT_ID';

// create or update assignment informations
export const SET_ASSIGNMENT_INFORMATION = 'SET_ASSIGNMENT_INFORMATION';

// reset assignment informations
export const RESET_ASSIGNMENT_INFORMATIONS = 'RESET_ASSIGNMENT_INFORMATIONS';

export function actionRequestAssignmentInformations() {
  return {
    type: REQUEST_ASSIGNMENT_INFORMATIONS,
  };
}

export function actionCreateAssignment() {
  return {
    type: CREATE_ASSIGNMENT,
  };
}

export function actionUpdateAssignment() {
  return {
    type: UPDATE_ASSIGNMENT,
  };
}

export function actionDeleteAssignment() {
  return {
    type: DELETE_ASSIGNMENT,
  };
}

export function actionGetAssignmentInformations({
  id,
  startingDate,
  endingDate,
  color,
  position,
  visibility,
  employeeId,
  siteId,
  absenceId,
}) {
  return {
    type: GET_ASSIGNMENT_INFORMATIONS,
    payload: {
      id,
      startingDate,
      endingDate,
      color,
      position,
      visibility,
      employeeId,
      siteId,
      absenceId,
    },
  };
}

export function actionGetAssignmentId(id) {
  return {
    type: GET_ASSIGNMENT_ID, payload: id,
  };
}

export function actionSetAssignmentInformation(key, value) {
  return {
    type: SET_ASSIGNMENT_INFORMATION,
    payload: { key, value },
  };
}

export function actionResetAssignmentInformations() {
  return {
    type: RESET_ASSIGNMENT_INFORMATIONS,
  };
}
