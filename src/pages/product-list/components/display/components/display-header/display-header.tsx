import React from 'react';

import { Typography, Box, Grid, Hidden } from '@material-ui/core';
import { DesktopFilter } from './components/desktop-filter';
import MobileFilter from './components/mobile-filter/mobile-filter';
import { ListTypes } from 'lib/enums';

interface IDisplayHeader {
  title: string;
  page: number;
  count: number;
  listType: ListTypes;

  onListTypeChange: (type: ListTypes) => void;
}

const DisplayHeader = (props: IDisplayHeader) => {
  const from = props.page * 10 + 1;
  const to = from + 9 < props.count ? from + 9 : props.count;

  return (
    <>
      <Box>
        <Grid container>
          <Grid item>
            <Typography variant="h5">{props.title}</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={5}>
            <Box mt={2}>
              <Typography color="textSecondary" variant="body2">
                {`${from}-${to} од ${props.count} производи`}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Hidden smUp>
              <Box mt={2} mb={2}>
                <MobileFilter />
              </Box>
            </Hidden>
            <Grid container>
              <DesktopFilter listType={props.listType} onListTypeChange={props.onListTypeChange} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DisplayHeader;
