import React from 'react';
import { ListStyle, TextStyle, FooterStyle } from './footer.style';

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <section className="footer">
          <div className="row">
            <div className="col-3">
              <ListStyle>
                <li>
                  ВЕБСПОТ | ТА ВЕБСПОТ ДОО <br></br>Лиценца А, рег. бр. 13-753/2
                  <br></br> ул. Лермонтова 3/6,<br></br> 1000 Скопје
                </li>
              </ListStyle>
            </div>
            <div className="col-3">
              <ListStyle>
                <h5>Технологија</h5>
                <li>Компјутери</li>
                <li>Компјутерска опрема</li>
                <li>Мобилни телефони</li>
              </ListStyle>
            </div>
            <div className="col-3">
              <ListStyle>
                <h5>Мода</h5>
                <li>Машка облека</li>
                <li>Женска облека</li>
                <li>Обувки</li>
              </ListStyle>
            </div>
            <div className="col-3">
              <ListStyle>
                <h5>Домакинство</h5>
                <li>Апарати за домаќинство</li>
                <li>Бела техника</li>
                <li>Дом и градина</li>
              </ListStyle>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <ListStyle>
                <h5>Следете не</h5>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ListStyle>
            </div>
            <div className="col-3">
              <ListStyle>
                <h5>Спорт</h5>
                <li>Машка облека</li>
                <li>Женска облека</li>
                <li>Спортска опрема</li>
              </ListStyle>
            </div>
            <div className="col-3">
              <ListStyle>
                <h5>Убавина и здравје</h5>
                <li>Козметика</li>
                <li>Парфеми</li>
              </ListStyle>
            </div>
            <div className="col-3">
              <ListStyle>
                <h5>Услуги</h5>
                <li>Храна и пијалоци</li>
                <li>Едукација</li>
                <li>Култура и настани</li>
              </ListStyle>
            </div>
          </div>
          <hr></hr>
          <TextStyle>
            <div className="row">
              <div className="col-12">2020 E-commerce Сите права задржани</div>
            </div>
          </TextStyle>
        </section>
      </FooterStyle>
    </>
  );
};

export default Footer;
