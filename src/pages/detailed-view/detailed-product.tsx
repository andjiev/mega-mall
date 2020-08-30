import React, { useState, useEffect } from 'react';
import { BreadCrumbs } from './../../components/breadcrumbs';
import { RouteComponentProps } from 'react-router';
import { AppDispatch } from './../../index';
import ApplicationState from './../../store/application-store';
import { connect } from 'react-redux';
import DetailedProductView from './components/detailed-view/detailed-product-view';
import { Box, Grid, List, ListItem, Button, Typography, Link, Container } from '@material-ui/core';
import { displayData } from '../product-list/components/display/product-item-list/product-item-list.data';
import { CardSlider } from './../main/components/card-slider';
import { cardData } from './../main/components/card-slider/card-slider.data';
import { Banner } from '../../components/banner';

interface DetailedProductProps extends RouteComponentProps {}

const _DetailedProductPage = (props: DetailedProductProps) => {
  const [posts, setPosts] = useState(displayData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  var pages = 0;
  if (posts.length % postPerPage == 0) {
    pages = posts.length / postPerPage;
  } else {
    pages = Math.floor(posts.length / postPerPage) + 1;
  }

  //with useEffect implement onChange paginate to send the page number to backend so it can chancge the state in the func and re-render it with new data sent from server.

  const paginate = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <>
      <BreadCrumbs />
      <Container maxWidth={false}>
        {/* TODO because of the container the card in DetailedProductVied is not fullWidth */}
        <Box mt={5}>
          <DetailedProductView />
        </Box>
        <Box m={5}>
          <CardSlider />
        </Box>
        <Box m={5}>
          <Grid container justify="center">
            <Grid item xs={8}>
              <Banner size="l" imagesource="/assets/images/main/Banner2.png" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

const mapDisptachToProps = (disptach: AppDispatch) => ({});

const mapStateToProps = (state: ApplicationState) => {
  return {};
};

const DetailedProductPage = connect(() => mapStateToProps, mapDisptachToProps)(_DetailedProductPage);
export default DetailedProductPage;
