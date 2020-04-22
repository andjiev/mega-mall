import React from 'react';

import { Grid, Box, Typography } from '@material-ui/core';
import Card from './../../../../components/card/card';
import { StyledLink } from './category-grid.styles';

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
      img: TehnologijaImg
    },
    {
      id: 2,
      title: 'Мода',
      link1: 'МАШКА ОБЛЕКА',
      link2: 'ЖЕНСКА ОБЛЕКА',
      link3: 'ОБУВКИ',
      img: ModaImg
    },
    {
      id: 3,
      title: 'Убавина и здравје',
      link1: 'КОЗМЕТИКА',
      link2: 'ПАРФЕМИ',
      link3: 'НЕГА',
      img: UbavinaImg
    },
    {
      id: 4,
      title: 'Спорт',
      link1: 'СПОРТСКА ОПРЕМА',
      link2: 'СПОРТСКА ОБЛЕКА',
      link3: 'ФИТНЕС',
      img: SportImg
    },
    {
      id: 5,
      title: 'Домаќинство',
      link1: 'АПАРАТИ ЗА ДОМАЌИНСТВО',
      link2: 'БЕЛА ТЕХНИКА',
      link3: 'ДОМ И ГРАДИНА',
      img: DomakinstvoImg
    },
    {
      id: 6,
      title: 'Услуги',
      link1: 'ХРАНА И ПИЈАЛОЦИ',
      link2: 'ЕДУКАЦИЈА',
      link3: 'КУЛТУРА И НАСТАНИ',
      img: UslugiImg
    }
  ];

  return (
    <>
      <Box>
        <Grid container justify="space-between">
          <Grid item md={6} xs={7}>
            <Typography variant="h5">Пребарај по категорија</Typography>
          </Grid>
          <Grid container item md={6} xs={5} justify="flex-end" alignItems="flex-end">
            <Box component="span">прикажи ги сите {' >'}</Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Grid container spacing={3}>
          {cards.map(value => (
            <Grid item key={value.id} xs={12} md={6} lg={4}>
              <Card key={value.id} title={value.title} img={value.img} size="large">
                <Box>
                  <Typography variant="h6">
                    <StyledLink href={'/'}>{value.link1}</StyledLink>
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="h6">
                    <StyledLink href={'/'}>{value.link2}</StyledLink>
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="h6">
                    <StyledLink href={'/'}>{value.link3}</StyledLink>
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CategoryGrid;
