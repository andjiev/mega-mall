import React, { useState } from 'react';

import { Grid, ButtonGroup, FormControl, Hidden, Typography } from '@material-ui/core';
import { StyledButton, StyledSelect, StyledButtonGroup } from './desktop-filter.styles';
import { OrderTypes } from 'lib/enums';
import { getTextForOrderType } from './desktop-filter.utils';
import { translate } from 'lib/translate';

const DesktopFilter = () => {
  const [orderType, setOrderType] = React.useState(OrderTypes.PriceAscending);
  const [isToggled, setToggled] = useState(false);

  const renderBar = () => {
    return (
      <StyledButtonGroup color="primary">
        <StyledButton isToggled={!isToggled} onClick={() => setToggled(!isToggled)}>
          <Typography variant="button">{translate('MegaMall_DesktopFilter_Products', 'Производи')}</Typography>
          {/* ADD TRANSLATION FOR THE BUTTON TEXT !!! */}
        </StyledButton>
        <StyledButton isToggled={isToggled} onClick={() => setToggled(!isToggled)}>
          <Typography variant="button">{translate('MegaMall_DesktopFilter_Shops', 'Продавници')}</Typography>
        </StyledButton>
      </StyledButtonGroup>
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
                disableUnderline
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
          <Grid item xs={12}>
            {renderBar()}
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};

export default DesktopFilter;
