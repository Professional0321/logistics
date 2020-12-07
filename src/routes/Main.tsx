import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login';

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  );
};

export default MainRoutes;
