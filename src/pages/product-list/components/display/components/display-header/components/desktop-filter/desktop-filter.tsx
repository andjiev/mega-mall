import React, { useState } from 'react';

import { Grid, ButtonGroup, FormControl, Hidden, Typography } from '@material-ui/core';
import { StyledButton, StyledSelect, StyledButtonGroup } from './desktop-filter.styles';
import { OrderTypes, ListTypes } from 'lib/enums';
import { getTextForOrderType } from './desktop-filter.utils';
import { translate } from 'lib/translate';
import { AppDispatch } from 'index';
import ApplicationState from 'store/application-state';
import { connect } from 'react-redux';
import { listenerCount } from 'process';

interface IProps {
  listType: ListTypes;
  onListTypeChange: (type: ListTypes) => void;
}

const DesktopFilter = (props: IProps) => {
  const { onListTypeChange } = props;
  const [orderType, setOrderType] = React.useState(OrderTypes.PriceAscending);
  let [localListType, setLocalListType] = useState(props.listType);

  const handleClick = (type: ListTypes) => {
    onListTypeChange(type);
    setLocalListType(type);
  };

  const renderBar = () => {
    return (
      <StyledButtonGroup color="primary">
        {console.log('isToggledProducts', localListType === ListTypes.Products)}
        <StyledButton isToggled={localListType === ListTypes.Products} onClick={() => handleClick(ListTypes.Products)}>
          <Typography variant="button">{translate('MegaMall_DesktopFilter_Products', 'Производи')}</Typography>
        </StyledButton>
        {console.log('isToggledStores', localListType === ListTypes.Stores)}
        <StyledButton isToggled={localListType === ListTypes.Stores} onClick={() => handleClick(ListTypes.Stores)}>
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
