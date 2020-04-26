import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { appStore } from './src/@shared/store';
import AppRRoutes from './src/routes/index';

 const App = ()  => {
  return (
    <Provider store={appStore}>
      <AppRRoutes />
    </Provider>
  );
}

export default App;
