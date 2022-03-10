/* eslint-disable no-alert */
/* eslint-disable camelcase */
import { updateUserInformations } from '../requests/userRequest';
import * as actions from '../actions';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.UPDATE_USER_INFORMATIONS: {
      const { user } = store.getState();
      const {
        password,
        phoneNumber: phone_number,
        mobileNumber: mobile_number,
      } = user;
      const userDatas = {
        password,
        phone_number,
        mobile_number,
      };
      const response = await updateUserInformations(user.id, userDatas);
      if (response.status === 200) {
        alert('Informations modifiées avec succès !');
      }

      return;
    }

    default: {
      next(action);
    }
  }
};

export default userMiddleware;
