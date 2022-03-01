/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  email: '',
  password: '',
  isConnected: false,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_IS_CONNECTED:
      return {
        ...state,
        isConnected: action.payload,
      };

    default:
      return state;
  }
}

export default loginReducer;
