import React, { useState } from 'react';

import { Grid, ButtonGroup, FormControl, Hidden, Typography } from '@material-ui/core';
import { StyledButton, StyledSelect } from './desktop-filter.styles';
import { OrderTypes } from 'lib/enums';
import { getTextForOrderType } from './desktop-filter.utils';

const DesktopFilter = () => {
  const [orderType, setOrderType] = React.useState(OrderTypes.PriceAscending);
  const [isToggled, setToggled] = useState(false);

  const renderBar = () => {
    return (
      <ButtonGroup color="secondary">
        <StyledButton isToggled={!isToggled} onClick={() => setToggled(!isToggled)}>
          <Typography variant="button">Производи</Typography>
          {/* ADD TRANSLATION FOR THE BUTTON TEXT !!! */}
        </StyledButton>
        <StyledButton isToggled={isToggled} onClick={() => setToggled(!isToggled)}>
          <Typography variant="button">Продавници</Typography>
        </StyledButton>
      </ButtonGroup>
    );
  };

  return (
    <>
      <Hidden xsDown>
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
        </Grid>
      </Hidden>
    </>
  );
};

export default DesktopFilter;
