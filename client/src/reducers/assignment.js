/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  id: 0,
  startingDate: '',
  endingDate: '',
  color: '',
  position: 0,
  visibility: true,
  employeeId: 0,
  siteId: null,
  absenceId: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // get assignment informations
    case actions.GET_ASSIGNMENT_INFORMATIONS:
      return {
        ...state,
        id: action.payload.id,
        startingDate: action.payload.startingDate,
        endingDate: action.payload.endingDate,
        color: action.payload.color,
        position: action.payload.position,
        visibility: action.payload.visibility,
        employeeId: action.payload.employeeId,
        siteId: action.payload.siteId,
        absenceId: action.payload.absenceId,
      };
    case actions.GET_ASSIGNMENT_ID:
      return {
        ...state,
        id: action.payload,
      };
      // set assignment information
    case actions.SET_ASSIGNMENT_INFORMATION:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
      // reset assignment informations
    case actions.RESET_ASSIGNMENT_INFORMATIONS:
      return {
        ...state,
        id: action.payload.id,
        startingDate: initialState.startingDate,
        endingDate: initialState.endingDate,
        color: initialState.color,
        position: initialState.position,
        visibility: initialState.visibility,
        employeeId: initialState.employeeId,
        siteId: initialState.siteId,
        absenceId: initialState.absenceId,
      };
    default:
      return state;
  }
}

export default reducer;
