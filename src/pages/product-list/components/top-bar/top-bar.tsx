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
            <Typography variant="h5">Преносни компјутери</Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Hidden smUp>
              <MobileFilter />
            </Hidden>
            <Grid container justify="flex-end" alignItems="flex-end">
              <Hidden mdDown>
                <FilterBar />
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TopBar;
