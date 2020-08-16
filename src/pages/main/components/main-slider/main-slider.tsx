import React from 'react';

import { StyledGrid, StyledImage, StyledContainer, StyledButton, StyledTypography } from './main-slider.style';
import { Box, Grid, Typography } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import { ISliderItem, sliderItems } from './main-slider.data';

const MainSlider = () => {
  const renderItem = (item: ISliderItem) => {
    return (
      <StyledImage src={item.imageSrc}>
        <StyledGrid container direction="column" justify="center">
          <StyledContainer>
            <Box color="white">
              <Grid item>
                <StyledTypography variant="h1">{item.title}</StyledTypography>
              </Grid>
              <Box mt={2}>
                <Grid item>
                  <Box component="span">
                    <Typography variant="body1">{item.subTitle}</Typography>
                  </Box>
                </Grid>
              </Box>
            </Box>
            <Grid item>
              <Box mt={3}>
                <StyledButton variant="contained" color="secondary" size="large">
                  <Typography variant="button">{item.buttonText}</Typography>
                </StyledButton>
              </Box>
            </Grid>
          </StyledContainer>
        </StyledGrid>
      </StyledImage>
    );
  };

  return (
    <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} showThumbs={false}>
      {sliderItems.map((item, index) => {
        return <Box key={index}>{renderItem(item)}</Box>;
      })}
    </Carousel>
  );
};

export default MainSlider;
