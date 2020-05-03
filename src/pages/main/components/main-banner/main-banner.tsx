import React from 'react';
import { Grid, Card } from '@material-ui/core';

const MainBanner = () => {
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12} md={6} lg={6}></Grid>
      </Grid>
    </>
  );
};

export default MainBanner;
