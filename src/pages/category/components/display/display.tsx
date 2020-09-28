import React from 'react';

import SubcategoryCard from '../subcategory-card/subcategory-card';
import { Box, Typography, Grid } from '@material-ui/core';
import { MenuItem } from 'lib/data';

interface IProps {
  categoryItem: MenuItem;
}

const Display = (props: IProps) => {
  return (
    <>
      <Box p={3}>
        <Box>
          <Typography variant="h5">{props.categoryItem.title}</Typography>
        </Box>
        <Box mt={3}>
          <Grid container justify="space-between" spacing={2}>
            {props.categoryItem.children &&
              props.categoryItem.children.map(child => (
                <Grid item key={child.id} xs={12} sm={6} md={6} lg={3}>
                  <Box p={1}>
                    <SubcategoryCard title={child.title} path={child.link}></SubcategoryCard>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Display;
