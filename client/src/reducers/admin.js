/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  weekStart: '',
  absences: [],
  planning: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ADMIN_PLANNING:
      return {
        ...state,
        weekStart: action.payload.weekStart,
        absences: action.payload.absences,
        planning: action.payload.planning,
      };
    default:
      return state;
  }
}

export default reducer;
