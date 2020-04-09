import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { StyleBanner, StyleImage, ButtonStyle, CaptionStyle, HeadingStyle } from './main-banner.style';

const MainBanner = () => {
  return (
    <StyleBanner>
      <Carousel controls={false}>
        <Carousel.Item>
          <StyleImage></StyleImage>

          <Carousel.Caption>
            <CaptionStyle>
              <HeadingStyle>
                ПОДАРИ <br></br> ОБУВКИ НА ПРИЈАТЕЛ
              </HeadingStyle>
              <p>Ако патиките се ваши омилени обувки,значи дека на прво место ви е удобноста.</p>

              <ButtonStyle>Подари веднаш</ButtonStyle>
            </CaptionStyle>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StyleImage></StyleImage>

          <Carousel.Caption>
            <CaptionStyle>
              <HeadingStyle>
                ПОДАРИ <br></br>ОБУВКИ НА ПРИЈАТЕЛ
              </HeadingStyle>
              <p>Ако патиките се ваши омилени обувки,значи дека на прво место ви е удобноста.</p>
              <ButtonStyle>Подари веднаш</ButtonStyle>
            </CaptionStyle>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StyleImage></StyleImage>

          <Carousel.Caption>
            <CaptionStyle>
              <HeadingStyle>
                ПОДАРИ <br></br>ОБУВКИ НА ПРИЈАТЕЛ
              </HeadingStyle>
              <p>Ако патиките се ваши омилени обувки,значи дека на прво место ви е удобноста.</p>
              <ButtonStyle>Подари веднаш</ButtonStyle>
            </CaptionStyle>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </StyleBanner>
  );
};

export default MainBanner;
