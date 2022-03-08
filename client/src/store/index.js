import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import loginMiddleware from '../middlewares/loginMiddleware';
import userPlanningMiddleware from '../middlewares/userPlanningMiddleware';
import employeeMiddleware from '../middlewares/employeeMiddleware';
import siteMiddleware from '../middlewares/siteMiddleware';
import adminPlanningMiddleware from '../middlewares/adminPlanningMiddleware';

const allMiddlewares = applyMiddleware(
  loginMiddleware,
  userPlanningMiddleware,
  employeeMiddleware,
  siteMiddleware,
  adminPlanningMiddleware,
);

//  to use redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allMiddlewaresWithReduxDevTools = composeEnhancers(
  allMiddlewares,
);

const store = createStore(
  reducer,
  allMiddlewaresWithReduxDevTools,
);

export default store;
