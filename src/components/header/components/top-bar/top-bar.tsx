import React from 'react';

import { Grid, Box } from '@material-ui/core';
import { SearchBarContainer } from 'components/header/containers/search-bar';
import { LanguagePickerContainer } from 'components/header/containers/language-picker';
import { StyledContainer } from './top-bar.styles';

const TopBar = () => {
  return (
    <>
      <StyledContainer>
        <Box p={2} pb={0}>
          <Grid container spacing={3}>
            <Grid item container sm={1} justify="flex-end" alignItems="center">
              {/* TODO: replace the whole box with logo */}
              <Box component="span" color="white">
                Logo
              </Box>
            </Grid>
            <Grid item sm={10}>
              <SearchBarContainer />
            </Grid>
            <Grid item container sm={1} alignItems="center">
              <LanguagePickerContainer />
            </Grid>
          </Grid>
        </Box>
      </StyledContainer>
    </>
  );
};

export default TopBar;