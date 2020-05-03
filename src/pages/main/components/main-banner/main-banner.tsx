import React from 'react';
import { Grid, Card, CardMedia, Box } from '@material-ui/core';
import { MainBannerImage } from './main-banner.styles';
import { mainbanner } from './main-banner.data';

const MainBanner = () => {
  return (
    <>
      <Box mb={5} mt={5}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
          <Grid item xs={8} md={8} lg={8}>
            <Card>
              <CardMedia>
                <MainBannerImage url={mainbanner[0].url}></MainBannerImage>
              </CardMedia>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MainBanner;
