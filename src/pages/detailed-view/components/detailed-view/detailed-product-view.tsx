import React from 'react';
import { Grid, Typography, Card, CardContent, Button, CardActions, Box, Hidden, List, ListItem } from '@material-ui/core';
import { Detailedproduct } from './detailed-product-view.data';
import { StyledImage, StyledStickyGridItem, StyledGridContainer } from './detailed-product-view.styles';
import Display from './../../../product-list/components/display/display';

const DetailedProductView = () => {
  return (
    <>
      <StyledGridContainer container>
        <Grid item xs={12} lg={8} md={8}>
          {Detailedproduct.map(val => (
            <Box key={val.id} m={3}>
              <StyledImage key={val.id} src={val.url}></StyledImage>
            </Box>
          ))}
        </Grid>
        <StyledStickyGridItem item xs={12} lg={4} md={4}>
          <Box m={3}>
            <Card raised={true}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  DELL XPS 7590 (I7, 16Gb, 1Tb SSD, nVidia, Windows)
                </Typography>
                <hr></hr>
                <Typography variant="h4" gutterBottom>
                  131,250 ден
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </StyledStickyGridItem>
        {/* Now its done with z-index to go over the other list products for mobile so that way when we scroll downwards
        we still can compare the components stinn needs minor fixes has space on the top :)  */}
        <Grid item xs={12} md={8} lg={8}>
          <Display />
          {/* This later should be updated by Davor in Display component to render differently on different pages, here we need
          a button "show more not pagination" */}
        </Grid>
      </StyledGridContainer>
    </>
  );
};

export default DetailedProductView;
