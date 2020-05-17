import React from 'react';

import { Box, Grid, Typography, Hidden, ButtonGroup, Button, MenuItem, FormControl, Select, FormHelperText, InputLabel } from '@material-ui/core';
import { StyledButton } from './filter-bar.styles';

const FilterBar = () => {
  return (
    <>
      <Box>
        <ButtonGroup color="secondary" aria-label="outlined secondary button group">
          <StyledButton>Производи</StyledButton>
          <StyledButton>Продавници</StyledButton>
        </ButtonGroup>

        <FormControl style={{ width: '176px', height: '40px' }}>
          <InputLabel id="demo-simple-select-filled-label">Цена ниска {'>'}висока</InputLabel>
          <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} style={{ border: '1px solid #0D1440' }}>
            <MenuItem value="" disabled></MenuItem>
            <MenuItem value="0">Ниска</MenuItem>
            <MenuItem value="1">Ниско висока</MenuItem>
            <MenuItem value="2">Високо ниска</MenuItem>
            <MenuItem value="3">Висока</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default FilterBar;
