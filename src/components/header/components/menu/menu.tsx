import React from 'react';

import { StyledLink } from 'components/styled-link';
import { SubMenu } from '../sub-menu';
import { Box, Container, Typography, Grid } from '@material-ui/core';
import { menuItems } from './menu.data';

interface IMenuProps {}

const HomeCenterMenu = (props: IMenuProps) => {
  return (
    <Container>
      <Box pt={1} pb={2}>
        <Grid container justify="space-between">
          {menuItems.map(item => (
            <Grid key={item.id} item>
              <Typography variant="h6">
                <StyledLink href={'#'} underline="none">
                  {item.title}
                </StyledLink>
              </Typography>
            </Grid>
          ))}
        </Grid>
        {/* {<SubMenu />} */}
      </Box>
    </Container>
  );
};

export default HomeCenterMenu;
