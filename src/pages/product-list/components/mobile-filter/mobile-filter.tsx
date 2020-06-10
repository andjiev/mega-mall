import React from 'react';

import { Box, Grid, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Button } from '@material-ui/core';
import { StyledDetails, StyledBox, StyledGrid, StyledButton } from './mobile-filter.styles';
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
      {/* not sure about this i added right margin because there was padding on the left so it will stay centered  */}
      <Box mr={3}>
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
              <StyledButton variant="contained" color="secondary">
                Филтрирај
              </StyledButton>
            </Grid>
          </StyledDetails>
        </ExpansionPanel>
      </Box>
    </>
  );
};

export default MobileFilter;
