import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-store';
import { Container, Box, Grid } from '@material-ui/core';

import { MainSlider } from './components/main-slider';
import { CategoryGrid } from './components/category-grid';
import { CardSlider } from './components/card-slider';
import { Banner } from '../../components/banner';
import { ProductGrid } from './components/product-grid';
import { GiftCardGrid } from './components/gift-card-grid';
import LatestProductContainer from './components/product-grid/product-grid';

interface MainPageProps extends RouteComponentProps {}

const _MainPage = (props: MainPageProps) => {
  return (
    <>
      <MainSlider />

      <Container>
        <Box mt={5}>
          <CategoryGrid />
        </Box>
        <Box mt={5}>
          <CardSlider />
        </Box>
        <Box mt={5} mb={5}>
          <Grid container justify="center">
            <Grid item xs={6}>
              <Banner size="xl" url="https://www.facebook.com" />
            </Grid>
          </Grid>
        </Box>
        <LatestProductContainer />
        <Box mt={5} mb={5}>
          <GiftCardGrid />
        </Box>
      </Container>
    </>
  );
};

const mapDisptachToProps = (disptach: AppDispatch) => ({});

const mapStateToProps = (state: ApplicationState) => {
  return {};
};

const MainPage = connect(() => mapStateToProps, mapDisptachToProps)(_MainPage);
export default MainPage;
