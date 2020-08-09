import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppDispatch } from 'index';
import ApplicationState from 'store/application-store';

import { Box, ListItem, List } from '@material-ui/core';
import DisplayHeader from './components/display-header/display-header';

import { ProductItem } from './product-item';
import { generatePath } from 'react-router';
import { ROUTES } from 'consts';
import { StyledBox, StyledPagination } from './display.styles';
import { getProducts, changePageOptions } from 'store/product-list-store';
import { PageOptions } from 'lib/models';

interface IProps {
  data: Models.Product.Model[];
  count: number;
  options: PageOptions;

  onInit: () => void;
  onOptionsChange: (options: PageOptions) => void;
}

const Display = (props: IProps) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <>
      {props.data && props.data.length ? (
        <Box p={3}>
          <Box>
            <DisplayHeader />
          </Box>
          <Box mt={3}>
            <List component={'ul'}>
              {props.data.map(product => {
                return (
                  <ListItem key={product.id} button component={RouterLink} to={generatePath(ROUTES.PRODUCT, { id: product.id })} disableGutters={true} divider={true}>
                    <StyledBox mt={1} mb={1}>
                      <ProductItem key={product.id} img={product.imageSource} title={product.name} price={product.price} description={''} logo={''} link={product.link} />
                    </StyledBox>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box>
            <StyledPagination count={props.count} page={props.options.page} onChange={(_, value: number) => props.onOptionsChange({ ...props.options, page: value })} />
          </Box>
        </Box>
      ) : (
        <>Loading data..</>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onInit: () => {
    dispatch(getProducts());
  },
  onOptionsChange: (options: PageOptions) => {
    dispatch(changePageOptions(options));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    data: state.productList.data,
    count: state.productList.count,
    options: state.productList.options
  };
};

const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(Display);

export default DisplayContainer;
