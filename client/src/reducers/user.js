/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  id: 0,
  firstname: '',
  lastname: '',
  password: '',
  avatar: '',
  label: '',
  isAdmin: false,
  assignments: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER_INFORMATIONS:
      return {
        ...state,
        id: action.payload.id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        avatar: action.payload.avatar,
      };

    case actions.UPDATE_USER_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };

    case actions.RESET_USER_PASSWORD:
      return {
        ...state,
        password: initialState.password,
      };

    case actions.GET_USER_LABEL:
      return {
        ...state,
        label: action.payload,
      };

    case actions.SET_USER_ISADMIN:
      return {
        ...state,
        isAdmin: action.payload,
      };

    case actions.GET_USER_ASSIGNMENTS:
      return {
        ...state,
        assignments: action.payload,
      };

    case actions.SET_USER_LOGOUT:
      return {
        ...state,
        id: initialState.id,
        firstname: initialState.firstname,
        lastname: initialState.lastname,
        password: initialState.password,
        avatar: initialState.avatar,
        isAdmin: initialState.isAdmin,
        label: initialState.label,
        assignments: initialState.assignments,
      };

    default:
      return state;
  }
}

export default reducer;
