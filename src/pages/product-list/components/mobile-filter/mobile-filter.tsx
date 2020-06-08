import React from 'react';

import { Box, Grid, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Button } from '@material-ui/core';
import { StyledTypography, StyledButton } from 'pages/main/components/main-slider/main-slider.style';
import { StyledDetails, StyledBox } from './mobile-filter.styles';
import { filterData, IFilterItem } from './mobile-filter.data';

const MobileFilter = () => {
  const renderItem = (item: IFilterItem) => {
    return (
      <>
        <Box mt={1}>
          <Typography variant="h6">{item.header.title}</Typography>
        </Box>
        <Box mt={1}>
          {item.links.map(val => (
            <StyledButton key={val.title} variant="outlined">
              {val.title}
            </StyledButton>
          ))}
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
          </Grid>
        </StyledDetails>
      </ExpansionPanel>
    </>
  );
};

export default MobileFilter;
