import React from 'react';

import { StyledLink } from 'components/styled-link';
import { Box, Container, Typography, Grid } from '@material-ui/core';
import { menuItems } from './menu.data';
import { StyledBox } from './menu.styles';
import { CategoryTypes } from 'lib/enums';

interface IMenuProps {
  onCategoryChange: (value: CategoryTypes) => void;
  onHideSubmenuChange: () => void;
}

const HomeCenterMenu = (props: IMenuProps) => {
  return (
    <Container>
      <Box>
        <Grid container justify="space-between">
          {menuItems.map(item => (
            <Grid key={item.type} item>
              <StyledBox pt={2} pb={2} onMouseEnter={() => props.onCategoryChange(item.type)} onMouseLeave={() => props.onHideSubmenuChange()}>
                <Typography variant="h6">
                  <StyledLink href={item.link}>{item.title}</StyledLink>
                </Typography>
              </StyledBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomeCenterMenu;
