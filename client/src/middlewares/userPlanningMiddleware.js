import { requestUserPlanning } from '../requests/userPlanningRequest';
import * as actions from '../actions';

const userPlanningMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.GET_USER_PLANNING: {
      const { user } = store.getState();

      const response = await requestUserPlanning(user.id);

      if (response.status === 200) {
        const { label, assignments } = response.data;

        store.dispatch(actions.actionGetUserAssignments(assignments));
        store.dispatch(actions.actionGetUserLabel(label));
      }
      return;
    }

    default: {
      next(action);
    }
  }
};

export default userPlanningMiddleware;
