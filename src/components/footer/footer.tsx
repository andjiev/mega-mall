import React from 'react';
import { ListStyle, TextStyle, FooterStyle } from './footer.styles';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
);

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <section className="footer">
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <ListStyle>
                  <li>
                    ВЕБСПОТ | ТА ВЕБСПОТ ДОО <br></br>Лиценца А, рег. бр. 13-753/2
                    <br></br> ул. Лермонтова 3/6,<br></br> 1000 Скопје
                  </li>
                </ListStyle>
              </Grid>
              <Grid item xs={12} md={3}>
                <ListStyle>
                  <h5>Технологија</h5>
                  <li>Компјутери</li>
                  <li>Компјутерска опрема</li>
                  <li>Мобилни телефони</li>
                </ListStyle>
              </Grid>
              <Grid item xs={12} md={3}>
                <ListStyle>
                  <h5>Мода</h5>
                  <li>Машка облека</li>
                  <li>Женска облека</li>
                  <li>Обувки</li>
                </ListStyle>
              </Grid>
              <Grid item xs={12} md={3}>
                <ListStyle>
                  <h5>Домакинство</h5>
                  <li>Апарати за домаќинство</li>
                  <li>Бела техника</li>
                  <li>Дом и градина</li>
                </ListStyle>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <ListStyle>
                  <h5>Следете не</h5>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                </ListStyle>
              </Grid>
              <Grid item xs={12} md={3}>
                <ListStyle>
                  <h5>Спорт</h5>
                  <li>Машка облека</li>
                  <li>Женска облека</li>
                  <li>Спортска опрема</li>
                </ListStyle>
              </Grid>
              <Grid item xs={12} md={3}>
                <ListStyle>
                  <h5>Убавина и здравје</h5>
                  <li>Козметика</li>
                  <li>Парфеми</li>
                </ListStyle>
              </Grid>
              <Grid item xs={12} md={3}>
                <ListStyle>
                  <h5>Услуги</h5>
                  <li>Храна и пијалоци</li>
                  <li>Едукација</li>
                  <li>Култура и настани</li>
                </ListStyle>
              </Grid>
            </Grid>

            <hr></hr>
            <TextStyle>
              <div className="row">
                <div className="col-12">&copy;2020-2020 E-commerce Сите права задржани.</div>
              </div>
            </TextStyle>
          </Container>
        </section>
      </FooterStyle>
    </>
  );
};

export default Footer;
