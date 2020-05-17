import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-store';

import { BreadCrumbs } from 'components/breadcrumbs';
import { Grid, Box } from '@material-ui/core';
import { Filter } from './components/filter';
import { Display } from './components/display';

interface IProps extends RouteComponentProps {}

const ProductList = (props: IProps) => {
  return (
    <>
      <BreadCrumbs />
      <Box mt={5}>
        <Grid container>
          <Grid item xs={12} md={4} lg={3} xl={2}>
            <Filter />
          </Grid>
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

const ProductListPage = connect(() => mapStateToProps, mapDisptachToProps)(ProductList);
export default ProductListPage;
