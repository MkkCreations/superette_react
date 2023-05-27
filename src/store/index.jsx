import { legacy_createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../Reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = legacy_createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;