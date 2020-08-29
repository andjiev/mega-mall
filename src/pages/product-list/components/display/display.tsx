import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from 'index';
import ApplicationState from 'store/application-store';

import { Box, ListItem, List, Link } from '@material-ui/core';
import DisplayHeader from './components/display-header/display-header';

import { ProductItem } from './product-item';
import { generatePath } from 'react-router';
import { ROUTES } from 'consts';
import { StyledBox, StyledPagination } from './display.styles';
import { getProducts, changePageOptions } from 'store/product-list-store';
import { PageOptions } from 'lib/models';
import { displayData } from './product-item-list/product-item-list.data';

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
                  <Link key={product.id} href={generatePath(ROUTES.PRODUCT, { id: product.id })}>
                    <ListItem button disableGutters={true} divider={true}>
                      <StyledBox mt={1} mb={1}>
                        <ProductItem key={product.id} img={product.imageSource} title={product.name} price={product.price} description={''} logo={''} link={product.link} />
                      </StyledBox>
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Box>
          <Box>
            <StyledPagination count={props.count} page={props.options.page} onChange={(_, value: number) => props.onOptionsChange({ ...props.options, page: value })} />
          </Box>
        </Box>
      ) : (
        <Box p={3}>
          <Box>
            <DisplayHeader />
          </Box>
          <Box mt={3}>
            <List component={'ul'}>
              {displayData.map(product => {
                return (
                  <Link key={product.id} href={generatePath(ROUTES.PRODUCT, { id: product.id })}>
                    <ListItem button disableGutters={true} divider={true}>
                      <StyledBox mt={1} mb={1}>
                        <ProductItem key={product.id} img={product.img} title={product.title} price={product.price} description={''} logo={''} link={product.link} />
                      </StyledBox>
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Box>
          <Box>
            <StyledPagination count={props.count} page={props.options.page} onChange={(_, value: number) => props.onOptionsChange({ ...props.options, page: value })} />
          </Box>
        </Box>
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
