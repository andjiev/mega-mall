import React from 'react';

import { Grid, Box, Typography, Hidden } from '@material-ui/core';
import Card from './../../../../components/card/card';
import { StyledLink } from 'components/styled-link';
import { cards } from './category-grid.data';
import { translate } from 'lib/translate';

const CategoryGrid = () => {
  return (
    <>
      <Box>
        <Grid container justify="space-between">
          <Grid item sm={6} xs={12}>
            <Typography variant="h5">{translate('MegaMall_Categorygrid_Search', 'Пребарај по категорија')}</Typography>
          </Grid>
          <Hidden xsDown>
            <Grid container item xs={6} justify="flex-end" alignItems="flex-end">
              <Box component="span">
                {' '}
                <Typography variant="body2">
                  {/* TODO here prikazi gi site needs to be #355C7C this color */}
                  {translate('MegaMall_Categorygrid_Show', 'прикажи ги сите >')}
                </Typography>
              </Box>
            </Grid>
          </Hidden>

          <Hidden smUp>
            <Grid container item xs={12} alignItems="flex-end">
              <Box component="span" mt={1}>
                <Typography variant="body2">
                  {/* TODO here prikazi gi site needs to be #355C7C this color */}
                  {translate('MegaMall_Categorygrid_Show', 'прикажи ги сите >')}
                </Typography>
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
                    <StyledLink href={'#'}>{value.link1}</StyledLink>
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="subtitle1">
                    <StyledLink href={'#'}>{value.link2}</StyledLink>
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="subtitle1">
                    <StyledLink href={'#'}>{value.link3}</StyledLink>
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
