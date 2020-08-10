import React from 'react';

import { Typography, Box, Grid, Hidden } from '@material-ui/core';
import { DesktopFilter } from './components/desktop-filter';
import MobileFilter from './components/mobile-filter/mobile-filter';
import { translate } from 'lib/translate';

const DisplayHeader = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12} md={5}>
            <Box mt={2} mb={2}>
              <Typography variant="h5">{translate('MegaMall_DisplayHeader_Notebooks', 'Преносни компјутери')}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Hidden smUp>
              <Box mt={2} mb={2}>
                <MobileFilter />
              </Box>
            </Hidden>
            <Grid container>
              <DesktopFilter />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DisplayHeader;
