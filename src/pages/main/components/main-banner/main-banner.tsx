import React from 'react';
import { Grid, Card, CardMedia, Box } from '@material-ui/core';
import { MainBannerImage } from './main-banner.styles';
import { mainbanner } from './main-banner.data';

const MainBanner = () => {
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
        {mainbanner.map(res => (
          <Grid item key={res.id} xs={8} md={8} lg={8}>
            <Card>
              <CardMedia>
                <MainBannerImage url={res.url}></MainBannerImage>
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MainBanner;
