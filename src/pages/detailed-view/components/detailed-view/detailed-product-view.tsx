import React from 'react';
import { Grid, Typography, Card, CardContent, Button, CardActions, Box, Hidden } from '@material-ui/core';
import { Detailedproduct } from './detailed-product-view.data';
import { StyledImage, StyledBox } from './detailed-product-view.styles';

const DetailedProductView = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={8} md={8}>
          {Detailedproduct.map(val => (
            <Box key={val.id} m={3}>
              <StyledImage key={val.id} src={val.url}></StyledImage>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} lg={4} md={4}>
          <StyledBox m={3}>
            <Hidden mdDown>
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
            </Hidden>
          </StyledBox>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailedProductView;
