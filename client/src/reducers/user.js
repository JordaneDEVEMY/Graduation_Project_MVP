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
  assignements: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER_ID:
      return {
        ...state,
        id: action.payload,
      };

    case actions.GET_USER_FIRSTNAME:
      return {
        ...state,
        firstname: action.payload,
      };

    case actions.GET_USER_LASTNAME:
      return {
        ...state,
        lastname: action.payload,
      };

    case actions.RESET_USER_PASSWORD:
      return {
        ...state,
        password: initialState.password,
      };

    case actions.GET_USER_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };

    case actions.SET_USER_ISADMIN:
      return {
        ...state,
        isAdmin: action.payload,
      };

    case actions.GET_USER_LABEL:
      return {
        ...state,
        label: action.payload,
      };

    case actions.GET_USER_ASSIGNEMENTS:
      return {
        ...state,
        assignements: action.payload,
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
        assignements: initialState.assignements,
      };

    default:
      return state;
  }
}

export default reducer;
