import { requestAdminPlanning } from '../requests/adminPlanningRequest';
import * as actions from '../actions';

const adminPlanningMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_ADMIN_PLANNING: {
      const response = await requestAdminPlanning();

      if (response.status === 200) {
        const { weekStart, planning } = response.data;

        store.dispatch(actions.actionGetAdminPlanning({ weekStart, planning }));
        store.dispatch(actions.actionGetUserPlanning());
      }
      return;
    }

    default: {
      next(action);
    }
  }
};

export default adminPlanningMiddleware;
