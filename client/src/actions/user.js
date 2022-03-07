export const GET_USER_ID = 'GET_USER_ID';
export const GET_USER_FIRSTNAME = 'GET_USER_FIRSTNAME';
export const GET_USER_LASTNAME = 'GET_USER_LASTNAME';
export const GET_USER_AVATAR = 'GET_USER_AVATAR';
export const GET_USER_LABEL = 'GET_USER_LABEL';
export const SET_USER_ISADMIN = 'SET_USER_ISADMIN';
export const GET_USER_ASSIGNEMENTS = 'GET_USER_ASSIGNEMENTS';
export const GET_USER_PLANNING = 'GET_USER_PLANNING';
export const SET_USER_LOGOUT = 'SET_USER_LOGOUT';

export function actionGetUserId(id) {
  return {
    type: GET_USER_ID, payload: id,
  };
}

export function actionGetUserFirstname(firstname) {
  return {
    type: GET_USER_FIRSTNAME, payload: firstname,
  };
}

export function actionGetUserLastname(lastname) {
  return {
    type: GET_USER_LASTNAME, payload: lastname,
  };
}

export function actionGetUserAvatar(avatar) {
  return {
    type: GET_USER_AVATAR, payload: avatar,
  };
}

export function actionGetUserLabel(label) {
  return {
    type: GET_USER_LABEL, payload: label,
  };
}

export function actionSetUserIsAdmin(boolean) {
  return {
    type: SET_USER_ISADMIN, payload: boolean,
  };
}

export function actionGetUserAssignements(assignements) {
  return {
    type: GET_USER_ASSIGNEMENTS, payload: assignements,
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
