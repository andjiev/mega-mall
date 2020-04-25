import React from 'react';

import { StyledList, StyledFooter, StyledCopyright } from './footer.styles';
import { Container, Grid, Divider, Box, Typography, ListItem } from '@material-ui/core';

const Footer = () => {
  return (
    <>
      <StyledFooter p={4}>
        <Container>
          <Box>
            <Grid container>
              <Grid item xs={12} md={3}>
                <StyledList>
                  <ListItem>
                    ВЕБСПОТ | ТА ВЕБСПОТ ДОО <br></br>Лиценца А, рег. бр. 13-753/2
                    <br></br> ул. Лермонтова 3/6,<br></br> 1000 Скопје
                  </ListItem>
                </StyledList>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledList>
                  <Typography variant="h6">Технологија</Typography>
                  <ListItem>Компјутери</ListItem>
                  <ListItem>Компјутерска опрема</ListItem>
                  <ListItem>Мобилни телефони</ListItem>
                </StyledList>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledList>
                  <Typography variant="h6">Мода</Typography>
                  <ListItem>Машка облека</ListItem>
                  <ListItem>Женска облека</ListItem>
                  <ListItem>Обувки</ListItem>
                </StyledList>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledList>
                  <Typography variant="h6">Домаќинство</Typography>
                  <ListItem>Апарати за домаќинство</ListItem>
                  <ListItem>Бела техника</ListItem>
                  <ListItem>Дом и градина</ListItem>
                </StyledList>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledList>
                  <Typography variant="h6">Следете не</Typography>
                  <ListItem>Facebook</ListItem>
                  <ListItem>Instagram</ListItem>
                  <ListItem>LinkedIn</ListItem>
                </StyledList>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledList>
                  <Typography variant="h6">Спорт</Typography>
                  <ListItem>Машка облека</ListItem>
                  <ListItem>Женска облека</ListItem>
                  <ListItem>Спортска опрема</ListItem>
                </StyledList>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledList>
                  <Typography variant="h6">Убавина и здравје</Typography>
                  <ListItem>Козметика</ListItem>
                  <ListItem>Парфеми</ListItem>
                </StyledList>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledList>
                  <Typography variant="h6">Услуги</Typography>
                  <ListItem>Храна и пијалоци</ListItem>
                  <ListItem>Едукација</ListItem>
                  <ListItem>Култура и настани</ListItem>
                </StyledList>
              </Grid>
            </Grid>
          </Box>

          <Divider />
          <Box mt={3}>
            <StyledCopyright container justify="center" alignItems="center">
              <Box component="span">&copy;2020-2020 E-commerce Сите права задржани.</Box>
            </StyledCopyright>
          </Box>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
