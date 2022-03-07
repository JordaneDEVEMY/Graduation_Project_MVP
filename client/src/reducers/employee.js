/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  id: 0,
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  socialSecurityNumber: '',
  dateOfBirth: '',
  adress: '',
  zipCode: '',
  startingDate: '',
  avatar: '',
  fonction: '',
  roleApplication: '',
  label: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // get employee informations
    case actions.GET_EMPLOYEE_INFORMATIONS:
      return {
        ...state,
        id: action.payload.id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
        socialSecurityNumber: action.payload.socialSecurityNumber,
        dateOfBirth: action.payload.dateOfBirth,
        adress: action.payload.adress,
        zipCode: action.payload.zipCode,
        startingDate: action.payload.startingDate,
        avatar: action.payload.avatar,
        fonction: action.payload.fonction,
        roleApplication: action.payload.roleApplication,
        qualificationId: action.payload.qualificationId,
        label: action.payload.label,
        assignments: action.payload.assignments,
      };
    // set employee informations
    case actions.SET_EMPLOYEE_INFORMATION:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    // reset employee informations
    case actions.RESET_EMPLOYEE_INFORMATIONS:
      return {
        ...state,
        id: initialState.id,
        firstname: initialState.firstname,
        lastname: initialState.lastname,
        email: initialState.email,
        socialSecurityNumber: initialState.socialSecurityNumber,
        dateOfBirth: initialState.dateOfBirth,
        adress: initialState.adress,
        zipCode: initialState.zipCode,
        startingDate: initialState.startingDate,
        avatar: initialState.avatar,
        fonction: initialState.fonction,
        roleApplication: initialState.roleApplication,
        qualificationId: initialState.qualificationId,
        label: initialState.label,
        assignments: initialState.assignments,
      };
    default:
      return state;
  }
}

export default reducer;
