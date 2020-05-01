import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { AppDispatch } from 'index';
import ApplicationState from 'store/application-store';
import { bootstrapApp } from 'store/shared-store';

import { ROUTES } from './consts';
import { Box } from '@material-ui/core';
import LoadingScreen from 'react-loading-screen';

interface IApp {
  applicationBootstraped: boolean;

  bootstrapApp: () => void;
}

const _App: React.FC<IApp> = (props: IApp) => {
  useEffect(() => {
    props.bootstrapApp();
  }, []);

  const Header = lazy(() => import('components/header'));
  const Footer = lazy(() => import('components/footer'));
  const MainPage = lazy(() => import('pages/main'));
  const CategoryPage = lazy(() => import('pages/category'));

  return (
    <>
      {props.applicationBootstraped ? (
        <>
          <Suspense
            fallback={
              <LoadingScreen loading bgColor="#0d1440" spinnerColor="#BF1736">
                <Box component="span">Default loading text to fix the children? error</Box>
              </LoadingScreen>
            }
          >
            <Header />
            <Box height="100%" minHeight="100vh" display="flex" flexDirection="column">
              <Switch>
                <Route exact path={ROUTES.MAIN} component={MainPage} />
                <Route path={ROUTES.CATEGORY} component={CategoryPage} />
              </Switch>
            </Box>
            <Footer />
          </Suspense>
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
