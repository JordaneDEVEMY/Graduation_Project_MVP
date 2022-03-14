/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  weekStart: '',
  absences: [],
  planning: [],
  allQualifications: [],
  allAbscences: [],
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
    case actions.GET_ALL_QUALIFICATIONS:
      return {
        ...state,
        allQualifications: action.payload,
      };
    case actions.GET_ALL_ABSENCES:
      return {
        ...state,
        allAbscences: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
