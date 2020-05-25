import React from 'react';

import { Box, Grid, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Button } from '@material-ui/core';
import { StyledTypography, StyledButton } from 'pages/main/components/main-slider/main-slider.style';
import { StyledDetails, StyledBox } from './mobile-filter.styles';
import { filterData, sortData } from './mobile-filter.data';

const MobileFilter = () => {
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
              {filterData.map(value => (
                <Grid item key={value.id}>
                  <Box key={value.id} m={1}>
                    <StyledTypography key={value.id}>{value.title}</StyledTypography>
                    <StyledButton key={value.id}>{value.link1}</StyledButton>
                    <StyledButton key={value.id}>{value.link2}</StyledButton>
                    <StyledButton key={value.id}>{value.link3}</StyledButton>
                    <StyledButton key={value.id}>{value.link4}</StyledButton>
                    <StyledButton key={value.id}>{value.link5}</StyledButton>
                    <StyledButton key={value.id}>{value.link6}</StyledButton>
                    <StyledButton key={value.id}>{value.link7}</StyledButton>
                    <StyledButton key={value.id}>{value.link8}</StyledButton>
                    <StyledButton key={value.id}>{value.link9}</StyledButton>
                    <StyledButton key={value.id}>{value.link10}</StyledButton>
                    <StyledButton key={value.id}>{value.link11}</StyledButton>
                    <StyledButton key={value.id}>{value.link12}</StyledButton>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </StyledDetails>
      </ExpansionPanel>
    </>
  );
};

export default MobileFilter;
