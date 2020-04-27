import React from 'react';

import { StyledNavigation } from './navigation.styles';
import { Box, List, ListItem, Typography } from '@material-ui/core';

interface NavigationProps {}

const Navigation = (props: NavigationProps) => {
  return (
    <>
      <StyledNavigation>
        <Box p={3} pt={2}>
          <List>
            <Typography variant="h6">Технологија</Typography>
            <ListItem>Компјутери и опрема</ListItem>
            <ListItem>Мобилни телефони</ListItem>
          </List>
        </Box>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
