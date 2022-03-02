import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import loginMiddleware from './middlewares/loginMiddleware';

const allMiddlewares = applyMiddleware(
  loginMiddleware,
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
