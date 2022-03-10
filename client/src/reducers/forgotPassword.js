/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  email: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_EMAIL_INPUT:
      return {
        ...state,
        email: action.payload.value,
      };

    default:
      return state;
  }
}

export default reducer;
