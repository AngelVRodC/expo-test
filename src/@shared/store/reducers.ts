import { combineReducers } from 'redux';

import menuReducer from './menu';

export const AppReducers = () =>
  combineReducers({
    menu: menuReducer,
  });
