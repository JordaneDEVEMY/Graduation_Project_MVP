export const SET_USER_ID = 'SET_USER_ID';
export const SET_USER_FIRSTNAME = 'SET_USER_FIRSTNAME';
export const SET_USER_LASTNAME = 'SET_USER_LASTNAME';
export const SET_USER_AVATAR = 'SET_USER_AVATAR';
export const SET_USER_ISADMIN = 'SET_USER_ISADMIN';
export const SET_USER_QUALIFICATION = 'SET_USER_QUALIFICATION';
export const SET_USER_LABEL = 'SET_USER_LABEL';
export const SET_USER_ASSIGNEMENTS = 'SET_USER_ASSIGNEMENTS';
export const GET_USER_PLANNING = 'GET_USER_PLANNING';
export const SET_USER_LOGOUT = 'SET_USER_LOGOUT';

export function actionSetUserId(id) {
  return {
    type: SET_USER_ID, payload: id,
  };
}

export function actionSetUserFirstname(firstname) {
  return {
    type: SET_USER_FIRSTNAME, payload: firstname,
  };
}

export function actionSetUserLastname(lastname) {
  return {
    type: SET_USER_LASTNAME, payload: lastname,
  };
}

export function actionSetUserAvatar(avatar) {
  return {
    type: SET_USER_AVATAR, payload: avatar,
  };
}

export function actionSetUserIsAdmin(boolean) {
  return {
    type: SET_USER_ISADMIN, payload: boolean,
  };
}

export function actionSetUserQualification(qualification) {
  return {
    type: SET_USER_QUALIFICATION, payload: qualification,
  };
}

export function actionSetUserLabel(label) {
  return {
    type: SET_USER_LABEL, payload: label,
  };
}

export function actionSetUserAssignements(assignements) {
  return {
    type: SET_USER_ASSIGNEMENTS, payload: assignements,
  };
}

export function actionGetUserPlanning() {
  return {
    type: GET_USER_PLANNING,
  };
}

export function actionSetUserLogout() {
  return {
    type: SET_USER_LOGOUT,
  };
}
