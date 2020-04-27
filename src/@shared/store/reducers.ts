import { combineReducers } from 'redux';

import menuReducer from './menu';
import usersReducer from './users';

export const AppReducers = () =>
  combineReducers({
    menu: menuReducer,
    users: usersReducer
  });
