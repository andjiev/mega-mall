import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-store';

import { Grid } from '@material-ui/core';
import { Navigation } from './components/navigation';
import { Display } from './components/display';

interface CategoryPageProps extends RouteComponentProps {}

const _CategoryPage = (props: CategoryPageProps) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={2}>
          <Navigation />
        </Grid>
        <Grid item>
          <Display />
        </Grid>
      </Grid>
    </>
  );
};

const mapDisptachToProps = (disptach: AppDispatch) => ({});

const mapStateToProps = (state: ApplicationState) => {
  return {};
};

const CategoryPage = connect(() => mapStateToProps, mapDisptachToProps)(_CategoryPage);
export default CategoryPage;
