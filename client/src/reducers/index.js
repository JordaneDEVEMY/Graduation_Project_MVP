import { combineReducers } from 'redux';

import loginReducer from './login';
import userReducer from './user';
import employeeReducer from './employee';
import siteReducer from './site';

export default combineReducers({
  login: loginReducer,
  user: userReducer,
  employee: employeeReducer,
  site: siteReducer,
});
