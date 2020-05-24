import React, { useState } from 'react';

import { Grid, ButtonGroup, FormControl, Hidden } from '@material-ui/core';
import { StyledButton, StyledSelect } from './filter-bar.styles';
import { OrderTypes } from 'lib/enums';
import { getTextForOrderType } from './filter-bar.utils';

const FilterBar = () => {
  const [orderType, setOrderType] = React.useState(OrderTypes.PriceAscending);
  const [isToggled, setToggled] = useState(false);

  const renderBar = () => {
    return (
      <ButtonGroup color="secondary">
        <StyledButton isToggled={!isToggled} onClick={() => setToggled(!isToggled)}>
          Производи
        </StyledButton>
        <StyledButton isToggled={isToggled} onClick={() => setToggled(!isToggled)}>
          Продавници
        </StyledButton>
      </ButtonGroup>
    );
  };

  return (
    <>
      <Hidden mdDown>
        <Grid container justify="flex-end" alignItems="flex-end" alignContent="flex-end" spacing={1}>
          <Grid item>{renderBar()}</Grid>
          <Grid item>
            <FormControl>
              <StyledSelect
                value={orderType}
                onChange={(event: React.ChangeEvent<{ value: string }>) => {
                  setOrderType(+event.target.value);
                }}
              >
                {Object.keys(OrderTypes)
                  .filter(key => !isNaN(Number(key)))
                  .map(value => {
                    return (
                      <option key={value} value={value}>
                        {getTextForOrderType(+value)}
                      </option>
                    );
                  })}
              </StyledSelect>
            </FormControl>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid container justify="center" alignItems="center" alignContent="center" spacing={1}>
          <Grid item>{renderBar()}</Grid>
          <Hidden mdDown>
            <Grid item>
              <FormControl>
                <StyledSelect
                  value={orderType}
                  onChange={(event: React.ChangeEvent<{ value: string }>) => {
                    setOrderType(+event.target.value);
                  }}
                >
                  {Object.keys(OrderTypes)
                    .filter(key => !isNaN(Number(key)))
                    .map(value => {
                      return (
                        <option key={value} value={value}>
                          {getTextForOrderType(+value)}
                        </option>
                      );
                    })}
                </StyledSelect>
              </FormControl>
            </Grid>
          </Hidden>
        </Grid>
      </Hidden>
    </>
  );
};

export default FilterBar;
