import { requestUserPlanning } from '../requests/userPlanningRequest';
import * as actions from '../actions';

const userPlanningMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.GET_USER_PLANNING: {
      const { user } = store.getState();

      const response = await requestUserPlanning(user.id);
      console.log(response);
      if (response.status === 200) {
        store.dispatch(actions.actionSetUserAssignements());
      }
      return;
    }

    default: {
      next(action);
    }
  }
};

export default userPlanningMiddleware;
