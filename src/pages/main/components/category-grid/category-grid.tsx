import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from './../../../../components/card/card';

export default function SpacingGrid() {
  return (
    <Grid container>
      <Grid container direction="row" xs={12}>
        <h3>Пребарај по категорија</h3>
      </Grid>
      <Grid container direction="row" xs={12} spacing={5} justify="center" alignContent="space-around">
        {[0, 1, 2, 3, 4, 5].map(value => (
          <Grid item key={value} xs={12} md={6} lg={4}>
            <Card></Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
