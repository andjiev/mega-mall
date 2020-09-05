import React from 'react';

import { Typography, Box, Grid, Hidden } from '@material-ui/core';
import { DesktopFilter } from './components/desktop-filter';
import MobileFilter from './components/mobile-filter/mobile-filter';
import { translate } from 'lib/translate';
import DesktopFilterContainer from './components/desktop-filter/desktop-filter';
import { ListTypes } from 'lib/enums';

interface IDisplayHeader {
  onListTypeChange: (type: ListTypes) => void;
}

const DisplayHeader = (props: IDisplayHeader) => {
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
              <DesktopFilter listType={ListTypes.Products} onListTypeChange={props.onListTypeChange} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DisplayHeader;
