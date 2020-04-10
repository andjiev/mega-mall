import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { StyleBanner, StyleImage, ButtonStyle, CaptionStyle, HeadingStyle } from './main-slider.style';

const MainSlider = () => {
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

export default MainSlider;
