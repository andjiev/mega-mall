import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from './../../../../components/card/card';
import LinkStyle from './category-grid.styles';

export default function SpacingGrid() {
  const state = {
    users: [
      {
        id: 1,
        title: 'Технологија',
        link1: 'КОМПЈУТЕРИ',
        link2: 'КОМПЈУТЕРСКА ОПРЕМА',
        link3: 'МОБИЛНИ ТЕЛЕФОНИ',
        link4: 'Прикажи ги сите >',
        img: 'assets/images/Tehnologija.jpg'
      },
      {
        id: 2,
        title: 'Мода',
        link1: 'МАШКА ОБЛЕКА',
        link2: 'ЖЕНСКА ОБЛЕКА',
        link3: 'ОБУВКИ',
        link4: 'Прикажи ги сите >',
        img: 'assets/images/Moda.jpg'
      },
      {
        id: 3,
        title: 'Убавина и здравје',
        link1: 'КОЗМЕТИКА',
        link2: 'ПАРФЕМИ',
        link3: 'НЕГА',
        link4: 'Прикажи ги сите >',
        img: 'assets/images/Ubavina-i-zdravje.jpg'
      },
      {
        id: 4,
        title: 'Спорт',
        link1: 'СПОРТСКА ОПРЕМА',
        link2: 'СПОРТСКА ОБЛЕКА',
        link3: 'ФИТНЕС',
        link4: 'Прикажи ги сите >',
        img: 'assets/images/Sport.jpg'
      },
      {
        id: 5,
        title: 'Домаќинство',
        link1: 'АПАРАТИ ЗА ДОМАЌИНСТВО',
        link2: 'БЕЛА ТЕХНИКА',
        link3: 'ДОМ И ГРАДИНА',
        link4: 'Прикажи ги сите >',
        img: 'assets/images/Domakinstvo.jpg'
      },
      {
        id: 6,
        title: 'Услуги',
        link1: 'ХРАНА И ПИЈАЛОЦИ',
        link2: 'ЕДУКАЦИЈА',
        link3: 'КУЛТУРА И НАСТАНИ',
        link4: 'Прикажи ги сите >',
        img: 'assets/images/Uslugi.jpg'
      }
    ]
  };

  return (
    <Grid container>
      <Grid container direction="row" xs={12}>
        <h3>Пребарај по категорија</h3>
      </Grid>
      <Grid container direction="row" xs={12} spacing={5} justify="center" alignContent="space-around">
        {[0, 1, 2, 3, 4, 5].map(value => (
          <Grid item key={value} xs={12} md={6} lg={4}>
            <Card key={value.id} title={value.title} size={'medium'} img={value.img}>
              <p>
                <a href={'/'}>{value.link1}</a>
              </p>
              <p>
                <a href={'/'}>{value.link2}</a>
              </p>
              <p>
                <a href={'/'}>{value.link3}</a>
              </p>
              <LinkStyle>
                <p>
                  <a href={'/'}>{value.link4}</a>
                </p>
              </LinkStyle>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
