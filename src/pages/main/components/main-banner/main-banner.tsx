import React from 'react';
import { Grid, Card, CardMedia } from '@material-ui/core';
import { MainBannerImage } from './main-banner.styles';
import { mainbanner } from './main-banner.data';

const MainBanner = () => {
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <Card>
            <CardMedia>
              <MainBannerImage url={props.url}></MainBannerImage>
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default MainBanner;
