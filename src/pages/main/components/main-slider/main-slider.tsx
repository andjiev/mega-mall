import React from 'react';

import { StyledBanner, StyledImage, StyledCaption, StyledHeading } from './main-slider.style';
import { Button, Box, Container } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';

const MainSlider = () => {
  return (
    <StyledBanner>
      <Carousel infiniteLoop autoPlay dynamicHeight showArrows={false} showStatus={false} showThumbs={false}>
        {/* <Box>
          <StyledImage>
            <Container>
              <StyledCaption>
                <StyledHeading>
                  ПОДАРИ <br></br> ОБУВКИ НА ПРИЈАТЕЛ
                </StyledHeading>
                <Box component="p"></Box>
                <Button variant="contained" color="secondary" size="large">
                  Подари веднаш
                </Button>
              </StyledCaption>
            </Container>
          </StyledImage>
        </Box> */}
      </Carousel>
    </StyledBanner>
  );
};

export default MainSlider;
