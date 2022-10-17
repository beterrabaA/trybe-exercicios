// src/redux/index.js

import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';
import carReducer from './carReducer';
import trafficReducer from './trafficReducer';

const reducer = combineReducers({
  carReducer,
  trafficReducer});

const store = createStore(
  reducer,
  composeWithDevTools(),
);

export default store;
