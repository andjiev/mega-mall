import React from 'react';
import { Box, Grid, Typography, Link, Hidden } from '@material-ui/core';
import Card from './../../../../components/card/card';
import { cards } from './product-grid.data';

const ProductGrid = () => {
  return (
    <>
      <Box>
        <Grid container justify="space-between">
          <Grid item sm={6} xs={12}>
            <Typography variant="h5">Најнови производи</Typography>
          </Grid>
          <Hidden xsDown>
            <Grid container item xs={6} justify="flex-end" alignItems="flex-end">
              <Box component="span">прикажи ги сите {' >'}</Box>
            </Grid>
          </Hidden>

          <Hidden smUp>
            <Grid container item xs={12} alignItems="flex-end">
              <Box component="span" mt={1}>
                прикажи ги сите {' >'}
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
      <Box mt={3} pb={3}>
        <Grid container direction="row" justify="center" alignItems="stretch" spacing={2}>
          {cards.map(res => (
            <Grid item key={res.id} xs={12} md={3}>
              <Link href={res.url}>
                <Card key={res.id} title={res.title} url={res.url} size="small">
                  <span>{res.price}</span>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProductGrid;
