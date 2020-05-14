import React from 'react';
import SubcategoryCard from '../subcategory-card/subcategory-card';
import { Box, Typography, Grid } from '@material-ui/core';
import { cardData } from '../subcategory-card/subcategory-card.data';

const Display = () => {
  return (
    <>
      <Box p={3}>
        <Box>
          <Typography variant="h5">Технологија</Typography>
        </Box>
        <Box mt={3}>
          <Grid container spacing={2}>
            {cardData.map(value => (
              <Grid item key={value.id} xs={12} md={6} lg={3}>
                <Box p={1}>
                  <SubcategoryCard key={value.id} url={value.url} title={value.title} link={value.link}></SubcategoryCard>
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
