// Neste arquivo você deverá combinar os seus reducers.
import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import trafficReducer from './trafficReducer';

const rootReducer = combineReducers({ carsReducer, trafficReducer });

export default rootReducer;
