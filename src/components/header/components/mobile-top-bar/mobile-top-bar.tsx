import React, { useState } from 'react';

import { Grid, IconButton } from '@material-ui/core';
import { StyledLink } from 'components/styled-link';

import MainLogo from '../logo/logo';
import { StyledMenuIcon } from './mobile-top-bar.styles';
import { MobileMenuContainer } from '../mobile-menu';

const MobileTopBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <StyledLink href={'/'}>
            <MainLogo />
          </StyledLink>
        </Grid>
        <Grid item xs={8} container justify="flex-end">
          <Grid item>
            <IconButton edge="end" onClick={() => setOpenMenu(true)}>
              <StyledMenuIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <MobileMenuContainer open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
};

export default MobileTopBar;
