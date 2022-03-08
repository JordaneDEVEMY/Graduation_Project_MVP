/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  id: 0,
  name: '',
  address: '',
  zipCode: 0,
  type: '',
  createdAt: 0,
  updatedAt: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // get site informations
    case actions.GET_SITE_INFORMATIONS:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        address: action.payload.address,
        zipCode: action.payload.zipCode,
        type: action.payload.type,
        createdAt: action.payload.createdAt,
        updatedAt: action.payload.updatedAt,
      };
      // set site information
    case actions.SET_SITE_INFORMATION:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
      // reset site informations
    case actions.RESET_SITE_INFORMATIONS:
      return {
        ...state,
        id: initialState.id,
        name: initialState.name,
        address: initialState.address,
        zipCode: initialState.zipCode,
        type: initialState.type,
        createdAt: initialState.createdAt,
        updatedAt: initialState.updatedAt,
      };
    default:
      return state;
  }
}

export default reducer;
