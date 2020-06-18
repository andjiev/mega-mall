import React from 'react';

import { StyledNavigation, StyledButton } from './navigation.styles';
import { Box, List, ListItem, Typography, Checkbox, Grid, FormControlLabel } from '@material-ui/core';
import { INavItem, navigationData } from './navigation.data';

interface NavigationProps {}

const Navigation = (props: NavigationProps) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const renderItem = (item: INavItem) => {
    return (
      <>
        <Box mt={1}>
          <Typography variant="h6">{item.header.title}</Typography>
        </Box>
        <Box>
          {item.links.map(val => (
            <Grid container alignContent="center" alignItems="center" key={val.title}>
              <Checkbox checked={checked} color="default" onChange={handleChange} inputProps={{ 'aria-label': 'checkbox with default color' }} />
              <Typography key={val.title}>{val.title}</Typography>
            </Grid>
          ))}
        </Box>
      </>
    );
  };
  return (
    <>
      <StyledNavigation>
        <Box p={3} pt={2}>
          <List>
            <Typography variant="h6">Технологија</Typography>
            <ListItem>Компјутери и опрема</ListItem>
            <ListItem>Мобилни телефони</ListItem>
          </List>

          <Grid container>
            <Grid item alignContent="space-between">
              <Grid item>{navigationData.map(val => renderItem(val))}</Grid>
            </Grid>

            <StyledButton variant="outlined">види ги сите</StyledButton>
          </Grid>
        </Box>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
