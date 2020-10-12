import React, { useState } from 'react';

import { Grid, FormControl, Hidden, Typography } from '@material-ui/core';
import { StyledButton, StyledSelect, StyledButtonGroup } from './desktop-filter.styles';
import { OrderTypes, ListTypes } from 'lib/enums';
import { getTextForOrderType } from './desktop-filter.utils';
import { translate } from 'lib/translate';
import { AppDispatch } from 'index';
import ApplicationState from 'store/application-state';
import { changePageOptions } from 'store/product-list-store';
import { PageOptions } from 'lib/models';
import { connect } from 'react-redux';

interface IProps {
  listType: ListTypes;
  options: PageOptions;
  onListTypeChange: (type: ListTypes) => void;
  onOptionsChange: (options: PageOptions) => void;
}

const DesktopFilter = (props: IProps) => {
  let [orderType, setOrderType] = useState(OrderTypes.Latest);

  const changeOrderType = (event: React.ChangeEvent<{ value: string }>) => {
    setOrderType(+event.target.value);
    props.onOptionsChange({ ...props.options, order: +event.target.value });
  };

  const renderBar = () => {
    return (
      <StyledButtonGroup color="primary">
        <StyledButton isToggled={props.listType === ListTypes.Products} onClick={() => props.onListTypeChange(ListTypes.Products)}>
          <Typography variant="button">{translate('MegaMall_DesktopFilter_Products', 'Производи')}</Typography>
        </StyledButton>
        <StyledButton isToggled={props.listType === ListTypes.Stores} onClick={() => props.onListTypeChange(ListTypes.Stores)}>
          <Typography variant="button">{translate('MegaMall_DesktopFilter_Shops', 'Продавници')}</Typography>
        </StyledButton>
      </StyledButtonGroup>
    );
  };

  return (
    <>
      <Hidden xsDown>
        <Grid container justify="flex-end" alignItems="flex-end" alignContent="flex-end" spacing={2}>
          <Grid item>{renderBar()}</Grid>
          <Grid item>
            <FormControl>
              <StyledSelect
                disableUnderline
                value={orderType}
                onChange={(event: React.ChangeEvent<{ value: string }>) => {
                  changeOrderType(event);
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

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onOptionsChange: (options: PageOptions) => {
    dispatch(changePageOptions(options));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    options: state.productList.options
  };
};

const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(DesktopFilter);

export default DisplayContainer;
