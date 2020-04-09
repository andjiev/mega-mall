import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

import { CategoryStyle, HeadingStyle, ParagraphStyle, ColStyle, LinkStyle, UbavinaStyle } from './category-grid.style';
import Card from '../../../../components/card/card';

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
    <>
      <Container>
        <p>
          <h4>Пребарај по категорија</h4>
          <p>Прикажи ги сите</p>
        </p>
        <Row>
          {state.users.map(user => (
            <Card key={user.id} title={user.title} size={'medium'} img={user.img}>
              <p>
                <a href={'/'}>{user.link1}</a>
              </p>
              <p>
                <a href={'/'}>{user.link2}</a>
              </p>
              <p>
                <a href={'/'}>{user.link3}</a>
              </p>
              <LinkStyle>
                <p>
                  <a href={'/'}>{user.link4}</a>
                </p>
              </LinkStyle>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CategoryGrid;
