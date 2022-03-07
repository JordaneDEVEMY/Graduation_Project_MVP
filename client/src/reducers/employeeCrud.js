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
  isAdmin: false,
  assignements: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
