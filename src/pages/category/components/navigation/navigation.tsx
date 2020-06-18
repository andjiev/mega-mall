import React from 'react';

import { StyledNavigation } from './navigation.styles';
import { Box, List, ListItem, Typography, Checkbox, Grid } from '@material-ui/core';

interface NavigationProps {}

const Navigation = (props: NavigationProps) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
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

          <List>
            <Typography variant="h6">Производител</Typography>
            <Grid container alignContent="center" alignItems="center">
              <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} />
              <Typography>HP</Typography>
            </Grid>
            <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}>
              Dell
            </Checkbox>
          </List>
        </Box>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
