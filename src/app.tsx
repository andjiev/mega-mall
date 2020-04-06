import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { AppDispatch } from 'index';
import ApplicationState from 'store/application-store';
import { bootstrapApp } from 'store/shared-store';

import { ROUTES } from './consts';
import { Header } from './components/header';
import { Footer } from './components/footer';

import MainPage from './pages/main/main';
import { CircularProgress } from '@material-ui/core';

interface IApp {
  applicationBootstraped: boolean;

  bootstrapApp: () => void;
}

const _App: React.FC<IApp> = (props: IApp) => {
  useEffect(() => {
    props.bootstrapApp();
  }, []);
  return (
    <>
      {props.applicationBootstraped ? (
        <>
          <Header />
          <Route path={ROUTES.MAIN} component={MainPage} />
          <Footer />
        </>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  bootstrapApp: () => {
    dispatch(bootstrapApp());
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    applicationBootstraped: !state.ui.showInitialLoader
  };
};

const App = connect(() => mapStateToProps, mapDispatchToProps)(_App);

export default App;
