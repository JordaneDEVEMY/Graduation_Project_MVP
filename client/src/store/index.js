import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';

const allMiddlewares = applyMiddleware();

//  pour que redux dev tool fonctionne
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const allMiddlewaresWithReduxDevTools = composeEnhancers(
  allMiddlewares,
);

const store = createStore(
  reducer, // <= ici on met notre reducers
  allMiddlewaresWithReduxDevTools,
);

export default store;
