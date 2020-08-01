import React from 'react';

import { Grid, Box, Typography, Hidden } from '@material-ui/core';
import Card from './../../../../components/card/card';
import { StyledLink } from 'components/styled-link';
import { cards } from './category-grid.data';

const CategoryGrid = () => {
  return (
    <>
      <Box>
        <Grid container justify="space-between">
          <Grid item sm={6} xs={12}>
            <Typography variant="h3">Пребарај по категорија</Typography>
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
      <Box mt={3}>
        <Grid container spacing={3}>
          {cards.map(value => (
            <Grid item key={value.id} xs={12} md={6} lg={4}>
              <Card key={value.id} title={value.title} url={value.url} size="large">
                <Box>
                  <Typography variant="subtitle1">
                    <StyledLink href={'#'} underline="always">
                      {value.link1}
                    </StyledLink>
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="subtitle1">
                    <StyledLink href={'#'} underline="always">
                      {value.link2}
                    </StyledLink>
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="subtitle1">
                    <StyledLink href={'#'} underline="always">
                      {value.link3}
                    </StyledLink>
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CategoryGrid;
