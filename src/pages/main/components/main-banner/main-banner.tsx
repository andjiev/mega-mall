import React from 'react';
import { Grid, Card, CardMedia, Box, Link } from '@material-ui/core';
import { MainBannerImage } from './main-banner.styles';
import { mainbanner } from './main-banner.data';

interface BannerProps {
  size?: 'xl' | 'l' | 'menu';
  url?: string;
  imgSource?: string;
  bgColor?: string;
}

const MainBanner = (props: BannerProps) => {
  if (props.size == 'xl') {
    return (
      <>
        <Link href={props.url}>
          <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
            <Grid item xs={7} md={7} lg={8}>
              <Card>
                <CardMedia>
                  <MainBannerImage imgSource={props.imgSource}></MainBannerImage>
                </CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Link>
      </>
    );
  } else if (props.size == 'l') {
    return (
      <>
        <Link href={props.url}>
          <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
            <Grid item xs={7} md={7} lg={8}>
              <Card>
                <CardMedia>
                  <MainBannerImage imgSource={props.imgSource}></MainBannerImage>
                </CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Link>
      </>
    );
  }

  return (
    <>
      <Link href={props.url}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardMedia>
                <MainBannerImage imgSource={props.imgSource}></MainBannerImage>
              </CardMedia>
            </Card>
          </Grid>
        </Grid>
      </Link>
    </>
  );
};

MainBanner.defaultProps = {
  size: 'menu',
  imgSource: '/assets/images/main/Baner.jpg',
  url: '#',
  bgColor: '#ffffff'
};

export default MainBanner;
