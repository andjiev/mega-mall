import React from 'react';
import { Box } from '@material-ui/core';

import DisplayHeader from './components/display-header/display-header';
import { ProductItemList } from './product-item-list';

const Display = () => {
  return (
    <>
      <Box p={3}>
        <Box>
          <DisplayHeader />
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
