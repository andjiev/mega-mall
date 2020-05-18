import React from 'react';

import { Box, Grid, Typography, Hidden, ButtonGroup, Button, MenuItem, FormControl, Select, FormHelperText, InputLabel } from '@material-ui/core';
import { StyledButton, StyledSelect, StyledInput } from './filter-bar.styles';

const FilterBar = () => {
  const [order, setOrder] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOrder(event.target.value as number);
  };

  return (
    <>
      <Grid container justify="flex-end" alignItems="flex-end" spacing={1}>
        <Grid item>
          <ButtonGroup color="secondary">
            <StyledButton>Производи</StyledButton>
            <StyledButton>Продавници</StyledButton>
          </ButtonGroup>
        </Grid>
        <Grid item>
          <FormControl>
            <StyledSelect value={order} onChange={handleChange}>
              <option value={1}>Цена ниска {'>'} висока</option>
              <option value={2}>Цена висока {'>'} ниска</option>
              <option value={3}>најнови</option>
            </StyledSelect>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default FilterBar;
