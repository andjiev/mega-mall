import React, { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent, Button, CardActions, Box, Hidden, List, ListItem } from '@material-ui/core';
import { Detailedproduct } from './detailed-product-view.data';
import { StyledImage, StyledStickyGridItem, StyledGridContainer, StyledCardContent, StyledBox, StyledLogo } from './detailed-product-view.styles';
import ProductItemList from '../../../product-list/components/display/product-item-list/product-item-list';

import { AppDispatch } from 'index';
import { getProductDetails } from 'store/product-details-store';
import ApplicationState from 'store/application-state';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

interface IProps {
  data: Models.Product.Model[];
  onInit: (id: string) => void;
}

const DetailedProductView = (props: IProps) => {
  let { id } = useParams();
  useEffect(() => {
    props.onInit(id.toString());
  }, []);

  return (
    <>
      <StyledGridContainer container spacing={5}>
        <Grid container item xs={12} lg={7} md={7} justify="center">
          <Box mb={3}>
            <Grid item xs={12} md={8} lg={8}>
              {Detailedproduct.map(val => (
                <Box key={val.id} m={3}>
                  <StyledImage key={val.id} src={props.data.imageSource}></StyledImage>
                </Box>
              ))}
            </Grid>
          </Box>
        </Grid>
        <StyledStickyGridItem item xs={12} sm={12} md={5} lg={5}>
          {/* TODO because of the wrapper in detailed-product.tsx we gave container and it pushes this card a little from the sides */}
          <Box mb={3}>
            <Card raised={true}>
              <StyledCardContent>
                <Box pb={1}>
                  <Typography variant="h4" gutterBottom>
                    {props.data.name}
                  </Typography>
                </Box>
                <Box pb={2}>
                  <Hidden mdDown>
                    <Typography variant="body1" noWrap paragraph={true}></Typography>
                  </Hidden>
                  <hr></hr>
                </Box>
                <StyledBox>
                  <Typography variant="h3" gutterBottom>
                    {props.data.price}
                  </Typography>
                  {/* <img src="/src/assets/images/product-list/logo-btns/Anhoch.png" height={40}></img> */}
                  <StyledLogo src="/src/assets/images/product-list/logo-btns/Anhoch.png" />
                </StyledBox>
              </StyledCardContent>
            </Card>
          </Box>
        </StyledStickyGridItem>
        <Grid item xs={12} md={7} lg={7}>
          <Box>{/* TODO add FILTER COMPONENT FOR DETAILED VIEW */}</Box>
          <Box>
            <ProductItemList isPaging="detailList" />
          </Box>
        </Grid>
      </StyledGridContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onInit: (id: string) => {
    dispatch(getProductDetails(id));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    data: state.productDetails.data
  };
};
const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(DetailedProductView);

export default DisplayContainer;
