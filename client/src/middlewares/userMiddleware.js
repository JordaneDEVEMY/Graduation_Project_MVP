/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable camelcase */
import { updateUserInformations } from '../requests/userPlanningRequest';
import * as actions from '../actions';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.UPDATE_USER_INFORMATIONS: {
      const { user } = store.getState();
      const {
        password,
        phoneNumber,
        mobileNumber,
      } = user;
      const userDatas = {
        password,
        phoneNumber,
        mobileNumber,
      };
      const response = await updateUserInformations(user.id, userDatas);
      if (response.status === 200) {
        alert('Informations modifiées avec succès !');
        store.dispatch(actions.actionGetUserPlanning());
      }

      return;
    }

    default: {
      next(action);
    }
  }
};

export default userMiddleware;
