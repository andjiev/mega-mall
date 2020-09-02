import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-state';

import { BreadCrumbs } from 'components/breadcrumbs';
import { Grid, Box, Hidden } from '@material-ui/core';
import { Navigation } from './components/navigation';
import { Display } from './components/display';

interface CategoryPageProps extends RouteComponentProps {}

const _CategoryPage = (props: CategoryPageProps) => {
  return (
    <>
      <BreadCrumbs />
      <Box>
        <Grid container>
          <Hidden xsDown>
            <Grid item md={4} lg={3} xl={2}>
              <Navigation />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={8} lg={9} xl={10}>
            <Display />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const mapDisptachToProps = (disptach: AppDispatch) => ({});

const mapStateToProps = (state: ApplicationState) => {
  return {};
};

const CategoryPage = connect(() => mapStateToProps, mapDisptachToProps)(_CategoryPage);
export default CategoryPage;
