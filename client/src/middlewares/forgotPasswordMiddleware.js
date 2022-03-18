import { forgotPasswordRequest } from '../requests/forgotPasswordRequest';
import * as actions from '../actions';

const forgotPasswordMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.SUBMIT_EMAIL: {
      const { forgotPassword } = store.getState();

      const response = await forgotPasswordRequest(forgotPassword.email);
      if (response.status === 200) {
        console.log('Un e-mail a été envoyé sur votre boîte mail !');
      }
      return;
    }

    default:
      next(action);
  }
};

export default forgotPasswordMiddleware;
