import React from 'react';

import { Card } from '../../../../components/card';
import Carousel from 'react-multi-carousel';
import { Box, Grid, Typography, Link } from '@material-ui/core';

const cardData = [
  {
    id: 11,
    title: 'Мобилен Телефон',
    price: '8.000 ден',
    img: '/assets/images/main/card-slider/Mobilen-telefon.jpg'
  },
  {
    id: 22,
    title: 'Смарт Телевизор',
    price: '60.000 ден',
    img: '/assets/images/main/card-slider/Mashina-za-perenje.jpg'
  },
  {
    id: 33,
    title: 'Козметика',
    price: '400 ден',
    img: '/assets/images/main/card-slider/Kozmetika.jpg'
  },
  {
    id: 44,
    title: 'Машина за перење',
    price: '70.000 ден',
    img: '/assets/images/main/card-slider/Smart-televizor.jpg'
  },
  {
    id: 55,
    title: 'Бормашина',
    price: '4.500 ден',
    img: '/assets/images/main/card-slider/Mobilen-telefon.jpg'
  },
  {
    id: 66,
    title: 'Лаптоп',
    price: '45.000 ден',
    img: '/assets/images/main/card-slider/Mashina-za-perenje.jpg'
  }
];

const CardSlider = () => {
  return (
    <Box component="div">
      <Grid container justify="space-between">
        <Grid container item xs={12} md={6} justify="flex-start">
          <Typography variant="h5">Најпосетени производи</Typography>
        </Grid>
        <Grid container item xs={12} md={6} justify="flex-end">
          <Link className="text-dark" href="#">
            <Box component="span">прикажи ги сите {' >'}</Box>
          </Link>
        </Grid>
      </Grid>
      <Carousel
        arrows
        partialVisbile
        infinite
        minimumTouchDrag={80}
        swipeable
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 4,
            partialVisibilityGutter: 40,
            slidesToSlide: 4
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 90,
            slidesToSlide: 1
          },

          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 3,
            partialVisibilityGutter: 10,
            slidesToSlide: 3
          }
        }}
      >
        {cardData.map(res => (
          <Card key={res.id} size={'small'} title={res.title} url={res.img}>
            {/* TODO: maybe span would be better */}
            <span>{res.price}</span>
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default CardSlider;
