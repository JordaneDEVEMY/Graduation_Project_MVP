import { requestLogin } from '../../requests/loginRequest';
import { setBearerToken, removeBearerToken } from '../../requests';
import * as actions from '../../actions';

const loginMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    // login action
    case actions.SUBMIT_LOGIN: {
      const { login } = store.getState();

      const response = await requestLogin(login.email, login.password);

      if (response.status === 200) {
        console.log(response);
        store.dispatch(actions.actionSetIsLogged(true));
        store.dispatch(actions.actionSetUserRole(response.data.role_application));

        setBearerToken(response.data.token);
      } else {
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
