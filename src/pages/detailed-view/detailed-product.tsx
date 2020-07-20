import React, { useState, useEffect } from 'react';
import { BreadCrumbs } from 'components/breadcrumbs';
import { RouteComponentProps } from 'react-router';
import { AppDispatch } from 'index';
import ApplicationState from 'store/application-store';
import { connect } from 'react-redux';
import DetailedProductView from './components/detailed-view/detailed-product-view';
import { Box, Grid, List, ListItem, Button, Typography, Link, Container } from '@material-ui/core';
import { displayData } from './../product-list/components/display/display.data';
import { CardSlider } from 'pages/main/components/card-slider';
import { cardData } from './../main/components/card-slider/card-slider.data';
import { MainBanner } from 'pages/main/components/main-banner';

interface DetailedProductProps extends RouteComponentProps {}

const _DetailedProductPage = (props: DetailedProductProps) => {
  const [posts, setPosts] = useState(displayData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  // const useStyles = makeStyles((theme: Theme) => ({
  //  ul: {
  //    justifyContent: ''
  //  }
  // }));

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
      <Container maxWidth={false} disableGutters={true}>
        <Box mt={5}>
          <DetailedProductView />
        </Box>

        <Box m={5}>
          <CardSlider />
        </Box>
        <Box m={5}>
          <MainBanner />
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
