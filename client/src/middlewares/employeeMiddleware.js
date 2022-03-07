import { } from '../requests';
import * as actions from '../actions';

const employeeMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    default: {
      next(action);
    }
  }
};

export default employeeMiddleware;
