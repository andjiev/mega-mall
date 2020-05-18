import React, { useState } from 'react';

import { Grid, ButtonGroup, FormControl } from '@material-ui/core';
import { StyledButton, StyledSelect } from './filter-bar.styles';

const FilterBar = () => {
  const [order, setOrder] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOrder(event.target.value as number);
  };

  const [isToggled, setToggled] = useState(false);
  const [counterState, setCounterState] = useState(0);

  const toggleTrueFalse = () => setToggled(!isToggled);

  return (
    <>
      <Grid container justify="flex-end" alignItems="flex-end" spacing={1}>
        <Grid item>
          <ButtonGroup color="secondary">
            <StyledButton onClick={toggleTrueFalse} style={{ backgroundColor: isToggled == true ? '#BF1736' : 'white', color: isToggled == true ? 'white' : 'black' }}>
              Производи
            </StyledButton>
            <StyledButton onClick={toggleTrueFalse} style={{ backgroundColor: isToggled == false ? '#BF1736' : 'white', color: isToggled == false ? 'white' : 'black' }}>
              Продавници
            </StyledButton>
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
