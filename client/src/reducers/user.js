/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  id: 0,
  firstname: '',
  lastname: '',
  avatar: '',
  isAdmin: false,
  qualificationId: 0,
  label: '',
  assignements: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_USER_ID:
      return {
        ...state,
        id: action.payload,
      };

    case actions.SET_USER_FIRSTNAME:
      return {
        ...state,
        firstname: action.payload,
      };

    case actions.SET_USER_LASTNAME:
      return {
        ...state,
        lastname: action.payload,
      };

    case actions.SET_USER_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };

    case actions.SET_USER_ISADMIN:
      return {
        ...state,
        isAdmin: action.payload,
      };

    case actions.SET_USER_QUALIFICATION:
      return {
        ...state,
        qualificationId: action.payload,
      };

    case actions.SET_USER_LABEL:
      return {
        ...state,
        label: action.payload,
      };

    case actions.SET_USER_ASSIGNEMENTS:
      return {
        ...state,
        assignements: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
