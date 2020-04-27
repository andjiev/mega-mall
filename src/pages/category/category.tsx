import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-store';

import { BreadCrumbs } from 'components/breadcrumbs';
import { Grid, Box } from '@material-ui/core';
import { Navigation } from './components/navigation';
import { Display } from './components/display';

interface CategoryPageProps extends RouteComponentProps {}

const _CategoryPage = (props: CategoryPageProps) => {
  return (
    <>
      <BreadCrumbs />
      <Box mt={5}>
        <Grid container>
          <Grid item xs={12} md={4} lg={3} xl={2}>
            <Navigation />
          </Grid>
          <Grid item>
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
