import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { StyledContainer, StyledListItemText, StyledBannerDiv, StyledListItem, StyledLink } from './home-center-submenu.styles';
import { CenterMenuWrapper } from '../home-center-menu/home-center-menu.styles';
import { Link, List, ListItem } from '@material-ui/core';

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

interface HomeSubmenuProps {}

const HomeCenterSubmenu = (props: HomeSubmenuProps) => {
  const classes = useStyles();

  const firstListItems = [
    {
      id: 1,
      title: 'Персонални компјутери'
    },
    {
      id: 2,
      title: 'Преносни компјутери'
    },
    {
      id: 3,
      title: 'Опрема за лаптоп'
    },
    {
      id: 4,
      title: 'Глувчиња'
    },
    {
      id: 5,
      title: 'Тастатури'
    },
    {
      id: 6,
      title: 'Компјутерски звучници'
    }
  ];

  const secondListItems = [
    {
      id: 1,
      title: 'Маски за телефон'
    },
    {
      id: 2,
      title: 'Маска предна'
    },
    {
      id: 3,
      title: 'Предно стакло тач-бело'
    },
    {
      id: 4,
      title: 'Дисплеј црн'
    },
    {
      id: 5,
      title: 'Батерии'
    },
    {
      id: 6,
      title: 'Задни капачиња'
    }
  ];

  return (
    <StyledContainer>
      <CenterMenuWrapper>
        <div className={classes.root}>
          <Grid container spacing={10}>
            <Grid item xs={3}>
              <List>
                <StyledListItem>
                  <StyledListItemText primary="Компјутери и опрема"></StyledListItemText>
                </StyledListItem>
                {firstListItems.map(item => (
                  <StyledListItem key={item.id}>
                    <StyledLink href="#">{item.title}</StyledLink>
                  </StyledListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={3}>
              <List>
                <StyledListItem>
                  <StyledListItemText primary="Мобилни телефони"></StyledListItemText>
                </StyledListItem>
                {secondListItems.map(item => (
                  <StyledListItem key={item.id}>
                    <StyledLink href="#">{item.title}</StyledLink>
                  </StyledListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={6}>
              <StyledBannerDiv />
            </Grid>
          </Grid>
        </div>
      </CenterMenuWrapper>
    </StyledContainer>
  );
};
export default HomeCenterSubmenu;
