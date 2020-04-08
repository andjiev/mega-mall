import React from 'react';
import ReactDOM from 'react-dom';

import ApplicationState from './store/application-store';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app';
import { createBrowserHistory } from 'history';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureEasyFindStore from './store/configure-store';

// basename: webGlobal.url.root
const history = createBrowserHistory({ basename: 'http://localhost:4100' });
const store = configureEasyFindStore(history);

export type AppDispatch = ThunkDispatch<ApplicationState, null, Action<string>>;
const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
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
