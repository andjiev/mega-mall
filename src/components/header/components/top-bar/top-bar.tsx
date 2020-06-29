import React from 'react';

import { Grid, Box, Container } from '@material-ui/core';
import { SearchBarContainer } from 'components/header/containers/search-bar';
import { LanguagePickerContainer } from 'components/header/containers/language-picker';
import { StyledImage, StyledTypography } from './top-bar.styles';

const TopBar = () => {
  return (
    <>
      <Container fixed>
        <Box pt={2}>
          <Grid container justify="flex-end" alignContent="flex-end" alignItems="flex-end" spacing={2}>
            <Grid item>
              <StyledTypography variant="h6">Продавници</StyledTypography>
            </Grid>
            <Grid item>
              <StyledTypography variant="h6">Fb</StyledTypography>
            </Grid>
            <Grid item>
              <StyledTypography variant="h6">Insta</StyledTypography>
            </Grid>

            <Grid item>
              <LanguagePickerContainer />
            </Grid>
          </Grid>
        </Box>
        <Box pt={3}>
          <Grid container spacing={3}>
            <Grid item container sm={1} justify="flex-end" alignItems="center">
              {/* TODO: replace the whole box with logo */}
              <StyledImage src="/assets/images/main/Mega-m-original.svg"></StyledImage>
            </Grid>
            <Grid item sm={11}>
              <SearchBarContainer />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default TopBar;
