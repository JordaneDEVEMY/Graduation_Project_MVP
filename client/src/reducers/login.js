/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  email: 'xavier_caleb4493@yahoo.edu',
<<<<<<< HEAD
>>>>>>> dd310d7 (change user in initialState to help the merge)
=======
>>>>>>> 6a18b1c (conflict resolution)
  password: 'LTK85EWH8HM',
  isLogged: false,
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

    case actions.RESET_PASSWORD:
      return {
        ...state,
        password: initialState.password,
      };

    case actions.LOGOUT:
      return {
        ...state,
        email: initialState.email,
        password: initialState.password,
        isLogged: initialState.isLogged,
      };

    default:
      return state;
  }
}

export default reducer;
