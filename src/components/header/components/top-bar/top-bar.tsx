import React from 'react';

import { Grid, Box, Container } from '@material-ui/core';
import { SearchBarContainer } from 'components/header/containers/search-bar';
import { LanguagePickerContainer } from 'components/header/containers/language-picker';
import { StyledImage, StyledTypography } from './top-bar.styles';
import { translate } from 'lib/translate';

const TopBar = () => {
  return (
    <>
      <Container fixed>
        <Box>
          <Grid container justify="flex-end" alignItems="flex-end" spacing={2}>
            <Grid item>
              <StyledTypography variant="h6">{translate('MegaMall_Topbar_Shops', 'Продавници')}</StyledTypography>
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
      </Container>
    </>
  );
};

export default TopBar;
