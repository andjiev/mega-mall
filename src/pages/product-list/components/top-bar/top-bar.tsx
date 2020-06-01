import React from 'react';

import { Typography, Box, Grid, Hidden } from '@material-ui/core';
import { FilterBar } from '../filter-bar';
import { MobileFilter } from '../mobile-filter';

const TopBar = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12} md={5}>
            <Box mt={2} mb={2}>
              <Typography variant="h5">Преносни компјутери</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Hidden smUp>
              <Box mt={2} mb={2}>
                <MobileFilter />
              </Box>
            </Hidden>
            <Grid container>
              <FilterBar />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TopBar;
