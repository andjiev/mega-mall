import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { LinkStyle } from './category-grid.style';
import Card from '../../../../components/card/card';

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
    <>
      <Container>
        <p>
          <h4>Пребарај по категорија</h4>
          <p>Прикажи ги сите</p>
        </p>
        <Row>
          {cards.map(card => (
            <Card key={card.id} title={card.title} size="medium" img={card.img}>
              <>
                <p>
                  <a href={'/'}>{card.link1}</a>
                </p>
                <p>
                  <a href={'/'}>{card.link2}</a>
                </p>
                <p>
                  <a href={'/'}>{card.link3}</a>
                </p>
                <LinkStyle>
                  <p>
                    <a href={'/'}>{card.link4}</a>
                  </p>
                </LinkStyle>
              </>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CategoryGrid;
