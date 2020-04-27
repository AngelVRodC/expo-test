import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { appStore } from './src/@shared/store';
import AppRRoutes from './src/routes/index';
import { Root } from 'native-base';

 const App = ()  => {
  return (
    <Root>
    <Provider store={appStore}>
        <AppRRoutes />
    </Provider>
    </Root>
  );
}

export default App;
