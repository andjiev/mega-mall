import React from 'react';
import { Grid, Card, CardMedia, Box, Link } from '@material-ui/core';
import { XLBannerImage, LBannerImage, MenuBannerImage } from './banner.styles';

interface BannerProps {
  size?: 'xl' | 'l' | 'menu';
  url?: string;
  imagesource?: string;
  bgColor?: string;
}

const Banner = (props: BannerProps) => {
  if (props.size == 'xl') {
    return (
      <>
        <Link href={props.url}>
          <Card>
            <CardMedia>
              <XLBannerImage imagesource={props.imagesource}></XLBannerImage>
            </CardMedia>
          </Card>
        </Link>
      </>
    );
  } else if (props.size == 'l') {
    return (
      <>
        <Link href={props.url}>
          <Card>
            <CardMedia>
              <LBannerImage imagesource={props.imagesource}></LBannerImage>
            </CardMedia>
          </Card>
        </Link>
      </>
    );
  } else if (props.size == 'menu') {
    return (
      <>
        <Link href={props.url}>
          <Card>
            <CardMedia>
              <MenuBannerImage imagesource={props.imagesource}></MenuBannerImage>
            </CardMedia>
          </Card>
        </Link>
      </>
    );
  }
  return (
    <>
      <Link href={props.url}>
        <Card>
          <CardMedia>
            <MenuBannerImage imagesource={props.imagesource}></MenuBannerImage>
          </CardMedia>
        </Card>
      </Link>
    </>
  );
};

Banner.defaultProps = {
  size: 'xl',
  imgSource: '/assets/images/main/Baner.jpg',
  url: '#',
  bgColor: '#ffffff'
};

export default Banner;
