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
  function: '',
  roleApplication: '',
  qualificationId: 0,
  label: '',
  assignements: [],
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
        assignements: action.payload.assignements,
      };
    default:
      return state;
  }
}

export default reducer;
