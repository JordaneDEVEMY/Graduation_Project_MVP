/* eslint-disable camelcase */
import { requestLogin } from '../requests/loginRequest';
import { setBearerToken, removeBearerToken } from '../requests';
import * as actions from '../actions';

const loginMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    // login action
    case actions.SUBMIT_LOGIN: {
      const { login } = store.getState();

      const response = await requestLogin(login.email, login.password);
      if (response.status === 200) {
        const {
          id, firstname, lastname, avatar, token, role_application,
        } = response.data;

        store.dispatch(actions.actionResetPassword());
        store.dispatch(actions.actionGetUserInformations({
          id, firstname, lastname, avatar,
        }));

        if (role_application === 'admin') {
          store.dispatch(actions.actionSetUserIsAdmin(true));
        }

        store.dispatch(actions.actionSetIsLogged(true));
        setBearerToken(token);
        store.dispatch(actions.actionSetGoodLogin(true));
      } else {
        store.dispatch(actions.actionSetGoodLogin(false));
        store.dispatch(actions.actionSetIsLogged(false));
      }
      return;
    }

    case actions.LOGOUT:
      removeBearerToken();
      next(action);
      break;

    default:
      next(action);
  }
};

export default loginMiddleware;
