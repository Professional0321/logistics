import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import styled from 'styled-components';
import store, { history } from './store';
import MainRoutes from './routes/Main';
import OverrideTheme from './components/OverrideTheme';

const App: React.FC = () => {
  return (
    <Container>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <OverrideTheme>
            <MainRoutes />
          </OverrideTheme>
        </ConnectedRouter>
      </Provider>
    </Container>
  );
};

const Container = styled.div`
  background-color: #0f1c37;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
`;

export default App;
