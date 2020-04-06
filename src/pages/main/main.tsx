import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-store';

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
      <CategoryGrid />
      <CardSlider />
      <MainBanner />
      <ProductGrid />
      <GiftCardGrid />
    </>
  );
};

const mapDisptachToProps = (disptach: AppDispatch) => ({});

const mapStateToProps = (state: ApplicationState) => {
  return {};
};

const MainPage = connect(() => mapStateToProps, mapDisptachToProps)(_MainPage);
export default MainPage;
