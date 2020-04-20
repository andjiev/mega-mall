import React from 'react';
import { Card } from '../../../../components/card';
import Carousel from 'react-multi-carousel';

import mobilenSlika from './../../../../assets/images/CardSlider/Mobilen-telefon.jpg';
import masinaSlika from './../../../../assets/images/CardSlider/Mashina-za-perenje.jpg';
import kozmetikaSlika from './../../../../assets/images/CardSlider/Kozmetika.jpg';
import tvSlika from './../../../../assets/images/CardSlider/Smart-televizor.jpg';

const cardData = [
  {
    id: 11,
    title: 'Мобилен Телефон',
    price: '8.000 ден',
    img: mobilenSlika
  },
  {
    id: 22,
    title: 'Смарт Телевизор',
    price: '60.000 ден',
    img: tvSlika
  },
  {
    id: 33,
    title: 'Козметика',
    price: '400 ден',
    img: kozmetikaSlika
  },
  {
    id: 44,
    title: 'Машина за перење',
    price: '70.000 ден',
    img: masinaSlika
  },
  {
    id: 55,
    title: 'Бормашина',
    price: '4.500 ден',
    img: mobilenSlika
  },
  {
    id: 66,
    title: 'Лаптоп',
    price: '45.000 ден',
    img: tvSlika
  }
];

const CardSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      itemClass="carousel-item-padding-40-px"
    >
      {cardData.map(res => (
        <Card key={res.id} size={'small'} title={res.title} img={res.img}>
          <p>{res.price}</p>
        </Card>
      ))}
    </Carousel>
  );
};

export default CardSlider;
