import React from 'react';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Card from './../../../../components/card/card';
import { Link } from '@material-ui/core';
import { StyledLink, StyledHeading, StyledParagraph } from './category-grid.styles';

import TehnologijaImg from '../../../../assets/images/Tehnologija.jpg';
import ModaImg from '../../../../assets/images/Moda.jpg';
import UbavinaImg from '../../../../assets/images/Ubavina-i-zdravje.jpg';
import SportImg from '../../../../assets/images/Sport.jpg';
import DomakinstvoImg from '../../../../assets/images/Domakinstvo.jpg';
import UslugiImg from '../../../../assets/images/Uslugi.jpg';

const CategoryGrid = () => {
  const cards = [
    {
      id: 1,
      title: 'Технологија',
      link1: 'КОМПЈУТЕРИ',
      link2: 'КОМПЈУТЕРСКА ОПРЕМА',
      link3: 'МОБИЛНИ ТЕЛЕФОНИ',
      link4: 'Прикажи ги сите >',
      img: TehnologijaImg
    },
    {
      id: 2,
      title: 'Мода',
      link1: 'МАШКА ОБЛЕКА',
      link2: 'ЖЕНСКА ОБЛЕКА',
      link3: 'ОБУВКИ',
      link4: 'Прикажи ги сите >',
      img: ModaImg
    },
    {
      id: 3,
      title: 'Убавина и здравје',
      link1: 'КОЗМЕТИКА',
      link2: 'ПАРФЕМИ',
      link3: 'НЕГА',
      link4: 'Прикажи ги сите >',
      img: UbavinaImg
    },
    {
      id: 4,
      title: 'Спорт',
      link1: 'СПОРТСКА ОПРЕМА',
      link2: 'СПОРТСКА ОБЛЕКА',
      link3: 'ФИТНЕС',
      link4: 'Прикажи ги сите >',
      img: SportImg
    },
    {
      id: 5,
      title: 'Домаќинство',
      link1: 'АПАРАТИ ЗА ДОМАЌИНСТВО',
      link2: 'БЕЛА ТЕХНИКА',
      link3: 'ДОМ И ГРАДИНА',
      link4: 'Прикажи ги сите >',
      img: DomakinstvoImg
    },
    {
      id: 6,
      title: 'Услуги',
      link1: 'ХРАНА И ПИЈАЛОЦИ',
      link2: 'ЕДУКАЦИЈА',
      link3: 'КУЛТУРА И НАСТАНИ',
      link4: 'Прикажи ги сите >',
      img: UslugiImg
    }
  ];

  return (
    <Grid container>
      <Grid item lg={12}>
        <Grid container direction="row" justify="space-between">
          <Grid item lg={6}>
            <StyledHeading>Пребарај по категорија</StyledHeading>
          </Grid>
          <Grid item lg={6}>
            <StyledParagraph>прикажи ги сите</StyledParagraph>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={12}>
        <Grid container spacing={5}>
          {cards.map(value => (
            <Grid item key={value.id} xs={12} md={6} lg={4}>
              <Card key={value.id} title={value.title} size={'large'} img={value.img}>
                <p>
                  <StyledLink href={'/'}>{value.link1}</StyledLink>
                </p>
                <p>
                  <StyledLink href={'/'}>{value.link2}</StyledLink>
                </p>
                <p>
                  <StyledLink href={'/'}>{value.link3}</StyledLink>
                </p>
                <p>
                  <StyledLink href={'/'}>{value.link4}</StyledLink>
                </p>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CategoryGrid;
