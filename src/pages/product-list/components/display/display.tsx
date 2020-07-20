import React from 'react';
import { Box } from '@material-ui/core';
import { TopBar } from '../top-bar';
import ProductItemList from './../product-item-list/product-item-list';

const Display = () => {
  return (
    <>
      <Box p={3}>
        <Box>
          <TopBar />
        </Box>
        <Box mt={3}>
          <ProductItemList isPaging="prodList"></ProductItemList>
        </Box>
        {/* <Box mt={3}>
          <ShopsList></ShopsList>
        </Box> */}

        {/* 2 products temporary */}
        {/* <Box>
            <ProductItem />
          </Box>
          <Box>
            <ProductItem />
          </Box> */}
      </Box>
    </>
  );
};

export default Display;
