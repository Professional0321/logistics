import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import { Routes } from './routes';
import OverrideTheme from './components/OverrideTheme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <OverrideTheme>
          <Routes />
        </OverrideTheme>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
