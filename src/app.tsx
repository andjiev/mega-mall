import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { AppDispatch } from 'index';
import ApplicationState from 'store/application-store';
import { bootstrapApp } from 'store/shared-store';

import LoadingScreen from 'react-loading-screen';
import { Box } from '@material-ui/core';

import { ROUTES } from './consts';
import { Header } from './components/header';
import { Footer } from './components/footer';

import { MainPage } from 'pages/main';
import { CategoryPage } from 'pages/category';

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
          <Box height="100%" minHeight="100vh" display="flex" flexDirection="column">
            <Route exact path={ROUTES.MAIN} component={MainPage} />
            <Route path={ROUTES.CATEGORY} component={CategoryPage} />
          </Box>
          <Footer />
        </>
      ) : (
        <LoadingScreen loading bgColor="#0d1440" spinnerColor="#BF1736">
          <Box component="span">Default loading text to fix the children? error</Box>
        </LoadingScreen>
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
