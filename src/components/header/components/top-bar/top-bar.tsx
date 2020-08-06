import React from 'react';

import { Grid, Box, Container, Link } from '@material-ui/core';
import { SearchBarContainer } from 'components/header/containers/search-bar';
import { LanguagePickerContainer } from 'components/header/containers/language-picker';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import { StyledImage, StyledTypography } from './top-bar.styles';

const TopBar = () => {
  return (
    <>
      <Box>
        <Grid container justify="flex-end" alignItems="flex-end" spacing={2}>
          <Grid item>
            <StyledTypography variant="h6">Продавници</StyledTypography>
          </Grid>
          <Grid item>
            <Link href="https://www.facebook.com">
              <FacebookIcon fontSize="small" htmlColor="#193364" />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.instagram.com">
              <InstagramIcon fontSize="small" htmlColor="#193364" />
            </Link>
          </Grid>
          <Grid item>
            <LanguagePickerContainer />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TopBar;
