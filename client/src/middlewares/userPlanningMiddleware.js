import { requestUserPlanning } from '../requests/userPlanningRequest';
import * as actions from '../actions';

const userPlanningMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.GET_USER_PLANNING: {
      const { user } = store.getState();

      const response = await requestUserPlanning(user.id);

      if (response.status === 200) {
        const {
          qualification_label, assignments, phone_number: phoneNumber, mobile_number: mobileNumber,
        } = response.data;
        if (user.isAdmin) {
          store.dispatch(actions.actionGetUserLabel(qualification_label));
          store.dispatch(actions.actionGetUserPhoneNumber(phoneNumber));
          store.dispatch(actions.actionGetUserMobileNumber(mobileNumber));
        } else {
          store.dispatch(actions.actionGetUserAssignments(assignments));
          store.dispatch(actions.actionGetUserLabel(qualification_label));
          store.dispatch(actions.actionGetUserPhoneNumber(phoneNumber));
          store.dispatch(actions.actionGetUserMobileNumber(mobileNumber));
        }
      }
      return;
    }

    default: {
      next(action);
    }
  }
};

export default userPlanningMiddleware;
