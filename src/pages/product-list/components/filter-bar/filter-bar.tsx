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

        <FormControl>
          <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} style={{ border: '1px solid #0D1440' }}>
            <MenuItem value="" disabled>
              Цена ниска висока
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default FilterBar;
