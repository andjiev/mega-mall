import React from 'react';
import { Grid, Card, CardMedia, Box } from '@material-ui/core';
import { MainBannerImage } from './main-banner.styles';
import { mainbanner } from './main-banner.data';

interface BannerProps {
  size: 'xl' | 'l' | 'menu';
  url: string;
}

const MainBanner = (props: BannerProps) => {
  if (props.size == 'xl') {
    return (
      <>
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
          <Grid item xs={8} md={8} lg={8}>
            <Card>
              <CardMedia>
                <MainBannerImage url={props.url}></MainBannerImage>
              </CardMedia>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
        <Grid item xs={8} md={8} lg={8}>
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

MainBanner.defaultProps = {
  size: 'xl',
  url: '/assets/images/main/Baner.jpg'
};

export default MainBanner;
