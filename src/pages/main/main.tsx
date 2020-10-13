import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-state';
import { Container, Box, Grid, Hidden } from '@material-ui/core';

import { MainSlider } from './components/main-slider';
import { CategoryGrid } from './components/category-grid';
import { Banner } from '../../components/banner';
import { GiftCardGrid } from './components/gift-card-grid';
import LatestProductContainer from './components/product-grid/product-grid';
import CardSliderContainer from './components/card-slider/card-slider';

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
          <CardSliderContainer />
        </Box>
        {/* <Box mt={5} mb={5}>
          <Container>
            <Banner size="xl" imagesource="/assets/images/main/Baner.jpg" />
          </Container>
        </Box> */}
        <LatestProductContainer />
        {/* <Box mt={5} mb={5}>
          <GiftCardGrid />
        </Box> */}
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
