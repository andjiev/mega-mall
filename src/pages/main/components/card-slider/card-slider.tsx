import React from 'react';

import SliderCard from './../../../../components/slider-card/slider-card';
import Carousel from 'react-multi-carousel';
import { Box, Grid, Typography, Link, Hidden } from '@material-ui/core';
import { cardData } from './card-slider.data';

const CardSlider = () => {
  return (
    <>
      <Box>
        <Grid container justify="space-between">
          <Grid item sm={6} xs={12}>
            <Typography variant="h5">Најпосетени производи</Typography>
          </Grid>
          <Hidden xsDown>
            <Grid container item xs={6} justify="flex-end" alignItems="flex-end">
              <Box component="span">
                {' '}
                <Typography variant="body2">прикажи ги сите {' >'}</Typography>
              </Box>
            </Grid>
          </Hidden>

          <Hidden smUp>
            <Grid container item xs={12} alignItems="flex-end">
              <Box component="span" mt={1}>
                <Typography variant="body2">прикажи ги сите {' >'}</Typography>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
      <Box mt={3} pb={3}>
        <Carousel
          arrows
          infinite
          minimumTouchDrag={80}
          swipeable
          responsive={{
            superLargeDesktop: {
              breakpoint: {
                max: 10000,
                min: 3000
              },
              items: 4,
              slidesToSlide: 1,
              partialVisibilityGutter: 50
            },
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 4,
              partialVisibilityGutter: 0,
              slidesToSlide: 1
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 3,
              partialVisibilityGutter: 20,
              slidesToSlide: 1
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 60,
              slidesToSlide: 1
            }
          }}
        >
          {/* TODO: Add destination product url to the interface*/}
          {cardData.map(res => (
            <Box key={res.id}>
              <Link>
                <SliderCard title={res.title} url={res.img}>
                  {/* TODO: maybe span would be better */}
                  <Typography variant="h4">{res.price}</Typography>
                </SliderCard>
              </Link>
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default CardSlider;
