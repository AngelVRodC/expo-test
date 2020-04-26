import { createStore } from 'redux';
import { AppReducers } from '../../@shared/store/reducers';
import { ApplyAppMiddleware } from '../../@shared/store/middlewares';

export const appStore = createStore(
  AppReducers(),
  ApplyAppMiddleware()
);
