import React from 'react';

import { Box, Grid } from '@material-ui/core';
import { TopBar } from '../top-bar';
import { ProductItem } from '../product-item';

const Display = () => {
  return (
    <>
      <Box p={3}>
        <Box>
          <TopBar />
        </Box>
        <Box mt={3}>
          {/* 2 products temporary */}
          <Box>
            <ProductItem />
          </Box>
          <Box>
            <ProductItem />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Display;
