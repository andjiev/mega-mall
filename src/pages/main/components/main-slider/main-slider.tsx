import React from 'react';

import { StyledImage, StyledButton, StyledOverlay } from './main-slider.styles';
import { Box, Grid, Typography, Hidden, Container } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import { ISliderItem, sliderItems } from './main-slider.data';

const MainSlider = () => {
  const renderItem = (item: ISliderItem) => {
    return (
      <StyledImage src={item.imageSrc}>
        <StyledOverlay />
        <Container>
          <Hidden mdDown>
            <Grid container item xs={6}>
              <Box color="white" textAlign="left" zIndex={1} mt={5}>
                <Grid item xs={12}>
                  <Box mt={2} mb={2}>
                    <Typography variant="h1">{item.title}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box mt={2} mb={2}>
                    <Typography variant="body1">{item.subTitle}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <StyledButton variant="contained" color="secondary" size="large">
                    <Typography variant="button">{item.buttonText}</Typography>
                  </StyledButton>
                </Grid>
              </Box>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container>
              <Box color="white" textAlign="left" zIndex={1} mt={3}>
                <Grid item xs={12}>
                  <Box mt={2} mb={2}>
                    <Typography variant="h3">{item.title}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box mt={2} mb={2}>
                    <Typography variant="body2">{item.subTitle}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <StyledButton variant="contained" color="secondary" size="large">
                    <Typography variant="button">{item.buttonText}</Typography>
                  </StyledButton>
                </Grid>
              </Box>
            </Grid>
          </Hidden>
        </Container>
      </StyledImage>
    );
  };

  return (
    <Carousel swipeable infiniteLoop autoPlay showArrows={false} showStatus={false} showThumbs={false} transitionTime={1500} interval={4000} stopOnHover>
      {sliderItems.map((item, index) => {
        return <Box key={index}>{renderItem(item)}</Box>;
      })}
    </Carousel>
  );
};

export default MainSlider;
