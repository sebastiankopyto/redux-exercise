/**
 * Main file for all reducers
 * Reducers are like an event handlers for actions, it means that action "emits an event" with type and reducers "catches" this event and calls method
 */

import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  count: counterReducer,
  isLoggedIn: isLoggedReducer
});

export default allReducers;