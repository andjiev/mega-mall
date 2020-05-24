import React from 'react';

import { Box, Grid, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Button } from '@material-ui/core';
import { StyledTypography, StyledButton } from 'pages/main/components/main-slider/main-slider.style';
import { StyledDetails, StyledBox } from './mobile-filter.styles';

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
              <StyledTypography>Сортирај</StyledTypography>

              <StyledButton variant="outlined">Висока {'>'} ниска</StyledButton>
              <StyledButton variant="outlined">Ниска {'>'} висока</StyledButton>
            </Grid>
            <Grid item>
              <StyledTypography>Производител</StyledTypography>

              <StyledButton variant="outlined">Acer</StyledButton>
              <StyledButton variant="outlined">Apple</StyledButton>
              <StyledButton variant="outlined">Allienware</StyledButton>
              <StyledButton variant="outlined">Dell</StyledButton>
              <StyledButton variant="outlined">HP</StyledButton>
              <StyledButton variant="outlined">Lenovo</StyledButton>
              <StyledButton variant="outlined">Skytech Gaming</StyledButton>
              <StyledButton variant="outlined">Samsung</StyledButton>
              <StyledButton variant="outlined">Toshiba</StyledButton>
            </Grid>

            <Grid item>
              <StyledTypography>Продавници</StyledTypography>

              <StyledButton variant="outlined">Анхоч</StyledButton>
              <StyledButton variant="outlined">Сетек</StyledButton>
              <StyledButton variant="outlined">Нептун</StyledButton>
              <StyledButton variant="outlined">Нико компјутери</StyledButton>
              <StyledButton variant="outlined">Макпетрол Dell</StyledButton>
              <StyledButton variant="outlined">Техно Маркет</StyledButton>
              <StyledButton variant="outlined">Премиум компјутери</StyledButton>
              <StyledButton variant="outlined">Вортекс компјутери</StyledButton>
              <StyledButton variant="outlined">Дека електроникс</StyledButton>
              <StyledButton variant="outlined">Макс компјутери</StyledButton>
              <StyledButton variant="outlined">Електро Механика</StyledButton>
              <StyledButton variant="outlined">DDStore LTD</StyledButton>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                Филтрирај
              </Button>
            </Grid>
          </Grid>
        </StyledDetails>
      </ExpansionPanel>
    </>
  );
};

export default MobileFilter;
