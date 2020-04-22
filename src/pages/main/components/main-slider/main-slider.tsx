import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import { StyledBanner, StyledImage, StyledCaption, StyledHeading } from './main-slider.style';
import { Button, Box } from '@material-ui/core';

const MainSlider = () => {
  return (
    <StyledBanner>
      <Carousel controls={false}>
        <Carousel.Item>
          <StyledImage></StyledImage>
          <Carousel.Caption>
            <StyledCaption>
              <StyledHeading>
                ПОДАРИ <br></br> ОБУВКИ НА ПРИЈАТЕЛ
              </StyledHeading>
              <Box component="p">Ако патиките се ваши омилени обувки, значи дека на прво место ви е удобноста.</Box>
              <Button variant="contained" color="secondary">
                Подари веднаш
              </Button>
            </StyledCaption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <StyledImage></StyledImage>
          <Carousel.Caption>
            <StyledCaption>
              <StyledHeading>
                ПОДАРИ <br></br> ОБУВКИ НА ПРИЈАТЕЛ
              </StyledHeading>
              <Box component="p">Ако патиките се ваши омилени обувки,значи дека на прво место ви е удобноста.</Box>
              <Button variant="contained" color="secondary">
                Подари веднаш
              </Button>
            </StyledCaption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <StyledImage></StyledImage>
          <Carousel.Caption>
            <StyledCaption>
              <StyledHeading>
                ПОДАРИ <br></br> ОБУВКИ НА ПРИЈАТЕЛ
              </StyledHeading>
              <Box component="p">Ако патиките се ваши омилени обувки,значи дека на прво место ви е удобноста.</Box>
              <Button variant="contained" color="secondary">
                Подари веднаш
              </Button>
            </StyledCaption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </StyledBanner>
  );
};

export default MainSlider;
