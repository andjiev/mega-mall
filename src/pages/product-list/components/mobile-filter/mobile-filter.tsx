import React from 'react';

import { Box, Grid, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Button } from '@material-ui/core';
import { StyledDetails, StyledBox, StyledGrid } from './mobile-filter.styles';
import { filterData, IFilterItem } from './mobile-filter.data';

const MobileFilter = () => {
  const renderItem = (item: IFilterItem) => {
    return (
      <>
        <Box mt={1}>
          <Typography variant="h6">{item.header.title}</Typography>
        </Box>
        <Box mt={1}>
          <Grid container spacing={2}>
            {item.links.map(val => (
              <Grid item alignContent="space-between" key={val.title}>
                <Button key={val.title} variant="outlined">
                  {val.title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
    );
  };
  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <StyledBox>
            <Typography>Филтри</Typography>
          </StyledBox>
        </ExpansionPanelSummary>
        <StyledDetails>
          <Grid container spacing={2}>
            <Grid item alignContent="space-between">
              <Grid item>{filterData.map(val => renderItem(val))}</Grid>
            </Grid>
            <StyledGrid item>
              <Button>Филтрирај</Button>
            </StyledGrid>
          </Grid>
        </StyledDetails>
      </ExpansionPanel>
    </>
  );
};

export default MobileFilter;
