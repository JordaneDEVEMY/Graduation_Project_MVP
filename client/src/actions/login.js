export const UPDATE_LOGIN_INPUT = 'UPDATE_LOGIN_INPUT';
export const SET_IS_LOGGED = 'SET_IS_LOGGED';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_USER_ROLE = 'SET_USER_ROLE';
export const LOGOUT = 'LOGOUT';

export function actionUpdateLoginInput(name, value) {
  return {
    type: UPDATE_LOGIN_INPUT, payload: { name, value },
  };
}

export function actionSetIsLogged(isLogged) {
  return {
    type: SET_IS_LOGGED, payload: isLogged,
  };
}

export function actionSubmitLogin() {
  return {
    type: SUBMIT_LOGIN,
  };
}

export function actionSetUserRole(role) {
  return {
    type: SET_USER_ROLE, payload: role,
  };
}

export function actionLogout() {
  return {
    type: LOGOUT,
  };
}
