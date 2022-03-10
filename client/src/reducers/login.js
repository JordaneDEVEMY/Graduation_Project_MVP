/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  email: 'aurliencaleb3012@hotmail.ca',
<<<<<<< HEAD
  password: 'LTK85EWH8HM',
=======
  password: 'XVY63DPU4XY',
>>>>>>> 2917f16 (add condition to the confirm password)
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
