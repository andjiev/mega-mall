import React from 'react';
import { Grid, Typography, Card, CardContent, Button, CardActions, Box, Hidden, List, ListItem } from '@material-ui/core';
import { Detailedproduct } from './detailed-product-view.data';
import { StyledImage, StyledStickyGridItem, StyledGridContainer, StyledCardContent, StyledBox } from './detailed-product-view.styles';
import ProductItemList from '../../../product-list/components/display/product-item-list/product-item-list';

const DetailedProductView = () => {
  return (
    <>
      <StyledGridContainer container spacing={5}>
        <Grid container item xs={12} lg={7} md={7} justify="center">
          <Box mb={3}>
            <Grid item xs={12} md={8} lg={8}>
              {Detailedproduct.map(val => (
                <Box key={val.id} m={3}>
                  <StyledImage key={val.id} src={val.url}></StyledImage>
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
                  <Typography variant="h3" gutterBottom>
                    1Notebook Apple MacBook Air i5 2.9Ghz/8GB/256GB SSD/IntelHD6000/13.3 LED Retina MREC2
                  </Typography>
                </Box>
                <Box pb={2}>
                  <Typography variant="body1" noWrap paragraph={true}>
                    Retina display 13.3-inch (diagonal) LED-backlit display with IPS technology; 2560-by-1600 native resolution at 227 pixels per inch with support for millions of colors
                  </Typography>
                  <hr></hr>
                </Box>
                <StyledBox>
                  <Typography variant="h2" gutterBottom>
                    45.000 ден
                  </Typography>
                  <img src="/src/assets/images/product-list/logo-btns/Anhoch.png" height={40}></img>
                </StyledBox>
              </StyledCardContent>
            </Card>
          </Box>
        </StyledStickyGridItem>
        {/* Now its done with z-index to go over the other list products for mobile so that way when we scroll downwards
        we still can compare the components stinn needs minor fixes has space on the top :)  */}
        <Grid item xs={12} md={7} lg={7}>
          <Box>{/* TODO add FILTER COMPONENT FOR DETAILED VIEW */}</Box>
          <Box>
            <ProductItemList isPaging="detailList" />
          </Box>
          {/* This later should be updated by Davor in Display component to render differently on different pages, here we need
          a button "show more not pagination" */}
        </Grid>
      </StyledGridContainer>
    </>
  );
};

export default DetailedProductView;
