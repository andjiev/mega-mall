import React from 'react';

import { Grid, Box, Typography, Container } from '@material-ui/core';
import { SearchBarContainer } from 'components/header/containers/search-bar';
import { LanguagePickerContainer } from 'components/header/containers/language-picker';
import { StyledContainer, StyledImage } from './top-bar.styles';
import { StyledLink } from 'components/styled-link';
import { topData } from './top-bar.data';

const TopBar = () => {
  const renderItem = (item: ITopItem) => {
    return (
      <>
        <Container fixed>
          <Box pt={2}>
            <Grid container justify="flex-end" alignContent="flex-end" alignItems="flex-end" spacing={2}>
              {item.links.map(val => (
                <Grid item key={val.id}>
                  <Typography variant="h6" key={val.id} style={{ color: 'white' }}>
                    {item.links.title}
                  </Typography>
                </Grid>
              ))}

              <Grid item>
                <LanguagePickerContainer />
              </Grid>
            </Grid>
          </Box>
          <Box pt={3}>
            <Grid container spacing={3}>
              <Grid item container sm={1} justify="flex-end" alignItems="center">
                {/* TODO: replace the whole box with logo */}
                <Box component="span" color="white">
                  {item.header.map(val => (
                    <Box key={val.id}>
                      <StyledImage src={val.src}></StyledImage>
                    </Box>
                  ))}
                </Box>
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
};

export default TopBar;
