import { combineReducers } from 'redux';

import menuReducer from './menu';
import usersReducer from './users';
import statusReducer from './status';

export const AppReducers = () =>
  combineReducers({
    menu: menuReducer,
    users: usersReducer,
    status: statusReducer,
  });
