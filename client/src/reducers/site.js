/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  id: 0,
  name: '',
  adress: '',
  zipCode: 0,
  managerName: '',
  estimatedDuration: 0,
  companyId: 0,
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
        adress: action.payload.address,
        zipCode: action.payload.zipCode,
        managerName: action.payload.managerName,
        estimatedDuration: action.payload.estimatedDuration,
        companyId: action.payload.companyId,
        createdAt: action.payload.createdAt,
        updated: action.payload.updated,
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
        adress: initialState.adress,
        zipCode: initialState.zipCode,
        managerName: initialState.managerName,
        estimatedDuration: initialState.estimatedDuration,
        companyId: initialState.companyId,
        createdAt: initialState.createdAt,
        updated: initialState.updated,
      };
    default:
      return state;
  }
}

export default reducer;
