import React from 'react';
import { BreadCrumbs } from 'components/breadcrumbs';
import { RouteComponentProps } from 'react-router';
import { AppDispatch } from 'index';
import ApplicationState from 'store/application-store';
import { connect } from 'react-redux';
import DetailedProductView from './components/detailed-view/detailed-product-view';
import { Box, Grid } from '@material-ui/core';
import { Display } from 'pages/product-list/components/display';

interface DetailedProductProps extends RouteComponentProps {}

const _DetailedProductPage = (props: DetailedProductProps) => {
  return (
    <>
      <BreadCrumbs />
      <Box mt={5}>
        <DetailedProductView />
      </Box>
      <Grid item lg={8} xs={12}>
        <Box mt={5}>
          <Display />
        </Box>
      </Grid>
    </>
  );
};

const mapDisptachToProps = (disptach: AppDispatch) => ({});

const mapStateToProps = (state: ApplicationState) => {
  return {};
};

const DetailedProductPage = connect(() => mapStateToProps, mapDisptachToProps)(_DetailedProductPage);
export default DetailedProductPage;
