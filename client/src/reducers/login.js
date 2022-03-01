/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
  userRole: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_LOGIN_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case actions.SET_IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };

    case actions.SET_USER_ROLE:
      return {
        ...state,
        userRole: action.payload,
      };

    case actions.LOGOUT:
      return {
        ...state,
        email: initialState.email,
        password: initialState.password,
        isLogged: initialState.isLogged,
        userRole: initialState.userRole,
      };

    default:
      return state;
  }
}

export default reducer;
