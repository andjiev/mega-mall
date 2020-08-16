import React from 'react';

import { Grid, Box, Container } from '@material-ui/core';
import { SearchBarContainer } from 'components/header/containers/search-bar';
import { LanguagePickerContainer } from 'components/header/containers/language-picker';
import { StyledImage, StyledTypography } from './top-bar.styles';

const TopBar = () => {
  return (
    <>
      <Container fixed>
        <Box>
          <Grid container justify="flex-end" alignItems="flex-end" spacing={2}>
            <Grid item>
              <StyledTypography variant="subtitle2">Продавници</StyledTypography>
            </Grid>
            <Grid item>
              <StyledTypography variant="subtitle2">Fb</StyledTypography>
            </Grid>
            <Grid item>
              <StyledTypography variant="subtitle2">Insta</StyledTypography>
            </Grid>
            <Grid item>
              <LanguagePickerContainer />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default TopBar;
