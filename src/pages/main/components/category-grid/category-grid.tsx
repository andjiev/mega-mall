import React from 'react';

import { Grid, Box, Typography, Hidden } from '@material-ui/core';
import Card from './../../../../components/card/card';
import { StyledLink } from 'components/styled-link';
import { cards } from './category-grid.data';
import { translate } from 'lib/translate';
import { MenuItem } from 'lib/data';
import { connect } from 'react-redux';
import ApplicationState from 'store/application-state';
import { AppDispatch } from 'index';

interface ICategoryGrid {
  menuItems: MenuItem[];
}

const CategoryGrid = (props: ICategoryGrid) => {
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
          {props.menuItems.slice(0, 6).map(item => (
            <Grid item key={item.id} xs={12} md={6} lg={4}>
              <Card key={item.id} title={item.title} url={item.imageSrc} size="large">
                {item.children &&
                  item.children.slice(0, 3).map((child, index) => {
                    return (
                      <Box key={index} mt={index > 0 ? 2 : 0}>
                        <Typography variant="subtitle1">
                          <StyledLink placeToRender="card" href={child.link}>
                            {child.title}
                          </StyledLink>
                        </Typography>
                      </Box>
                    );
                  })}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

const mapDisptachToProps = (disptach: AppDispatch) => ({});

const mapStateToProps = (state: ApplicationState) => {
  return {
    menuItems: state.shared.menuItems
  };
};

const CategoryGridContainer = connect(() => mapStateToProps, mapDisptachToProps)(CategoryGrid);

export default CategoryGridContainer;
