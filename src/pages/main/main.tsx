import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-state';
import { Container, Box, Grid, Hidden } from '@material-ui/core';

import { MainSlider } from './components/main-slider';
import { Banner } from '../../components/banner';
import { GiftCardGrid } from './components/gift-card-grid';
import LatestProductContainer from './components/product-grid/product-grid';
import CardSliderContainer from './components/card-slider/card-slider';
import CategoryGridContainer from './components/category-grid/category-grid';

interface MainPageProps extends RouteComponentProps {}

const _MainPage = (props: MainPageProps) => {
  return (
    <>
      <MainSlider />

      <Container>
        <Box mt={5}>
          <CategoryGridContainer />
        </Box>
        <Box mt={5}>
          <CardSliderContainer />
        </Box>
        <Box mt={5} mb={5}>
          <Grid container justify="center">
            <Hidden mdDown>
              <Grid item xs={6}>
                <Banner size="xl" imagesource="/assets/images/main/Baner.jpg" />
              </Grid>
            </Hidden>

            <Hidden mdUp>
              <Grid item xs={12}>
                <Banner size="menu" imagesource="/assets/images/main/Baner.jpg" />
              </Grid>
            </Hidden>
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
