import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import loginMiddleware from '../middlewares/loginMiddleware';
import userPlanningMiddleware from '../middlewares/userPlanningMiddleware';
import employeeMiddleware from '../middlewares/employeeMiddleware';

const allMiddlewares = applyMiddleware(
  loginMiddleware,
  userPlanningMiddleware,
  employeeMiddleware,
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
