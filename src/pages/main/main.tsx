import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-store';
import { Container, Box } from '@material-ui/core';

import { MainSlider } from './components/main-slider';
import { CategoryGrid } from './components/category-grid';
import { CardSlider } from './components/card-slider';
import { MainBanner } from './components/main-banner';
import { ProductGrid } from './components/product-grid';
import { GiftCardGrid } from './components/gift-card-grid';

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
        <MainBanner />
        <ProductGrid />
        <GiftCardGrid />
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
