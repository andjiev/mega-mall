import React, { useEffect, useState } from 'react';

import SliderCard from './../../../../components/slider-card/slider-card';
import Carousel from 'react-multi-carousel';
import { Box, Grid, Typography, Link, Hidden } from '@material-ui/core';
import { cardData } from './card-slider.data';
import { translate } from 'lib/translate';
import { AppDispatch } from 'index';
import ApplicationState from 'store/application-state';
import { getMostPopularProducts } from 'store/main-store';
import { connect } from 'react-redux';
import { ProgressPlugin } from 'webpack';

interface ICardSlider {
  data: Models.Product.Model[];
  onInit: () => void;
}

const CardSlider = (props: ICardSlider) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    props.onInit();
  }, []);

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
          {isMounted && props.data ? (
            props.data.map(res => (
              <Box key={res.id}>
                <Link href={res.link}>
                  <SliderCard title={res.name.length > 25 ? res.name.substring(0, 25) + '...' : res.name} url={res.imageSource || cardData[1].img}>
                    <Typography variant="h4">{res.price + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}</Typography>
                  </SliderCard>
                </Link>
              </Box>
            ))
          ) : (
            <>Loading data...</>
          )}
        </Carousel>
      </Box>
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onInit: () => {
    dispatch(getMostPopularProducts());
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    data: state.mainData.mostViewedData
  };
};

const CardSliderContainer = connect(mapStateToProps, mapDispatchToProps)(CardSlider);
export default CardSliderContainer;
