import React, { useState } from 'react';

import { StyledLink } from 'components/styled-link';
import { Box, Typography, Grid } from '@material-ui/core';
import { StyledBox } from './menu.styles';
import { MenuItem } from 'lib/data';

interface IMenuProps {
  isActive: boolean;
  menuItems: MenuItem[];

  onShowSubmenuChange: () => void;
  onHideSubmenuChange: () => void;
}

const HomeCenterMenu = (props: IMenuProps) => {
  return (
    <Box>
      <Grid container justify="flex-start" spacing={2}>
        <Grid item>
          <StyledBox pt={1} pb={1} isActive={props.isActive} onMouseEnter={props.onShowSubmenuChange} onMouseLeave={props.onHideSubmenuChange}>
            <Typography variant="subtitle2" style={{ fontSize: '16px' }}>
              <StyledLink href="#">Сите категории</StyledLink>
            </Typography>
          </StyledBox>
        </Grid>
        {props.menuItems.slice(0, 3).map(item => (
          <Grid key={item.id} item>
            <StyledBox pt={1} pb={1}>
              <Typography variant="subtitle2" style={{ fontSize: '16px' }}>
                <StyledLink href={item.link}>{item.title}</StyledLink>
              </Typography>
            </StyledBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeCenterMenu;
