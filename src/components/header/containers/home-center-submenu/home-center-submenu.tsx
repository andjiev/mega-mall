import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { StyledContainer, StyledListItemText, StyledBannerDiv } from './home-center-submenu.styles';
import { CenterMenuWrapper } from '../home-center-menu/home-center-menu.styles';
import { Link, List, ListItem, ListItemText } from '@material-ui/core';

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
  return (
    <StyledContainer>
      <CenterMenuWrapper>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <List>
                <ListItem>
                  <StyledListItemText primary="Компјутери и опрема"></StyledListItemText>
                </ListItem>
                <ListItem>
                  <Link href="#">Персонални компјутери</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Опрема за лаптоп</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Глувчиња</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Тастатури</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Компјутерски звучници</Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
              <List>
                <ListItem>
                  <StyledListItemText primary="Компјутери и опрема"></StyledListItemText>
                </ListItem>
                <ListItem>
                  <Link href="#">Персонални компјутери</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Опрема за лаптоп</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Глувчиња</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Тастатури</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Компјутерски звучници</Link>
                </ListItem>
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
