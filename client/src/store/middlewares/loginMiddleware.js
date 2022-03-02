import { requestLogin } from '../../requests/loginRequest';
import { setBearerToken, removeBearerToken } from '../../requests';
import * as actions from '../../actions';

const loginMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    // login action
    case actions.SUBMIT_LOGIN: {
      const { login } = store.getState();

      const response = await requestLogin(login.email, login.password);
      console.log(response);
      if (response.status === 200) {
        store.dispatch(actions.actionSetUserId(response.data.id));

        if (response.data.role_application === 'admin') {
          store.dispatch(actions.actionSetUserIsAdmin(true));
        }

        store.dispatch(actions.actionSetIsLogged(true));
        store.dispatch(actions.actionSetUserFirstname(response.data.firstname));
        store.dispatch(actions.actionSetUserLastname(response.data.lastname));
        store.dispatch(actions.actionSetUserAvatar(response.data.avatar));

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
