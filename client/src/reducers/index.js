import { combineReducers } from 'redux';

import loginReducer from './login';
import userReducer from './user';
import employeeReducer from './employeeCrud';

export default combineReducers({
  login: loginReducer,
  user: userReducer,
  employee: employeeReducer,
});
