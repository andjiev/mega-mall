import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import { createBrowserHistory } from "history";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureEasyFindStore from "./store/configure-store";
import { webGlobal, CURRENT_ENVIRONMENT } from "./consts";
import * as serviceWorker from "./serviceWorker";

// basename: webGlobal.url.root
const history = createBrowserHistory({ basename: 'http://localhost:3000' });
const store = configureEasyFindStore(history);

export type AppDispatch = typeof store.dispatch;
const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
