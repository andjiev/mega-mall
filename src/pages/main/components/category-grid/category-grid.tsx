import React from 'react';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Card from './../../../../components/card/card';
import { Link } from '@material-ui/core';
import { StyledItem, TextStyle, HeaderStyle, BigStyle, SmallStyle, GridStyle } from './category-grid.styles';

const CategoryGrid = () => {
  const state = {
    users: [
      {
        id: 1,
        title: 'Технологија',
        link1: 'КОМПЈУТЕРИ',
        link2: 'КОМПЈУТЕРСКА ОПРЕМА',
        link3: 'МОБИЛНИ ТЕЛЕФОНИ',
        link4: 'Прикажи ги сите >',
        img: 'src/assets/images/Tehnologija.jpg'
      },
      {
        id: 2,
        title: 'Мода',
        link1: 'МАШКА ОБЛЕКА',
        link2: 'ЖЕНСКА ОБЛЕКА',
        link3: 'ОБУВКИ',
        link4: 'Прикажи ги сите >',
        img: 'src/assets/images/Moda.jpg'
      },
      {
        id: 3,
        title: 'Убавина и здравје',
        link1: 'КОЗМЕТИКА',
        link2: 'ПАРФЕМИ',
        link3: 'НЕГА',
        link4: 'Прикажи ги сите >',
        img: 'src/assets/images/Ubavina-i-zdravje.jpg'
      },
      {
        id: 4,
        title: 'Спорт',
        link1: 'СПОРТСКА ОПРЕМА',
        link2: 'СПОРТСКА ОБЛЕКА',
        link3: 'ФИТНЕС',
        link4: 'Прикажи ги сите >',
        img: 'src/assets/images/Sport.jpg'
      },
      {
        id: 5,
        title: 'Домаќинство',
        link1: 'АПАРАТИ ЗА ДОМАЌИНСТВО',
        link2: 'БЕЛА ТЕХНИКА',
        link3: 'ДОМ И ГРАДИНА',
        link4: 'Прикажи ги сите >',
        img: 'src/assets/images/Domakinstvo.jpg'
      },
      {
        id: 6,
        title: 'Услуги',
        link1: 'ХРАНА И ПИЈАЛОЦИ',
        link2: 'ЕДУКАЦИЈА',
        link3: 'КУЛТУРА И НАСТАНИ',
        link4: 'Прикажи ги сите >',
        img: 'src/assets/images/Uslugi.jpg'
      }
    ]
  };

  return (
    <GridStyle>
      <Grid container>
        <Grid item direction="row" xs={12}>
          <Grid container direction="row" xs={12}>
            <HeaderStyle>
              <BigStyle>
                <h1>Пребарај по категорија</h1>
              </BigStyle>

              <SmallStyle>
                <h4>прикажи ги сите</h4>
              </SmallStyle>
            </HeaderStyle>
          </Grid>
        </Grid>

        <StyledItem>
          <Grid item>
            <Grid container xs={12} spacing={5}>
              {state.users.map(value => (
                <Grid item key={value.id} xs={12} md={6} lg={4}>
                  <Card key={value.id} title={value.title} size={'large'} img={value.img}>
                    <p>
                      <TextStyle>
                        <Link href={'/'}>{value.link1}</Link>
                      </TextStyle>
                    </p>

                    <p>
                      <TextStyle>
                        <Link href={'/'}>{value.link2}</Link>
                      </TextStyle>
                    </p>

                    <p>
                      <TextStyle>
                        <Link href={'/'}>{value.link3}</Link>
                      </TextStyle>
                    </p>

                    <p>
                      <TextStyle>
                        <Link href={'/'}>{value.link4}</Link>
                      </TextStyle>
                    </p>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </StyledItem>
      </Grid>
    </GridStyle>
  );
};

export default CategoryGrid;
