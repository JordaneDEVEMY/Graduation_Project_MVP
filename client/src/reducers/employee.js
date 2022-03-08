/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  id: 0,
  firstname: '',
  lastname: '',
  email: '',
  phoneNumber: '',
  mobileNumber: '',
  password: '',
  address: '',
  zipCode: '',
  socialSecurityNumber: '',
  dateOfBirth: '',
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
        phoneNumber: action.payload.phoneNumber,
        mobileNumber: action.payload.mobileNumber,
        address: action.payload.address,
        zipCode: action.payload.zipCode,
        socialSecurityNumber: action.payload.socialSecurityNumber,
        dateOfBirth: action.payload.dateOfBirth,
        startingDate: action.payload.startingDate,
        avatar: action.payload.avatar,
        fonction: action.payload.fonction,
        roleApplication: action.payload.roleApplication,
        label: action.payload.label,
      };
    case actions.GET_EMPLOYEE_ID:
      return {
        ...state,
        id: action.payload,
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
        password: initialState.password,
        phoneNumber: initialState.phoneNumber,
        mobileNumber: initialState.mobileNumber,
        address: initialState.address,
        zipCode: initialState.zipCode,
        socialSecurityNumber: initialState.socialSecurityNumber,
        dateOfBirth: initialState.dateOfBirth,
        startingDate: initialState.startingDate,
        avatar: initialState.avatar,
        fonction: initialState.fonction,
        roleApplication: initialState.roleApplication,
        label: initialState.label,
      };
    default:
      return state;
  }
}

export default reducer;
