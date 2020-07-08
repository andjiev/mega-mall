import React from 'react';
import { Grid, Typography, Card, CardContent, Button, CardActions, Box } from '@material-ui/core';
import { Detailedproduct } from './detailed-product-view.data';
import { StyledImage } from './detailed-product-view.styles';

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
          <Box m={3}>
            <Card raised={true}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  belent
                </Typography>
                <Typography color="textSecondary">adjective</Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailedProductView;
