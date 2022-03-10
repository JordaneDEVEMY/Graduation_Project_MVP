export const UPDATE_EMAIL_INPUT = 'UPDATE_EMAIL_INPUT';
export const SUBMIT_EMAIL = 'SEND_EMAIL';

export function actionUpdateEmailInput(value) {
  return {
    type: UPDATE_EMAIL_INPUT, payload: value,
  };
}

export function actionSubmitEmail() {
  return {
    type: SUBMIT_EMAIL,
  };
}
