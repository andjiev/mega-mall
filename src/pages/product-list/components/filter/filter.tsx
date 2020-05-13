import React from 'react';

import { StyledFilter } from './filter.styles';
import { Box, List, ListItem, Typography } from '@material-ui/core';

const Filter = () => {
  return (
    <>
      <StyledFilter>
        <Box p={3} pt={2}>
          <List>
            <Typography variant="h6">Технологија</Typography>
            <ListItem>Компјутери и опрема</ListItem>
            <ListItem>Мобилни телефони</ListItem>
          </List>
        </Box>
      </StyledFilter>
    </>
  );
};

export default Filter;
