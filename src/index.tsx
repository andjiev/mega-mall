import React from 'react';
import ReactDOM from 'react-dom';

import ApplicationState from './store/application-state';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import './theme';

import App from './app';
import { createBrowserHistory } from 'history';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureMegaMallStore from './store/configure-store';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { theme } from './theme';

const history = createBrowserHistory({ basename: ROOT });
const store = configureMegaMallStore(history);

export type AppDispatch = ThunkDispatch<ApplicationState, null, Action<string>>;
const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <StylesProvider injectFirst>
            <SCThemeProvider theme={theme}>
              <MuiThemeProvider theme={theme}>
                <Component />
              </MuiThemeProvider>
            </SCThemeProvider>
          </StylesProvider>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

declare const module: any;
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    render(NextApp);
  });
}
