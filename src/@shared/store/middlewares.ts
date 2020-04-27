import { applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';

// TODO: Middleware tho show error messages with toast

export const ApplyAppMiddleware = () => {
    let middleware = applyMiddleware(
      thunk
    );
  
    return middleware;
};