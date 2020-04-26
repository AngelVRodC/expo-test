import React from "react";
import { Router, Scene } from 'react-native-router-flux';
import { routes } from './routes-list';

const AppRRoutes = () => {
  return(
    <Router >
      <Scene key="root">
      {routes.map(route => (
        <Scene
          key={route.key}
          component={route.component}
          initial={route.initial}
          hideNavBar={route.hideNavBar}
        />
      ))}
      </Scene>
    </Router>
  );
}

export default AppRRoutes;

